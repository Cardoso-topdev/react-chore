import AboutUS from '../pages/about-us'
import Agreement from '../pages/agreement'
import ContactUS from '../pages/contact-us'
import Fee from '../pages/fee'
import HomePage from '../pages/homepage'
import Privacy from '../pages/privacy'

export const HOME = '/'
export const ABOUT_US = '/aboutus'
export const PRIVACY = '/privacy'
export const AGREEMENT = '/agreement'
export const CONTACT_US = '/contactus'
export const FEE = '/fee'

export const ROUTES = [
  { path: HOME, exact: true,  component: HomePage },
  { path: ABOUT_US, exact: true,  component: AboutUS },
  { path: PRIVACY, exact: true,  component: Privacy },
  { path: AGREEMENT, exact: true,  component: Agreement },
  { path: CONTACT_US, exact: true,  component: ContactUS },
  { path: FEE, exact: true,  component: Fee },
]
