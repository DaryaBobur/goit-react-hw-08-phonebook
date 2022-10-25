import styled from '@emotion/styled'

export const Menu = styled.div`
display: flex;
align-items: center;
gap: 10px;

p {
    font-weight: 500;
    font-size: 14px;
}

button {
    display: flex;
    border: 0;
    padding: 3px 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    color: #2a2a2a;
    
    font-weight: 700;
    font-size: 12px;
    line-height: 1.15;
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

