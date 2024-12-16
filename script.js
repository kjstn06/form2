document.querySelector('#signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const firstName = document.querySelector('#fname').value;
    const lastName = document.querySelector('#lname').value;
    const section = document.querySelector('input[name="mysection"]:checked')?.value;

   
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('section', section);

    console.log('Redirecting to result.html');
    window.location.href = 'result.html';
});



