import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

export const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    localStorage.setItem("isAuth", true);
    return result.user;
};
