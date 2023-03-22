export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Keep up with all the happenings at SCPHA
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to PortLife, the place to find out what's going on at the SCPHA
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                See our latest posts below
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
