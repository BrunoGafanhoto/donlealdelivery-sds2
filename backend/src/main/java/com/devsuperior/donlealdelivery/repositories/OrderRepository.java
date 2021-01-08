package com.devsuperior.donlealdelivery.repositories;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.devsuperior.donlealdelivery.entities.Order;

public interface OrderRepository extends JpaRepositoryImplementation<Order, Long> {
	
}


