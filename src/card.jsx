import "./card.css"
import Price from "./Price.jsx"
function Card(idx) {
    let oldprice = ["12,999", "16,786", "89,930", "90,768"];
    let npricce = ["10,999", "13,987", "70,000", "85,000"];
    return (
        <div className="Card">
            <h1>Heading</h1>
            <p>Description</p>
            <p>Description</p>
            <Price oldprice={oldprice[idx]}  nprice={nprice[idx]}></Price>
        </div>
    );
}


export default Card;