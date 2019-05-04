import Styled from 'styled-components';

export const Container = Styled.div`
    padding: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const Title = Styled.h1`
    text-align: center;
    text-transform: uppercase;
    color: #d84315;
`;

export const HeroName = Styled.p`
    color: ${props => props.heroColor || '#ef6c00'};
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
`;

export const CardLike = Styled.div`
    width: 250px;
    padding: 0px 15px;
    border-right: 3px solid #607d8b;
    
    cursor: pointer;
    
    &:last-child, &:first-child {
        border: 0;
    }
    &:nth-child(2) {
        border-left: 3px solid #607d8b;
    }

`;

export const HeroContainer = Styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
`;

export const HeroBox = Styled.div`
    margin-bottom: 15px;
`;

export const HeroImage = Styled.div`
    filter: ${props => props.isSelected || 'grayscale(100%)'};
    transition: 0.5s ease-in;
    max-width: 100%;

    &:hover {
        filter: grayscale(0%);
    }
`
