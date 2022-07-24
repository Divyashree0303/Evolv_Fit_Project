import React from "react";
import Navbar from "./navbar";
import User from "./user";
import data from "../user.json";

const Body = () => {
    const users = data;
    return(
        <div className="body">
            <Navbar />
            {users.map((user) => {
               return  <User 
                        id={user.userId} 
                        name={user.name} 
                        email={user.email} 
                        stepsWalked={user.stepsWalked}
                        stepsTarget={user.stepsTarget}
                        performedDate={user.performedDate}
                        scheduledDate={user.scheduledDate}
                        calorieIntake={user.calorieIntake}
                        calorieTarget={user.calorieTarget}
                        proteinConsumedInGram={user.proteinConsumedInGram}
                        proteinTargetInGram={user.proteinTargetInGram}
                        carbConsumedInGram={user.carbConsumedInGram}
                        carbTargetInGram={user.carbTargetInGram}
                        fatConsumedInGram={user.fatConsumedInGram}
                        fatTargetInGram={user.fatTargetInGram}
                        feedback={user.feedback}
                         />
            })}
        </div>
    )
}

export default Body;