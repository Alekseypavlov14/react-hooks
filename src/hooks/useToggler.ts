import { useState } from 'react'

type returnType<T> = [T, (newValue: T) => void]

export function useToggler<T>(initialState: T): returnType<T> {
  const [value, setValue] = useState(initialState)

  function updateValue(newValue: T) {
    if (newValue !== value) {
      setValue(newValue)
    }
  }

  return [value, updateValue]
}