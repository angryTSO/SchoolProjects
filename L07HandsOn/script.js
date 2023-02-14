function regexChecker()
{
    let pattern =  /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var firstCorect = firstName.match(pattern);
    var lastCorrect = lastName.match(pattern);
    var isCorrect = firstCorect && lastCorrect;
    if(isCorrect)
    {
        alert("Yay! Your inputs were all correct!");
    }
    else
    {
        alert("Oh no! That's an invalid format!")
    }

}