import Styled, { keyframes } from 'styled-components';

/* 
* ANIMATIONSSSS!!!
*/

const Loukura = keyframes`
    0% {
        background: #d81b60;
        transform: rotate(0deg);
    } 20% {
        background: #ba68c8;
        transform: rotate(72deg);
    } 40% {
        background: #212121;
        transform: rotate(144deg);
    } 60% {
        background: #2196f3;
        transform: rotate(216deg);
    } 80% {
        background: #26a69a;
        transform: rotate(288deg);
    } 100% {
        background: #d81b60;
        transform: rotate(360deg);
    }
`;

export const Container = Styled.div`
    padding: 30px 65px;
`;

export const Titulo = Styled.h1`
    color: #424242;
    text-align: center;
    font-family: 'Sans-serif';
`;

export const Paragrafo = Styled.p`
    color: ${props => props.error ? '#e64a19' : '#546e7a'};
    font-size: ${props => props.error ? '30px' : '14px'};
    font-weight: ${props => props.error ? '600' : 'normal'};
    transition: all 0.5s ease;
    height: 60px;
    margin: ${props => props.margin || '0px'};
    font-family: 'Sans-serif';
`;

export const AlternaError = Styled.button`
    color: #fff;
    background: #26a69a;
    font-size: 14px;
    padding: 0 16px;
    height: 36px;
    border-radius: 2px;
    border: 0px;
    cursor: pointer;
    font-family: 'Sans-serif';
    margin: 15px 0;
`;

export const Line = Styled.div`
    background: #616161;
    height: 1px;
`;

export const BolaAleatoria = Styled.div`
    width: 70px;
    height: 70px;
    border-radius: 10px;
    background: #212121;
    animation: ${Loukura} 1.5s linear infinite forwards;
    margin: 5px;
`;


