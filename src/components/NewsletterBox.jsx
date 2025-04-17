import React from 'react'

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  }  

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-black'>Inscreva-se agora e ganhe 20% de desconto!</p>
        <p className='text-purple mt-3'>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Informe seu e-mail' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>INSCREVER-SE</button>
        </form>
    </div>
  );
}

export {NewsletterBox};