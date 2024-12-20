import * as ModalProfile from './modal-profile';

export function getBottomNavForm(iswithToC = false, stepper = false) {
    return `
    ${stepper ? `
    <!-- [START] Advanced Form Action Mobile -->
    <div class="d-block d-md-none rounded-top-4 shadow-lg sticky-bottom">
        <div class="w-100 d-flex bg-white gap-2 p-3">
            <!-- [START REDUNDANT CONTENT] Form Submit Action (fmt. 2) -->
            <!-- [START REDUNDANT BUTTON] -->
            <button type="button" class="btn w-100 btn-light d-none d-sm-block">
                Sebelumnya
            </button>
            <button type="button" class="btn btn-icon btn-light d-block d-sm-none" aria-label="Sebelumnya">
                <i class="sym sym-chevron-left"></i>
            </button>
            <!-- [END REDUNDANT BUTTON] -->
            <button type="submit" class="btn w-100 btn-primary" form="advancedForm">
                Selanjutnya
            </button>
            <!-- [END REDUNDANT CONTENT] Form Submit Action (fmt. 2) -->
        </div>
    </div>
    <!-- [END] Advanced Form Action Mobile -->
    ` : `
    <!-- [START] Advanced Form Action Mobile -->
    <div class="d-block d-md-none rounded-top-4 shadow-lg sticky-bottom">
        ${iswithToC ? `
        <!-- [START REDUNDANT CONTENT] Form ToC (fmt. 2) -->
        <div class="collapse w-100 border-bottom" id="tocMobile">
            <div class="qn-toc p-3 bg-white rounded-top-4">
                <div class="d-flex gap-2 justify-content-between">
                    <h6 class="mb-3">Table of Content</h6>
                    <button
                        type="button" class="btn-close" aria-label="Close Table of Content"
                        data-bs-toggle="collapse" data-bs-target="#tocMobile">
                    </button>
                </div>
                <ul class="list-unstyled m-0 ps-3 d-flex flex-column gap-1 overflow-hidden">
                    <li>
                        <a href="#sectionFormDataMahasiswa"
                            class="w-100 text-reset text-decoration-none"
                        >
                            <span
                                class="qn-toc-item position-relative d-block rounded-2 p-2"
                                data-bs-toggle="collapse" data-bs-target="#tocMobile"
                            >
                                Data Mahasiswa
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#sectionFormInformasiUmum"
                            class="w-100 text-reset text-decoration-none"
                        >
                            <span
                                class="qn-toc-item position-relative d-block rounded-2 p-2"
                                data-bs-toggle="collapse" data-bs-target="#tocMobile"
                            >
                                Informasi Umum
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#section-form-domisili"
                            class="w-100 text-reset text-decoration-none"
                        >
                            <span
                                class="qn-toc-item position-relative d-block rounded-2 p-2"
                                data-bs-toggle="collapse" data-bs-target="#tocMobile"
                            >
                                Domisili atau Wilayah
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#section-form-data-ortu"
                            class="w-100 text-reset text-decoration-none"
                        >
                            <span
                                class="qn-toc-item position-relative d-block rounded-2 p-2"
                                data-bs-toggle="collapse" data-bs-target="#tocMobile"
                            >
                                Data Orang Tua
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#sectionFormDataWali"
                            class="w-100 text-reset text-decoration-none"
                        >
                            <span
                                class="qn-toc-item position-relative d-block rounded-2 p-2"
                                data-bs-toggle="collapse" data-bs-target="#tocMobile"
                            >
                                Data Wali
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#section-form-pendidikan-terakhir"
                            class="w-100 text-reset text-decoration-none"
                        >
                            <span
                                class="qn-toc-item position-relative d-block rounded-2 p-2"
                                data-bs-toggle="collapse" data-bs-target="#tocMobile"
                            >
                                Pendidikan Terakhir
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#section-form-kebutuhan-khusus"
                            class="w-100 text-reset text-decoration-none"
                        >
                            <span
                                class="qn-toc-item position-relative d-block rounded-2 p-2"
                                data-bs-toggle="collapse" data-bs-target="#tocMobile"
                            >
                                Kebutuhan Khusus
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#sectionFormLainnya"
                            class="w-100 text-reset text-decoration-none"
                        >
                            <span
                                class="qn-toc-item position-relative d-block rounded-2 p-2"
                                data-bs-toggle="collapse" data-bs-target="#tocMobile"
                            >
                                Lainnya
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- [END REDUNDANT CONTENT] Form ToC (fmt. 2) -->
        ` : ''}
        <div class="w-100 d-flex bg-white gap-2 p-3">
            ${iswithToC ? `
            <button type="button" class="btn btn-icon btn-light" aria-label="Table of Content" data-bs-toggle="collapse" data-bs-target="#tocMobile" aria-expanded="false" aria-controls="tocMobile">
                <i class="sym sym-list"></i>
            </button>
            ` : ''}
            <!-- [START REDUNDANT CONTENT] Form Submit Action (fmt. 2) -->
            <button type="submit" class="btn w-100 btn-primary" form="advancedForm">
                Simpan
            </button>
            <!-- [END REDUNDANT CONTENT] Form Submit Action (fmt. 2) -->
        </div>
    </div>
    <!-- [END] Advanced Form Action Mobile -->
    `}
    `
}

