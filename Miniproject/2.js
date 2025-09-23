// DOM Elements
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const signUpForm = document.querySelector('.sign-up-container form');
const signInForm = document.querySelector('.sign-in-container form');

const signUpEmail = document.querySelector('.sign-up-container input[type="email"]');
const signUpPassword = document.querySelector('.sign-up-container input[type="password"]');

const signInEmail = document.querySelector('.sign-in-container input[type="email"]');
const signInPassword = document.querySelector('.sign-in-container input[type="password"]');

// Dynamically created elements
const welcomeMessage = document.createElement('h2'); // Welcome message
welcomeMessage.style.display = 'none';
document.body.appendChild(welcomeMessage);

const logoutButton = document.createElement('button'); // Logout button
logoutButton.textContent = 'Logout';
logoutButton.style.display = 'none';
document.body.appendChild(logoutButton);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBseUWrogtOxHBw5hWOC0Q_y0Z-iIubDAE",
  authDomain: "savita-85261.firebaseapp.com",
  projectId: "savita-85261",
  storageBucket: "savita-85261.firebasestorage.app",
  messagingSenderId: "827093176063",
  appId: "1:827093176063:web:c053d3f39f5800146006ca",
  measurementId: "G-L850MNCG9Z"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Toggle between Sign Up and Sign In forms
signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Sign Up
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signUpEmail.value;
  const password = signUpPassword.value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("User signed up successfully!");
      console.log("User:", userCredential.user);

      // Show welcome message and hide forms
      showWelcomeMessage(userCredential.user.email);
    })
    .catch((error) => {
      alert("Error signing up: " + error.message);
    });
});

// Login
signInForm.addEventListener('submit', handleLogin);

function handleLogin(e) {
  e.preventDefault();

  const email = signInEmail.value;
  const password = signInPassword.value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("User logged in successfully!");
      console.log("User:", userCredential.user);

      // Redirect to the quiz page after login
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Invalid email or password. Please try again.");
    });
}

// Logout

// Auth State Listener
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in:", user.email);

    // Show welcome message and hide forms
    showWelcomeMessage(user.email);
  } else {
    // User is signed out
    console.log("No user is signed in.");

    // Hide welcome message and show forms
    hideWelcomeMessage();
  }
});

const logout = document.getElementById("logout")
logout.addEventListener("click",function(){
  window.location.href = "2.html";
})