import React, { Component } from 'react'
import { fetchDirectory } from '../actions/actions'
import { connect } from 'react-redux'
import FileList from './FileList'
import BreadcrumbTrail from './BreadcrumbTrail'

class App extends Component {

   componentDidMount = () => {
      this.props.dispatch(fetchDirectory(''))
   }

   render = () => (
      <div>
         <BreadcrumbTrail />
         <FileList />
      </div>
   )
}

export default connect()(App)
