console.log("Current page:", window.location.pathname.split('/').pop());


document.addEventListener('DOMContentLoaded', function() {
    const publicPages = ['Login.html', 'Register.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    // Check both sessionStorage and localStorage
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true' || 
                          localStorage.getItem('isAuthenticated') === 'true';
    
    if (publicPages.includes(currentPage)) {
        // If on login page but already authenticated, redirect to dashboard
        if (isAuthenticated) {
            window.location.href = 'Index.html';
        }
    } else {
        // For protected pages, require authentication
        if (!isAuthenticated) {
            window.location.href = 'Login.html';
        }
    }
});

function logout() {
    // Clear both storage mechanisms
    sessionStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('userRole');
    localStorage.removeItem('userRole');
    
    // Redirect to login page
    window.location.href = 'Login.html';
}