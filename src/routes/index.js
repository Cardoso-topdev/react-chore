import AboutUS from '../pages/about-us'
import Agreement from '../pages/agreement'
import Fee from '../pages/fee'
import HomePage from '../pages/homepage'
import Privacy from '../pages/privacy'

export const HOME = '/'
export const ABOUT_US = '/aboutus'
export const PRIVACY = '/privacy'
export const AGREEMENT = '/agreement'
export const FEE = '/fee'

export const ROUTES = [
  { path: HOME, exact: true,  component: HomePage },
  { path: ABOUT_US, exact: true,  component: AboutUS },
  { path: PRIVACY, exact: true,  component: Privacy },
  { path: AGREEMENT, exact: true,  component: Agreement },
  { path: FEE, exact: true,  component: Fee },
]
