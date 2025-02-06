import React from "react";
import { FaFacebookF, FaTelegram, FaLinkedin } from "react-icons/fa";
import './home.css'
export default function Footer({ theme }) {
    return (
        <div className={`footer ${theme === 'dark' ? 'footer-dark' : 'footer-light'} mt-auto`}>
            <footer className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-5 mb-5">
                        <h3 className="text-center"> About us</h3> 
                        <p>Fugiat quas eveniet voluptatem natus. Placeat error temporibus magnam sunt optio aliquam. Ut ut occaecati placeat at. Fuga fugit ea autem. Dignissimos voluptate repellat occaecati minima dignissimos mollitia consequatur. Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa error temporibus magnam est voluptatem.</p>
                        <div className="d-flex align-items-center ">
                            <FaFacebookF className="fs-3 mx-2"/>
                            <FaTelegram className="fs-3 mx-2"/>
                            <FaLinkedin className="fs-3 mx-2" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-5 mb-5">
                        <h3 className="text-center">Our Newsletter</h3>
                        <p>Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa consequatur occaecati</p>
                        <form className="input-group mb-3">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter your email" 
                                aria-label="Email address"
                            />
                            <button 
                                className="btn btn-primary" 
                                type="submit"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    )
}
