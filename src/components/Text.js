import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  container: css({
    borderTop: `3px solid ${Globals.colors.primary}`,
    width: '50%',
    maxWidth: '50%',
    margin: '30px auto',
    '> h3': {
      color: Globals.colors.primary,
      margin: 0,
      textTransform: 'uppercase',
    },
    '> h2': {
      margin: 0,
      color: Globals.colors.gray,
      textTransform: 'uppercase',
    },
    '> p': {
      color: Globals.colors.darken,
      fontSize:'20px'
    },
    '@media(max-width: 720px)': {
      width: '80%',
      maxWidth: '80%',
    },
  }),
};

class Text extends PureComponent {
  render() {
    const { title, subtitle, children } = this.props;

    return (
      <div {...styles.container}>
        <h3>{title}</h3>
        <h2>{subtitle}</h2>

        {children}
      </div>
    );
  }
}

export default Text;
