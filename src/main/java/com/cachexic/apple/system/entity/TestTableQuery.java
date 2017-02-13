package com.cachexic.apple.system.entity;

import com.cachexic.apple.common.core.entity.BaseQuery;

/**
 * 用户管理
 * @author tangmin
 * @date 2017-02-13 18:03:29
 */
public class TestTableQuery extends BaseQuery{
	private static final long serialVersionUID = 1L;
	
	private String name;
	private Boolean nameLike = true;
	
	private String sex;
	private Boolean sexLike = true;
	
	private String age;
	private Boolean ageLike = true;
	
	private String birthday;
	private Boolean birthdayLike = true;
	
	private String email;
	private Boolean emailLike = true;
	
	private String price;
	private Boolean priceLike = true;
	

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
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public Boolean getSexLike() {
		return sexLike;
	}
	public void setSexLike(Boolean sexLike) {
		this.sexLike = sexLike;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public Boolean getAgeLike() {
		return ageLike;
	}
	public void setAgeLike(Boolean ageLike) {
		this.ageLike = ageLike;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public Boolean getBirthdayLike() {
		return birthdayLike;
	}
	public void setBirthdayLike(Boolean birthdayLike) {
		this.birthdayLike = birthdayLike;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Boolean getEmailLike() {
		return emailLike;
	}
	public void setEmailLike(Boolean emailLike) {
		this.emailLike = emailLike;
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
	
}