import React from 'react'
import { Link } from 'gatsby'

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
            <h2>Kontakt</h2>
            <dl className="alt">
                <dt>Telefon</dt>
                <dd><a href="tel:+491628321041">+49 (0) 162 8321041</a></dd>
                <dt>Email</dt>
                <dd><a href="mailto:master@mathe.digital">master@mathe.digital</a></dd>
            </dl>
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
