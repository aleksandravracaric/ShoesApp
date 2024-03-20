import ShoeItem from "./ShoeItem";
import "./Box.css"


export default function ShoeGrid({ shoeList }) {
    return (
        <div className="grid">
            {shoeList?.map((shoe => (
                <div className="box">
                    <ShoeItem shoe={shoe} />
                </div>
            )))}
        </div>
    );
}