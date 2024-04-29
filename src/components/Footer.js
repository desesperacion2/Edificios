import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation(); // Accede a la función de traducción

  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">© {new Date().getFullYear()} BuildingBuddy. {t('rightsReserved')}.</span>
      </div>
    </footer>
  );
}

export default Footer;
