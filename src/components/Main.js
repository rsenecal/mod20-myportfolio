import React from 'react'
import { Route } from 'react-router-dom'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'


const Main = () => (
  <main>
      <Route exact path='/skills' component={Skills}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/contact' component={Contact}/>
  </main>
)

export default Main