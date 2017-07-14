import React, { Component } from 'react'

import Markdown from 'markdown-it'
import Typography from 'material-ui/Typography'

import data from '../../data/about'

const md = new Markdown()

class AcountSection extends Component {
  render () {
    return (
      <section id="about" className="about-section">
        <Typography type="headline" component="h2" gutterBottom>
          About
        </Typography>

        {data.map((text, i) => {
          return <p key={i} className="basic-text" dangerouslySetInnerHTML={{ __html: md.renderInline(text) }} />
        })}
      </section>
    )
  }
}

export default AcountSection
