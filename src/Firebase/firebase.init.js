import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
steps for authentication
----------------------------
Step-1 : Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method

----------------------------
Step-2 :
1. create login component
2. create register component
3. create route for login and register

----------------------------
Step-3 :
1. set up sign in method
2. set up sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase

-----------------------------
step-4 :
1. create a auth context
2. create context provider
3. set context provider context value
4. create useAuth hook
5. create useAuth hook

*/