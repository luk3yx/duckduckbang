window.addEventListener("load", async () => {
    let timeoutId;
    const elem = document.getElementById("allow-bangs-anywhere");
    const options = await browser.storage.sync.get("allow_bangs_anywhere");
    elem.checked = options.allow_bangs_anywhere;
    const msg = document.getElementById("msg");
    elem.addEventListener("change", async () => {
        if (elem.checked) {
            await browser.storage.sync.set({allow_bangs_anywhere: true});
            msg.textContent = "Enabled.";
        } else {
            await browser.storage.sync.remove("allow_bangs_anywhere");
            msg.textContent = "Disabled.";
        }
        msg.style.opacity = "1";
        if (timeoutId)
            window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            msg.style.opacity = "0";
        }, 1500);
    });
});
