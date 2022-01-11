/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
  padding : 20px;
`;
let Name = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상 }
`;



function Detail(props) {

  let [alert, setalert] = useState(true);


  useEffect(() => {

    let timer = setTimeout(() => { setalert(false) }, 3000)
    return () => {clearTimeout(timer)}               // 컴포넌트가 사라질때 실행, clearTimeout은 타이머 종료
  },[]);                     // [] 특정 state가 변경 될때만 실행, 아무것도 없으면 한번 실행 후 종료 


  let { id } = useParams();
  let history = useHistory();
  let shoesid = props.shoes.find(function(a){
      return a.id == id
  });

  return (
    <div className="container">
      <Box>
        <Name className='red'>Detail</Name>
      </Box>
      

      {
        alert === true
        ? (<div className="my-alert">
        <p>재고가 얼마 남지 않았습니다</p>
      </div>)
      :null
      }
      

      <div className="row">
        <div className="col-md-6">
          <img src={props.Shoes1} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoesid.title}</h4>
          <p>{shoesid.content}</p>
          <p>{shoesid.price}원</p>

          <Info goods={props.goods}></Info>

          <button className="btn btn-success" onClick={ () => { props.setGoods([9,11,12]) } }>주문하기</button>{' '}
          <button className="btn btn-secondary" onClick={() => { history.push('/') }}>취소하기</button> 
        </div>
        <hr className="my-4"/>
      </div>
      </div> 
  )
}


function Info(props) {
  return(
    <p>재고 : {props.goods[0]}</p>
  )
}


export default Detail;
