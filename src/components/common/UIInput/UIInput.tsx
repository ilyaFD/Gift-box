import React from 'react'
import { observer } from 'mobx-react';

interface IInput {
  field: any,
  type?: string
};

export const UIInput: React.FC<IInput> = observer(({field, type = "text"}) => {
    const blurHendler = (e: React.FormEvent<HTMLInputElement>, field: any) => {
        e.preventDefault()
        field.validate()
        field.showErrors(true)
    }
    const onClangeHandler = (e: React.FormEvent<HTMLInputElement>, field: any): void => {
        const target = e.target as HTMLInputElement;
        field.set(target.value)
        field.validate()
        field.showErrors(true)
    }

    return (
        <label
            className="block text-sm text-gray-700 mb-1"
        >
            <span className="mb-1 block font-bold text-slate-600">{field.label}</span>
            <input
                className="w-full rounded-md border-2 border-gray-300 focus:border-blue-300 outline-none p-2 text-gray-700 font-bold "
                type={type}
                placeholder={field.placeholder}
                value={field.value}
                onChange={(e: React.FormEvent<HTMLInputElement>) => onClangeHandler(e, field)}
                onBlur={(e: React.FormEvent<HTMLInputElement>) => blurHendler(e, field)}
            />
            <span className="text-red-400 text-xs h-4 block">{field.error}</span>
        </label>
    )
})