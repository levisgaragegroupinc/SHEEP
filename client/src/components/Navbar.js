import logo from "../images/Sheep-logos.jpeg"

const Navbar = () => {
  return (
    <div>
        <div>
        <img
        src={logo}
        alt="Virus Cell Molecule with SHEEP to the right"
      ></img>
        </div>
        <div> 
            <h1>SHEEP</h1>
            <h3>Support Helping End and Eradicate Pandemics</h3>
        </div>
        <div>
            <button>Login</button>
            <button>Signup</button>
            <button>Myprofile</button>
        </div>
      
    </div>
  )
}

export default Navbar

