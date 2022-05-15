import { faHeart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { Row, Col, Tabs, Table } from 'react-bootstrap';
import './ProductDetail.scss';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import '../../scss/GlobalStyle.scss';
import { Tab } from 'bootstrap';
import { getValueOf } from '../../models and methods/DisplayValue';

const product = {
    id: 1,
    name: 'Faded SkyBlu Denim Jeans',
    price: 150,
    category: 'Household',
    available: 100,
    shortDescription: 'Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time.',
    description: 'Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and',
    specification: {
        width: '128mm',
        height: '508mm',
        depth: '85mm',
        qualityChecking: 'yes',
        freshnesDuration: '3 days',
    },
    imageSource: [
        'https://i.ibb.co/gWbyftm/image.png',
        'https://i.ibb.co/23nMGmY/image.png',
        'https://i.ibb.co/7K0vytV/image.png',
        'https://i.ibb.co/MDXySym/image.png'
    ]
}

export default function ProductDetail({ productId }) {
    const [productCount, setProductCount] = useState(1)
    const handleMinusProduct = () => {
        if (productCount >= 1) {
            setProductCount(value => value - 1)
        }
    }
    const handlePlusProduct = () => {
        if (productCount <= 9) {
            setProductCount(value => value + 1)
        }
    }

    return (
        <div className='ProductDetail'>
            <Row>
                {/* Product images slider */}
                <Col md={{ span: 6 }} className='px-5'>
                    <div className='pb-5 my-3 product-images-slider'>
                        <AwesomeSlider animation="cubeAnimation">
                            {product.imageSource.map((value, key) => (
                                <div
                                    key={key}
                                    data-src={value}
                                />
                            ))}
                        </AwesomeSlider>
                    </div>
                </Col>

                {/* Product infomation and add to cart */}
                <Col md={{ span: 6 }} className='px-5'>
                    <div className='my-3 text-left product-infomation'>
                        <h4 className='font-weight-bold name'>
                            {product.name}
                        </h4>
                        <h5 className='text-warning font-weight-bold price'>
                            {`$${product.price}`}
                        </h5>
                        <hr />
                        <div className='category'>
                            <span>Category</span>: {product.category}
                        </div>
                        <div className='availibility'>
                            <span>Availibility </span>: {product.available}
                        </div>
                        <hr />
                        <div className='short-description'>
                            {product.shortDescription}
                        </div>
                    </div>

                    <div className='my-4 text-left product-add-to-cart'>
                        <div className='product-count'>
                            <span onClick={handleMinusProduct}><FontAwesomeIcon icon={faMinus} /></span>
                            <input className='input-product-count' type='number' min='1' max='10' value={productCount} />
                            <span onClick={handlePlusProduct}><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                        <div className='my-4 product-add-to-cart-btn'>
                            <button className='global-info-btn'>Add to cart</button>
                            <button className='heart-btn'><FontAwesomeIcon icon={faHeart} /></button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='px-5'>
                    <Tabs>
                        <Tab
                            eventKey='Description'
                            title='Description'
                        >
                            <div className='text-left my-4 product-description'>
                                {product.description}
                            </div>
                        </Tab>
                        <Tab
                            eventKey='Specification'
                            title='Specification'
                        >
                            <div className='my-4 product-specification'>
                                <Table>
                                    <tbody>
                                        {
                                            Object.entries(product.specification).map((value, key) => (
                                                <tr key={key}>
                                                    <td>{ getValueOf(value[0]) !== '' ? getValueOf(value[0]) : value[0] }</td>
                                                    <td>{ value[1] }</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    )
}
