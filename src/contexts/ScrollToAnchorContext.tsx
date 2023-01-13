import { createContext, ReactNode, useContext, useState } from 'react'

interface ScrollToAnchorContextProps {
  children: ReactNode
}

interface ScrollToAnchorContextData {
  elementName: string | null
  setElementName: (elementName: string | null) => void
}

const ScrollToAnchorContext = createContext({} as ScrollToAnchorContextData)

export function ScrollToAnchorProvider({
  children,
}: ScrollToAnchorContextProps): JSX.Element {
  const [elementName, setElementName] = useState<string | null>(null)

  return (
    <ScrollToAnchorContext.Provider value={{ elementName, setElementName }}>
      {children}
    </ScrollToAnchorContext.Provider>
  )
}

export const useScrollToAnchor = (): ScrollToAnchorContextData =>
  useContext(ScrollToAnchorContext)
