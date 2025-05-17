
import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className='max-w-[1200px] my-0 mx-auto p-4'>
        {children}
    </div>
  )
}
