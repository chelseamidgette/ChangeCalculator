$(document).ready(function() {
    $('button').click(function() {
        var amountDue = $('#amountDue').val();
        var amountPaid = $('#amountPaid').val();

        amountDue *= 100;
        amountPaid *= 100;

        //calculate total change
        var change = amountPaid - amountDue;

        // calculate change - dollars
        var dollars = Math.floor(change / 100);
        change = change % 100;

        //calculate change - quarters
        var quarters = Math.floor(change / 25);
        change = change % 25;

        //calculate change - dimes
        var dimes = Math.floor(change / 10);
        change = change % 10;

        //calculate change - nickels
        var nickels = Math.floor(change / 5);
        change = change % 5;

        //calculate change - pennies
        var pennies = change;

        //Output data to HTML
        $('#dollars').text(dollars);
        $('#quarters').text(quarters);
        $('#dimes').text(dimes);
        $('#nickels').text(nickels);
        $('#pennies').text(pennies);
    });
})
