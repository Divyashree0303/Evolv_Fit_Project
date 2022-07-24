import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking,faDumbbell,faBowlFood} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return(
        <nav className="nav">
            <div className="steps">
                <FontAwesomeIcon icon= {faPersonWalking}  />
                <span>Steps</span>
            </div>
            <div className="workout">
                <FontAwesomeIcon icon={faDumbbell} transform={{ rotate: 135 }}/>
                <span>Workout</span>
            </div>
            <div className="nutrition">
                <FontAwesomeIcon icon= {faBowlFood} />
                <span>Nutrition</span>
            </div>
        </nav>
    )
}

export default Navbar;
