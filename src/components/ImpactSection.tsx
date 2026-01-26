import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import './ImpactSection.css';

export const ImpactSection = () => {
    const { t } = useLanguage();

    return (
        <section className="impact-section">
            <motion.div
                className="impact-content"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <blockquote>{t('impact.text')}</blockquote>
                <cite>— {t('impact.author')}</cite>
            </motion.div>
        </section>
    );
};
