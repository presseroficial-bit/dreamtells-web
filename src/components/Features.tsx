import { motion } from 'framer-motion';
import { Brain, BookOpen, HeartPulse } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Features.css';

export const Features = () => {
    const { t } = useLanguage();

    const features = [
        {
            image: '/assets/pillar-decoding.png',
            icon: <Brain size={32} className="feature-icon" />,
            title: t('features.card1.title'),
            desc: t('features.card1.desc'),
            delay: 0.2
        },
        {
            image: '/assets/pillar-journal.png',
            icon: <BookOpen size={32} className="feature-icon" />,
            title: t('features.card2.title'),
            desc: t('features.card2.desc'),
            delay: 0.4
        },
        {
            image: '/assets/pillar-diagnosis.png',
            icon: <HeartPulse size={32} className="feature-icon" />,
            title: t('features.card3.title'),
            desc: t('features.card3.desc'),
            delay: 0.6
        },
        {
            image: '/assets/map-visualization.png',
            icon: <HeartPulse size={32} className="feature-icon" />, // Keep HeartPulse since it relates to health connect
            title: t('features.card4.title'),
            desc: t('features.card4.desc'),
            delay: 0.8
        }
    ];

    return (
        <section className="features-section" id="pillars">
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
                        <div className="feature-image-wrapper">
                            {feature.image && (
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="pillar-visual-image"
                                />
                            )}
                        </div>
                        <div className="feature-content-area">
                            <div className="feature-icon-wrapper-small">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
