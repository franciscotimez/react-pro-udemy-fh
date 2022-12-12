import React from 'react';
import NoLazyPage from '../01-lazyload/pages/NoLazyPage';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: JSXComponent | React.LazyExoticComponent<JSXComponent>;
  name: string;
}

// const LazyLayout = React.lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    to: 'home',
    path: '/home',
    Component: ShoppingPage,
    name: "Shop"
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazyPage,
    name: "NoLazy"
  }
];