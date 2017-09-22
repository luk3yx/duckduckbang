// DuckDuckGo Bang Redirector
// Version 0.1.1
// 
// The MIT License
// 
// Copyright © 2017 by luk3yx
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// 

duckduckbang = {
    
    // Set the prefix(es) redirected to DuckDuckGo
    // NOTE: They must be 1 character long.
    // Type: Array
    // Default: ["\\", "!"]
    prefixes: ["\\", "!"],
    
    // Set the DuckDuckGo URL. The search term will be appended to the url.
    // Type: String
    // Default: "https://duckduckgo.com/?q="
    url: "https://duckduckgo.com/?q=",
    
}

// Other definitions
// Don't change these unless you know what you are doing!

duckduckbang.go = function() {
    duckduckbang.i = window.location.href.indexOf("&q=");
    if (duckduckbang.i < 0) {
        duckduckbang.i = window.location.href.indexOf("?q=");
        if (duckduckbang.i < 0) {
            duckduckbang.i = window.location.href.indexOf("?p=");
            if (duckduckbang.i < 0) {
                duckduckbang.i = window.location.href.indexOf("#q=");
            }
        }
    }
    
    duckduckbang.str = window.location.href.substr(duckduckbang.i + 3);
    duckduckbang.i = duckduckbang.str.indexOf("&");
    if (duckduckbang.i > 0) {
        duckduckbang.str = duckduckbang.str.substr(0, duckduckbang.i);
    }
    duckduckbang.prefix = decodeURIComponent(duckduckbang.str).substr(0, 1);
    
    if (duckduckbang.prefixes.includes(duckduckbang.prefix)) {
        window.location.href = duckduckbang.url + duckduckbang.str;
    }
}

duckduckbang.go();

window.onhashchange = duckduckbang.go;
