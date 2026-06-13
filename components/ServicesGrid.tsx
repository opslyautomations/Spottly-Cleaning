import Link from 'next/link'

const services = [
  {
    title: 'Recurring Cleaning',
    href: '/services/recurring-cleaning',
    description: 'Weekly, biweekly, or monthly maintenance that keeps your home at a steady, clean baseline — without spending your weekend on it.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Deep Clean',
    href: '/services/deep-cleaning',
    description: 'The Spottly Clean — a top-to-bottom reset that goes after the grime, grease, and buildup standard visits miss. Oven and fridge interiors included.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Move-In / Move-Out',
    href: '/services/move-in-move-out-cleaning',
    description: 'Empty-home cleaning for inspections and fresh starts — inside cabinets, appliances, and every surface, done before or after the move.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Custom Cleaning',
    href: '/services/custom-cleaning',
    description: 'Not everything fits a standard plan. Tell us what you need — interior windows, one-off tasks, add-ons — and we\'ll build a quote around your space.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 4a2 2 0 100 4m0-4a2 2 0 110 4m6-4a2 2 0 100 4m0-4a2 2 0 110 4" />
      </svg>
    ),
  },
]

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          className="group bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:border-brand-baby transition-all duration-200 flex flex-col"
        >
          <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-200">
            {s.icon}
          </div>
          <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-brand-blue transition-colors">{s.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed flex-1">{s.description}</p>
          <p className="mt-4 text-brand-blue text-sm font-semibold group-hover:underline">Learn more →</p>
        </Link>
      ))}
    </div>
  )
}
