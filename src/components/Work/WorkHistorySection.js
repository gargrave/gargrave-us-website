import React, { Component } from 'react'
import Typography from 'material-ui/Typography'

import data from '../../data/experience.json'
import WorkDetail from './WorkDetail'

class WorkHistorySection extends Component {
  render () {
    return (
      <section>
        <Typography type="headline" gutterBottom>
          Experience
        </Typography>

        {data.map((workData, i) => <WorkDetail key={i} workData={workData} />)}
      </section>
    )
  }
}

export default WorkHistorySection