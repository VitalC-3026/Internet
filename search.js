let btn = document.getElementById("search");
let text = document.getElementById("content");
let res = document.getElementById("result");
let main = document.getElementById("main");
let open = false;

btn.addEventListener("click",function(){
  let keyword = text.value;
  btn.value = "Searching...";
  main.style.display = "block";
  res.innerHTML = "<p> Wait... </p>";
  chrome.extension.sendRequest({key: keyword}, function(response) {
    res.innerHTML = "";
    keyword = keyword + "";
    for (let i=0; i < response.length; i++ ) {
      let url = response[i].url + "";
      let next = "<a target='blank' href=" + response[i].url + " >" + response[i].title + "</a>";
      res.innerHTML += next;
      if (!open && (url.indexOf("d.weibo.com") > -1 || keyword.indexOf("微博") > -1)) {
        window.open("https://d.weibo.com/231650");
      }
    };
    btn.value = "Search";
  });
})
