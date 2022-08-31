let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hue_rotate = document.getElementById('hue_rotate');


let upload = document.getElementById('upload');
let download = document.getElementById('download');
let reset = document.querySelector('span');


let img = document.getElementById('img');
let imgBox = document.querySelector('.imgBox');
window.onload = function() {
    download.style.display = 'none';
    reset.style.display = 'none';
    imgBox.style.display = 'none';
}
upload.onchange = function() {
    resetValues();
    download.style.display = 'block';
    reset.style.display = 'block';
    imgBox.style.display = 'block';
    let file = new FileReader();
    // any file i select put into array so the image we select is the index of 0
    // so we shoud read only the selected image from index 0 as shown below
    file.readAsDataURL(upload.files[0]);
    // after we read image we should to appear it
    // so we should first make image to load after load show it
    file.onload = function() {
        img.src = file.result;
    }
}

let filters = document.querySelectorAll('ul li input');
filters.forEach(filter => {
    filter.addEventListener('input', function() {
        img.style.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hue_rotate.value}deg)
    `
    })
})

function resetValues() {
    img.style.filter = 'none';
    saturate.value = 100;
    contrast.value = 100;
    brightness.value = 100;
    grayscale.value = 0;
    sepia.value = 0;
    hue_rotate.value = 0;
    blur.value = 0;
}