package com.cachexic.apple.common.core.entity;

import com.alibaba.fastjson.annotation.JSONField;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

/**
 * @description: 基础实体类，包含各实体公用属性
 * @author: tangmin
 * @date: 2017-02-13 17:08:07
 * @version: 1.0
 */
public class BaseEntity implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	/**
	 * 版本号，用于乐观锁
	 */
	private Integer version = 0;
	/**
	 * 创建时间
	 */
	@DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
	//@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	@JSONField(serialize = false)
	protected Date createTime;

	/**
	 * 最后一次修改时间
	 */
	@DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
	//@JSONField(format = "yyyy-MM-dd HH:mm:ss")
	@JSONField(serialize = false)
	protected Date modifyTime;

	/**
	 * 删除标记  默认未删除 0：未删除  1  已删除
	 */
	@JSONField(serialize = false)//代表fastjson序列化的时候，忽略此字段
	private Boolean deleted = false;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getVersion() {
		return version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getModifyTime() {
		return modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}
}
