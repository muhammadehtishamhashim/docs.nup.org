import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'BS Physics - NUP',
  description: 'BS Physics program documentation',
}

const banner = <Banner storageKey="nup-physics">BS Physics Documentation 🎓</Banner>
const navbar = (
  <Navbar
    logo={<b>NUP - Physics</b>}
  >
    <Search searchOptions={{ filters: { major: "bs-physics" } }} />
  </Navbar>
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function PhysicsLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  // Filter pageMap to show only bs-physics pages
  const filteredPageMap = fullPageMap.filter(item => {
    if (item.route === '/bs-physics' || item.route?.startsWith('/bs-physics/')) {
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
      search={null}
    >
      <div data-pagefind-filter="major: bs-physics">
        {children}
      </div>
    </Layout>
  )
}
