package com.cachexic.apple.product.service.impl;

import com.cachexic.apple.common.junit.SpringJunitTest;
import com.cachexic.apple.product.entity.Product;
import com.cachexic.apple.product.service.ProductService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;

/**
 * @description: 测试商品service
 * @author: tangmin
 * @date: 2017-02-14 21:30:01
 * @version: 1.0
 */
public class ProductServiceImplTest extends SpringJunitTest{
    @Autowired
    private ProductService productService;

    @Test
    public void selectMaxSeq() throws Exception {

    }

    @Test
    public void isNameExit() throws Exception {
        Product entity = new Product();
        entity.setUid(1l);
        entity.setName("商品1");
        entity.setPrice(111d);
        System.out.println(productService.isNameExit(entity));
    }

    @Test
    @Rollback(false)
    public void saveOrUpdate() throws Exception {
        Product entity = new Product();
        entity.setUid(1l);
        entity.setName("商品1");
        entity.setPrice(111d);
        entity.setMemo("简要描述");
        System.out.println("id:"+productService.saveOrUpdate(entity));
    }

    @Test
    @Rollback(false)
    public void insert(){
//        try {
            Product entity = new Product();
            entity.setUid(1l);
            entity.setName("商品1");
            entity.setPrice(111d);
            entity.setMemo("简要描述");
            System.out.println("id:"+productService.insert(entity));
//        } catch (Exception e) {
//            logger.info("logger::"+e.getMessage());
//        }
    }

    @Test
    public void selectById() throws Exception {

    }

    @Test
    public void selectByIds() throws Exception {

    }

    @Test
    @Rollback(false)
    public void update() throws Exception {
        Product entity = productService.selectById(2l);
        entity.setUid(1l);
        entity.setName("商品33333");
        entity.setPrice(111d);
        entity.setMemo("简要描述22233");
        System.out.println("id:"+productService.update(entity));
    }

    @Test
    public void removeById() throws Exception {

    }

    @Test
    public void removeByIds() throws Exception {

    }

    @Test
    public void selectList() throws Exception {

    }

    @Test
    public void selectListPage() throws Exception {

    }

    @Test
    public void selectListTotal() throws Exception {

    }

    @Test
    public void selectListPagination() throws Exception {

    }

}