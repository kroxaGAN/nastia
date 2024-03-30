import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "../../../assets/images/foto shar_files/buketshar.jpg";
import photo2 from "../../../assets/images/foto shar_files/led.jpg";
import photo3 from "../../../assets/images/foto shar_files/shar.jpg";
import styled from "styled-components";

export const Works = () => {
    return (
        <StyledMain>
            <Name>Мои работы</Name>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <StyledPhoto src={photo} alt=""/>
                <StyledPhoto src={photo2} alt=""/>
                <StyledPhoto src={photo3} alt=""/>
            </FlexWrapper>
            <h4>При твоем участии я бы смог закончить сайт визитку....</h4>
        </StyledMain>
    );
};
const StyledPhoto = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 100px;
  padding: 10px;
`
const StyledMain = styled.div`
  min-height: 50vh;
  background-color: #e8e3b0;
`
const MainTitle = styled.h1`
`
const Name = styled.h2`
  justify-content: center`
