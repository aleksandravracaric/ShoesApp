import { useEffect, useMemo } from "react";
import { useState } from "react";
import ShoesHeader from "./ShoesHeader";
import { fetchAllShoes, fetchShoes } from "../services/Api";
import ShoeGrid from "./ShoeGrid";
import { useNavigate } from "react-router-dom";
import { localShoes } from "../services/Mock";



export default function Dashboard() {

    

   

    const [shoes, setShoes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        //  Mock data
       // setShoes(localShoes) 
  
        //    option 1
        // async function loadShoes() {
        //     const shoeList = await fetchShoes()
        //     setShoes(shoeList);
        //     console.log(shoeList)
        // }
        // loadShoes()



        //      option 2
        fetchAllShoes()
        .then(response => {
            setShoes(response.data)
            console.log(response.data)
        })
        .catch(error =>{
            navigate('/error/')
            console.log(error)

        })

    }, [])



    return (


        <div className="container-fluid ">
            <div className="row">
                <ShoesHeader />
            </div>
            <div className="row ">
                <ShoeGrid shoeList={shoes} />
            </div>
        </div>


    )
}