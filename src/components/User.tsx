import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import Classes from "./User.module.css";

const User = ({
 login, 
 avatar_url, 
 followers, 
 location, 
 following
}: UserProps) => {

 return (
  <div className={Classes.user}>
   <img src={avatar_url} alt={login} />
   <h2>{login}</h2>
    <p className={Classes.location}>
      <MdLocationPin />
      <span>{location}</span>
    </p>
   <div className={Classes.stats}>
    <div>
     <p>Seguidores: </p>
     <p className={Classes.number}>{followers}</p>
    </div>
    <div>
     <p>Seguindo: </p>
     <p className={Classes.number}>{following}</p>
    </div>
   </div>
   <Link to={`https://api.github.com/users/${login}/repos`}>Ver melhores projetos</Link>
  </div>
 )
}

export default User;