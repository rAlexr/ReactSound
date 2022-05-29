import { signInWithGooglePopup, createUserDocumentFromAuth } from 'store/firebase/firebase';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);

    }
    return(
        <div className="signin">
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Log</button>
        </div>
    );
}

export default SignIn;