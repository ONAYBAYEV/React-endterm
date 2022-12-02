import React from 'react'
import {Button} from "@mui/material";

const CharacterItem = ({item}) => {

    const favorite = (item)=>{
        // алдыңғы элементті алу және жаңа favourite элементті қосу
        var previousData = JSON.parse(localStorage.getItem('favorites'))
        previousData.push(item)
        localStorage.setItem('favorites',JSON.stringify(previousData))
    }


    return (
        <div className='content'>
            <div className='content-inner'>
                <div className='content-front'>
                    <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
                </div>
                <div className='content-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Name:</strong> {item.name}
                        </li>
                        <li>
                            <strong>Description:</strong> {item.description}
                        </li>
                        <li>
                            <button type="button" onClick={()=>favorite(item)}>Favorite</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