export function getBottomNav() {
    return `
    <!-- [START] Mobile Navigation -->
    <div class="d-block d-md-none rounded-top-4 shadow-lg sticky-bottom">
        <!-- [START SEMI REDUNDANT CONTENT] Navigation (fmt. 2) -->
        <div class="d-flex bg-white p-2">
            <a href="#" class="qn-btn-nav-mobile w-100 d-flex flex-column align-items-center p-2 gap-2 text-decoration-none text-black active">
                <i class="sym sym-home-line fs-5"></i>
                Beranda
            </a>
            <a href="#" class="qn-btn-nav-mobile w-100 d-flex flex-column align-items-center p-2 gap-2 text-decoration-none text-black">
                <i class="sym sym-plus-square fs-5"></i>
                {Optional}
            </a>
            <a href="#" class="qn-btn-nav-mobile w-100 d-flex flex-column align-items-center p-2 gap-2 text-decoration-none text-black">
                <i class="sym sym-bell fs-5"></i>
                Notifikasi
            </a>
            <a href="#avatarModal" data-bs-toggle="modal" class="qn-btn-nav-mobile w-100 d-flex flex-column align-items-center p-2 gap-2 text-decoration-none text-black">
                <i class="sym sym-user-circle-solid fs-5"></i>
                Profile
            </a>
            <a href="#" role="button" class="qn-btn-nav-mobile w-100 d-flex flex-column align-items-center p-2 gap-2 text-decoration-none text-black" data-bs-toggle="offcanvas" data-bs-target="#navbarMobileNav" aria-expanded="false" aria-controls="navbarMobileNav">
                <i class="sym sym-menu fs-5"></i>
                Menu
            </a>
        </div>
        <!-- [START END REDUNDANT CONTENT] Navigation (fmt. 2) -->
        <!-- [START SEMI REDUNDANT CONTENT] Navigation (fmt. 3) -->
        <div
            class="offcanvas offcanvas-end position-fixed overflow-x-hidden overflow-y-auto bg-white border-end"
            data-bs-scroll="false" tabindex="-1" id="navbarMobileNav">
            <div class="offcanvas-body">
                <nav class="navbar navbar-expand-lg p-0 bg-white">
                    <ul class="w-100 navbar-nav py-1 gap-1">
                        <li class="nav-item-title fw-semibold d-flex gap-2 justify-content-between">
                            MENU
                            <button
                                type="button" class="btn btn-close btn-sm" aria-label="Close mobile nav"
                                data-bs-toggle="offcanvas" data-bs-target="#navbarMobileNav">
                            </button>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Portal
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">List</a></li>
                                <li><a class="dropdown-item" href="#">Detail</a></li>
                                <li><a class="dropdown-item" href="#">List (with Sidebar)</a></li>
                                <li><a class="dropdown-item" href="#">Detail (with Sidebar)</a></li>
                                <li><a class="dropdown-item" href="#">List Mobile Nav</a></li>
                                <li><a class="dropdown-item" href="#">Form</a></li>
                                <li><a class="dropdown-item" href="#">Advanced Form</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Sign In</a></li>
                                <li><a class="dropdown-item" href="#">Sign Up</a></li>
                                <li><a class="dropdown-item" href="#">Advanced Sign In</a></li>
                                <li><a class="dropdown-item" href="#">Advanced Sign Up</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Select Module</a></li>
                                <li><a class="dropdown-item" href="#">Select Role</a></li>
                                <li><a class="dropdown-item" href="#">Handler</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Perkuliahan
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Kemahasiswaan
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Kampus Merdeka
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Data Pelengkap
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Laporan
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Pengaturan
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- [END SEMI REDUNDANT CONTENT] Navigation (fmt. 3) -->
    </div>
    <!-- [END] Mobile Navigation -->


    ${ModalProfile.getModalProfile()}
    `
}
