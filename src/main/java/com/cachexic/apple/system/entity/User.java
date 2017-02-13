package com.cachexic.apple.system.entity;

import com.cachexic.apple.common.core.entity.BaseEntity;
import com.cachexic.apple.common.validate.UpdatePwd;

import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * 用户
 */
public class User extends BaseEntity{

    /** 登录名 */
    private String loginName;

    /** 登录密码 */
    private String loginPwd;

    /**不对应数据库的字段**/
    private String plainPassword;

    /** 加盐 */
    private String salt;

    /** 是否更改过密码(0:否,1:是) **/
    @NotNull(message="是否更改过密码",groups={UpdatePwd.class})
    private Integer isChangedPwd;

    /** 登录密码错误次数 **/
    private Integer pwdErrorTimes;
    /** 最后登录时间 **/
    private Date lastLoginTime;
    /** 最后一次登录密码错误时间 **/
    private Date pwdErrorLastTime;

    /** 最后一次修改时间 **/
    @NotNull(message="最后一次修改时间不能为空",groups={UpdatePwd.class})
    private Date lastAlertPwdTime;
}
