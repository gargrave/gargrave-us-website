import React, { Component } from 'react'

import Typography from 'material-ui/Typography'

class EducationSection extends Component {
  render () {
    return (
      <section>
        <Typography type="headline" gutterBottom>
          Education
        </Typography>

        <ul>
          <li><strong>Associate of Applied Science in Computer Information Systems</strong></li>
          <li>Portland Community College - Portland, OR</li>
        </ul>
      </section>
    )
  }
}

export default EducationSection
