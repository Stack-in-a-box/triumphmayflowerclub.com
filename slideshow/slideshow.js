$(document).ready(() => {
    const imageDetails = [
        { registration: "KSK 160", caption: "Mike Clement’s Mayflower" },
        { registration: "NKA 947", caption: "Paul Burgess’ Mayflower" },
        { registration: "XAS 929", caption: "John and Barbara Albion’s Mayflower" },
        { registration: "HBX 957", caption: "Mark Smith’s Mayflower" },
        { registration: "DM-42-72", caption: "Nico ten Wolde’s Mayflower" },
        { registration: "KSF 804", caption: "Louis Lemaire’s Mayflower" },
        { registration: "HBX 957", caption: "Mark Smith’s Mayflower" },
        { registration: "USA 123", caption: "Russ Hoenig’s Mayflower" },
        { registration: "PAR 752", caption: "Michael Hales’ Mayflower" },
        { registration: "CSN 107", caption: "Keith Pegram’s Mayflower" }
    ];

    const millisecondsSinceEpoch = new Date();
    const millisecondsPerDay = 8.64e7;
    const daysSinceEpoch = Math.floor(millisecondsSinceEpoch / millisecondsPerDay);
    const totalNumberOfPhotos = imageDetails.length;
    const cycleIndex = (daysSinceEpoch % totalNumberOfPhotos);
    const dayInCycle = cycleIndex + 1;

    $("#slideshow").html(`
        <img src="${siteBaseUrl}/slideshow/photo${dayInCycle}.jpg">
        <div class="numberPlateMarker">${imageDetails[cycleIndex].registration}</div>
        <p class="imageCaption">${imageDetails[cycleIndex].caption}</p>
    `);
});
