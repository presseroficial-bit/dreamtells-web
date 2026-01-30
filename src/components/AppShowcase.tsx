import { motion } from 'framer-motion';
import './AppShowcase.css';

export const AppShowcase = () => {
    const screens = [
        {
            id: 'home',
            image: '/app-mockup.png',
            label: 'Home'
        },
        {
            id: 'history',
            image: '/screenshots/historico.jpg',
            label: 'Histórico'
        },
        {
            id: 'interpretation',
            image: '/screenshots/interpretacao.jpg',
            label: 'Interpretação'
        },
        {
            id: 'diagnosis',
            image: '/screenshots/diagnostico.jpg',
            label: 'Diagnóstico'
        },
        {
            id: 'message',
            image: '/screenshots/mensagem.jpg',
            label: 'Mensagem do Dia'
        }
    ];

    return (
        <section className="showcase-section">
            <div className="showcase-container">
                <div className="phones-grid">
                    {screens.map((screen, index) => (
                        <motion.div
                            key={screen.id}
                            className="phone-wrapper"
                            initial={{ opacity: 0, y: 50, zIndex: 1 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                scale: 2,
                                zIndex: 1000,
                                transition: { duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }
                            }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{ position: 'relative', transformStyle: 'preserve-3d' }}
                        >
                            <div className="phone-container">
                                <div className="phone-screen">
                                    <img src={screen.image} alt={screen.label} className="phone-image" />
                                </div>
                                <div className="phone-reflection"></div>
                            </div>
                            <span className="phone-label">{screen.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
