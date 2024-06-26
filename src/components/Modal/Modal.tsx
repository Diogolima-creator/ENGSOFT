import * as M from './styles'

type ModalType = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = (props:ModalType) => {
  return (
    <>
      <M.Back />
      <M.Modal onClick={() => props.setModal(false)}>
        <M.Image src='../../trajeto.png'/>
        <M.Download>Baixar Trajeto</M.Download>
        <M.Close onClick={() => props.setModal(false)}>Voltar</M.Close>
      </M.Modal>
    </>
  )
}
