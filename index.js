function youcantsayno() {
    document.getElementById('noButton').style.marginRight = "200px";
}

function youcantsayno2() {
    document.getElementById('noButton').style.marginRight = "-200px";
}

function change_content() {
    document.getElementById('text_change').innerHTML = "Hurrayyyy";
    const img = document.getElementById('images');
    img.src = 'https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif';

    document.getElementById('yesButton').style.visibility = "hidden";
    document.getElementById('noButton').style.visibility = "hidden";

    document.getElementById('bodys').style.backgroundColor = "pink";

}
