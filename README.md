This is a cheap hack to display the print progress in the title of the Centuri Carbon web interface.

![Belold... printing progress](/images/example.png)

A [Bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) is provided below, so no changes need to occur on the printer, along with a replacement page so that you don't need to click the Bookmarklet each time you open the web interface.

To install the Bookmarklet create a bookmark in your toolbar and paste the following as the URL:
```
javascript:(function()%7Bconst%20observer%20%3D%20new%20MutationObserver(()%20%3D%3E%20%7B%0A%0A%20%20%2F%2F%20check%20for%20completion%0A%20%20if%20(document.querySelector(%22.status-box-complete%22))%20%7B%0A%20%20%20%20document.title%20%3D%20%22Done%22%3B%0A%20%20%20%20return%3B%0A%20%20%7D%0A%0A%20%20%2F%2F%20otherwise%20show%20percentage%20progress%0A%20%20const%20el%20%3D%20document.querySelector('.task-detail%20div%20span%3Afirst-child')%3B%0A%0A%20%20if%20(el)%20%7B%0A%20%20%20%20const%20value%20%3D%20el.textContent.trim()%3B%0A%0A%20%20%20%20if%20(!isNaN(value))%20%7B%0A%20%20%20%20%20%20document.title%20%3D%20%60%24%7Bvalue%7D%25%60%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%3B%0A%0Aobserver.observe(document.body%2C%20%7B%0A%20%20childList%3A%20true%2C%0A%20%20subtree%3A%20true%2C%0A%20%20characterData%3A%20true%0A%7D)%3B%7D)()%3B
```

Each time you visit the page click the Bookmarklet to activate it. Alternativly on the printer replace /app/resources/www/index.html with the index_patches.html file within the html folder.   
