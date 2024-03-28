import { useEffect, useMemo } from "react";
import { useState } from "react";
import ShoesHeader from "./ShoesHeader";
import { fetchAllShoes, fetchShoes } from "../services/Api";
import ShoeGrid from "./ShoeGrid";
import { useNavigate } from "react-router-dom";
import { localShoes } from "../services/Mock";
import "./Box.css";
import Loading from "./Loading";



export default function Dashboard() {

    const [shoes, setShoes] = useState([]);
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        //  Mock data
         setShoes(localShoes) 

        //    option 1
        // async function loadShoes() {
        //     const shoeList = await fetchShoes()
        //     setShoes(shoeList);
        //     console.log(shoeList)
        // }
        // loadShoes()



        //      option 2
    //     fetchAllShoes()
    //         .then(response => {
    //             setShoes(response.data)
    //             setError(null)
    //             console.log(response.data)
    //         })
    //         .catch(error => {
    //             console.log(error.response.data.message)
    //             setError(error)
    //         })
    // }, [])
    })

    const getErrorView = () => {
        return (
            <div className="error">
                Oh no! Something went wrong. {error.message}
            </div>
        )
    }

    const getGridView = () => {
        return (
            <div className="row ">
                <ShoeGrid shoeList={shoes} />
            </div>
        )
    }



    return (
        <div className="container-fluid ">
            <div className="row">
                <ShoesHeader />
            </div>
            {error ? getErrorView() : getGridView()}
        </div>
    )
}