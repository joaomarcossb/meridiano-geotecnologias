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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState({ subject: '', text: '' });

  const handleName = (e) => {
    let value = e.target.value;
    value = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '');
    value = value.replace(/\s{2,}/g, ' ');
    value = value.replace(/^\s/, '');
    setName(value);
  };

  const handleEmail = (e) => {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z0-9@._-]/g, '');
    const parts = value.split('@');
    if (parts.length > 2) {
      value = parts[0] + '@' + parts.slice(1).join('').replace(/@/g, '');
    }
    setEmail(value);
  };

  const handlePhone = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '').slice(0, 11);
    if (value.length === 11) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length === 10) {
      value = value.replace(/^(\d{2})(\d{4})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{0,5})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      value = value.replace(/^(\d*)/, '($1');
    }
    if (value.endsWith('-')) {
      value = value.slice(0, -1);
    }
    if (value.endsWith('(')) {
      value = value.slice(0, -1);
    }
    setPhone(value);
  };

  const handleMessage = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <form onSubmit={handleSubmit} className='w-full p-2 max-w-3xl'>
        {/* Nome */}
        <Field
          id={'name'}
          title={'Nome *'}
          type={'text'}
          value={name}
          func={handleName}
          holder={'Digite seu nome'}
        />

        {/* Email */}
        <Field
          id={'email'}
          title={'E-mail *'}
          type={'email'}
          value={email}
          func={handleEmail}
          holder={'seu@email.com'}
        />

        {/* Telefone */}
        <Field
          id={'phone'}
          title={'Telefone *'}
          type={'phone'}
          value={phone}
          func={handlePhone}
          holder={'(00) 00000-0000'}
        />

        {/* Assunto */}
        <Field
          id={'subject'}
          title={'Assunto *'}
          type={'subject'}
          value={message.subject}
          func={handleMessage}
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
            value={message.text}
            onChange={handleMessage}
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
