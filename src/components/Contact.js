import React, { PureComponent } from 'react';
import { css, hover } from 'glamor';

import Text from './Text';
import Globals from '../utils/Globals';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: '#ffffff',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: 'black',
  }),
  transition: css({
    transition: Globals.transitions.primary,
  }),
};

class TextContact extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Contato" subtitle="Acesse nossas redes">
          <span>
            <a
              title="slack"
              href="http://react-brasil-slack.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                id="slack"
                x="0px"
                y="0px"
                width="48px"
                height="48px"
                viewBox="0 0 31.444 31.443"
              >
                <g>
                  <path
                    fill="gray"
                    {...styles.transition}
                    {...hover({ fill: Globals.colors.primary })}
                    d="M31.202,16.369c-0.62-1.388-2.249-2.011-3.637-1.391l-1.325,0.594l-3.396-7.591l1.325-0.592
                    c1.388-0.622,2.01-2.25,1.389-3.637c-0.62-1.389-2.248-2.012-3.637-1.39l-1.324,0.593l-0.593-1.326
                    c-0.621-1.388-2.249-2.009-3.637-1.388c-1.388,0.62-2.009,2.247-1.389,3.637l0.593,1.325L7.98,8.598L7.388,7.273
                    c-0.621-1.39-2.249-2.009-3.637-1.39C2.363,6.504,1.742,8.132,2.362,9.52l0.592,1.324L1.63,11.438
                    c-1.388,0.621-2.01,2.247-1.389,3.636c0.62,1.388,2.249,2.01,3.637,1.39l1.325-0.594l3.394,7.592l-1.325,0.592
                    c-1.388,0.621-2.009,2.25-1.389,3.637c0.621,1.389,2.249,2.011,3.637,1.391l1.324-0.593l0.593,1.325
                    c0.621,1.389,2.249,2.01,3.637,1.389c1.387-0.62,2.009-2.248,1.388-3.636l-0.591-1.326l7.591-3.394l0.592,1.321
                    c0.621,1.391,2.248,2.013,3.637,1.392c1.388-0.619,2.01-2.248,1.389-3.637l-0.592-1.324l1.323-0.594
                    C31.201,19.384,31.823,17.757,31.202,16.369z M13.623,21.215l-3.395-7.593l7.591-3.394l3.395,7.591L13.623,21.215z"
                  />
                </g>
              </svg>
            </a>
          </span>

          <span>
            <a
              title="twitter"
              href="http://twitter.com/reactconfbr"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                id="twitter"
                x="0px"
                y="0px"
                width="48px"
                height="48px"
                viewBox="0 0 97.637 97.637"
              >
                <g>
                  <path
                    fill="gray"
                    {...styles.transition}
                    {...hover({ fill: Globals.colors.primary })}
                    d="M97.523,18.526c-0.14-0.165-0.371-0.221-0.568-0.131c-2.919,1.295-5.99,2.226-9.153,2.776
                    c3.358-2.526,5.86-6.024,7.143-10.035c0.062-0.192-0.002-0.402-0.159-0.527c-0.158-0.125-0.377-0.141-0.55-0.038
                    c-3.782,2.243-7.878,3.824-12.18,4.701c-3.812-3.956-9.135-6.219-14.644-6.219c-11.204,0-20.318,9.114-20.318,20.317
                    c0,1.355,0.131,2.697,0.391,4c-15.518-0.958-30.028-8.408-39.894-20.509c-0.101-0.124-0.254-0.193-0.414-0.177
                    c-0.159,0.012-0.301,0.102-0.381,0.239c-1.8,3.088-2.751,6.621-2.751,10.215c0,6.229,2.83,12.053,7.649,15.896
                    c-2.481-0.298-4.904-1.079-7.089-2.292c-0.147-0.083-0.33-0.082-0.477,0.003c-0.147,0.084-0.24,0.24-0.244,0.41l-0.002,0.26
                    c0,8.946,5.895,16.801,14.282,19.409c-2.209,0.356-4.501,0.332-6.754-0.098c-0.166-0.031-0.34,0.026-0.454,0.154
                    c-0.113,0.128-0.151,0.307-0.099,0.469c2.515,7.85,9.503,13.355,17.637,14.041c-6.785,4.971-14.805,7.59-23.279,7.59
                    c-1.561,0-3.133-0.093-4.673-0.274c-0.22-0.025-0.438,0.106-0.514,0.317c-0.076,0.213,0.005,0.451,0.195,0.572
                    c9.17,5.881,19.773,8.988,30.664,8.988c35.625,0,56.913-28.938,56.913-56.914c0-0.779-0.015-1.554-0.046-2.327
                    c3.843-2.811,7.142-6.252,9.802-10.235C97.675,18.929,97.662,18.692,97.523,18.526z"
                  />
                </g>
              </svg>
            </a>
          </span>

          <span>
            <a
              title="github"
              rel="noopener noreferrer"
              href="https://github.com/react-brasil"
              target="_blank"
            >
              <svg
                id="github"
                x="0px"
                y="0px"
                width="48px"
                height="48px"
                viewBox="0 0 438.536 438.536"
              >
                <g>
                  <g>
                    <path
                      fill="gray"
                      {...styles.transition}
                      {...hover({ fill: Globals.colors.primary })}
                      d="M158.173,352.599c-3.049,0.568-4.381,1.999-3.999,4.281c0.38,2.283,2.093,3.046,5.138,2.283
                      c3.049-0.76,4.38-2.095,3.997-3.997C162.931,353.074,161.218,352.216,158.173,352.599z"
                    />
                    <path
                      fill="gray"
                      {...styles.transition}
                      {...hover({ fill: Globals.colors.primary })}
                      d="M141.898,354.885c-3.046,0-4.568,1.041-4.568,3.139c0,2.474,1.619,3.518,4.853,3.138c3.046,0,4.57-1.047,4.57-3.138
                      C146.753,355.553,145.134,354.502,141.898,354.885z"
                    />
                    <path
                      fill="gray"
                      {...styles.transition}
                      {...hover({ fill: Globals.colors.primary })}
                      d="M119.629,354.022c-0.76,2.095,0.478,3.519,3.711,4.284c2.855,1.137,4.664,0.568,5.424-1.714
                      c0.572-2.091-0.666-3.61-3.711-4.568C122.197,351.265,120.39,351.922,119.629,354.022z"
                    />
                    <path
                      fill="gray"
                      {...styles.transition}
                      {...hover({ fill: Globals.colors.primary })}
                      d="M414.41,24.123C398.326,8.042,378.964,0,356.309,0H82.225C59.577,0,40.208,8.042,24.123,24.123
                      C8.042,40.207,0,59.576,0,82.225v274.088c0,22.65,8.042,42.017,24.123,58.098c16.084,16.084,35.454,24.126,58.102,24.126h63.953
                      c4.184,0,7.327-0.144,9.42-0.424c2.092-0.288,4.184-1.526,6.279-3.717c2.096-2.187,3.14-5.376,3.14-9.562
                      c0-0.568-0.05-7.046-0.144-19.417c-0.097-12.375-0.144-22.176-0.144-29.41l-6.567,1.143c-4.187,0.76-9.469,1.095-15.846,0.999
                      c-6.374-0.096-12.99-0.76-19.841-1.998c-6.855-1.239-13.229-4.093-19.13-8.562c-5.898-4.477-10.085-10.328-12.56-17.559
                      l-2.856-6.571c-1.903-4.373-4.899-9.229-8.992-14.554c-4.093-5.332-8.232-8.949-12.419-10.852l-1.999-1.428
                      c-1.331-0.951-2.568-2.098-3.711-3.429c-1.141-1.335-1.997-2.669-2.568-3.997c-0.571-1.335-0.097-2.43,1.427-3.289
                      c1.524-0.855,4.281-1.279,8.28-1.279l5.708,0.855c3.808,0.76,8.516,3.042,14.134,6.851c5.614,3.806,10.229,8.754,13.846,14.843
                      c4.38,7.806,9.657,13.75,15.846,17.843c6.184,4.097,12.419,6.143,18.699,6.143s11.704-0.476,16.274-1.424
                      c4.565-0.954,8.848-2.385,12.847-4.288c1.713-12.751,6.377-22.559,13.988-29.41c-10.848-1.143-20.602-2.854-29.265-5.14
                      c-8.658-2.286-17.605-5.995-26.835-11.136c-9.234-5.14-16.894-11.512-22.985-19.13c-6.09-7.618-11.088-17.61-14.987-29.978
                      c-3.901-12.375-5.852-26.652-5.852-42.829c0-23.029,7.521-42.637,22.557-58.814c-7.044-17.32-6.379-36.732,1.997-58.242
                      c5.52-1.714,13.706-0.428,24.554,3.855c10.85,4.286,18.794,7.951,23.84,10.992c5.046,3.042,9.089,5.614,12.135,7.71
                      c17.705-4.949,35.976-7.423,54.818-7.423c18.841,0,37.115,2.474,54.821,7.423l10.849-6.852c7.426-4.57,16.18-8.757,26.269-12.562
                      c10.088-3.806,17.795-4.854,23.127-3.14c8.562,21.51,9.328,40.922,2.279,58.241c15.036,16.179,22.559,35.786,22.559,58.815
                      c0,16.18-1.951,30.505-5.852,42.969c-3.898,12.467-8.939,22.463-15.13,29.981c-6.184,7.519-13.894,13.843-23.124,18.986
                      c-9.232,5.137-18.178,8.853-26.84,11.132c-8.661,2.286-18.414,4.004-29.263,5.147c9.891,8.562,14.839,22.072,14.839,40.538v68.238
                      c0,3.237,0.472,5.852,1.424,7.851c0.958,1.998,2.478,3.374,4.571,4.141c2.102,0.76,3.949,1.235,5.571,1.424
                      c1.622,0.191,3.949,0.287,6.995,0.287h63.953c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102
                      V82.225C438.533,59.576,430.491,40.204,414.41,24.123z"
                    />
                    <path
                      fill="gray"
                      {...styles.transition}
                      {...hover({ fill: Globals.colors.primary })}
                      d="M86.793,319.195c-1.331,0.948-1.141,2.471,0.572,4.565c1.906,1.902,3.427,2.189,4.57,0.855
                      c1.331-0.948,1.141-2.471-0.575-4.569C89.458,318.336,87.936,318.049,86.793,319.195z"
                    />
                    <path
                      fill="gray"
                      {...styles.transition}
                      {...hover({ fill: Globals.colors.primary })}
                      d="M77.374,312.057c-0.57,1.335,0.096,2.478,1.999,3.426c1.521,0.955,2.762,0.767,3.711-0.568
                      c0.57-1.335-0.096-2.478-1.999-3.433C79.182,310.91,77.945,311.102,77.374,312.057z"
                    />
                    <path
                      fill="gray"
                      {...styles.transition}
                      {...hover({ fill: Globals.colors.primary })}
                      d="M95.646,330.331c-1.715,0.948-1.715,2.666,0,5.137c1.713,2.478,3.328,3.142,4.853,1.998c1.714-1.334,1.714-3.142,0-5.427
                      C98.978,329.571,97.359,328.993,95.646,330.331z"
                    />
                    <path
                      fill="gray"
                      {...styles.transition}
                      {...hover({ fill: Globals.colors.primary })}
                      d="M105.641,343.174c-1.714,1.526-1.336,3.327,1.142,5.428c2.281,2.279,4.185,2.566,5.708,0.849
                      c1.524-1.519,1.143-3.326-1.142-5.42C109.068,341.751,107.164,341.463,105.641,343.174z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </span>

          <span>
            <a
              title="facebook"
              rel="noopener noreferrer"
              href="https://www.facebook.com/reactconf/"
              target="_blank"
            >
              <svg
                id="facebook"
                width="48px"
                height="48px"
                viewBox="0 0 510 510"
              >
                <g>
                  <g id="post-facebook">
                    <path
                      fill="gray"
                      {...styles.transition}
                      {...hover({ fill: Globals.colors.primary })}
                      d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z
                       M433.5,51v76.5h-51c-15.3,0-25.5,10.2-25.5,25.5v51h76.5v76.5H357V459h-76.5V280.5h-51V204h51v-63.75
                      C280.5,91.8,321.3,51,369.75,51H433.5z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </span>

          <p>
            Envie sua Pull Request e ajude a manter esta página:<br />
            <a {...styles.link} href="https://github.com/react-brasil/conf">
              https://github.com/react-brasil/conf
            </a>
          </p>
          <p>
            E-mail:<br />
            <a {...styles.link} href="mailto:reactconfbr@gmail.com">
              reactconfbr@gmail.com
            </a>
          </p>
        </Text>
      </div>
    );
  }
}

export default TextContact;
