import React, {useEffect, useContext, useState} from 'react';

import CuponsFilter from "../components/CuponsFilter";
import CuponsList from "../components/CuponsList";

import { GlobalContext } from "../context/GlobalState";



const HomePage = () => {
    const { shops, malls,cupons, getShops, getMalls, getCupons, loading } = useContext(GlobalContext);
    const [filteredCupons, setCupons ] = useState();

    useEffect(() => {
        getCupons();
        getShops();
        getMalls();
    },[]);

    const filter = (mall, shop) => {
        if(mall) {
            setCupons(cupons.filter(value => value.mall_id == mall))
        }
        if(shop) {
            setCupons(cupons.filter(value => value.shop_id == shop))
        }

        if(mall==0 && shop ==0 ){
            setCupons(cupons)
        }

    }

    return (
        <div className="container-fluid">
            <CuponsFilter malls={malls} shops={shops} onFilter={filter}  />
            <CuponsList malls={malls} shops={shops} cupons={ filteredCupons? filteredCupons :  cupons}  loading={loading}/>
        </div>
    )
}

export default HomePage;