import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa"; 
import { FaGithub} from "react-icons/fa"; 
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"; 

const Navbar = () => {
    return (
    <nav className="mb-20 flex items-center justify-between py-2">
            <div className="flex flex-shrink-0 items-center text-white font-bold text-3xl p-2">
                <h1 className="mx-2 w-10 ">NYF</h1>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
                <FaDiscord />
            </div> 
    </nav>);
};

export default Navbar;
