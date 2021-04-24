SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function () {

    SC.stream('/tracks/168167974', function (sound) {

        $('#start').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/649577930', function (sound) {

        $('#start1').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop1').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/740939929', function (sound) {

        $('#start2').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop2').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/187091617', function (sound) {

        $('#start3').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop3').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
});
