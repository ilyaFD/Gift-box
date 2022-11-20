import React from 'react'
import clsx from 'clsx'

interface ITitle {
  text: string
  size?: string
};

export const UITitle: React.FC<ITitle> = ({text, size = "m"}) => {
  return (
    <h1 className={
      clsx(
        'text-slate-600',
        'uppercase',
        'font-extrabold',
        'mb-8',
        'sm:mb-16',
        size === 'lg' && 'sm:mb-16 mb-8 text-lg md:text-4xl',
        size === 'm' && 'sm:mb-12 text-lg md:text-2xl',
        size === 's' && 'sm:mb-8 text-lg md:text-xl',
        'text-2xl',
        'baz'
      )}
    >
      {text}
    </h1>
  )
}