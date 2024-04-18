import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {Button} from "../Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field as={"textarea"} placeholder={"message"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  min-height: 50vh;
  background-color: #f6f1d1;
`
const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`
const Field = styled.input`

`

