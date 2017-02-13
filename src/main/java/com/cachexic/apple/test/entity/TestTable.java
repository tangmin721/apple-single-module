package com.cachexic.apple.test.entity;

import com.alibaba.fastjson.annotation.JSONField;
import com.cachexic.apple.common.core.entity.BaseEntity;
import com.cachexic.apple.common.mybatis.annotation.Entity;
import com.cachexic.apple.common.validate.Insert;
import com.cachexic.apple.common.validate.Update;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.Range;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import java.util.Date;

/**
 * 测试mybatis框架搭建
 * @author tangm
 */
@Entity
public class TestTable extends BaseEntity {
	private static final long serialVersionUID = 1L;
	
	@NotBlank(message="姓名不能为空",groups={Insert.class,Update.class})
	@Length(max=50,message="姓名长度不能超过50",groups={Insert.class,Update.class})
	private String name;
	
	@NotNull(message="性别不能为空",groups={Insert.class,Update.class})
	@Range(min=0,max=1,message="性别必须为0或1",groups={Insert.class,Update.class})
	private Integer sex;
	
	@Range(min=18,max=128,message="年龄必须大于18,且小于128岁",groups={Insert.class,Update.class})
	private Integer age;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@JSONField(format = "yyyy-MM-dd")
	@Past(message="生日只能为过去的时间",groups={Insert.class,Update.class})
	private Date birthday;
	
	@Length(max=100,message="邮箱长度不能超过100",groups={Insert.class,Update.class})
	@Email(message="邮箱格式错误",groups={Insert.class,Update.class})
	private String email;
	
	private Double price;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getSex() {
		return sex;
	}

	public void setSex(Integer sex) {
		this.sex = sex;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "TestTable [name=" + name + ", sex=" + sex + ", age=" + age
				+ ", birthday=" + birthday + ", email=" + email + ", price="
				+ price + "]";
	}
	

}
