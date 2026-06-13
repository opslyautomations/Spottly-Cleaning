import QuoteForm from './QuoteForm'

interface CTASectionProps {
  heading?: string
  subheading?: string
  variant?: 'form' | 'button'
}

export default function CTASection({
  heading = 'Ready for a home that\'s actually, properly clean?',
  subheading = 'Get a free quote from Spottly — no commitment, no pressure.',
  variant = 'form',
}: CTASectionProps) {
  return (
    <section className="bg-brand-blue py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{heading}</h2>
          <p className="mt-3 text-lg text-brand-baby">{subheading}</p>
        </div>
        {variant === 'form' ? (
          <QuoteForm />
        ) : (
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-white text-brand-blue font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors text-lg min-h-[56px]"
            >
              Get a Free Quote
            </a>
            <p className="mt-4 text-brand-baby text-sm">
              Or call us: <a href="tel:+13109632302" className="text-white font-semibold hover:underline">(310) 963-2302</a>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
