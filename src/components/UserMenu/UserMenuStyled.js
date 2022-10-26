import styled from '@emotion/styled'

export const Menu = styled.div`
display: flex;
align-items: center;
gap: 5px;

p {
    font-weight: 500;
    font-size: 14px;
}

button {
    display: flex;
    color: #2a2a2a;
    text-transform: lowercase;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.15;

    background-color: #cad7e3;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
   
    :hover, :focus {
        background-color: #a5bacd;
        color: #544d4d;
    }
}
`

