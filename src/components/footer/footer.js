import React from 'react';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#8485E6] py-8 text-[#ffffff]">
      <div className="w-full px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 justify-center items-center">

          {/* Product Section */}
          <div>
            <h3 className="font-semibold mb-4">{t('Product')}</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('Speech-to-Text')}</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('Real-Time Streaming')}</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('Speech-to-text')}</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('Audio Intelligence')}</li>
            </ul>
          </div>

          {/* Use cases Section */}
          <div>
            <h3 className="font-semibold mb-4">{t('Use cases')}</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('Customer experience')}</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('Sales enablement')}</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('Meeting assistants')}</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('Media')}</li>
            </ul>
          </div>

          {/* Developers Section */}
          <div>
            <h3 className="font-semibold mb-4">{t('Developers')}</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('Playground')}</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('Documentation')}</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('Discord')}</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold mb-4">{t('Resources')}</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('About us')}</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('Careers')}</li>
              <li className="hover:text-[#333333] cursor-pointer transition-colors ease-in-out duration-300">{t('Terms & conditions')}</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;