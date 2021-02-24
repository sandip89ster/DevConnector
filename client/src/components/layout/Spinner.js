import React, { Fragment } from 'react';
import Loader from 'react-loader-spinner';

export default () => (
  <Fragment>
    <div
      style={{
        width: '100%',
        height: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loader type='BallTriangle' color='#2BAD60' height='100' width='100' />
    </div>
  </Fragment>
);
