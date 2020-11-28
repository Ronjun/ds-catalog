package com.devsuperior.dscatalog.tests.factory;

import java.time.Instant;

import com.devsuperior.dscatalog.dto.ProductDTO;
import com.devsuperior.dscatalog.entities.Product;

public class ProductFactory {

	public static Product createProduct() {
		return new Product(1L, "Phone", 800.0, "phone.jpg", "good phone", Instant.now());
	}
	
	public static ProductDTO createProductDTO() {
		return new ProductDTO(createProduct());
	}
}
