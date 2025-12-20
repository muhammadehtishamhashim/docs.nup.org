import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'BS Law - Semester 4',
  description: 'BS Law Semester 4 Documentation',
}

const banner = <Banner storageKey="nup-bs-law-sem-4">BS Law Semester 4 Documentation 🎓</Banner>
const navbar = (
  <Navbar
    logo={<b>NUP - BS Law - Semester 4</b>}
  >
    
  </Navbar>
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function SemesterLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  // Find the major item by route
  const majorItem = fullPageMap.find(item => item.route === '/bs-law')
  
  // Find the specific semester item
  const semesterItem = majorItem?.children?.find(item => item.route === '/bs-law/sem-4')
  
  // Use its children as the pageMap to flatten the sidebar
  const flattenedPageMap = semesterItem?.children || []
  
  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={flattenedPageMap}
      docsRepositoryBase="https://github.com/your-repo"
      footer={footer}
      search={<Search searchOptions={{ filters: { major: "bs-law/sem-4" } }} />}
    >
      <div data-pagefind-filter="major: bs-law/sem-4">
        {children}
      </div>
    </Layout>
  )
}
