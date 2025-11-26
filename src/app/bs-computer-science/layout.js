import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'BS Computer Science - NUP',
  description: 'BS Computer Science program documentation',
}

const banner = <Banner storageKey="nup-cs">BS Computer Science Documentation 🎓</Banner>
const navbar = (
  <Navbar
    logo={<b>NUP - Computer Science</b>}
  />
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function CSLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  // Filter pageMap to show only bs-computer-science pages
  const filteredPageMap = fullPageMap.filter(item => {
    // Keep the current page and its children
    if (item.route === '/bs-computer-science' || item.route?.startsWith('/bs-computer-science/')) {
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
