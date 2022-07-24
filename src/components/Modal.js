import React from "react";

const Modal = (props) => {
    return(
        <div style={{position:"absolute",zIndex:4, backgroundColor:"#1E262F"}} className="modal">
            <div className="progress-bar-div" >
                <div style={{display:"flex"}}>
                    <h6 className="target-nutrient" >PROTEIN</h6>
                    <h6 className="target-in-gram">{props.proteinTargetInGram}g</h6>
                </div> 
                <progress className="protein" id="file" data-label={props.proteinConsumedInGram} value={props.proteinConsumedInGram} max={props.proteinTargetInGram}></progress>
            </div>

            <div className="progress-bar-div" >
                <div style={{display:"flex"}}>
                    <h6 className="target-nutrient" >FATS</h6>
                    <h6 className="target-in-gram" >{props.fatTargetInGram}g</h6>
                </div>
                <progress className="fats" id="file" data-label={props.fatConsumedInGram}g value={props.fatConsumedInGram} max={props.fatTargetInGram}></progress>
            </div>

            <div className="progress-bar-div" >
                <div style={{display:"flex"}}>
                    <h6 className="target-nutrient" >CARBS</h6>
                    <h6 className="target-in-gram" >{props.carbTargetInGram}g</h6>
                </div>
                <progress className="carbs" id="file" data-label={props.carbConsumedInGram}g value={props.carbConsumedInGram} max={props.carbTargetInGram}></progress>
            </div>

           
           
        </div>
    )
}

export default Modal;