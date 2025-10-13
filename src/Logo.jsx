import logo from './assets/logo.png';

const Logo = ({ style }) => {
  return (
    <div className='cursor-pointer'>
      {/* Container do Logo */}
      <div className='flex gap-1'>
        {/* Imagem do Logo */}
        <div className='w-15 p-1 grayscale-25'>
          <img src={logo} alt='logo' className='object-cover'></img>
        </div>
        {/* Textos do Logo */}
        <div className='flex flex-col justify-center font-bold'>
          <span className='text-xl text-white tracking-wide font-[poppins]'>
            Meridiano
          </span>
          <span className='font-[inter] bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 text-transparent bg-clip-text text-sm'>
            Geotecnologias
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
