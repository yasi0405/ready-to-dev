"use client"

import { useRouter } from 'next/navigation';
import React from 'react';


const LanguageSwitcher: React.FC = () => {
  const router = useRouter();

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select
      onChange={handleLocaleChange}
      defaultValue={router.locale}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="nl">Nederlands</option>
    </select>
  );
};

export default LanguageSwitcher;
