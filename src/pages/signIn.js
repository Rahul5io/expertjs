import { signInWithGooglePopup, createUserDocFromAuth } from "../utils/firebase.utils";

const Signin = () => {

    const loginInWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        const userDocref = await createUserDocFromAuth(response.user);
    };
    return (
        <div>
            SignIn Page

            <button
                onClick={loginInWithGoogle}>
                Sign In with google
            </button>

        </div>
    )
}

export default Signin;