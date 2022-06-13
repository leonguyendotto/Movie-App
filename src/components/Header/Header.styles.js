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

    a {
        color: var(--white);
        text-decoration: none;
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