import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderPrivacyPolicy from '../components/HeaderPrivacyPolicy'
import PplContent from '../components/PplContent'

class PrivacyPolicy extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Datenschutzerklärung | MatheDigital" />
        <HeaderPrivacyPolicy />
        <div id="main">
          <section id="content" className="main">
            <PplContent />
          </section>
        </div>
      </Layout>
    )
  }
}

export default PrivacyPolicy
