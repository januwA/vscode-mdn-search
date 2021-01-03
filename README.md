# mdn-search

![](./images/2021-01-03-15-28-53.png)

1. Select text
2. right click
3. Left click "mdn search"

The above picture will use a browser to open "https://developer.mozilla.org/en-US/search?q=alert"

If you want to open "https://developer.mozilla.org/zh-CN/search?q=alert", then you need to add in "settings.json"
  ```json
  {
    "mdnSearch.url": "https://developer.mozilla.org/zh-CN/search?q=${q}"
  }
  ```


  ## publish

  ```sh
  $ npm run vscode:prepublish
  $ vsce publish
  ```
