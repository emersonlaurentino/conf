import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Text from './Text';

import tallerImg from '../media/images/sponsors/taller.jpg';
import quantoImg from '../media/images/sponsors/quanto.jpg';
import fullcircleImg from '../media/images/sponsors/fullcircle.jpg';
import apolloImg from '../media/images/sponsors/apollo.jpg';
import meteorImg from '../media/images/sponsors/meteor.jpg';
import dneImg from '../media/images/sponsors/dne.jpg';
import codamosImg from '../media/images/sponsors/codamos.jpg';
import rivendelImg from '../media/images/sponsors/rivendel.jpg';
import jsladiesImg from '../media/images/sponsors/jsladies.jpg';
import stqImg from '../media/images/sponsors/stq.jpg';
import greenmileImg from '../media/images/sponsors/greenmile.jpg';

const styles = {
  container: css({
    background: Globals.colors.white,
    width: '100vw',
    alignItems: 'center',
    paddingTop: 20,
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#666666',
  }),
  card: css({
    width: 300,
    height: 100,
    '@media(min-width: 721px)': {
      height: 200,
    },
    // maxWidth: '100%',
    padding: '0',
    backgroundColor: Globals.colors.white,
    borderRadius: 0,
    margin: 10,
    '> img': {
      maxWidth: 200,
      maxHeight: 100,
      margin: '0 auto',
      display: 'block',
    },
  }),
  cards: css({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 1000,
    margin: '30px auto',
  }),
};

const Sponsors = [
  {
    id: 3,
    name: 'Taller',
    avatar: tallerImg,
  },
  {
    id: 4,
    name: 'Quanto',
    avatar: quantoImg,
  },
  {
    id: 5,
    name: 'Fullcircle',
    avatar: fullcircleImg,
  },
];

class TextSponsor extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Patrocinadores" reverse />
        <div {...styles.cards}>
          {Sponsors.map(sponsor => {
            return (
              <div key={sponsor.id} {...styles.card}>
                <img src={sponsor.avatar} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TextSponsor;
