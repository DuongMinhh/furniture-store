package com.dm.common.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductImageDto extends BaseDto implements Serializable {

    private Long id;

    private String source;

    private ProductDto product;

}
