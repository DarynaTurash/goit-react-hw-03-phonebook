import styled from 'styled-components';

export const ListContainer = styled.div`
    margin-top: 35px;
    margin-left: 25px;
`;

export const StyledList = styled.ul`
    display: flex; 
    flex-direction: column;
    gap: 20px; 
    margin: 0;
    padding: 0;
`;

export const Contact = styled.li`
    display: flex;
    justify-content: centre;
    align-items: center;
    gap: 20px;

`;

export const Name = styled.p`
    font-weight: 600;
    font-size: 20px;
    margin: 0;

    &::before {
        content: "৹";
        margin-right: 10px;
    }
`;

export const Number = styled.p`
    font-size: 17px;
    margin: 0;
`;

export const ButtonDelete = styled.button`
    width: 70px;
    margin-left: 15px;
    padding: 7px 10px 7px 10px;
    border: 0;
    border-radius: 7px;
    font-weight: 600;
    background-color: #EFACAC;

    &:hover {
    background-color: #DA4949;
    color: white;
}
`;
