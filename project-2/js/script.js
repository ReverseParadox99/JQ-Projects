// $("#q1").click(function () {
//     $("#a1").fadeToggle("slow");
//     $("#arrow1-down, #arrow1-up").toggleClass("collapse");
// })

// $("#q2").click(function () {
//     $("#a2").fadeToggle("slow");
//     $("#arrow2-down, #arrow2-up").toggleClass("collapse");
// })

// $("#q3").click(function () {
//     $("#a3").fadeToggle("slow");
//     $("#arrow3-down, #arrow3-up").toggleClass("collapse");
// })

// ==========================================================
$(".question").click(function () {
    $(this).next().fadeToggle("slow"); // Get sibings
    $(this).children().toggleClass("collapse"); // Get childrens
})