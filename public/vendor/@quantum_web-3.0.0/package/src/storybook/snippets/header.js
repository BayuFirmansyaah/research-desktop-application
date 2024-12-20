import * as ModalProfile from './modal-profile';

import logoKampus from '../assets/images/example/logo-kampus.webp';
import photoProfile from '../assets/images/example/profile-picture.webp';

export function getHeader (
    subheaderVariant = '',
    isWithBottomNav = false
) {

    let subHeader = '';

    const onForm = `
    <header class="qn-header z-1 sticky-top p-md-3 py-2 py-md-2 border-bottom shadow-sm bg-white">
        <div class="container-fluid d-grid d-flex justify-content-between align-items-center position-relative">
            <!-- [START REDUNDANT BUTTON] -->
            <a href="#" class="btn btn-light gap-2 d-none d-md-flex" role="button">
                <i class="sym sym-arrow-narrow-left"></i>Kembali
            </a>
            <a href="#" class="btn btn-icon btn-light d-block d-md-none" role="button">
                <i class="sym sym-arrow-narrow-left"></i>
            </a>
            <!-- [END REDUNDANT BUTTON] -->
            <!-- [START REDUNDANT CONTENT] Form Breadcrumb Navigation (fmt. 1) -->
            <nav class="position-absolute top-50 start-50 translate-middle" aria-label="breadcrumb">
                <ol class="qn-form-breadcrumb breadcrumb m-0 d-none d-md-flex opacity-0">
                    <li class="breadcrumb-item"><a href="#">Mahasiswa</a></li>
                    <li class="breadcrumb-item active fw-bold" aria-current="page">Tambah</li>
                </ol>
                <ol class="breadcrumb m-0 d-flex d-md-none">
                    <li class="breadcrumb-item active fw-bold" aria-current="page">Tambah Mahasiswa</li>
                </ol>
            </nav>
            <!-- [END REDUNDANT CONTENT] Form Breadcrumb Navigation (fmt. 1) -->
            <div class="d-flex gap-3 align-items-center">
                <!-- [START REDUNDANT CONTENT] Form Saved Label (fmt. 1) -->
                <span class="d-none d-xl-flex gap-1 text-body-tertiary">
                    <i class="sym sym-check"></i>
                    Tersimpan 2 menit yang lalu
                </span>
                <!-- [END REDUNDANT CONTENT] Form Saved Label (fmt. 1) -->
                <!-- [START REDUNDANT CONTENT] Form Saved Label (fmt. 2) -->
                <span class="d-flex d-xl-none gap-1 text-body-tertiary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tersimpan 2 menit yang lalu">
                    <i class="sym sym-check"></i>
                </span>
                <!-- [END REDUNDANT CONTENT] Form Saved Label (fmt. 2) -->

                <!-- [START REDUNDANT CONTENT] Form Submit Action (fmt. 1) -->
                <button type="submit" class="d-none d-md-block btn btn-primary" form="advancedForm">
                    Simpan
                </button>
                <!-- [END REDUNDANT CONTENT] Form Submit Action (fmt. 1) -->
            </div>
        </div>
    </header>
    `
    const onFormAlt= `
    <header class="qn-header z-1 sticky-top p-md-3 py-3 px-xl-5 bg-white">
        <div class="container-fluid d-grid d-flex justify-content-between align-items-center position-relative">
            <div class="d-flex align-items-center gap-3">
                <a href="#" class="btn btn-close" aria-label="Kembali ke halaman list"></a>
                <span class="m-0 fs-6 fw-medium">Buat Pengajuan Proposal</span>
            </div>
            <div class="d-flex gap-2 align-items-center">
                <!-- [START REDUNDANT CONTENT] Form Submit Action (fmt. 1) -->
                <button type="submit" class="d-none d-md-block btn btn-primary" form="advancedForm">
                    Simpan Data
                </button>
                <!-- [END REDUNDANT CONTENT] Form Submit Action (fmt. 1) -->
            </div>
        </div>
    </header>
    `
    const onFormAltStepper = `
    <header class="qn-header z-1 sticky-top bg-white">
        <div class="p-md-3 py-3 px-xl-5">
            <div class="container-fluid d-grid d-flex justify-content-between align-items-center position-relative">
                <div class="d-flex align-items-center gap-3">
                    <a href="#" class="btn btn-close" aria-label="Kembali ke halaman list"></a>
                    <span class="m-0 fs-6 fw-medium d-none d-lg-block">Buat Pengajuan Proposal</span>
                </div>
                <nav class="position-absolute top-50 start-50 translate-middle" aria-label="breadcrumb">
                    <span id="formStep1" class="d-inline-flex align-items-center fs-6 fw-medium text-nowrap d-none">
                        Step 1:
                        <i class="sym sym-file-check fs-4 ms-1 text-primary"></i>
                        Overview Proposal
                    </span>
                    <span id="formStep2" class="d-inline-flex align-items-center fs-6 fw-medium text-nowrap d-none">
                        Step 2:
                        <i class="sym sym-file-check fs-4 ms-1 text-primary"></i>
                        Overview Proposal
                    </span>
                    <span id="formStep3" class="d-inline-flex align-items-center fs-6 fw-medium text-nowrap">
                        Step 3:
                        <i class="sym sym-file-check fs-4 ms-1 text-primary"></i>
                        Overview Proposal
                    </span>
                    <span id="formStep4" class="d-inline-flex align-items-center fs-6 fw-medium text-nowrap d-none">
                        Step 4:
                        <i class="sym sym-file-check fs-4 ms-1 text-primary"></i>
                        Overview Proposal
                    </span>
                    <span id="formStep5" class="d-inline-flex align-items-center fs-6 fw-medium text-nowrap d-none">
                        Step 5:
                        <i class="sym sym-file-check fs-4 ms-1 text-primary"></i>
                        Overview Proposal
                    </span>
                </nav>
                <div class="d-flex gap-2 align-items-center">
                    <!-- [START REDUNDANT CONTENT] Form Submit Action (fmt. 1) -->
                    <!-- [START REDUNDANT BUTTON] -->
                    <button class="btn btn-light d-none d-lg-block">
                        Sebelumnya
                    </button>
                    <button type="button" class="btn btn-icon btn-light d-none d-md-block d-lg-none" aria-label="Sebelumnya">
                        <i class="sym sym-chevron-left"></i>
                    </button>
                    <!-- [END REDUNDANT BUTTON] -->
                    <button type="submit" class="d-none d-md-block btn btn-primary" form="advancedForm">
                        Selanjutnya
                    </button>
                    <!-- [END REDUNDANT CONTENT] Form Submit Action (fmt. 1) -->
                </div>
            </div>
        </div>
        <div class="sticky-top d-flex gap-1">
            <div class="col"><div class="bg-primary" style="height: 4px;"></div></div>
            <div class="col"><div class="bg-primary" style="height: 4px;"></div></div>
            <div class="col"><div class="bg-primary" style="height: 4px;"></div></div>
            <div class="col"><div class="bg-primary-subtle" style="height: 4px;"></div></div>
            <div class="col"><div class="bg-primary-subtle" style="height: 4px;"></div></div>
        </div>
    </header>
    `

    if(subheaderVariant == 'On Form') {
        subHeader = onForm;
    }else if(subheaderVariant == 'On Form Alt') {
        subHeader = onFormAlt;
    }else if(subheaderVariant == 'On Form Alt Stepper') {
        subHeader = onFormAltStepper;
    }

    const html = `
    <!-- [START] Header -->
    <header class="qn-header z-2 ${subheaderVariant != '' ? '' : 'sticky-top'}">
        <div class="qn-header-pattern p-md-3 py-3 px-xl-5 bg-primary text-white">
            <div class="container-fluid">
                <div class="d-flex flex-wrap flex-nowrap align-items-center justify-content-start">
                    <div class="d-flex gap-2 gap-md-3 align-items-center">
                        <button class="btn btn-icon btn-lg btn-light rounded-1 bg-transparent text-white ${isWithBottomNav ? 'd-none d-md-block d-lg-none' : 'd-block d-lg-none'}"
                            type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="sym sym-menu-03"></i>
                        </button>
                        <a href="#"
                            class="qn-identity d-flex align-items-center link-body-emphasis text-decoration-none rounded-3 bg-white">
                            <img class="img-fluid w-auto h-100 object-fit-contain" src="${logoKampus}" alt="Example Campus Logo">
                        </a>
                        <div class="d-flex flex-column">
                            <span>SIM Akademik</span>
                            <h5 class="m-0">Universitas Islam Sevima Indonesia</h5>
                        </div>
                    </div>
                    <div class="ms-auto d-flex align-items-center gap-1">
                        <div class="d-none d-md-flex align-items-center gap-1">
                            <!-- [START REDUNDANT CONTENT] Header Action (fmt. 1) -->
                            <a href="#" class="btn btn-light p-2 py-1 bg-transparent text-white border-0 me-1"
                                aria-label="Notifikasi">
                                <i class="sym sym-bell"></i>
                            </a>
                            <a href="#" class="btn btn-light p-2 py-1 bg-transparent text-white border-0 me-1"
                                aria-label="Bantuan">
                                <i class="sym sym-help-circle"></i>
                            </a>
                            <!-- [END REDUNDANT CONTENT] Header Action (fmt. 1) -->
                            <a href="#" class="btn btn-light p-2 py-1 bg-transparent text-white border-0" aria-label="Pindah Modul">
                                <i class="sym sym-dots-grid-solid"></i>
                                <span class="d-none d-lg-inline-block ms-2">Module</span>
                            </a>
                        </div>
                        <hr class="d-none d-md-block vr mx-2">
                        <!-- [START REDUNDANT CONTENT] Header Avatar Group (fmt. 1) -->
                        <div class="dropdown d-none d-md-block rounded-4 bg-white text-black p-1">
                            <a href="#"
                                class="d-flex gap-1 align-items-center link-body-emphasis text-decoration-none dropdown-toggle pe-1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="${photoProfile}" alt="mdo" width="32" height="32"
                                    class="rounded-4">
                                <span class="qn-avatar-name d-none d-lg-block text-truncate">Aditya Kara</span>
                            </a>
                            <ul class="dropdown-menu pt-0 text-small" style="width: 296px;">
                                <li>
                                    <div class="d-flex flex-column gap-2 p-3 py-4 pb-3 text-nowrap">
                                        <div class="d-flex align-items-center gap-3">
                                            <img src="${photoProfile}" alt="mdo" width="56" height="56"
                                                class="rounded-4">
                                            <div class="d-block">
                                                <h6 class="mb-1">Aditya Kara</h6>
                                                <span class="text-muted">Administrator</span>
                                            </div>
                                        </div>
                                        <div class="d-block">
                                            <span class="text-muted m-0 fw-bold">Penyimpanan</span>
                                            <div class="progress mt-1" role="progressbar" aria-label="Basic example"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                                style="height: .25rem;">
                                                <div class="progress-bar" style="width: 54%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex flex-nowrap justify-content-between" href="#">
                                        Ganti Role
                                        <i class="sym sym-refresh-ccw-02"></i>
                                    </a>
                                </li>
                                <li class="d-block d-md-none">
                                    <a class="dropdown-item" href="#">Pindah Modul</a>
                                </li>
                                <li class="d-block d-md-none">
                                    <a class="dropdown-item" href="#">Notifikasi</a>
                                </li>
                                <li><a class="dropdown-item" href="#">Pengaturan Akun</a></li>
                                <li><a class="dropdown-item" href="#">Media Library</a></li>
                                <li><a class="dropdown-item" href="#">Upgrade PRO</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <i class="sym sym-translate me-2"></i>
                                        Bahasa Indonesia
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <i class="sym sym-help-circle-solid me-2"></i>
                                        Bantuan
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item text-danger" href="#">
                                        <i class="sym sym-arrow-left-solid me-2"></i>
                                        Keluar
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- [END REDUNDANT CONTENT] Header Avatar Group (fmt. 1) -->
                        ${isWithBottomNav ? '' : `
                        <!-- [START REDUNDANT CONTENT] Header Avatar Group (fmt. 2) -->
                        <div class="d-block d-md-none rounded-4 bg-white text-black p-1">
                            <a href="#avatarModal"
                                class="d-flex gap-1 align-items-center link-body-emphasis text-decoration-none dropdown-toggle pe-1"
                                data-bs-toggle="modal">
                                <img src="${photoProfile}" alt="mdo" width="32" height="32"
                                    class="rounded-4">
                                <span class="qn-avatar-name d-none d-lg-block text-truncate">Aditya Kara</span>
                            </a>
                        </div>
                        <!-- [END REDUNDANT CONTENT] Header Avatar Group (fmt. 2) -->
                        `}
                    </div>
                </div>
            </div>
        </div>
        <div class="p-md-3 py-md-0 px-xl-5 border-bottom shadow-sm bg-white ${isWithBottomNav ? 'd-none d-md-block' : ''}">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg p-0 bg-white">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="w-100 navbar-nav py-1 gap-1">
                            <li class="nav-item">
                                <a class="nav-link active text-primary" aria-current="page" href="#">Beranda</a>
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
                    </div>
                </nav>
            </div>
        </div>
    </header>
    ${subHeader}
    <!-- [END] Header -->

    ${isWithBottomNav ? '' : ModalProfile.getModalProfile()}
    `;

    return html;
}
