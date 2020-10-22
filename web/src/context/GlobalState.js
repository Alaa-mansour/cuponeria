import React, { createContext, useReducer } from "react";
import axios from "axios";

import AppReducer from "./AppReducer";

const initialState = {
    shops: [],
    malls: [],
    cupons: [],
    loading: true,
    message: "",
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const getShops = async() => {
        try{
            const response = await fetch("http://localhost:5000/lojas");
            const jsonData = await response.json();
            dispatch({ type: "SET_SHOPS", payload: jsonData});
        }
        catch(error){
            console.log(error.message);
        }
    }

    const getMalls = async() => {
        try{
            const response = await fetch("http://localhost:5000/shoppings");
            const jsonData = await response.json();
            dispatch({ type: "SET_MALLS", payload: jsonData});
        }
        catch(error){
            console.log(error.message);
        }
    }

    const getCupons = async() => {
        try{
            dispatch({ type: "SENDING_REQUEST"})
            const response = await fetch("http://localhost:5000/cupons");
            const jsonData = await response.json();
            dispatch({ type: "REQUEST_FINISHED"});
            dispatch({ type: "SET_CUPONS", payload: jsonData});
        }
        catch(error){
            console.log(error.message);
        }
    }

    const createCupon = async cupon => {
        if(!cupon) {
            dispatch({type: "WRONG_INFO"})
        } else {
            const newCupon = {
                cupon_title: cupon.cupon_title,
                shop_id: cupon.shop_id,
                mall_id: cupon.mall_id,
                start_date: cupon.start_date,
                end_date: cupon.end_date,
                description: cupon.description,
                observation: cupon.observation,
                cupon_photo: cupon.photo,
                cupon_type : cupon.cupon_type
            }

        if( !newCupon.start_date && !newCupon.end_date ) {
            dispatch("MISSING_DATE");
        }

            const response = await axios.post('http://localhost:5000/cupons',newCupon);
            if(response.data.message === "User added successfully!" ){
                dispatch({type: "SUCCESS_CREATION"})
            }
            console.log("CREATE USER #####", response);
        }

    }


    return (
        <GlobalContext.Provider value={{
            malls: state.malls,
            shops: state.shops,
            cupons: state.cupons,
            loading: state.loading,
            message : state.message,
            getShops,
            getMalls,
            getCupons,
            createCupon,

        }}>
            {children}
        </GlobalContext.Provider>
    )
}