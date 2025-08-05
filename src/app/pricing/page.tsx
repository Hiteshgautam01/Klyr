import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Starter */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for early-stage startups</p>
              <div className="text-4xl font-bold mb-6">$2,500<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">✓ 1 GTM Engine</li>
                <li className="flex items-center">✓ Basic implementation</li>
                <li className="flex items-center">✓ Monthly reporting</li>
                <li className="flex items-center">✓ Email support</li>
              </ul>
              <Link href="/contact" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </Link>
            </div>
            
            {/* Growth */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-600">
              <h3 className="text-2xl font-bold mb-4">Growth</h3>
              <p className="text-gray-600 mb-6">For scaling SaaS companies</p>
              <div className="text-4xl font-bold mb-6">$5,000<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">✓ 2-3 GTM Engines</li>
                <li className="flex items-center">✓ Advanced implementation</li>
                <li className="flex items-center">✓ Weekly reporting</li>
                <li className="flex items-center">✓ Slack support</li>
                <li className="flex items-center">✓ Quarterly optimization</li>
              </ul>
              <Link href="/contact" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </Link>
            </div>
            
            {/* Enterprise */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">Full GTM transformation</p>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">✓ All GTM Engines</li>
                <li className="flex items-center">✓ White-glove implementation</li>
                <li className="flex items-center">✓ Real-time dashboards</li>
                <li className="flex items-center">✓ Dedicated success manager</li>
                <li className="flex items-center">✓ Custom integrations</li>
              </ul>
              <Link href="/contact" className="block w-full bg-gray-800 text-white text-center py-3 rounded-lg hover:bg-gray-900 transition">
                Contact Sales
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">All plans include a 30-day money-back guarantee</p>
            <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}