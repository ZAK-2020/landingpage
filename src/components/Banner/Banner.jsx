import collageImage from '../../assets/Image.png'

function Banner() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[121px] py-16 lg:py-[84px] flex flex-col lg:flex-row items-center gap-12 lg:gap-[72px]">

        {/* Text Block */}
        <div className="flex flex-col gap-11 flex-1 w-full">
          <div className="flex flex-col gap-7">
            <h1 className="font-semibold text-[48px] sm:text-[64px] lg:text-[96px] leading-[1.02] lg:leading-[98px] tracking-[-2px] lg:tracking-[-4px] text-black capitalize">
              We Take Care of Your Brand
            </h1>
            <p className="text-lg lg:text-xl font-medium text-black/60 leading-8">
              We care about our work and we care about our clients.
            </p>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center px-[18px] py-5 bg-[#FAFAFA] border border-black/20 rounded-full sm:w-[339px]">
              <p className="text-lg font-medium text-[#AAAAAA] capitalize">Enter your Email</p>
            </div>
            <button className="flex items-center justify-center px-6 py-5 bg-[#3461FF] rounded-full text-white text-lg font-medium capitalize hover:bg-blue-700 transition-colors duration-200 min-h-[44px]">
              Lets Talk
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-[608px] lg:h-[735px] flex-shrink-0">
          <img
            src={collageImage}
            alt="Brand collage"
            className="w-full h-full object-cover rounded-2xl lg:rounded-none"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
