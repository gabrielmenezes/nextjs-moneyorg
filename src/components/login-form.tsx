'use client';

import { singin } from '@/app/actions/auth';
import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';



export function LoginForm() {

  const [state, action] = useFormState(singin, undefined)

  return (
    <form
      action={action}
      className="flex flex-col justify-center items-center gap-4"
    >
      <h1 className="font-bold text-4xl">Controle de Finanças</h1>
      <div className='flex flex-col text-left'>
        <label htmlFor='username' className='pb-2'>Usuário</label>
        <input id="username" name='username' placeholder='Seu usuario' type='email' required className='px-4 border rounded py-2 text-sm' />
      </div>
      {state?.errors?.username && <p>{state.errors.username}</p>}

      <div className='flex flex-col' >
        <label htmlFor='password' className='pb-2'>Usuário</label>
        <input id="password" name='password' placeholder='Seu usuario' type='password' required className='px-4 border rounded py-2 text-sm' />
        {state?.errors?.password && <p className='text-xs text-red-500 text-center'>{state.errors.password}</p>}
      </div>
      <Button type="submit">Entrar</Button>
    </form>
  );
}
