function HeroSection() {
  return (
    <div className="px-64  h-[70vh] grid grid-cols-2 gap-10 items-center bg-[url('./images/hero-section.webp')] bg-cover">
      <div>
        <h1 className="text-4xl font-bold mb-2 text-white">
          FIND THE BEST <span className="text-green-600">FREELANCE</span>
        </h1>
        <h1 className="text-4xl font-bold text-white">
          SERVICES FOR YOUR BUSINESS.
        </h1>
        <form className="max-w-lg my-4">
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-green-600 focus:border-green-600 focus:outline-none"
                placeholder="Search Mockups, Logos, Design Templates..."
                required=""
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 px-5 text-sm font-medium h-full text-white bg-green-600 rounded-e-lg border border-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default HeroSection;
