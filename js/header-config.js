document.addEventListener("DOMContentLoaded", function() {
    new FinisherHeader({
        "count": 10,
        "size": {
            "min": 1300,
            "max": 1500,
            "pulse": 0
        },
        "speed": {
            "x": {
                "min": 0.1,
                "max": 0.6
            },
            "y": {
                "min": 0.1,
                "max": 0.6
            }
        },
        "colors": {
            "background": "#818181",
            "particles": [
                "#a4a4a4",
                "#000000",
                "#5f5f5f",
                "#000000",
                "#878789"
            ]
        },
        "blending": "overlay",
        "opacity": {
            "center": 0.5,
            "edge": 0.05
        },
        "skew": 0,
        "shapes": [
            "c"
        ]
    });
});