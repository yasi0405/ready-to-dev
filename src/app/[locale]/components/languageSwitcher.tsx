"use client"

import { useRouter, usePathname } from 'next/navigation';
import { FC } from 'react';

const LanguageSwitcher: FC = () => {

  const router = useRouter();
  let pathname = usePathname();

  const handleRoute = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    if('/'+locale !== pathname.substring(0,3)){
      router.push('/'+locale+pathname.substring(3));
      const langSwitcher = document.getElementById('langswitcher') as HTMLInputElement;
      langSwitcher.value = locale;
    }
  };

  return (
    <select id="langswitcher" defaultValue={pathname.substring(1)} onChange={handleRoute} className='rounded-md text-stone-900'>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="nl">Nederlands</option>
    </select>
  );
};

export default LanguageSwitcher;
