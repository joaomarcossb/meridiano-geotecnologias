import {
  BuildingOffice2Icon,
  MapIcon,
  HomeIcon,
  CpuChipIcon,
} from '@heroicons/react/16/solid';

// CARDS PERSONALIZÁVEIS
const Card = ({ icon, title, text }) => {
  return (
    <div className='w-full rounded-lg p-10 shadow-[0_0_25px_rgba(0,0,0,0.15)] bg-white border-transparent border-2 hover:border-amber-200'>
      <div className='w-12 h-12 rounded-lg bg-gradient-to-bl from-white to-amber-100 mb-4'>
        {icon}
      </div>
      <h3 className='text-xl font-[poppins] font-bold text-emerald-900 mb-4'>
        {title}
      </h3>
      <p className='text-sm text-left lg:text-left font-[poppins] text-emerald-700 leading-relaxed'>
        {text}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <section id='services' className='w-full flex flex-col items-center mb-30'>
      <div className='flex flex-col mb-15 max-w-5xl'>
        <div className='flex flex-col w-full'>
          {/* INÍCIO DA SEÇÃO #SOBRE */}
          <h2 className='font-[poppins] text-3xl text-center mb-8 font-bold text-emerald-900'>
            Nosso Serviços
          </h2>
          <p className='font-[poppins] px-10 lg:px-30 text-center lg:text-lg text-emerald-600'>
            Conheça nossas soluções especializadas em geotecnologia,
            desenvolvidas para atender às necessidades dos seus projetos com
            excelência.
          </p>
        </div>
      </div>
      {/* CARDS COM OS VALORES */}
      <div className='flex flex-col gap-6 lg:flex-row max-w-6xl px-4'>
        <Card
          title={'Infraestrutura'}
          icon={
            <BuildingOffice2Icon className='w-full h-full p-2 text-amber-300' />
          }
          text={
            'Planejamento e execução de projetos de infraestrutura com precisão técnica e metodologias avançadas para desenvolvimento urbano e rural.'
          }
        />
        <Card
          title={'Levantamento Topográfico'}
          icon={<MapIcon className='w-full h-full p-2 text-amber-300' />}
          text={
            'Mapeamento detalhado de terrenos e áreas com tecnologia de ponta, garantindo dados precisos para seus projetos e empreendimentos.'
          }
        />
        <Card
          title={'Regularização de Imóveis'}
          icon={<HomeIcon className='w-full h-full p-2 text-amber-300' />}
          text={
            'Serviços especializados em regularização fundiária de imóveis rurais e urbanos, assegurando conformidade legal e documental.'
          }
        />
        <Card
          title={'Mapeamento com Drone/VANT'}
          icon={<CpuChipIcon className='w-full h-full p-2 text-amber-300' />}
          text={
            'Tecnologia de ponta em mapeamento aéreo com drones para levantamentos rápidos, precisos e de alta resolução em grandes áreas.'
          }
        />
      </div>
      {/* Cahamada para ação */}
      <div className='w-full flex flex-col place-items-center mt-15'>
        <h3 className='font-[poppins] text-emerald-700'>
          Precisa de uma solução personalizada?
        </h3>
        <span className='border-b-1 border-transparent hover:border-amber-300 font-[inter] font-bold text-amber-300 tracking-wide'>
          <a href='#contact'>Entre em contato conosco</a>
        </span>
      </div>
    </section>
  );
};

export default Services;
