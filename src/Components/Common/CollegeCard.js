import { useEffect, useState, memo} from 'react';
import styles from "./CSS/CollegeCard.module.css";
import college01 from "../../Assets/college_01.jpg";

const CollegeCard =  memo(({
    collegeName,
    promoted,
    discount,
    originalFees,
    discountedFees,
    feesCycle,
    image,
    ranking,
    tags,
    amenities,
    rating,
    ratingRemarks,
    famousNearbyPlaces,
    nearestPlace,
    offerText
})=>{

    function getStringJSX(place){
        if(place){
            const placesArr = place.split(",");
            const l = placesArr.length;
            let arr = [];
            placesArr.forEach((ele, i)=>{
                const p = ele.trim();
                const sIndex = p.indexOf('s'), pL = p.length;
                let distance = "", placeName = "";
                if(sIndex){
                    distance = p.substring(0, sIndex);
                    placeName = p.substring(sIndex+1, pL);
                    // console.log('places=',p, sIndex, pL, distance, placeName);
                }
                arr.push(<><span className={styles.boldText}>{distance}</span><span className={styles.plainText}>{placeName+((i===(l-1))?'':', ')}</span></>)
            })
            return arr;
        }
    }

    return(<div className={styles.cardparentcontainer}>
              <div className={styles.collegeImageContainer}>
                  <img className={styles.collegeImage} src={college01} alt={'College Image'}/>
              </div>
              <div style={{position:'absolute',top:'187px'}}>
                  {tags&&tags.map(ele=><div className={styles.tags}>{ele[0].toUpperCase() + ele.substring(1)}</div>)}
              </div>
              <div className={styles.ratingSquare}>
                  <span style={{display:'block', fontSize:'18.5px'}}>{`${rating}/5`}</span>
                  <span style={{display:'block', fontSize:'13.5px'}}>{ratingRemarks}</span>
              </div>
              {promoted&&<div className={styles.promotedBox}>{'PROMOTED'}</div>}
              <span className={styles.ranking}>{`#${ranking}`}</span>
              <div style={{padding:'0 10px'}}>
                <div style={{display:'inline-block', width:'70%'}}>
                    <span className={styles.collegeTitle}>{collegeName}</span>
                    <div style={{margin: '11px 0 8px 0px'}}>
                        <span className={styles.nearestPlaces}>{`${nearestPlace[0]} |`}</span>
                        <span className={styles.nearestPlacesDistance}>{nearestPlace[1]}</span>
                    </div>
                    <div>
                        <span style={{color:'#37b396', fontSize:'13.5px', fontWeight:'bold'}}>{'93% Match : '}</span>{getStringJSX(famousNearbyPlaces)}
                    </div>
                    <div className={styles.discountBox}>
                        <span>{offerText}</span>
                    </div>
                </div>
                <div style={{display:'inline-block', width:'30%', textAlign:'right'}}>
                    <div style={{marginBottom:'12px'}}>
                        <span className={styles.originalFees}><strike>&#8377;{originalFees}</strike></span>
                        <span className={styles.discountVectorSymbol}>&#183; {discount}</span>
                    </div>
                    <div>
                        <span className={styles.semFees}>&#8377;{discountedFees}</span>
                        <span className={styles.semCycle}>{feesCycle}</span>
                    </div>
                    <div style={{marginTop:'32px'}}>{amenities.map((am, i)=><span className={styles.plainTextBlue}>{am}{((i!==(amenities.length-1)))?<span> &#183; </span>:null}</span>)}</div>
                </div>
             </div>
        </div>);
})


export default CollegeCard;
