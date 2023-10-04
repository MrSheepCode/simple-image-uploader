let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function() {
    console.log("File selected:", inputFile.files[0]); // Debugging statement
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}