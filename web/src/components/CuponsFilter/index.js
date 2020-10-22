import React,{useState} from 'react';

import { Container, Form, FormGroup, Button, Header } from './styles';

const CuponsFilter = (props) => {
    const [mall_id, setMall] = useState(0);
    const [shop_id, setShop] = useState(0);

    return (
        <Container>
            <Header>
                <h6>Filtrar Cupons</h6>
            </Header>
            <Form>
                <FormGroup>
                    <p>Shopping</p>
                    <select className="form-control" onChange={e => setMall(e.target.value)}>
                        <option value={0}>Default select</option>
                        {props.malls.map(mall =>(
                            <option key={mall.mall_id} value={mall.mall_id}>{mall.mall_name}</option>
                        ))}
                    </select>
                </FormGroup>
                <FormGroup>
                    <p>Loja</p>
                    <select className="form-control"  onChange={e => setShop(e.target.value)}>
                        <option value={0}>Default select</option>
                        {props.shops.map(shop => (
                            <option key={shop.shop_id} value={shop.shop_id}>{shop.shop_name}</option>
                        ))}
                    </select>
                </FormGroup>
                <FormGroup>
                    <p>Status</p>
                    <select className="form-control">
                        <option>Default select</option>
                    </select>
                </FormGroup>
            </Form>
            <Button type="button" onClick={()=> props.onFilter(mall_id, shop_id)}>Filtrar</Button>

        </Container>
    )
}

export default CuponsFilter;