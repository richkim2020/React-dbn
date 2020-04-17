import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){   // 생성자를 명시
        super(props);     // 초기화
        this.state = {
            date: new Date()
        };
    }
    // tick(){
    //     this.setState({
    //         date: new Date()
    //     })
    // }
    // componentDidMount(){    // 라이프 싸잍클 초기화가 끝났을때/마운트가 끝났을때 불러오느 함수
    //     this.timerID = setInterval(() => this.tick(), 1000);
    // }
    // componentWillMount(){   /// 리소스 낭비 방지를 위하여 마운트가 끝났을때
    //     clearInterval(this.timerID);
    // }
    goback(){
        let nextDate = this.state.date;
        nextDate.setSeconds(nextDate.getSeconds() -10);
        this.setState({ 
            date:nextDate
        });
    }
    render() {
      return (
          <div>
          <h3>
              현재시각은 [ {this.state.date.toLocaleTimeString()}] 입니다.
          </h3>
          <button onClick={this.goback.bind(this)}>10초 뒤로가기</button> 
            </div>
      );
  }
}
  export default Clock;