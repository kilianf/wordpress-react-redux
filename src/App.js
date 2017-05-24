import React, { Component } from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (state, destroyTodo) => ({
  data: state.data
})

const mapDispatchToProps = dispatch => {
  return {
    disp: dispatch
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.page.title.rendered}</h1>
        <div dangerouslySetInnerHTML={ { __html: this.props.page.content.rendered || "Hey" } } />
      </div>
    );
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);






