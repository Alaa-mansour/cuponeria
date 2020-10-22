import React from 'react';
import { Link } from "react-router-dom";


import { Container, Button, Header, TableSection, ViewIcon, EditIcon, DeleteIcon, LockIcon } from './styles';



const CuponsList = (props) => {

    return (
        <Container>
            <div style={headerContainer}>
                <Header>
                    <h6>Listagem de Cupons</h6>
                    <Link to="/cadastrar">
                        <Button type="button" >Cadastrar Cupons</Button>
                    </Link>
                </Header>
            </div>
            <TableSection>
            <table className="table table-striped" style={tableStyle}>
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Shopping</th>
                    <th scope="col">Loja</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Status</th>
                    <th scope="col">Opacoes</th>
                    </tr>
                </thead>
                <tbody>
                    {!props.loading ? props.cupons.map(cupon => (
                        <tr key={cupon.cupon_id}>
                            <td scope="row">{cupon.cupon_id}</td>
                            <td>{props.malls.find(x => cupon.mall_id == x.mall_id )?.mall_name}</td>
                            <td>{props.shops.find(x => cupon.shop_id == x.shop_id )?.shop_name}</td>
                            <td>{cupon.title}</td>
                            <td>{cupon.title}</td>
                            <td>{cupon.start_date < cupon.end_date ? "ATIVA" : "NÃO ATIVA"}</td>

                            <td><ViewIcon /> <EditIcon /> <DeleteIcon /> <LockIcon /></td>
                        </tr>
                    )): <></>}

                </tbody>
            </table>
        </TableSection>
        </Container>
    )
}

const tableStyle = {
    maxWidth:"90%",
    margin: "0 auto",
    padding: "20px 0",
    border: "1.2px solid rgba(0,0,0,0.2)"
}

const headerContainer = {
    borderBottom:"1.2px solid rgba(0,0,0,0.2)",
    background:"var(--primary)",
    padding: "10px 0px"
}

export default CuponsList;