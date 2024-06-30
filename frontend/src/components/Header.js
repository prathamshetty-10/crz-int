import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'kn' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <div className='w-full bg-[#243B58]'>
        <div className='text-white flex flex-col lg:p-3 p-3 lg:text-center'>
            <p className='font-bold lg:text-lg text-[0.6rem]'>{t('govtOfKarnataka')}</p>
            <p className='lg:text-lg text-[0.4rem]'>{t('deptOfEcologyAndEnv')}</p>
        </div>
        <button onClick={toggleLanguage} className='bg-blue-800 text-white px-4 lg:py-2 py-1 rounded-lg hover:bg-blue-900 whitespace-nowrap lg:text-lg text-[0.6rem] absolute right-2 lg:top-4 top-3'>
        {language === 'en' ? 'ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ' : 'Switch to English'}
      </button>
        {/* <button className='bg-blue-800 text-white px-4 lg:py-2 py-1 rounded-lg hover:bg-blue-900 whitespace-nowrap lg:text-lg text-[0.6rem] absolute right-2 lg:top-4 top-3' >Kannada</button> */}
    </div>
  )
}
