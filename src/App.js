import React, { Component } from 'react';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell'; 
import { withStyles } from '@material-ui/core/styles';

// import Clock from './Example/clock';
// import ApiExample from './Example/ApiExample';
// import EventHandling from './Example/EventHandling';
// import Customer from './components/Customer';
const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"  
  },
  table: {
    minWidth: 1080
  }
})
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
     const { classes } = this.props;
  return (
    <Paper className={classes.root}>
     <Table className={classes.table}>
       <TableHead>
         <TableRow>
           <TableCell>번호</TableCell>
           <TableCell>이미지</TableCell>
           <TableCell>이름</TableCell>
           <TableCell>생년월일</TableCell>
           <TableCell>성별</TableCell>
           <TableCell>직업</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
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
       </TableBody>
     </Table>
      
    </Paper>
   
  ); 
}
}
export default withStyles(styles)(App);