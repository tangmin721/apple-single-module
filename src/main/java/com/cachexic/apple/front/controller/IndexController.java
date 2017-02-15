package com.cachexic.apple.front.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Description:
 * @author: tangmin
 * @date: 2017年02月15日 11:40
 * @version: 1.0
 */
@Controller
public class IndexController {

	@RequestMapping("index")
	public String index(){
		return "index";
	}
}
