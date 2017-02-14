package com.cachexic.apple.order.entity;

import com.cachexic.apple.common.core.entity.BaseQuery;

/**
 * 订单管理
 * @author tangmin
 * @date 2017-02-14 22:23:56
 */
public class OrderQuery extends BaseQuery{
	private static final long serialVersionUID = 1L;
	
	private String ono;
	private Boolean onoLike = true;
	
	private String uid;
	private Boolean uidLike = true;
	
	private String totalPrice;
	private Boolean totalPriceLike = true;
	
	private String status;
	private Boolean statusLike = true;
	

	public String getOno() {
		return ono;
	}
	public void setOno(String ono) {
		this.ono = ono;
	}
	public Boolean getOnoLike() {
		return onoLike;
	}
	public void setOnoLike(Boolean onoLike) {
		this.onoLike = onoLike;
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
	public String getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(String totalPrice) {
		this.totalPrice = totalPrice;
	}
	public Boolean getTotalPriceLike() {
		return totalPriceLike;
	}
	public void setTotalPriceLike(Boolean totalPriceLike) {
		this.totalPriceLike = totalPriceLike;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Boolean getStatusLike() {
		return statusLike;
	}
	public void setStatusLike(Boolean statusLike) {
		this.statusLike = statusLike;
	}
	
}