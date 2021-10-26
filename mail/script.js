// look for email addresses in array
/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
 */

let array = ['lucaverthuy@gmail.com', 'gianni123@gmail.com', 'luca123@hotmail.com', 'albero123@gmail.com', 'alberocasa@gmail.com'];
console.log(array);

let email = prompt('Please enter your email address...');
console.log(email);

let emailFound = false;

for (let i = 0; i < array.length; i++) {
  if(array[i] === email) {
    console.log('email found');
    emailFound = true;
  }
}

let output = document.getElementById('output');

document.getElementById('email').innerHTML = 'Entered email: ' + email;

if(emailFound == true) {
  document.getElementById('output').innerHTML = 'Email found, you can access the list!';
  output.classList.add('text-success');
} else{
  document.getElementById('output').innerHTML = 'Email not found, you can not access the list! make sure you typed in the correct email address';
  output.classList.remove('text-success');
  output.classList.add('text-danger');
}
