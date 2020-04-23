import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { getPhotosData, selectImages, sortDataByKey, selectSortKey } from './PhotoStore';

import styles from './Photos.module.css';

const Photos = () => {
  const images = useSelector(selectImages);
  const sortKey = useSelector(selectSortKey);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotosData());
  }, [dispatch]);

  const sortByName = useCallback(
    () => dispatch(sortDataByKey('fileName')),
    [dispatch]
  );

  const sortBySize = useCallback(
    () => dispatch(sortDataByKey('fileSize')),
    [dispatch]
  );

  const sortByDate = useCallback(
    () => dispatch(sortDataByKey('lastModified')),
    [dispatch]
  );

  return (
    <div className={styles.root}>
      <div className={styles.sortWrap}>
        <div
          className={classNames(styles.itemSort, {
            [styles.itemSort_type_active]: sortKey === 'fileName',
          })}
          onClick={sortByName}
        >
          Name
        </div>
        <div
          className={classNames(styles.itemSort, {
            [styles.itemSort_type_active]: sortKey === 'fileSize',
          })}
          onClick={sortBySize}
        >
          Size
        </div>
        <div
          className={classNames(styles.itemSort, {
            [styles.itemSort_type_active]: sortKey === 'lastModified',
          })}
          onClick={sortByDate}
        >
          Modified
        </div>
      </div>
      <div className={styles.imgWrap}>
        {
          images.map((item) => {
            return(
              <div key={item.url} className={styles.img}>
                <img alt={item.url} src={item.url} />
                <div>{item.fileName}</div>
                <div>{item.fileSize} MB</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Photos;
