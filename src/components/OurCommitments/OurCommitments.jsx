const stats = [
  { number: '245%', label: 'More revenues for the brand' },
  { number: '130K+', label: 'Audiences reached' },
  { number: '50+', label: 'Brands trust us' },
  { number: '24+', label: 'Worldwide Awards' },
]

function OurCommitments() {
  return (
    <section className="w-full bg-white py-[120px] pb-[180px]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-[104px]">

        {/* Stats Grid */}
        <div className="w-full lg:w-[46%] grid grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-[72px]">
          {stats.map(({ number, label }) => (
            <div key={number} className="flex flex-col">
              <p className="text-[48px] lg:text-[64px] font-bold text-black leading-none mb-3">
                {number}
              </p>
              <p className="text-base font-medium text-black/65 leading-6">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Commitment Content */}
        <div className="w-full lg:w-[54%] lg:max-w-[520px]">
          <p className="text-[56px] lg:text-[72px] font-medium text-black leading-none mb-8">
            Commitments
          </p>
          <p className="text-lg font-medium text-black/65 leading-[30px] mb-11">
            We are committed to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
          <p className="text-base font-semibold text-[#3461FF] cursor-pointer leading-5 hover:underline">
            Learn More &rarr;
          </p>
        </div>

      </div>
    </section>
  )
}

export default OurCommitments
