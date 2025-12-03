import React, { useState, useEffect, useRef } from 'react';
import { MapPin, MessageCircle, Map, Flower, Cloud, Sun, Leaf, Gift, Shirt, Footprints, Sparkles, UserCheck } from 'lucide-react';
import fotoAniver from './assets/foto_aniver.jpg';

// --- SUA BORBOLETA PERSONALIZADA ---
const CustomButterfly = ({ className }) => (
  <svg 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512" 
    className={className}
    fill="currentColor" 
  >
    <g>
        <path d="M243.695,179.339c0.703,4.906,5.813,7.438,7.719,1.406c1.891-6.031-4.828-17.219-22.219-36.531
            c-14.828-16.484-35.625-39.391-23.844-51.578c14.609-10.078,8.469-27.75-4.172-29.469c-11.313-1.516-21.609,13.578-15.031,38.703
            C192.711,126.964,241.695,165.292,243.695,179.339z"/>
        <path d="M445.898,83.886c-74.469,0-160.703,89.859-174.516,111.078c-3.594-4.578-9.109-7.578-15.375-7.578
            c-6.281,0-11.797,3-15.391,7.578C226.805,173.73,140.57,83.886,66.102,83.886c-76.828,0-70.547,68.984-59.578,112.891
            c10.969,43.922,56.453,92.516,106.609,94.094c-56.438,25.078-61.141,89.375-43.891,119.156
            c16.359,28.25,103.266,92.016,167.156-50.296v29.141c0,10.813,8.781,19.593,19.609,19.593c10.813,0,19.594-8.781,19.594-19.593
            v-29.156c63.891,142.328,150.813,78.562,167.156,50.312c17.25-29.781,12.547-94.078-43.891-119.156
            c50.172-1.578,95.641-50.172,106.609-94.094C516.445,152.871,522.727,83.886,445.898,83.886z"/>
        <path d="M268.305,179.339c2-14.047,50.984-52.375,57.563-77.469c6.563-25.125-3.734-40.219-15.047-38.703
            c-12.641,1.719-18.766,19.391-4.172,29.469c11.781,12.188-9.016,35.094-23.844,51.578c-17.391,19.313-24.109,30.5-22.219,36.531
            C262.492,186.777,267.602,184.246,268.305,179.339z"/>
    </g>
  </svg>
);

// --- SUA FLOR PERSONALIZADA ---
const CustomFlower = ({ className, style }) => (
  <svg 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 511.844 511.844" 
    className={className} 
    style={style}
  >
    <g>
        <rect x="272.445" y="279.756" transform="matrix(-0.7837 -0.6211 0.6211 -0.7837 288.8991 796.3973)" fill="#8CC153" width="21.326" height="136.287"/>
        <polygon fill="#8CC153" points="171.417,387.898 190.817,379.026 247.503,502.972 228.118,511.844"/>
        <path fill="#8CC153" d="M238.771,287.881c0,5.889-4.78,10.669-10.653,10.669c-5.904,0-10.668-4.78-10.668-10.669s4.764-10.668,10.668-10.668C233.991,277.213,238.771,281.992,238.771,287.881z"/>
        <path fill="#8CC153" d="M260.108,330.556c0,5.889-4.779,10.653-10.667,10.653c-5.889,0-10.669-4.765-10.669-10.653s4.78-10.669,10.669-10.669C255.329,319.887,260.108,324.667,260.108,330.556z"/>
        <path fill="#8CC153" d="M238.771,373.199c0,5.889-4.78,10.668-10.653,10.668c-5.904,0-10.668-4.779-10.668-10.668s4.764-10.669,10.668-10.669C233.991,362.53,238.771,367.311,238.771,373.199z"/>
        <path fill="#8CC153" d="M260.108,415.858c0,5.889-4.779,10.653-10.667,10.653c-5.889,0-10.669-4.765-10.669-10.653s4.78-10.668,10.669-10.668C255.329,405.19,260.108,409.969,260.108,415.858z"/>
    </g>
    <rect x="228.122" y="245.912" fill="#A0D468" width="21.322" height="265.92"/>
    <path fill="#EC5564" d="M366.733,76.774c0,70.666-59.654,179.133-130.32,179.133S110.81,147.44,110.81,76.774S165.747,0,236.413,0C307.078,0,366.733,6.108,366.733,76.774z"/>
    <path fill="#D94452" d="M115.59,45.471c2.827,1.249,6.623,1.921,10.185,4.232c82.35,53.453,145.425-28.288,239.302,8.232C355.018,4.983,300.205,0,236.413,0C178.024,0,130.398,4.171,115.59,45.471z"/>
    <g>
        <path fill="#A0D468" d="M312.639,305.548c77.789,26.991,113.605-116.371,113.605-116.371C325.916,206.546,301.221,301.58,312.639,305.548z"/>
        <path fill="#A0D468" d="M267.137,371.168c37.879,60.092,112.779-19.713,112.779-19.713C277.229,292.411,259.826,359.578,267.137,371.168z"/>
        <path fill="#A0D468" d="M194.285,405.768c-93.003,8.2-108.686-142.551-108.686-142.551C195.284,285.538,207.953,404.549,194.285,405.768z"/>
        <path fill="#A0D468" d="M217.809,465.951c-51.141,49.298-95.502-40.643-95.502-40.643C224.51,393.631,227.681,456.424,217.809,465.951z"/>
    </g>
    <path fill="#D94452" d="M110.841,76.055h22.415V42.3h-16.417C112.997,51.453,110.904,62.559,110.841,76.055z"/>
    <path fill="#F9677C" d="M221.448,64.512C154.36,32.084,110.81,31.522,110.81,76.774c0,70.666,54.937,179.133,125.603,179.133c10.215,0,20.197-2.265,29.802-6.357C290.85,212.233,308.094,106.405,221.448,64.512z"/>
  </svg>
);

