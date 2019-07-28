const isAuthenticated = true;
const membersOnlyRegion = document.getElementById("membersOnly");

if (isAuthenticated) membersOnlyRegion.innerHTML = `<p style="color: green;">Hello, members-only world!</p>`;
else membersOnlyRegion.innerHTML = `<p style="color: red;">You must be logged-in to see this.</p>`;
