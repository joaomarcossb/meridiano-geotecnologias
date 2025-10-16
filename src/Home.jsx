import logo from './assets/logo.png';
import video from './assets/video-intro.mp4';
import arrow from './assets/arrow-right.svg';
import { useRef } from 'react';

const Award = ({ title, text }) => {
  return (
    <div className='flex flex-col text-center text-white lg:col-span-4 font-[poppins]'>
      <span className='text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-amber-100 to-amber-300 bg-clip-text'>
        {title}
      </span>
      <span className='font-[inter] px-5 text-xs lg:text-base tracking-wider'>
        {text}
      </span>
    </div>
  );
};

const Home = () => {
  /* Função de Pausar o Vídeo com useRef */
  const videoRef = useRef(null);
  const handleTogglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    return vid.paused ? vid.play() : vid.pause();
  };
  return (
    <section
      id='home'
      className='w-full h-full flex flex-col items-center lg:pb-20 pt-30 lg:pt-32 pb-20 bg-emerald-700'
    >
      {/* Container Geral */}
      <div className='w-full flex flex-col text-left max-w-6xl relative px-5 z-10 mb-10'>
        {/* Imagem de Fundo */}
        <div
          style={{ backgroundImage: `url(${logo})` }}
          className='absolute -z-10 grayscale opacity-5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full max-w-[46rem] bg-center bg-cover lg:bg-contain'
        ></div>
        {/* Título Principal */}
        <h1 className='text-3xl lg:text-4xl font-bold font-[poppins] tracking-tight leading-tight lg:leading-normal lg:tracking-normal lg:font-extrabold mb-6 lg:mb-8 '>
          <span className='text-white'>
            Topografia e Georreferenciamento com <br />
          </span>
          <span className='bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 text-transparent bg-clip-text'>
            Qualidade Garantida
          </span>
        </h1>
        {/* Video e Texto */}
        <div className='flex flex-col w-full max-w-6xl justify-center items-center md:grid lg:gap-6 lg:grid-cols-6 lg:mb-8 '>
          {/* Container do Video */}
          <div className='flex items-center justify-center max-w-3xl w-full h-auto md:col-span-4 mb-6 lg:mb-0'>
            <video
              ref={videoRef}
              src={video}
              className='w-full rounded-xl'
              autoPlay
              muted
              loop
              playsInline
              onClick={handleTogglePlay}
            ></video>
          </div>
          {/* Texto de Introdução */}
          <span className='text-white text-md text-left col-span-2 mb-8 tracking-wide lg:text-xl lg:tracking-normal lg:leading-loose'>
            Soluções precisas e inovadoras em regularização fundiária,
            mapeamento, topografia e infraestrutura. Fundada por três colegas da
            UFBA, unimos tecnologia, precisão e compromisso.
          </span>
        </div>
        {/* Botões de Ação */}
        <div className='w-full max-w-6xl flex flex-col lg:grid lg:grid-cols-12 gap-4 mb-8 lg:mb-10'>
          <button className='lg:col-span-4 cursor-pointer active:scale-95 bg-amber-200 hover:opacity-95 text-emerald-950 font-semibold w-full py-3 rounded-md'>
            <a href='#contact'>
              {' '}
              Entrar em Contato{' '}
              <img src={arrow} className='h-5 w-5 pb-0.5 inline'></img>{' '}
            </a>
          </button>
          <button className='lg:col-span-4 cursor-pointer active:scale-95 bg-white hover:opacity-95 text-emerald-950 font-semibold w-full py-3 rounded-md'>
            <a href='#services'> Nossos Serviços </a>
          </button>
        </div>
        <div className='flex flex-row max-w-6xl justify-center w-full lg:grid lg:grid-cols-18'>
          <Award title={'100 +'} text={'Projetos Concluídos'} />
          <Award title={'50 +'} text={'Clientes Satisfeitos'} />
          <Award title={'5 ★'} text={'Avaliação Média'} />
        </div>
      </div>
      {/* Área de Resultados */}
    </section>
  );
};

export default Home;
