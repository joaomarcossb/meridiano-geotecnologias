import { useState } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
      <div className='flex w-full font-[inter] lg:flex-col lg:items-center bg-emerald-700'>
        <div className='lg:max-w-6xl w-full text-white py-4 px-4 lg:px-0 flex items-center justify-between relative'>
          {/* Logo */}
          <Logo />
          <div className='hidden lg:block'>
            <ul className='flex gap-8'>
              {links.map((link) => (
                <li
                  key={link.href}
                  className='border-b-2 border-transparent hover:border-amber-200 transition-all duration-200 hover:text-amber-200 cursor-pointer'
                >
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Botão Desktop */}
          <button className='cursor-pointer active:scale-95 hidden lg:block bg-amber-200 hover:opacity-95 text-emerald-950 font-semibold px-4 py-2 rounded-md transition'>
            <a href='#contact'> Fale Conosco </a>
          </button>

          {/* Ícone Hambúrguer animado (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className='lg:hidden flex flex-col justify-between w-8 h-6 focus:outline-none group cursor-pointer'
          >
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 translate-y-[10px] bg-amber-200' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 -translate-y-[10px] bg-amber-200' : ''
              }`}
            ></span>
          </button>

          {/* Menu Mobile */}
          {menuOpen && (
            <div className='absolute top-full left-0 w-full bg-emerald-800 flex flex-col items-center py-6 gap-4 lg:hidden z-50 transition-all duration-300'>
              <ul className='flex flex-col items-center gap-4 text-lg'>
                {links.map((link) => (
                  <li
                    key={link.href}
                    className='hover:text-amber-200 cursor-pointer'
                  >
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
              <button className='cursor-pointer active:scale-95 mt-4 bg-amber-200 hover:opacity-95 text-emerald-950 font-semibold px-4 py-2 rounded-md transition'>
                <a href='#contact'>Fale Conosco</a>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
