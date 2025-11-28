import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'BS Urdu - NUP',
  description: 'BS Urdu program documentation',
}

const banner = <Banner storageKey="nup-urdu">BS Urdu Documentation 🎓</Banner>
const navbar = (
  <Navbar
    logo={<b>NUP - Urdu</b>}
  >
    <Search searchOptions={{ filters: { major: "bs-urdu" } }} />
  </Navbar>
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function UrduLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  // Filter pageMap to show only bs-urdu pages
  const filteredPageMap = fullPageMap.filter(item => {
    if (item.route === '/bs-urdu' || item.route?.startsWith('/bs-urdu/')) {
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
      <div data-pagefind-filter="major: bs-urdu">
        {children}
      </div>
    </Layout>
  )
}
