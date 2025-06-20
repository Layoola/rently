import Navbar from '@/components/NavBar'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'

const page = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Section1 />
      <section id="available-apartments" className="min-h-screen bg-white">
        <Section2 />
      </section>
      <section id="how-it-works" className="min-h-screen bg-white">
        <Section3 />
      </section>
    </main>
  )
}

export default page