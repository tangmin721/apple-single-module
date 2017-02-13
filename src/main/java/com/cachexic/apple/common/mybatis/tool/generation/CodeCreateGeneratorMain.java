package com.cachexic.apple.common.mybatis.tool.generation;

import com.cachexic.apple.common.mybatis.tool.generation.generator.CodeGenerator;
import com.cachexic.apple.test.entity.TestTable;

/**
 * 运行此方法生成代码
 * @author tangmin
 * @date 2016年2月26日
 */
public class CodeCreateGeneratorMain {

	/**
	 * 生成代码的main方法，运行此方法即可
	 * @param args
	 * @throws Exception
	 */
	public static void main(String[] args) throws Exception
	{
		CodeGenerator codeGen = new CodeGenerator();
		//配置需要生成的类
		codeGen.addClass(TestTable.class);
		//配置前缀包名,去掉entity
		codeGen.setPackagePath("com.cachexic.apple.test");
		//配置requestMap,最前面不要加“/”
		codeGen.setRequestMapPath("system/user");
		//配置对应的数据库表名
		codeGen.setTableName("test_table");
		//配置模块名称  
		codeGen.setModelName("用户");
		//代码生成存放位置  
		codeGen.outPut("d:\\Code\\testTable");
		System.out.println("代码生成成功");
	}

}