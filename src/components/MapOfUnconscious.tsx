import { motion } from 'framer-motion';
import { Compass, Share2, Layers, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './MapOfUnconscious.css';

export const MapOfUnconscious = () => {
    const { t } = useLanguage();

    const features = [
        { icon: <Layers size={24} />, text: t('map.feature1') },
        { icon: <Compass size={24} />, text: t('map.feature2') },
        { icon: <Zap size={24} />, text: t('map.feature3') },
    ];

    return (
        <section className="map-section" id="mapa">
            <div className="map-container">
                <div className="map-grid">
                    <motion.div
                        className="map-text-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="map-badge">
                            <Share2 size={16} />
                            <span>{t('map.badge')}</span>
                        </div>
                        <h2 className="map-title">{t('map.title')}</h2>
                        <p className="map-description">
                            {t('map.subtitle')}
                        </p>

                        <div className="map-features">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    className="map-feature-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                >
                                    <div className="map-feature-icon">{f.icon}</div>
                                    <span>{f.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="map-visual-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="map-visual-wrapper">
                            {/* Cosmic Map Visualization Placeholder */}
                            <div className="map-visual-placeholder">
                                <div className="nebula-bg" />
                                <div className="constellation-overlay">
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className={`star star-${i}`} />
                                    ))}
                                    <div className="map-node node-1"><span>{t('authority.card1.title')}</span></div>
                                    <div className="map-node node-2"><span>Sombra</span></div>
                                    <div className="map-node node-3"><span>Anima</span></div>
                                    <div className="connection conn-1" />
                                    <div className="connection conn-2" />
                                </div>
                                <div className="map-core-glow" />
                            </div>

                            {/* Floating UI Elements */}
                            <motion.div
                                className="floating-ui ui-1"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="ui-dot" />
                                <span>Padrão Detectado: Vôo</span>
                            </motion.div>
                            <motion.div
                                className="floating-ui ui-2"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="ui-dot gold" />
                                <span>Insight: Libertação</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
