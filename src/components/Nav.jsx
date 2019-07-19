import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Einleitung</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="aboutme">
                    <a href="#">Über mich</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="events">
                    <a href="#">Veranstaltungen</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="images">
                    <a href="#">Bilder</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="videos">
                    <a href="#">Videos</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
