import "../styles/navbar.css"
import logo from "../Logo.png"

const navbar = () => {
  return (
    <>
    
      <span className="logo">
        <img src={logo} alt="" />
      </span>

        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Topics</a></li>
                <li><a href="/">Simulator</a></li>
                <li><a href="/">Creator</a></li>
            </ul>
        </nav>
    
    
    </>
  )
}

export default navbar