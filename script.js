// Reference the main auth sliding UI component
const container = document.getElementById('authContainer');

const showSignUp = () => {
    container.classList.add('right-panel-active');
    window.location.hash = 'signup';
};

const showSignIn = () => {
    container.classList.remove('right-panel-active');
    window.location.hash = 'login';
};

// Keep the sliding view and direct hash links in sync.
document.getElementById('goSignUp').addEventListener('click', (event) => {
    event.preventDefault();
    showSignUp();
});

document.getElementById('goSignIn').addEventListener('click', (event) => {
    event.preventDefault();
    showSignIn();
});

const syncViewWithHash = () => {
    if (window.location.hash === '#signup') {
        container.classList.add('right-panel-active');
    } else {
        container.classList.remove('right-panel-active');
    }
};

window.addEventListener('hashchange', syncViewWithHash);
syncViewWithHash();

// Suppress form page reloads during development tests
document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
});

document.getElementById('signUpForm').addEventListener('submit', (e) => {
    e.preventDefault();
});

// Dynamically inject link hooks to handle viewport structural updates seamlessly 
const addMobileToggles = () => {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    
    // Switch element config for the Sign In View
    const toSignUpLink = document.createElement('a');
    toSignUpLink.className = 'forgot mobile-only';
    toSignUpLink.href = '#signup';
    toSignUpLink.innerText = "Don't have an account? Sign up";
    toSignUpLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSignUp();
    });
    signInForm.appendChild(toSignUpLink);

    // Switch element config for the Sign Up View
    const toSignInLink = document.createElement('a');
    toSignInLink.className = 'forgot mobile-only';
    toSignInLink.href = '#login';
    toSignInLink.innerText = "Already have an account? Sign in";
    toSignInLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSignIn();
    });
    signUpForm.appendChild(toSignInLink);
};

// Initialise adjustments on file parsing step
addMobileToggles();
