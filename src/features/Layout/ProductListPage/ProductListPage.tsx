import React, { FC, memo } from 'react';

import AutoSizer from 'react-virtualized-auto-sizer';
import { areEqual, FixedSizeGrid } from 'react-window';

import { useStoreState } from '../productReducer';

import { Product } from './Product/Product';
import styles from './ProductListPage.module.scss';

export const ProductListPage: FC = memo(() => {
  const products = useStoreState('product');
  const columnWidth: number = 278;
  const rowHeight: number = 420;
  const rowCount: number = 4;

  return (
    <div className={styles.productListContainer}>
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeGrid
            height={height}
            width={width}
            columnWidth={columnWidth}
            rowHeight={rowHeight}
            rowCount={products.length / rowCount}
            columnCount={rowCount}
            useIsScrolling={false}
            style={{}}
          >
            {({ style, columnIndex, rowIndex }) => {
              const currentElement = products[rowIndex * rowCount + columnIndex];

              return (
                <div style={style}>
                  <Product item={currentElement} />
                </div>
              );
            }}
          </FixedSizeGrid>
        )}
      </AutoSizer>
    </div>
  );
}, areEqual);
