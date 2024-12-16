window.onload = function() {
   
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const section = localStorage.getItem('section');

    
    console.log('firstName:', firstName); 
    console.log('lastName:', lastName);
    console.log('section:', section);

    const resultContainer = document.querySelector('#result-container');
    
    let resultMessage = `<p><strong>Welcome, ${firstName} ${lastName}!</strong></p>`;

    if (section) {
        resultMessage += `<p>You are from <strong>${section}</strong>.</p>`;
    } else {
        resultMessage += `<p>No section selected.</p>`;
    }

    resultContainer.innerHTML = resultMessage;

    resultContainer.style.display = 'block';
};