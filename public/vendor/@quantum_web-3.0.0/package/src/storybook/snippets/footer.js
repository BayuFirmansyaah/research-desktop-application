import logoSevima from "../assets/images/logo/sevima-default.webp";

export function getFooter(
    variant = 'Default',
    borderless = false,
    hideOnMobile = false
) {
    const variantDefault = `
    <footer class="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center py-1 py-md-3">
        <a href="#" class="d-none d-md-block me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <img src="${logoSevima}" class="w-auto" height="18"
                alt="Logo SEVIMA">
        </a>
        <span class="mb-0 fs-7 text-body-tertiary">&copy; 2005-2023 SEVIMA. All Rights Reserved</span>
    </footer>
    `;
    const variantAlt = `
    <footer class="d-flex flex-column-reverse flex-lg-row flex-wrap justify-content-center justify-content-lg-between align-items-center py-1 py-md-3 gap-3">
        <div class="d-flex gap-2 align-items-center">
            <a href="#" class="d-none d-md-block mb-md-0 text-body-secondary text-decoration-none lh-1">
                <img src="${logoSevima}" class="w-auto" height="18"
                    alt="Logo SEVIMA">
            </a>
            <span class="mb-0 fs-7 text-body-tertiary">&copy; 2005-2023 SEVIMA. All Rights Reserved</span>
        </div>
        <div class="d-flex gap-2 align-items-center mt-2 mt-lg-0">
            ${variant == 'Alt 2' ? `
            <a href="#" class="link fs-7 fw-medium">Term & Condition</a>
            <span class="d-block bg-secondary rounded-circle" style="width: 3px; height: 3px;"></span>
            <a href="#" class="link fs-7 fw-medium">Contact Us</a>
            <span class="d-block bg-secondary rounded-circle" style="width: 3px; height: 3px;"></span>
            `
            : ''}
            <div class="btn-group">
                <button type="button" class="btn btn-outline-sec ondary border-0 dropdown-toggle d-flex gap-1 p-0 rounded-1 fs-7 fw-semibold" data-bs-toggle="dropdown" aria-expanded="false" style="--bs-btn-hover-bg: var(--bs-gray-100); --bs-btn-active-bg: var(--bs-btn-hover-bg);">
                    <i class="sym sym-globe solid"></i> Indonesia
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Indonesia</a></li>
                    <li><a class="dropdown-item" href="#">English</a></li>
                    <li><a class="dropdown-item" href="#">Japanese</a></li>
                </ul>
            </div>
        </div>
    </footer>
    `
    const html = `
    <!-- [START] Footer -->
    <div class="container-fluid mt-auto bg-white ${hideOnMobile ? "d-none d-md-block" : ""} ${borderless ? "" : "border-top"}">
    ${variant == 'Default' || variant == '' ?  variantDefault : variantAlt}
    </div>
    <!-- [END] Footer -->
    `;

    return html;
}
