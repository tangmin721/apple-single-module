package com.cachexic.apple.test.dao;

import com.cachexic.apple.common.core.dao.BaseDao;
import com.cachexic.apple.common.mybatis.annotation.MybatisDao;
import com.cachexic.apple.test.entity.TestTable;
import com.cachexic.apple.test.entity.TestTableQuery;
import org.apache.ibatis.annotations.Param;

/**
 * 用户管理
 * @author tangmin
 * @date 2017-02-13 18:03:29
 */
@MybatisDao
public interface TestTableDao extends BaseDao<TestTable, TestTableQuery> {
	
	/**
	 * 获取seq
	 * @return Integer
	 */
	Integer selectMaxSeq();
	
	/**
	 * 查找name为@name，且id不为@id的记录条数
	 * @param id
	 * @return
	 */
	Long selectCheckNameExit(@Param("name") String name, @Param("id") Long id);
	
}
