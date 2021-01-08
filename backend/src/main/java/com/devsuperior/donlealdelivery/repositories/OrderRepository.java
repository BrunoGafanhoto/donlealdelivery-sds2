package com.devsuperior.donlealdelivery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.devsuperior.donlealdelivery.entities.Order;

public interface OrderRepository extends JpaRepositoryImplementation<Order, Long> {
	
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products "
			+ " WHERE obj.status = 0 ORDER BY obj.moment ASC")
	List<Order> findOrdersWithProducts();
}


