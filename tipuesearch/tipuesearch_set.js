var tipuesearch_replace = {
    words: [
        {
            word: "tip",
            replace_with: "tipue"
        },
        {
            word: "javscript",
            replace_with: "javascript"
        },
        {
            word: "jqeury",
            replace_with: "jquery"
        }
    ]
};

var tipuesearch_weight = {
    weight: [
        {
            url: "http://www.tipue.com",
            score: 20
        },
        {
            url: "http://www.tipue.com/search",
            score: 30
        },
        {
            url: "http://www.tipue.com/is",
            score: 10
        }
    ]
};

var tipuesearch_stem = {
    words: [
        {
            word: "e-mail",
            stem: "email"
        },
        {
            word: "javascript",
            stem: "jquery"
        },
        {
            word: "javascript",
            stem: "js"
        }
    ]
};

var tipuesearch_related = {
    searches: [
        {
            search: "tipue",
            related: "Tipue Search"
        },
        {
            search: "tipue",
            before: "Tipue Search",
            related: "Getting Started"
        },
        {
            search: "tipue",
            before: "Tipue",
            related: "jQuery"
        },
        {
            search: "tipue",
            before: "Tipue",
            related: "Blog"
        }
    ]
};

var tipuesearch_string_1 = "No title";
var tipuesearch_string_2 = "Showing results for";
var tipuesearch_string_3 = "Search instead for";
var tipuesearch_string_4 = "1 result";
var tipuesearch_string_5 = "results";
var tipuesearch_string_6 = "Back";
var tipuesearch_string_7 = "More";
var tipuesearch_string_8 = "Nothing found.";
var tipuesearch_string_9 = "Common words are largely ignored.";
var tipuesearch_string_10 = "Search too short";
var tipuesearch_string_11 = "Should be one character or more.";
var tipuesearch_string_12 = "Should be";
var tipuesearch_string_13 = "characters or more.";
var tipuesearch_string_14 = "seconds";
var tipuesearch_string_15 = "Searches related to";

var startTimer = new Date().getTime();
