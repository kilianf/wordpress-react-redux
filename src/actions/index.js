import axios from "axios"

export function fetch(address) {

  return function(dispatch) {
    /* 
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    axios.get(address)
      .then((response) => {
        console.log(response.data)
        dispatch({type: "GET_JSON", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GET_JSON_ERROR", payload: err})
      })
  }
}


// { type: 'ADD_HI', payload: item}


