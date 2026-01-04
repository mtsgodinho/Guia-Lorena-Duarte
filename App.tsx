
import React, { useState, useEffect } from 'react';
import { FunnelStep, QuizAnswer } from './types';
import { QUIZ_QUESTIONS, COLORS, KIRVANO_CHECKOUT_URL } from './constants';
import { generatePersonalizedAnalysis } from './geminiService';
import CountdownTimer from './components/CountdownTimer';
import Testimonials from './components/Testimonials';

const LORENA_PHOTO = "https://i.imgur.com/ulhwLKA.png";

const App: React.FC = () => {
  const [step, setStep] = useState<FunnelStep>(FunnelStep.LANDING);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [analysisText, setAnalysisText] = useState<string | null>(null);

  const startQuiz = () => {
    setStep(FunnelStep.QUIZ);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToCheckout = () => {
    window.location.href = KIRVANO_CHECKOUT_URL;
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, { questionId: QUIZ_QUESTIONS[currentQuestionIndex].id, answer }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      processResults(newAnswers);
    }
  };

  const processResults = async (finalAnswers: QuizAnswer[]) => {
    setStep(FunnelStep.ANALYZING);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const analysis = await generatePersonalizedAnalysis(finalAnswers);
    setAnalysisText(analysis);
    setTimeout(() => {
      setStep(FunnelStep.RESULTS);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 3000);
  };

  const renderLanding = () => (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#E5E1DD]">
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-purple-200/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-rose-gold/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        <div className="lg:col-span-7 z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/95 border border-rose-gold/20 px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Inscrições abertas: Método 5 Pilares</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-gray-900">
            Domine a arte dos <span className="italic text-purple-deep">cortes femininos</span> e multiplique seu faturamento.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-xl leading-relaxed">
            Descubra em menos de 1 minuto o motivo técnico que está travando sua evolução e recupere a segurança com a técnica de Lorena Duarte.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <button 
              onClick={startQuiz}
              className="group relative w-full sm:w-auto bg-purple-deep text-white font-bold py-6 px-14 rounded-full text-lg btn-glow overflow-hidden transition-all hover:scale-[1.02] shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-3 justify-center">
                Iniciar Diagnóstico Gratuito
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
            <p className="text-xs text-gray-400 font-medium max-w-[150px]">Leva menos de 45 segundos para completar.</p>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative z-10 animate-float">
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[4rem] overflow-hidden border-[12px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-white">
              <img 
                src={LORENA_PHOTO} 
                alt="Lorena Duarte" 
                className="w-full h-full object-cover transition duration-700"
              />
            </div>
            <div className="glass absolute bottom-12 -left-8 md:-left-12 p-6 rounded-3xl shadow-xl max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 bg-rose-gold rounded-lg text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-deep">Expert Mentor</span>
              </div>
              <p className="text-sm font-bold text-gray-900">Lorena Duarte</p>
              <p className="text-[10px] text-gray-500 leading-relaxed">+10 anos transformando profissionais da beleza.</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/30 rounded-full -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/20 rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  );

  const renderQuiz = () => {
    const q = QUIZ_QUESTIONS[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

    return (
      <div className="max-w-4xl mx-auto px-6 py-16 min-h-[75vh] flex flex-col justify-center bg-[#E5E1DD]">
        <div className="mb-12 max-w-2xl mx-auto w-full">
          <div className="flex justify-between items-end mb-4">
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-purple-deep/60 mb-1">Diagnóstico em curso</span>
              <p className="text-xs font-bold text-gray-500">Pergunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}</p>
            </div>
            <p className="text-xl font-serif italic text-purple-deep">{Math.round(progress)}%</p>
          </div>
          <div className="h-2 w-full bg-white/50 rounded-full overflow-hidden border border-white shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-purple-deep to-rose-gold transition-all duration-1000 ease-in-out" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="bg-white p-10 md:p-14 rounded-[2rem] border-l-[12px] border-purple-deep shadow-2xl mb-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -z-10 opacity-40"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-[1.2] max-w-3xl mx-auto relative z-10">
              {q.question}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 max-w-2xl mx-auto">
            {q.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="group relative w-full bg-white text-left p-6 md:p-8 rounded-[1.2rem] transition-all duration-300 border-2 border-transparent hover:border-purple-deep card-shadow hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] flex items-center gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-rose-gold font-bold text-sm bg-[#F9F7F5] group-hover:bg-purple-deep group-hover:text-white group-hover:border-purple-deep transition-all duration-300">
                  {String.fromCharCode(65 + idx)}
                </div>
                
                <div className="flex-grow">
                  <span className="text-lg font-bold text-gray-700 group-hover:text-gray-900 transition-colors leading-tight">
                    {option}
                  </span>
                </div>

                <div className="flex-shrink-0 text-gray-300 group-hover:text-purple-deep transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7"></path>
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderAnalyzing = () => (
    <div className="max-w-xl mx-auto px-6 py-32 text-center bg-[#E5E1DD]">
      <div className="relative mb-12 inline-block">
        <div className="w-24 h-24 border-[3px] border-purple-100 rounded-full animate-[spin_3s_linear_infinite]"></div>
        <div className="absolute inset-0 w-24 h-24 border-t-[3px] border-purple-deep rounded-full animate-[spin_1s_linear_infinite]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
           <svg className="w-8 h-8 text-purple-deep animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Processando Diagnóstico...</h2>
      <p className="text-gray-500 font-medium tracking-wide uppercase text-[10px] animate-pulse">Cruzando dados técnicos com o Método 5 Pilares</p>
    </div>
  );

  const renderResults = () => (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-[#E5E1DD]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          Sua jornada para o <span className="text-purple-deep italic">faturamento de alta performance</span> começa agora.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left mb-20">
           <div className="md:col-span-4 rounded-[3rem] overflow-hidden shadow-2xl relative bg-white border-8 border-white">
              <img src={LORENA_PHOTO} alt="Lorena Duarte" className="w-full aspect-[4/5] object-cover rounded-[2.5rem]" />
              <div className="absolute bottom-4 inset-x-4 glass p-6 text-center rounded-2xl">
                 <p className="font-bold text-purple-deep">Lorena Duarte</p>
                 <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Mentora de Cabeleireiras</p>
              </div>
           </div>
           
           <div className="md:col-span-8 bg-white/95 p-10 md:p-14 rounded-[3rem] shadow-xl border border-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-rose-gold"></div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-rose-gold">Análise Estratégica</h4>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-[1.8] italic font-serif">
              {analysisText || "Finalizando sua análise estratégica baseada no Método 5 Pilares..."}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <div className="text-center mb-10">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-purple-deep mb-4">Apresentação Exclusiva</p>
          <h3 className="text-2xl font-bold text-gray-900">Assista abaixo o segredo dos 5 Pilares</h3>
        </div>
        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-black group cursor-pointer border-8 border-white">
           <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition duration-700 group-hover:scale-110"
              alt="Ambiente de Salão Profissional"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-rose-gold text-white rounded-full flex items-center justify-center shadow-2xl transition group-hover:scale-110 group-active:scale-95">
                <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-12">
        <CountdownTimer />
        
        <div className="bg-[#120621] p-12 md:p-20 rounded-[4rem] text-white shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(228,183,160,0.15),transparent)]"></div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">Desbloqueie o Próximo Nível do seu Salão</h3>
          <p className="text-gray-400 mb-12 relative z-10 leading-relaxed max-w-lg mx-auto">Ao clicar no botão abaixo, você será redirecionada para garantir sua vaga no treinamento completo por apenas R$ 29,90 na Kirvano.</p>
          
          <button 
            onClick={goToCheckout}
            className="relative z-10 w-full md:w-auto bg-rose-gold hover:bg-white hover:text-purple-deep transition-all duration-300 text-white font-black py-7 px-20 rounded-full text-xl uppercase tracking-widest shadow-2xl active:scale-95 animate-pulse"
          >
            Quero Aprender a Técnica Agora
          </button>
        </div>
      </div>

      <div className="mt-40 text-center">
        <p className="text-xs font-black uppercase tracking-[0.5em] text-rose-gold mb-6">Transformações Reais</p>
        <h3 className="text-4xl font-bold text-gray-900 mb-20">Alunas que destravaram com o método.</h3>
        <Testimonials />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#E5E1DD]">
      <header className="py-6 px-6 md:px-12 flex justify-between items-center bg-[#E5E1DD]/90 backdrop-blur-md sticky top-0 z-[100] border-b border-white/50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-purple-deep rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">L</div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900 leading-none tracking-tight">Lorena Duarte</span>
            <span className="text-[9px] text-rose-gold font-black uppercase tracking-[0.2em] mt-1">High Performance</span>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={() => step === FunnelStep.RESULTS ? goToCheckout() : startQuiz()}
            className="bg-purple-deep text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg hover:bg-rose-gold transition-colors duration-500 active:scale-95"
          >
            {step === FunnelStep.RESULTS ? 'Garantir Acesso' : 'Começar Agora'}
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {step === FunnelStep.LANDING && renderLanding()}
        {step === FunnelStep.QUIZ && renderQuiz()}
        {step === FunnelStep.ANALYZING && renderAnalyzing()}
        {step === FunnelStep.RESULTS && renderResults()}
      </main>

      <footer className="bg-white border-t border-gray-200 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-purple-deep font-bold text-2xl mb-8 font-serif italic">Lorena Duarte</p>
          <p className="text-[10px] text-gray-400 font-bold tracking-widest">© 2024 LORENA DUARTE TREINAMENTOS. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
