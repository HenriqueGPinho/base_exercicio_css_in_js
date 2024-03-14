import styled from 'styled-components'

const FormVagasStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export default FormVagasStyle

export const BotaoPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: var(--cor-principal-hover);
  }
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
