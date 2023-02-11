package com.dm.common.mapper;

import com.dm.common.dto.CategoryDto;
import com.dm.common.entity.Category;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CategoryMapper {

    Category toEntity(CategoryDto dto);
    CategoryDto toDto(Category entity);

}
