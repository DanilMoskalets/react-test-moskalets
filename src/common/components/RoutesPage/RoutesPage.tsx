import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Layout } from '../../../features/Layout/Layout';
import { ProductListPage } from '../../../features/Layout/ProductListPage/ProductListPage';
import { ProductPage } from '../../../features/Layout/ProductPage/ProductPage';

export const RoutesPage: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductListPage />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  );
};
