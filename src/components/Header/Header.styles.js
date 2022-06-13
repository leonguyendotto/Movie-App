import styled from 'styled-components';

export const Wrapper = styled.div`
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0 40px;

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
    color: var(--white);

    .menu {
        display: flex;
        justify-content: space-between;
    }

    a {
        color: var(--white);
        text-decoration: none;
    }

    button {
        text-transform: capitalize;
        color: white;
        font-weight: bold;
        background-color: transparent;
        border: solid 1px #fff;
        border-radius: 10px;
        padding: 0.5rem;
        margin-right: 2rem;
    }

    button:hover {
        color: var(--mainColor)
    }
`;

export const LogoImg  = styled.img`
    width: 60px;

    @media screen and (max-width: 500px){
        width: 70px;
    }
`;

export const TMDBLogoImg = styled.img`
    width: 60px;


    @media screen and (max-width:500px) {
        width: 70px;
    }

`;