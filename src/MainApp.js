import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch } from './actions/'

import BuildNav from './BuildNav.js'
import BuildRoutes from './BuildRoutes.js'

import { BrowserRouter } from 'react-router-dom'


const mapStateToProps = (state) => ({ data: state.data })

const mapDispatchToProps = dispatch => ({ disp: dispatch })

class MainApp extends Component {

  constructor(props) {
    super(props)
    this.placeholder = [];
  }

  componentWillMount(){
    console.log(location.pathname)
    fetch('http://localhost/sandbox/wp-json/wp/v2/pages/')(this.props.disp)
  }


  render() {

    return (


          <BrowserRouter>
               <div>
                  <BuildNav dater={this.props.data || [this.placeholder] }/>
                  <BuildRoutes dater={this.props.data || [this.placeholder] }/>
               </div>
          </BrowserRouter>
    );
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(MainApp);






