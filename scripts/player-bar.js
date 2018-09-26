

// what does player refer to? Is it the js file?// 

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
     
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     
// not sure where nextSongIndex comes from, not sure if previousSongIndex is correct //     
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex >= album.songs.length) { return; }
     
    const previousSong = album.songs[previousSongIndex];
     player.playPause(previousSong);
   });
}