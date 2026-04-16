function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] min-h-[119px] flex flex-col sm:flex-row items-center justify-between gap-4 py-8 sm:py-0">

        <p className="text-sm font-medium text-white text-center sm:text-left">
          © 2022 Embrace, Inc. - All Rights Reserved
        </p>

        <div className="flex items-center gap-8 sm:gap-[125px]">
          <p className="text-sm font-medium text-white cursor-pointer hover:text-gray-300 transition-colors duration-200">
            Terms of use
          </p>
          <p className="text-sm font-medium text-white cursor-pointer hover:text-gray-300 transition-colors duration-200">
            Privacy policy
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
