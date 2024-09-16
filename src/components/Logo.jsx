import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div style={{display:"flex"}}>
        <Link to="/">
        <img src="/logo2.png" alt="logo" className={styles.logo} />
        </Link>
      <p style={{fontSize:"30px" , marginLeft:"20px" , marginTop:"3px"}}>WanderWorld</p>
    </div>
      
   
  );
}

export default Logo;
