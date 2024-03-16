import { useEffect } from "react";
import ShoesHeader from "./ShoesHeader";
import { fetchShoes } from "../services/Api";

export default function Dashboard() {
    useEffect(() => {
        async function loadShoes() {
            const shoes = await fetchShoes()
            console.log(shoes)
        }

        loadShoes()
    })



    return (
        <div className="container-fluid  bg-primary min-vh-100">
            <div className="row">
                <div className=" col-xl-12 col-md-12 col-sm-12">
                    <ShoesHeader />
                </div>
            </div>
        </div>
    )
}