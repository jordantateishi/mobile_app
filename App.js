import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { firebase } from './firebase.js'
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import Ingredient from './ingredient.js';


const auth = getAuth();

function signIn() {

  const provider = new GoogleAuthProvider();


  const auth = getAuth();
  signInWithRedirect(auth, provider);

  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function logOff() {
  // const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
}

export default function App() {
  const [ user ] = useAuthState(auth)
  return (
    <View style={styles.container}>
      <View>
        {user ? (

          <View>
              <Text>Hello {user.displayName}</Text>
              <Ingredient/>
          </View>
        ) : (
          <View>
              <Text>Sign in to begin</Text>
          </View>
        )}
      </View>

      
      <View>
        {user ? (

          <Button onPress={logOff} title='Sign out'/>
        ) : (
          <Button onPress={signIn} title='Sign in with Google'/>
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
