import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Text from './Text';

import udacityLogo from '../media/images/sponsors/udacity.png';
import rivendelImg from '../media/images/sponsors/rivendel.jpg';
import stqImg from '../media/images/sponsors/stq.jpg';
import greenmileImg from '../media/images/sponsors/greenmile.jpg';
import luizaLabsImg from '../media/images/sponsors/luizaLabs.jpg';
import concreteImg from '../media/images/sponsors/concrete.png';
import rungImg from '../media/images/sponsors/rung.jpg';
import movileImg from '../media/images/sponsors/movile.jpg';
import hiplatformImg from '../media/images/sponsors/hiplatform.png';
import r7Img from '../media/images/sponsors/r7.png';
import ebanxLogo from '../media/images/sponsors/ebanxLogo.svg';
import iClinicImg from '../media/images/sponsors/iclinic.png';
import getninjasImg from '../media/images/sponsors/getninjas.svg';

const styles = {
  container: css({
    background: Globals.colors.white,
    width: '100vw',
    alignItems: 'center',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#666666',
  }),
  card: css({
    width: 200,
    height: 75,
    '@media(min-width: 721px)': {
      '> .secondary': {
        height: 100,
      },
      height: 150,
    },
    padding: '0',
    backgroundColor: Globals.colors.white,
    borderRadius: 0,
    margin: 10,
    position: 'relative',
    '> a > img': {
      '.secondary': {
        maxWidth: 120,
        maxHeight: 60,
      },
      maxWidth: 150,
      maxHeight: 75,
      margin: '0 auto',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
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

const Supporters = [
  {
    id: 13,
    name: 'UDACITY',
    avatar: udacityLogo,
    link: 'https://br.udacity.com/',
  },
  {
    id: 14,
    name: 'R7.com',
    avatar: r7Img,
    link: 'https://r7.com/',
  },
  {
    id: 15,
    name: 'Ebanx',
    avatar: ebanxLogo,
    link: 'https://www.ebanx.com/br/',
  },
  {
    id: 16,
    name: 'iClinic',
    avatar: iClinicImg,
    link: 'https://iclinic.com.br/',
  },
  {
    id: 10,
    name: 'Concrete',
    avatar: concreteImg,
    link: 'http://concrete.com.br',
  },
];

const SecondarySupporters = [
  {
    id: 17,
    name: 'GetNinjas',
    avatar: getninjasImg,
    link: 'https://www.getninjas.com.br/',
  },
  {
    id: 11,
    name: 'Rung',
    avatar: rungImg,
    link: 'https://www.rung.com.br/',
  },
  {
    id: 8,
    name: 'Luiza Labs',
    avatar: luizaLabsImg,
    link: 'http://luizalabs.com',
  },
  {
    id: 12,
    name: 'Movile',
    avatar: movileImg,
    link: 'https://www.movile.com/',
  },
  {
    id: 6,
    name: 'Rivendel',
    avatar: rivendelImg,
    link: 'https://rivendel.com.br/',
  },
  {
    id: 7,
    name: 'Greenmile',
    avatar: greenmileImg,
    link: 'http://greenmile.com/pt/greenmile/',
  },
  {
    id: 9,
    name: 'Stq Advertising',
    avatar: stqImg,
    link: 'https://stqpublicidade.com.br/',
  },
  {
    id: 13,
    name: 'Hi Platform',
    avatar: hiplatformImg,
    link: 'https://hiplatform.com/',
  },
];

class TextSupporters extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Apoio" reverse />

        <div {...styles.cards}>
          {Supporters.map(sponsor => {
            return (
              <div key={sponsor.id} {...styles.card}>
                <a
                  href={
                    sponsor.link +
                    '?utm_source=reactconfbr-site&utm_medium=logo&utm_campaign=reactconfbr-2017'
                  }
                  title={sponsor.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={sponsor.avatar} alt={sponsor.name} />
                </a>
              </div>
            );
          })}
        </div>

        <div {...styles.cards}>
          {SecondarySupporters.map(secondarySponsor => {
            return (
              <div key={secondarySponsor.id} {...styles.card}>
                <a
                  href={
                    secondarySponsor.link +
                    '?utm_source=reactconfbr-site&utm_medium=logo&utm_campaign=reactconfbr-2017'
                  }
                  title={secondarySponsor.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src={secondarySponsor.avatar}
                    alt={secondarySponsor.name}
                    className="secondary"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TextSupporters;
