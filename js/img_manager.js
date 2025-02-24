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

// const arrImgData = [
//     {id:1, img:"img/001.jpg", alt:"image1"},
//     {id:2, img:"img/001.jpg", alt:"image2"},
//     {id:3, img:"img/001.jpg", alt:"image3"},
//     {id:4, img:"img/001.jpg", alt:"image4"},
//     {id:5, img:"img/001.jpg", alt:"image5"},
//     {id:6, img:"img/001.jpg", alt:"image6"},
//     {id:7, img:"img/001.jpg", alt:"image7"},
//     {id:8, img:"img/001.jpg", alt:"image8"},
//     {id:9, img:"img/001.jpg", alt:"image9"},
//     {id:10, img:"img/001.jpg", alt:"image10"},
//     {id:11, img:"img/001.jpg", alt:"image11"},
// ];


window.onload = loadImagesNew;

// function loadImages() {
//     const gallery = document.querySelector(".gallery-items");
//
//     const arrAlt = Object.keys(imgData);
//     const arrSrc = Object.values(imgData);
//
//
//     for (let i = 0; i < arrAlt.length; i++)
//     {
//         const alt = arrAlt[i];
//         const src = arrSrc[i];
//
//         const thumbnailDiv = document.createElement("div");
//         const thumbnailImg = document.createElement("img");
//         const popupDiv = document.createElement("div");
//         const closeBtn = document.createElement("span");
//         const popupImg = document.createElement("img");
//
//         thumbnailImg.alt = alt;
//         thumbnailImg.src = src;
//         thumbnailImg.title = alt;
//         thumbnailImg.classList.add("item");
//         popupImg.alt = alt;
//         popupImg.src = src;
//         popupImg.title = alt;
//         popupImg.classList.add("popup-content");
//         closeBtn.classList.add("close");
//         closeBtn.textContent = "X";
//
//         popupDiv.classList.add("popup");
//         popupDiv.appendChild(closeBtn);
//         popupDiv.appendChild(popupImg);
//
//         // 썸네일 클릭 시 팝업 띄우기
//         thumbnailImg.addEventListener("click", function () {
//             popupDiv.style.display = "flex";
//         });
//
//         // 닫기 버튼 클릭 시 팝업 닫기
//         closeBtn.addEventListener("click", function () {
//             popupDiv.style.display = "none";
//         });
//
//         // 팝업 영역 클릭 시 닫기 (이미지 제외)
//         popupDiv.addEventListener("click", function (event) {
//             if (event.target === popupDiv) {
//                 popupDiv.style.display = "none";
//             }
//         });
//
//         thumbnailDiv.appendChild(thumbnailImg);
//         thumbnailDiv.appendChild(popupDiv);
//         gallery.appendChild(thumbnailDiv);
//     }
// }

// LoadImage()의 for문을 for...of문으로 개선
function loadImagesNew() {
    const gallery = document.querySelector(".gallery-items"); // 갤러리 컨테이너 가져오기

    for (const [key, value] of Object.entries(imgData)) {
        const alt = key;
        const src = value;

        const thumbnailDiv = document.createElement("div");
        const thumbnailImg = document.createElement("img");
        const popupDiv = document.createElement("div");
        const closeBtn = document.createElement("span");
        const popupImg = document.createElement("img");

        thumbnailImg.alt = alt;
        thumbnailImg.src = src;
        thumbnailImg.title = alt;
        thumbnailImg.classList.add("item");
        popupImg.alt = alt;
        popupImg.src = src;
        popupImg.title = alt;
        popupImg.classList.add("popup-content");
        closeBtn.classList.add("close");
        closeBtn.textContent = "X";

        popupDiv.classList.add("popup");
        popupDiv.appendChild(closeBtn);
        popupDiv.appendChild(popupImg);

        // 썸네일 클릭 시 팝업 띄우기
        thumbnailImg.addEventListener("click", function () {
            popupDiv.style.display = "flex";
        });

        // 닫기 버튼 클릭 시 팝업 닫기
        closeBtn.addEventListener("click", function () {
            popupDiv.style.display = "none";
        });

        // 팝업 영역 클릭 시 닫기 (이미지 제외)
        popupDiv.addEventListener("click", function (event) {
            if (event.target === popupDiv) {
                popupDiv.style.display = "none";
            }
        });

        thumbnailDiv.appendChild(thumbnailImg);
        thumbnailDiv.appendChild(popupDiv);
        gallery.appendChild(thumbnailDiv);
    }
}

// progress bar
document.addEventListener("DOMContentLoaded", function () {
    const galleryArea = document.querySelector(".gallery-area"); // 갤러리 영역
    const progressBar = document.createElement("div"); // 프로그레스 바 요소 생성
    progressBar.classList.add("progress-bar");
    galleryArea.appendChild(progressBar);

    galleryArea.addEventListener("scroll", function () {
        const scrollTop = galleryArea.scrollTop; // 현재 스크롤 위치
        const scrollHeight = galleryArea.scrollHeight - galleryArea.clientHeight; // 전체 스크롤 가능한 높이
        const scrollPercent = (scrollTop / scrollHeight) * 100; // 스크롤 진행률 계산

        progressBar.style.width = scrollPercent + "%"; // 프로그레스 바 업데이트
    });
});
