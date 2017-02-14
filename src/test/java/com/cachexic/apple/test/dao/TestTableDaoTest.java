package com.cachexic.apple.test.dao;

import com.cachexic.apple.common.core.entity.OrderField;
import com.cachexic.apple.common.junit.SpringJunitTest;
import com.cachexic.apple.common.utils.DateUtils;
import com.cachexic.apple.test.entity.TestTable;
import com.cachexic.apple.test.entity.TestTableQuery;
import com.google.common.collect.Lists;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

/**
 * @description: 测试环境搭建
 * @author: tangmin
 * @date: 2017-02-13 22:17:32
 * @version: 1.0
 */
public class TestTableDaoTest extends SpringJunitTest {
    private Logger logger = Logger.getLogger(TestTableDaoTest.class);

    @Autowired
    private TestTableDao dao;

    /**
     * 测试日志配置
     */
    @Test
    public void testLog() {
        logger.debug("你好debug!!!");
        logger.info("你好info!!!");
        logger.debug("你好debug!!!");
        logger.info("你好info!!!");
        logger.debug("你好debug!!!");
        logger.info("你好info!!!");


        logger.warn("你好warn!!!");
        logger.error("你好error!!!");
    }

    /*****************************************************dao************************************************/

    /**
     * dao插入
     *
     * @throws ParseException
     */
    @Rollback(false)
    @Test
    public void daoTestInsert() throws ParseException {
        TestTable testTable = getTestTable("1995-01-01", 25, "王五");

        System.out.println(":::id::" + dao.insert(testTable));
    }

    private TestTable getTestTable(String source, int age, String 王五) throws ParseException {
        TestTable testTable = new TestTable();

        Date date = DateUtils.SHORT_DATE_FORMAT.parse(source);
        testTable.setAge(age);
        testTable.setName(王五);
        testTable.setBirthday(date);
        return testTable;
    }

    /**
     * 批量插入
     *
     * @throws ParseException
     */
    @Rollback(false)
    @Test
    public void daoTestInsertBatch() throws ParseException {
        long startTime = System.nanoTime();
        List<TestTable> list = Lists.newArrayList();
        for (int i = 1; i < 10001; i++) {
            TestTable entity = getTestTable("1990-01-01", 18, "张三" + i);
            list.add(entity);
        }
     //   dao.insertBatch(list);
        System.out.println(System.nanoTime() - startTime);
        /*1秒=1000豪秒
		1毫秒=1000微秒
		1微秒=1000毫微秒
		所以1秒=1000*1000*1000=1000000000毫微秒*/
        //2164967612毫微秒=2.16秒  第一次
        //2327620438   2.3秒  第2次
        //2157578330   2.15秒 第3次
    }

    /**
     * 批量插入(循环10000)
     *
     * @throws ParseException
     */
    @Rollback(false)
    @Test
    public void daoTestInsertBatchFor() throws ParseException {
        long startTime = System.nanoTime();
        for (int i = 1; i < 10001; i++) {
            TestTable entity = getTestTable("1990-01-01", 18, "李四" + i);
            dao.insert(entity);
        }
        System.out.println(System.nanoTime() - startTime);
        //8,299,221,344毫微秒=8.29秒  第一次
        //8493227388   8.49秒  第2次
        //8637662643   8.63秒 第3次
    }


    /**
     * dao根据id查询
     */
    @Test
    public void daoTestSelectById() {
        long startTime = System.nanoTime();
        TestTable entity = dao.selectById(1l);
        System.out.println(System.nanoTime() - startTime);
        System.out.println(entity);

    }

    /**
     * dao根据ids批量查询
     */
    @Test
    public void daoTestSelectByIds() {

        List<Long> ids = Lists.newArrayList(1l, 2l, 3l);
        List<TestTable> selectByIds = dao.selectByIds(ids);
        System.out.println(selectByIds);
    }

    /**
     * dao更新
     *
     * @throws ParseException
     */
    @Rollback(false)
    @Test
    public void daoTestUpdate() throws ParseException {
        TestTable entity = dao.selectById(3l);

        Date date = DateUtils.SHORT_DATE_FORMAT.parse("1998-08-08");
        entity.setAge(15);
        entity.setName("张三111");
        entity.setBirthday(date);

        entity.setDeleted(false);

        dao.update(entity);
    }

    /**
     * dao单条记录根据id彻底删除
     */
    @Rollback(false)
    @Test
    public void daoTestDeleteById() {
        dao.deleteById(1l);
    }

    /**
     * dao多条记录根据ids彻底删除
     */
    @Rollback(true)
    @Test
    public void daoTestDeleteByIds() {
        List<Long> ids = Lists.newArrayList(1l, 2l, 3l);
        dao.deleteByIds(ids);
    }

    /**
     * 查询获取所有记录
     */
    @Test
    public void daoTestSelectList() {
        TestTableQuery query = new TestTableQuery();
        query.setDeleted(1);

     /*   //一、单字段排序
        query.setOrderField("id");
        query.setOrderDirection("desc");//也可以不设，用默认*/
        //二、多字段排序
        //方式1
      /*  List<OrderField> orderFields = Lists.newArrayList();
        orderFields.add(new OrderField("name", "desc"));
        orderFields.add(new OrderField("sex", "asc"));
        query.setOrderFields(orderFields);*/
        //方式2
        query.getOrderFields().add(new OrderField("name", "desc"));
        query.getOrderFields().add(new OrderField("sex", "asc"));

        List<TestTable> entitys = dao.selectList(query);
        System.out.println(":::::::::" + entitys);
    }

    @Test
    public void daoTestSelectListPage() {
        TestTableQuery query = new TestTableQuery();
        query.setDeleted(0);
        query.getOrderFields().add(new OrderField("name", "desc"));
        query.getOrderFields().add(new OrderField("sex", "asc"));
        query.setPageCurrent(1l);
        query.setPageSize(10l);
        System.out.println(":::::::::" + dao.selectListPage(query));
    }

    /**
     * 总记录
     */
    @Test
    public void daoTestSelectListTotal() {
        TestTableQuery query = new TestTableQuery();
        query.setDeleted(1);
        System.out.println(":::::::::" + dao.selectListTotal(query));
    }
}