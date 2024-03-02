import {useTranslations} from 'next-intl';
import EmailForm from '../components/emailForm';

export default function Contact() {

  const t = useTranslations('page');

  return (
    <div>
      <h1 className='text-left ml-16'>Contact</h1>
      
      <div className='relative aspect-w-16 aspect-h-9 rounded-lg px-12 py-12 bg-white text-stone-900 m-6 text-left align-top'>
        <div className=" max-w-md rounded-lg">
            <EmailForm />
          </div>
      </div>
      
    </div>
  )
}

