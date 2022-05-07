import React from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import './PopularProduct.scss';
import product1 from '../../share/products/product1.png';
import product2 from '../../share/products/product2.png';
import product3 from '../../share/products/product3.png';
import Product from '../product/Product';
import '../../scss/GlobalStyle.scss';

const description = {
    description: 'Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
}
const categories = [
    {
        id: 1,
        name: 'Sofa',
        description: 'This is sofa',
        products: [
            {
                id: 1,
                src: product1,
                name: "Product 1",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            },
            {
                id: 2,
                src: product2,
                name: "Product 2",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            },
            {
                id: 3,
                src: product3,
                name: "Product 3",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            }
        ]
    },
    {
        id: 2,
        name: 'Table',
        description: 'This is table',
        products: [
            {
                id: 1,
                src: product1,
                name: "Product 1",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            },
            {
                id: 2,
                src: product2,
                name: "Product 2",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            },
            {
                id: 3,
                src: product3,
                name: "Product 3",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            }
        ]
    },
    {
        id: 3,
        name: 'Chair',
        description: 'This is chair',
        products: [
            {
                id: 1,
                src: product1,
                name: "Product 1",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            },
            {
                id: 2,
                src: product2,
                name: "Product 2",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            },
            {
                id: 3,
                src: product3,
                name: "Product 3",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            }
        ]
    },
    {
        id: 4,
        name: 'Bed',
        description: 'This is bed',
        products: [
            {
                id: 1,
                src: product1,
                name: "Product 1",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            },
            {
                id: 2,
                src: product2,
                name: "Product 2",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            },
            {
                id: 3,
                src: product3,
                name: "Product 3",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            }
        ]
    },
    {
        id: 5,
        name: 'Lightning',
        description: 'This is lightning',
        products: [
            {
                id: 1,
                src: product1,
                name: "Product 1",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            },
            {
                id: 2,
                src: product2,
                name: "Product 2",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            },
            {
                id: 3,
                src: product3,
                name: "Product 3",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            }
        ]
    },
    {
        id: 6,
        name: 'Decore',
        description: 'This is decore',
        products: [
            {
                id: 1,
                src: product1,
                name: "Product 1",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            },
            {
                id: 2,
                src: product2,
                name: "Product 2",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            },
            {
                id: 3,
                src: product3,
                name: "Product 3",
                description: "Bly Microfiber / Microsuede 56 Armless Loveseat",
                cost: 300
            }
        ]
    }
]

export default function PopularProduct() {
    return (
        <div className='PopularProduct'>
            <h2>POPULAR PRODUCT</h2>
            <div className='description'>
                {description.description}
            </div>
            <div className="category">
                <Tabs>
                    {
                        categories.map(value =>
                            <Tab
                                key={value.id}
                                eventKey={value.name}
                                title={value.name}
                            >
                                <Row>
                                    {
                                        value.products.map(value =>
                                            <Col lg='4' md='6' sm='6' key={value.id}>
                                                <Product
                                                    src={value.src}
                                                    name={value.name}
                                                    description={value.description}
                                                    cost={value.cost}
                                                />
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Tab>
                        )
                    }
                </Tabs>
                <div className='discover-more-btn'>
                    <a className='global-info-btn' href='#'>Discover More</a>
                </div>
            </div>
        </div>
    )
}
