import React from 'react';
import Header from './Header';
import { userData, UserDataContext } from './userData-context';

class App extends React.Component {
  state = {
    userData: userData,
  };

  render() {
    return (
      <div className="page">
        <UserDataContext.Provider value={this.state.userData}>
          <Header />
        </UserDataContext.Provider>
      </div>
    );
  }
}

export default App;
