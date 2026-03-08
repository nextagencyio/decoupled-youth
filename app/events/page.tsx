import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_EVENTS } from '@/lib/queries'
import { EventsData } from '@/lib/types'
import Header from '../components/Header'
import EventCard from '../components/EventCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Events | Bright Futures Youth Center',
  description: 'Join our community events including fundraising galas, summer camps, mentor orientations, and youth workshops.',
}

async function getEvents() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<EventsData>({
      query: GET_EVENTS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeEvents?.nodes || []
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export default async function EventsPage() {
  const items = await getEvents()

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />

      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-8 left-[12%] w-16 h-16 bg-accent-400 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '3.5s' }} />
        <div className="absolute bottom-12 right-[10%] w-12 h-12 bg-yellow-400 rounded-2xl opacity-30 rotate-45 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-20 right-[30%] w-8 h-8 bg-pink-300 rounded-full opacity-35 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">Events</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">Community gatherings, workshops, and special happenings that make a difference.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold font-display text-gray-600 mb-2">No Events Yet</h2>
              <p className="text-gray-500">Events will appear here once content is imported.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <EventCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
