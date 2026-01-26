import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Testimonials.css';

export const Testimonials = () => {
    const { t } = useLanguage();

    const testimonials = [
        {
            text: t('test1.text'),
            author: t('test1.author'),
            role: t('test1.role'),
            delay: 0.2
        },
        {
            text: t('test2.text'),
            author: t('test2.author'),
            role: t('test2.role'),
            delay: 0.4
        },
        {
            text: t('test3.text'),
            author: t('test3.author'),
            role: t('test3.role'),
            delay: 0.6
        }
    ];

    return (
        <section className="testimonials-section" id="depoimentos">
            <div className="testimonials-header">
                <span className="testimonials-badge">{t('testimonials.badge')}</span>
                <h2 className="testimonials-title">{t('testimonials.title')}</h2>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((test, index) => (
                    <motion.div
                        key={index}
                        className="testimonial-card glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: test.delay }}
                    >
                        <Quote size={32} className="quote-icon" />
                        <p className="testimonial-text">"{test.text}"</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">{test.author.charAt(0)}</div>
                            <div>
                                <h4>{test.author}</h4>
                                <span>{test.role}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
