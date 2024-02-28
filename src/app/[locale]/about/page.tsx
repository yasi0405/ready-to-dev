import {useTranslations} from 'next-intl';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function About() {

  const t = useTranslations('page');

  return (
    <div>
      <h1>{t('about.title')}</h1>
      
      <div className='relative aspect-w-16 aspect-h-9 rounded-lg px-56 py-20 bg-white text-stone-900 m-6 text-center align-top'>
        <h2>{t('about.journey-title')}</h2>
        <p className='big pt-8 pb-12'>{t('about.journey-description')}</p>
      </div>
      
    </div>
  )
}

