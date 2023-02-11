package com.dm.common.mapper;

import com.dm.common.dto.ProductDto;
import com.dm.common.entity.Product;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = { ProductMapper.class })
public interface ProductMapper {

    Product toEntity(ProductDto dto);
    ProductDto toDto(Product entity);

}
