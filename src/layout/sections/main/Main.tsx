import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/foto shar_files/mainFoto.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>ВЭЛКАМ или давайте знакомиться</span>
                    <Name>Я – Настя, Настенька, Настасья… Любые вариации приветствуются, кроме Ася.</Name>
                    <Name> Любые вариации приветствуются, кроме Ася.</Name>
                    <MainTitle>занимаюсь флористикой, дизайном... </MainTitle>
                </div>
                <StyledPhoto src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};
const StyledPhoto = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  border-radius: 100px;
`
const StyledMain = styled.div`
  min-height: 70vh;
  background-color: #dab1f3;
`
const MainTitle=styled.h1`
`
const Name=styled.h2``

