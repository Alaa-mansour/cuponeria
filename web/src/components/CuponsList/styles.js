import styled from 'styled-components';
import { Eye } from "styled-icons/bootstrap";
import { Pencil } from "styled-icons/boxicons-regular";
import { TrashAlt, Lock } from "styled-icons/boxicons-regular";

export const Container = styled.div`
    align-items: center;

    margin-top: 15px;
    padding: 10px 0px;

    border-radius: 5px;
`;

export const Button = styled.button`
    margin-left: auto;
    display: block;

    color: var(--text-gray);
    background-color: var(--yellow);

    padding: .375rem .75rem;
    border-radius: .25rem;

    &:hover {
        background: var(--seconday-gray);
        color: black;
      }
`;

export const Header = styled.div`
      display: flex;
      justify-content: space-between;

      max-width: 96%;
      margin: 0 auto;

      height: 43px;
`;

export const TableSection = styled.div`
      padding:20px 0px;
      background: var(--white);
`;

export const ViewIcon = styled(Eye)`
      width: 19px;
      height: 19px;

      cursor: pointer;
      color: var(--light-blue);
`;
export const EditIcon = styled(Pencil)`
      width: 19px;
      height: 19px;

      cursor: pointer;
      color: var(--light-blue);
`;

export const DeleteIcon = styled(TrashAlt)`
      width: 19px;
      height: 19px;

      cursor: pointer;
      color: var(--light-blue);
`;

export const LockIcon = styled(Lock)`
      width: 19px;
      height: 19px;

      cursor: pointer;
      color: var(--light-blue);
`;