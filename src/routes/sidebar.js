/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/joblistings', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Job Listings', // name that appear in Sidebar
  },
  {
    path: '/app/applications',
    icon: 'FormsIcon',
    name: 'Applications',
  },
  {
    path: '/app/profile',
    icon: 'CardsIcon',
    name: 'Profile',
  },
  {
    path: '/app/charts',
    icon: 'ChartsIcon',
    name: 'Connect Wallet',
  },
]

export default routes
