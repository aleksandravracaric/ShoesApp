import { useEffect, useMemo } from "react";
import { useState } from "react";
import ShoesHeader from "./ShoesHeader";
import { fetchAllShoes } from "../services/Api";
import { useNavigate } from "react-router-dom";
import "./Box.css";
import ShoeCard from "./ShoeCard";
import { localShoes } from "../services/Mock";




export default function Dashboard() {

    const [shoes, setShoes] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate();


    useEffect(() => {

         // setLoading(true)

        //  Mock data
        // setShoes(localShoes) 
        // setLoading(false)

        //  Option 1
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

        //   Option 2
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
            <div className="row">
                <div className="grid">
                    {shoes?.map((s => (
                        <div className="box" key={s.id}>
                            <ShoeCard shoe={s} />
                        </div>
                    )))}
                </div>

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
    } else {
        return (
            <div className="container-fluid ">
                <div className="row">
                    <ShoesHeader />
                </div>
                {getMainContent()}
            </div>
        )
    }
}