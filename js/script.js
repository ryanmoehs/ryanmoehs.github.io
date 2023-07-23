const cacheKey = "Click";
if (typeof (Storage) !== "undefined") {

  // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
  if (localStorage.getItem(cacheKey) === "undefined") {
    // Jika belum maka akan atur dengan nilai awal yakni 0
    localStorage.setItem(cacheKey, 0);
  }

  const button = document.querySelector("#btnCount");
  const count = document.querySelector("#counter");
  button.addEventListener('click', function () {
    let number = localStorage.getItem(cacheKey);
    number++;
    localStorage.setItem(cacheKey, number);
    count.innerText = localStorage.getItem(cacheKey);
  });
} else {
  alert("Browser tidak mendukung Web Storage")
}