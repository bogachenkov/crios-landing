import React from 'react';

import image1 from '../images/box1.jpg';
import image2 from '../images/box2.jpg';

const Boxes = () => {
  return (
    <section className="boxes">
      <div className="boxes__item">
        <div className="boxes__image" style={{backgroundImage: `url('${image1}')`}}></div>
        <div className="boxes__content">
          <div>
            <h1 className="title">Lorem ipsum dolor</h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
              Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.<br/>
              Suspendisse lobortis lectus vel imperdiet ullamcorper.
            </p>
          </div>
        </div>
      </div>
      <div className="boxes__item">
        <div className="boxes__content">
          <div>
            <h1 className="title">Lorem ipsum dolor</h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
              Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.<br/>
              Suspendisse lobortis lectus vel imperdiet ullamcorper.
            </p>
          </div>
        </div>
        <div className="boxes__image" style={{backgroundImage: `url('${image2}')`}}></div>
      </div>
    </section>
  );
};

export default Boxes;