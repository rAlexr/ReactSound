import LinkItem from "components/linkitem";
import { useContext } from "react";
import { UserContext } from "containers/store/context/usercontext";
import { signOutUser } from "containers/store/firebase/firebase";


const LinkTab = () => {
  const { currentUser } = useContext(UserContext);


  return (
    <div className="linktab">
      <LinkItem text={"home"} path={"/"} />
      <LinkItem text={"headphonesXX99"} path={"/headphonesXX99"} />
      <LinkItem text={"headphonesXX99two"} path={"/headphonesXX99two"} />
      <LinkItem text={"earphones"} path={"/"} />
      <LinkItem text={ currentUser ? (<span onClick={signOutUser}>sign out</span>) : "sign in"} path={currentUser ? "autentification" : "autentification"} />
    </div>
  );
};

export default LinkTab;
