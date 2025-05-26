import Mountain1 from "../assets/mountain1.jpg";
import Mountain2 from "../assets/mountain2.jpg";
import Mountain3 from "../assets/mountain3.jpg";
import Mountain4 from "../assets/mountain4.jpg";
import goa from "../assets/g1.jpg";
import goa12 from "../assets/g2.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination">
            <h1 style={{ 
                color: "#512da8", 
                fontSize: "2.5rem", 
                fontWeight: "bold", 
                textTransform: "uppercase" 
            }}>
                Popular Destinations
            </h1>
            <p style={{ 
                fontSize: "1.2rem", 
                color: "#333", 
                marginBottom: "20px" 
            }}>
                Tours give you the opportunity to see a lot, within a time frame
            </p>

            <DestinationData
                className="first-des"
                heading="Shimla"
                text="Shimla is the capital and the largest city of the northern Indian state of Himachal Pradesh. In 1864, Shimla was declared the summer capital of British India. After independence, the city became the capital of East Punjab and was later made the capital city of Himachal Pradesh. It is the principal commercial, cultural and educational centre of the state.
                Small hamlets were recorded before 1815 when British forces took control of the area. The climatic conditions attracted the British to establish the city in the dense forests of the Himalayas. As the summer capital, Shimla hosted many important political meetings including the Simla Deputation of 1906, the Simla Accord of 1914 and the Simla Conference of 1945. After independence, the state of Himachal Pradesh came into being in 1948 as a result of the integration of 28 princely states. Even after independence, the city remained an important political centre, hosting the Simla Agreement of 1972. After the reorganisation of the state of Himachal Pradesh, the existing Mahasu district was named Shimla."
          img1={Mountain1}
          img2={Mountain2}
            />

            <DestinationData
                className="first-des-reverse"
                heading="Kanchenjunga"
                text="Khangchendzonga, is the third-highest mountain in the world. Its summit lies at 8,586 m (28,169 ft) in a section of the Himalayas, the Kangchenjunga Himal, which is bounded in the west by the Tamur River, in the north by the Lhonak River and Jongsang La, and in the east by the Teesta River. It lies in the border region between Koshi Province of Nepal and Sikkim state of India, with the two peaks West and Kangbachen in Nepal's Taplejung District and the other three peaks Main, Central and South directly on the border.
                      Until 1852, Kangchenjunga was assumed to be the highest mountain in the world, but calculations and measurements by the Great Trigonometrical Survey of India in 1849 showed that Mount Everest, known as Peak XV at the time, is actually higher. After allowing for further verification of all calculations, it was officially announced in 1856 that Kangchenjunga is the third-highest mountain of the world."
                img1={Mountain3}
                img2={Mountain4}
            />

            <DestinationData
                className="first-des"
                heading="Goa"
                text="state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.[9][10] It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west. It is India's smallest state by area and fourth-smallest by population. Goa has the highest GDP per capita among all Indian states,[6][11] two and a half times as high as the GDP per capita of the country as a whole.[12] The Eleventh Finance Commission of India named Goa the best-placed state because of its infrastructure, and India's National Commission on Population rated it as having the best quality of life in India (based on the commission's 12 Indicators).[12] It is the second-highest ranking among Indian states in the human development index.[7]
                Panaji is the state's capital, while Vasco da Gama is its largest city."
         img1={goa}  
         img2={goa12} 
            />
        </div>
    );
};

export default Destination;
