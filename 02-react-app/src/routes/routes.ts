import React from 'react';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
// import NoLazyPage from '../01-lazyload/pages/NoLazyPage';
// import { ShoppingPage } from '../02-state-initializer/pages/ShoppingPage';
import { RegisterPage } from '../03-forms/pages/RegisterPage';

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
    to: '/register',
    path: 'register',
    Component: RegisterPage,
    name: "Register"
  },
  {
    to: '/register-formik-basic',
    path: 'register-formik-basic',
    Component: FormikBasicPage,
    name: "Formik Basic"
  },
];