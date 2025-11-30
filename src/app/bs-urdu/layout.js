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
    {/* <div className="max-md:hidden">
      <Search searchOptions={{ filters: { major: "bs-urdu" } }} />
    </div> */}
  </Navbar>
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function UrduLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  const urduItem = fullPageMap.find(item => item.route === '/bs-urdu')
  const flattenedPageMap = urduItem?.children || []
  
  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={flattenedPageMap}
      docsRepositoryBase="https://github.com/your-repo"
      footer={footer}
      search={<Search searchOptions={{ filters: { major: "bs-urdu" } }} />}
    >
      <div data-pagefind-filter="major: bs-urdu">
        {children}
      </div>
    </Layout>
  )
}
