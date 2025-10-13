import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    name: 'Four Seasons',
    comment:
      'Trabalho muito bem feito, toda equipe rápida, profissional, disponíveis, agradeço atenção. E com certeza próximas demandas irei procurar vocês.',
  },
  {
    name: 'Samuel Brandão',
    comment: 'Meridiano… excelência em trabalho em trabalhos de topografia!',
  },
  {
    name: 'Sirleide',
    comment:
      'Não temos do que reclamar com relação ao serviço prestado por vocês, vocês foram profissionais atenciosos conosco em todo o processo e entregaram um trabalho de excelência. Portanto só temos a agradecer. Obrigada!',
  },
  {
    name: 'Tais Café',
    comment:
      'Vocês desenvolveram um excelente trabalho. Fiquei satisfeita com o Atedimento e extremamente impressionada com a capacidade de entender minhas necessidades e atendê-las de prontidão. O projeto foi desenvolvido em pouco tempo e apresentou um excelente layout. Gratidão!',
  },
  {
    name: 'Elton',
    comment:
      'Vocês são excelentes profissionais, responsável, atenciosos, cumpre com a palavra. E sim vocês estão de parabéns. Gostei muito dos serviços prestados por vocês. Abraços Recomendo muito, profissionalismo…',
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // alterna automaticamente a cada 6s
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [paused]);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section
      id='testimonials'
      className='w-full max-w-3xl mx-auto px-6 relative pb-20'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className='mb-15'>
        <h2 className='text-3xl font-bold text-center text-emerald-900 mb-8'>
          Avaliação dos Clientes
        </h2>
        <p className='font-[poppins] px-10 lg:px-30 text-center lg:text-lg text-emerald-600'>
          A satisfação dos nossos clientes é nossa maior conquista!
        </p>
      </div>

      <div className='relative overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.15)]'>
        <div
          className='flex transition-transform duration-700 ease-in-out'
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className='flex flex-col flex-shrink-0 w-full h-auto p-10 text-center justify-center bg-white rounded-2xl shadow-lg'
            >
              <p className='block text-emerald-700 italic mb-6 leading-relaxed text-lg px-5 lg:px-20'>
                “{t.comment}”
              </p>
              <h3 className='flex gap-2 font-semibold justify-center text-emerald-900 text-lg'>
                <span className='block scale-x-200'>-</span>
                {t.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Botão anterior */}
        <button
          onClick={prevSlide}
          className='absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 hover:bg-white hover:cursor-pointer shadow-md p-2 rounded-full transition'
        >
          <ChevronLeftIcon className='w-6 h-6 text-amber-400' />
        </button>

        {/* Botão próximo */}
        <button
          onClick={nextSlide}
          className='absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 hover:bg-white hover:cursor-pointer shadow-md p-2 rounded-full transition'
        >
          <ChevronRightIcon className='w-6 h-6 text-amber-400' />
        </button>
      </div>

      {/* Indicadores */}
      <div className='flex justify-center mt-6 space-x-2'>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? 'bg-amber-300 scale-110' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
