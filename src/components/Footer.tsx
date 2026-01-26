import { Github, Twitter, Instagram } from 'lucide-react';
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
                    <a href="#" aria-label="Github"><Github size={20} /></a>
                    <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                    <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} DreamTells. {t('footer.rights')}</p>
            </div>
        </footer>
    );
};
