import styled from '@emotion/styled'

export const Form = styled.form`
width: 250px;
padding: 20px;
border: 2px solid #e7e5e5;
margin-bottom: 30px;


button {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    color: #2a2a2a;
    margin-top: 10px;
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