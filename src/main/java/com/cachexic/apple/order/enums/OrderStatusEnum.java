package com.cachexic.apple.order.enums;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @description: 订单状态
 * @author: tangmin
 * @date: 2017-02-14 18:25:09
 * @version: 1.0
 */
public enum OrderStatusEnum {
//			case 0:  return "提交订单";
//			case 1:  return "仓库配货";
//			case 2:  return "商品出库";
//			case 3:  return "等待收货";
//			case 4:  return "已完成";
//			case 5:  return "待退货";
//			case 6:  return "已退货";
//			case 7:  return "已取消";
	SUB("提交订单", 0),
	BI ("仓库配货", 1);

	/** 描述 */
	private String desc;
	/** 枚举值 */
	private int value;

	OrderStatusEnum(String desc, int value) {
		this.desc = desc;
		this.value = value;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public static OrderStatusEnum getEnum(int value) {
		OrderStatusEnum resultEnum = null;
		OrderStatusEnum[] enumAry = OrderStatusEnum.values();
		for (int i = 0; i < enumAry.length; i++) {
			if (enumAry[i].getValue() == value) {
				resultEnum = enumAry[i];
				break;
			}
		}
		return resultEnum;
	}

	/**
	 * 转换为map
	 * @return
	 */
	public static Map<String, Map<String, Object>> toMap() {
		OrderStatusEnum[] ary = OrderStatusEnum.values();
		Map<String, Map<String, Object>> enumMap = new HashMap<String, Map<String, Object>>();
		for (int num = 0; num < ary.length; num++) {
			Map<String, Object> map = new HashMap<String, Object>();
			String key = String.valueOf(getEnum(ary[num].getValue()));
			map.put("value", String.valueOf(ary[num].getValue()));
			map.put("desc", ary[num].getDesc());
			enumMap.put(key, map);
		}
		return enumMap;
	}
	
	/**
	 * 转换为simpleMap
	 * @return
	 */
	public static Map<String, Integer> toSimpleMap() {
		OrderStatusEnum[] ary = OrderStatusEnum.values();
		Map<String, Integer> enumMap = new HashMap<String, Integer>();
		for (int num = 0; num < ary.length; num++) {
			enumMap.put(ary[num].getDesc(), ary[num].getValue());
		}
		return enumMap;
	}

	/**
	 * 根据值获取名称（大写英文）
	 * @param value
	 * @return
	 */
	public static String getName(int value) {
		String result = null;
		OrderStatusEnum[] enumAry = OrderStatusEnum.values();
		for (int i = 0; i < enumAry.length; i++) {
			if (value == enumAry[i].getValue()) {
				result = enumAry[i].name();
				break;
			}
		}
		return result;
	}
	
	/**
	 * 根据值获取描述（汉字）
	 * @param value
	 * @return
	 */
	public static String getDesc(int value) {
		String result = null;
		OrderStatusEnum[] enumAry = OrderStatusEnum.values();
		for (int i = 0; i < enumAry.length; i++) {
			if (value == enumAry[i].getValue()) {
				result = enumAry[i].getDesc();
				break;
			}
		}
		return result;
	}

	/**
	 * 转换为list
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static List toList() {
		OrderStatusEnum[] ary = OrderStatusEnum.values();
		List list = new ArrayList();
		for (int i = 0; i < ary.length; i++) {
			Map<String, String> map = new HashMap<String, String>();
			map.put("value", String.valueOf(ary[i].getValue()));
			map.put("desc", ary[i].getDesc());
			list.add(map);
		}
		return list;
	}
	
	
	public static void main(String[] args) {
		System.out.println(OrderStatusEnum.toSimpleMap());
	}
}
