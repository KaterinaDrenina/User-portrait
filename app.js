let yearOfBirth, city, favSport;

yearOfBirth = prompt("Enter your year of birth:");
if (yearOfBirth === null || isNaN(yearOfBirth)) {
    alert("We wish you had entered your year of birth");
} else {
    city = prompt("What city do you live in?");
    if (city === null) {
        alert("We wish you had entered your city");
    } else {
        favSport = prompt("What is your favorite sport?");
        if (favSport === null) {
            alert("We wish you had entered your favorite sport");
        } else {
            let currentYear = new Date().getFullYear();
            let age = currentYear - yearOfBirth;

            let cityMessage = "";
            if (city === "Kyiv" || city === "Washington" || city === "London") {
                let country = "";
                if (city === "Kyiv") {
                    country = "Ukraine";
                } else if (city === "Washington") {
                    country = "USA";
                } else if (city === "London") {
                    country = "UK";
                }
                cityMessage = "You live in the capital of " + country;
            } else {
                cityMessage = "You live in the city of " + city;
            }

            let sportsChampions = {
                "football": "Lionel Messi",
                "basketball": "LeBron James",
                "tennis": "Serena Williams"
            };

            let sportMessage = "";

            if (sportsChampions[favSport]) {
                let champion = sportsChampions[favSport];
                sportMessage = "Cool! Do you want to become " + champion + "?";
            } else {
                sportMessage = "Your favorite sport is " + favSport;
            }


            let fullMessage = "Your age: " + age + "\n" + cityMessage + (sportMessage !== "" ? "\n" + sportMessage : "");
            alert(fullMessage);
        }
    }
}
