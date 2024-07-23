type SearchProps = {
 loadUser: (userName: string) => Promise<void>;
}
import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import Classes from "./Search.module.css"

const Search = ({loadUser}: SearchProps) => {

 const [userName, setUserName] = useState("");
 const handletKeyDown = (e: KeyboardEvent) => {
  if(e.key === 'Enter'){
   loadUser(userName);
  }
 }

 return (
  <div className={Classes.search}>
   <h2>Busque por um usuário:</h2>
   <p>Conheça seus melhores repositórios</p>
   <div className={Classes.search_container}>
    <input 
     type="text" 
     placeholder="Digite o nome do usuário" 
     onChange={(e) => setUserName(e.target.value)}
     onKeyDown={handletKeyDown}
     />
    <button>
     <BsSearch onClick={() => loadUser(userName)}/>
    </button>
   </div>
  </div>
 )
}

export default Search;