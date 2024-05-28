// create your App component here

import React, {useState, useEffect} from 'react'

const App = () => {
    const [dogImage, setDogImage] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then ((resp) => resp.json())
        .then ((data) => {
        console.log(data);
        setDogImage(data.message)
        setLoaded(true)
    })
    }, [])
    if (!loaded) return <p>Loading...</p>
    return (
        <div>
            <img src={dogImage} alt="A Random Dog"></img>

        </div>
        
    )
}

export default App