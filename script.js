let data = 0;

document.getElementById('counting').innerText = data;

function increase(){
    data = data + 1;
    document.getElementById('counting').innerText = data;

}
function decrease(){
    data = data -1
    document.getElementById('counting').innerText = data;
}