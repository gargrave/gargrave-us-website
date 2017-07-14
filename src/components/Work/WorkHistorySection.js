import React, { Component } from 'react'
import Typography from 'material-ui/Typography'

import data from '../../data/experience.json'
import WorkDetail from './WorkDetail'

import './WorkHistorySection.css'

class WorkHistorySection extends Component {
  render () {
    return (
      <section className="work-section">
        <Typography type="headline" component="h2" gutterBottom>
          Experience
        </Typography>

        {data.map((workData, i) => <WorkDetail key={i} workData={workData} />)}
      </section>
    )
  }
}

export default WorkHistorySection
