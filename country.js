class Country{
    constructor(name, lang, greeting, colors){
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    setColors(){
        
    }
}
var Algeria = new Country ("Algeria", "Arabic/Berber", "مرحبا بالعالم/*Not available on Google Translate*", ["green", "white", "red"]);
var Canada = new Country ("Canada", "English/French", "Hello World/Bonjour le monde", ["red", "white", "white"]);
var Ecuador = new Country ("Ecuador", "Spanish", "Hola Mundo", ["yellow", "blue", "red"]);
var SouthKorea = new Country ("Korea, South", "Korean", "안녕하세요 세계", ["white", "red", "blue"]);
var Romania = new Country ("Romania", "Romanian", "Salut Lume", ["blue", "yellow", "red"]);


function SwitchCountry(value){
    var input = $("#country option:selected").val();
    var country;

    if (input === "Algeria") {
        //set country to algeria
        country = Algeria;
    }
    else if (input === "Canada") {
        country = Canada;
    }
    else if (input === "Ecuador") {
        country = Ecuador;
    }
    else if (input === "SouthKorea") {
        country = SouthKorea;
    }
    else if (input === "Romania") {
        country = Romania;
    }
    else {
        //revert to baseline if something goes wrong
        country = null;
    }
    $("#Color1").css("background-color", country.colors[0]);
    $("#Color2").css("background-color", country.colors[1]);
    $("#Color3").css("background-color", country.colors[2]);
    $("#CountryName").text(country.name);
    $("#OfficialLanguage").text(country.lang);
    $("#HelloWorld").text(country.greeting);
}
