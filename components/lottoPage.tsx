"use client"

import styled from "styled-components";
import { colorSet } from "../app/data";
import { useEffect, useState } from "react";

export default function LottoPage({ data }) {


    const [total, setTotal] = useState(0);
    const [calArray, setCalArray] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState([]);

    // const getLottoNumbers = () => {
    //     const numArr = [];
    //     for (let i = 0; i < 7; i++) {
    //         numArr.push(getLottoNumber(numArr))
    //     }
    //     setSelectedNumber(numArr);
    //     setPopText('다시 뽑기')

    // }
    useEffect(() => {
        // 숫자별 영역 만들기
        const arr: any = [];
        let total = 0;
        Object.keys(data).forEach((key: string) => {
            const num: number = data[key] * 1;
            arr.push([key, total, total + num - 1]);
            total += num;
        });
        setTotal(total);
        setCalArray(arr);
    }, [data]);



    const getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    };

    const getNumberFromCalulatedArray = (number: number) => {
        const arr = calArray;
        let num = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][2] > number) {
                num = i + 1;
                break;
            }
        }
        return num;
    };

    const getLottoNumbersFiveTimes = () => {
        const numSet = [];
        for (let j = 0; j < 5; j++) {
            let numArr = [];
            for (let i = 0; i < 7; i++) {
                numArr.push(getLottoNumber(numArr))
            }
            numArr.sort((a, b) => a - b)
            numSet.push(numArr);
        }

        setSelectedNumber(numSet);
        // setPopText('다시 뽑기')

    }


    const getLottoNumber = (arr: Number[]) => {
        let isDuplicated = true;
        let newNumber = 0;
        while (isDuplicated) {
            let randomNum = getRandomInt(0, total);
            newNumber = getNumberFromCalulatedArray(randomNum);

            if (!arr.length || arr.indexOf(newNumber) < 0)
                isDuplicated = false;
        }
        return newNumber;
    };


    const deleteSelectedNumber = () => {
        setSelectedNumber([]);
    }


    return (<Wrapper>
        <h1>오대장</h1>
        <h1> 1등 뽑아 제발</h1>
        <Wrapper>
            {
                selectedNumber.map((numbers, index) => {
                    return <BallContainer key={index}>
                        {numbers.map((number, _index) => {
                            if (index < 6) return <NumberBall key={index + '_' + _index} className={number}>{number}</NumberBall>
                            else return <>
                                <PlusText key={'plus_' + index}> + </PlusText>
                                <NumberBall key={index + '_' + _index} className={number}>{number}</NumberBall>
                            </>
                        })}
                    </BallContainer>
                })
            }
        </Wrapper>
        <div className="card">
            {/* <button onClick={clickForGettingNumber}>하나씩 뽑기</button> */}
            <button onClick={getLottoNumbersFiveTimes}>5회 뽑기</button>
            <button onClick={deleteSelectedNumber}>지우기</button>
        </div>
    </Wrapper>)
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
    gap: 10px;
    
`