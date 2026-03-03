import { motion } from 'framer-motion';
import { Download, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './FinalCTA.css';

export const FinalCTA = () => {
    const { t } = useLanguage();

    return (
        <section className="final-cta-section">
            <div className="final-cta-overlay" />
            <motion.div
                className="final-cta-content"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Star className="cta-star-icon" size={40} />
                <h2>{t('cta.title')}</h2>
                <p>{t('cta.subtitle')}</p>
            </motion.div>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', zIndex: 9999, position: 'relative' }}>
                <a
                    href="https://play.google.com/store/apps/details?id=com.dreamtells.sonhos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-large"
                    style={{ pointerEvents: 'auto', position: 'relative', zIndex: 9999 }}
                >
                    {t('cta.btn')}
                    <Download size={24} />
                </a>
            </div>
        </section >
    );
};
