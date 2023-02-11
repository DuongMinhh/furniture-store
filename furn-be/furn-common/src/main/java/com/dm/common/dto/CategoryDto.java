package com.dm.common.dto;

import lombok.*;

import java.io.Serializable;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDto extends BaseDto implements Serializable {

    private Long id;

    private String name;

    private String description;

    private CategoryDto parentCategory;

}
