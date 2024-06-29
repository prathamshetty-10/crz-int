import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className=''>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('kn')}>Kannada</button>
    </div>
  );
}

export default About;
