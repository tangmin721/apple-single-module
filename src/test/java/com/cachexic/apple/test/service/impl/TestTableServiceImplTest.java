package com.cachexic.apple.test.service.impl;

import com.alibaba.fastjson.JSON;
import com.cachexic.apple.common.junit.SpringJunitTest;
import com.cachexic.apple.common.utils.DateUtils;
import com.cachexic.apple.test.entity.TestTable;
import com.cachexic.apple.test.entity.TestTableQuery;
import com.cachexic.apple.test.service.TestTableService;
import com.google.common.collect.Lists;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

/**
 * @Description:
 * @author: tangmin
 * @date: 2017年02月14日 13:47
 * @version: 1.0
 */
public class TestTableServiceImplTest extends SpringJunitTest {

    @Autowired
    private TestTableService service;

    @Test
    public void selectMaxSeq() throws Exception {
        System.out.println(service.selectMaxSeq());
    }

    @Test
    public void checkNameExit() throws Exception {
        TestTable testTable = new TestTable();

        Date date = DateUtils.SHORT_DATE_FORMAT.parse("1990-01-01");
        testTable.setAge(28);
        testTable.setName("未央");
        testTable.setBirthday(date);
        //testTable.setSex(1);
        Boolean e = service.isNameExit(testTable);
        System.out.println(e);
    }

    @Test
    @Rollback(false)
    public void saveOrUpdate() throws Exception {
        TestTable testTable = new TestTable();

        Date date = DateUtils.SHORT_DATE_FORMAT.parse("1990-01-01");
        testTable.setAge(28);
        testTable.setName("未央21");
        testTable.setBirthday(date);
        testTable.setSex(1);
        System.out.println("entityId:"+ service.saveOrUpdate(testTable));
    }

    @Test
    @Rollback(false)
    public void saveOrUpdateUpdate() throws Exception {
        TestTable testTable = service.selectById(3l);

        Date date = DateUtils.SHORT_DATE_FORMAT.parse("1990-01-01");
        testTable.setAge(28);
        testTable.setName("未央888");
        testTable.setBirthday(date);
        testTable.setSex(1);
        System.out.println("entityId:"+ service.saveOrUpdate(testTable));
    }

    /*********************************************service***************************************************************/

    /**
     * 测试插入，异常捕获，日志打印
     */
    @Rollback(false)
    @Test
    public void insert(){
        try {
            TestTable testTable = new TestTable();
            Date date = DateUtils.SHORT_DATE_FORMAT.parse("1991-01-01");
            testTable.setAge(181);
            testTable.setName("张三nv");
            testTable.setSex(1);
            testTable.setBirthday(date);

            System.out.println(":::id::"+service.insert(testTable));
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage());
        }
    }

    @Rollback(false)
    @Test
    public void insertBatch(){
        try {
            List<TestTable> list = Lists.newArrayList();
            for(int i=0;i<100;i++){
                TestTable entity = new TestTable();
                Date date = DateUtils.SHORT_DATE_FORMAT.parse("1991-01-01");
                entity.setAge(18);
                entity.setSex(0);
                entity.setName("李四"+i);
                entity.setBirthday(date);
                list.add(entity);
            }
      //      Long insertBatch = service.insertBatch(list);
       //     System.out.println(insertBatch);
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void selectById(){
        System.out.println(service.selectById(20003l));
    }

    @Test
    public void selectByIds(){
        List<Long> ids = Lists.newArrayList(1l,2l,3l,4l);
        System.out.println(service.selectByIds(ids));
    }

    @Rollback(false)
    @Test
    public void update(){
        TestTable entity = service.selectById(6l);
        entity.setName("update:"+entity.getName());
        entity.setAge(5+entity.getAge());
        service.update(entity);
    }

    @Rollback(false)
    @Test
    public void deleteById(){
        System.out.println(service.deleteById(110l));
    }

    @Rollback(false)
    @Test
    public void deleteByIds(){
        List<Long> ids = Lists.newArrayList(119l,116l,117l,118l);
        System.out.println(service.deleteByIds(ids));
    }

    @Rollback(true)
    @Test
    public void removeById(){
        System.out.println(service.removeById(11l));
    }

    @Rollback(true)
    @Test
    public void removeByIds(){
        List<Long> ids = Lists.newArrayList(108l,109l,103l,104l);
        System.out.println(service.removeByIds(ids));
    }


    @Test
    public void selectList(){
        TestTableQuery query = new TestTableQuery();
        System.out.println(service.selectList(query));
    }

    @Test
    public void selectListPage(){
        TestTableQuery query = new TestTableQuery();
        System.out.println(service.selectListPage(query));
    }

    @Test
    public void selectListTotal(){
        TestTableQuery query = new TestTableQuery();
        query.setDeleted(1);
        System.out.println(service.selectListTotal(query));
    }

    @Test
    public void selectListPagination(){
        TestTableQuery query = new TestTableQuery();
        query.setPageCurrent(1l);
        query.setPageSize(5l);
        System.out.println(JSON.toJSONString(service.selectListPagination(query)));
    }

    /******************************************测试validate*********************************************************/

    @Test
    @Rollback(false)
    public void testTra(){
        service.testTra();
    }

    /**
     * 测试插入，异常捕获，日志打印
     */
    @Test
    @Rollback(false)
    public void insert2(){
        TestTable testTable = new TestTable();
        testTable.setAge(19);
        testTable.setName("张三nv");
        testTable.setSex(1);

        System.out.println(":::id::"+service.insert(testTable));

    }


}