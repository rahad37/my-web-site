import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';


const Skills = () => {
    const p = 100;
    const pe = 90;
    const per = 90;
    const perc = 90;
    const perce = 70;
    const percen = 70;
    const percent = 75;
    const percenta = 80;
    const percentag = 70;
    const percentage = 85;
    return (
        <div className='skill-container'>
      
        <div /*style={{background: '#a4b0be'}}*/>
        <div className='container text-light font-italic pt-5 pb-5' id='skills'>
            <h2 className='font-italic pb-5' style={{fontWeight: 'bold'}}>Skills</h2>
                <div className='row pb-5'>
                    <div style={{width: '150px', height: '150px', margin: '30px',  stroke: `orange`}}>
                        <CircularProgressbar value={p} text={`${p}%`} />
                        <h6 style={{marginLeft: '25px'}}>HTML</h6>
                    </div>

                    <div style={{width: '150px', height: '150px', margin: '30px', stroke: `blue`}}>
                        <CircularProgressbar value={pe} text={`${pe}%`} />
                        <h6 style={{marginLeft: '30px'}}>CSS</h6>
                    </div>

                    <div style={{width: '150px', height: '150px', margin: '30px', stroke: `red`}}>
                        <CircularProgressbar value={per} text={`${per}%`} />
                        <h6 style={{marginLeft: '15px'}}>Bootstrap</h6>
                    </div> 

                    <div style={{width: '150px', height: '150px', margin: '30px', stroke: `violet`}}>
                        <CircularProgressbar value={perc} text={`${perc}%`} />
                        <h6 style={{marginLeft: '15px'}}>Material UI</h6>
                    </div> 

                    <div style={{width: '150px', height: '150px', margin: '30px', stroke: `orange`}}>
                        <CircularProgressbar value={perce} text={`${perce}%`} />
                        <h6 style={{marginLeft: '15px'}}>JavaScript</h6>
                    </div> 

                    <div style={{width: '150px', height: '150px', margin: '30px', stroke: `orange`}}>
                        <CircularProgressbar value={percen} text={`${percen}%`} />
                        <h6 style={{marginLeft: '15px'}}>React</h6>
                    </div> 

                    <div style={{width: '150px', height: '150px', margin: '30px', stroke: `tomato`}}>
                        <CircularProgressbar value={percent} text={`${percent}%`} />
                        <h6 style={{marginLeft: '15px'}}>MongoDB</h6>
                    </div> 

                    <div style={{width: '150px', height: '150px', margin: '30px', stroke: `green`}}>
                        <CircularProgressbar value={percenta} text={`${percenta}%`} />
                        <h6 style={{marginLeft: '15px'}}>Firebase</h6>
                    </div> 
                    <div style={{width: '150px', height: '150px', margin: '30px', stroke: `orange`}}>
                        <CircularProgressbar value={percentag} text={`${percentag}%`} />
                        <h6 style={{marginLeft: '15px'}}>Express.js</h6>
                    </div> 
                    <div style={{width: '150px', height: '150px', margin: '30px', stroke: `blue`}}>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        <h6 style={{marginLeft: '15px'}}>Node.js</h6>
                    </div> 
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default Skills;