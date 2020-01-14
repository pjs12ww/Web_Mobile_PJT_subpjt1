import React, { Component } from 'react';
import Counter from './components/Counter';
import CounterContainer from './container/CounterContainer';

// 참고 자료: https://velog.io/@nibble/React-Redux%EB%A1%9C-Counter-%EB%A7%8C%EB%93%A4%EA%B8%B0-1

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
      </div>
    );
  }
}

export default App;
