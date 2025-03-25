import Welcome from "../components/Welcome"

function DonatePage () {
    return(<>
        <Welcome />
        <h2>Donate</h2>

        <div>
            <input type="number" placeholder="Enter donation amount" />
            <button> Add to cart</button>
        </div>
    
    
    </>)
}

export default DonatePage