import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
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
  >
    {/* <div className="max-md:hidden">
      <Search searchOptions={{ filters: { major: "bs-law" } }} />
    </div> */}
  </Navbar>
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function LawLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  const lawItem = fullPageMap.find(item => item.route === '/bs-law')
  const flattenedPageMap = lawItem?.children || []
  
  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={flattenedPageMap}
      docsRepositoryBase="https://github.com/your-repo"
      footer={footer}
      search={<Search searchOptions={{ filters: { major: "bs-law" } }} />}
    >
      <div data-pagefind-filter="major: bs-law">
        {children}
      </div>
    </Layout>
  )
}
