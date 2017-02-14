package com.cachexic.apple.product.entity;

import com.cachexic.apple.common.core.entity.BaseQuery;

/**
 * 用户管理
 * @author tangmin
 * @date 2017-02-14 21:19:57
 */
public class ProductQuery extends BaseQuery{
	private static final long serialVersionUID = 1L;
	
	private String name;
	private Boolean nameLike = true;
	
	private String price;
	private Boolean priceLike = true;
	
	private String desc;
	private Boolean descLike = true;
	
	private String uid;
	private Boolean uidLike = true;
	

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Boolean getNameLike() {
		return nameLike;
	}
	public void setNameLike(Boolean nameLike) {
		this.nameLike = nameLike;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public Boolean getPriceLike() {
		return priceLike;
	}
	public void setPriceLike(Boolean priceLike) {
		this.priceLike = priceLike;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public Boolean getDescLike() {
		return descLike;
	}
	public void setDescLike(Boolean descLike) {
		this.descLike = descLike;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public Boolean getUidLike() {
		return uidLike;
	}
	public void setUidLike(Boolean uidLike) {
		this.uidLike = uidLike;
	}
	
}