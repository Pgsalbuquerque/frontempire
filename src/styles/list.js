import styled from 'styled-components';

export const Background = styled.div`
    margin-top: 10px;
    margin-left: 6%;
    display: grid;
    grid-template-columns: 200px 200px 200px 200px 200px 200px;
    grid-auto-rows: 180px;
    row-gap: 10px;
    justify-content: space-evenly;
`;

export const DivCard = styled.div`
    width: 200px;
    height: 180px;
    background-color: #464545;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const DivFlex = styled.div`
    display: flex;
    flex-direction: row;
`;

export const DivBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;