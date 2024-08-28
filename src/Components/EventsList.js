import React from 'react';
import './EventsList.css';
import Mouse from "../Images/mouse.jpg"
import Dogs from "../Images/dogs.jpg"

const EventsList = () => (
    <div>
        <h1>Events List</h1>
         <ul>
            <li>
                <h2>Hamster Homes</h2>
                <img src={Mouse} alt="Mouse"/>
                <p>
                    Are you ready to bring home a little furry friend? Come join us to free<br/>
                    hamsters from mass breeding failities
                </p>
            </li>
            <li>
                <h2>Doggy Playtime</h2>
                <img src={Dogs} alt="dogs"/>
                <p>
                    Every weekend, we at Pet Heaven prepare a playdate with all the available dogs in a large<br/>
                    enviroment to let out energy and migle with other pets here and you are welcome to join us<br/>
                    any time.
                </p>
            </li>
         </ul>
    </div>
);

export default EventsList;