import {useTranslations} from 'next-intl';
import Article from '../components/articles';

export default function About() {

  const t = useTranslations('page');

  return (
    <div>
      <h1 className='text-left ml-16'>{t('about.title')}</h1>
      
      <div className='relative aspect-w-16 aspect-h-9 rounded-lg px-12 py-20 bg-white text-stone-900 m-6 text-left align-top'>
          <Article 
            title="Titre de l'article" 
            content="Contenu de l'article. Ceci est un exemple de contenu qui peut être développé ou réduit en cliquant sur le bouton." 
          />
      </div>
      
    </div>
  )
}

