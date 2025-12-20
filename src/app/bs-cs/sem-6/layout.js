import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'BS Computer Science - Semester 6',
  description: 'BS Computer Science Semester 6 Documentation',
}

const banner = <Banner storageKey="nup-bs-cs-sem-6">BS Computer Science Semester 6 Documentation 🎓</Banner>
const navbar = (
  <Navbar
    logo={<b>NUP - BS Computer Science - Semester 6</b>}
  >
    
  </Navbar>
)
const footer = <Footer>© {new Date().getFullYear()} National University of Pakistan. All rights reserved.</Footer>

export default async function SemesterLayout({ children }) {
  const fullPageMap = await getPageMap()
  
  // Find the major item by route
  const majorItem = fullPageMap.find(item => item.route === '/bs-cs')
  
  // Find the specific semester item
  const semesterItem = majorItem?.children?.find(item => item.route === '/bs-cs/sem-6')
  
  // Use its children as the pageMap to flatten the sidebar
  const flattenedPageMap = semesterItem?.children || []
  
  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={flattenedPageMap}
      docsRepositoryBase="https://github.com/your-repo"
      footer={footer}
      search={<Search searchOptions={{ filters: { major: "bs-cs/sem-6" } }} />}
    >
      <div data-pagefind-filter="major: bs-cs/sem-6">
        {children}
      </div>
    </Layout>
  )
}
