import styled from '@emotion/styled'

export const Contacts = styled.ul`
padding-left: 0;
margin-top: 30px;

li {
    display: flex;

    :not(:last-child) {
        margin-bottom: 15px;
    }
}

p {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;

    svg {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
}

button {
    margin-left: 10px;
    display: flex;
    border-radius: 50%;
    color: #2a2a2a;
    background-color: #cad7e3;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
   
    :hover, :focus {
        background-color: #a5bacd;
        color: #544d4d;
    }
}
`