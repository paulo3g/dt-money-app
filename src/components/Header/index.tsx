import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import { NewTransactionModal } from '../NewTransactionModal'
import { useDisclosure } from '../../hooks/useDisclosure'

export function Header() {
  const { isOpen: isAdding, toggle: onOpenChange } = useDisclosure()

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="/assets/logo.svg" alt="" />

        <Dialog.Root open={isAdding} onOpenChange={onOpenChange}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal onClose={onOpenChange} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
