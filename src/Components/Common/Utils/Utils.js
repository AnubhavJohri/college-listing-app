export function getStringJSX(place){
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
            }
            arr.push(<><span className="boldText">{distance}</span><span className="plainText">{placeName+((i===(l-1))?'':', ')}</span></>)
        })
        return arr;
    }
}