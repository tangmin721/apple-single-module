package com.cachexic.apple.order.service;

import com.cachexic.apple.common.core.service.BaseService;
import com.cachexic.apple.order.entity.Order;
import com.cachexic.apple.order.entity.OrderQuery;

/**
 * 订单管理
 * @author tangmin
 * @date 2017-02-14 22:23:56
 */
public interface OrderService extends BaseService<Order, OrderQuery>{
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
	Boolean isNameExit(Order entity);
	
	/**
	 * 保存或添加
	 * @return
	 */
	Long saveOrUpdate(Order entity);

}
