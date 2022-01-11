/* eslint-disable */
import React, { useState } from 'react';
import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';
import Shoes1 from './images/shoes-1.png'
import './App.css';
import Data from './data.js';
import Detail from './component/Detail.js'
import {Link, Route, Switch} from 'react-router-dom'
import axios from 'axios';




function App() {

let [shoes, setShoes] = useState(Data);
let [goods, setGoods] = useState(10,11,12);

  return (
    <div className="App">
     <Navbar bg="light" expand="lg">
     <Container>
       <Navbar.Brand><Link to='/'>M & W</Link></Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link as={Link} to='/'>Home</Nav.Link>
           <Nav.Link as={Link} to='/detail'>Detail</Nav.Link>
           <NavDropdown title="상품 펼쳐보기" id="basic-nav-dropdown">
             <NavDropdown.Item href="#action/3.1">남성 아우터</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">남성 상의</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">남성 하의</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">여성 아우터</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">여성 상의</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">여성 하의</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">운동화</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">구두</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">악세서리</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">고객센터</NavDropdown.Item>
           </NavDropdown>
         </Nav>
       </Navbar.Collapse>
     </Container>
     </Navbar>


    <Switch>
     <Route exact path='/'>
     <div className="bg-light p-5 rounded-lg m-2 background">
        <h1 className="display-4" style={{'color': 'rgb(235, 57, 154)'}}>50% Season OFF</h1>
        <p className="lead">저희 쇼핑몰을 사랑해주신 여러분께 특별한 가격으로 다가가겠습니다 </p>
        <hr className="my-4"/>
        <Button variant="primary">쇼핑하기</Button>
     </div>


     <div className="container">
       <div className="row">
       {
         shoes.map((a,i) => {
           return <Card shoes={shoes[i]} i={i} key={i}/>      
         })
       }
       </div> 


       <button className='btn btn-primary' onClick={() => {  



        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{                        // ajax 성공 했을때 실행되는 코드
         setShoes( [...shoes, ...result.data] );                // [xxx]은 대괄호를 벗겨 달라는 의미 즉, 복사본
        })                                                   
        .catch(() => {
          console.log('불러올 수 없습니다.')
        })                                                   // ajax 실패 했을때 실행되는 코드
       }}>더보기</button>

       
     </div>
     </Route>
     <Route path="/detail/:id"><Detail Shoes1={Shoes1} shoes={shoes} goods={goods} setGoods={setGoods}/></Route>
     <Route path="/:id"><div>아무거나 적었을때</div></Route>
    </Switch>
     </div>
  );
}


function Card(props) {
  return(
    <div className="col-md-4">
      <img src={Shoes1} width="100%"/>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content }</p>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

export default App;