import { RocketLaunchIcon } from '@heroicons/react/16/solid';
import { EyeIcon } from '@heroicons/react/16/solid';
import { StarIcon } from '@heroicons/react/16/solid';

// CARDS PERSONALIZÁVEIS
const Card = ({ icon, title, text }) => {
  return (
    <div className='w-full rounded-lg p-10 shadow-[0_0_25px_rgba(0,0,0,0.15)] bg-white'>
      <div className='w-12 h-12 rounded-lg bg-gradient-to-bl from-white to-amber-100 mb-4'>
        {icon}
      </div>
      <h3 className='text-xl font-[poppins] font-bold text-emerald-900 mb-4'>
        {title}
      </h3>
      <p className='text-sm text-left font-[poppins] text-emerald-700 leading-relaxed'>
        {text}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <section id='about' className='w-full flex flex-col items-center mb-30'>
      <div className='w-full py-15 mb-20 bg-gradient-to-b from-emerald-700 to-[emerald-25]'></div>
      <div className='flex flex-col mb-15 max-w-5xl'>
        <div className='flex flex-col w-full'>
          {/* INÍCIO DA SEÇÃO #SOBRE */}
          <h2 className='font-[poppins] text-3xl text-center mb-8 font-bold text-emerald-900'>
            Quem Somos
          </h2>
          <p className='font-[poppins] px-10 lg:px-30 text-center lg:text-lg text-emerald-600'>
            A Meridiano Geotecnologias nasceu do sonho de transformar
            conhecimento em impacto real. Acreditamos que cada projeto é mais do
            que um trabalho técnico, é a base para o desenvolvimento de pessoas,
            negócios e territórios.
          </p>
        </div>
      </div>
      {/* CARDS COM OS VALORES */}
      <div className='flex flex-col gap-6 lg:flex-row max-w-6xl px-4'>
        <Card
          title={'Missão'}
          icon={
            <RocketLaunchIcon className='w-full h-full p-2 text-amber-300' />
          }
          text={
            'Fornecer soluções precisas e inovadoras nos setores de regularização fundiária, mapeamento, topografia e infraestrutura, garantindo eficiência, confiabilidade e gestão estratégica do espaço. Utilizamos tecnologias de ponta e metodologias avançadas para transformar dados geoespaciais em informações estratégicas, apoiando o desenvolvimento sustentável e a tomada de decisões seguras.'
          }
        />
        <Card
          title={'Visão'}
          icon={<EyeIcon className='w-full h-full p-2 text-amber-300' />}
          text={
            'Ser referência nacional, oferecendo soluções inovadoras e de alta precisão que impulsionam o desenvolvimento sustentável. Buscamos aprimorar continuamente nossos processos e tecnologias para entregar projetos confiáveis, eficientes e alinhados às necessidades dos nossos clientes, contribuindo para um futuro mais organizado e seguro.'
          }
        />
        <Card
          title={'Valores'}
          icon={<StarIcon className='w-full h-full p-2 text-amber-300' />}
          text={
            'Precisão e Qualidade • Ética e Transparência • Inovação e Tecnologia • Compromisso com o Cliente • Sustentabilidade e Responsabilidade. Contribuímos para o desenvolvimento ordenado dos territórios, respeitando o meio ambiente e a sociedade.'
          }
        />
      </div>
    </section>
  );
};

export default About;
