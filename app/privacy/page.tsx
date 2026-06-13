import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Spottly house cleaning services.',
  alternates: { canonical: 'https://spottly.com/privacy' },
  robots: { index: false },
}

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-slate-50 py-4 px-4"><div className="max-w-3xl mx-auto"><Breadcrumbs crumbs={crumbs} /></div></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: January 1, 2026</p>

        {/* PLACEHOLDER — replace with full privacy policy before launch */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-10 text-sm text-amber-800 font-medium">
          This is a placeholder page. A complete Privacy Policy should be drafted by qualified legal counsel before the site launches.
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Information We Collect</h2>
            <p>When you request a quote or contact Spottly, we collect the information you provide — including your name, email address, phone number, and any details about your cleaning request. We use this information solely to respond to your inquiry and provide our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">How We Use Your Information</h2>
            <p>We use the information you provide to communicate with you about your cleaning service, schedule and confirm appointments, and improve our services. We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Contact</h2>
            <p>If you have questions about this Privacy Policy, contact us at <a href="mailto:hello@spottly.com" className="text-brand-blue hover:underline">hello@spottly.com</a>.</p>
          </section>
        </div>
      </div>
    </>
  )
}
