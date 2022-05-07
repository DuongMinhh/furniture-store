import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEnvelope, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div className='Footer'>
            <footer className="text-center text-lg-start bg-light text-muted">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-top"
                >
                    <div className="me-5 d-none d-lg-block">
                        <span>Liên hệ với chúng tôi thông qua</span>
                    </div>

                    <div>
                        <a href="" className="ml-4 text-reset">
                            Facebook
                        </a>
                        <a href="" className="ml-4 text-reset">
                            Zalo
                        </a>
                    </div>
                </section>

                <section className=""> 
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Sản phẩm
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Xe máy</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Dầu nhớt</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Đồ chơi - Phụ kiện</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Thông tin liên hệ
                                </h6>
                                <p><FontAwesomeIcon icon={faHome} /> New York, NY 10012, US</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> info@example.com</p>
                                <p><FontAwesomeIcon icon={faPhone} /> +01 234 567 88</p>
                                <p><FontAwesomeIcon icon={faPrint} /> +01 234 567 88</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{ "background-color": "#F2E1D9" }}>
                    <a className="text-reset fw-bold">© 2022 Copyright: DuongMinh</a>
                </div>
            </footer>
        </div>
    )
}
