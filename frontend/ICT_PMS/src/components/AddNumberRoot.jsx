import React, { Component } from 'react'
// import AddNumber from "./AddNumber";
import AddNumberContainer from '../containers/AddNumberContainer';

class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        {/* <AddNumber onClick={function(size) {
          this.props.onClick(size);
        }.bind(this)}></AddNumber> */}


        {/* <AddNumber></AddNumber> */}

        <AddNumberContainer></AddNumberContainer>
      </div>
    )
  }
}

export default AddNumberRoot;