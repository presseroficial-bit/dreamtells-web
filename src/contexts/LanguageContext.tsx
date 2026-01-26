import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    'nav.problem': 'O Problema',
    'nav.methodology': 'Metodologia',
    'nav.testimonials': 'Depoimentos',
    'nav.faq': 'FAQ',

    // Hero - Diferenciação Absoluta
    'hero.badge': 'Inteligência Onírica Profunda',
    'hero.title.prefix': 'Não é apenas um sonho.',
    'hero.title.highlight': 'É a sua verdade',
    'hero.title.suffix': 'tentando emergir.',
    'hero.subtitle': 'Esqueça os dicionários genéricos. O DreamTells utiliza psicologia analítica para decodificar a mensagem única e intransferível que seu inconsciente criou para VOCÊ.',
    //'hero.subtitle': 'DreamTells é a sua bússola interior. Utilize o poder da IA avançada para traduzir seus sonhos em autoconhecimento profundo e revelador.', // Old
    'hero.btn.download': 'Decifrar Meu Sonho',
    'hero.btn.how': 'Entender a Metodologia',

    // Problem Section - Ataque ao Mercado
    'problem.title': 'Por que a maioria das interpretações falha?',
    'problem.generic.title': 'Outros Apps & Google',
    'problem.generic.desc': 'Dão significados fixos e rasos. "Sonhar com cobra é traição". Ignoram seu contexto e emoções.',
    'problem.dreamtells.title': 'A Abordagem DreamTells',
    'problem.dreamtells.desc': 'Analisa o símbolo no SEU contexto. "Como você se sentiu? Onde estava?" Conecta o sonho ao seu momento de vida atual.',

    // Demo Section - Concretude
    'demo.title': 'Veja a diferença na prática',
    'demo.input.label': 'Sonho Real:',
    'demo.input.text': '"Sonhei que estava caindo de um prédio alto, mas em vez de pânico, eu sentia uma paz absoluta e via cores lindas."',
    'demo.analysis.label': 'Análise DreamTells:',
    'demo.analysis.text': 'A queda geralmente simboliza perda de controle, mas o seu sentimento de PAZ inverte o significado. Isso sugere que você está pronto para "soltar" uma responsabilidade pesada ou uma estrutura de vida (o prédio) que já não te serve. O inconsciente não está alertando perigo, mas convidando à rendição e renovação.',

    // Authority Section - Intelectual
    'authority.title': 'Ciência aliada à Intuição',
    'authority.subtitle': 'Fundamentado na Psicologia Analítica',
    'authority.card1.title': 'Arquétipos Universais',
    'authority.card1.desc': 'Identificamos padrões míticos descritos por Carl Jung que aparecem na narrativa humana há milênios.',
    'authority.card2.title': 'Análise de Sentimento',
    'authority.card2.desc': 'A IA detecta nuances emocionais sutis que alteram completamente o significado de um símbolo.',
    'authority.card3.title': 'Contexto Pessoal',
    'authority.card3.desc': 'Seu sonho não é um evento isolado. Ele é um capítulo da sua história psíquica atual.',

    // Impact Section - Pausa Emocional
    'impact.text': '"Até você tornar o inconsciente consciente, ele dirigirá a sua vida e você o chamará de destino."',
    'impact.author': 'Carl G. Jung',

    // Testimonials - Transformacional
    'testimonials.badge': 'Histórias Reais',
    'testimonials.title': 'De Confusão à Clareza',
    'test1.text': 'Eu tinha pesadelos recorrentes com perseguição. O DreamTells me mostrou que eu não estava fugindo de um monstro, mas de uma decisão de carreira que eu precisava tomar. Tomei a decisão e os pesadelos pararam.',
    'test1.author': 'Lucas F.',
    'test1.role': 'Arquiteto',
    'test2.text': 'Sempre achei que sonhos eram bobagem. Até que o app conectou um sonho estranho com um luto que eu não tinha processado. Foi o início da minha cura.',
    'test2.author': 'Juliana M.',
    'test2.role': 'Advogada',
    'test3.text': 'Não é horóscopo. É uma ferramenta de autoconhecimento assustadoramente precisa. Uso toda manhã como um "briefing" do meu cérebro.',
    'test3.author': 'Roberto S.',
    'test3.role': 'Empreendedor',

    // Final CTA - Emocional
    'cta.title': 'Sua mente fala com você todas as noites.',
    'cta.subtitle': 'Você vai continuar ignorando ou vai finalmente ouvir a sua própria verdade?',
    'cta.btn': 'Começar Jornada Agora',

    // Footer & FAQ (Maintained)
    'footer.rights': 'Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
    'footer.contact': 'Contato',
    'faq.badge': 'Dúvidas',
    'faq.title': 'Perguntas Frequentes',
    'faq.q1': 'É seguro compartilhar meus sonhos?',
    'faq.a1': 'Sim, totalmente. Seus dados são criptografados e nossa IA analisa o conteúdo sem armazenar informações pessoais identificáveis.',
    'faq.q2': 'Como a IA sabe o significado?',
    'faq.a2': 'Nossa IA foi treinada com base em milhares de textos de psicologia analítica e psicanálise (Freud, Jung), identificando arquétipos e padrões universais.',
    'faq.q3': 'É gratuito?',
    'faq.a3': 'O app é gratuito para baixar e interpretar sonhos básicos. Oferecemos uma assinatura Premium para análises profundas e diagnósticos ilimitados.',

    // Features (Renamed to "Pilares")
    'features.badge': 'Pilares',
    'features.title': 'Como guiamos você',
    'features.card1.title': 'Decodificação Simbólica',
    'features.card1.desc': 'A IA separa cada elemento do sonho e busca seu significado arquetípico.',
    'features.card2.title': 'Diário de Jornada',
    'features.card2.desc': 'Seus sonhos formam uma narrativa. Acompanhe sua evolução emocional ao longo das semanas.',
    'features.card3.title': 'Diagnóstico da Psique',
    'features.card3.desc': 'Relatórios periódicos sobre seus temas recorrentes (ansiedade, sombra, anima/animus).',

    // How it works (Simpler)
    'how.badge': 'Método',
    'how.title': 'O Caminho da Descoberta',
    'how.step1.title': 'Relate',
    'how.step1.desc': 'Áudio ou texto. Sem filtros.',
    'how.step2.title': 'Processe',
    'how.step2.desc': 'A IA cruza símbolos com seu contexto.',
    'how.step3.title': 'Integre',
    'how.step3.desc': 'Traga o insight para sua vida desperta.',
  },
  en: {
    // Navigation
    'nav.problem': 'The Problem',
    'nav.methodology': 'Methodology',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',

    // Hero - Absolute Differentiation
    'hero.badge': 'Deep Oneiric Intelligence',
    'hero.title.prefix': 'It\'s not just a dream.',
    'hero.title.highlight': 'It\'s your truth',
    'hero.title.suffix': 'trying to emerge.',
    'hero.subtitle': 'Forget generic dictionaries. DreamTells uses analytical psychology to decode the unique and non-transferable message your unconscious created for YOU.',
    'hero.btn.download': 'Decode My Dream',
    'hero.btn.how': 'Understand Methodology',

    // Problem Section - Market Attack
    'problem.title': 'Why do most interpretations fail?',
    'problem.generic.title': 'Other Apps & Google',
    'problem.generic.desc': 'Give fixed and shallow meanings. "Dreaming of a snake is betrayal". They ignore your context and emotions.',
    'problem.dreamtells.title': 'The DreamTells Approach',
    'problem.dreamtells.desc': 'Analyzes the symbol in YOUR context. "How did you feel? Where were you?" Connects the dream to your current life moment.',

    // Demo Section - Concretude
    'demo.title': 'See the difference in practice',
    'demo.input.label': 'Real Dream:',
    'demo.input.text': '"I dreamt I was falling from a tall building, but instead of panic, I felt absolute peace and saw beautiful colors."',
    'demo.analysis.label': 'DreamTells Analysis:',
    'demo.analysis.text': 'Falling usually symbolizes loss of control, but your feeling of PEACE inverts the meaning. This suggests you are ready to "let go" of a heavy responsibility or a life structure (the building) that no longer serves you. The unconscious isn\'t warning of danger, but inviting surrender and renewal.',

    // Authority Section - Intellectual
    'authority.title': 'Science allied with Intuition',
    'authority.subtitle': 'Grounded in Analytical Psychology',
    'authority.card1.title': 'Universal Archetypes',
    'authority.card1.desc': 'We identify mythic patterns described by Carl Jung that have appeared in human narrative for millennia.',
    'authority.card2.title': 'Sentiment Analysis',
    'authority.card2.desc': 'AI detects subtle emotional nuances that completely alter a symbol\'s meaning.',
    'authority.card3.title': 'Personal Context',
    'authority.card3.desc': 'Your dream is not an isolated event. It is a chapter of your current psychic story.',

    // Impact Section - Emotional Pause
    'impact.text': '"Until you make the unconscious conscious, it will direct your life and you will call it fate."',
    'impact.author': 'Carl G. Jung',

    // Testimonials - Transformational
    'testimonials.badge': 'Real Stories',
    'testimonials.title': 'From Confusion to Clarity',
    'test1.text': 'I had recurring nightmares about being chased. DreamTells showed me I wasn\'t running from a monster, but from a career decision I needed to make. I made the decision and the nightmares stopped.',
    'test1.author': 'Lucas F.',
    'test1.role': 'Architect',
    'test2.text': 'I always thought dreams were nonsense. Until the app connected a strange dream with a grief I hadn\'t processed. It was the start of my healing.',
    'test2.author': 'Julia M.',
    'test2.role': 'Lawyer',
    'test3.text': 'It\'s not a horoscope. It\'s a terrifyingly accurate self-knowledge tool. I use it every morning as a "briefing" from my brain.',
    'test3.author': 'Robert S.',
    'test3.role': 'Entrepreneur',

    // Final CTA - Emotional
    'cta.title': 'Your mind speaks to you every night.',
    'cta.subtitle': 'Will you continue to ignore it or will you finally listen to your own truth?',
    'cta.btn': 'Start Journey Now',

    // Footer & FAQ
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.contact': 'Contact',
    'faq.badge': 'Doubts',
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Is it safe to share my dreams?',
    'faq.a1': 'Yes, absolutely. Your data is encrypted and our AI analyzes content without storing personally identifiable information.',
    'faq.q2': 'How does the AI know the meaning?',
    'faq.a2': 'Our AI was trained on thousands of analytical psychology and psychoanalysis texts (Freud, Jung), identifying archetypes and universal patterns.',
    'faq.q3': 'Is it free?',
    'faq.a3': 'The app is free to download and interpret basic dreams. We offer a Premium subscription for deep analysis and unlimited diagnostics.',

    // Features
    'features.badge': 'Pillars',
    'features.title': 'How we guide you',
    'features.card1.title': 'Symbolic Decoding',
    'features.card1.desc': 'AI separates each element of the dream and searches for its archetypal meaning.',
    'features.card2.title': 'Journey Journal',
    'features.card2.desc': 'Your dreams form a narrative. Track your emotional evolution over the weeks.',
    'features.card3.title': 'Psyche Diagnosis',
    'features.card3.desc': 'Periodic reports on your recurring themes (anxiety, shadow, anima/animus).',

    // How it works
    'how.badge': 'Method',
    'how.title': 'The Path of Discovery',
    'how.step1.title': 'Report',
    'how.step1.desc': 'Audio or text. No filters.',
    'how.step2.title': 'Process',
    'how.step2.desc': 'AI crosses symbols with your context.',
    'how.step3.title': 'Integrate',
    'how.step3.desc': 'Bring the insight into your waking life.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Detect language based on domain or browser preference
    const hostname = window.location.hostname;

    if (hostname.includes('dreamtells.com.br')) {
      setLanguage('pt');
    } else if (hostname.includes('dreamtells.com')) {
      // Default to EN for .com, but could check browser language too
      // For now, let's respect the user's browser if it's not strictly .com.br
      // But purely based on domain separation: .com -> EN, .com.br -> PT
      setLanguage('en');
    } else {
      // Localhost or other: check browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('pt')) {
        setLanguage('pt');
      } else {
        setLanguage('en');
      }
    }
  }, []);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
