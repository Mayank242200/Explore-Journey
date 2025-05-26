import React from "react";
import "./TripStyles.css"; 
import TripData from "./TripData"; 
import Trip1 from "../assets/kutchh2.jpeg";
//import Trip1 from "../assets/kutchh2.jpeg";  
import Trip2 from "../assets/assam1.jpeg";
import Trip3 from "../assets/assam3.jpeg";
import Trip4 from "../assets/assam2.jpeg";
import Trip5 from "../assets/assam4.jpeg";
import Trip6 from "../assets/uttrakhand.jpg";

const Trip = () => {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    imgs={Trip1}
                    heading="Trip in kutchh"
                    text="Kutch district, officially spelled Kachchh, is a district of Gujarat state in western India,
                     
                     The area of Kutch is larger than the entire area of other Indian states like Haryana (44,212 km2) and Kerala (38,863 km2), 
                     as well as the country of Estonia (45,335 km2).[2] The population of Kutch is about 2,092,371.[3] It has 10 talukas,
                      939 villages and 6 municipalities.[3] The Kutch district is home to the Kutchi people who speak the Kutchi language."
                />
                <TripData
                    imgs={Trip2}
                    heading="Trip in Assam"
                    text="Assam is a state in northeastern India,
                     south of the eastern Himalayas along the Brahmaputra and Barak River valleys. 
                     Assam covers an area of 78,438 km2 (30,285 sq mi). 
                     It is the second largest state in northeastern India by area and the largest in terms of population, 
                     with more than 31 million inhabitants. The state is bordered by Bhutan and Arunachal Pradesh to the north; 
                     
                     Nagaland and Manipur to the east; Meghalaya, Tripura, Mizoram and Bangladesh to the south. " 
                     
                     t
                />
                <TripData
                    imgs={Trip3}
                    heading="Trip in Arunachal"
                    text="arunachal is a state in northeast India. It was formed from the North-East Frontier Agency (NEFA) region, and India declared it as a state on 20 February 1987. Itanagar is its capital and largest town. It borders the Indian states of Assam and Nagaland to the south. It shares international borders with Bhutan in the west."
                />
                <TripData
                    imgs={Trip4}
                    heading="Trip in Tripura"
                    text=" Tripura is a state in northeastern India. The third-smallest state in the country, it covers 10,491 km2 (4,051 sq mi); and the seventh-least populous state with a population of 3.67 million. It is bordered by Assam and Mizoram to the east and by Bangladesh to the north, south and west. Tripura is divided into 8 districts and 23 sub-divisions."
                />
                <TripData
                    imgs={Trip5}
                    heading="Trip in Keral"
                    text="keral is a state on the Malabar Coast of India. It was formed on 1 November 1956, following the passage of the States Reorganisation Act, by combining Malayalam-speaking regions of the erstwhile regions of Cochin, Malabar, South Canara, and Travancore. Spread over 38,863 km2 (15,005 sq mi), Kerala is the 21st largest Indian state by area. "
                />
                <TripData
                    imgs={Trip6}
                    heading="Trip in Uttrakhand"
                    text="uttrakhand is a state in northern India. The state is bordered by Himachal Pradesh to the northwest, Tibet to the north, Nepal to the east, Uttar Pradesh to the south and southeast, with a small part touching Haryana in the west. Uttarakhand has a total area of 53,483 km2 (20,650 sq mi), equal to 1.6 per cent of the total area of India."
                />    
            </div>
        </div>
    );
};

export default Trip;
