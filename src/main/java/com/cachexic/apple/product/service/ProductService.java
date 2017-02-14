package com.cachexic.apple.product.service;

import com.cachexic.apple.common.core.service.BaseService;
import com.cachexic.apple.product.entity.Product;
import com.cachexic.apple.product.entity.ProductQuery;

/**
 * 用户管理
 * @author tangmin
 * @date 2017-02-14 21:19:57
 */
public interface ProductService extends BaseService<Product, ProductQuery>{
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
	Boolean isNameExit(Product entity);
	
	/**
	 * 保存或添加
	 * @return
	 */
	Long saveOrUpdate(Product entity);

}
