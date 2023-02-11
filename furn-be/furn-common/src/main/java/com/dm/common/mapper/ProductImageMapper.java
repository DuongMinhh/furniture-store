package com.dm.common.mapper;

import com.dm.common.dto.ProductImageDto;
import com.dm.common.entity.ProductImage;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = { CategoryMapper.class })
public interface ProductImageMapper {

    ProductImage toEntity(ProductImageDto dto);
    ProductImageDto toDto(ProductImage entity);

}
