// import a from '~/components/features/custom-link';

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <a href="/" className="logo-footer">
                                <img src="./images/logo-footer.png" alt="logo-footer" width="154" height="43" />
                            </a>

                        </div>
                        <div className="col-lg-9">
                            <div className="widget widget-newsletter form-wrapper form-wrapper-inline">
                                <div className="newsletter-info mx-auto mr-lg-2 ml-lg-4">
                                    <h4 className="widget-title">Subscribe to our Newsletter</h4>
                                    <p>Get all the latest information, Sales and Offers.</p>
                                </div>
                                <form action="#" className="input-wrapper input-wrapper-inline">
                                    <input type="email" className="form-control" name="email" id="email"
                                        placeholder="Email address here..." required />
                                    <button className="btn btn-primary btn-rounded btn-md ml-2" type="submit">subscribe<i
                                        className="d-icon-arrow-right"></i></button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget-info">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="widget-body">
                                    <li>
                                        <label>Phone: </label>
                                        <a href="tel:#">Toll Free (123) 456-7890</a>
                                    </li>
                                    <li>
                                        <label>Email: </label>
                                        <a href="mailto:mail@riode.com">mail@riode.com</a>
                                    </li>
                                    <li>
                                        <label>Address: </label>
                                        <a href="#">123 Street Name, City, England</a>
                                    </li>
                                    <li>
                                        <label>WORKING DAYS / HOURS: </label>
                                    </li>
                                    <li>
                                        <a href="#">Mon - Sun / 9:00 AM - 8:00 PM</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget ml-lg-4">
                                <h4 className="widget-title">My Account</h4>
                                <ul className="widget-body">
                                    <li>
                                        <a href="/pages/about-us">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Order History</a>
                                    </li>
                                    <li>
                                        <a href="#">Returns</a>
                                    </li>
                                    <li>
                                        <a href="#">Custom Service</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms &amp; Condition</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget ml-lg-4">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="widget-body">
                                    <li>
                                        <a href="/pages/login">Sign in</a>
                                    </li>
                                    <li>
                                        <a href="/pages/cart">View Cart</a>
                                    </li>
                                    <li>
                                        <a href="/pages/wishlist">My Wishlist</a>
                                    </li>
                                    <li>
                                        <a href="#">Track My Order</a>
                                    </li>
                                    <li>
                                        <a href="#">Help</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget-instagram">
                                <h4 className="widget-title">Instagram</h4>
                                <figure className="widget-body row">
                                    <div className="col-3">
                                        <img src="./images/instagram/01.jpg" alt="instagram 1" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/02.jpg" alt="instagram 2" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/03.jpg" alt="instagram 3" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/04.jpg" alt="instagram 4" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/05.jpg" alt="instagram 5" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/06.jpg" alt="instagram 6" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/07.jpg" alt="instagram 7" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <img src="./images/instagram/08.jpg" alt="instagram 8" width="64" height="64" />
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-left">
                        <figure className="payment">
                            <img src="./images/payment.png" alt="payment" width="159" height="29" />
                        </figure>
                    </div>
                    <div className="footer-center">
                        <p className="copyright ls-normal">Riode eCommerce &copy; 2021. All Rights Reserved</p>
                    </div>
                    <div className="footer-right">
                        <div className="social-links">
                            <a href="#" className="social-link social-facebook fab fa-facebook-f"></a>
                            <a href="#" className="social-link social-twitter fab fa-twitter"></a>
                            <a href="#" className="social-link social-linkedin fab fa-linkedin-in"></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}