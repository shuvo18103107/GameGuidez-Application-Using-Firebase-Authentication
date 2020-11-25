
//listen for auth status changes
// by checking this user object we can understood the user is logout or login , if logout then null 
 auth.onAuthStateChanged( user =>{
      if(user)
      {
          console.log('user logged in' , user);
      }
      else{
          console.log('user logged out');
      } 

 });






















//signup
const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit',(e)=>
{
    e.preventDefault();
    //get user info 
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
//   console.log(email,password);

// signup the user 
  auth.createUserWithEmailAndPassword( email,password).then(
   cred => {
    //    console.log(cred.user);
       const modal = document.querySelector('#modal-signup');
       M.Modal.getInstance(modal).close();
       signupForm.reset();


   }



  );
});

// Log Out 

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => 
{
    e.preventDefault();
    auth.signOut().then(()=>
    {
        // console.log('User Sign Out');

    });

});

//log in 
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e)=>
{
    e.preventDefault();
    // get the user info 
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

  // login the user 
  auth.signInWithEmailAndPassword(email,password).then(
      cred => {

    // console.log(cred.user);
    //close the login modal and reset the form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();

      }
  )





})









