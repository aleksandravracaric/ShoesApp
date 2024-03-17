import { useEffect, useMemo } from "react";
import {useState} from "react";
import ShoesHeader from "./ShoesHeader";
import { fetchShoes } from "../services/Api";
import ShoeGrid from "./ShoeGrid";

export default function Dashboard() {

    const [shoes, setShoes] = useState([]);
    useEffect(() => {
        async function loadShoes() {
            const shoeList = await fetchShoes()
            setShoes(shoeList);
            console.log(shoeList)
        }

        loadShoes()
    }, [])



    return (
        <div className="container-fluid  bg-primary min-vh-100">
            <div className="row">
                <div className=" col-xl-12 col-md-12 col-sm-12">
                    <ShoesHeader />
                    <ShoeGrid shoeList={shoes}/>
                </div>
            </div>
        </div>
    )
}