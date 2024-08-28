import React from 'react';
import "./AdoptionList.css"
import Ace from '../Images/Ace.jpg';
import AhGirl from '../Images/AhGirl.jpg';
import Argo from '../Images/Argo.jpg';
import Aria from '../Images/Aria.jpg';
import Avery from '../Images/Avery.jpg';
import Cherry from '../Images/Cherry.jpg';

const AdoptionList = () => (
    <div>
      <ul className="AdoptList">
        <li>
          <img src={Ace} alt="Ace" />
          <figcaption>
            Name: Ace<p/>
            Gender: Male<p/>
            Breed: Cross-Breed<p/>
            Colour: Brown<p/>
            Age: 4 years 4 months (as of Feb 2024)<p/><br/>
            Ace is a lovely dog with energy beyond end. He likes to be playful and although young, finds comfort with others around.
          </figcaption>
        </li>
        <li>
          <img src={AhGirl} alt="AhGirl" />
          <figcaption>
            Name: Ah Girl<p/>
            Gender: Female<p/>
            Breed: X-Breed<p/>
            Colour: Cream<p/>
            Age: 17 years (as of Feb 2024)<p/><br/>
            AhGirl is a sweet dog with a timid yet loving expression. Due to her age, Ah Girl is mostly quiet and keeps to herself. She still loves to be around others but would be more introverted compared to other dogs.
          </figcaption>
        </li>
        <li>
          <img src={Argo} alt="Argo" />
          <figcaption>
            Name: Argo<p/>
            Gender: Male<p/>
            Breed: Cross-Breed<p/>
            Colour: White Black<p/>
            Age: 1 year 6 months (as of Feb 2024)<p/><br/>
            Argo is an energetic boy who loves to mingle with others. Due to mistreatment from his previous owners, he is very wary of strangers and will take time to bond with new strangers.
          </figcaption>
        </li>
        <li>
          <img src={Aria} alt="Aria" />
          <figcaption>
            Name: Aria<p/>
            Gender: Female<p/>
            Breed: Local<p/>
            Colour: White<p/>
            Age: 3 years 2 months  (as of Jan 2024)<p/><br/>
            Aria is a gentle cat with patience. She can be very timid when it comes to hoomans but she will take a chance when food is involved.
          </figcaption>
        </li>
        <li>
          <img src={Avery} alt="Avery" />
          <figcaption>
            Name: Avery<p/>
            Gender: Female<p/>
            Breed: Local<p/>
            Colour: Tabby white<p/>
            Age: 2 years 2 months (as of Jan 2024)<p/><br/>
            Avery is a friendly cat. Found outside from locals, she was brought in due to medical reasons and is now recovering. Owners must have special care for her.
          </figcaption>
        </li>
        <li>
          <img src={Cherry} alt="Cherry" />
          <figcaption>
            Name: Cherry<p/>
            Gender: Female<p/>
            Breed: Local<p/>
            Colour: Dark Tabby<p/>
            Age: 1 year 1 month (as of Aug 2024)<p/><br/>
            Cherry is a cute yet fiesty cat. She can be very territorial but once a bond has been made, she will forever allow the bond to blossom and grow.
          </figcaption>
        </li>
      </ul>
    </div>
  );

export default AdoptionList;