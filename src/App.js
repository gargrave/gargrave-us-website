import React, { Component } from 'react';

import { MuiThemeProvider } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Header from './components/HeaderSection';
import Projects from './components/ProjectsSection';
import Skills from './components/SkillsSection';

import './App.css';

class App extends Component {
  render() {
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
                <Skills />
                <Projects />
              </main>
            </Grid>

          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
