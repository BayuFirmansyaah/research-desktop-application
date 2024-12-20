export function getSidebar () {
    const html = `
    <!-- [START] Sidebar -->
    <aside
        class="qn-sidebar offcanvas offcanvas-start position-fixed overflow-x-hidden overflow-y-auto start-0 bg-white border-end"
        data-bs-scroll="false" tabindex="-1" id="sidebar">
        <div class="offcanvas-body">
            <div class="d-flex flex-column pb-5">
                <ul class="nav nav-pills flex-column gap-2" style="--bs-nav-link-color: var(--bs-body-color);">
                    <li class="nav-item-title">
                        MENU LIST
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link bg-primary-subtle text-primary fw-medium" aria-current="page">Mahasiswa</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Kurikulum Prodi</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Prasyarat Mata Kuliah</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Ekivalensi Mata Kuliah</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Menu Lima</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Menu Enam</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Menu Tujuh</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Menu Delapan</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Menu Sembilan</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Menu Sepuluh</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Menu Sebelas</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Menu Duabelas</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Menu Tigabelas</a>
                    </li>
                </ul>
                <hr>
                <ul class="nav nav-pills flex-column gap-2" style="--bs-nav-link-color: var(--bs-body-color);">
                    <li class="nav-item-title">
                        MENU LIST
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Menu Empatbelas</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Menu Limabelas</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Menu Enambelas</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">Menu Tujuhbelas</a>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
    <div class="qn-sidebar-toggle position-fixed d-block d-xl-none mt-3">
        <button type="button" class="btn btn-light btn-sm rounded-3 border rounded-start-0 bg-white"
            data-bs-toggle="offcanvas" data-bs-target="#sidebar"
            aria-label="Toggle sidebar menu"
        >
            <i class="sym sym-chevron-right-double show"></i>
            <i class="sym sym-chevron-left-double"></i>
        </button>
    </div>
    <!--[END] Sidebar -->
    `;

    return html;
}
