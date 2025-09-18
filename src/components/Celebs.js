import data from '../Data/dummyData.json'
import '../Style/Celebs.css'
import { use, useEffect, useState } from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'


function Celebs() {
    const[leftData, setLeftData] = useState([])
    const[rightData, setRightData] = useState([])

    useEffect(()=>{
        let mid = Math.floor(data.length/2)
        setLeftData(data.slice(0, mid))
        setRightData(data.slice(mid))
    },[])
   
    // for(let i=0; i<data.length; i++){

    // }
     console.log("leftData -",leftData)
     console.log("rightData", rightData)

    return (
        <div className="Parent-container" >
            <div className="left-child" >
        <LeftContainer/>
            </div>
            <div className="right-child" >
                <RightContainer/>
            </div>
        </div>
    )
}

export default Celebs