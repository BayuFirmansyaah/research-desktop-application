class Breadcrumb {
    constructor() {
        this.qnSetStateFormBreadcrumb = this.qnSetStateFormBreadcrumb.bind(this);
        this.init();
    }

    qnSetStateFormBreadcrumb() {
        const qnFormBreadcrumbs = document.querySelectorAll('.qn-form-breadcrumb');
        qnFormBreadcrumbs.forEach(qnFormBreadcrumb => {
            const bsBreakpoint = parseInt(getComputedStyle(document.body).getPropertyValue('--bs-breakpoint-xl') || 0);
            if (window.innerWidth > bsBreakpoint) {
                let qnFormHeaderBreadcrumbOffset = parseInt(getComputedStyle(qnFormBreadcrumb).getPropertyValue('--qn-form-breadcrumb-tolerance') || 0);
                let qnHeaderHeight = parseInt(getComputedStyle(document.body).getPropertyValue('--qn-header-height') || 0);
                if (window.scrollY > qnHeaderHeight + qnFormHeaderBreadcrumbOffset) {
                    qnFormBreadcrumb.classList.remove('opacity-0');
                } else {
                    qnFormBreadcrumb.classList.add('opacity-0');
                }
            } else {
                qnFormBreadcrumb.classList.remove('opacity-0');
            }
        });
    }

    init() {
        this.qnSetStateFormBreadcrumb();
        document.addEventListener('DOMContentLoaded', this.qnSetStateFormBreadcrumb);
        window.addEventListener('resize', this.qnSetStateFormBreadcrumb);
        window.addEventListener('scroll', this.qnSetStateFormBreadcrumb);
    }
}

// Initialize the class after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Breadcrumb();
});

export default Breadcrumb;
