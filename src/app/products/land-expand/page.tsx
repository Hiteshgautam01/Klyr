import Link from 'next/link'

export default function LandExpandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Land & Expand Engine</h1>
          <p className="text-xl mb-8">Systematic expansion playbook for growing accounts</p>
          
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-2xl font-semibold mb-6">Coming Soon</h2>
            <p className="text-gray-600 mb-8">
              We're putting the finishing touches on this GTM engine. 
              Join the waitlist to be notified when it launches.
            </p>
            
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Join Waitlist →
            </Link>
          </div>
          
          <div className="mt-12">
            <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}