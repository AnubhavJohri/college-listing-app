import { useEffect, useState, memo} from 'react';
import "./CSS/CollegeCard.css";
import college01 from "../../Assets/college_01.jpg";
import { getStringJSX } from "./Utils/Utils";

const CollegeCard =  memo(({
    collegeName,
    promoted,
    discount,
    originalFees,
    discountedFees,
    feesCycle,
    ranking,
    tags,
    amenities,
    rating,
    ratingRemarks,
    famousNearbyPlaces,
    nearestPlace,
})=>{

    return(<div className="cardparentcontainer">
              <div className="collegeImageContainer">
                  <img className="collegeImage" src={college01} alt={'College Image'}/>
              </div>
              <div style={{position:'absolute',top:'187px'}}>
                  {tags&&tags.map(ele=><div className="tags">{ele[0].toUpperCase() + ele.substring(1)}</div>)}
              </div>
              <div className="ratingSquare">
                  <span style={{display:'block', fontSize:'18.5px', fontFamily:'DINpro'}}>{`${rating}/5`}</span>
                  <span style={{display:'block', fontSize:'13.5px', fontFamily:'DINpro'}}>{ratingRemarks}</span>
              </div>
              {promoted&&<div className="promotedBox">{'PROMOTED'}</div>}
              <span className="ranking">{`#${ranking}`}</span>
              <div style={{padding:'0 10px'}}>
                <div style={{display:'inline-block', width:'70%'}}>
                    <span className="collegeTitle">{collegeName}</span>
                    <div style={{margin: '11px 0 8px 0px'}}>
                        <span className="nearestPlaces">{`${nearestPlace[0]} |`}</span>
                        <span className="nearestPlacesDistance">{nearestPlace[1]}</span>
                    </div>
                    <div>
                        <span style={{color:'#37b396', fontSize:'13.5px', fontWeight:'bold'}}>{'93% Match : '}</span>{getStringJSX(famousNearbyPlaces)}
                    </div>
                    <div className="discountBox">
                        <span className="plainTextBlack">Flat </span><span className="boldText">Rs </span><span className="plainTextBlue">2000</span><span className="boldText"> off</span><span className="plainTextBlack"> + </span>
                        <span className="plainTextBlack">upto</span><span className="boldText"> Rs</span><span className="plainTextBlue"> 500</span><span className="plainTextBlack"> wallet! to avail...</span><span className="plainTextBlueGreen">LOGIN</span>
                    </div>
                </div>
                <div style={{display:'inline-block', width:'30%', textAlign:'right'}}>
                    <div style={{marginBottom:'12px'}}>
                        <span className="originalFees"><strike>&#8377;{originalFees}</strike></span>
                        <span className="discountVectorSymbol">&#183; {discount}</span>
                    </div>
                    <div>
                        <span className="semFees">&#8377;{discountedFees}</span>
                        <span className="semCycle">{feesCycle}</span>
                    </div>
                    <div style={{marginTop:'32px'}}>{amenities.map((am, i)=><span className="plainTextBlue">{am}{((i!==(amenities.length-1)))?<span> &#183; </span>:null}</span>)}</div>
                </div>
             </div>
        </div>);
})


export default CollegeCard;