const FlowerIconSVG = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 35 C35 10, 10 35, 35 50 C10 65, 35 90, 50 65 C65 90, 90 65, 65 50 C90 35, 65 10, 50 35 Z" />
    <circle cx="50" cy="50" r="10" fill="#FFF" fillOpacity="0.8" />
  </svg>
);

// --- Estilos Globais e Animações ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Quicksand:wght@400;600;700&display=swap');

  @keyframes sway {
    0%, 100% { transform: rotate(-5deg) translateY(0); }
    50% { transform: rotate(5deg) translateY(-10px); }
  }

  @keyframes float-cloud {
    0% { transform: translateX(0px); }
    50% { transform: translateX(20px); }
    100% { transform: translateX(0px); }
  }

  @keyframes gentle-fly {
    0% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(10px, -15px) rotate(5deg); }
    50% { transform: translate(0, -5px) rotate(0deg); }
    75% { transform: translate(-10px, -15px) rotate(-5deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }

  .font-script { font-family: 'Great Vibes', cursive; }
  .font-body { font-family: 'Quicksand', sans-serif; }
  
  .animate-sway { animation: sway 5s ease-in-out infinite; }
  .animate-cloud { animation: float-cloud 8s ease-in-out infinite; }
  .animate-fly { animation: gentle-fly 6s ease-in-out infinite; }
  
  .bg-paper-texture {
    background-color: #FFF5F7;
    background-image: 
      radial-gradient(#E9D5FF 0.5px, transparent 0.5px), 
      radial-gradient(#FFC1CC 0.5px, #FFF5F7 0.5px);
    background-size: 24px 24px;
  }

  .reveal-section {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
  }
  .reveal-section.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// --- Componente: Countdown ---
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const eventDate = new Date();
    const currentMonth = eventDate.getMonth();
    let targetYear = eventDate.getFullYear();
    
    if (currentMonth > 0 || (currentMonth === 0 && eventDate.getDate() > 11)) {
        targetYear += 1;
    }
    const targetDate = new Date(`January 11, ${targetYear} 17:00:00`).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-3 text-[#8B5E3C] mt-2 font-body">
      {[
        { label: 'Dias', value: timeLeft.days },
        { label: 'Hrs', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center bg-white/60 px-3 py-2 rounded-xl border border-pink-100 min-w-[65px] shadow-sm">
          <span className="text-2xl font-bold text-[#d474ac]">
            {item.value.toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

// --- Componente: Wrapper de Animação ---
const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div ref={ref} className={`reveal-section ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

// --- Componente Principal ---
export default function App() {
  const [guestName, setGuestName] = useState('');
  const [isPersonalized, setIsPersonalized] = useState(false);

  // Efeito para checar se há um parâmetro "convidado" na URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlGuestName = params.get("convidado");

    if (urlGuestName && urlGuestName.trim() !== "") {
      const decodedName = decodeURIComponent(urlGuestName.replace(/\+/g, " ")).trim();
      setGuestName(decodedName);
      setIsPersonalized(true);
    }
  }, []);

  const handleEditName = () => {
      setIsPersonalized(false);
      setGuestName(''); // opcional: pode deixar o nome pré-preenchido se preferir
  };


  const handleRSVP = (e) => {
    e.preventDefault();
    const phoneNumber = "5581992327562";

    const lines = [
      "Olá!",
      `Estou passando para confirmar minha presença no 1º aninho da pequena Luísa.`,
      "",
      `*Convidado(s):* ${guestName}`,
      "",
      "Ansioso(a) para celebrar esse dia encantado com vocês!"
    ];

    const message = encodeURIComponent(lines.join("\n"));

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="font-body min-h-screen relative overflow-hidden bg-paper-texture text-[#6D4C41]">
      <style>{globalStyles}</style>

      {/* --- Elementos Flutuantes do Jardim --- */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-[5%] opacity-40 animate-cloud text-blue-100/80">
           <Cloud size={80} fill="currentColor" stroke="none" />
        </div>
        <div className="absolute top-32 right-[10%] opacity-30 animate-cloud text-pink-100/80" style={{ animationDelay: '3s' }}>
           <Cloud size={60} fill="currentColor" stroke="none" />
        </div>
        
        {/* SUAS FLORES E BORBOLETAS NO FUNDO */}
        <CustomButterfly className="absolute top-24 left-8 w-12 h-12 text-pink-300 animate-fly opacity-60" />
        <CustomButterfly className="absolute top-1/3 right-4 w-16 h-16 text-purple-300 animate-fly opacity-50" style={{ animationDelay: '2s' }} />
        
        <CustomFlower className="absolute bottom-1/3 -left-10 w-32 h-32 opacity-30 transform -rotate-12 blur-sm" />
        <CustomFlower className="absolute top-1/2 -right-12 w-40 h-40 opacity-20 transform rotate-45 blur-sm" />
      </div>

      <main className="max-w-md mx-auto min-h-screen bg-white/30 shadow-2xl relative border-x border-white/40 backdrop-blur-[3px]">
        
        {/* --- HEADER --- */}
        <section className="pt-16 pb-10 px-6 text-center relative z-10">
          <RevealOnScroll>
            <p className="text-[#8B5E3C] text-xs font-bold tracking-[0.2em] uppercase mb-8 bg-white/70 inline-block px-4 py-1.5 rounded-full shadow-sm">
              A flor mais bela do nosso jardim
            </p>

            <div className="relative w-60 h-60 mx-auto mb-8">
              <div className="absolute inset-0 -m-3 rounded-full border border-dashed border-green-300/60 animate-[spin_25s_linear_infinite]"></div>
              
              <div className="absolute -top-4 -right-2 z-20 animate-sway">
                 <CustomButterfly className="w-16 h-16 text-[#FB6F92] drop-shadow-md" />
              </div>
              
              <div className="absolute -bottom-6 -left-4 z-20 animate-sway" style={{ animationDelay: '1s' }}>
                <CustomFlower className="w-20 h-20 drop-shadow-sm" />
              </div>
              
              <div className="w-full h-full rounded-full border-[6px] border-white shadow-xl overflow-hidden relative z-10">
                <img 
                  src={fotoAniver}
                  alt="Aniversariante" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="font-script text-8xl text-[#d474ac] mb-1 drop-shadow-sm transform -rotate-2 leading-none">
              Luísa
            </h1>
            
            <div className="flex items-center justify-center gap-3 mt-2">
               <Leaf className="text-green-300 w-4 h-4 transform -rotate-45" fill="currentColor" />
               <p className="font-body text-xl text-[#8B5E3C] font-bold">Faz 1 aninho</p>
               <Leaf className="text-green-300 w-4 h-4 transform rotate-45" fill="currentColor" />
            </div>

            <p className="mt-6 text-gray-600 font-medium text-sm max-w-xs mx-auto leading-relaxed px-4">
              No coração de um Jardim Encantado, uma pequena florzinha completa seu primeiro ano de vida. 🌷✨
            </p>
          </RevealOnScroll>
        </section>

        {/* --- DATA E HORA --- */}
        <section className="px-4 relative z-10">
          <RevealOnScroll>
            <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-6 shadow-lg border border-pink-100 relative overflow-hidden">
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-pink-200 rounded-b-lg"></div>

               <div className="flex flex-col gap-6 mt-4">
                  <div className="flex justify-between items-center pb-2">
                     <div className="text-center w-1/2 border-r border-pink-100 pr-4">
                        <div className="flex justify-center text-yellow-400 mb-2"><Sun size={24} fill="currentColor" /></div>
                        <span className="block text-4xl font-black text-[#d474ac]">11</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Janeiro</span>
                     </div>
                     <div className="text-center w-1/2 pl-4">
                        <div className="flex justify-center text-purple-300 mb-2">
                           <CustomButterfly className="w-6 h-6" />
                        </div>
                        <span className="block text-4xl font-black text-[#d474ac]">17</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Horas</span>
                     </div>
                  </div>

                  <div className="text-center border-t border-dashed border-pink-100 pt-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Contagem Regressiva</p>
                    <Countdown />
                  </div>
               </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* --- LOCALIZAÇÃO --- */}
        <section className="py-10 px-6 text-center relative z-10">
          <RevealOnScroll>
             <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-full mb-4 text-green-600 shadow-sm animate-bounce">
                <MapPin size={24} fill="currentColor" className="text-white" />
             </div>
             
             <h2 className="font-script text-4xl text-[#d474ac] mb-1">Onde será?</h2>
             <p className="font-bold text-lg text-gray-700">Toy Kids</p>
             <p className="text-sm text-gray-500 mb-6">Paulista, Pernambuco</p>

             <a href="https://www.google.com/maps/search/?api=1&query=Toy+Kids+Paulista" target="_blank" 
                className="inline-flex items-center gap-2 bg-white border-2 border-green-200 text-green-700 font-bold py-3.5 px-8 rounded-full shadow-sm hover:bg-green-50 hover:-translate-y-1 transition-all text-sm group">
                <Map size={18} /> 
                <span className="group-hover:underline decoration-green-300 decoration-2 underline-offset-2">Ver no Mapa</span>
             </a>
          </RevealOnScroll>
        </section>

        {/* --- SUGESTÕES DE PRESENTES (ATUALIZADA) --- */}
        <section className="px-4 relative z-10 mb-8">
          <RevealOnScroll>
            <div className="text-center mb-6">
              <h2 className="font-script text-4xl text-[#d474ac] mb-2">Sugestões de Presente</h2>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Sua presença é nosso maior presente! Mas se quiser mimar a Luísa:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Card 1: Roupas */}
              <div className="bg-white/90 p-4 rounded-2xl shadow-sm border border-pink-50 flex flex-col items-center text-center">
                <div className="bg-pink-100 p-2 rounded-full mb-2 text-[#d474ac]">
                  <Shirt size={20} />
                </div>
                <h3 className="text-[#8B5E3C] font-bold text-sm mb-1">Roupas</h3>
                <p className="text-xs text-gray-500">TAM 3-4 anos</p>
              </div>

              {/* Card 2: Calçados */}
              <div className="bg-white/90 p-4 rounded-2xl shadow-sm border border-pink-50 flex flex-col items-center text-center">
                <div className="bg-purple-100 p-2 rounded-full mb-2 text-purple-500">
                  <Footprints size={20} />
                </div>
                <h3 className="text-[#8B5E3C] font-bold text-sm mb-1">Calçados</h3>
                <p className="text-xs text-gray-500">TAM 23/24</p>
              </div>

              {/* Card 3: Brinquedos */}
              <div className="bg-white/90 p-4 rounded-2xl shadow-sm border border-pink-50 flex flex-col items-center text-center">
                <div className="bg-yellow-100 p-2 rounded-full mb-2 text-yellow-600">
                  <Gift size={20} />
                </div>
                <h3 className="text-[#8B5E3C] font-bold text-sm mb-1">Brinquedos</h3>
                <p className="text-xs text-gray-500">Educativos</p>
              </div>

              {/* Card 4: Higiene */}
              <div className="bg-white/90 p-4 rounded-2xl shadow-sm border border-pink-50 flex flex-col items-center text-center">
                <div className="bg-blue-100 p-2 rounded-full mb-2 text-blue-500">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-[#8B5E3C] font-bold text-sm mb-1">Higiene</h3>
                <p className="text-xs text-gray-500 leading-tight">Lavanda baby, fralda XG, etc</p>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* --- CONFIRMAÇÃO (RSVP SIMPLIFICADO & PERSONALIZÁVEL) --- */}
        <section className="py-4 px-4 relative z-10 pb-32">
          <RevealOnScroll>
            <div className="bg-gradient-to-b from-white to-[#FFF0F5] rounded-[2rem] p-8 border border-white shadow-xl relative overflow-hidden">
              <div className="absolute -top-6 -right-6 opacity-10 transform rotate-12">
                 <CustomButterfly className="w-32 h-32 text-pink-600" />
              </div>

              <h2 className="font-script text-4xl text-center text-[#d474ac] mb-2 relative z-10">Confirmar Presença</h2>
              
              <p className="text-xs text-center text-gray-500 mb-6 relative z-10 leading-relaxed bg-white/50 p-3 rounded-xl border border-pink-50">
                Para melhor organização do aniversário, é necessário confirmar sua presença antecipadamente. 
                <span className="block mt-1 font-bold text-[#8B5E3C]">A lista de convidados será validada na entrada com base nas confirmações.</span>
              </p>
              
              <form onSubmit={handleRSVP} className="space-y-4 relative z-10">
                
                {/* Lógica Condicional: Se tiver link personalizado, mostra mensagem fixa. Senão, mostra input. */}
                {isPersonalized ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center animate-fade-in relative space-y-2">
                    {/* Link discreto para editar o nome */}
                    <button
                      type="button"
                      onClick={handleEditName}
                      className="absolute top-2 right-3 text-[10px] text-pink-500 underline underline-offset-2 hover:text-pink-600"
                    >
                      Não é você? Editar nome
                    </button>

                    <div className="flex justify-center mb-1 text-green-600 mt-2">
                      <UserCheck size={24} />
                    </div>

                    <p className="text-xs text-gray-600">Este convite foi enviado exclusivamente para:</p>
                    <p className="text-lg font-bold text-[#8B5E3C]">{guestName}</p>
                    <p className="text-[11px] text-gray-500">
                      Se estiver tudo certo com seu nome, basta confirmar sua presença no botão abaixo.
                    </p>
                  </div>
                ) : (
                  // Campo de nome normal
                  <div className="group">
                    <label className="block text-xs font-bold text-[#8B5E3C] uppercase mb-1 ml-2">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Digite seu nome"
                      required
                      className="w-full px-5 py-3.5 rounded-xl border border-pink-100 bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-300 text-gray-600 placeholder-gray-300 text-sm transition-shadow shadow-sm focus:shadow-md"
                    />
                  </div>
                )}


                <button type="submit" className="w-full bg-[#d474ac] hover:bg-[#bf669a] text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-200 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 text-sm mt-4">
                   <MessageCircle size={18} fill="currentColor" className="opacity-80" /> 
                   Confirmar
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </section>

        {/* --- RODAPÉ --- */}
        <footer className="absolute bottom-0 w-full h-40 pointer-events-none overflow-hidden">
           <div className="absolute bottom-0 w-full flex items-end justify-center opacity-100">
              <svg viewBox="0 0 1440 320" className="w-full h-auto text-[#D5F0C1] fill-current" preserveAspectRatio="none">
                 <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
           </div>
           
           <div className="absolute bottom-4 left-4 animate-sway">
              <CustomFlower className="w-16 h-16" />
           </div>
           
           <div className="absolute bottom-6 right-8 animate-sway" style={{ animationDelay: '1.5s' }}>
              <CustomFlower className="w-12 h-12 transform scale-x-[-1]" />
           </div>
           
           <div className="absolute bottom-8 left-1/3 animate-sway" style={{ animationDelay: '0.5s' }}>
              <CustomFlower className="w-10 h-10" />
           </div>

           <div className="absolute bottom-16 left-1/2 text-[#FB6F92] animate-bounce" style={{ animationDelay: '2s' }}>
              <CustomButterfly className="w-8 h-8" />
           </div>

           <div className="absolute bottom-2 w-full text-center z-50 pointer-events-auto">
              <p className="text-[10px] text-[#8B5E3C] font-bold opacity-60 tracking-widest font-body">
                Desenvolvido com amor por{" "}
                <a
                  href="https://www.linkedin.com/in/thiagosaraivads/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-[#d474ac] transition-colors"
                >
                  THS Solutions
                </a>
              </p>
           </div>
        </footer>

      </main>
    </div>
  );
}