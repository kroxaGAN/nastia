import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "../../../assets/images/foto shar_files/buketshar.jpg";
import photo2 from "../../../assets/images/foto shar_files/led.jpg";
import photo3 from "../../../assets/images/foto shar_files/shar.jpg";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {Work} from "./work/Work";

const worksItems=["All","ballons flowers","flowers","ballons"]

export const Works = () => {
    return (
        <StyledMain>
            <SectionTitle>Мои работы</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <Work
                    title={"ballons flowers"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                    src={photo}
                />
                <Work
                    title={"flowers"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                    src={photo2}
                />
                <Work
                    title={"ballons"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                    src={photo3}
                />
                {/*<StyledPhoto src={photo} alt=""/>*/}
                {/*<StyledPhoto src={photo2} alt=""/>*/}
                {/*<StyledPhoto src={photo3} alt=""/>*/}
            </FlexWrapper>


        </StyledMain>
    );
};
// const StyledPhoto = styled.img`
//   width: 100px;
//   height: 100px;
//   object-fit: cover;
//   border-radius: 50px;
//   padding: 10px;
// `
const StyledMain = styled.section`
  min-height: 50vh;
`
// const Name = styled.h2`
//   justify-content: center`
