$(document).ready(() => {
    const imageDetails = [
        { registration: "DH-74-29", caption: "Nico Poortvliet’s Mayflower" },
        { registration: "ODV 692", caption: "John Castle’s Mayflower" },
        { registration: "617 YUA", caption: "Chad Brown’s Mayflower, “Little Nell”" },
        { registration: "KSK 160", caption: "Mike Clement’s Mayflower" },
        { registration: "NKA 947", caption: "Paul Burgess’ Mayflower" },
        { registration: "XAS 929", caption: "John and Barbara Albion’s Mayflower" },
        { registration: "HBX 957", caption: "Mark Smith’s Mayflower" },
        { registration: "DM-42-72", caption: "Nico ten Wolde’s Mayflower" },
        { registration: "MSK 624", caption: "Brian Redshaw’s Mayflower" },
        { registration: "KSF 804", caption: "Louis Lemaire’s Mayflower" }
    ];

    const millisecondsSinceEpoch = new Date();
    const millisecondsPerDay = 8.64e7;
    const daysSinceEpoch = Math.floor(millisecondsSinceEpoch / millisecondsPerDay);
    const totalNumberOfPhotos = 10;
    const cycleIndex = (daysSinceEpoch % totalNumberOfPhotos);
    const dayInCycle = cycleIndex + 1;

    $("#slideshow").html(`
        <img src="${siteBaseUrl}/slideshow/photo${dayInCycle}.jpg">
        <div class="numberPlateMarker">${imageDetails[cycleIndex].registration}</div>
        <p class="imageCaption">${imageDetails[cycleIndex].caption}</p>
    `);
});
