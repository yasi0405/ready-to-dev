import {useTranslations} from 'next-intl';

export default function Blog() {

  const t = useTranslations('page');

  return (
    <div>
      <h1 className='text-left ml-20'>{t('blog.title')}</h1>
      
      <div className='relative aspect-w-16 aspect-h-9 rounded-lg px-12 py-20 bg-white text-stone-900 m-6 text-left align-top'>
        <h2>{t('about.journey-title')}</h2>
        <p className='big pt-8 pb-12'>{t('about.journey-description')}</p>
        {/*{posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}*/}
      </div>
      
    </div>
  )
}

