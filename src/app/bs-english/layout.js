import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'BS English - NUP',
  description: 'BS English program documentation',
}

const banner = <Banner storageKey="nup-english">BS English Documentation 🎓</Banner>
const navbar = (
  <Navbar
    logo={<b>NUP - English</b>}
  >
    {/* <div className="max-md:hidden">
      <Search searchOptions={{ filters: { major: "bs-english" } }} />
    </div> */}
  </Navbar>
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function EnglishLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  const englishItem = fullPageMap.find(item => item.route === '/bs-english')
  const flattenedPageMap = englishItem?.children || []
  
  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={flattenedPageMap}
      docsRepositoryBase="https://github.com/your-repo"
      footer={footer}
      search={<Search searchOptions={{ filters: { major: "bs-english" } }} />}
    >
      <div data-pagefind-filter="major: bs-english">
        {children}
      </div>
    </Layout>
  )
}
