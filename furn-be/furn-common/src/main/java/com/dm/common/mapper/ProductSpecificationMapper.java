package com.dm.common.mapper;

import com.dm.common.dto.ProductSpecificationDto;
import com.dm.common.entity.ProductSpecification;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = { ProductMapper.class })
public interface ProductSpecificationMapper {

    ProductSpecification toEntity(ProductSpecificationDto dto);
    ProductSpecificationDto toDto(ProductSpecification entity);

}
