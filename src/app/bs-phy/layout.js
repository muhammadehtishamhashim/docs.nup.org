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
    
  </Navbar>
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function PhysicsLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  const physicsItem = fullPageMap.find(item => item.route === '/bs-phy')
  const flattenedPageMap = physicsItem?.children || []
  
  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={flattenedPageMap}
      docsRepositoryBase="https://github.com/your-repo"
      footer={footer}
      search={<Search searchOptions={{ filters: { major: "bs-phy" } }} />}
    >
      <div data-pagefind-filter="major: bs-phy">
        {children}
      </div>
    </Layout>
  )
}
