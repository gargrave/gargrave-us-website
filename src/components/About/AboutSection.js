import React, { Component } from 'react'

import { markdown } from 'markdown'
import Typography from 'material-ui/Typography'

import './AboutSection.css'

import data from '../../data/about'

class AcountSection extends Component {
  render () {
    return (
      <section className="about-section">
        <Typography type="headline" gutterBottom>
          About
        </Typography>

        {data.map((text, i) => {
          return <p key={i} className="basic-text" dangerouslySetInnerHTML={{ __html: markdown.toHTML(text) }} />
        })}
      </section>
    )
  }
}

export default AcountSection
