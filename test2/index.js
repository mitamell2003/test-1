$(document).ready(function () {
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    $(document).on("click", "#random", function () {
        const randomColor = getRandomColor();
        // $("#randomColor").css("background", "");
        $("#randomColor").css("background-color", randomColor);
        $("#hexColor").val(randomColor);
    });

    $(document).on("click", "#copy, #hexColor", function () {
        const hex = $("#hexColor").val();
        if (hex === "") {
            alert("Không có hex color trong input");
        } else {
            $("#hexColor").select();
            document.execCommand("copy");
            alert("Đã copy");
        }
    });

    const startColor = $("#startColor");
    const endColor = $("#endColor");

    const updateGradient = () => {
        $("body").css("background", `linear-gradient(to right, ${startColor.val()}, ${endColor.val()})`);
    };

    startColor.on("input", updateGradient);
    endColor.on("input", updateGradient);
});