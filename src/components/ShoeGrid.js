import ShoeItem from "./ShoeItem";

export default function ShoeGrid({shoes}){
    return(
        <div>
            {shoes.map(shoe => 
                <ShoeItem key={shoe.id} shoe={shoe}/>
                )}
        </div>
    )
}