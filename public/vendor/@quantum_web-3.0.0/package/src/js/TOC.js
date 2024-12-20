class TOC {
    constructor() {
        this.qnSetMainHeight = this.qnSetMainHeight.bind(this);
        this.init();
    }

    qnSetMainHeight() {
        let qnHeaderOffset = 0;
        const qnHeaders = document.querySelectorAll(".qn-header");
        qnHeaders.forEach(qnHeader => {
            qnHeaderOffset += qnHeader.offsetHeight;
        });

        let qnHeaderStickyOffset = 0;
        const qnHeaderStickies = document.querySelectorAll(".qn-header.sticky-top");
        qnHeaderStickies.forEach(qnHeaderSticky => {
            qnHeaderStickyOffset += qnHeaderSticky.offsetHeight;
        });

        const qnTocCollapses = document.querySelectorAll(".qn-toc-collapse");
        qnTocCollapses.forEach(qnTocCollapse => {
            document.querySelectorAll('.qn-toc').forEach(qnToc => {
                qnToc.style.setProperty('width', '');
                qnToc.style.setProperty('width', `${qnTocCollapse.offsetWidth - 1}px`);
            });
        });

        document.body.style.setProperty('--qn-header-height', `${qnHeaderOffset}px`);
        document.body.style.setProperty('--qn-header-sticky-height', `${qnHeaderStickyOffset}px`);
    }

    init() {
        this.qnSetMainHeight();
        document.addEventListener('DOMContentLoaded', this.qnSetMainHeight);
        window.addEventListener('resize', this.qnSetMainHeight);
    }
}

// Inisialisasi class setelah DOM siap
document.addEventListener('DOMContentLoaded', () => {
    new TOC();
});

export default TOC;
