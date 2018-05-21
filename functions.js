
const button = document.querySelector('.main-form #form .btn');


/* Function "Set" that takes a document id and gets it 
from the dom replaces the # symbol with nothing effectively 
removing it and set a value "text"*/
const set = (id, text) => {
    document
        .getElementById(id.replace("#", ""))
        .innerHTML = text
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    const url = document.getElementById('input').value;
    console.log(url);


    /* NOTE
    "?" is a Ternary Operator, also called conditional operator,
    and is used as a shorthand of if...else statement.

    It works in this way:

    (condition) ? expression on true : expression on false 

    E.g.
    let number = 3;
    const greaterThanFive = (number > 5) ? console.log("Number is greater than 5") : console.log("Number is lower than 5");

    // output 
    greaterThanFive; // should print number is lower than 5
    */

    // extrating parts of the url
    const protocol = url.match(/^(https?:\/\/)/g); // gets url 
    set('protocol', protocol ? protocol[0] : '');

    const domain = url.match(/^https?:\/\/((www\.)?.[\w-]+\.\w{2,4})\/?/);
    console.log(domain);
    set('domain', domain ? domain[1]: '');

});



// test: https://www.google.com

// revision

/* Regular Expressions

Composed of simple characters such as "/abc/" or a mix like "/ab*c/".

All regular expressions are written between a set of forward slashes - 
one at the start, one at the end. "/abc/" is an example of a regular expression
that matches character combinations in string with only exactly when letters
a, b, and c are together.

Using Special Characters


\ - This is the same as when using it in a string in many programming language - the next
    character immediately following this back slash is a non-special character and and should be 
    used as part of the match. E.g. /ab\-c/ would mean look for matches of 'ab-c'.

* - Matches the pattern 0 or more times, equivalent to {0,}.
    For example /bo*ed/ matches "boooooed" string with "booooo" and "the bird flies" with "b"

+ - Same as the above but only matches equivalent to {1,} (requiring at least 1 occurence).

^ - Matches beginning of input e.g. "An Elephant" matches the "A" in "An" but not the A in "It was an Angel".
    Works for multiline if the multiline flag is == true.

? - Optional. Matches 0 or 1 of the preceding token, effectively making it "optional".
    Following a special character it makes it a un-greedy quantifier, meaning it will match as few
    characters as possible. b\w+? matches all the "be"'s in "bee", "beer" etc but not more than one
    "e".

\w - A word


. - 

*/