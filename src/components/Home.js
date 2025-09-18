import { useNavigate } from "react-router-dom"

function Home() {
     const navigate = useNavigate()

     const handleCelebsClick = () => {
        navigate('/Celebs')
     }
     const handleInflunceClick = () => {
        navigate('/Influcer')
     }
     
    return (

        <div>
            <p>Hello</p>
            <button onClick={handleCelebsClick} >Celebs</button>
            <button onClick={handleInflunceClick} >Influcer</button>
        </div>
    )
}

export default Home