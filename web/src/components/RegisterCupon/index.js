import React, {useState,useEffect, useContext } from 'react';

import InputField  from "../InputField";
import SelectField  from "../SelectField";

import { GlobalContext } from "../../context/GlobalState";

import { Container, Header, Form, Button,FormGroup } from './styles';


const RegisterCupon = () => {
    const context = useContext(GlobalContext);


    const [title, setTitle] = useState("");
    const [mall_id, setMall] = useState(0);
    const [shop_id, setShop] = useState(0);
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const [file, setFile] = useState("");
    const [description, setDescription] = useState("");
    const [observation, setObservation] = useState("");
    const [cupon_type, setType] = useState("");

    const [error,setError] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        let newCupon ={
            cupon_title: title,
            mall_id,
            shop_id,
            start_date,
            end_date,
            description,
            observation,
            cupon_type
        }

        if(!Object.entries(newCupon).filter(([k,v],i)=>!!v).length) {
            setError("por favor preencha todos os campos")
        }
        else if(start_date > end_date) {
            setError("O data de termino nao pode ser menor de data de inicio")
        }
        else {
            context.createCupon(newCupon)
            setError("Seu cupon foi criado com sucesso!")
        }
    }

    const handleCleaning = e => {
        setTitle("")
        setMall(0)
        setShop(0)
        setStartDate("")
        setEndDate("")
        setFile("")
        setDescription("")
        setObservation("")
        setType("")

    }

    useEffect(() => {
        context.getShops();
        context.getMalls();
    },[]);

    const handleRendering = type => {
        switch(type) {
            case "by_percentage" :
                return (
                    <>
                        <InputField id="preco_original"
                                    label="Preco Original"
                                    type="text"
                                    name="preco_original"
                                    placeholder="Preco Original"
                           />
                        <InputField id="percentage"
                                    label="(%) de desconto"
                                    type="text"
                                    name="percentage"
                                    placeholder="(%) de desconto"
                            />
                    </>
                );
            case "by_reals" :
                return (
                    <>
                      <InputField id="preco_original"
                                    label="Preco Original"
                                    type="text"
                                    name="preco_original"
                                    placeholder="Preco Original"
                           />
                        <InputField id="price_discount"
                                    label="(%) de desconto"
                                    type="text"
                                    name="price_discount"
                                    placeholder="(%) de desconto"
                            />

                    </>
                )
            case "buy_one_get_one" :
                return (
                    <>
                     <InputField id="pay_x"
                                    label="Pague XX"
                                    type="text"
                                    name="pay_x"
                                    placeholder="Pague X"
                           />
                    <InputField id="get_y"
                                label="Leve Y"
                                type="text"
                                name="get_y"
                                placeholder="Leve Y"
                        />
                    </>
                )
            case "buy_win" :
                return (
                    <>
                      <InputField id="buy_x"
                                    label="Compre X"
                                    type="text"
                                    name="buy_x"
                                    placeholder="Compre X"
                           />
                    <InputField id="win_y"
                                label="Ganhe Y"
                                type="text"
                                name="win_y"
                                placeholder="Leve Y"
                        />
                    </>
                )
        }
    }



    return (
        <div className="container-fluid">
            <Container>
                <Header>Dados Básicos</Header>

                <Form>
                    <SelectField label="Shopping"
                                 name="mall_id"
                                 value={mall_id}
                                 onChange={e => setMall(e.target.value)}
                                 options={[
                                    context.malls.map(mall=>(
                                        <option key={mall.mall_id} value={mall.mall_id}>{mall.mall_name}</option>
                                    ))
                                    ]}

                    />
                     <SelectField label="Loja"
                                 name="shop_id"
                                 value={shop_id}
                                 onChange={e => setShop(e.target.value)}
                                 options={[
                                    context.shops.map(shop=>(
                                        <option key={shop.shop_id} value={shop.shop_id}>{shop.shop_name}</option>
                                        ))
                                    ]}
                    />
                    <InputField id="title"
                                label="Titulo de Cupon"
                                type="text"
                                name="percentage"
                                placeholder="Titulo de Cupon"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                        />

                    <InputField id="start_date"
                                label="Data de Inicio"
                                type="date"
                                name="start_date"
                                value={start_date}
                                onChange={e => setStartDate(e.target.value)}
                        />
                    <InputField id="end_date"
                        label="Data de Término"
                        type="date"
                        name="end_date"
                        value={end_date}
                        onChange={e => setEndDate(e.target.value)}
                        />


                    <FormGroup>
                            <label htmlFor="description">Descricao</label>
                            <textarea className="form-control" id="description" placeholder="Descricao" value={description} onChange={e => setDescription(e.target.value)} name="description" ></textarea>
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="observation">Observacao</label>
                        <textarea className="form-control" id="observation" placeholder="Observacao" value={observation} onChange={e => setObservation(e.target.value)}  name="observation" ></textarea>
                    </FormGroup>

                    <SelectField label="Tipo de cupom"
                                 name="cupon_type"
                                 value={cupon_type}
                                 onChange={e => setType(e.target.value)}
                                 options={[
                                     <>
                                        <option value="by_percentage">Desconto em % </option>
                                        <option value="by_reals">Desconto em R$</option>
                                        <option value="buy_one_get_one">Pague X Leve Y</option>
                                        <option value="buy_win">Compre e Ganhe</option>
                                    </>
                                    ]}
                    />

                    {handleRendering(cupon_type)}
                </Form>

                <div style={flex_btns}>
                    <Button type="submit" onClick={handleSubmit}>Salvar</Button>
                    <Button onClick={handleCleaning}>Limpar</Button>
                </div>
                 <small style={errorMessage}>{error}</small>
            </Container>
        </div>
    )

}


const flex_btns = {
    display: "flex",
    margin: "20px 23px"
}
const errorMessage = {
    color: "red",
    marginLeft: 20
}
export default RegisterCupon;