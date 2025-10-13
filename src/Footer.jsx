import Logo from './Logo';
import { ArrowUpIcon } from '@heroicons/react/16/solid';

const Item = ({ ref, text }) => {
  return (
    <li className='text-white hover:text-amber-300 cursor-pointer'>
      <a href={ref}>{text}</a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center bg-emerald-700 px-5 pt-10 pb-10 lg:pt-15'>
      {/* Logo + Links + Serviços */}
      <div className='w-full max-w-6xl flex flex-col lg:flex-row justify-between'>
        {/* Logo */}
        <div className='max-w-xl flex flex-col'>
          <div className='origin-top-left scale-80 -ml-2 mb-2'>
            <Logo />
          </div>
          <p className='text-white max-w-md font-[inter] flex flex-col justify-center text-sm mb-6'>
            Transformando conhecimento em impacto real através de soluções
            precisas em geotecnologia.
          </p>
        </div>
        {/* Lista de Links Rápidos */}
        <div className='font-[poppins] flex flex-col gap-4 lg:gap-6 text-white mb-6'>
          <h3 className='font-bold'>Links Rápidos</h3>
          <ul className='flex flex-col gap-1 text-sm'>
            <Item ref={'#about'} text={'Sobre Nós'} />
            <Item ref={'#services'} text={'Serviços'} />
            <Item ref={'#testimonials'} text={'Depoimentos'} />
            <Item ref={'#contact'} text={'Contato'} />
          </ul>
        </div>
        {/* Lista de Serviços */}
        <div className='flex flex-col gap-4 lg:gap-6 text-white font-[poppins]'>
          <h3 className='font-bold'>Serviços</h3>
          <ul className='flex flex-col gap-1 text-sm'>
            <Item ref={''} text={'Infraestrutura'} />
            <Item ref={''} text={'Levantamento Topográfico'} />
            <Item ref={''} text={'Regularização de Imóveis'} />
            <Item ref={''} text={'Mapeamento com Drone'} />
          </ul>
        </div>
      </div>

      {/* Linha Divisória */}
      <div className='w-full max-w-6xl border-t border-white opacity-30 px-5 my-6'></div>

      {/* Copyright + Botão Voltar ao Topo */}
      <div className='w-full flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-6xl'>
        {/* Copyright */}
        <div className='mb-5'>
          <span className='w-full block text-white text-xs lg:text-sm font-[inter] text-center opacity-80'>
            © 2025 Meridiano Geotecnologias. Todos os direitos reservados.
          </span>
        </div>

        {/* Botão */}
        <div className=''>
          <a
            href='#home'
            className='w-full flex flex-row gap-2 text-center justify-center cursor-pointer opacity-80 hover:opacity-100'
          >
            <span className='text-sm lg:text-base text-white'>
              Voltar ao Topo
            </span>
            <span className='bg-emerald-600 rounded-full'>
              <ArrowUpIcon className='w-6 h-6 p-1 lg:w-7 lg:h-7 text-amber-300' />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
