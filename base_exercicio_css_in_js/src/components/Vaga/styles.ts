import styled from "styled-components"

export const Vaga = styled.div`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px
`

export const VagaLink = styled.link`
border-color: var(--cor-secundaria);
background-color: var(--cor-principal);
color: var(--cor-secundaria);
display: inline-block;
padding: 8px 16px;
text-decoration: none;
margin-top: 16px;
font-weight: bold;
font-size: 14px;
border-radius: 8px;
text-align: center;

@media (max-width: 768px) {
  display: block;
}
`

export const VagaHover = styled.h3 `
vaga:hover {
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
}

vaga:hover a {
  border-color: var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
}

`

