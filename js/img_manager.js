const imgData = {
    "image1": "img/001.jpg",
    "image2": "img/001.jpg",
    "image3": "img/001.jpg",
    "image4": "img/001.jpg",
    "image5": "img/001.jpg",
    "image6": "img/001.jpg",
    "image7": "img/001.jpg",
    "image8": "img/001.jpg",
    "image9": "img/001.jpg",
    "image10": "img/001.jpg",
    "image11": "img/001.jpg",
};

function loadImages() {
    const gallery = document.querySelector(".gallery-items");

    const arrAlt = Object.keys(imgData);
    const arrSrc = Object.values(imgData);
    const size = arrAlt.length;

    for (let i = 0; i < size; i++)
    {
        const alt = arrAlt[i];
        const src = arrSrc[i];

        const imgDiv = document.createElement("div"); // div tag
        const img = document.createElement("img"); // img tag
        img.alt = alt;
        img.src = src;
        img.title = alt;
        img.classList.add("item");

        imgDiv.appendChild(img);//아래에서 위로 올라가면서 append한다.
        gallery.appendChild(imgDiv);
    }
}

// LoadImage()의 for문을 for...of문으로 개선
function loadImagesNew() {
    const gallery = document.querySelector(".gallery-items"); // 갤러리 컨테이너 가져오기

    for (const [key, value] of Object.entries(imgData)) {
        const imgDiv = document.createElement("div"); // div 생성
        const img = document.createElement("img"); // img 태그 생성
        img.alt = key;
        img.src = value;
        img.title = key;
        img.classList.add("item");

        imgDiv.appendChild(img);
        gallery.appendChild(imgDiv);
    }
}

window.onload = loadImagesNew;

