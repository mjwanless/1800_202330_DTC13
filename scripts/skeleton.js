//---------------------------------------------------
// This function loads the parts of your skeleton
// (navbar, footer, and other things) into html doc.
//---------------------------------------------------
function loadSkeleton() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            //if the pointer to "user" object is not null, then someone is logged in
            // User is signed in.
            // Do something for the user here.
            $("#navbar-placeholder").load("./text/nav_after_login.html");
            $("#footer-placeholder").load("./text/footer.html");
        } else {
            // No user is signed in.
            $("#navbar-placeholder").load("./text/nav_before_login.html");
            $("#footer-placeholder").load("./text/footer.html");
        }
    });
}
loadSkeleton(); //invoke the function
