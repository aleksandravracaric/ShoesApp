import { useEffect, useMemo } from "react";
import { useState } from "react";
import ShoesHeader from "./ShoesHeader";
import { fetchAllShoes, fetchShoes } from "../services/Api";
import ShoeGrid from "./ShoeGrid";
import { useNavigate } from "react-router-dom";
import { localShoes } from "../services/Mock";
import "./Box.css";




export default function Dashboard() {

    const [shoes, setShoes] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {

        // setLoading(true)

        //  Mock data
        //setShoes(localShoes) 

        //    option 1
        // async function loadShoes() {
        //     try {
        //         const shoeList = await fetchShoes()
        //         setLoading(false)
        //         setShoes(shoeList);
        //         console.log(shoeList)
        //     } catch (error) {
        //         console.log(error.response.data.message)
        //         setLoading(false)
        //         setError(error)
        //     }
        // }
        // loadShoes()




        //      option 2
        fetchAllShoes()
            .then(response => {
                setLoading(false)
                setShoes(response.data)
                setError(null)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.response.data.message)
                setLoading(false)
                setError(error)
            })

    }, [])


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

    const getMainContent = () => {
        if (error === null) {
            return getGridView()
        } else {
            return getErrorView()
        }
    }

    if (loading) {
        return (
            <div className="container-fluid ">
                <div className="row">
                    <ShoesHeader />
                </div>
                <div className="loadingShoes">
                    <h1>Loading...</h1>
                </div>
            </div>
        )
    }


    return (
        <div className="container-fluid ">
            <div className="row">
                <ShoesHeader />
            </div>
            {getMainContent()}
        </div>
    )
}