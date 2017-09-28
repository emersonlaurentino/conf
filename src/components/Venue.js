import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import imgAugusta from '../media/images/theater-augusta.png';
import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    color: Globals.colors.white,
    background: Globals.colors.base,
    width: '100vw',
    display: 'flex',
    '> img': {
      maxWidth: '100%',
    },
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  mediumBtn: css({
    color: Globals.colors.background,
    fontSize: 20,
    textAlign: 'center',
    maxWidth: 360,
    borderRadius: 20,
    padding: '10px 20px',
    backgroundColor: Globals.colors.main,
    display: 'block',
    margin: '0 auto',
    textDecoration: 'none',
  }),
};

class TextVenue extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Local" subtitle="Teatro Augusta, São Paulo, Brasil">
          <p>
            {Globals.event.locale}
          </p>
          <p>
            <br />
            No coração de São Paulo, o histórico Teatro Augusta será o palco de
            apresentações únicas.
          </p>
          <img src={imgAugusta} alt="Teatro Augusta" title="Teatro Augusta" />
          <small>Foto: Divulgação</small>
          <p>Rua Augusta, 943 - Cerqueira César, São Paulo / SP - Brasil</p>
          <p>
            <a
              {...styles.mediumBtn}
              href="https://medium.com/reactbrasil"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dicas de lazer e hospedagem em São Paulo
            </a>
          </p>
        </Text>
      </div>
    );
  }
}

export default TextVenue;
