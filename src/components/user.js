// eslint-disable-next-line
import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import { CircularProgressbarWithChildren , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCheck, faCalendarCheck,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { PieChart } from "react-minimal-pie-chart";
import {faBell} from '@fortawesome/free-regular-svg-icons';
import Modal from "./Modal";




<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');
</style>


const User = (props) => {
    const keyId = props.id;
    const imgSrc = "user" + keyId + ".png";
    const name=props.name; 
    const email=props.email; 
    const stepsWalked=props.stepsWalked;
    const [stepsTarget,setStepsTarget]=useState(props.stepsTarget);
    const performedDate = props.performedDate;
    const scheduledDate=props.scheduledDate;
    const calorieIntake=props.calorieIntake;
    const [calorieTarget,setCalorieTarget]=useState(props.calorieTarget);
    const proteinConsumedInGram=props.proteinConsumedInGram;
    const proteinTargetInGram=props.proteinTargetInGram;
    const carbConsumedInGram=props.carbConsumedInGram;
    const carbTargetInGram=props.carbTargetInGram;
    const fatConsumedInGram=props.fatConsumedInGram;
    const fatTargetInGram=props.fatTargetInGram;
    const [showModal,setShowModal]= useState(false);
    const feedback = props.feedback;
    const navigate = useNavigate();


    return (
        <div className="user">
            <div className="profile-img">
                <img src={imgSrc} alt="profile"/>
            </div>
            <div className="credentials"> 
                <h3 className="name">{name}</h3>
                <p className="email">{email}</p>
            </div>
            <div className="progressBar">
                <CircularProgressbarWithChildren className="circle" value={stepsWalked} maxValue={stepsTarget} styles={buildStyles({pathColor: '#7FD18C',rotation:0.25})} >
                    <div className="walked-value">{stepsWalked}</div>
                    <div className="walked" >walked</div>
                </CircularProgressbarWithChildren>
            </div>
            <div className="target">
                <button className="change-target" onClick={e => setStepsTarget(stepsTarget+500)}>+</button>
                <h3>{stepsTarget/1000}k</h3>
                <p>target</p>
                <button className="change-target" onClick={e => setStepsTarget(stepsTarget-500)}>-</button>
            </div>

            <div className="time-limit" >
                <div className="current-day day" >
                    <FontAwesomeIcon  className="icon"  icon= {faUserCheck}  />
                    <h3>{performedDate}</h3>
                </div>
                <div className={performedDate===scheduledDate?"target-day day red":"target-day day"} >
                    <FontAwesomeIcon className="icon"  icon= {faCalendarCheck}  />
                    <h3>{scheduledDate}</h3>
                </div>
            </div>

            
            <button className={feedback?'arrow-button one red':"arrow-button one" } onClick={() => {navigate("/userId/workout")}}>{feedback?"!":<FontAwesomeIcon icon= {faAngleRight}  />}</button>

            <div className="calories-taken">
                <h3>{calorieIntake}</h3>
                <p>Calories</p>
            </div>

            <div onMouseOver={(e) => setShowModal(true)} onMouseOut={(e) => setShowModal(false)} >
            <PieChart
             
             className="pie-chart"
            
                data={[
                    {
                    color: "#F0C50F",
                    title: "Carbs",
                    value: carbConsumedInGram,
                    },
                    {
                    color:"#F45C84",
                    title: "Protein",
                    value: proteinConsumedInGram,
                    },
                    {
                    color: "#03C6FA",
                    title: "Fats",
                    value: fatConsumedInGram,
                    }, 
                    
                ]}
                labelPosition={50}
                lengthAngle={360}
                lineWidth={20}
                paddingAngle={0}
                startAngle={0}
                viewBoxSize={[100, 100]}
            >
            </PieChart>
            </div>

            {showModal&& <Modal proteinConsumedInGram={proteinConsumedInGram}
                                proteinTargetInGram={proteinTargetInGram}
                                carbConsumedInGram={carbConsumedInGram}
                                carbTargetInGram={carbTargetInGram}
                                fatConsumedInGram={fatConsumedInGram}
                                fatTargetInGram={fatTargetInGram}
                            />}


            <div className="calorie-target">
                <button className="change-target " onClick={e => setCalorieTarget(calorieTarget+100)}>+</button>
                <h3>{calorieTarget/1000}k</h3>
                <p>target</p>
                <button className="change-target" onClick={e => setCalorieTarget(calorieTarget-100)}>-</button>
            </div>

            <button className="arrow-button two" onClick={() => {navigate("/userId/nutrition")}}><FontAwesomeIcon className="notification-icon" icon= {faAngleRight}  /></button>

            <button className="notification"><FontAwesomeIcon icon= {faBell} /></button>


           
           
        </div>
    )
}

export default User;

/* <div className="progressBar">
                <CircularProgressbarWithChildren className="circle" value={value} maxValue={maxValue} styles={buildStyles({pathColor: '#7FD18C',rotation:0.25})} >
                    <div style={{fontSize:"1.8vh",fontFamily:"Montserrat",fontWeight:"700",color:"white"}}>{value}</div>
                    <div style={{fontSize:"1.24vh",fontFamily:"Montserrat",fontWeight:"500",color:"#BDBCBE"}}>walked</div>
                </CircularProgressbarWithChildren>
            </div> */