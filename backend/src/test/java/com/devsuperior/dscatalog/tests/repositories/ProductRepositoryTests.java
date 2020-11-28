package com.devsuperior.dscatalog.tests.repositories;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.devsuperior.dscatalog.entities.Category;
import com.devsuperior.dscatalog.entities.Product;
import com.devsuperior.dscatalog.repositories.CategoryRepository;
import com.devsuperior.dscatalog.repositories.ProductRepository;
import com.devsuperior.dscatalog.tests.factory.ProductFactory;

@DataJpaTest
public class ProductRepositoryTests {
	
	@Autowired
	private ProductRepository repository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	private long existingId;
	private long nonExistingId;
	private long countTotalProducts;
	private long countPCGamerProducts;
	private Pageable pageable;
	
	@BeforeEach
	void setUp() throws Exception{
		existingId = 1L;
		nonExistingId = 492094L;
		countTotalProducts = 25L;
		countPCGamerProducts = 21L;
		pageable = PageRequest.of(0, 10);
	}
	
	@Test
	public void findShouldReturnEmptyListWhenCategoryIdDoesNotExist() {
		
		List<Category> categories = Arrays.asList(categoryRepository.getOne(885L));
		
		Page<Product> result = repository.find(categories, "", pageable);
		
		Assertions.assertTrue(result.isEmpty());
	}
	
	@Test
	public void findShouldReturnAllProductsInACategoryWhenCategoryExists() {
		
		List<Category> categories = Arrays.asList(categoryRepository.getOne(2L));
		
		Page<Product> result = repository.find(categories, "", pageable);
		
		Assertions.assertEquals(2L , result.getTotalElements());
	}
	
	@Test
	public void findShouldReturnAllProductsWhenNameIsEmpty() {
		
		String name = "";
		
		Page<Product> result = repository.find(null, name, pageable);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countTotalProducts, result.getTotalElements());
	}
	
	@Test
	public void findShouldReturnProductsWhenNameExistsIgnoringCase() {
		
		String name = "pc gAMeR";
		
		Page<Product> result = repository.find(null, name, pageable);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countPCGamerProducts, result.getTotalElements());
	}
	
	@Test
	public void findShouldReturnProductsWhenNameExists() {
		
		String name = "PC Gamer";
		
		Page<Product> result = repository.find(null, name, pageable);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countPCGamerProducts, result.getTotalElements());
	}
	
	@Test
	public void saveShouldPersistWithAutoincrementWhenIdIsNull() {
		
		Product product = ProductFactory.createProduct();
		product.setId(null);
		
		product = repository.save(product);
		Optional<Product> result = repository.findById(product.getId());
		
		Assertions.assertNotNull(product.getId());
		Assertions.assertEquals(countTotalProducts + 1L, product.getId());
		Assertions.assertTrue(result.isPresent());
		Assertions.assertSame(result.get(), product);
	}
	
	@Test
	public void DeleteShouldDeleteObjectWhenIdExists() {
		
		repository.deleteById(existingId);
		
		Optional<Product> result = repository.findById(existingId);
		
		Assertions.assertFalse(result.isPresent());
	}
	
	@Test
	public void DeleteShouldThrowEmptyResultDataAccessExceptionWhenIdDoesNotExist() {
		
		Assertions.assertThrows(EmptyResultDataAccessException.class, () ->{
			repository.deleteById(nonExistingId);
		});
	}
}
