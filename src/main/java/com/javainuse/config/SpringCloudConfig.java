package com.javainuse.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringCloudConfig {

    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(r -> r.path("/offre/**")
                        .uri("lb://offre-service")
                        .id("hl"))
                .route(r -> r.path("/hotel/**")
                        .uri("lb://HOTEL-SERVICE")
                        .id("ht"))
                .route(r -> r.path("/api/transport/**")
                        .uri("lb://Transport-service")
                        .id("hs"))
              
                .build();
    }

}