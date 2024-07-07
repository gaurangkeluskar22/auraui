import React from "react";

const BlogGrid = () => {
  return (
    <div>
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-8 text-center sm:px-0">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              We share regular updates about AuraUI
            </h2>
          </div>

          <div className="relative max-w-md mx-auto mt-8 md:max-w-none sm:mt-12">
            <div className="absolute -inset-y-2 inset-x-16">
              <div
                className="w-full h-full mx-auto opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid grid-cols-1 overflow-hidden bg-white divide-y divide-gray-200 shadow-xl md:grid-cols-3 md:divide-y-0 md:divide-x rounded-2xl">
              {/* AuroraUI Blog Card */}
              <div className="relative px-5 py-6 group sm:p-8 xl:p-12">
                <div className="overflow-hidden aspect-w-16 aspect-h-8 rounded-2xl">
                  <img
                    className="object-cover w-full h-full transition-all duration-200 group-hover:opacity-70"
                    src="https://www.auraui.com/aiimage/auraui.jpeg"
                    alt="AuroraUI Blog"
                  />
                </div>
                <p className="text-xl font-bold text-gray-900 mt-7">
                  Discover AuroraUI: The Ultimate UI Library
                </p>
                <p className="mt-3 text-base font-normal text-gray-600">
                  AuroraUI offers a vast array of components including Hero,
                  Navbar, Footer, Article, Blog, SignIn, SignUp, Testimonial,
                  and more. Perfect for AI and Web3 projects, with animations
                  included.
                </p>
                <span className="inline-flex mt-8 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  UI Library
                </span>
                <a href="#" title="">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </div>

              {/* Spider-Man Blog Card */}
              <div className="relative px-5 py-6 group sm:p-8 xl:p-12">
                <div className="overflow-hidden aspect-w-16 aspect-h-8 rounded-2xl">
                  <img
                    className="object-cover w-full h-full transition-all duration-200 group-hover:opacity-70"
                    src="https://www.auraui.com/aiimage/spiderman.jpeg"
                    alt="Spider-Man Blog"
                  />
                </div>
                <p className="text-xl font-bold text-gray-900 mt-7">
                  Spider-Man: The Evolution of a Hero
                </p>
                <p className="mt-3 text-base font-normal text-gray-600">
                  Explore the journey of Spider-Man through comics, movies, and
                  beyond. Learn about his impact on popular culture and his
                  evolution over the years.
                </p>
                <span className="inline-flex mt-8 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Entertainment
                </span>
                <a href="#" title="">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </div>

              {/* Blockchain Blog Card */}
              <div className="relative px-5 py-6 group sm:p-8 xl:p-12">
                <div className="overflow-hidden aspect-w-16 aspect-h-8 rounded-2xl">
                  <img
                    className="object-cover w-full h-full transition-all duration-200 group-hover:opacity-70"
                    src="https://www.auraui.com/aiimage/blockchain.jpeg"
                    alt="Blockchain Blog"
                  />
                </div>
                <p className="text-xl font-bold text-gray-900 mt-7">
                  Understanding Blockchain Technology
                </p>
                <p className="mt-3 text-base font-normal text-gray-600">
                  Dive into the world of blockchain technology. Understand its
                  mechanisms, applications, and potential to revolutionize
                  various industries.
                </p>
                <span className="inline-flex mt-8 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Technology
                </span>
                <a href="#" title="">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center md:mt-16">
            <a
              href="#"
              title=""
              className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
            >
              Read all blog posts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogGrid;
