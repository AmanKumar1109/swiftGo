import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#2D2D2D]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
