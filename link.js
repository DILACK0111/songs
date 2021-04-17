SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function () {

    SC.stream('/playlists/2583573', function (sound) {

        $('#start').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/playlists/2583573', function (sound) {

        $('#start1').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop1').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/playlists/2583573', function (sound) {

        $('#start2').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop2').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/playlists/2583573', function (sound) {

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
