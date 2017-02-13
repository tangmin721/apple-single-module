package com.cachexic.apple.system.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @description:后台登录
 * @author: tangmin
 * @date: 2017-02-13 16:12:56
 * @version: 1.0
 */
@Controller
public class LoginController {


    @RequestMapping(value = "login", method = RequestMethod.GET)
    public String login(Model model) {
        //判断 如果redis 中 存在 session ，则直接进入index,否则进入login
        if (1 > 0) {
            return "login";
        } else {
            return "redirect:/system/index";
        }
    }

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public String dologin(@RequestParam(value = "username", required = true) String username,
                          @RequestParam(value = "password", required = true) String password,
                          @RequestParam(value = "rememberMe", required = false) Boolean rememberMe,
                          @RequestParam(value = "captcha", required = false) String captcha,
                          HttpServletRequest request, HttpServletResponse response,
                          Model model) {

        /*try {
            this.authorize(username, password, (rememberMe != null ? rememberMe : false), captcha);
        } catch (BizException e) {
            model.addAttribute("error", e.getMessage());
            model.addAttribute("username",
                    username);
            return "login";
        }*/
        // return "redirect:/system/index";
        if (!(username.equals("admin") && password.equals("admin"))) {
            model.addAttribute("error", "用户名密码不正确");
            model.addAttribute("username", username);
            model.addAttribute("password", password);
            return "login";
        } else {
            model.addAttribute("success", "欢迎来到后台系统");
            return "redirect:/system/index";
        }
    }

    @RequestMapping("system/index")
    public String systemIndex(Model model){
        return "system/index";
    }

}
