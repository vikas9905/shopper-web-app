import React from 'react';
import logoWordmark from '../../../static/logo-wordmark.png';
import {BallTriangle} from 'react-loader-spinner';
const Preloader = () => (
  <div className="preloader">
    {/* <svg className="logo-symbol" viewBox="0 0 41.25 41.25">
      <circle cx="20.62" cy="20.62" r="20.62" />
      <circle className="fill-white" cx="29.97" cy="14.93" r="6.58" />
    </svg> */}
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
    <img alt="SHOPPERS logo wordmark" src={logoWordmark} />
  </div>
);

export default Preloader;
