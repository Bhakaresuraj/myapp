import "./Price.css"
export default function Price(oldPrice, newPrice) {
    let styles = {
        textDecorationLine: "line-through"
    }
    let newstyles = {
        fontWeight: "bold"
    }
    return <div className="Price">
        <span style={styles}>{OldPrice}</span>
        {/* &nbsp;&nbsp;&nbsp; */}
        <span style={newstyles}>{newPrice}</span>
    </div>
}