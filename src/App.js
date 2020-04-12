import React, { Component } from 'react';
import Customer from './components/Customer';
// import Clock from './Example/clock';
// import ApiExample from './Example/ApiExample';
// import EventHandling from './Example/EventHandling';
// import Customer from './components/Customer';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '나동빈',
  'birthday': '9992',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '나동빈2',
  'birthday': '9992',
  'gender': '남자',
  'job': '대학생2'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '나동빈3',
  'birthday': '9992',
  'gender': '남자',
  'job': '대학생3'
}
]
class App extends Component{
  render(){
  return (
    <div>
      {
        // customers.map(c =>{})  한 줄로 사용할수 았음
        customers.map(c => {  // 새로운 배열을 합쳐서 만들어준다
          return (
            <Customer
            key={c.id}    // map 함수 사용시 항시 key값을 넣어주어야 한다
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          )
        })
      }
    </div>
   
  ); 
}
}
export default App;
