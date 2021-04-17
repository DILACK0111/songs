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
    SC.stream('/tracks/191214159', function (sound) {

        $('#start1').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop1').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/556842441', function (sound) {

        $('#start2').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop2').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/345819962', function (sound) {

        $('#start3').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop3').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    //english songs
    SC.stream('/tracks/649577930', function (sound) {

        $('#start5').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop5').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/179383705', function (sound) {

        $('#start6').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop6').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/932670262', function (sound) {

        $('#start7').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop7').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/230946251', function (sound) {

        $('#start8').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop8').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    //sinhala sogs
    SC.stream('/tracks/740939929', function (sound) {

        $('#start9').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop9').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/962591497', function (sound) {

        $('#start10').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop10').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/187091617', function (sound) {

        $('#start11').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop11').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/playlists/687687270', function (sound) {

        $('#start12').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop12').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });

    SC.stream('/tracks/202631934', function (sound) {

        $('#start13').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop13').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/581481765', function (sound) {

        $('#start14').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop14').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/184014668', function (sound) {

        $('#start15').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop15').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/483376425', function (sound) {

        $('#start16').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop16').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });

    //carousel songs
    SC.stream('tracks/191214159', function (sound) {

        $('#start17').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop17').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/120695315', function (sound) {

        $('#start18').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop18').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/121742038', function (sound) {

        $('#start19').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop19').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });

    // stop common 
    /*  SC.stream('/tracks/121742038','/tracks/120695315','/playlists/1196470111', function (sound) {
      $('.stop').click(function (e) {
          e.preventDefault();
          sound.stop();
      });
  });*/
    //
});
