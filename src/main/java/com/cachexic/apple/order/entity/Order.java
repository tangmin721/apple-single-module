package com.cachexic.apple.order.entity;

import com.cachexic.apple.common.core.entity.BaseEntity;

/**
 * @Description:订单
 * @author: tangmin
 * @date: 2017年02月14日 17:25
 * @version: 1.0
 */
public class Order extends BaseEntity{

    /**
     * 订单编号
     */
    private Long ono;
    /**
     * 订单创建人
     */
    private String uid;

    /**
     * 总价
     */
    private Double totalPrice;

    /**
     * 订单状态
     */
    private String status;

    public Long getOno() {
        return ono;
    }

    public void setOno(Long ono) {
        this.ono = ono;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
