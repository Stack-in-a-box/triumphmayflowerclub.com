const masterContentDecryptionKey = "passphrase"; // This will eventually be used in the build process, so that it's not visible by viewing the loaded source files in browsers' dev tools.

const users = [
    {
        membershipNumber: 1209,
        username: "robdavies",
        passwordSalt: "FvMoK5DqdYSLPWCR",
        encryptedPassword: "HHP7K3J6ixvbZcArr9U1yw==", // Can't remember what plaintext I used for this password (probably "password") so should probably generate a new user to be safe.
        encryptedContentDecryptionKey: "vxZLbdE82MmrFxhnL/Pxhw==",
        displayName: "Rob Davies"
    }
];

const isAuthenticated = isPasswordCorrect(users[0], "password");
const membersOnlyRegion = document.getElementById("membersOnly");

const stringToBeEncrypted = `<p style="color: green;">Hello, encrypted world!</p>`;
const contentToBeEncrypted = CryptoJS.enc.Utf8.parse(stringToBeEncrypted);
const encryptedContent = CryptoJS.AES.encrypt(contentToBeEncrypted, masterContentDecryptionKey);

const decryptedContent = CryptoJS.AES.decrypt(encryptedContent, masterContentDecryptionKey);
const decryptedString = CryptoJS.enc.Utf8.stringify(decryptedContent);

if (isAuthenticated) membersOnlyRegion.innerHTML = decryptedString;
else membersOnlyRegion.innerHTML = `<p style="color: red;">You must be logged-in to see this.</p>`;



function isPasswordCorrect(user, plaintextPassword) {
    const { encryptedPassword, membershipNumber, passwordSalt, username } = user;

    const decryptionKey = membershipNumber + username + passwordSalt + plaintextPassword;
    const encryptedPasswordWrapper = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(encryptedPassword)
    });
    const decryptedPasswordWrapper = CryptoJS.AES.decrypt(encryptedPasswordWrapper, decryptionKey);
    const decryptedPassword = CryptoJS.enc.Utf8.stringify(decryptedPasswordWrapper); // For some reason, this is currently ending-up as empty (could be that I've missed something or it could be that I've genuinely not specified the right plaintext password.)
    const passwordIsCorrect = plaintextPassword == decryptedPassword;

    return passwordIsCorrect;
}

// In future, these two functions will be moved to a separate tool for generating new users to be added to the system.
function createUserObject(membershipNumber, username, plaintextPassword, displayName) {
    const passwordSalt = generateSalt();
    const encryptionKey = membershipNumber + username + passwordSalt + plaintextPassword;

    const contentDecryptionKeyToBeEncrypted = CryptoJS.enc.Utf8.parse(masterContentDecryptionKey);
    const encryptedContentDecryptionKeyWrapper = CryptoJS.AES.encrypt(contentDecryptionKeyToBeEncrypted, encryptionKey);
    const encryptedContentDecryptionKey = encryptedContentDecryptionKeyWrapper.ciphertext.toString(CryptoJS.enc.Base64);

    const plaintextPasswordToBeEncrypted = CryptoJS.enc.Utf8.parse(plaintextPassword);
    const encryptedPasswordWrapper = CryptoJS.AES.encrypt(plaintextPasswordToBeEncrypted, encryptionKey);
    const encryptedPassword = encryptedPasswordWrapper.ciphertext.toString(CryptoJS.enc.Base64);

    return {
        membershipNumber,
        username,
        passwordSalt,
        encryptedPassword,
        encryptedContentDecryptionKey,
        displayName
    };
}

function generateSalt() {
    const length = 16;
    const characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let randomAlphanumericString = "";

    for (let i = 0; i < length; i++) {
        const randomCharacterIndex = Math.floor((Math.random() * characterSet.length));
        randomAlphanumericString += characterSet.charAt(randomCharacterIndex);
    }

    return randomAlphanumericString;
}
