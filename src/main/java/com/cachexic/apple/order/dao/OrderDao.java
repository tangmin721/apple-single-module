package com.cachexic.apple.order.dao;

import com.cachexic.apple.common.core.dao.BaseDao;
import com.cachexic.apple.common.mybatis.annotation.MybatisDao;
import com.cachexic.apple.order.entity.Order;
import com.cachexic.apple.order.entity.OrderQuery;
import org.apache.ibatis.annotations.Param;

/**
 * 订单管理
 * @author tangmin
 * @date 2017-02-14 22:23:56
 */
@MybatisDao
public interface OrderDao extends BaseDao<Order, OrderQuery>{
	
	/**
	 * 获取seq
	 * @return Integer
	 */
	Integer selectMaxSeq();
	
	/**
	 * 查找name为@name，且id不为@id的记录条数
	 * @param name
	 * @param id
	 * @return
	 */
	Long selectCheckNameExit(@Param("name") String name, @Param("id") Long id);
	
}
