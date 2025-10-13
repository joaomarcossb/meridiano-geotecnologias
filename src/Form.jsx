import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/16/solid';

const Field = ({ id, title, type, value, func, holder }) => {
  return (
    <div className='mb-4'>
      <label htmlFor={id} className='block text-emerald-900 font-semibold mb-2'>
        {title}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={func}
        placeholder={holder}
        required
        className='w-full font-[inter] py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 text-emerald-800 focus:ring-amber-200 focus:outline-none'
      ></input>
    </div>
  );
};

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', form);
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <form onSubmit={handleSubmit} className='w-full p-2 max-w-3xl'>
        {/* Nome */}
        <Field
          id={'name'}
          title={'Nome *'}
          type={'text'}
          value={form.name}
          func={handleChange}
          holder={'Digite seu nome'}
        />

        {/* Email */}
        <Field
          id={'email'}
          title={'E-mail *'}
          type={'email'}
          value={form.email}
          func={handleChange}
          holder={'seu@email.com'}
        />

        {/* Telefone */}
        <Field
          id={'phone'}
          title={'Telefone *'}
          type={'phone'}
          value={form.phone}
          func={handleChange}
          holder={'(00) 00000-0000'}
        />

        {/* Assunto */}
        <Field
          id={'subject'}
          title={'Assunto *'}
          type={'subject'}
          value={form.subject}
          func={handleChange}
          holder={'Como podemos ajudar?'}
        />

        {/* Mensagem */}
        <div className='mb-6'>
          <label
            htmlFor='message'
            className='block text-emerald-900 font-semibold mb-2'
          >
            Sua mensagem *
          </label>
          <textarea
            id='message'
            name='message'
            value={form.message}
            onChange={handleChange}
            rows='3'
            required
            className='w-full px-4 py-2 border font-[inter] resize-none border-gray-300 rounded-lg focus:ring-2 text-emerald-800 focus:ring-amber-200 focus:outline-none'
          />
        </div>

        {/* Botão */}
        <button
          type='submit'
          className='font-[poppins] flex text-sm gap-2 justify-center items-center w-full bg-amber-300 text-emerald-900 py-3 rounded-lg cursor-pointer font-semibold hover:opacity-95 active:scale-95'
        >
          <span className='block'>Enviar Mensagem</span>
          <PaperAirplaneIcon className='block w-5 h-5 pt-1' />
        </button>
      </form>
    </div>
  );
};

export default Form;
