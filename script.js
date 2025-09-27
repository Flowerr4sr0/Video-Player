function loadVideo() {
  const input = document.getElementById("input"),
    video = document.getElementById("video"),
    fs = new FileReader;
  
  fs.onload = () => {
    // FIX: Set the video's src attribute directly to the Data URL
    video.src = fs.result;
    // Tell the video element to load the new source
    video.load(); 
  }
  
  // Read the file from the input as a Data URL
  fs.readAsDataURL(input.files[0]);
}
