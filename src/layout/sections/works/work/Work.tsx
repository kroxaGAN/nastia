import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    title: string
    text: string
    src:string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} title={"img"}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Text>{props.text}</Text>
            <Link href={"#"}>demo </Link>
            <Link href={"#"}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: #f8e6ac;
  max-width: 400px;
  width: 100%;
`
const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50px;
  padding: 10px;
`
const Text = styled.p`
`
const Title = styled.h3`
`
const Link = styled.a`
`
