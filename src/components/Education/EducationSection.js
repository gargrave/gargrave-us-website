import React, { Component } from 'react'

import Typography from 'material-ui/Typography'

import EducationDetail from './EducationDetail'

import data from '../../data/education'

class EducationSection extends Component {
  render () {
    return (
      <section id="education">
        <Typography type="headline" component="h2">
          Education
        </Typography>

        {data.map((detail, i) => {
          return <EducationDetail key={i} detail={detail} />
        })}
      </section>
    )
  }
}

export default EducationSection
