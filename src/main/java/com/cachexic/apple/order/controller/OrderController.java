package com.cachexic.apple.order.controller;

import com.alibaba.fastjson.JSON;
import com.cachexic.apple.common.core.ajax.AjaxCallback;
import com.cachexic.apple.common.core.controller.BaseController;
import com.cachexic.apple.common.core.entity.Pagination;
import com.cachexic.apple.order.entity.Order;
import com.cachexic.apple.order.entity.OrderQuery;
import com.cachexic.apple.order.service.OrderService;
import com.google.common.collect.Lists;
import org.apache.shiro.authz.annotation.Logical;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 订单管理
 * @author tangmin
 * @date 2017-02-15 10:45:35
 */
@Controller
@RequestMapping("/order/orderBase")
public class OrderController extends BaseController{
	
	@Autowired
	private OrderService orderService;
	
	/**
	 * 进入list页面
	 * @return
	 */
	@RequestMapping("orderList")
	@RequiresPermissions("Order:read")
	public String list(OrderQuery query,Model model){
		//query.setOrderField("seq");//默认是按id排
		/*可同时多列排序
		query.getOrderFields().add(new OrderField("sortField1", "asc"));
		query.getOrderFields().add(new OrderField("sortField2", "asc"));*/
		Pagination<Order> page = orderService.selectListPagination(query);
		model.addAttribute("query", query);
		model.addAttribute("page", page);
		return "order/orderBase/orderList";
	}
	
	/**
	 * 进入新增form表单页面
	 * @return
	 */
	@RequestMapping("orderForm")
	@RequiresPermissions("Order:create")
	public String orderForm(Model model){
		//Order entity = new Order();
		//entity.setSeq(orderService.selectMaxSeq()+1);
		//model.addAttribute("entity", entity);
		return "order/orderBase/orderForm";
	}
	
	/**
	 * 进入编辑form表单页面
	 * @param id
	 * @return
	 */
	@RequestMapping(value="orderForm/{id}",method = RequestMethod.POST)
	@RequiresPermissions("Order:update")
	public String orderForm(@PathVariable Long id,Model model){
		Order entity = orderService.selectById(id);
		model.addAttribute("entity", entity);
		return "order/orderBase/orderForm";
	}
	
	/**
	 * 保存方法
	 * @return

	@RequestMapping(value="saveOrder",method = RequestMethod.POST)
	@RequiresPermissions(value={"Order:update","Order:create"},logical=Logical.AND)
	@ResponseBody
	public String saveOrder(Order entity){
		AjaxCallback result = null;
		long entityId = orderService.saveOrUpdate(entity);
		if (entityId > 0) {
			result = AjaxCallback.OK("操作成功");
		}else {
			result = AjaxCallback.ERROR("操作失败");
		}
		return JSON.toJSONString(result);
	}*/

	/**
	 * 保存方法
	 * @return
	 */
	@RequestMapping(value="saveOrder",method = RequestMethod.POST)
	@RequiresPermissions(value={"Order:update","Order:create"},logical=Logical.AND)
	public String saveOrder(Order entity,Model model){
		orderService.saveOrUpdate(entity);
		return "redirect:/order/orderBase/orderList";
	}
	
	/**
	 * 批量删除
	 * @param
	 * @return
	 */
	@RequestMapping(value="deleteOrderByIds",method = RequestMethod.POST)
	@RequiresPermissions("Order:delete")
	@ResponseBody
	public String deleteOrderByIds(@RequestParam(value="ids",required=true) String ids){
		List<Long> idList = Lists.newArrayList();
		
		String[] split = ids.split(",");
		for(String strId:split){
			idList.add(Long.parseLong(strId));
		}
		orderService.removeByIds(idList);
		
		AjaxCallback ok = AjaxCallback.OK("删除选中项成功！");
		return JSON.toJSONString(ok);
	}
	
	

}
