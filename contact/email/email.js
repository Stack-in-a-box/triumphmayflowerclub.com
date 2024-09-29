$(document).ready(() => {
    const queryStringParameters = new URLSearchParams(window.location.search);
    const formIdForPurpose = {
        general: "xblrvaww",
        chair: "mgvwglzd",
        vicechair: "mvgpebqj",
        secretary: "mwpegnqg",
        treasurer: "mrbznaaz",
        membership: "xjkbneeg",
        rallies: "mdknqlle",
        magazine: "manwrddo",
        spares: "xqazrddb",
        regalia: "xldrqwwl",
        website: "xyzgrddd"
    };

    const setFormIdOnFormElement = formId => $("#form").attr("action", `https://formspree.io/f/${formId}`);

    if (queryStringParameters.has("purpose")) {
        const purpose = queryStringParameters.get("purpose");

        if (formIdForPurpose.hasOwnProperty(purpose)) {
            const formId = formIdForPurpose[purpose];
            $("#purpose").val(purpose);
            setFormIdOnFormElement(formId);
        }
    }

    if (queryStringParameters.has("subject")) {
        const subject = queryStringParameters.get("subject");
        $("#subject").val(subject);
    }

    $("#purpose").on("change", ({ target }) => {
        const formId = formIdForPurpose[target.value];
        setFormIdOnFormElement(formId);
    });
});
