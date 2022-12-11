import React from 'react';
import NoLazyPage from '../01-lazyload/pages/NoLazyPage';

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: JSXComponent | React.LazyExoticComponent<JSXComponent>;
  name: string;
}

const LazyLayout = React.lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: "LazyLayout"
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazyPage,
    name: "NoLazy"
  }
];