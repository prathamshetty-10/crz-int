import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-lg font-bold mb-2">{t('quickLinks')}</h2>
                        <hr className="border-red-500 w-1/4 mb-2" />
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:underline">{t('aboutCRZ')}</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">{t('importantDocs')}</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">{t('privacyPolicy')}</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-lg font-bold mb-2">{t('socialMedia')}</h2>
                        <hr className="border-red-500 w-1/4 mb-2" />
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:underline">{t('facebook')}</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">{t('instagram')}</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">{t('twitter')}</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-lg font-bold mb-2">{t('helpLineNumber')}</h2>
                        <hr className="border-red-500 w-1/4 mb-2" />
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:underline">{t('crzTelephone')}</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">{t('dcOfficeTelephone')}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>{t('developedBy')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
