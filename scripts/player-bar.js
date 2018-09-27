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
    
    $('#time-control input').on('input', function (event) {
        player.skipTo(event.target.value);
   });
    
   // the two outtermost lines tell the control's range input to update every 1000 milliseconds (every second)//    
   setInterval( () => {
    //execute a return statement only if the song is playing//   
    if (player.playState !== 'playing') { return; }  
    //get part and whole and calculate percentage//   
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;  
    //display current time// 
    $('#time-control .current-time').text( currentTime ); 
    //set the input's value to percent//  
    $('#time-control input').val(percent);
    //display total time//
    $('#time-control .total-time').text( duration );
   }, 1000);
    
    
    $('#volume-control input').on('input', function (event) {
        player.setVolume(event.target.value);
   });

}