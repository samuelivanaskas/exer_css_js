import { FormHero, FormDiv, HeroTitle, } from './styles'

const Hero = () => (
  <FormHero className={ FormDiv}>
    <div className="container">
      <h2 className={HeroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </h2>
    </div>
  </FormHero>
)

export default Hero
