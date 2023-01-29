import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// import Link from '~/components/features/custom-link';
import {Card} from '@/components/common';

import { mainMenu } from '../../utils/Menu';
import {Link} from 'react-router-dom';

function MobileMenu( props ) {
    const [ search, setSearch ] = useState( "" );
    const [ timer, setTimer ] = useState( null );
    //const router = [] //useRouter();

    useEffect( () => {
        window.addEventListener( 'resize', hideMobileMenuHandler );
        document.querySelector( "body" ).addEventListener( "click", onBodyClick );

        return () => {
            window.removeEventListener( 'resize', hideMobileMenuHandler );
            document.querySelector( "body" ).removeEventListener( "click", onBodyClick );
        }
    }, [] )

    useEffect( () => {
        setSearch( "" );
    }, [] )

    const hideMobileMenuHandler = () => {
        if ( window.innerWidth > 991 ) {
            document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
        }
    }

    const hideMobileMenu = () => {
        document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
    }

    function onSearchChange( e ) {
        setSearch( e.target.value );
    }

    function onBodyClick( e ) {
        if ( e.target.closest( '.header-search' ) ) return e.target.closest( '.header-search' ).classList.contains( 'show-results' ) || e.target.closest( '.header-search' ).classList.add( 'show-results' );

        document.querySelector( '.header-search.show' ) && document.querySelector( '.header-search.show' ).classList.remove( 'show' );
        document.querySelector( '.header-search.show-results' ) && document.querySelector( '.header-search.show-results' ).classList.remove( 'show-results' );
    }

    function onSubmitSearchForm( e ) {
        e.preventDefault();
        // router.push( {
        //     pathname: '/shop',
        //     query: {
        //         search: search
        //     }
        // } );
    }

    return (
        <div className="mobile-menu-wrapper">
            <div className="mobile-menu-overlay" onClick={ hideMobileMenu }>
            </div>

            <Link className="mobile-menu-close" to="#" onClick={ hideMobileMenu }><i className="d-icon-times"></i></Link>

            <div className="mobile-menu-container scrollable">
                <form action="#" className="input-wrapper" onSubmit={ onSubmitSearchForm }>
                    <input type="text" className="form-control" name="search" autoComplete="off" value={ search } onChange={ onSearchChange }
                        placeholder="Search your keyword..." required />
                    <button className="btn btn-search" type="submit">
                        <i className="d-icon-search"></i>
                    </button>
                </form>

                <ul className="mobile-menu mmenu-anim">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Card title="categories" type="mobile" url="/shop">
                            <ul>
                                <li>
                                    <Card title="Variations 1" type="mobile">
                                        <ul>
                                            {
                                                mainMenu.shop.variation1.map( ( item, index ) => (
                                                    <li key={ `shop-${ item.title }` }>
                                                        <Link to={ '/' + item.url }>
                                                            { item.title }
                                                            { item.hot ? <span className="tip tip-hot">Hot</span> : "" }
                                                        </Link>
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </Card>
                                </li>
                                <li>
                                    <Card title="Variations 2" type="mobile">
                                        <ul>
                                            {
                                                mainMenu.shop.variation2.map( ( item, index ) => (
                                                    <li key={ `shop-${ item.title }` }>
                                                        <Link to={ '/' + item.url }>
                                                            { item.title }
                                                            { item.new ? <span className="tip tip-new">New</span> : "" }
                                                        </Link>
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </Card>
                                </li>
                            </ul>
                        </Card>
                    </li>

                    <li>
                        <Card title="Products" type="mobile" url="/product/default/fashionable-leather-satchel">
                            <ul>
                                <li>
                                    <Card title="Product Pages" type="mobile">
                                        <ul>
                                            {
                                                mainMenu.product.pages.map( ( item, index ) => (
                                                    <li key={ `product-${ item.title }` }>
                                                        <Link to={ '/' + item.url }>
                                                            { item.title }
                                                            { item.hot ? <span className="tip tip-hot">Hot</span> : "" }
                                                        </Link>
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </Card>
                                </li>

                                <li>
                                    <Card title="Product Layouts" type="mobile">
                                        <ul>
                                            {
                                                mainMenu.product.layout.map( ( item, index ) => (
                                                    <li key={ `product-${ item.title }` }>
                                                        <Link to={ '/' + item.url }>
                                                            { item.title }
                                                            { item.new ? <span className="tip tip-new">New</span> : "" }
                                                        </Link>
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </Card>
                                </li>
                            </ul>
                        </Card>
                    </li>

                    <li>
                        <Card title="Pages" type="mobile" url="/pages/about-us">
                            <ul>
                                {
                                    mainMenu.other.map( ( item, index ) => (
                                        <li key={ `other-${ item.title }` }>
                                            <Link to={ '/' + item.url }>
                                                { item.title }
                                                { item.new ? <span className="tip tip-new">New</span> : "" }
                                            </Link>
                                        </li>
                                    ) )
                                }
                            </ul>
                        </Card>
                    </li>

                    <li>
                        <Card title="Blog" type="mobile" url="/blog/classic">
                            <ul>
                                {
                                    mainMenu.blog.map( ( item, index ) => (
                                        item.subPages ?
                                            <li key={ "blog" + item.title }>
                                                <Card title={ item.title } url={ '/' + item.url } type="mobile">
                                                    <ul>
                                                        {
                                                            item.subPages.map( ( item, index ) => (
                                                                <li key={ `blog-${ item.title }` }>
                                                                    <Link to={ '/' + item.url }>
                                                                        { item.title }
                                                                    </Link>
                                                                </li>
                                                            ) )
                                                        }
                                                    </ul>
                                                </Card>
                                            </li> :

                                            <li key={ "blog" + item.title } className={ item.subPages ? "submenu" : "" }>
                                                <Link to={ '/' + item.url }>
                                                    { item.title }
                                                </Link>
                                            </li>
                                    ) )
                                }
                            </ul>
                        </Card>
                    </li>

                    <li>
                        <Card title="elements" type="mobile" url="/elements">
                            <ul>
                                {
                                    mainMenu.element.map( ( item, index ) => (
                                        <li key={ `elements-${ item.title }` }>
                                            <Link to={ '/' + item.url }>
                                                { item.title }
                                            </Link>
                                        </li>
                                    ) )
                                }
                            </ul>
                        </Card>
                    </li>

                    <li className="mb-4 border-no"><a to="https://d-themes.com/buynow/riodereact">Buy Riode!</a></li>

                    <li><Link to={ '/pages/account' }>Login</Link></li>
                    <li><Link to={ '/pages/cart' }>My Cart</Link></li>
                    <li><Link to={ '/pages/wishlist' }>Wishlist</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default React.memo( MobileMenu );