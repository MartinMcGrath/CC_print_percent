<script>
const observer = new MutationObserver(() => {

    // check for completion
    if (document.querySelector(".status-box-complete")) {
        document.title = "Done";
        return;
    }

    // otherwise show percentage progress
    const el = document.querySelector('.task-detail div span:first-child');

    if (el) {
        const value = el.textContent.trim();

        if (!isNaN(value)) {
            document.title = `${value}%`;
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
});
</script>
