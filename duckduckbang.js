//
// DuckDuckBang! Firefox Add-on
//
// Version 0.1.3
//
// The MIT License
//
// Copyright © 2019 by luk3yx
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

var duckduckbang = true;
(function() {

// Set the prefix(es) redirected to DuckDuckGo
// NOTE: They must be 1 character long.
// Type: Array
// Default: ["\\", "!"]
const prefixes = ["\\", "!"];

// Set the DuckDuckGo URL. The search term will be appended to the url.
// Type: String
// Default: "https://duckduckgo.com/?q="
const url = "https://duckduckgo.com/?q=";

// Possible query prefixes
var queries = ['&q', '?q', '?p', '#q'];

// Check a URL then redirect to it
async function go() {
    var i = -1;
    for (let query of queries) {
        i = window.location.href.indexOf(query + '=');
        if (i > 0)
            break;
    }

    if (i < 1)
        return;

    const search = decodeURIComponent(
        window.location.href.substr(i + 3).split('&')[0]
    );

    // Scan for !bangs / \searches at the start of the query
    if (prefixes.includes(search.substr(0, 1))) {
        window.location.href = url + search;
        return;
    }

    // Return now in case this is being run from a user script
    if (typeof browser === "undefined" || !browser.storage)
        return;

    // Scan for !bangs
    const options = await browser.storage.sync.get("allow_bangs_anywhere");
    if (options.allow_bangs_anywhere &&
            search.match(/^[^"]*(?:"[^"]*"[^"]*)*\!/)) {
        window.location.href = url + search;
    }
}

go();

window.addEventListener('hashchange', go);

})();
