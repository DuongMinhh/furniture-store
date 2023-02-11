package com.dm.common.dto;

import com.dm.common.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductSpecificationDto extends BaseDto implements Serializable {

    private Long id;

    private Product product;

    private String key;

    private String value;

}
