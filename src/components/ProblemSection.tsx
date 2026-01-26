import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './ProblemSection.css';

export const ProblemSection = () => {
    const { t } = useLanguage();

    return (
        <section className="problem-section" id="o-problema">
            <div className="problem-header">
                <h2>{t('problem.title')}</h2>
            </div>

            <div className="comparison-container">
                {/* Generic / Old Way */}
                <motion.div
                    className="comparison-card generic"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="card-header-problem">
                        <X className="icon-problem x-icon" size={32} />
                        <h3>{t('problem.generic.title')}</h3>
                    </div>
                    <p>{t('problem.generic.desc')}</p>
                </motion.div>

                {/* DreamTells Way */}
                <motion.div
                    className="comparison-card dreamtells"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="card-header-problem">
                        <Check className="icon-problem check-icon" size={32} />
                        <h3>{t('problem.dreamtells.title')}</h3>
                    </div>
                    <p>{t('problem.dreamtells.desc')}</p>
                </motion.div>
            </div>
        </section>
    );
};
