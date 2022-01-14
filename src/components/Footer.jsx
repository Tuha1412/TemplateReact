import React from 'react';
import {Link} from 'react-router-dom';
import Grid from './Grid';
import logo from '../assets/images/Logo-2.png';

const footerAbout = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    },
];

const footerCustomLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    },
]

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <Grid col={4}
                    mdCol={2}
                    smCOl={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>0332362979</strong>
                            </p>
                            <p>
                                Thắc mắc đặt hàng <strong>0332362979</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>0332362979</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về chúng tôi
                        </div>
                        <div className="footer__content">
                            {
                                footerAbout.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to='/'>
                                <img src={logo} className='footer__logo' alt="" />
                            </Link>
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dicta consectetur eum quidem aspernatur quisquam dolore minus similique fugit provident ratione praesentium repellat consequuntur at est omnis, nostrum deserunt adipisci.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer;
