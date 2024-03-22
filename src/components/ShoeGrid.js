import ShoeItem from "./ShoeItem";
import "./Box.css"


export default function ShoeGrid({ shoeList }) {
    return (
        <div className="grid">
            {shoeList?.map((s=> (
                <div className="box" key={s.id}>
                    <ShoeItem shoe={s} />
                </div>
            )))}
        </div>
    );
}