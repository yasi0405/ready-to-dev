"use client"

import { useRouter, usePathname } from 'next/navigation';
import { FC, useState } from 'react';

const LanguageSwitcher: FC = () => {

  const router = useRouter();
  let pathname = usePathname();

  const handleRoute = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    console.log("PATHNAME ", pathname)
    console.log("LOCALE ", '/'+locale)
    if('/'+locale !== pathname.substring(0,3)){
      router.push('/'+locale+pathname.substring(3));
    }
  };

  return (
    <select onChange={handleRoute} className='rounded-md text-stone-900'>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="nl">Nederlands</option>
    </select>
  );
};

export default LanguageSwitcher;
