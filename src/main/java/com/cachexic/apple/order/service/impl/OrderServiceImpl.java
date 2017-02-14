package com.cachexic.apple.order.service.impl;

import com.cachexic.apple.common.core.dao.BaseDao;
import com.cachexic.apple.common.core.service.impl.BaseServiceImpl;
import com.cachexic.apple.common.exception.ValidateOtherException;
import com.cachexic.apple.order.dao.OrderDao;
import com.cachexic.apple.order.entity.Order;
import com.cachexic.apple.order.entity.OrderQuery;
import com.cachexic.apple.order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 订单管理
 * @author tangmin
 * @date 2017-02-14 22:38:31
 */
@Service("orderService")
public class OrderServiceImpl extends BaseServiceImpl<Order, OrderQuery> implements OrderService{
	@Autowired
	private OrderDao dao;

	@Override
	protected BaseDao<Order, OrderQuery> dao() {
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
	 * 校验entity是否可修改（name是否存在）
	 */
	@Override
	public Boolean isNameExit(Order entity) {
//		Long count = this.dao.selectCheckNameExit(entity.getName(), entity.getId());
//		if(count>0){
//			return true;
//		}
		return false;
	}

	/**
	 * 重写insert方法，判断是否可以插入
	 * @param entity
	 * @return
	 */
	@Override
	public Long insert(Order entity) {
		if(isNameExit(entity)){
			throw new ValidateOtherException(ValidateOtherException.INSERT_FAILD,"名称已经存在，新增失败");
		}
		return super.insert(entity);
	}

	/**
	 * 重写update方法
	 * @param entity
	 * @return
	 */
	@Override
	public Long update(Order entity) {
		if(isNameExit(entity)){
			throw new ValidateOtherException(ValidateOtherException.UPDATE_FAILD,"名称已经存在，修改失败");
		}
		super.update(entity);
		return entity.getId();
	}
	
	/**
	 * 新增or修改
	 */
	@Override
	@Transactional
	public Long saveOrUpdate(Order entity) {
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

}