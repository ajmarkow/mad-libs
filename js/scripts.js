$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();
    const adjectiveInput = $("input#adjective").val();

    let valArr = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput, adjectiveInput]
    let elementName = [person1, person2, animal, exclamation, verb, noun, adjective]

    elementName.forEach(function (word) {
      $("elementName").replaceWith("valArr")

    });

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
    $(".adjective").text(adjectiveInput);


    $("#story").show();


  });
});