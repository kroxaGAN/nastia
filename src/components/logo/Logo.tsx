import React from 'react';
import {Icon} from "../icon/Icon";
import logo from "../../assets/images/foto shar_files/cat.webp"
import photo from "../../assets/images/foto shar_files/mainFoto.webp";
import styled from "styled-components";

export const Logo = () => {
    return (
        <a href="#" >
            {/*<Icon iconId={"instagram"}/>*/}
            <StyledPhoto src={logo} alt=""/>
        </a>
    );
};
const StyledPhoto = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 100%;
`

