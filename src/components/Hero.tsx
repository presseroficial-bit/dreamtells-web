import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Hero.css';

export const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="hero-section">
            <div className="hero-background-glow" />

            <div className="hero-content">
                <div className="hero-main-area">
                    <motion.img
                        src="/logo-dreamtells.png"
                        alt="DreamTells"
                        className="hero-logo-large"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        {t('hero.title.prefix')} <span className="text-gradient">{t('hero.title.highlight')}</span><br />
                        {t('hero.title.suffix')}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="hero-badge"
                    >
                        <Sparkles size={16} className="hero-badge-icon" />
                        <span>{t('hero.badge')}</span>
                    </motion.div>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                        <button className="btn btn-primary">
                            {t('hero.btn.download')}
                            <Download size={20} />
                        </button>
                        <button className="btn btn-secondary">
                            {t('hero.btn.how')}
                            <ArrowRight size={20} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
