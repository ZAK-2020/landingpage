import './Header.css'
import LogoImage from '../../assets/Logo.png'

function Header() {
  return (
    <header className="HeaderBar">
      <div className="HeaderContainer">
         <div className="HeaderLogo">
          <img src={LogoImage} alt="Embrace logo" />
        </div>

        <div className="HeaderNavigation">
          <p>How It Works</p>
          <p>Our Work</p>
          <p>Pricing</p>
          <p>About Us</p>
        </div>

        <button className="HeaderButton"><p>Book A Call</p></button>
      </div>
    </header>
  )
}

export default Header
