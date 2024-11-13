"use client"

import styled from "styled-components";
import { colorSet } from "../data";

export default function Home(data) {


    // const getLottoNumbers = () => {
    //     const numArr = [];
    //     for (let i = 0; i < 7; i++) {
    //         numArr.push(getLottoNumber(numArr))
    //     }
    //     console.log(numArr);
    //     setSelectedNumber(numArr);
    //     setPopText('다시 뽑기')

    // }


    console.log(data)
    return (<Wrapper><div>
        <h1>오대장</h1>
        <h1> 1등 뽑아 제발</h1>
    </div>
        <BallContainer>
            <NumberBall className='1'>{1}</NumberBall>
            <NumberBall className='1'>{2}</NumberBall>
            <NumberBall className='1'>{3}</NumberBall>
            <NumberBall className='1'>{4}</NumberBall>
            <NumberBall className='1'>{5}</NumberBall>
            <NumberBall className='1'>{6}</NumberBall>
            <PlusText> + </PlusText>
            <NumberBall className='1'>{7}</NumberBall>
        </BallContainer>
        <div className="card">
            {/* <button onClick={clickForGettingNumber}>하나씩 뽑기</button> */}
            <button>뽑기</button>
            <button>지우기</button>
        </div></Wrapper>)
}


const BallContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumberBall = styled.div`
  border-radius: 50%;
  background: ${(props) => colorSet[props.className] || "white"};
  font-size: 24px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const PlusText = styled.span`
  font-size: 26px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 100px;
    
`