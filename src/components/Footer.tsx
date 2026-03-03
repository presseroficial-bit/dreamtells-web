import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

export const Footer = () => {
    const { t, language, setLanguage } = useLanguage();

    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>DreamTells</h3>
                    <div className="language-switcher">
                        <button
                            className={language === 'pt' ? 'active' : ''}
                            onClick={() => setLanguage('pt')}
                        >
                            PT
                        </button>
                        <span className="divider">/</span>
                        <button
                            className={language === 'en' ? 'active' : ''}
                            onClick={() => setLanguage('en')}
                        >
                            EN
                        </button>
                    </div>
                </div>

                <div className="footer-links">
                    <a href="#">{t('footer.privacy')}</a>
                    <a href="#">{t('footer.terms')}</a>
                    <a href="#">{t('footer.contact')}</a>
                </div>

                <div className="footer-social">
                    <a href="https://www.facebook.com/dreamtells" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={32} /></a>
                    <a href="https://www.instagram.com/dreamtellsoficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={32} /></a>
                    <a href="https://www.youtube.com/@DreamTellsSonhos" target="_blank" rel="noopener noreferrer" aria-label="Youtube"><Youtube size={32} /></a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} DreamTells. {t('footer.rights')}</p>
            </div>
        </footer>
    );
};
