import { FormEvent, useState } from 'react'
import styles from '../../styles'

import { BtnPesquisar, Campo, Form } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form className={Form} onSubmit={aoEnviarForm}>
      <Campo>
        className={Campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      </Campo>
      <BtnPesquisar className={BtnPesquisar} type="submit">
        Pesquisar
      </BtnPesquisar>
    </Form>
  )
}
export default FormVagas
