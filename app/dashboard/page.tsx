"use client";
import React from "react";

export default function Dashboard() {
  const packages = [
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "TUNgnath",
      rating: 5,
      price: 599,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Nanital",
      rating: 6,
      price: 799,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Champawat",
      rating: 5,
      price: 899,
      link: "#",
    },

    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Almora",
      rating: 7,
      price: 1000,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Auli",
      rating: 4,
      price: 599,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kaunsani",
      rating: 6,
      price: 499,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pithoragrah",
      rating: 8,
      price: 1999,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Chamba",
      rating: 6,
      price: 399,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Rishikesh",
      rating: 7,
      price: 599,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Joshimath",
      rating: 8,
      price: 699,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Haridware",
      rating: 4,
      price: 899,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ranikhet",
      rating: 5,
      price: 599,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Chopta",
      rating: 5,
      price: 799,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tehri Garhwal",
      rating: 5,
      price: 1999,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dhanulti",
      rating: 7,
      price: 499,
      link: "#",
    },

    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gomukh",
      rating: 8,
      price: 999,
      link: "#",
    },

    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mukteshwar",
      rating: 6,
      price: 899,
      link: "#",
    },

    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Chakrata",
      rating: 5,
      price: 599,
      link: "#",
    },

    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Yamountri",
      rating: 4,
      price: 999,
      link: "#",
    },

    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gangotri",
      rating: 4,
      price: 1999,
      link: "#",
    },

    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Badrinath",
      rating: 8,
      price: 899,
      link: "#",
    },

    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kedarnath",
      rating: 9,
      price: 899,
      link: "#",
    },

    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mussorriee",
      rating: 5,
      price: 499,
      link: "#",
    },

    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Lamsdown",
      rating: 5,
      price: 599,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dhanulti",
      rating: 6,
      price: 699,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Binsar",
      rating: 5,
      price: 799,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Harkidun",
      rating: 5,
      price: 499,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dehradun",
      rating: 8,
      price: 999,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Harshil",
      rating: 3,
      price: 399,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bhimatl",
      rating: 5,
      price: 899,
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667296659532-9670a076adeb?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kumaoun",
      rating: 6,
      price: 799,
      link: "#",
    },
  ];
  return (
    <>
      <section>
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
          Packages
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {packages.map((p, i) => {
            return (
              <div
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                key={i}
              >
                <a href={p.link}>
                  <img
                    className="pb-4 h-80 bg-cover w-full rounded-t-lg"
                    src={p.image}
                    alt={p.title}
                  />
                </a>
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
                    <a
                      href="#"
                      className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
