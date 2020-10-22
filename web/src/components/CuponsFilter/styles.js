import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;

    margin-top: 15px;
    margin-bottom: 30px;
    padding: 10px 0px;
    background-color: var(--primary);

    border-radius: 5px;
    box-shadow: rgba(0,0,0,0.2) 1px 2px 1px -1px;


`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;

    min-width: 100%;
    justify-content: space-around;

    background-color: var(--white);
    border-top: 1.2px solid rgba(0,0,0,0.2);
    border-bottom: 1.2px solid rgba(0,0,0,0.2);

    padding: 15px 0px;

    @media(max-width: 768px) {
        flex-direction: column;
        padding: 15px 10px;
    }
`;

export const FormGroup = styled.div`
    width: 30%;
    > p {
        color: var(--text-gray);
        margin-bottom: 6px;
    }

    @media(max-width: 768px) {
        width: 100%;
        margin-bottom: 1.4em;
    }

`;

export const Button = styled.button`
    margin-left: auto;
    display: block;
    margin-top: 20px;
    margin-right: 28px;

    color: var(--text-gray);
    background-color: var(--light-gray);

    padding: .375rem .75rem;
    border-radius: .25rem;

    &:hover {
        background: var(--seconday-gray);
        color: black;
      }
`;

export const Header = styled.div`
      display: flex;

      max-width: 96%;
      margin: 0 auto;

      height: 43px;
`;
