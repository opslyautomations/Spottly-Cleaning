'use client'

import { useState } from 'react'
import type { FAQItem } from '@/lib/schema'

export type { FAQItem }

interface FAQProps {
  items: FAQItem[]
  heading?: string
}

export default function FAQ({ items, heading = 'Frequently Asked Questions' }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">{heading}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-slate-200 rounded-xl bg-white overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left min-h-[56px]"
              aria-expanded={open === i}
            >
              <span className="font-semibold text-slate-900 pr-4 leading-snug">{item.question}</span>
              <svg
                className={`w-5 h-5 text-brand-blue shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open === i && (
              <div className="px-6 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

