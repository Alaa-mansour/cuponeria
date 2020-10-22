import styled from 'styled-components';


export const Grid = styled.div`
    display: grid;

    grid-template-columns:  240px 200px 240px ;
    grid-template-rows: 46px auto 52px;

    grid-template-areas:
        'SH . LO'
        'TI DI DT'
        'DE . OB'
        'FO';

    height: 100vh;


`

export const Container = styled.div`
    align-items: center;

    margin-top: 15px;
    margin-bottom: 30px;
    padding: 10px 0px;
    background-color: var(--primary);

    border-radius: 5px;
    box-shadow: rgba(0,0,0,0.2) 1px 2px 1px -1px;


`;

export const Header = styled.div`
      display: flex;

      max-width: 96%;
      margin: 0 auto;

      background: var(--primary);
      height: 43px;
`;

export const Form = styled.form`
    min-width: 100%;

    background-color: var(--white);
    border-top: 1.2px solid rgba(0,0,0,0.2);
    border-bottom: 1.2px solid rgba(0,0,0,0.2);

    padding: 15px 20px;

    @media(max-width: 768px) {
        padding: 15px 10px;
    }
`;

export const FormGroup = styled.div`
    margin-bottom: 1.4em;

    > p {
        color: var(--text-gray);
        margin-bottom: 6px;
    }
`;


export const Button = styled.button`
    display: block;
    margin-left:23px;

    color: var(--text-gray);
    background-color: var(--light-gray);

    padding: .375rem .75rem;
    border-radius: .25rem;

    &:hover {
        background: var(--seconday-gray);
        color: black;
      }
`;