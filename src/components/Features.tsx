import { motion } from 'framer-motion';
import { Brain, BookOpen, HeartPulse } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Features.css';

export const Features = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: <Brain size={32} className="feature-icon" />,
            title: t('features.card1.title'),
            desc: t('features.card1.desc'),
            delay: 0.2
        },
        {
            icon: <BookOpen size={32} className="feature-icon" />,
            title: t('features.card2.title'),
            desc: t('features.card2.desc'),
            delay: 0.4
        },
        {
            icon: <HeartPulse size={32} className="feature-icon" />,
            title: t('features.card3.title'),
            desc: t('features.card3.desc'),
            delay: 0.6
        }
    ];

    return (
        <section className="features-section">
            <div className="features-header">
                <span className="features-badge">{t('features.badge')}</span>
                <h2 className="features-title">{t('features.title')}</h2>
            </div>

            <div className="features-grid">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="feature-card glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: feature.delay }}
                        whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(138, 43, 226, 0.2)' }}
                    >
                        <div className="feature-icon-wrapper">
                            {feature.icon}
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
