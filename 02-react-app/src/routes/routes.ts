import React from 'react';
import { ShoppingPage } from '../02-state-initializer/pages/ShoppingPage';
// import {
//   DynamicFormPage,
//   FormikAbstraction,
//   FormikBasicPage,
//   FormikComponents,
//   FormikYupPage,
//   RegisterFormikPage,
//   RegisterPage
// } from '../03-forms/pages';
// import NoLazyPage from '../01-lazyload/pages/NoLazyPage';
// import { ShoppingPage } from '../02-state-initializer/pages/ShoppingPage';

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
    to: '/home',
    path: 'home',
    Component: ShoppingPage,
    name: "Home"
  },
  // {
  //   to: '/register',
  //   path: 'register',
  //   Component: RegisterPage,
  //   name: "Register"
  // },
  // {
  //   to: '/registerFormik',
  //   path: 'registerFormik',
  //   Component: RegisterFormikPage,
  //   name: "Register Formik"
  // },
  // {
  //   to: '/register-formik-basic',
  //   path: 'register-formik-basic',
  //   Component: FormikBasicPage,
  //   name: "Formik Basic"
  // },
  // {
  //   to: '/register-formik-yup',
  //   path: 'register-formik-yup',
  //   Component: FormikYupPage,
  //   name: "Formik Yup"
  // },
  // {
  //   to: '/register-formik-components',
  //   path: 'register-formik-components',
  //   Component: FormikComponents,
  //   name: "Formik components"
  // },
  // {
  //   to: '/register-formik-abstraction',
  //   path: 'register-formik-abstraction',
  //   Component: FormikAbstraction,
  //   name: "Formik abstraction"
  // },
  // {
  //   to: '/dynamic-form',
  //   path: 'dynamic-form',
  //   Component: DynamicFormPage,
  //   name: "Dynamic Form"
  // },
];