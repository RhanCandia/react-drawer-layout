import React, { Component } from 'react';

import './App.css';
import Drawer from './components/Drawer';
import Content from './components/Content';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerVisible: false
    };
  }
  handleDrawerToggle() {
    const { drawerVisible } = this.state;
    this.setState({
      drawerVisible: !drawerVisible
    });
  }
  render () {
    const { drawerVisible } = this.state;
    return (
      <div className="App">
        <Drawer visible={ drawerVisible } toggleDrawer={ () => this.handleDrawerToggle() } />
        <Content pushed={ drawerVisible }
                 header={ <Header toggleDrawer={ () => this.handleDrawerToggle() } /> }
                 toggleDrawer={ () => this.handleDrawerToggle() }>
          <h1>App works, yay!</h1>
        </Content>
      </div>
    );
  }
}

export default App;