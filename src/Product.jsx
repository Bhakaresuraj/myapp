import "./Product.css";

function Product({ title, price, position, object }) {
    // console.log(position);
    let style = {
        // backgroundColor: price >= 40000 ? "purple" : ""
        backgroundColor:"aqua"
    };
    return (
        <div className="Product" >
            <h1>{title}</h1>
            <p>having price {price}</p>
            {price >= 30000 && <p style={style}>Discount :10%</p>}
        </div>
    )
}

export default Product;