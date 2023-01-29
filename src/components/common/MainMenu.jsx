// import { useRouter } from 'react';

import {Link} from 'react-router-dom';

import { mainMenu } from '../../utils/Menu';

function MainMenu() {
    const pathname = ''//useRouter().pathname;
    
    return (
        <nav className="main-nav">
            <ul className="menu">
                <li id="menu-home" className={ pathname === '/' ? 'active' : '' }>
                    <Link href='/'>Home</Link>
                </li>

                 <li className={ `submenu  ${ pathname.includes( '/shop' ) ? 'active' : '' }` }>
                    <Link href='/shop'>Categories</Link>

                    <div className="megamenu">
                        <div className="row">
                            <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                <h4 className="menu-title">Variations 1</h4>
                                <ul>
                                    {
                                        mainMenu.shop.variation1.map( ( item, index ) => (
                                            <li key={ `shop-${ item.title }` }>
                                                <Link href={ '/' + item.url }>
                                                    { item.title }
                                                    { item.hot ? <span className="tip tip-hot">Hot</span> : "" }
                                                </Link>
                                            </li>
                                        ) )
                                    }
                                </ul>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                <h4 className="menu-title">Variations 2</h4>
                                <ul>
                                    {
                                        mainMenu.shop.variation2.map( ( item, index ) => (
                                            <li key={ `shop-${ item.title }` }>
                                                <Link href={ '/' + item.url }>
                                                    { item.title }
                                                    { item.new ? <span className="tip tip-new">New</span> : "" }
                                                </Link>
                                            </li>
                                        ) )
                                    }
                                </ul>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 menu-banner menu-banner1 banner banner-fixed">
                                <figure>
                                    <img src="./images/menu/banner-1.jpg" alt="Menu banner" width="221" height="330" />
                                </figure>
                                <div className="banner-content y-50">
                                    <h4 className="banner-subtitle font-weight-bold text-primary ls-m">Sale.
                            </h4>
                                    <h3 className="banner-title font-weight-bold"><span
                                        className="text-uppercase">Up to</span>70% Off</h3>
                                    <Link href={ "/shop" } className="btn btn-link btn-underline">shop now<i className="d-icon-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className={ `submenu  ${ pathname.includes( '/product' ) && !pathname.includes( '/elements' ) ? 'active' : '' }` }>
                    <Link href="/product/default/fashionable-leather-satchel">Products</Link>

                    <div className="megamenu">
                        <div className="row">
                            <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                <h4 className="menu-title">Product Pages</h4>
                                <ul>
                                    {
                                        mainMenu.product.pages.map( ( item, index ) => (
                                            <li key={ `product-${ item.title }` }>
                                                <Link href={ '/' + item.url }>
                                                    { item.title }
                                                    { item.hot ? <span className="tip tip-hot">Hot</span> : "" }
                                                </Link>
                                            </li>
                                        ) )
                                    }
                                </ul>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                                <h4 className="menu-title">Product Layouts</h4>
                                <ul>
                                    {
                                        mainMenu.product.layout.map( ( item, index ) => (
                                            <li key={ `product-${ item.title }` }>
                                                <Link href={ '/' + item.url }>
                                                    { item.title }
                                                    { item.new ? <span className="tip tip-new">New</span> : "" }
                                                </Link>
                                            </li>
                                        ) )
                                    }
                                </ul>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 menu-banner menu-banner2 banner banner-fixed">
                                <figure>
                                    <img src="./images/menu/banner-2.jpg" alt="Menu banner" width="221" height="330" />
                                </figure>
                                <div className="banner-content x-50 text-center">
                                    <h3 className="banner-title text-white text-uppercase">Sunglasses</h3>
                                    <h4 className="banner-subtitle font-weight-bold text-white mb-0">$23.00 - $120.00</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className={ `submenu  ${ pathname.includes( '/pages' ) ? 'active' : '' }` }>
                    <Link href="#">Pages</Link>

                    <ul>
                        {
                            mainMenu.other.map( ( item, index ) => (
                                <li key={ `other-${ item.title }` }>
                                    <Link href={ '/' + item.url }>
                                        { item.title }
                                        { item.new ? <span className="tip tip-new">New</span> : "" }
                                    </Link>
                                </li>
                            ) )
                        }
                    </ul>
                </li>

                <li className={ `submenu  ${ pathname.includes( '/blog' ) && !pathname.includes( '/elements' ) ? 'active' : '' }` }>
                    <Link href={ `/blog/classic` }>Blog</Link>

                    <ul>
                        {
                            mainMenu.blog.map( ( item, index ) => (
                                <li key={ "blog" + item.title } className={ item.subPages ? "submenu" : "" }>
                                    <Link href={ '/' + item.url }>
                                        { item.title }
                                    </Link>

                                    {
                                        item.subPages ?
                                            <ul>
                                                {
                                                    item.subPages.map( ( item, index ) => (
                                                        <li key={ `blog-${ item.title }` }>
                                                            <Link href={ '/' + item.url }>
                                                                { item.title }
                                                            </Link>
                                                        </li>
                                                    ) )
                                                }
                                            </ul> : ""
                                    }
                                </li>
                            ) )
                        }
                    </ul>
                </li>

                <li className={ `${ pathname.includes( '/elements' ) ? 'active' : '' } d-xl-show submenu` }>
                    <Link href={ `/elements` }>Elements</Link>

                    <ul>
                        {
                            mainMenu.element.map( ( item, index ) => (
                                <li key={ `elements-${ item.title }` }>
                                    <Link href={ '/' + item.url }>
                                        { item.title }
                                    </Link>
                                </li>
                            ) )
                        }
                    </ul>
                </li>

                <li>
                    <Link href="/pages/about-us">About Us</Link>
                </li> 
            </ul>
        </nav>
    )
}

export default MainMenu;