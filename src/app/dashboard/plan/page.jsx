import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
    {
      "name": "Starter Plan",
      "id": "tier-starter",
      "priceMonthly": "Free",
      "description": "Perfect for individuals who want to explore AI-powered interviews with no commitment.",
      "features": [
        "1 interview per day",
        "Basic feedback and scoring",
        "Access to 50+ common interview questions",
        "Limited role-specific question templates",
        "Basic analytics dashboard"
      ],
      "featured": false
    },
    {
      "name": "Professional Plan",
      "id": "tier-professional",
      "priceMonthly": "$49",
      "description": "Unlock advanced capabilities for personalized, scalable, and detailed interview solutions.",
      "features": [
        "Unlimited interviews per day",
        "Real-time feedback with AI suggestions",
        "Access to 500+ role-specific and industry-specific question templates",
        "Advanced analytics with insights into strengths and weaknesses",
        "Custom AI-generated follow-up questions based on candidate responses",
        "Support for audio and video-based mock interviews",
        "AI-powered candidate scoring based on industry benchmarks",
        
      ],
      "featured": true
    }
  ];
  
  

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function plan() {
  return (
    <div className="relative isolate w-full  bg-white dark:bg-[#2b2a2a] px-6 p-16 sm:py-10 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        {/* <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2> */}
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 dark:text-zinc-300  sm:text-xl/8">
        Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
        loyalty, and driving sales.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/100 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? ' rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                  : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            {/* <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Get started today
            </a> */}
          <div className='flex justify-center w-full  '>
          <button class={`mt-8 block rounded-md  w-full  text-center text-sm font-semibold box-border relative z-30 inline-flex items-center justify-center w-auto px-28 py-3 overflow-hidden font-bold ${tier.featured?" text-white ":" text-indigo-600 "} transition-all duration-300 ${tier.featured?" bg-indigo-600 ":" bg-white/60  "} rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none`}>
    <span class={`absolute bottom-0 right-0 w-8 h-20  -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0`}></span>
    <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
    <span class="relative z-20 flex items-center text-sm">
        <svg class={`relative w-5 h-5 mr-2 ${tier.featured?" text-white ":" text-indigo-600 "}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        Subscribe
    </span>
</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}
