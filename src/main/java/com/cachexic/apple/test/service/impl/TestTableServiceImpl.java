package com.cachexic.apple.test.service.impl;

import com.cachexic.apple.common.core.dao.BaseDao;
import com.cachexic.apple.common.core.service.impl.BaseServiceImpl;
import com.cachexic.apple.common.exception.ValidateOtherException;
import com.cachexic.apple.test.dao.TestTableDao;
import com.cachexic.apple.test.entity.TestTable;
import com.cachexic.apple.test.entity.TestTableQuery;
import com.cachexic.apple.test.service.TestTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 用户管理
 * @author tangmin
 * @date 2017-02-14 13:23:39
 */
@Service("testTableService")
public class TestTableServiceImpl extends BaseServiceImpl<TestTable,TestTableQuery> implements TestTableService{
	@Autowired
	private TestTableDao dao;

	@Override
	protected BaseDao<TestTable, TestTableQuery> dao() {
		return this.dao;
	}
	
	/**
	 * 获取seq
	 */
	@Override
	public Integer selectMaxSeq() {
		Integer selectMaxSeq = this.dao.selectMaxSeq();
		if(selectMaxSeq!=null){
			return selectMaxSeq;
		}
		return 0;
	}

	/**
	 * 校验entity是否可修改（code是否存在）
	 */
	@Override
	public Boolean isNameExit(TestTable entity) {
		Long count = this.dao.selectCheckNameExit(entity.getName(), entity.getId());
        return count > 0;
    }
	
	/**
	 * 新增or修改
	 * @return entity.id
	 */
	@Override
	public Long saveOrUpdate(TestTable entity) {
		Long id = entity.getId();
		if(isNameExit(entity)){
			if(id ==null){
				throw new ValidateOtherException(ValidateOtherException.INSERT_FAILD,"名称已经存在，新增失败");
			}else {
				throw new ValidateOtherException(ValidateOtherException.UPDATE_FAILD,"名称已经存在，修改失败");
			}
		}
		if(id ==null){
			return this.insert(entity);
		}else {
			this.update(entity);
			return id;
		}
	}

	@Override
	//@Transactional(propagation= Propagation.REQUIRED,rollbackFor={RuntimeException.class, Exception.class})
	//@Transactional
	public TestTable testTra() {

		TestTable testTable2 = new TestTable();
		testTable2.setAge(18);
		testTable2.setName("张三nv2");
		testTable2.setSex(1);
		//testTable.setBirthday(date);

		System.out.println(":::id::"+this.insert(testTable2));

		TestTable testTable = new TestTable();
		testTable.setAge(181);
		testTable.setName("张三nv1");
		testTable.setSex(1);
		//testTable.setBirthday(date);

		System.out.println(":::id::"+this.insert(testTable));
		return null;
	}

}