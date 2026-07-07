import { Lock, Check, Play } from "lucide-react";

export default function App() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .card-enter, .entry-fade { opacity: 1; }
        
        @media (prefers-reduced-motion: no-preference) {
          .rupture-title { position: relative; display: inline-block; }
          .rupture-title-text { color: transparent; }
          .rupture-title::before, .rupture-title::after {
            content: attr(data-text); position: absolute;
            top: 0; left: 0; width: 100%; height: 100%; color: white;
          }
          .rupture-title::before {
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 55%);
            animation: crack-top 0.4s 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          }
          .rupture-title::after {
            clip-path: polygon(0 55%, 100% 45%, 100% 100%, 0 100%);
            animation: crack-bottom 0.4s 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          }
          .rupture-crack-line {
            position: absolute; top: 50%; left: -5%; width: 110%; height: 1px;
            background-color: #E8B23A; transform: rotate(-5deg); opacity: 0;
            animation: flash-crack 0.4s 0.8s both; z-index: 10; pointer-events: none;
          }
          @keyframes crack-top { to { transform: translate(-1.5px, -1px); } }
          @keyframes crack-bottom { to { transform: translate(1.5px, 1px); } }
          @keyframes flash-crack {
            0% { opacity: 0; transform: rotate(-5deg) scaleX(0); }
            50% { opacity: 1; transform: rotate(-5deg) scaleX(1.1); }
            100% { opacity: 0.6; transform: rotate(-5deg) scaleX(1); }
          }
          
          .card-enter { animation: card-appear 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
          .card-enter-1 { animation-delay: 0.1s; }
          .card-enter-2 { animation-delay: 0.22s; }
          .card-enter-3 { animation-delay: 0.34s; }
          @keyframes card-appear {
            0% { opacity: 0; transform: translateY(15px) rotate(0.4deg); }
            100% { opacity: 1; transform: translateY(0) rotate(0); }
          }
          
          .card-pulse { animation: pulse-border 3s ease-in-out infinite alternate; }
          @keyframes pulse-border {
            0% { border-color: rgba(232, 178, 58, 0.2); box-shadow: 0 0 10px rgba(224, 181, 101, 0.05); }
            100% { border-color: rgba(224, 181, 101, 0.6); box-shadow: 0 0 25px rgba(224, 181, 101, 0.2); }
          }
          
          .phone-ring {
            display: inline-block; animation: ring-vibrate 4s infinite; transform-origin: center;
          }
          @keyframes ring-vibrate {
            0%, 90% { transform: rotate(0); }
            92% { transform: rotate(10deg); }
            94% { transform: rotate(-10deg); }
            96% { transform: rotate(10deg); }
            98% { transform: rotate(-10deg); }
            100% { transform: rotate(0); }
          }
          
          .card-interactive { position: relative; transition: transform 0.1s; }
          .card-interactive::after {
            content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 30;
            background: linear-gradient(to bottom right, transparent 49.5%, rgba(224,181,101,0) 49.5%, rgba(224,181,101,0) 50.5%, transparent 50.5%);
            transition: all 0s;
          }
          .card-interactive:active::after {
            background: linear-gradient(to bottom right, transparent 49.5%, rgba(224,181,101,0.8) 49.5%, rgba(224,181,101,0.8) 50.5%, transparent 50.5%);
          }
          .card-interactive:active { transform: translate(1px, -1px) skewX(0.5deg); }
          
          .profile-ring {
            position: absolute; top: -3px; left: -3px; right: -3px; bottom: -3px;
            border-radius: 50%; padding: 1.5px;
            background: conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(224,181,101,0.8) 95%, transparent 100%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor; mask-composite: exclude;
            animation: spin-ring 5s linear infinite; pointer-events: none;
          }
          @keyframes spin-ring { to { transform: rotate(360deg); } }
          
          .entry-fade { animation: fade-in 0.8s ease both; }
          @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        }
        
        .bg-noise {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          pointer-events: none; z-index: 50; opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        
        .bg-dots {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none; z-index: 0; opacity: 0.04;
          background-image: radial-gradient(#fff 1px, transparent 1px);
          background-size: 20px 20px; background-position: center;
        }
        
        .zigzag-crack {
          position: absolute; top: 0; left: 50%; width: 1px; height: 25vh; min-height: 150px;
          background: linear-gradient(185deg, transparent 0%, rgba(224,181,101,0.25) 50%, transparent 100%);
          z-index: 0; pointer-events: none;
        }
        
        .corner-crack {
          position: absolute; top: -10px; right: 20px; width: 1px; height: 40px;
          background: linear-gradient(to bottom, transparent, rgba(224,181,101,0.6));
          transform: rotate(35deg); transform-origin: top; pointer-events: none; z-index: 30;
        }
      `}} />

      <div className="bg-noise"></div>
      
      <div className="min-h-screen bg-[#0E0E0F] font-sans flex justify-center py-12 px-4 sm:px-6 selection:bg-[#E0B565] selection:text-black relative overflow-hidden">
        <div className="bg-dots"></div>
        <div className="zigzag-crack"></div>

        <div className="w-full max-w-[440px] flex flex-col gap-6 relative z-10">
          
          {/* PROFILE SECTION */}
          <div className="flex flex-col items-center text-center entry-fade">
            <div className="relative w-24 h-24 mb-4">
              <div className="profile-ring"></div>
              <img 
                src="https://i.postimg.cc/Hkfm67SK/Logo-A-Ruptura-Vitalicio.png" 
                alt="A Ruptura" 
                className="w-full h-full object-cover rounded-full bg-[#1A1A1A] relative z-10"
              />
              <div className="absolute bottom-1 right-2 w-3.5 h-3.5 bg-[#22C55E] border-[2.5px] border-[#0E0E0F] rounded-full z-20"></div>
            </div>

            <h1 className="rupture-title text-[22px] font-bold tracking-tight mb-1" data-text="A Ruptura">
              <span className="rupture-title-text">A Ruptura</span>
              <div className="rupture-crack-line"></div>
            </h1>
            <a href="https://instagram.com/hb.magalhaes" className="text-[#E0B565] text-xs font-medium mb-5 hover:underline relative z-10">@hb.magalhaes</a>

            <div className="text-[#A3A3A3] text-[13.5px] leading-relaxed flex flex-col gap-3 px-1 text-center font-light">
              <p className="text-[#F2F2F0] font-medium text-[15px] leading-snug">
                "Você não precisa de mais informação.<br/>Precisa de uma ruptura."
              </p>
            </div>
          </div>

          {/* CARDS LIST */}
          <div className="flex flex-col gap-5 mt-4">
            
            {/* CARD 1 - AULA GRATUITA (Gold Glow) */}
            <a href="https://www.aruptura.site/" target="_blank" rel="noopener noreferrer" className="card-interactive card-enter card-enter-1 card-pulse group flex flex-col rounded-[20px] overflow-hidden bg-[#151515] border border-[#E0B565]/30 transition-shadow">
              <div className="corner-crack"></div>
              {/* Top Half Art */}
              <div className="h-[140px] relative flex flex-col items-center justify-center bg-[#0A0A0B] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#E8B23A_1px,transparent_1px)] opacity-[0.03] bg-[size:12px_12px]"></div>
                
                <div className="relative z-10 flex flex-col items-center mt-2">
                  <div className="relative border-[1.5px] border-white/20 rounded-xl w-[56px] h-[95px] flex flex-col items-center pt-4 shadow-[0_0_15px_rgba(232,178,58,0.1)] bg-[#0E0E0F]">
                     <div className="w-[16px] h-[2.5px] bg-white/20 rounded-full absolute top-2"></div>
                     <div className="text-[#E8B23A] text-[5.5px] font-medium tracking-widest mt-1 mb-2 font-mono phone-ring text-center leading-tight">
                       CHAMADA<br/>RECEBIDA...
                     </div>
                     <div className="w-5 h-5 rounded-full bg-[#E8B23A]/20 flex items-center justify-center mt-1">
                       <div className="w-2.5 h-2.5 rounded-full bg-[#E8B23A] animate-pulse"></div>
                     </div>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                     <div className="absolute top-[45%] left-1/2 w-[70px] h-[110px] border border-[#E8B23A]/10 rounded-[18px] -translate-x-1/2 -translate-y-1/2 animate-[ping_3s_ease-in-out_infinite]"></div>
                     <div className="absolute top-[45%] left-1/2 w-[90px] h-[130px] border border-[#E8B23A]/5 rounded-[22px] -translate-x-1/2 -translate-y-1/2 animate-[ping_3s_ease-in-out_infinite_0.5s]"></div>
                     <div className="absolute top-[45%] left-1/2 w-[110px] h-[150px] border border-[#E8B23A]/5 rounded-[26px] -translate-x-1/2 -translate-y-1/2 animate-[ping_3s_ease-in-out_infinite_1s]"></div>
                  </div>
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 border border-[#E8B23A]/30 bg-[#E8B23A]/10 text-[#E8B23A] text-[8px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest backdrop-blur-md">
                    COMEÇA AQUI — GRÁTIS
                </div>
              </div>

              {/* Bottom Half */}
              <div className="flex items-center justify-between p-4 bg-[#151515] relative z-20">
                <div className="flex flex-col max-w-[65%] pr-2">
                    <h3 className="text-white text-[14px] font-semibold tracking-tight truncate group-[&:not(:active)]:hover:whitespace-normal transition-all"><span className="phone-ring">📞</span> Comece aqui: Atenda a ligação do seu futuro</h3>
                    <p className="text-gray-400 text-[11px] mt-0.5 truncate group-[&:not(:active)]:hover:whitespace-normal">Uma experiência de 3 fases. Não é aula de produtividade — é o caminho de volta pra você mesmo.</p>
                </div>
                <button className="bg-[#E0B565] text-black text-[12px] font-bold px-4 py-2 rounded-full whitespace-nowrap group-[&:not(:active)]:hover:bg-[#d4a856] transition-colors pointer-events-none">
                    Atender
                </button>
              </div>
            </a>

            {/* CARD 2 - MENTORIA / PRODUTO */}
            <a href="https://oficial.aruptura.site/" target="_blank" rel="noopener noreferrer" className="card-interactive card-enter card-enter-2 group flex flex-col rounded-[20px] overflow-hidden bg-[#151515] border border-white/[0.08] transition-shadow hover:border-white/15">
              {/* Top half Art */}
              <div className="h-[140px] relative flex flex-col justify-center items-center bg-[#0A0A0B] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#E8B23A_1px,transparent_1px)] opacity-[0.03] bg-[size:12px_12px]"></div>
                
                <div className="relative z-10 flex flex-col items-center justify-center scale-110 mt-2">
                  <div className="relative inline-block tracking-[0.2em] text-[#F5F2EC] text-[20px] font-medium opacity-90 drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>
                    <span className="relative block" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 55%)', transform: 'translate(-1.5px, -1px)' }}>A RUPTURA</span>
                    <span className="absolute top-0 left-0 block" style={{ clipPath: 'polygon(0 55%, 100% 45%, 100% 100%, 0 100%)', transform: 'translate(1.5px, 1px)' }}>A RUPTURA</span>
                    <div className="absolute top-1/2 left-[-10%] w-[120%] h-[1px] bg-[#E8B23A] opacity-60 rotate-[-5deg] shadow-[0_0_8px_rgba(232,178,58,0.5)]"></div>
                  </div>
                </div>

                <div className="absolute top-3 left-3 border border-white/20 text-white text-[8px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm backdrop-blur-md bg-black/40">
                   PRA QUEM DECIDIU
                </div>
              </div>

              {/* Bottom half */}
              <div className="flex items-center justify-between p-4 bg-[#151515] relative z-20">
                <div className="flex flex-col max-w-[65%] pr-2">
                    <h4 className="text-white text-[14px] font-semibold tracking-tight">Já atendi. Quero conhecer A Ruptura</h4>
                    <p className="text-gray-400 text-[11px] mt-0.5 group-[&:not(:active)]:hover:whitespace-normal truncate">O método completo: Reconexão, Visão e Materialização. Condição de fundador por tempo limitado.</p>
                    <p className="text-gray-500 text-[10px] mt-1">Acesso imediato por 1 ano</p>
                </div>
                <button className="bg-[#22C55E] text-white text-[12px] font-bold px-4 py-2 rounded-full whitespace-nowrap group-[&:not(:active)]:hover:bg-[#1eb354] transition-colors pointer-events-none">
                    Romper agora
                </button>
              </div>
            </a>



          </div>

          <footer className="text-center text-[11px] text-gray-500/60 mt-8 mb-2 font-medium entry-fade" style={{ animationDelay: '0.4s' }}>
              © 2026 · A Ruptura
          </footer>
        </div>
      </div>
    </>
  );
}
