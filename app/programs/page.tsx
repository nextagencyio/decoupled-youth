import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_PROGRAMS } from '@/lib/queries'
import { ProgramsData } from '@/lib/types'
import Header from '../components/Header'
import ProgramCard from '../components/ProgramCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Programs | Bright Futures Youth Center',
  description: 'Explore our youth programs including STEM Explorers, Leadership Academy, Creative Arts Workshop, and Academic Tutoring for ages 6-18.',
}

async function getPrograms() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_PROGRAMS, { first: 50 })
    return data?.nodePrograms?.nodes || []
  } catch (error) {
    console.error('Error fetching programs:', error)
    return []
  }
}

export default async function ProgramsPage() {
  const items = await getPrograms()

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />

      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-8 left-[12%] w-16 h-16 bg-accent-400 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '3.5s' }} />
        <div className="absolute bottom-12 right-[10%] w-12 h-12 bg-yellow-400 rounded-2xl opacity-30 rotate-45 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-20 right-[30%] w-8 h-8 bg-green-300 rounded-full opacity-35 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">Programs</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">From STEM education to creative arts, our programs empower young people ages 6-18 to discover their potential.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold font-display text-gray-600 mb-2">No Programs Yet</h2>
              <p className="text-gray-500">Programs will appear here once content is imported.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <ProgramCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
