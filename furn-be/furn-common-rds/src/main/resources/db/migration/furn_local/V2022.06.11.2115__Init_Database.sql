-- Category table
CREATE TABLE IF NOT EXISTS store_local.category (
    id                      BIGSERIAL       NOT NULL,
    name                    VARCHAR(128)    NOT NULL        DEFAULT VALUE '',
    description             TEXT,
    parent_category_id      INT8,
    created_date            TIMESTAMP,
    updated_date            TIMESTAMP,
    created_by              VARCHAR(64),
    updated_by              VARCHAR(64),
    CONSTRAINT  category_pk PRIMARY KEY (id),
    CONSTRAINT  category_fk FOREIGN KEY (parent_category_id) REFERENCES store_local.category(id)
);

-- Product table
CREATE TABLE IF NOT EXISTS store_local.product (
    id                      BIGSERIAL       NOT NULL,
    name                    VARCHAR(128)    NOT NULL        DEFAULT VALUE '',
    short_description       VARCHAR(128),
    description             TEXT,
    amount                  INT4,
    category_id             INT8            NOT NULL,
    created_date            TIMESTAMP,
    updated_date            TIMESTAMP,
    created_by              VARCHAR(64),
    updated_by              VARCHAR(64),
    CONSTRAINT  product_pk          PRIMARY KEY (id),
    CONSTRAINT  product_fk_category FOREIGN KEY (category_id) REFERENCES store_local.category(id)
);

-- Product image table
CREATE TABLE IF NOT EXISTS store_local.product_image (
    id                      BIGSERIAL       NOT NULL,
    source                  TEXT            NOT NULL        DEFAULT VALUE '',
    product_id              INT8            NOT NULL,
    created_date            TIMESTAMP,
    updated_date            TIMESTAMP,
    created_by              VARCHAR(64),
    updated_by              VARCHAR(64),
    CONSTRAINT  product_image_pk            PRIMARY KEY (id),
    CONSTRAINT  product_image_fk_product    FOREIGN KEY (product_id) REFERENCES store_local.product(id)
);

-- Product specification table
CREATE TABLE IF NOT EXISTS store_local.product_specification (
    id                      BIGSERIAL       NOT NULL,
    product_id              INT8            NOT NULL,
    width                   INT4            NULL,
    height                  INT4            NULL,
    depth                   INT4            NULL,
    weight                  INT4            NULL,
    created_date            TIMESTAMP       NULL,
    updated_date            TIMESTAMP       NULL,
    created_by              VARCHAR(64)     NULL,
    updated_by              VARCHAR(64)     NULL,
    CONSTRAINT  product_specification_pk            PRIMARY KEY (id),
    CONSTRAINT  product_specification_fk_product    FOREIGN KEY (product_id)    REFERENCES store_local.product(id)
);