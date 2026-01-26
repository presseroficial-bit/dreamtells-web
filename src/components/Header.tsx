import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Header.css';

export const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-content">
                <div className="brand-logo">
                    {/* Logo removed - moved to Hero */}
                </div>

                <nav className="header-nav">
                    <a href="#o-problema" className="nav-link">{t('nav.problem')}</a>
                    <a href="#metodologia" className="nav-link">{t('nav.methodology')}</a>
                    <a href="#depoimentos" className="nav-link">{t('nav.testimonials')}</a>
                    <a href="#faq" className="nav-link">{t('nav.faq')}</a>
                </nav>

                <div className="header-actions">
                    <div className="lang-switcher-premium">
                        <button
                            className={`lang-btn ${language === 'pt' ? 'active' : ''}`}
                            onClick={() => setLanguage('pt')}
                        >
                            PT
                        </button>
                        <div className="lang-divider" />
                        <button
                            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            onClick={() => setLanguage('en')}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
