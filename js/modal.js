$(document).ready(function() {
    $('#myModal').on('hidden.bs.modal', function () {
        $('#nom-prenom').val('');
        $('#email').val('');
        $('#TypeEvenement').val('');
        $('#detail').val('');

        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});