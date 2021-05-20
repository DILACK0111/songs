SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function () {

    SC.stream('/tracks/62638492', function (sound) {

        $('#start').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/62639241', function (sound) {

        $('#start1').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop1').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/62639788', function (sound) {

        $('#start2').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop2').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/62638826', function (sound) {

        $('#start3').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop3').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/19369905', function (sound) {

        $('#start4').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop4').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/27382031', function (sound) {

        $('#start5').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop5').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });

    SC.stream('/tracks/340549856', function (sound) {

        $('#start6').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop6').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/173016930', function (sound) {

        $('#start7').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop7').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });

    SC.stream('/tracks/34151734', function (sound) {

        $('#start8').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop8').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });

    SC.stream('/tracks/284005548', function (sound) {

        $('#start9').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop9').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });

    SC.stream('/tracks/321390804', function (sound) {

        $('#start10').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop10').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });

    SC.stream('/tracks/284005568', function (sound) {

        $('#start11').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop11').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });

});
