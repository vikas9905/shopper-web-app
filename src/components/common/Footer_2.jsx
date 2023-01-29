// import a from '~/components/features/custom-link';
import logo from '@/images/logo-full.png';
import {Divider} from '@mui/material';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {MobileFooter} from '@/components/common';
export default function Footer () {
 if (window.screen.width <= 500) {
    return (
      // <MobileFooter/>
      <></>
    );
  }
    return (
      <div className="container-fluid footer2">
        <div className="row mb-5 footer-header">
          <div className="col-4">
            <img className="footer-logo" src={logo} />
          </div>
          <div className="col-8 footer-subscribe">
            <span className="subscribe-title">
              <h3>Subscribe to our new Collections</h3>
              <h6>Get New About News/Offers</h6>
            </span>
            <input type="email" placeholder="Enter Your Email" required />
            <Button variant="contained" className="sub-btn">Contained</Button>
          </div>
        </div>
        <Divider style={{'backgroundColor':'#000'}}/>
        {/* <div className="row mt-3 mb-5 justify-content-center">
          <div className="col-8 col-sm-3">
            <h3>Contact Info</h3>
            <li>name</li>
            <li>name</li>
            <li>name</li>
            <li>name</li>
          </div>
          <div className="col-8 col-sm-3">
            <h3>Contact Info</h3>
            <li>name</li>
            <li>name</li>
            <li>name</li>
            <li>name</li>
          </div>
          <div className="col-8 col-sm-3">
            <h3>Contact Info</h3>
            <li>name</li>
            <li>name</li>
            <li>name</li>
            <li>name</li>
          </div>
        </div> */}
        <div className="footer-bottom">
          <div className="footer-left">
            ABC PVT Ltd.
          </div>
          <div className="footer-center">
            <p className="copyright ls-normal">
              Shoppers eCommerce &copy; 2023. All Rights Reserved
            </p>
          </div>
          <div className="footer-right">
            <div className="social-links">
              <Link
                href="#"
                className="social-link "
              ><InstagramIcon/></Link>
              <Link
                href="#"
                className="social-link "
              ><FacebookIcon/></Link>
              <Link
                href="#"
                className="social-link "
              ><TwitterIcon/></Link>
              <Link
                href="#"
                className="social-link"
              ><LinkedInIcon/></Link>
            </div>
          </div>
        </div>
      </div>
    );
}
