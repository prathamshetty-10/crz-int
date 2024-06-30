import React from 'react';
import { useTranslation } from 'react-i18next'; // Import carousel styles

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-300">
            <h2 className="text-lg font-bold mb-2">{t('aboutCrzTitle')}</h2>
            <p>{t('aboutCrzDescription')}</p>
            <h2 className="text-lg font-bold mb-2">{t('whyCrzTitle')}</h2>
            <p>{t('whyCrzDescription')}</p>
            <h2 className="text-lg font-bold mb-2">{t('crzJurisdictionTitle')}</h2>
            <p>{t('crzJurisdictionDescription')}</p>
            <h2 className="text-lg font-bold mb-2">{t('crzLengthsCoverageTitle')}</h2>
            <p>{t('crzLengthsCoverageDescription')}</p>
            <h2 className="text-lg font-bold mb-2">{t('crzMapTitle')}</h2>
            <p>{t('crzAreaSea')}</p>
            <p>{t('crzAreaTidal')}</p>
            <h2 className="text-lg font-bold mb-2">{t('crzCategoriesTitle')}</h2>
            <p>{t('crzICategory')}</p>
            <p>{t('crzIA')}</p>
            <p>{t('crzIB')}</p>
            <p>{t('crzII')}</p>
            <p>{t('crzIII')}</p>
            <p>{t('crzIVCategory')}</p>
            <p>{t('crzIVA')}</p>
            <p>{t('crzIVB')}</p>
            <p>{t('cvca')}</p>
            <h2 className="text-lg font-bold mb-2">{t('typesApplicationsTitle')}</h2>
            <p>{t('conversions')}</p>
            <p>{t('residentialConversion')}</p>
            <p>{t('commercialConversion')}</p>
            <p>{t('constructions')}</p>
            <p>{t('residentialConstruction')}</p>
            <p>{t('commercialConstruction')}</p>
            <p>{t('governmentProjects')}</p>
          </div>
  );
}
