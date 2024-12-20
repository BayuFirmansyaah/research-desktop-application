import iconModuleSetting from "../../../assets/images/module/module-setting.svg"
import iconModuleDashboard from "../../../assets/images/module/module-dashboard.svg"
import iconModuleAcademic from "../../../assets/images/module/module-academic.svg"
import iconEdlink from "../../../assets/images/module/module-edlink.webp"
import iconModulePmb from "../../../assets/images/module/module-pmb.svg"
import iconModuleKeuangan from "../../../assets/images/module/module-keuangan.svg"
import iconModuleKepegawaian from "../../../assets/images/module/module-kepegawaian.svg"
import iconModuleKarirlink from "../../../assets/images/module/module-karirlink.svg"
import iconModuleKelasMerdeka from "../../../assets/images/module/module-kelas-merdeka.webp"
import iconModuleEsign from "../../../assets/images/module/module-esign.svg"
import iconModuleAkreditasi from "../../../assets/images/module/module-akreditasi.svg"

import bgModule from "../../../assets/images/example/background-module.webp"
import logoKampus from "../../../assets/images/example/logo-kampus.webp"
import photoProfile from '../../../assets/images/example/profile-picture.webp';

export const createModule = ({
    template,
} = {
}) => {
    let main = "";

    const selectModule = `
    <p class="fs-5 fw-semibold mb-3">Pilih Modul SIM</p>
    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 align-content-stretch g-3">
        <div class="col">
            <a href="#" role="button" class="btn d-flex flex-column align-items-center justify-content-center gap-2 border rounded-4 shadow-sm py-4">
                <div class="w-100 ratio ratio-1x1" style="max-width: 2.25rem;">
                    <img class="w-100 h-100 object-fit-contain" src="${iconModuleSetting}" alt="Logo module setting">
                </div>
                <span class="fw-medium text-truncate mw-100">Pengaturan</span>
            </a>
        </div>
        <div class="col">
            <a href="#" role="button" class="btn d-flex flex-column align-items-center justify-content-center gap-2 border rounded-4 shadow-sm py-4">
                <div class="w-100 ratio ratio-1x1" style="max-width: 2.25rem;">
                    <img class="w-100 h-100 object-fit-contain" src="${iconModuleDashboard}" alt="Logo module dashboard">
                </div>
                <span class="fw-medium text-truncate mw-100">Dashboard</span>
            </a>
        </div>
        <div class="col">
            <a href="#" role="button" class="btn d-flex flex-column align-items-center justify-content-center gap-2 border rounded-4 shadow-sm py-4">
                <div class="w-100 ratio ratio-1x1" style="max-width: 2.25rem;">
                    <img class="w-100 h-100 object-fit-contain" src="${iconModuleAcademic}" alt="Logo module academic">
                </div>
                <span class="fw-medium text-truncate mw-100">Akademik</span>
            </a>
        </div>
        <div class="col">
            <a href="#" role="button" class="btn d-flex flex-column align-items-center justify-content-center gap-2 border rounded-4 shadow-sm py-4">
                <div class="w-100 ratio ratio-1x1" style="max-width: 2.25rem;">
                    <img class="w-100 h-100 object-fit-contain" src="${iconEdlink}" alt="Logo module edlink">
                </div>
                <span class="fw-medium text-truncate mw-100">Edlink</span>
            </a>
        </div>
        <div class="col">
            <a href="#" role="button" class="btn d-flex flex-column align-items-center justify-content-center gap-2 border rounded-4 shadow-sm py-4">
                <div class="w-100 ratio ratio-1x1" style="max-width: 2.25rem;">
                    <img class="w-100 h-100 object-fit-contain" src="${iconModulePmb}" alt="Logo module pmb">
                </div>
                <span class="fw-medium text-truncate mw-100">PMB</span>
            </a>
        </div>
        <div class="col">
            <a href="#" role="button" class="btn d-flex flex-column align-items-center justify-content-center gap-2 border rounded-4 shadow-sm py-4">
                <div class="w-100 ratio ratio-1x1" style="max-width: 2.25rem;">
                    <img class="w-100 h-100 object-fit-contain" src="${iconModuleKeuangan}" alt="Logo module keuangan">
                </div>
                <span class="fw-medium text-truncate mw-100">Keuangan</span>
            </a>
        </div>
        <div class="col">
            <a href="#" role="button" class="btn d-flex flex-column align-items-center justify-content-center gap-2 border rounded-4 shadow-sm py-4">
                <div class="w-100 ratio ratio-1x1" style="max-width: 2.25rem;">
                    <img class="w-100 h-100 object-fit-contain" src="${iconModuleKepegawaian}" alt="Logo module kepegawaian">
                </div>
                <span class="fw-medium text-truncate mw-100">Kepegawaian</span>
            </a>
        </div>
        <div class="col">
            <a href="#" role="button" class="btn d-flex flex-column align-items-center justify-content-center gap-2 border rounded-4 shadow-sm py-4">
                <div class="w-100 ratio ratio-1x1" style="max-width: 2.25rem;">
                    <img class="w-100 h-100 object-fit-contain" src="${iconModuleKeuangan}" alt="Logo module keuangan">
                </div>
                <span class="fw-medium text-truncate mw-100">CBT</span>
            </a>
        </div>
        <div class="col">
            <a href="#" role="button" class="btn d-flex flex-column align-items-center justify-content-center gap-2 border rounded-4 shadow-sm py-4">
                <div class="w-100 ratio ratio-1x1" style="max-width: 2.25rem;">
                    <img class="w-100 h-100 object-fit-contain" src="${iconModuleKarirlink}" alt="Logo module karirlink">
                </div>
                <span class="fw-medium text-truncate mw-100">Karirlink</span>
            </a>
        </div>
        <div class="col">
            <a href="#" role="button" class="btn d-flex flex-column align-items-center justify-content-center gap-2 border rounded-4 shadow-sm py-4">
                <div class="w-100 ratio ratio-1x1" style="max-width: 2.25rem;">
                    <img class="w-100 h-100 object-fit-contain" src="${iconModuleKelasMerdeka}" alt="Logo kampus kelas merdeka">
                </div>
                <span class="fw-medium text-truncate mw-100">Kampus Merdeka</span>
            </a>
        </div>
        <div class="col">
            <a href="#" role="button" class="btn d-flex flex-column align-items-center justify-content-center gap-2 border rounded-4 shadow-sm py-4">
                <div class="w-100 ratio ratio-1x1" style="max-width: 2.25rem;">
                    <img class="w-100 h-100 object-fit-contain" src="${iconModuleEsign}" alt="Logo module esign">
                </div>
                <span class="fw-medium text-truncate mw-100">E-Sign</span>
            </a>
        </div>
        <div class="col">
            <a href="#" role="button" class="btn d-flex flex-column align-items-center justify-content-center gap-2 border rounded-4 shadow-sm py-4">
                <div class="w-100 ratio ratio-1x1" style="max-width: 2.25rem;">
                    <img class="w-100 h-100 object-fit-contain" src="${iconModuleAkreditasi}" alt="Logo module akreditasi">
                </div>
                <span class="fw-medium text-truncate mw-100">Akreditasi</span>
            </a>
        </div>
    </div>
    `

    const selectRole = `
    <a href="#" class="btn d-flex gap-2 align-items-center fs-5 text-capitalize fw-medium p-0 mb-3 border-0">
        <i class="sym sym-arrow-left fs-3 lh-1"></i>
        Pilih role module dashboard
    </a>
    <div class="d-flex flex-column gap-2 pb-4">
        <a href="#" class="w-100 rounded-2 bg-white shadow-sm p-4 text-dark text-decoration-none">
            <div class="fs-6 fw-semibold">Administrator Prodi</div>
            <p class="m-0">S1 - Sistem Informasi</p>
        </a>
        <a href="#" class="w-100 rounded-2 bg-white shadow-sm p-4 text-dark text-decoration-none">
            <div class="fs-6 fw-semibold">Administrator Prodi</div>
            <p class="m-0">S1 - Sistem Informasi</p>
        </a>
    </div>
    `

    if(template == "select-module"){
        main = selectModule
    }else if(template == "select-role"){
        main = selectRole
    }

    const html = `
    <main class="qn-main-module" style="--qn-main-module-background: url(${bgModule});">
        <div class="container d-flex min-vh-100 py-3">
            <div class="card w-100 rounded-3 m-auto" style="max-width: 40rem; min-height: 542px;">
                <div class="card-header">
                    <div class="row">
                        <div class="col-9 d-flex align-items-center gap-2">
                            <div class="p-1 rounded-4 bg-light-subtle h-auto" style="width: 3.5rem; max-height: 3.5rem;">
                                <img class="w-100 h-100 object-fit-contain" src="${logoKampus}" alt="Example Logo IPB">
                            </div>
                            <div class="d-flex flex-column">
                                <p class="m-0 text-secondary">Sevima Platform</p>
                                <div class="fs-5 fw-semibold">Universitas Sevima Indonesia</div>
                            </div>
                        </div>
                        <div class="col-3 d-flex">
                            <div class="dropdown rounded-4 bg-white text-black p-1 my-auto">
                                <a href="#"
                                    class="d-flex gap-1 align-items-center link-body-emphasis text-decoration-none dropdown-toggle pe-1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="${photoProfile}" alt="mdo" width="32" height="32"
                                        class="rounded-4">
                                    <span class="qn-avatar-name d-none d-md-block text-truncate">Aditya Kara</span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end pt-0 text-small">
                                    <li>
                                        <div class="d-flex flex-column gap-2 p-3 py-4 pb-3 text-nowrap">
                                            <div class="d-flex align-items-center gap-3">
                                                <img src="${photoProfile}" alt="mdo" width="56" height="56"
                                                    class="rounded-4">
                                                <div class="d-block">
                                                    <h6 class="mb-1">Aditya Kara</h6>
                                                    <span class="text-muted">adityakara@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <i class="sym sym-user me-2"></i>
                                            Kelola Akun
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
                        </div>
                    </div>
                </div>
                <div class="card-body py-4 px-4">
                    ${main}
                </div>
            </div>
        </div>
    </main>
    `;

    return html;
};
