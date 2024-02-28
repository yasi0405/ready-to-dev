import {useTranslations} from 'next-intl';
import Image from 'next/image';


export default function Home() {

  const t = useTranslations('page');
  

  return (
    <div>
      <Image 
        className='mix-blend-lighten inline bg-auto bg-center ' 
        alt='Ready to Dev logo'
        src="/img/readytodev_logo_white.png"
        width="416"
        height="515"
      />
      <h1>{t('home.title')}</h1>
      <div className='relative aspect-w-16 aspect-h-9 rounded-lg px-56 py-20 bg-white text-stone-900 m-6 text-center align-top'>
        <h2>{t('home.vision1-title')}</h2>
        <p className='big pt-8 pb-12'>{t('home.vision1-description')}</p>

        <h2>{t('home.vision2-title')}</h2>
        <p className='big pt-8 pb-12'>{t('home.vision2-description')}</p>

        <h2>{t('home.vision3-title')}</h2>
        <p className='big pt-8 pb-12'>{t('home.vision3-description')}</p>

        <h2>{t('home.vision4-title')}</h2>
        <p className='big pt-8 pb-12'>{t('home.vision4-description')}</p>

        
        <h2>{t('home.vision5-title')}</h2>
        <p className='big pt-8 pb-12'>{t('home.vision5-description')}</p>
      </div>
      <div className='py-40'>
        <h3 className='font-thin text-4xl	'>{t('home.final-copy')}</h3>
          <button>{t('home.cta')}</button>
      </div>
    </div>
  )
}

