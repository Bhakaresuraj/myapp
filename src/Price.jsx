import "./Price.css"
export default function Price(oldPrice,  nprice) {
    let styles = {
        textDecorationLine: "line-through"
    }
    let newstyles = {
        fontWeight: "bold"
    }
    return <div className="Price">
        <span style={styles}>{oldPrice}</span>
        {/* &nbsp;&nbsp;&nbsp; */}
        <span style={newstyles}>{nprice}</span>
    </div>
}