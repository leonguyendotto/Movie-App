import styled from "styled-components";

export const Wrapper= styled.div`
    position: relative;
    padding: 0.5rem;
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 2rem;

`;
export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    color: var(--white);
    text-transform: capitalize;
    
    a {
        color: var(--white);
    }

    p {
        padding-left: 2px;
    }

`; 