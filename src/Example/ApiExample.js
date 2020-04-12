import React, { Component } from 'react';

class ApiExample extends Component {
    constructor(props){   // 생성자를 명시
        super(props);     // 초기화
        this.state = {
            date: ''
        };
    }
    callApi = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(json => {
            this.setState({
                data: json.title
            });
        });
    }
    componentDidMount(){
        this.callApi();
    }
    render() {
      return (
        
          <h3>
             {this.state.data? this.state.data : '데이터를 불러오는 중입니다.'}
          </h3>
         
      );
  }
}
  export default ApiExample;