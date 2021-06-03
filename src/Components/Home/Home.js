import {useState, useEffect, useRef, useCallback} from 'react';
import collegeList from "../../Utils/colleges.json";
import CollegeCard from "../Common/CollegeCard";
import "./Home.css";

function Home (){
    const [ collegeData, setCollegeData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ currSize, setCurrSize ] = useState(10);
    const [ isEnd , setIsEnd ] = useState(false);
    const parentDivRef = useRef(null);
    let modifiedGetMoreData = null;

    /*DEBOUNCED FUNCTION:- CREATED DEBOUNCED FUNCTION TO FIRE SCROLL EVENT ONLY AFTER A CERTAIN
    TIME TO REDUCE THE NUMBER OF TIMES IT'S FIRED*/
    const debouncedHandleScroll = useCallback((fn, d) =>{
        let timer;
        return function(e){
            clearTimeout(timer);
            timer = setTimeout(()=>fn(e),d);
        }
    },[])

    useEffect(()=>{
        document.body.style.overflow = 'hidden';

        /**-------------------------------NOTE--------------------------------- 
         * ALL SETTIMEOUT DELAYS WHILE LOADING ARE JUST GIVEN TO MAKE INFINITE SCROLL LOOK LIKE
         * DATA IS BEING CALLED FROM API AND TO MAKE LOOK INFINITE SCROLL LOOK MORE
         * HIGHLIGHTED AND PROMINENT.
         */
        modifiedGetMoreData = debouncedHandleScroll(getMoreData, 1000);
        const modifiedHandleScroll = debouncedHandleScroll(handleScroll, 600);
        parentDivRef.current.addEventListener("scroll", modifiedHandleScroll)
        setCollegeData(collegeList.colleges.slice(0,currSize));

        /*REMOVE EVENT LITSENER WHEN COMPONENT UNMOUNTS*/
        return ()=>parentDivRef&&parentDivRef.current&&parentDivRef.current.removeEventListener("scroll", modifiedHandleScroll);
    },[])

    function getMoreData(){
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
        parentDivRef.current.scrollTop = parentDivRef.current.scrollTop-400;
    }

    /** HANDLES SCROLL AND CHECKS IF WE HAVE TO LOAD MORE DATA BASED ON THE FACT
     * WHETHER WE HAVE REACHED ALMOST AT THE END OF THE SCROLL
     */
    function handleScroll(e){
        if(((e.target.scrollTop + e.target.clientHeight+200) >= (e.target.scrollHeight))&&!isLoading){
            setIsLoading(true);
            modifiedGetMoreData();
        }
    }

    return (
        <div 
         ref={parentDivRef} 
         style={{ height: '656px', overflowY:'scroll', marginTop: '21px'}}>
             <span className="ParentDivTitle"><b>Colleges in North India</b></span>
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
            {(isEnd&&!isLoading)?<span style={{fontSize:'60px', marginLeft:'522px', paddingBottom:'300px'}}>No More Data To Fetch</span>:null}
        </div>
    )
}


export default Home;