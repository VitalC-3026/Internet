chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    chrome.bookmarks.search(request.key,function(marksArray) {
      sendResponse(marksArray);
    })
  });