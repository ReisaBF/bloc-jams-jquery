{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

   $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
   });

   $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const lastSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = lastSongIndex - 1;
    if (previousSongIndex >= album.songs.length) { return; }

    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
   });

   $('#time-control input').on('input', function (event) {
     player.skipTo(event.target.value);
   });

   setInterval( () => {
     if (player.playState !== 'playing') { return; }
     const currentTime = player.getTime();
     const duration = player.getDuration();
     const percent = (currentTime / duration) * 100;
     $('#time-control .current-time').text( currentTime );
     $('#time-control input').val(percent);
   }, 1000);

   $('#volume-control input').on('input', function (event) {
     player.setVolume(event.target.value);
   });

   setInterval( () => {
     if (player.playState !== 'playing') { return; }
     const currentVolume = player.getVolume();
     const total = player.getDuration();
     const percent = (currentVolume / total) * 100;
     $('#volume-control .current-volume').text( currentVolume );
     $('#volume-control input').val(percent);
   }, 1000);
}
