import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Anmeldung</h2>
            <p>Zu den Kursen beim Zentrum für Mathematik können Sie sich hier anmelden:</p>
            <ul className="actions">
                <li>
                    <a
                        href="https://www.z-f-m.de/projekte/mathedigital"
                        className="button"
                        target="_blank"
                    >
                        Jetzt anmelden!
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <h2>Etiam feugiat</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
                <dt>Phone</dt>
                <dd>(000) 000-0000 x 0000</dd>
                <dt>Email</dt>
                <dd><a href="#">information@untitled.tld</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
            </ul>
        </section>
        <p className="copyright">
            &copy; 2019 Thorsten Schopf. Alle Rechte vorbehalten. 
            <br />
            Design und Umsetzung: <a href="https://withmarvnet.com">MarvNet Digital</a>.
            <br />
            <small>
                Theme: HTML5UP.
            </small>
        </p>
    </footer>
)

export default Footer
