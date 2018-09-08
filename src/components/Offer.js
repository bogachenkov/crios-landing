import React, { Component } from 'react';
import Container from './Container';

import img1 from '../images/offer1.png';
import img2 from '../images/offer2.png';
import img3 from '../images/offer3.png';
import img4 from '../images/offer4.png';
import OfferItem from './OfferItem';

class Offer extends Component {

  state = {
    items: [
      {
        id: 1,
        image: img1,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.'
      },
      {
        id: 2,
        image: img2,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.'
      },
      {
        id: 3,
        image: img3,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.'
      },
      {
        id: 4,
        image: img4,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.'
      },
    ]
  }

  render() {
    const {items} = this.state;
    return (
      <section className="offer">
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h1 className="title">Lorem ipsum dolor sit amet</h1>
        <Container>
          <div className="offer__grid">
            {items.map(item => <OfferItem key={item.id} {...item} />)}
          </div>
        </Container>
        <a className="button">Check Our Offer</a>
      </section>
    );
  }
}


export default Offer;