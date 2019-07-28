const isAuthenticated = true;
const membersOnlyRegion = document.getElementById("membersOnly");

const encryptionPassphrase = "passphrase";
const stringToBeEncrypted = `<p style="color: green;">Hello, encrypted world!</p>`;
const contentToBeEncrypted = CryptoJS.enc.Utf8.parse(stringToBeEncrypted);
const encryptedContent = CryptoJS.AES.encrypt(contentToBeEncrypted, encryptionPassphrase);
const decryptedContent = CryptoJS.AES.decrypt(encryptedContent, encryptionPassphrase);
const decryptedString = CryptoJS.enc.Utf8.stringify(decryptedContent);

if (isAuthenticated) membersOnlyRegion.innerHTML = decryptedString;
else membersOnlyRegion.innerHTML = `<p style="color: red;">You must be logged-in to see this.</p>`;
