import React from 'react';

import SlideToggle from 'react-slide-toggle';
import {Link} from 'react-router-dom';

export default function Card( props ) {
    const { title, expanded = false, adClass, iconClass, type = "normal", url } = props;

    return (
        "normal" === type ?
            < SlideToggle collapsed={ expanded ? false : true } >
                { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                    <div className={ `card ${ adClass }` }>
                        <div className={ `card-header` } onClick={ onToggle } >
                            <Link to="#" className={ `toggle-button ${ toggleState.toLowerCase() }` }>
                                {
                                    iconClass ?
                                        <i className={ iconClass }></i> : ""
                                }
                                { title ?
                                    title : ""
                                }
                            </Link>
                        </div>

                        <div ref={ setCollapsibleElement }>
                            <div className="card-body overflow-hidden">
                                { props.children }
                            </div>
                        </div>
                    </div>
                )
                }
            </SlideToggle > :
            "parse" === type ?
                <SlideToggle collapsed={ expanded ? false : true } >
                    { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                        <>
                            <Link
                                to={ url ? url : '#' }
                                content={ title }
                                className={ `parse-content ${ toggleState.toLowerCase() }` }
                                onClick={ ( e ) => { onToggle(); } }
                            >
                            </Link>

                            <div ref={ setCollapsibleElement } className="overflow-hidden">
                                { props.children }
                            </div>
                        </>
                    ) }
                </SlideToggle > :
                <SlideToggle collapsed={ expanded ? false : true } >
                    { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                        <>
                            <Link to={ url ? url : "#" } >
                                {
                                    title
                                }
                                <span className={ `toggle-btn ${ toggleState.toLowerCase() }` } onClick={ ( e ) => { onToggle(); e.preventDefault(); } }></span>
                            </Link>

                            <div ref={ setCollapsibleElement } className="overflow-hidden">
                                { props.children }
                            </div>
                        </>
                    ) }
                </SlideToggle>
    )
    return '';
}