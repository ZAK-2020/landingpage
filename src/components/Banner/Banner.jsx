import './Banner.css'
import collageImage from '../../assets/Image.png'

function Banner() {
  return (
    <section className="HeroSection">
      <div className="HeroContent">
        <div className="HeroTextBlock">
          <div className="HeroTextGroup">
            <p className="HeroHeading">We Take Care of Your Brand</p>
            <p className="HeroDescription">
              We care about our work and we care about our clients.
            </p>
          </div>

          <div className="HeroActions">
            <div className="EmailField">
              <p className="EmailFieldText">Enter your Email</p>
            </div>

            <div className="PrimaryButton">
              <p className="PrimaryButtonText">Lets Talk</p>
            </div>
          </div>
        </div>

        <div className="HeroImage">
          <img src={collageImage} alt="Collage" />
        </div>
      </div>
    </section>
  )
}

export default Banner
