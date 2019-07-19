import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Einleitung</h2>
                </header>
                <p>
                  <b>
                    Diese Homepage wird von ehemaligen Kursteilnehmern programmiert und aktualisiert. Du kannst auch Programmieren lernen – komm‘ mit uns auf die Reise, beginnend mit diesem Grundkurs!
                  </b>
                </p>
              </div>
            </div>
          </section>

          <section id="aboutme" className="main">
            <header className="major">
              <h2>Über mich</h2>
            </header>
            <p>
              <b>
                Mein Name ist Marvin, ich habe 2014 meinen ersten Kurs am Zentrum für Mathematik gemacht und parallel zur Grundschule programmieren gelernt.
                <br />
                Inzwischen kann ich mehrere Programmiersprachen und arbeite an meinem zweiten „Nano-Degree“ als App-Developer.
                <br /><br />
                Diese Seite ist absichtlich einfach gehalten, um auch den Code als Demo-/Anschauungs-Material für unsere Kurse zu benutzen.
              </b>
            </p>
          </section>

          <section id="events" className="main">
            <header className="major">
              <h2>Veranstaltungen</h2>
              <p>Die folgenden MatheDigital-Grundkurse sind zurzeit geplant:</p>
            </header>
            <ul className="actions">
              <li>
                <a
                  href="https://www.z-f-m.de/mathedigital/madif201907"
                  target="_blank"
                  className="button"
                >
                  31.08. & 01.09.
                </a>
              </li>
            </ul>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
