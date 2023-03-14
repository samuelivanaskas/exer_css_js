import { Cabecalho as CabecalhoStyle } from './styles'

export type Props = {
  name: string
}

const Cabecalho = ( props: Props ) => (
  <header className={props.name}>
    <CabecalhoStyle>EBAC Jobs</CabecalhoStyle>
  </header>
)

export default Cabecalho
