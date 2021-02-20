import {useState, useEffect} from 'react';
import collegeList from "../../Utils/colleges.json";
import CollegeCard from "../Common/CollegeCard";

function Home (){
    const [ collegeData, setCollegeData ] = useState([]);

    useEffect(()=>{
        setCollegeData(collegeList.colleges.slice(0,10));
        console.log("collegeData=",collegeList.colleges);
    },[])

    return (
        <div>
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
        </div>
    )
}


export default Home;