# DuckDuckBang!
A Firefox addon that allows you to use !bangs in Google, Yahoo!, Bing, and Ecosia.
## What does it do?
This user script redirects any search you do (Google search, Yahoo! search, Ecosia, and Bing) that begins with `!` or `\` to DuckDuckGo. DuckDuckGo then processes these as bangs (`!`) and I'm feeling Ducky (`\`) submissions.

## How do I use it?
Example search terms:
- `!w eggs` - Goes to the Wikipedia page of eggs.
- `!ddg 1 + 1` - Searches DuckDuckGo for `1 + 1`.
- `\firefox` - Takes you to the first search result with the word 'Firefox' in it.

## How do I install it?
- If you use Firefox 48 or newer:
Just click [here](https://addons.mozilla.org/firefox/downloads/latest/duckduckbang1/addon-855726-latest.xpi) to install the WebExtension.

 - If you use Pale Moon or Firefox 4.0 → 42:
 Click [here](https://github.com/luk3yx/duckduckbang-palemoon/releases) and select the version you want to download. This extension downloads `duckduckbang.js` from the [WebExtension repository](https://github.com/luk3yx/duckduckbang) every time a web search page loads.
 
 - If you do not use any of the above:
 Install a user script manager, then click [here](https://gist.github.com/luk3yx/a8a3fa2d5a02ca9d55cfa3210d7a9ae1/raw/duckduckbang.user.js) to install the user script wrapper. You can view the source for this user script [here](https://gist.github.com/luk3yx/a8a3fa2d5a02ca9d55cfa3210d7a9ae1).