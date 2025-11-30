import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
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
  >
    {/* <div className="max-md:hidden">
      <Search searchOptions={{ filters: { major: "bs-computer-science" } }} />
    </div> */}
  </Navbar>
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function CSLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  // Find the bs-computer-science item by route
  const csItem = fullPageMap.find(item => item.route === '/bs-computer-science')
  
  // Use its children as the pageMap to flatten the sidebar
  // We default to [] if not found to prevent errors, though it should exist
  const flattenedPageMap = csItem?.children || []
  
  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={flattenedPageMap}
      docsRepositoryBase="https://github.com/your-repo"
      footer={footer}
      search={<Search searchOptions={{ filters: { major: "bs-computer-science" } }} />}
    >
      <div data-pagefind-filter="major: bs-computer-science">
        {children}
      </div>
    </Layout>
  )
}
