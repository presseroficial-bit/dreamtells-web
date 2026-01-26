import { motion } from 'framer-motion';
import { BookOpen, Brain, GitCommit } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './AuthoritySection.css';

export const AuthoritySection = () => {
    const { t } = useLanguage();

    const cards = [
        {
            icon: <BookOpen size={32} />,
            title: t('authority.card1.title'),
            desc: t('authority.card1.desc'),
            delay: 0.2
        },
        {
            icon: <Brain size={32} />,
            title: t('authority.card2.title'),
            desc: t('authority.card2.desc'),
            delay: 0.4
        },
        {
            icon: <GitCommit size={32} />,
            title: t('authority.card3.title'),
            desc: t('authority.card3.desc'),
            delay: 0.6
        }
    ];

    return (
        <section className="authority-section" id="metodologia">
            <div className="authority-header">
                <span className="authority-subtitle">{t('authority.subtitle')}</span>
                <h2>{t('authority.title')}</h2>
            </div>

            <div className="authority-grid">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="authority-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: card.delay }}
                    >
                        <div className="authority-icon-wrapper">
                            {card.icon}
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
