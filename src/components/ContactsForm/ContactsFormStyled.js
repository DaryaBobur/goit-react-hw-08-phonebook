import styled from '@emotion/styled'

export const Form = styled.form`
width: 250px;
padding: 20px;
border: 2px solid #e7e5e5;
margin-bottom: 30px;


button {
    display: inline-block;
    border: 0;
    padding: 5px 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    color: #2a2a2a;
    
    font-weight: 700;
    font-size: 14px;
    line-height: 1.88;
    letter-spacing: 0.06em;
    background-color: #cad7e3;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
   
    :hover, :focus {
        background-color: #a5bacd;
        color: #544d4d;
    }
}
`