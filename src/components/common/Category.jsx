import * as ROUTE from '@/constants/routes';
import {NavLink} from 'react-router-dom';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CurrencySelection from './CurrencySelection'
export default function Category (props) {
   return (
    <>
      <div className="navigation" style={{'marginTop':90,'padding':0,'paddingLeft':85,'height':60}}>
        <ul className="navigation-menu-main">
          <li><NavLink activeClassName="navigation-menu-active" exact to={ROUTE.HOME}>Home</NavLink></li>
          <li><NavLink activeClassName="navigation-menu-active" to={ROUTE.SHOP}>Shop</NavLink></li>
          <li><NavLink activeClassName="navigation-menu-active" to={ROUTE.FEATURED_PRODUCTS}>Featured</NavLink></li>
          <li><NavLink activeClassName="navigation-menu-active" to={ROUTE.RECOMMENDED_PRODUCTS}>Recommended</NavLink></li>
          <li className="offerMenu"><LocalOfferOutlinedIcon/>Use Cupon: First50</li>
        </ul>
    </div>
    </>
   );
}