import React from 'react';

import styles from './Empty.module.css';

const Empty = ({ location: { pathname } }) => {
  return (
    <div className={styles.root}>
      {pathname}
    </div>
  );
};

export default Empty;
