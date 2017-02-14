package com.cachexic.apple.user.entity;

import com.cachexic.apple.common.core.entity.BaseEntity;

/**
 * 用户
 */
public class User extends BaseEntity{

    /** 登录名 */
    private String username;

    /** 登录密码 */
    private String password;

    /**
     * 手机号
     */
    private String mobile;

    /**真实姓名*/
    private String realName;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }
}
