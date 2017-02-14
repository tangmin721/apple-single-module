package com.cachexic.apple.test.service;

import com.cachexic.apple.common.core.service.BaseService;
import com.cachexic.apple.test.entity.TestTable;
import com.cachexic.apple.test.entity.TestTableQuery;

/**
 * 用户管理
 * @author tangmin
 * @date 2017-02-14 13:23:39
 */
public interface TestTableService extends BaseService<TestTable, TestTableQuery>{
	/**
	 * 获取seq
	 * @return Integer
	 */
	Integer selectMaxSeq();
	
	/**
	 * 校验是否存在
	 * @param 
	 * @return
	 */
	Boolean isNameExit(TestTable entity);
	
	/**
	 * 保存或添加
	 * @param entity
	 * @return entity.id
	 */
	Long saveOrUpdate(TestTable entity);

	/**
	 * 测试事务
	 * @return
	 */
	TestTable testTra();
}
