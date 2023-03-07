//  Chiedi all’utente il suo nome,
//  poi chiedi il suo cognome,
//  poi chiedi il suo colore preferito

// Chiedo all'utente il suo nome.
const firstName = prompt("Ciao! Come ti chiami?");
console.log(firstName);

// Chiedo all'utente il suo cognome.
const lastName = prompt(`Ciao ${firstName} qual è il tuo cognome?`);
console.log(lastName);

// Chiedo all'utente il suo colore preferito?
const userFavoriteColor = prompt(
  `Ciao ${firstName} ${lastName} , qual è il tuo colore preferito? `
);
console.log(userFavoriteColor);
