package com.devsuperior.dscatalog.tests.integration;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dscatalog.dto.ProductDTO;
import com.devsuperior.dscatalog.services.ProductService;
import com.devsuperior.dscatalog.services.exceptions.ResourceNotFoundException;
import com.devsuperior.dscatalog.tests.factory.ProductFactory;

@SpringBootTest
@Transactional
public class ProductServiceIT {

	@Autowired
	private ProductService service;

	private long existingId;
	private long nonExistingId;
	private long countTotalProducts;
	private long countPCGamerProducts;
	private PageRequest pageable;

	@BeforeEach
	void setUp() throws Exception {
		existingId = 1L;
		nonExistingId = 1000L;
		countPCGamerProducts = 21L;
		countTotalProducts = 25L;
		pageable = PageRequest.of(0, 10);
	}

	@Test
	public void updateShouldReturnAProductDTOWhenIdExists() {

		ProductDTO dto = ProductFactory.createProductDTO();

		 service.update(existingId, dto);

	}

	@Test
	public void updateShouldThrowResourceNotFoundExceptionWhenIdDoesNotExist() {
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			ProductDTO dto = ProductFactory.createProductDTO();

			service.update(nonExistingId, dto);
		});
	}

	@Test
	public void findByIdShouldThrowResourceNotFoundExceptionWhenIdDoesNotExist() {
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.findById(99999L);
		});

	}

	@Test
	public void findByIdShouldReturnAProductDTOWhenIdExists() {

		Object result = service.findById(existingId);

		Assertions.assertFalse(result.getClass() != ProductDTO.class);
	}
	
	@Test
	public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExist() {

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.delete(nonExistingId);
		});
	}

	@Test
	public void deleteShouldDoNothingWhenIdExists() {

		Assertions.assertDoesNotThrow(() -> {
			service.delete(existingId);
		});
	}

	@Test
	public void findAllPagedShouldReturnAllProductsWhenNameIsEmpty() {
		
		String name = "";
		
		Page<ProductDTO> result = service.findAllPaged(0L, name, pageable);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countTotalProducts, result.getTotalElements());
	}
	
	@Test
	public void findShouldReturnProductsWhenNameExistsIgnoringCase() {
		
		String name = "pc gAMeR";
		
		Page<ProductDTO> result = service.findAllPaged(0L, name, pageable);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countPCGamerProducts, result.getTotalElements());
	}
	
	@Test
	public void findShouldReturnProductsWhenNameExists() {
		
		String name = "PC Gamer";
		
		Page<ProductDTO> result = service.findAllPaged(0L, name, pageable);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countPCGamerProducts, result.getTotalElements());
	}
}
