import { UserProps } from "../types/user";
import Search from "../components/Search";
import { useState } from "react";
import User from '../components/User';
import Error from "../components/Error";

const Home = () => {
 const [user, setUser] = useState<UserProps | null>(null);
 const [error, setError] = useState(false);


 const loadUser = async (userName: string) => {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const data = await res.json();
  setError(false);
  setUser(null);

  if(res.status === 404){
   setError(true);
   return;
  }

  const  {avatar_url, login, followers, following, location} = data;

  const userProps: UserProps = {
   avatar_url,
   login,
   followers,
   following,
   location,
  }
  setUser(userProps);
 }

 return (
  <div>
   <Search loadUser={loadUser}/>
   {user && <User{...user}/>}
   {error && <Error/>}
  </div>
 )
}

export default Home;