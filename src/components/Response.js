import React from 'react';
import Container from './Container';

import bg from '../images/response.png';

const Response = () => {
  return (
    <section className="response">
      <Container>
        <div className="response__grid">
          <div className="response__image" style={{backgroundImage: `url('${bg}')`}}></div>
          <div className="response__content">
            <h1 className="title red">Template is awesome</h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
              Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.<br/>
              Suspendisse lobortis lectus vel imperdiet ullamcorper.
            </p>
            <p className="response__capture">
              <strong>John Doe</strong><br />
              CEO at Crios.com
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Response;