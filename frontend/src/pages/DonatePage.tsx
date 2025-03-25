import { useNavigate, useParams } from "react-router-dom"
import Welcome from "../components/Welcome"

function DonatePage () {
    const navigate = useNavigate()
    const {projectName} = useParams()



    return(<>
        <Welcome />
        <h2>Donate to {projectName}</h2>

        <div>
            <input type="number" placeholder="Enter donation amount" />
            <button> Add to cart</button>
        </div>

        
        {/* <button onClick={() => navigate('/projects')}>Go Back</button> */}
        {/* This will send you back to the previous page */}
        <button onClick={() => navigate(-1)}>Go Back</button>
    
    
    </>)
}

export default DonatePage