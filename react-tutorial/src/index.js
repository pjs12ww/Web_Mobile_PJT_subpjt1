import React from 'react';
import ReactDOM from 'react-dom';


const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>

// JSX basic
ReactDOM.render(element,
    document.getElementById("practice")
)


// element rendering (clcok example)
// setInterval 함수에 의해 1초마다 실행됨
function tick() {
    const element1 = (
        <div>
            <h1>Hello, world</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>

        </div>
    );
    ReactDOM.render(element1, document.getElementById('clock'))
}

setInterval(tick, 1000);


// Components and Props
// Components 는 개념적으로 props를 input으로 하고 UI가 어떻게 보여야 하는지 정의하는 React Element를 output으로 하는 함수이다.
// props 는 속성을 나타내는 데이터이다.
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}


// ES6 class 에서는 아래와 같은 component 를 정의할 수 있다. 내용은 위의 component 와 동일하다.
class Welcome1 extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}


// component rendering
function Welcome2(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element2 = <Welcome2 name="Sara" />;
ReactDOM.render(
    element2,
    document.getElementById('comren')
);


// composing component
function Welcome3(props) {
    return <h1>Hello, {props.name}</h1>;
}

function AAA() {
    return (
        <div>
            <Welcome3 name="Sara" />
            <Welcome3 name="Charlie" />
            <Welcome3 name="Jason" />

        </div>
    );
}

ReactDOM.render(
    <AAA />,
    document.getElementById('composing')
);


// extracting components
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />

    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}


// state and lifecycle
// Clock을 캡슐화한 코드이다.
// Clcok에는 타이머를 설정하고 UI를 업데이트하는 세부사항이 빠져있다.
function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick1() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick1, 1000);


// Clock component에 state 추가를 통해 이를 해결해준다.
// 1. Clock 함수 component를 Class로 변환
// 1-1. React.Component를 확장하는 동일한 이름의 ES6 class를 생성합니다.
// 1-2. render()라고 불리는 빈 메서드를 추가합니다.
// 1-3. 함수의 내용을 render() 메서드 안으로 옮깁니다.
// 1-4. render() 내용 안에 있는 props를 this.props로 변경합니다.
// 1-5. 남아있는 빈 함수 선언을 삭제합니다.
// super(props)를 사용해줘야 하는 이유?  https://velog.io/@honeysuckle/%EB%B2%88%EC%97%AD-Dan-Abramov-%EC%99%9C-superprops-%EB%A5%BC-%EC%9E%91%EC%84%B1%ED%95%B4%EC%95%BC-%ED%95%98%EB%8A%94%EA%B0%80
// javascript this? https://blueshw.github.io/2018/03/12/this/
// props, state, mounting, method





// Events
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('button')
  );
