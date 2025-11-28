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
    <Search searchOptions={{ filters: { major: "bs-english" } }} />
  </Navbar>
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function EnglishLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  // Filter pageMap to show only bs-english pages
  const filteredPageMap = fullPageMap.filter(item => {
    if (item.route === '/bs-english' || item.route?.startsWith('/bs-english/')) {
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
      <div data-pagefind-filter="major: bs-english">
        {children}
      </div>
    </Layout>
  )
}
