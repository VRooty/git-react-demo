import cat from '../assets/funny-wet-cats-coverimage.jpg'
import {useState} from 'react'

export default function Child({name}) {

    console.log(useState(0))
    const [likes, setLikes] = useState(0)

    function handleLikes() {
        setLikes(likes+1)
    }

    return (
    <div>
        <h2>{name} is a child"</h2>
        <img src={cat} onClick= {handleLikes}></img>
       <span>♥{likes}</span>
    </div>
    )
}