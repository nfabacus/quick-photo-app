import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';


class Home extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Photo App</h2>

          <p onClick={()=>this.props.history.push('/photos')}>Check out list of photos here!</p>
        </div>
        <p className="App-intro">
        This is just a quick write of the app for practice!
        </p>
      </div>
    );
  }
}

export default Home;
//
// export default withRouter(Home);
