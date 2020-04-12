import React, { Component } from 'react';

class EventHandling extends Component {
    constructor(props){   // 생성자를 명시
        super(props);     // 초기화
        this.state = {
            isToggleOn: true
        }
     //this.handleClick = this.handleClick.bind(this);  바인딩 처리방법
    }
   handleClick = () => {        // 바인딩처라하는 또 다른 방법
       console.log("이벤트처리")
       this.setState(state => ({
           isToggleOn: !this.state.isToggleOn
       }))
   }
   
    render() {
      return (
        <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}버튼</button>
      );
  }
}
  export default EventHandling;