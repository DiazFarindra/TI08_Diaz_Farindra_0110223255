
import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='max-w-[1200px] my-0 mx-auto p-4'>
        {children}
    </div>
  )
}
