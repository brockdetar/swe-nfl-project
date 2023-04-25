import { SliderData } from "./SliderData";
import { useState } from "react";
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from 'react-icons/fa';
import '../App.css';
import D_Fumbles from './WebScraper/team_Stats/D_Fumbles.json';
import D_Int from './WebScraper/team_Stats/D_Int.json';
import D_Passing from './WebScraper/team_Stats/D_Passing.json';
import D_Rushing from './WebScraper/team_Stats/D_Rushing.json';
import D_Scoring from './WebScraper/team_Stats/D_Scoring.json';
import O_Downs from './WebScraper/team_Stats/O_Downs.json';
import O_Passing from './WebScraper/team_Stats/O_Passing.json';
import O_Rushing from './WebScraper/team_Stats/O_Rushing.json';
import O_Scoring from './WebScraper/team_Stats/O_Scoring.json';
import O_Receiving from './WebScraper/team_Stats/O_Receiving.json';
import Team_Info from './WebScraper/team_Stats/Team_Info.json';


const ImageSliderLeft = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleUp className='up-arrow' onClick={prevSlide}/>
            {SliderData.map((slide, index) => {
                return(
                    <div classname={index === current ? 'slide active' : 'slide'} key= 
                    {index}>
                        {index - 1 === current && (
                            <img src={slide.image} alt="NFL Team" className="imageTop"/>

                        )}
                        {index === current && (
                            <img src={slide.image} alt="NFL Team" className="image"/>
                        )}
                        {index + 1 === current && (
                            <img src={slide.image} alt="NFL Team" className="imageBottom"/>    
                        )}

                        
                    </div>
                );

                    
                

                
            })}
            
            
            <FaArrowAltCircleDown className='down-arrow' onClick={nextSlide}/>

            <div class='text'>Location:</div>
            <td class="locationArea">{Team_Info[current].location.city}</td>
            <div class='text'>Team name:</div>
            <td class="locationArea">{Team_Info[current].location.team}</td>
            <div class='text'>Stadium:</div>
            <td class="locationArea">{Team_Info[current].location.stadium}</td> 
            
            <div class='text'>Stats:</div>
            <table class="statsTable">
            
            <th>Offense:</th>
            <tr>
                <td class="statsCategory"><span class="passyards">Pass Yards</span></td>
                <td class="statsCategory">{O_Passing[current].stats.PassYds}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="rushyards">Rush Yards</span></td>
                <td class="statsCategory">{O_Rushing[current].stats.RushYds}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="passtd">Pass TD</span></td>
                <td class="statsCategory">{O_Passing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="rushtd">Rush TD</span></td>
                <td class="statsCategory">{O_Rushing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="passcomppct">Pass Completion %</span></td>
                <td class="statsCategory">{O_Passing[current].stats["Cmp%"]}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="INT">INT Thrown</span></td>
                <td class="statsCategory">{O_Passing[current].stats.INT}</td>
            </tr> 

            <th>Defense:</th>
            <tr>
                <td class="statsCategory"><span class="passydall">Pass Yards Allowed</span></td>
                <td class="statsCategory">{D_Passing[current].stats.Yds}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="rushydall">Rush Yards Allowed</span></td>
                <td class="statsCategory">{D_Rushing[current].stats.RushYds}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="passtdall">Pass TD Allowed</span></td>
                <td class="statsCategory">{D_Passing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="rushtdall">Rush TD Allowed</span></td>
                <td class="statsCategory">{D_Rushing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="defenseINT">Defense INT</span></td>
                <td class="statsCategory">{D_Passing[current].stats.INT}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="fumblescaus">Fumbles Caused</span></td>
                <td class="statsCategory">{D_Fumbles[current].stats.FF}</td>
            </tr> 
            </table>
        </section>
        
        
    );
};
const ImageSliderRight = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleUp className='up-arrow' onClick={prevSlide}/>
            {SliderData.map((slide, index) => {
                return(
                    <div classname={index === current ? 'slide active' : 'slide'} key= 
                    {index}>
                        {index - 1 === current && (
                            <img src={slide.image} alt="NFL Team" className="imageTop"/>

                        )}
                        {index === current && (
                            <img src={slide.image} alt="NFL Team" className="image"/>
                        )}
                        {index + 1 === current && (
                            <img src={slide.image} alt="NFL Team" className="imageBottom"/>    
                        )}

                        
                    </div>
                );

                    
                

                
            })}
            
            
            <FaArrowAltCircleDown className='down-arrow' onClick={nextSlide}/>

            <div class='text'>Location:</div>
            <td class="locationArea">{Team_Info[current].location.city}</td>
            <div class='text'>Team name:</div>
            <td class="locationArea">{Team_Info[current].location.team}</td>
            <div class='text'>Stadium:</div>
            <td class="locationArea">{Team_Info[current].location.stadium}</td> 
            
            <div class='text'>Stats:</div>
            <table class="statsTable">
            
            <th>Offense:</th>
            <tr>
                <td class="statsCategory"><span class="passyards">Pass Yards</span></td>
                <td class="statsCategory">{O_Passing[current].stats.PassYds}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="rushyards">Rush Yards</span></td>
                <td class="statsCategory">{O_Rushing[current].stats.RushYds}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="passtd">Pass TD</span></td>
                <td class="statsCategory">{O_Passing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="rushtd">Rush TD</span></td>
                <td class="statsCategory">{O_Rushing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="passcomppct">Pass Completion %</span></td>
                <td class="statsCategory">{O_Passing[current].stats["Cmp%"]}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="INT">INT Thrown</span></td>
                <td class="statsCategory">{O_Passing[current].stats.INT}</td>
            </tr> 

            <th>Defense:</th>
            <tr>
                <td class="statsCategory"><span class="passydall">Pass Yards Allowed</span></td>
                <td class="statsCategory">{D_Passing[current].stats.Yds}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="rushydall">Rush Yards Allowed</span></td>
                <td class="statsCategory">{D_Rushing[current].stats.RushYds}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="passtdall">Pass TD Allowed</span></td>
                <td class="statsCategory">{D_Passing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="rushtdall">Rush TD Allowed</span></td>
                <td class="statsCategory">{D_Rushing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="defenseINT">Defense INT</span></td>
                <td class="statsCategory">{D_Passing[current].stats.INT}</td>
            </tr>
            <tr>
                <td class="statsCategory"><span class="fumblescaus">Fumbles Caused</span></td>
                <td class="statsCategory">{D_Fumbles[current].stats.FF}</td>
            </tr> 
            </table>
        </section>
        
        
    );
};

const Predictor = ({slides}) => {
    const leftO_Passing = ImageSliderLeft.O_Passing[ImageSliderLeft.current].stats.PassYds;
    const leftO_Rushing = ImageSliderLeft.O_Rushing[ImageSliderLeft.current].stats.RushYds;
    const leftO_PassTD = ImageSliderLeft.O_Passing[ImageSliderLeft.current].stats.TD;
    const leftO_RushTD = ImageSliderLeft.O_Rushing[ImageSliderLeft.current].stats.TD;
    const leftO_PassComp = ImageSliderLeft.O_Passing[ImageSliderLeft.current].stats["Cmp%"];
    const leftO_INT = ImageSliderLeft.O_Passing[ImageSliderLeft.current].stats.INT;

    const rightO_Passing = ImageSliderRight.O_Passing[ImageSliderRight.current].stats.PassYds;
    const rightO_Rushing = ImageSliderRight.O_Rushing[ImageSliderRight.current].stats.RushYds;
    const rightO_PassTD = ImageSliderRight.O_Passing[ImageSliderRight.current].stats.TD;
    const rightO_RushTD = ImageSliderRight.O_Rushing[ImageSliderRight.current].stats.TD;
    const rightO_PassComp = ImageSliderRight.O_Passing[ImageSliderRight.current].stats["Cmp%"];
    const rightO_INT = ImageSliderRight.O_Passing[ImageSliderRight.current].stats.INT;

    const leftD_Passing = ImageSliderLeft.D_Passing[ImageSliderLeft.current].stats.Yds;
    const leftD_Rushing = ImageSliderLeft.D_Rushing[ImageSliderLeft.current].stats.RushYds;
    const leftD_PassTD = ImageSliderLeft.D_Passing[ImageSliderLeft.current].stats.TD;
    const leftD_RushTD = ImageSliderLeft.D_Rushing[ImageSliderLeft.current].stats.TD;
    const leftD_INT = ImageSliderLeft.D_Passing[ImageSliderLeft.current].stats.INT;
    const leftD_Fumbles = ImageSliderLeft.D_Fumbles[ImageSliderLeft.current].stats.FF;

    const rightD_Passing = ImageSliderRight.D_Passing[ImageSliderRight.current].stats.Yds;
    const rightD_Rushing = ImageSliderRight.D_Rushing[ImageSliderRight.current].stats.RushYds;
    const rightD_PassTD = ImageSliderRight.D_Passing[ImageSliderRight.current].stats.TD;
    const rightD_RushTD = ImageSliderRight.D_Rushing[ImageSliderRight.current].stats.TD;
    const rightD_INT = ImageSliderRight.D_Passing[ImageSliderRight.current].stats.INT;
    const rightD_Fumbles = ImageSliderRight.D_Fumbles[ImageSliderRight.current].stats.FF;
    
    const leftO_Rating = (leftO_Passing + leftO_Rushing + (leftO_PassTD * 20) + (leftO_RushTD * 20) + (leftO_PassComp * 2) - (leftO_INT * 2));
    const leftD_Rating = (leftD_Passing + leftD_Rushing + (leftD_PassTD * 20) + (leftD_RushTD * 20) + (leftD_INT * 2) + (leftD_Fumbles * 2));
    const rightO_Rating = (rightO_Passing + rightO_Rushing + (rightO_PassTD * 20) + (rightO_RushTD * 20) + (rightO_PassComp * 2) - (rightO_INT * 2));
    const rightD_Rating = (rightD_Passing + rightD_Rushing + (rightD_PassTD * 20) + (rightD_RushTD * 20) + (rightD_INT * 2) + (rightD_Fumbles * 2));

    const leftOVR = (leftO_Rating + leftD_Rating) / 2;
    const rightOVR = (rightO_Rating + rightD_Rating) / 2;

    if (leftOVR > rightOVR) {
        console.log("Left Team Wins")
    } 
    else if (leftOVR < rightOVR) {
    
    }
}
export default (ImageSliderLeft, ImageSliderRight);