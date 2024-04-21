import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/foto shar_files/mainFoto.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>ВЭЛКАМ или давайте знакомиться</SmallText>
                        <Name>Я – <span>Настя, Настенька, Настасья…</span> </Name>
                        {/*<Name> Любые вариации приветствуются, кроме Ася.</Name>*/}
                        <MainTitle>занимаюсь флористикой, дизайном... </MainTitle>
                    </div>
                    <PhotoWraper>
                        <StyledPhoto src={photo} alt=""/>
                    </PhotoWraper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
const StyledPhoto = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  border-radius: 100px;
`
const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`
const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`
const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`
const Name = styled.h2`
  font-family: Josefin Sans, sans-serif;
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;

    &::before {

      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`
const PhotoWraper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    border-radius: 100px;
    
    position: absolute;
    top:-25px;
    left: 15px;
    z-index: -1;

  }
`
