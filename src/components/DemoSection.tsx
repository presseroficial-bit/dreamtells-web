import { motion } from 'framer-motion';
import { Sparkles, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DemoSection.css';

export const DemoSection = () => {
    const { t } = useLanguage();

    return (
        <section className="demo-section">
            <div className="demo-header">
                <Sparkles className="demo-icon-top" size={24} />
                <h2>{t('demo.title')}</h2>
            </div>

            <div className="demo-content">
                <div className="demo-grid">
                    {/* User Input Mockup */}
                    <motion.div
                        className="demo-card input-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="card-label">
                            <span className="dot user-dot"></span>
                            {t('demo.input.label')}
                        </div>
                        <p className="demo-text-input">
                            {t('demo.input.text')}
                        </p>
                    </motion.div>

                    {/* AI Output Mockup */}
                    <motion.div
                        className="demo-card output-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="card-label">
                            <span className="dot ai-dot"></span>
                            {t('demo.analysis.label')}
                        </div>
                        <div className="demo-text-output">
                            <MessageSquare className="ai-icon-inline" size={18} />
                            <p>{t('demo.analysis.text')}</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="demo-connector-line"></div>
        </section>
    );
};
