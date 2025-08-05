import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About KLYRR</h1>
          
          <div className="prose prose-lg">
            <p className="mb-6">
              KLYRR installs plug-and-play GTM engines that drive pipeline, conversions, and expansion — in days, not quarters.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              We believe every SaaS company deserves world-class go-to-market systems without the enterprise price tag or lengthy implementation times.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">What We Do</h2>
            <p className="mb-6">
              KLYRR provides modular GTM systems that compound growth:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Zero-to-Pipeline Engine</li>
              <li>Demo Conversion Killshot</li>
              <li>Inbound Magnet Engine</li>
              <li>Founder Signal Engine</li>
              <li>Land & Expand Engine</li>
              <li>Sales Transition System</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-6">
              Ready to transform your GTM? <Link href="/contact" className="text-blue-600 hover:underline">Get in touch</Link>
            </p>
          </div>
          
          <div className="mt-12">
            <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}