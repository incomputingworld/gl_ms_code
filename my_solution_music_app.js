// Load the songs
const songList = document.getElementById("song-list")
const searchInput = document.getElementById("search-input")
const audio = document.getElementById("audio")
const songTitle = document.getElementById("song-title")
const songArtist = document.getElementById("song-artist")
const prevButton = document.getElementById("prev-button")
const playButton = document.getElementById("play-button")
const nextButton = document.getElementById("next-button")
const shuffleButton = document.getElementById("shuffle-button")


//add event listeners
searchInput.addEventListener('input', filterSongsList)
songList.addEventListener('click', playSelectedSong)
prevButton.addEventListener('click', playPreviousSong)
playButton.addEventListener('click', playThisSong)
nextButton.addEventListener('click', playNextSong)
shuffleButton.addEventListener('click', shuffleTheSongs)


let originalList = [...songs]
let currentSongIndex = 0
let isShuffled = false

function updatePlayList(playlist){
  songList.innerHTML = ''
  playlist.forEach(song => {
    let liElement = document.createElement("li");
    // console.log(Object.values(song))
    liElement.innerHTML = `${Object.values(song)[0]}`; // Display song title
    songList.appendChild(liElement);
  });    
}

function filterSongsList(){
  const searchTerm = searchInput.value.toLowerCase();
  const filterdSongs = originalList.filter((song) =>
    song.title.toLocaleLowerCase().includes(searchTerm)
  )
  updatePlayList(filterdSongs)
}

function playSelectedSong(event){
  if (event.target.tagName == 'LI'){
    // event.target - selected list item
    currentSongIndex = [...songList.children].indexOf(event.target)
    console.log(currentSongIndex)
    console.log(event.target.textContent)
    ////////// - correcting the error
    let selectedSong = songs.find(song => song.title === event.target.textContent)
    // console.log(selectedSong)
    playSong(isShuffled? songs: originalList)
    updateUI2(selectedSong.title, selectedSong["artist-name"])
  }
}

function playSong(playlist){
  audio.pause()
  audio.src = playlist[currentSongIndex]["url"]
  audio.play()
  updateUI(currentSongIndex, playlist)
}

function updateUI(index, playList){
  songTitle.textContent = playList[index]["title"]
  songArtist.textContent = playList[index]["artist-name"]
}

function playPreviousSong(){
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length 
  playSong(isShuffled? songs: originalList)
}

function playNextSong(){
  currentSongIndex = (currentSongIndex + 1) % songs.length 
  playSong(isShuffled? songs: originalList)
}

function playThisSong(){
  playSong(isShuffled? songs: originalList)
}

function shuffleTheSongs(event){
  let listOfSongs = null
  if (isShuffled == false){
    shuffleButton.textContent = "Click to Unshuffle"
    isShuffled = true
    listOfSongs = songs
    shuffleArray(listOfSongs)
  }
  else{
    shuffleButton.textContent = "Click to Shuffle"
    isShuffled = false
    listOfSongs = originalList
  }
  currentSongIndex = 0
  updatePlayList(listOfSongs)
  playSong(listOfSongs)

}

// Fisher-Yates Shuffle Algorithm:
function shuffleArray(array){
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements to shuffle the array
  }
}

function updateUI2(song, artist){
  songTitle.textContent = song
  songArtist.textContent = artist
}

updatePlayList(originalList)
updateUI(currentSongIndex, originalList)
