document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("#video");
    const text = document.querySelector(".video-text");

    video.addEventListener("ended", () => {
        text.style.opacity = "1";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("video");
    const animatedElements = document.querySelectorAll("[data-aos]");

    animatedElements.forEach((element, index) => {
        element.addEventListener("animationend", () => {
            if (videos[index]) {
                videos[index].play();
                console.log(`🎥 Video ${index + 1} iniciado después de la animación.`);
            }
        });
    });
});