import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'BS Law - NUP',
  description: 'BS Law program documentation',
}

const banner = <Banner storageKey="nup-law">BS Law Documentation 🎓</Banner>
const navbar = (
  <Navbar
    logo={<b>NUP - Law</b>}
  />
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function LawLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  // Filter pageMap to show only bs-law pages
  const filteredPageMap = fullPageMap.filter(item => {
    if (item.route === '/bs-law' || item.route?.startsWith('/bs-law/')) {
      return true
    }
    return false
  })
  
  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={filteredPageMap}
      docsRepositoryBase="https://github.com/your-repo"
      footer={footer}
    >
      {children}
    </Layout>
  )
}
