import React, { Component } from 'react'

import { MuiThemeProvider } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

import About from './components/About/AboutSection'
import Header from './components/Header/HeaderSection'
import Education from './components/Education/EducationSection'
import Projects from './components/Projects/ProjectsSection'
import Skills from './components/Skills/SkillsSection'
import WorkHistory from './components/Work/WorkHistorySection'

import './App.css'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Grid container gutter={24}>
            <Grid item xs={12}>
              <header>
                <Header />
              </header>
            </Grid>

            <Grid item xs={12}>
              <main>
                <About />
                <hr />
                <Skills />
                <hr />
                <Education />
                <hr />
                <WorkHistory />
                <hr />
                <Projects />
              </main>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
