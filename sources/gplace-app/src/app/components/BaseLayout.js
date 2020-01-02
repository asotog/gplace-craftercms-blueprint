import React from 'react';
import Header from 'app/components/Header';

const classes = {
  baseLayoutContent: {
    margin: '0 auto',
    maxWidth: '1200px',
  },
};

const BaseLayout = ({ children }) => (
  <>
    <Header />
    <div style={classes.baseLayoutContent}>
      {children}
    </div>
  </>
);

export default BaseLayout;
