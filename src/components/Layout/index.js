import React, { Component } from 'react';
import { LazilyLoadFactory } from '../LazilyLoad';

import './index.css'

class Layout extends Component {

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <header style={{flex: '1 auto', height: '3em', background: '#2b2b2b', color: '#fff'}}>
          <div></div>
        </header>

        <div className="content" style={{flex: '1 150px', background: '#eee'}}>
          <div>left side menu</div>

          <div>content</div>

          <div>rightside</div>
        </div>

        <div style={{flex: '1 3em', background: '#edd'}}>footer</div>

      </div>
    );
  }
}

export default LazilyLoadFactory(Layout, {
  moduleB: () => System.import('./moduleB'),
});
