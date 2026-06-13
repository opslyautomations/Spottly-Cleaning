import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Spottly house cleaning services.',
  alternates: { canonical: 'https://spottly.com/terms' },
  robots: { index: false },
}

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]

export default function TermsPage() {
  return (
    <>
      <div className="bg-slate-50 py-4 px-4"><div className="max-w-3xl mx-auto"><Breadcrumbs crumbs={crumbs} /></div></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: January 1, 2026</p>

        {/* PLACEHOLDER — replace with full terms of service before launch */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-10 text-sm text-amber-800 font-medium">
          This is a placeholder page. Complete Terms of Service should be drafted by qualified legal counsel before the site launches.
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Services</h2>
            <p>Spottly provides residential house cleaning services in the Los Angeles area. By booking a service, you agree to provide accurate information about your home and cleaning needs, and to ensure reasonable access to your property at the scheduled time.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Cancellations</h2>
            <p>Cancellation and rescheduling policies will be communicated at the time of booking. Please contact us as soon as possible if you need to cancel or reschedule your appointment.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Satisfaction</h2>
            <p>If you are not satisfied with your cleaning, contact us within 24 hours and we will make it right.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:hello@spottly.com" className="text-brand-blue hover:underline">hello@spottly.com</a>.</p>
          </section>
        </div>
      </div>
    </>
  )
}
