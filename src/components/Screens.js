import React from 'react';
import Container from './Container';

import AppScreen1 from '../images/app-screen-1.png';
import AppScreen2 from '../images/app-screen-2.png';

import snowflake1 from '../images/snowflake.png';
import snowflake2 from '../images/snowflake2.png';

const Screens = () => {
  return (
    <section
      className="screens"
      style={{background: `url('${snowflake1}') no-repeat top -89px left 46px, url('${snowflake2}') no-repeat bottom -89px right`}}
    >
      <Container>
        <div className="screens__item">
          <div className="screens__app">
            <img src={AppScreen1} alt="" />
          </div>
          <div className="screens__content">
            <h1 className="title blue">Lorem ipsum dolor</h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
              Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.<br/>
              Suspendisse lobortis lectus vel imperdiet ullamcorper.
            </p>
          </div>
        </div>
        <div className="screens__item">
          <div className="screens__content">
            <h1 className="title blue">Lorem ipsum dolor</h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
              Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.<br/>
              Suspendisse lobortis lectus vel imperdiet ullamcorper.
            </p>
          </div>
          <div className="screens__app">
            <img src={AppScreen2} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Screens;