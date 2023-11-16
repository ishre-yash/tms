import Link from "next/link";
import React from "react";
import { packages } from "@/lib/data/packages";

export default function HomePage() {
  const testimonial = [
    {
      name: "paraval sharma",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      rating: 4,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    },
    {
      name: "paraval sharma",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      rating: 4,
      content:
        ". Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    },
    {
      name: "paraval sharma",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      rating: 5,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    },
    {
      name: "paraval sharma",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      rating: 5,
      content: "Lorem ipsum dolor sit, ",
    },
    {
      name: "paraval sharma",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      rating: 2,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam ",
    },
    {
      name: "paraval sharma",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      rating: 5,
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ",
    },
  ];
  return (
    <>
      <nav className="bg-gray-50">
        <div className="container p-6 mx-auto">
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold text-gray-900">
              <Link href="/">TMS</Link>
            </h1>
          </div>

          <div className="flex items-center justify-center mt-2 text-gray-700">
            <Link
              href="/"
              className="text-gray-800 border-b-2 border-blue-600 mx-1.5 sm:mx-6"
            >
              Home
            </Link>

            <Link
              href="/#about"
              className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-600 mx-1.5 sm:mx-6"
            >
              About
            </Link>

            <Link
              href="/#contact"
              className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-600 mx-1.5 sm:mx-6"
            >
              Contact
            </Link>

            <Link
              href="/#package"
              className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-600 mx-1.5 sm:mx-6"
            >
              Package
            </Link>
          </div>
        </div>
      </nav>
      <main>
        <section
          className="w-full bg-cover bg-center py-32"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1625716741174-6671d4a8027f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="container mx-auto text-center text-white">
            <h1 className="text-5xl font-medium mb-6">Destinations Place</h1>
            <p className="text-xl mb-12">Welcome To Uttarkhand</p>
            <Link
              href="/signin"
              className="bg-blue-600 text-white py-4 px-12 rounded-full hover:bg-blue-500"
            >
              Book Now
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
              Services
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus aliquid iusto,
            </p>
          </div>
          <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 border-b sm:border-r">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 sm:w-16 sm:h-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="currentColor"
                      d="m12.6 8.7l-1.1-2.2a1.05 1.05 0 0 0-.9-.5H4.4a1.05 1.05 0 0 0-.9.5L2.4 8.7L1.16 9.852a.5.5 0 0 0-.16.366V14.5a.5.5 0 0 0 .5.5h2c.2 0 .5-.2.5-.4V14h7v.5c0 .2.2.5.4.5h2.1a.5.5 0 0 0 .5-.5v-4.282a.5.5 0 0 0-.16-.366ZM4.5 7h6l1 2h-8Zm.5 4.6c0 .2-.3.4-.5.4H2.4c-.2 0-.4-.3-.4-.5v-1.1c.1-.3.3-.5.6-.4l2 .4c.2 0 .4.3.4.5Zm8-.1c0 .2-.2.5-.4.5h-2.1c-.2 0-.5-.2-.5-.4v-.7c0-.2.2-.5.4-.5l2-.4c.3-.1.5.1.6.4ZM8 4H7L6 0h3ZM1.1 1.8L3.7.3l1.1 4l-.8.4ZM11.3.3l2.6 1.5l-2.9 3l-.9-.5Z"
                    ></path>
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">Off Road</h6>
                <p className="mb-3 text-sm text-gray-900">
                  Off-roading is the act of driving or riding in a vehicle on
                  unpaved surfaces such as sand, dirt, gravel, riverbeds, mud,
                  snow, rocks, and other natural.
                </p>
              </div>
            </div>
            <div className="p-8 border-b lg:border-r">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 sm:w-16 sm:h-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29V23M1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15h15.03M1 17h15v2H1v-2Z"
                    ></path>
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">Food & Drinks</h6>
                <p className="mb-3 text-sm text-gray-900">
                  Food and Beverage Services can be broadly defined as the
                  process of preparing, presenting and serving of food and
                  beverages to the customers.
                </p>
              </div>
            </div>
            <div className="p-8 border-b sm:border-r lg:border-r-0">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 sm:w-16 sm:h-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M16 6.707C16 3.568 15.081 1.02 13.946 1h.014h-1.296S9.62 3.287 5.239 4.184c-.134.708-.219 1.551-.219 2.523s.085 1.816.219 2.523c4.382.897 7.425 3.184 7.425 3.184h1.296l-.014-.001C15.082 12.393 16 9.846 16 6.706zm-2.487 4.844c-.147 0-.305-.152-.387-.243c-.197-.22-.387-.562-.55-.989c-.363-.957-.564-2.239-.564-3.611s.2-2.655.564-3.611c.162-.428.353-.77.55-.99c.081-.091.24-.243.387-.243s.305.152.387.243c.197.22.387.562.55.99c.363.957.564 2.239.564 3.611s-.2 2.655-.564 3.611c-.162.428-.353.77-.55.989c-.081.091-.24.243-.387.243zM3.935 6.707c0-.812.06-1.6.173-2.33c-.74.102-1.39.161-2.193.161H.867L0 6.017v1.378l.867 1.479h1.048c.803 0 1.453.059 2.193.161a15.326 15.326 0 0 1-.173-2.33zm1.817 3.327l-2-.383l1.279 5.024c.066.26.324.391.573.291l1.852-.741a.427.427 0 0 0 .222-.611l-1.926-3.581zm7.761-1.46c-.057 0-.118-.059-.149-.094a1.268 1.268 0 0 1-.212-.381c-.14-.369-.217-.863-.217-1.392s.077-1.023.217-1.392c.063-.165.136-.297.212-.381c.031-.035.092-.094.149-.094s.118.059.149.094c.076.085.149.217.212.381c.14.369.217.863.217 1.392s-.077 1.023-.217 1.392a1.243 1.243 0 0 1-.212.381c-.031.035-.092.094-.149.094z"
                    ></path>
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">Safty Guide</h6>
                <p className="mb-3 text-sm text-gray-900">
                  A safety manual is a collection of information, instructions,
                  policies, and procedures intended to ensure the safe operation
                  of any tools, machinery, chemicals, or food that you use, as
                  well as safe conduct in the workplace.
                </p>
              </div>
            </div>
            <div className="p-8 border-b lg:border-b-0 lg:border-r">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 sm:w-16 sm:h-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-.175-.013-.363t-.012-.312q-.125.725-.675 1.2T18 13h-2q-.825 0-1.413-.587T14 11v-1h-4V8q0-.825.588-1.413T12 6h1q0-.575.313-1.012t.762-.713q-.5-.125-1.012-.2T12 4Q8.65 4 6.325 6.325T4 12h5q1.65 0 2.825 1.175T13 16v1h-3v2.75q.5.125.988.188T12 20Z"
                    ></path>
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">Camping</h6>
                <p className="mb-3 text-sm text-gray-900">
                  Camp Services‌ means the provision of Camp Accommodation, Food
                  Services, housekeeping and all other services normally
                  provided to all users of the Camp.
                </p>
              </div>
            </div>
            <div className="p-8 border-b sm:border-b-0 sm:border-r">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 sm:w-16 sm:h-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m4.2 22.1l1.675-7.525q.05-.275.25-.425T6.6 14q.35 0 .575.275t.15.625L5.65 22.425q-.05.275-.25.425t-.475.15q-.35 0-.575-.275T4.2 22.1Zm3.05-.325L9.8 8.9L8 9.6V12q0 .425-.288.713T7 13q-.425 0-.713-.288T6 12V8.95q0-.3.163-.537T6.6 8.05l4.45-1.9q.725-.3 1.475-.063T13.7 7l1 1.6q.525.85 1.363 1.475T18 10.9q.425.075.713.375T19 12q0 .425-.288.7t-.687.225q-1.35-.2-2.525-.838t-2-1.587l-.6 3l1.8 1.7q.15.15.225.338t.075.387V22q0 .425-.288.713T14 23q-.425 0-.713-.288T13 22v-5l-2.1-2l-1.625 7.2q-.075.35-.363.575T8.25 23q-.5 0-.8-.375t-.2-.85ZM13.5 5.5q-.825 0-1.413-.588T11.5 3.5q0-.825.588-1.413T13.5 1.5q.825 0 1.413.588T15.5 3.5q0 .825-.588 1.413T13.5 5.5Zm4 16.75v-7.5q0-.325.213-.537T18.25 14q.325 0 .537.213t.213.537v7.5q0 .325-.213.537T18.25 23q-.325 0-.537-.213t-.213-.537Z"
                    ></path>
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">Traking</h6>
                <p className="mb-3 text-sm text-gray-900">
                  Tracking status represents the stage of a shipment journey a
                  customer&apos;s package is in.
                </p>
              </div>
            </div>
            <div className="p-8">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 sm:w-16 sm:h-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 13q-.425 0-.713-.288T11 12q0-.425.288-.713T12 11q.425 0 .713.288T13 12q0 .425-.288.713T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0 0q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q3.35 0 5.675 2.325T20 12q0 3.35-2.325 5.675T12 20Zm1.675-5.85q.15-.075.275-.2t.2-.275l2.925-6.25q.125-.25-.063-.438t-.437-.062l-6.25 2.925q-.15.075-.275.2t-.2.275l-2.925 6.25q-.125.25.063.438t.437.062l6.25-2.925Z"
                    ></path>
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">Adventures</h6>
                <p className="mb-3 text-sm text-gray-900">
                  &quot;Adventures&quot; has evolved to include tributes to
                  colleagues and others no longer with us, plus cover topics I
                  think my readers will find of value.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
          id="about"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="lg:pr-10">
              <h5 className="mb-4 text-4xl font-extrabold leading-none">
                About Us
              </h5>
              <p className="mb-6 text-gray-900">
                Rightly called Devbhoomi, meaning, the land of the gods,
                Uttarakhand is where the spiritual aura is prominent. The state
                is home to a large number of Hindu temples that are situated in
                its remote corners. There are several holy rivers like the River
                Ganga which make it a sacred pilgrimage destination as well.It
                is a state in northern India crossed by the himalayas, is known
                for its Hindu pilgrimage sites. Rishikesh, a major centre for
                yoga study, was made famous by the Beatles&apos;1968
                visit.Uttarakhand is divided into two regions known as Kumaon
                and Garhwal .
              </p>
              <hr className="mb-5 border-gray-300" />
              <div className="flex items-center space-x-4">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4"></circle>
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                    <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.unsplash.com/photo-1589019839891-b928db0efa91?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
          id="package"
        >
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
              Package
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus aliquid iusto,
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packages.slice(0, 9).map((p, i) => {
              return (
                <div
                  className="w-full bg-white border border-gray-200 rounded-lg shadow"
                  key={i}
                >
                  <img
                    className="pb-4 h-80 bg-cover w-full rounded-t-lg"
                    src={p.image}
                    alt={p.title}
                  />
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                        {p.title}
                      </h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {Array(5)
                          .fill(0)
                          .map((_, index) => {
                            if (index < p.rating) {
                              return (
                                <svg
                                  key={index}
                                  className="w-4 h-4 text-yellow-300"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                              );
                            }
                          })}
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                        {p.rating}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900">
                        ₹{p.price}
                      </span>
                      <Link
                        href="/signin"
                        className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h2 className="mb-4 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Get 30% on top destination
              </h2>
              <p className="mb-6 text-base text-gray-700 md:text-lg">
                Book your trip before 31st march and available 30% flat discount
              </p>
              <Link
                href="/signin"
                className="bg-blue-600 text-white py-4 px-8 rounded-full hover:bg-blue-500"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Read trusted reviews from our customers
            </h2>

            <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Man"
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="h-14 w-14 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>

                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        Paul Starr
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa sit rerum incidunt, a consequuntur recusandae ab saepe
                    illo est quia obcaecati neque quibusdam eius accusamus error
                    officiis atque voluptates magnam!
                  </p>
                </blockquote>
              </div>

              {testimonial.map((t, i) => {
                return (
                  <div className="mb-8 sm:break-inside-avoid" key={i}>
                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                      <div className="flex items-center gap-4">
                        <img
                          alt={t.name}
                          src={t.image}
                          className="h-14 w-14 rounded-full object-cover"
                        />

                        <div>
                          <div className="flex justify-center gap-0.5 text-green-500">
                            {Array(5)
                              .fill(0)
                              .map((_, index) => {
                                if (index < t.rating) {
                                  return (
                                    <svg
                                      key={index}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  );
                                }
                              })}
                          </div>

                          <p className="mt-0.5 text-lg font-medium text-gray-900">
                            {t.name}
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-gray-700">{t.content}</p>
                    </blockquote>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white" id="contact">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div>
              <h2 className="mt-2 text-start text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Contact us
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
              <div className="grid grid-cols-1 gap-12 h-fit">
                <div>
                  <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      ></path>
                    </svg>
                  </span>

                  <h2 className="mt-4 text-base font-medium text-gray-800">
                    Email
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Our friendly team is here to help.
                  </p>
                  <p className="mt-2 text-sm text-blue-500">
                    example@gmail.com
                  </p>
                </div>

                <div>
                  <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      ></path>
                    </svg>
                  </span>

                  <h2 className="mt-4 text-base font-medium text-gray-800">
                    Office
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Come say hello at our office HQ.
                  </p>
                  <p className="mt-2 text-sm text-blue-500">
                    Gumaniwala Rushafarm Rishikesh Dehradun
                  </p>
                </div>
              </div>

              <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
                <form>
                  <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                      <label className="block mb-2 text-sm text-gray-600">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="shre "
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="flex-1 px-2 mt-4 md:mt-0">
                      <label className="block mb-2 text-sm text-gray-600">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="yash"
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block mb-2 text-sm text-gray-600">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="w-full mt-4">
                    <label className="block mb-2 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      className="block w-full h-20 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link
                href="/"
                className="inline-block mb-6 text-2xl font-bold tracking-wider text-gray-800 uppercase"
              >
                Lorem
              </Link>
              <p className="text-sm text-gray-500 sm:max-w-sm pr-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Resources
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link href="/about" className="hover:underline">
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Contact
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <svg
                      className="inline-block w-4 h-4 mr-2 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0a5.5 5.5 0 0 0-5.5 5.5c0 3.182 4.624 9.543 4.906 9.906l.094.094.094-.094C9.876 15.043 14.5 8.682 14.5 5.5A5.5 5.5 0 0 0 8 0zm0 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Gumaniwala, Rishikesh Uttarkhand,India</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 mr-2 text-gray-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.95 21q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z"
                      ></path>
                    </svg>
                    <span>0000 0000 00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2023{" "}
              <Link href="/" className="hover:underline">
                lorem
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path>
                </svg>
                <span className="sr-only">Discord community</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">GitHub account</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Dribbble account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
