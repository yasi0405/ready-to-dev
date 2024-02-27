"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <div className='rtd_main_logo mix-blend-lighten bg-auto bg-center'>
      </div>
      <h1>Our vision</h1>
      <div className='relative aspect-w-16 aspect-h-9 rounded-lg px-56 py-20 bg-white text-stone-900 m-6 text-center align-top'>
        <h2>Empowering Success Through Innovation</h2>
        <p className='big'>At Ready to Dev, our mission is to empower businesses to achieve their fullest potential through innovative IT consulting services. 
          We believe that technology, when harnessed correctly, can be a game changer for companies of all sizes. 
          Our goal is to provide strategic IT guidance, enabling our clients to navigate the complex world of technology with ease and confidence.</p>

        <h2>Commitment to Excellence</h2>
        <p className='big'>We are committed to delivering excellence in every aspect of our services. 
          From the initial consultation to the implementation of IT solutions, our team is dedicated to ensuring that all your technology needs are met with the highest standards of quality.
          Our focus is on creating sustainable, long-term value for your business, helping you to not only meet but exceed your goals.</p>

        <h2>Partnership and Collaboration</h2>
        <p className='big'>Understanding that each business has unique challenges and opportunities, we emphasize a collaborative approach. 
          We partner closely with our clients to understand their specific needs, goals, and the dynamics of their industry. 
          This partnership enables us to tailor our consulting services to provide the most effective and efficient solutions.</p>

        <h2>Innovation and Adaptation</h2>
        <p className='big'>In a rapidly changing technological landscape, staying ahead of the curve is essential. 
          We prioritize innovation and continuous learning to ensure our clients benefit from the latest advancements in IT. 
          Our team is adept at adapting to new technologies and trends, ensuring that your business remains competitive and secure in the digital age.</p>

        
        <h2>Your Success is Our Success</h2>
        <p className='big'>Ultimately, our mission is to see our clients succeed. 
        Your goals are our goals, and we strive to provide IT solutions that propel your business forward. 
        Whether you're looking to improve operational efficiency, enhance cybersecurity, or drive digital transformation, Ready to Dev is here to guide you every step of the way.</p>

      </div>
    </div>
  )
}

