import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const JobListing = lazy(() => import('../pages/JobListing'))
const ViewJob = lazy(() => import('../pages/ViewJob'))
const Applications = lazy(() => import('../pages/Applications'))
const AddJob = lazy(() => import('../pages/AddJob'))
const ApplicantsList = lazy(() => import('../pages/ApplicantsList'))
const Profile = lazy(() => import('../pages/Profile'))
const EditProfile = lazy(() => import('../pages/EditProfile'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/joblistings', // the url
    component: JobListing, // view rendered
  },
  {
    path: '/joblistings/:id', // the url
    component: JobListing, // view rendered
  },
  {
    path: '/joblistings/viewjob/:id', // the url
    component: ViewJob, // view rendered
  },
  {
    path: '/applications',
    component: Applications,
  },
  {
    path: '/applications/addjob',
    component: AddJob,
  },
  {
    path: '/applications/lists/:id',
    component: ApplicantsList,
  },
  {
    path: '/profile',
    component: Profile,
  },
  ,
  {
    path: '/profile/edit',
    component: EditProfile,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
