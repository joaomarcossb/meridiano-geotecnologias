import Form from './Form';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const Card = ({ icon, title, info }) => {
  return (
    <div className='flex flex-row gap-2 p-5 hover:bg-emerald-100 cursor-pointer rounded-xl'>
      <div className='flex bg-gradient-to-bl from-white to-amber-100 rounded-xl place-items-center'>
        <div className='h-12 w-12 p-2 text-amber-400'>{icon}</div>
      </div>
      <div className='flex flex-col'>
        <h4 className='font[inter] font-bold text-emerald-900'>{title}</h4>
        <span className='font-[inter] text-emerald-700 text-sm'>{info}</span>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section
      id='contact'
      className='flex flex-col items-center w-full lg:gap-8 pb-20 px-5 '
    >
      <div className='w-full mb-15 max-w-4xl'>
        <h2 className='text-3xl font-bold text-center text-emerald-900 mb-8'>
          Entre em Contato
        </h2>
        <p className='font-[poppins] px-5 lg:px-30 text-center lg:text-lg text-emerald-600'>
          Estamos prontos para transformar suas ideias em realidade. Entre em
          contato e descubra como podemos ajudar.
        </p>
      </div>

      <div className='flex flex-col justify-center gap-10 lg:flex-row w-full max-w-6xl '>
        <div className='w-full'>
          <div className='mb-5'>
            <h3 className='font-[poppins] font-bold text-xl mb-5 text-emerald-900'>
              Informações de Contato
            </h3>
            <p className='font-[poppins] text-sm text-emerald-700'>
              Preencha o formulário ou entre em contato através de um dos canais
              abaixo.
            </p>
          </div>
          <div className='mb-5'>
            <Card
              icon={<EnvelopeIcon />}
              title={'Email'}
              info={'contato@meridianogeotecnologias.com.br'}
            />
            <Card
              icon={<PhoneIcon />}
              title={'Telefone'}
              info={'(71) 99976-8309'}
            />
            <Card
              icon={<MapPinIcon />}
              title={'Localização'}
              info={'Salvador, BA - Brasil'}
            />
          </div>
          <div className='font-[poppins] text-lg text-white bg-gradient-to-br from-emerald-800 to-emerald-600 rounded-xl px-8 py-6'>
            <h3 className='font-bold mb-3'>Horário de Atendimento</h3>
            <p className='text-sm tracking-wide'>Segunda a Sexta: 8h às 18h</p>
            <span className='text-xs tracking-wider'>
              Respondemos em até 24 horas úteis.
            </span>
          </div>
        </div>
        <div className='w-full'>
          <Form />
        </div>
      </div>
    </section>
  );
};
export default Contact;
