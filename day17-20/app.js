

var num = 0;
const fetchAdvice = () => {
  fetch(`https://api.adviceslip.com/advice/${++num}`)
    .then((response) => { return response.json(); })
    .then((data) => {
      console.log(data.slip);
      $(".advice").text(data.slip.advice)
      $(".adviceNo").text(data.slip.id)
    });
}
// fetchAdvice(1)
var myInterval = setInterval(fetchAdvice, 10000);

// $(".dice").click(() => fetchAdvice(5))



$(".dice").click(function () {
  clearInterval(myInterval)
  fetchAdvice()
  myInterval = setInterval(fetchAdvice, 10000);
});

$(".toggle").click(function () {
  $("body").toggleClass("light")
  // $(this).toggle(

  //   function () {
  //     $(this).html();
  //   },
  //   function () {
  //     $(this).html();
  //   }

  if ($("body").hasClass("light")) {
    $(".toggle").html(
      `
          Dark Mode:
          <i class="fa-solid fa-moon"></i>
          `
    )

  }
  else {
    $(".toggle").html(
      `
        Light Mode:
        <i class="fa-solid fa-sun"></i>
      `
    )

  }
  // )
})


// const auto = () => {
//   interval = setInterval(() => {
//     fetchAdvice(++num)
//   }, 10000);
// }