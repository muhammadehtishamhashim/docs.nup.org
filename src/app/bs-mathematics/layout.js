import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
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
  >
    {/* <div className="max-md:hidden">
      <Search searchOptions={{ filters: { major: "bs-mathematics" } }} />
    </div> */}
  </Navbar>
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function MathematicsLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  const mathsItem = fullPageMap.find(item => item.route === '/bs-mathematics')
  const flattenedPageMap = mathsItem?.children || []
  
  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={flattenedPageMap}
      docsRepositoryBase="https://github.com/your-repo"
      footer={footer}
      search={<Search searchOptions={{ filters: { major: "bs-mathematics" } }} />}
    >
      <div data-pagefind-filter="major: bs-mathematics">
        {children}
      </div>
    </Layout>
  )
}
