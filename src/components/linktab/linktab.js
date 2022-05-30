import LinkItem from "components/linkitem";
import { useContext } from "react";
import { UserContext } from "containers/store/context/usercontext";
import { signOutUser } from "containers/store/firebase/firebase";


const LinkTab = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }


  return (
    <div className="linktab">
      <LinkItem text={"home"} path={"/"} />
      <LinkItem text={"headphones"} path={"/"} />
      <LinkItem text={"speakers"} path={"/"} />
      <LinkItem text={"earphones"} path={"/"} />
      <LinkItem text={ currentUser ? (<span onClick={signOutHandler}>sign out</span>) : "sign in"} path={currentUser ? "autentification" : "autentification"} />
    </div>
  );
};

export default LinkTab;
