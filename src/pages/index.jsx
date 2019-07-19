import React from 'react'
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

          <section id="images" className="main">
            <header className="major">
              <h2>Bilder</h2>
              <p>
                Mit einem Klick auf das folgende Bild kommen Sie zu unserer Bildergalerie:
              </p>
            </header>
            <p>
            <a target="_blank" data-flickr-embed="true" data-header="true" data-footer="true"  href="https://www.flickr.com/photos/163747931@N07/albums/72157709740350222" title="MatheDigital"><img src="https://live.staticflickr.com/65535/48321819801_9e76c1dec8_z.jpg" width="640" height="466" alt="MatheDigital" /></a><script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8"></script>
            </p>
          </section>

          <section id="videos" className="main">
            <header className="major">
              <h2>Videos</h2>
              <p>
                Im Folgenden sehen sie einige Videos zu der Programmierarbeit der Kursteilnehmer:
              </p>
            </header>
            <div>
              <blockquote
                className="embedly-card"
                data-card-controls="0"
                data-card-align="left"
                data-card-recommend="0"
              >
                <h4>
                  <a href="https://youtu.be/2lQV_zA-4yk">
                    WRO 2014
                  </a>
                </h4>
                <p>
                  Dieses Video zeigt Ausschnitte aus unserer Teilnahme an der WRO 2014.
                </p>
              </blockquote>
              <br />
              <blockquote
                className="embedly-card"
                data-card-controls="0"
                data-card-align="left"
                data-card-recommend="0"
              >
                <h4>
                  <a href="https://youtu.be/XnLsDKoFwrw">
                    Einführung in den Mathetreff Digital
                  </a>
                </h4>
                <p>
                  Dieses Video ist eine kleine Einführung in den "Mathetreff Digital", bei dem ein Calliope Mini (http://calliope.cc) verwendet wird. Die Anmeldung zu den Kursen kann über unser Portal https://mathe.digital erfolgen.
                </p>
              </blockquote>
              <br />
              <blockquote
                className="embedly-card"
                data-card-controls="0"
                data-card-align="left"
                data-card-recommend="0"
              >
                <h4>
                  <a href="https://youtu.be/-y9cQG3KkUY">
                    Calliope mini - Das Bürstentier
                  </a>
                </h4>
                <p>
                  Dieses Video zeigt unser selbstgebautes Calliope mini-Bürstentier.
                </p>
              </blockquote>
              <br />
              <blockquote
                className="embedly-card"
                data-card-controls="0"
                data-card-align="left"
                data-card-recommend="0"
              >
                <h4>
                  <a href="https://youtu.be/mg17qfjw1pQ">
                    Alarmanlage mit dem Calliope mini
                  </a>
                </h4>
                <p>
                  Dieses Video zeigt unsere selbstgebaute Alarmanlage mit dem Calliope mini.
                </p>
              </blockquote>
              <br />
              <blockquote
                className="embedly-card"
                data-card-controls="0"
                data-card-align="left"
                data-card-recommend="0"
              >
                <h4>
                  <a href="https://youtu.be/HyMkyRAuNf0">
                    Drohne mit Scratch
                  </a>
                </h4>
                <p>
                  Dieses Video zeigt unsere Drohne, welche sich unter anderem mit der Blocksprache Scratch programmieren lässt.
                </p>
              </blockquote>
            </div>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
