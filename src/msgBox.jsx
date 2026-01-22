import "./msgBox.css"
function Msg({ name = "xyz", colors }) {
    return (
        <p style={{color: colors}} > Hello, { name }</p >
    );
}

export default Msg