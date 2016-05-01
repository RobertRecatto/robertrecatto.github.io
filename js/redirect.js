//setting up simple redirects to work on browser

function redirect(file) {
    console.log(location.href);
    var ind = location.href.lastIndexOf('/')+1;
    var repStr = location.href.slice(ind);
    location.href=location.href.replace(repStr, file);
}