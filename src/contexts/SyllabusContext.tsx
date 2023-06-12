import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'

type SyllabusContextType = {
  prog: string | null
  setProg: Dispatch<SetStateAction<string | null>>
}

type SyllabusContextProviderProps = {
  children: ReactNode
}

export const SyllabusContext = createContext<SyllabusContextType | null>(null)

const SyllabusContextProvider = ({
  children,
}: SyllabusContextProviderProps) => {
  const [prog, setProg] = useState<string | null>(null)

  return (
    <SyllabusContext.Provider value={{ prog, setProg }}>
      {children}
    </SyllabusContext.Provider>
  )
}

export default SyllabusContextProvider
