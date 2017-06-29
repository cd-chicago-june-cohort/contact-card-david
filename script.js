$(document).ready(function(){

    var firstName;
    var lastName;
    var clickHere;
    var newCard;
    var info;
    var newDivForInfo;

    $('form').submit(function(event){

        event.preventDefault();

        firstName = $('#first').val();
        lastName = $('#last').val();
        info = $('#infoBox').val();
        
        clickHere = 'Click for desription!';

        newCard = '<div class="card"><p class="firstN">' + firstName + '&nbsp' + '</p><p class="lastN">' + lastName + '</p><br></b><p class="clickHere">' + clickHere + '</p></div>';
        newDivForInfo = '<div id="newInfoBox"></div>';
        $('#right').append(newCard);

        $(document).on('click', '.clickHere', function(){
            $('.firstN').text("");
            $('.lastN').text("");
            $('.clickHere').text("");

            $('.card').append(newDivForInfo);

            $('.card').text(info);
        })

    });

});