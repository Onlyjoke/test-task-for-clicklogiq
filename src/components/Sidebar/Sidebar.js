import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectImages } from '../Photos/PhotoStore';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const images = useSelector(selectImages);
  let size = images.length > 1 &&
    images.reduce((prev, cur) => Number(prev) + Number(cur.fileSize), 0).toFixed(1);

  return (
    <div className={styles.root}>
      <div className={styles.logoWrap}>
        <div className={styles.logo}>
          <Link to='/'>
            <img
              alt='https://cfl.dropboxstatic.com/static/images/logo_catalog/glyph_m1%402x.png'
              src='https://cfl.dropboxstatic.com/static/images/logo_catalog/glyph_m1%402x.png'
            />
          </Link>
        </div>
      </div>
      <div className={styles.linkWrap}>
        <NavLink className={styles.link} activeClassName={styles.linkWrap_type_active} to="/files">
          Files
        </NavLink>
        <NavLink className={styles.link} activeClassName={styles.linkWrap_type_active} to="/photos">
          Photos
        </NavLink>
        <NavLink className={styles.link} activeClassName={styles.linkWrap_type_active} to="/sharing">
          Sharing
        </NavLink>
        <NavLink className={styles.link} activeClassName={styles.linkWrap_type_active} to="/links">
          Links
        </NavLink>
        <NavLink className={styles.link} activeClassName={styles.linkWrap_type_active} to="/events">
          Events
        </NavLink>
        <NavLink className={styles.link} activeClassName={styles.linkWrap_type_active} to="/get-started">
          Get started
        </NavLink>
      </div>
      <div className={styles.size}>{size ? size : 'Calculating...'} MB / 100 MB</div>
    </div>
  );
};

export default Sidebar;
