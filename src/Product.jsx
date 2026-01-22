import "./Product.css";

function Product({ title, price, position, object }) {
    console.log(position);
    return (
        <div className="Product">
            <h1>Hello</h1>

            <p>hi this is {title}</p>
            <p>having price {price}</p>
            <p>{position}</p>
            <p>{object.name}</p>
            <p>{object.age}</p>
            <p>{object.gen}</p>
        </div>
    )
}

export default Product;