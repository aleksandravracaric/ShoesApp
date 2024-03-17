import { useState } from "react";
import ShoeItem from "./ShoeItem";

export default function ShoeGrid({shoeList}){

    return(
        // <div>
            shoeList?.map(shoe =>  (
                <ShoeItem key={shoe.id} shoe={shoe}/>
                )
            )
        // </div>
    )
}