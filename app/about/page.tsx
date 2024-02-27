"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="relative isolate">
          <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      About us
                    </h1>
                    <h2>Our Journey</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                        Our journey began 15 years ago, with a vision to create a consulting firm that prioritizes the needs and success of its clients above all else. 
                        From our humble beginnings, we have grown into a trusted advisor for businesses large and small, developing solutions that are not only effective but also sustainable and forward-thinking.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Get started
                      </a>
                      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Live demo <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

