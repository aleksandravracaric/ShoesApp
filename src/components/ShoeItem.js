export default function ShoeItem({shoe}){

    return(
        <div>
            <img src={shoe.image} alt="new" width={200} height={200}/>
            <h3>{shoe.name}</h3>
            <h4>${shoe.price}</h4>
        </div>
    )
}