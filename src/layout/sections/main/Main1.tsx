import React, {useState} from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "../../../assets/images/foto shar_files/flowers.jpg"

type ButtonPropsType = {
    color: string
}
type Main1PropsType={
    callback:()=>void
}


export const Main1 = (props:Main1PropsType) => {
        const redHandler=()=>{
            return props.callback()
        }

    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <StyledPhoto src={photo}/>
                    {/*<span>Hi </span>*/}
                    <MainTitle> С днем рожденья, дорогая, моя женушка, жена!</MainTitle>
                       <MainTitle> Быть веселою желаю, позитивною всегда!</MainTitle>
                        <MainTitle>Чтоб ты чаще улыбалась, в настроении была.</MainTitle>
                        <MainTitle>И в любой момент всегда ты, чтоб хотела и могла!</MainTitle>
                        <MainTitle>Чтобы счастливо мы жили, душа в душу, ты и я.</MainTitle>
                        <MainTitle>Ведь с тобою мы родные, мы единая семья!</MainTitle>
                    <h5>PS какой подарок не знаю, подскажешь -куплю.</h5>
                    <h5>или можешь нажать кнопку и и опять ничего хорошего не получить :-)</h5>
                    <StyledButton color={"red"} onClick={redHandler}>Take present</StyledButton>
                </div>
            </FlexWrapper>
        </StyledMain>
    );
};
const StyledPhoto = styled.img`
  max-width: 500px;
  height: 430px;
  object-fit: cover;
  border-radius: 100px;
`
const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #dab1f3;
`
const MainTitle = styled.h3`
`
const StyledButton = styled.button<ButtonPropsType>`

  min-width: 300px;
  min-height: 60px;
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #313133;
  background: #4FD1C5;
  background: linear-gradient(90deg, rgba(129, 230, 217, 1) 0%, rgba(79, 209, 197, 1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, .64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;

`

