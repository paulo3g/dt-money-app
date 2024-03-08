import { useCallback, useState } from 'react'

interface UseDisclosureProps {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: (toSet?: boolean) => void
}

export function useDisclosure(isOpenDefault = false): UseDisclosureProps {
  const [isOpen, setIsOpen] = useState(isOpenDefault)

  const open = useCallback(() => setIsOpen(true), [])

  const close = useCallback(() => setIsOpen(false), [])

  const toggle = useCallback((toSet: unknown) => {
    if (toSet === undefined) {
      setIsOpen((state) => !state)
    } else {
      setIsOpen(Boolean(toSet))
    }
  }, [])

  return { isOpen, open, close, toggle }
}
