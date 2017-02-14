package com.cachexic.apple.product.entity;

import com.cachexic.apple.common.core.entity.BaseEntity;

/**
 * @Description:商品
 * @author: tangmin
 * @date: 2017年02月14日 17:25
 * @version: 1.0
 */
public class Product extends BaseEntity{

    /**
     * 商品名称
     */
    private String name;

    /**
     * 商品价格
     */
    private Double price;

    /**
     * 简要描述
     */
    private String desc;


    /**
     * 商品创建人用户id
     */
    private String uid;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }
}
