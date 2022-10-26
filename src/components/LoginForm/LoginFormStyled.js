import styled from '@emotion/styled'

export const Form = styled.form`
width: 250px;

margin-right: auto;
margin-left: auto;

margin-bottom: 30px;

button {
    display:flex;
    margin-right: auto;
    margin-left: auto; 
    margin-top: 10px;
    color: #2a2a2a;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.15;
    background-color: #cad7e3;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
   
    :hover, :focus {
        background-color: #a5bacd;
        color: #544d4d;
    }
}
`