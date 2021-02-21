import { useState, useEffect } from 'react';

function StarRating({rate}){
    const [ displayRating, setDisplayRating] = useState([]);

    useEffect(()=>{
        const intRate = parseInt(rate);
        let finalRating = 0;
        if((rate-intRate)>0.5){ finalRating = intRate+1 ;}
        else {finalRating = intRate;}
        let arr = []; 
        for( let i = 1 ; i <= 5 ; i++){
            let customColor = 'black';
            if(i>finalRating){ customColor = 'gray'; }
            arr.push(<span key={i} style={{color:customColor}}>&#9733;</span>);
        }
        setDisplayRating(arr);

    },[])

    return <>{(displayRating&&displayRating.length>0)?displayRating:<span>Ratings Not Available</span>}</>;
}

export default StarRating;