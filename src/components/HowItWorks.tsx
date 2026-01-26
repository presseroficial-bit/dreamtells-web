import { motion } from 'framer-motion';
import { Mic, Cpu, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './HowItWorks.css';

export const HowItWorks = () => {
    const { t } = useLanguage();

    const steps = [
        {
            icon: <Mic size={28} />,
            title: t('how.step1.title'),
            desc: t('how.step1.desc'),
            color: '#00F0FF'
        },
        {
            icon: <Cpu size={28} />,
            title: t('how.step2.title'),
            desc: t('how.step2.desc'),
            color: '#8A2BE2'
        },
        {
            icon: <Lightbulb size={28} />,
            title: t('how.step3.title'),
            desc: t('how.step3.desc'),
            color: '#FF00E6'
        }
    ];

    return (
        <section className="how-section">
            <div className="how-header">
                <span className="how-badge">{t('how.badge')}</span>
                <h2 className="how-title">{t('how.title')}</h2>
            </div>

            <div className="steps-container">
                <div className="steps-line"></div>

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="step-item"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                    >
                        <div className="step-circle-wrapper">
                            <div className="step-circle" style={{ borderColor: step.color, boxShadow: `0 0 20px ${step.color}40` }}>
                                <div className="step-icon" style={{ color: step.color }}>
                                    {step.icon}
                                </div>
                            </div>
                            <div className="step-number">{index + 1}</div>
                        </div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-desc">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
