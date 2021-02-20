import {useState, useEffect, useRef, useCallback} from 'react';
import collegeList from "../../Utils/colleges.json";
import CollegeCard from "../Common/CollegeCard";

function Home (){
    const [ collegeData, setCollegeData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ currSize, setCurrSize ] = useState(10);
    const [ isEnd , setIsEnd ] = useState(false);
    const parentDivRef = useRef(null);

    const debouncedHandleScroll = useCallback((fn, d) =>{
        let timer;
        return function(e){
            clearTimeout(timer);
            timer = setTimeout(()=>fn(e),d);
        }
    },[])

    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        const modifiedHandleScroll = debouncedHandleScroll(handleScroll, 600);
        parentDivRef.current.addEventListener("scroll", modifiedHandleScroll)
        setCollegeData(collegeList.colleges.slice(0,currSize));

        return ()=>parentDivRef&&parentDivRef.current&&parentDivRef.current.removeEventListener("scroll", modifiedHandleScroll);
    },[])

    function handleScroll(e){
        if(((e.target.scrollTop + e.target.clientHeight) >= (e.target.scrollHeight))&&!isLoading){
            setIsLoading(true);
            setTimeout(()=>{
                let temp = 0;
                setCurrSize(n=>temp=n);
                if((temp+10)<=50)
                {
                    setCurrSize(temp+10);
                    setCollegeData([...collegeList.colleges.slice(0,temp+10)]);
                    setIsLoading(false);
                    setIsEnd(false);
                }
                else{
                    setIsLoading(false);
                    setIsEnd(true);
                }
                parentDivRef.current.scrollTop = parentDivRef.current.scrollTop-300; 
            },2000);
        }
    }

    return (
        <div 
         ref={parentDivRef} 
         style={{ height: '656px', overflowY:'scroll'}}>
            {collegeData.map(college=>
            <CollegeCard 
            key={college.college_name}
            collegeName = {college.college_name}
            promoted = {college.promoted}
            discount = {college.discount}
            originalFees = {college.original_fees}
            discountedFees = {college.discounted_fees}
            feesCycle = {college.fees_cycle}
            image = {college.image}
            ranking = {college.ranking}
            tags = {college.tags}
            amenities = {college.amenties}
            rating = {college.rating}
            ratingRemarks = {college.rating_remarks}
            famousNearbyPlaces = {college.famous_nearest_places}
            nearestPlace = {college.nearest_place}
            offerText = {college.offertext}
            />)}
            {isLoading?<span style={{fontSize:'60px', marginLeft:'522px', paddingBottom:'180px', display:'block'}}>Loading.....</span>:null}
            {isEnd?<span style={{fontSize:'60px', marginLeft:'522px', paddingBottom:'180px'}}>No More Data To Fetch</span>:null}
        </div>
    )
}


export default Home;