import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch } from './actions/'

const mapStateToProps = (state, destroyTodo) => ({
  data: state.data
})

const mapDispatchToProps = dispatch => {
  return {
    disp: dispatch
  }
}


class App extends Component {

  componentWillMount(){
    this.props.disp(fetch("http://localhost/react/wp-json/wp/v2/posts/"))
  }

  render() {

    let teets = this.props.data || []
    let mappedTweets = teets.map(tweet => <li key={tweet.id}>{tweet.content.rendered}</li>)

    return (
      <div>

        <button onClick={ ()=> console.log('lcik') }>Click</button>
        
        {mappedTweets}
      </div>
    );
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);






