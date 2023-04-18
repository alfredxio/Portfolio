import React,{useEffect} from 'react';
import Card from './Card';
import './resume.css'
import shapeOne from "../../assets/shape-2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = ({cv}) => {
    useEffect(()=>{
        AOS.init({duration:1000});
    },[]);

  return (
    <section className="resume section" id="resume">
        <h2 className="section__title text-cs" data-aos="fade-down">Resume</h2>
        <p className="section__subtitle" data-aos="fade-down">
            My <span>Story</span>
        </p>

        <div className="resume__container container grid" data-aos="flip-up" data-aos-duration="500">
            <div className="resume__group">
                {/* <h3 className="resume__heading">Education</h3> */}

                <div className="resume__items">
                    {cv.map((val,id)=>{
                        if(val.category==='left'){
                            return (<Card key={id} title={val.title}
                                    subtitle={val.subtitle} date={val.date}
                                    description={val.description}/>
                                    );
                        }
                    })}
                </div>
            </div>

            <div className="resume__group">
                {/* <h3 className="resume__heading">Experience</h3> */}

                <div className="resume__items">
                    {cv.map((val,id)=>{
                        if(val.category==='right'){
                            return <Card key={id} title={val.title}
                                    subtitle={val.subtitle} date={val.date}
                                    description={val.description}/>;
                        }
                    })}
                </div>
            </div>

            
        </div>
        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
    </section>
  )
}

export default Resume