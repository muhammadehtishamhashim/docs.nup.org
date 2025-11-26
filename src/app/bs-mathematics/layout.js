import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'BS Mathematics - NUP',
  description: 'BS Mathematics program documentation',
}

const banner = <Banner storageKey="nup-maths">BS Mathematics Documentation 🎓</Banner>
const navbar = (
  <Navbar
    logo={<b>NUP - Mathematics</b>}
  />
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function MathematicsLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  // Filter pageMap to show only bs-mathematics pages
  const filteredPageMap = fullPageMap.filter(item => {
    if (item.route === '/bs-mathematics' || item.route?.startsWith('/bs-mathematics/')) {
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
