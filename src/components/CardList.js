import React from 'react';
import Card from './Card';





const CardList = ({drummers}) => {
    const cardsArray = drummers.map((user, i) => {
        return <Card 
        key={i} 
        id={drummers[i].id} 
        name={drummers[i].name} 
        band={drummers[i].band} 
        born={drummers[i].born} 
        image={drummers[i].thumbUrl}
         />
    })
    return (  
        <div> 
            {cardsArray}
        
    </div>




    ); 

    
}

export default CardList;