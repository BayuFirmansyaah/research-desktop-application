import * as Header from "../../../snippets/header";
import * as Sidebar from "../../../snippets/sidebar";
import * as Footer from "../../../snippets/footer"
import * as BottomNav from "../../../snippets/bottom-nav";

import photoProfile from '../../../assets/images/example/profile-picture.webp';

export const createBasic = ({
    template,
    withSidebar,
    withBottomNav,
    footerAlternative
} = {
}) => {
    let main = ''
    const mainList = `
    <!-- Main -->
    <main class="qn-main bg-body-tertiary d-flex flex-column">
        <!-- [START] Content -->
        <div class="container">
            <div class="row row-cols-1 gy-3 p-3 p-lg-4">
                <div class="d-flex align-items-center justify-content-between gap-1 px-0 mb-2">
                    <div class="d-flex flex-column gap-2">
                        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                            <ol class="breadcrumb mb-1">
                                <li class="breadcrumb-item">
                                    <a href="#" aria-label="Home"><i class="sym sym-home-line"></i> Beranda</a>
                                </li>
                                <li class="breadcrumb-item"><a href="#">Library</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                        <div class="d-flex flex-column flex-sm-row align-items-start align-items-sm-end gap-2">
                            <h4 class="m-0">Mahasiswa</h4>
                            <p class="text-secondary m-0">Data Mahasiswa</p>
                        </div>
                    </div>
                    <div class="d-flex gap-2">
                        <div class="d-none d-lg-flex gap-2">
                            <button type="button" class="btn btn-icon btn-outline-secondary" aria-label="Print">
                                <i class="sym sym-printer-solid"></i>
                            </button>
                            <hr class="vr my-1">
                            <div class="btn-group">
                                <button class="btn btn-outline-secondary" type="button">
                                    Sebuah Tombol
                                </button>
                                <button type="button"
                                    class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-flex d-lg-none gap-2">
                            <div class="dropdown">
                                <button class="btn btn-outline-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Aksi page lainnya">
                                    <i class="sym sym-dots-vertical-solid"></i>
                                </button>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <i class="sym sym-printer-solid"></i> Print
                                        </a>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <hr class="vr my-1">
                        </div>
                        <!-- [START REDUNDANT BUTTON] -->
                        <button type="button" class="btn btn-primary d-none d-lg-inline-block" aria-label="Primary">
                            <i class="sym sym-plus me-1"></i>Primary
                        </button>
                        <button type="button" class="btn btn-icon btn-primary d-block d-lg-none" aria-label="Primary">
                            <i class="sym sym-plus"></i>
                        </button>
                        <!-- [END REDUNDANT BUTTON] -->
                    </div>
                </div>
                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-body">
                        <div class="row d-flex align-items-center justify-content-between gap-2">
                            <div class="col-md-3">
                                <input type="text" class="form-control" placeholder="Cari mata kuliah">
                            </div>
                            <div class="col-md-4 d-flex justify-content-end gap-2">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle  dropdown-toggle-iconless" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="sym sym-filter-funnel-solid"></i> Filter
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="table-responsive">
                            <table class="table table-bordered align-middle">
                                <thead class="align-middle">
                                    <tr class="table-light">
                                        <th>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang semua data pada tabel">
                                        </th>
                                        <th style="min-width: 132px;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                NIM
                                                <!-- <i class="float-end sym sym-switch-vertical"></i> -->
                                                <i class="float-end sym sym-arrow-narrow-down"></i> <!-- ASCENDING -->
                                                <!-- <i class="float-end sym sym-arrow-narrow-up"></i> --> <!-- DESCENDING -->
                                            </button>
                                        </th>
                                        <th style="min-width: 224px;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                Nama Lengkap
                                                <i class="float-end sym sym-switch-vertical"></i>
                                                <!-- <i class="float-end sym sym-arrow-narrow-down"></i> --> <!-- ASCENDING -->
                                                <!-- <i class="float-end sym sym-arrow-narrow-up"></i> --> <!-- DESCENDING -->
                                            </button>
                                        </th>
                                        <th style="min-width: 120px;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                Jenjang
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th style="min-width: 180px;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                Program Studi
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th style="min-width: 132px;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                Semester
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th style="min-width: 80px;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                SKS
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th style="min-width: 80px;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                IPK
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th style="min-width: 120px;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                Status
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th class="text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Mayang Larasati
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">6</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">-</td>
                                        <td>
                                            <span class="badge text-success bg-success bg-opacity-10 border border-success">Aktif</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Tri Meida Ratnawati
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">8</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-danger bg-danger bg-opacity-10 border border-danger">Tidak Aktif</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Gigih Hadi
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Fahmi Akbar
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Atmayanti
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Andi Hartono
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Indah Kurniani
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Chelia Wibowo
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Cheline Andiani
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Daffa Nauran
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Aditya Anugrah
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Amalia Nurul
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Belia Putri
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Hafizh Fadhlurrahman
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Gharis Muhammad
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Zakiyah Nurul
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Windy Putri
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Putri Amalia
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Rusdy Putra
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            1455201001
                                        </td>
                                        <td>
                                            Silmina Putri
                                        </td>
                                        <td>Strata 1</td>
                                        <td>Sistem Informasi</td>
                                        <td class="text-end">10</td>
                                        <td class="text-end">2</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                            class="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between gap-3 pt-4 pt-md-0">
                            <p class="text-dark m-0">
                                Menampilkan <span class="fw-bold">1-10</span> dari Total 235 data
                            </p>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-end mb-0">
                                    <li class="page-item disabled">
                                        <a class="page-link" role="button" aria-label="Sebelumnya">
                                            <i class="sym sym-arrow-narrow-left"></i>
                                            <span class="d-none d-lg-inline-block">Sebelumnya</span>
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" role="button" aria-label="Selanjutnya">
                                            <span class="d-none d-lg-inline-block">Selanjutnya</span>
                                            <i class="sym sym-arrow-narrow-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- [END] Content -->
        ${Footer.getFooter(footerAlternative, false, withBottomNav)}
    </main>
    <!-- [END] Main -->
    `;

    const mainListAlt = `
    <!-- Main -->
    <main class="qn-main bg-body-tertiary d-flex flex-column">
        <!-- [START] Content -->
        <div class="container">
            <div class="row row-cols-1 gy-3 p-3 p-lg-4">
                <div class="d-flex align-items-center justify-content-between gap-1 px-0 mb-2">
                    <div class="d-flex flex-column gap-2">
                        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                            <ol class="breadcrumb mb-1">
                                <li class="breadcrumb-item">
                                    <a href="#" aria-label="Home"><i class="sym sym-home-line"></i> Beranda</a>
                                </li>
                                <li class="breadcrumb-item"><a href="#">Library</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                        <div class="d-flex flex-column flex-sm-row align-items-start align-items-sm-end gap-2">
                            <h4 class="m-0">Mahasiswa</h4>
                            <p class="text-secondary m-0">Data Mahasiswa</p>
                        </div>
                    </div>
                    <div class="d-flex gap-2">
                        <div class="d-none d-lg-flex gap-2">
                            <button type="button" class="btn btn-icon btn-outline-secondary" aria-label="Print">
                                <i class="sym sym-printer-solid"></i>
                            </button>
                            <hr class="vr my-1">
                            <div class="btn-group">
                                <button class="btn btn-outline-secondary" type="button">
                                    Sebuah Tombol
                                </button>
                                <button type="button"
                                    class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-flex d-lg-none gap-2">
                            <div class="dropdown">
                                <button class="btn btn-outline-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Aksi page lainnya">
                                    <i class="sym sym-dots-vertical-solid"></i>
                                </button>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <i class="sym sym-printer-solid"></i> Print
                                        </a>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <hr class="vr my-1">
                        </div>
                        <!-- [START REDUNDANT BUTTON] -->
                        <button type="button" class="btn btn-primary d-none d-lg-inline-block" aria-label="Primary">
                            <i class="sym sym-plus me-1"></i>Primary
                        </button>
                        <button type="button" class="btn btn-icon btn-primary d-block d-lg-none" aria-label="Primary">
                            <i class="sym sym-plus"></i>
                        </button>
                        <!-- [END REDUNDANT BUTTON] -->
                    </div>
                </div>
                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-body">
                        <div class="row d-flex align-items-center justify-content-between gap-2">
                            <div class="col-md-3">
                                <input type="text" class="form-control" placeholder="Cari mata kuliah">
                            </div>
                            <div class="col-md-4 d-flex justify-content-end gap-2">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle  dropdown-toggle-iconless" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="sym sym-filter-funnel-solid"></i> Filter
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="table-responsive">
                            <table class="table table-bordered align-middle">
                                <thead class="align-middle">
                                    <tr class="table-light">
                                        <th style="min-width: 36px; width: 36px;">
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang semua data pada tabel">
                                        </th>
                                        <th style="min-width: 248px;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                Group
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th style="min-width: 120px; width: 10%;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                String I
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th style="min-width: 120px; width: 100px;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                Number I
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th style="min-width: 140px; width: 10%;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                Status
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th class="text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">-</td>
                                        <td>
                                            <span class="badge text-success bg-success bg-opacity-10 border border-success">Aktif</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-danger bg-danger bg-opacity-10 border border-danger">Tidak Aktif</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                            class="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between gap-3 pt-4 pt-md-0">
                            <p class="text-dark m-0">
                                Menampilkan <span class="fw-bold">1-10</span> dari Total 235 data
                            </p>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-end mb-0">
                                    <li class="page-item disabled">
                                        <a class="page-link" role="button" aria-label="Sebelumnya">
                                            <i class="sym sym-arrow-narrow-left"></i>
                                            <span class="d-none d-lg-inline-block">Sebelumnya</span>
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" role="button" aria-label="Selanjutnya">
                                            <span class="d-none d-lg-inline-block">Selanjutnya</span>
                                            <i class="sym sym-arrow-narrow-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-body">
                        <div class="row d-flex align-items-center justify-content-between gap-2">
                            <div class="col-md-3">
                                <input type="text" class="form-control" placeholder="Cari mata kuliah">
                            </div>
                            <div class="col-md-4 d-flex justify-content-end gap-2">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle  dropdown-toggle-iconless" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="sym sym-filter-funnel-solid"></i> Filter
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="table-responsive">
                            <table class="table table-bordered align-middle">
                                <thead class="align-middle">
                                    <tr class="table-light">
                                        <th style="min-width: 36px; width: 36px;">
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang semua data pada tabel">
                                        </th>
                                        <th style="min-width: 248px;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                Photo
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th style="min-width: 400px;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                Text I
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th style="min-width: 120px; width: 10%;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                String I
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th style="min-width: 120px; width: 100px;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                Number I
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th style="min-width: 140px; width: 10%;">
                                            <button class="btn p-0 border-0 w-100 h-100 text-start" aria-label="Photo: active to sort">
                                                Status
                                                <i class="float-end sym sym-switch-vertical"></i>
                                            </button>
                                        </th>
                                        <th class="text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero eius veritatis suscipit nisi rem fuga, atque accusamus esse quaerat tenetur vel dolore exercitationem. Sint deleniti voluptates quod asperiores nihil?
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">-</td>
                                        <td>
                                            <span class="badge text-success bg-success bg-opacity-10 border border-success">Aktif</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nam eaque hic enim odit possimus exercitationem optio sapiente atque assumenda.
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-danger bg-danger bg-opacity-10 border border-danger">Tidak Aktif</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni possimus minus debitis ullam maiores, excepturi tempore nulla explicabo nemo hic ipsam quod laboriosam facere saepe repudiandae nesciunt repellat cupiditate? Ea libero numquam distinctio incidunt asperiores? Enim ullam repudiandae recusandae quo architecto dicta quisquam? Unde, qui.
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo incidunt maxime asperiores laboriosam porro aut voluptas excepturi earum sit!
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus distinctio inventore id libero doloremque nihil blanditiis eum aliquid neque fugiat eaque, adipisci at dolorem vitae assumenda voluptate, doloribus ea facere reprehenderit possimus?
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, hic.
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem blanditiis labore quo placeat dolore commodi a porro unde odio dignissimos, accusamus vitae sed aspernatur id. Perspiciatis nemo velit voluptatibus nesciunt architecto. Ut incidunt accusantium alias est minima maxime veritatis?
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Lorem ipsum dolor sit amet consectetur.
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, fugiat facere soluta labore consectetur vitae exercitationem?
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" aria-label="Centang data dengan NIM: 1455201001">
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="ratio ratio-1x1" style="width: 32px;">
                                                    <div class="rounded-circle overflow-hidden">
                                                        <img class="object-fit-cover w-100" src="${photoProfile}" alt="Foto dari NIM 1455201001">
                                                    </div>
                                                </div>
                                                <div class="d-block">
                                                    <span class="d-block fs-6 fw-medium text-primary">Mayang Larasati</span>
                                                    <span class="d-block fs-6 text-secondary">1455201001</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore amet voluptate esse! Facere, qui quaerat! Quasi blanditiis corrupti obcaecati, distinctio aspernatur qui natus dolore.
                                        </td>
                                        <td>Strata 1</td>
                                        <td class="text-end">3.83</td>
                                        <td>
                                            <span class="badge text-warning bg-warning bg-opacity-10 border border-warning">Lulus</span>
                                        </td>
                                        <td style="width: 124px;">
                                            <div class="d-flex align-items-center justify-content-end gap-1">
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="Lihat detail">
                                                    <i class="sym sym-eye-solid"></i>
                                                </button>
                                                <button type="button" class="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary" aria-label="hapus">
                                                    <i class="sym sym-trash-solid"></i>
                                                </button>
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless" href="#"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false" aria-label="Aksi lainnya">
                                                        <i class="sym sym-dots-horizontal"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Detail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item d-block d-md-none" href="#">
                                                                Hapus
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                            class="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between gap-3 pt-4 pt-md-0">
                            <p class="text-dark m-0">
                                Menampilkan <span class="fw-bold">1-10</span> dari Total 235 data
                            </p>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-end mb-0">
                                    <li class="page-item disabled">
                                        <a class="page-link" role="button" aria-label="Sebelumnya">
                                            <i class="sym sym-arrow-narrow-left"></i>
                                            <span class="d-none d-lg-inline-block">Sebelumnya</span>
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" role="button" aria-label="Selanjutnya">
                                            <span class="d-none d-lg-inline-block">Selanjutnya</span>
                                            <i class="sym sym-arrow-narrow-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- [END] Content -->
        ${Footer.getFooter(footerAlternative, false, withBottomNav)}
    </main>
    <!-- [END] Main -->
    `

    const mainDetail = `
    <!-- Main -->
    <main class="qn-main bg-body-tertiary d-flex flex-column">
        <!-- [START] Content -->
        <div class="container">
            <div class="row row-cols-1 gy-3 p-3 p-lg-4">
                <div class="d-flex align-items-center justify-content-between gap-1 px-0 mb-2">
                    <div class="d-flex flex-column gap-2">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-1">
                                <li class="breadcrumb-item">
                                    <a href="#" aria-label="Home"><i class="sym sym-home-line"></i> Beranda</a>
                                </li>
                                <li class="breadcrumb-item"><a href="#">Library</a></li>
                                <li class="breadcrumb-item"><a href="#">Mahasiswa</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Detail</li>
                            </ol>
                        </nav>
                        <div class="d-flex flex-column flex-sm-row align-items-start align-items-sm-end gap-2">
                            <h4 class="m-0">Mahasiswa</h4>
                            <p class="text-secondary m-0">Detail Mahasiswa</p>
                        </div>
                    </div>
                </div>
                <div class="card shadow-sm border-0 rounded-4 bg-primary text-white">
                    <div class="card-body py-md-4">
                        <div class="row gy-3">
                            <div class="col-4 col-md-3 col-lg-1">
                                <div class="w-100">
                                    <img src="${photoProfile}" alt="mdo" class="img-thumbnail rounded-5">
                                </div>
                            </div>
                            <div class="col-8 col-md-9 d-block d-lg-none"></div>
                            <div class="col-6 col-lg-4">
                                <div class="row row-cols-1 row-cols-md-2 gx-1 gy-1 gy-md-3">
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">Nim</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="mb-2">1441001101112</span>
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">Nama Lengkap</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="mb-2">Devi Asri Monica Halawa</span>
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">Program Studi</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="mb-2">S1 - Sistem Informasi</span>
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">Status Mahasiswa</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="">Aktif</span>
                                </div>
                            </div>
                            <div class="col-6 col-lg-4">
                                <div class="row row-cols-1 row-cols-md-2 gx-1 gy-1 gy-md-3">
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">Semester</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="mb-2">6</span>
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">SKS Lulus</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="mb-2">88 / 144 SKS</span>
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">Program Studi</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="">S1 - Sistem Informasi</span>
                                </div>
                            </div>
                        </div>
                        <div class="position-absolute top-0 end-0 p-3 py-md-4">
                            <h5>
                                <span class="badge badge-md rounded-pill text-bg-light text-primary">
                                    <i class="sym sym-check-verified"></i> Biodata Valid
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-header d-flex gap-2 align-items-center justify-content-between flex-wrap bg-white border-light-subtle p-3 rounded-top-4 border-2">
                        <div class="d-flex gap-2 align-items-center">
                            <div class="ratio ratio-1x1" style="width: 42px; min-width: 42px;">
                                <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                    <i class="sym sym-user-solid"></i>
                                </span>
                            </div>
                            <div class="d-block ms-1">
                                <h5 class="m-0">
                                    Informasi Pendaftaran
                                </h5>
                                <span class="fs-6 text-secondary">Informasi pendaftaran mahasiswa</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-light ms-auto">
                            <i class="sym sym-edit-02"></i>
                            Ubah Data
                        </a>
                    </div>
                    <div class="card-body">
                        <div class="row gy-3">
                            <div class="col-md-6">
                                <div class="row gx-1 gy-3">
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Sistem Kuliah</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Kelas Karyawan</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Periode Masuk</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>2023/2024</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Tahun Kurikulum</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>2020</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Nama Lengkap</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Devi Asri Monica Helawa</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">NIM</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>1441001101112</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Program Studi</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>S1 Sistem Informasi</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Status Mahasiswa</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Aktif</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row gx-1 gy-3">
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Semester</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>2</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Angkatan</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Reguler</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Gelombang</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Gelombang I</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Kebutuhan Khusus</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Tidak</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-header d-flex gap-2 align-items-center justify-content-between flex-wrap bg-white border-light-subtle p-3 rounded-top-4 border-2">
                        <div class="d-flex gap-2 align-items-center">
                            <div class="ratio ratio-1x1" style="width: 42px; min-width: 42px;">
                                <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                    <i class="sym sym-user-solid"></i>
                                </span>
                            </div>
                            <div class="d-block ms-1">
                                <h5 class="m-0">
                                    Domisili / Alamat
                                </h5>
                                <span class="fs-6 text-secondary">Data alamat dan tempat tinggal mahasiswa.</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-light ms-auto">
                            <i class="sym sym-edit-02"></i>
                            Ubah Data
                        </a>
                    </div>
                    <div class="card-body">
                        <div class="row gy-3">
                            <div class="col-md-6">
                                <div class="row gx-1 gy-3">
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Alamat</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Jl.Kalibokor Timur 117</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Provinsi</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Jawa Timur</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Kota</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Surabaya</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Kecamatan</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Gubeng</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Kelurahan</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Kertajaya</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row gx-1 gy-3">
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">RT / RW</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>09/02</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Dusun</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Sumber Rejeki</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Kode Pos</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>60282</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Status Tinggal</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Rumah Orang Tua</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-header d-flex gap-2 align-items-center justify-content-between flex-wrap bg-white border-light-subtle p-3 rounded-top-4 border-2">
                        <div class="d-flex gap-2 align-items-center">
                            <div class="ratio ratio-1x1" style="width: 42px; min-width: 42px;">
                                <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                    <i class="sym sym-user-solid"></i>
                                </span>
                            </div>
                            <div class="d-block ms-1">
                                <h5 class="m-0">
                                    Orang Tua
                                </h5>
                                <span class="fs-6 text-secondary">Informasi orang tua / wali mahasiswa.</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-light ms-auto">
                            <i class="sym sym-edit-02"></i>
                            Ubah Data
                        </a>
                    </div>
                    <div class="card-body">
                        <div class="row gy-3">
                            <div class="col-md-6">
                                <div class="row gx-1 gy-3">
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Nama Lengkap</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Muhammad Joko Anwar</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">NIK</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>890778215928</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Tanggal Lahir</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>26 Januari 1973</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Status Hidup</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Hidup</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Pekerjaan</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Pegawai Swasta</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Penghasilan</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>4Jt - 5Jt</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Alamat</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Jl.Kalibokor Timur 117</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">No. Telepon</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>0841 8743 0092</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- [END] Content -->
        ${Footer.getFooter(footerAlternative, false, withBottomNav)}
    </main>
    <!-- [END] Main -->
    `

    const mainDetailEdit = `
    <!-- Main -->
    <main class="qn-main bg-body-tertiary d-flex flex-column">
        <!-- [START] Content -->
        <div class="container">
            <div class="row row-cols-1 gy-3 p-3 p-lg-4">
                <div class="d-flex align-items-center justify-content-between gap-1 px-0 mb-2">
                    <div class="d-flex flex-column gap-2">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-1">
                                <li class="breadcrumb-item">
                                    <a href="#" aria-label="Home"><i class="sym sym-home-line"></i> Beranda</a>
                                </li>
                                <li class="breadcrumb-item"><a href="#">Library</a></li>
                                <li class="breadcrumb-item"><a href="#">Mahasiswa</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Detail</li>
                            </ol>
                        </nav>
                        <div class="d-flex flex-column flex-sm-row align-items-start align-items-sm-end gap-2">
                            <h4 class="m-0">Mahasiswa</h4>
                            <p class="text-secondary m-0">Detail Mahasiswa</p>
                        </div>
                    </div>
                </div>
                <div class="card shadow-sm border-0 rounded-4 bg-primary text-white">
                    <div class="card-body py-md-4">
                        <div class="row gy-3">
                            <div class="col-4 col-md-3 col-lg-1">
                                <div class="w-100">
                                    <img src="${photoProfile}" alt="mdo" class="img-thumbnail rounded-5">
                                </div>
                            </div>
                            <div class="col-8 col-md-9 d-block d-lg-none"></div>
                            <div class="col-6 col-lg-4">
                                <div class="row row-cols-1 row-cols-md-2 gx-1 gy-1 gy-md-3">
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">Nim</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="mb-2">1441001101112</span>
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">Nama Lengkap</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="mb-2">Devi Asri Monica Halawa</span>
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">Program Studi</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="mb-2">S1 - Sistem Informasi</span>
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">Status Mahasiswa</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="">Aktif</span>
                                </div>
                            </div>
                            <div class="col-6 col-lg-4">
                                <div class="row row-cols-1 row-cols-md-2 gx-1 gy-1 gy-md-3">
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">Semester</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="mb-2">6</span>
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">SKS Lulus</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="mb-2">88 / 144 SKS</span>
                                    <div class="d-flex gap-1 justify-content-between">
                                        <span class="text-white-50">Program Studi</span>
                                        <span class="d-none d-md-block">:</span>
                                    </div>
                                    <span class="">S1 - Sistem Informasi</span>
                                </div>
                            </div>
                        </div>
                        <div class="position-absolute top-0 end-0 p-3 py-md-4">
                            <h5>
                                <span class="badge badge-md rounded-pill text-bg-light text-primary">
                                    <i class="sym sym-check-verified"></i> Biodata Valid
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>
                <form action="./list.html" method="GET" class="card position-relative z-3 shadow-sm border-0 rounded-4">
                    <div class="card-header d-flex gap-2 align-items-center justify-content-between flex-wrap bg-white border-light-subtle p-3 rounded-top-4 border-2">
                        <div class="d-flex gap-2 align-items-center">
                            <div class="ratio ratio-1x1" style="width: 42px; min-width: 42px;">
                                <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                    <i class="sym sym-user-solid"></i>
                                </span>
                            </div>
                            <div class="d-block ms-1">
                                <h5 class="m-0">
                                    Informasi Pendaftaran
                                </h5>
                                <span class="fs-6 text-secondary">Informasi pendaftaran mahasiswa</span>
                            </div>
                        </div>
                        <div class="d-flex gap-1 ms-auto">
                            <a href="#" class="btn btn-light ms-auto">
                                Batal
                            </a>
                            <button type="submit" class="btn btn-primary ms-auto">
                                Simpan Data
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row gy-3">
                            <div class="col-md-6">
                                <div class="row gx-1 gy-3">
                                    <div class="col-lg-4">
                                        <div class="d-flex gap-1 justify-content-lg-between">
                                            <label for="inputSistemKuliah" class="text-secondary">Sistem Kuliah<span class="text-danger">*</span></label>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-select form-select-sm" id="inputSistemKuliah" required>
                                            <option value="">Placeholder</option>
                                            <option value="1">Beasiswa</option>
                                            <option value="2" selected>Reguler</option>
                                            <option value="3">UNBK/UTBK</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="d-flex gap-1 justify-content-lg-between">
                                            <label for="inputPeriodeMasuk" class="text-secondary">Periode Masuk<span class="text-danger">*</span></label>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-select form-select-sm" id="inputPeriodeMasuk" required>
                                            <option value="">Placeholder</option>
                                            <option value="1">2022/2023</option>
                                            <option value="2" selected>2023/2024</option>
                                            <option value="3">2024/2025</option>
                                            <option value="4">2025/2026</option>
                                            <option value="5">2026/2027</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="d-flex gap-1 justify-content-lg-between">
                                            <label for="inputTahunKurikulum" class="text-secondary">Tahun Kurikulum<span class="text-danger">*</span></label>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-select form-select-sm" id="inputTahunKurikulum" required>
                                            <option value="">Placeholder</option>
                                            <option value="1">2018</option>
                                            <option value="2">2019</option>
                                            <option value="3" selected>2020</option>
                                            <option value="4">2021</option>
                                            <option value="5">2022</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="d-flex gap-1 justify-content-lg-between">
                                            <label for="inputNamaLengkapMahasiswa" class="text-secondary">Nama Lengkap<span class="text-danger">*</span></label>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <input type="text" class="form-control form-control-sm" id="inputNamaLengkapMahasiswa" placeholder="Placeholder" value="Devi Asri Monica Helawa" required>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="d-flex gap-1 justify-content-lg-between">
                                            <label for="inputNIM" class="text-secondary">NIM<span class="text-danger">*</span></label>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <input type="number" class="form-control form-control-sm" id="inputNIM" placeholder="Placeholder" value="1441001101112" required>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="d-flex gap-1 justify-content-lg-between">
                                            <label for="inputProgramStudi" class="text-secondary">Program Studi<span class="text-danger">*</span></label>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-select form-select-sm" id="inputProgramStudi" required>
                                            <option value="">Placeholder</option>
                                            <option value="1" selected>S1 Sistem Informasi</option>
                                            <option value="2">Sistem Informasi</option>
                                            <option value="3">Teknik Informatika</option>
                                            <option value="4">Informatika</option>
                                            <option value="5">Komunikasi</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="d-flex gap-1 justify-content-lg-between">
                                            <label for="inputStatusMahasiswa" class="text-secondary">Status Mahasiswa<span class="text-danger">*</span></label>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-select form-select-sm" id="inputStatusMahasiswa" required>
                                            <option value="">Placeholder</option>
                                            <option value="1" selected>Aktif</option>
                                            <option value="2">Tidak Aktif</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row gx-1 gy-3">
                                    <div class="col-lg-4">
                                        <div class="d-flex gap-1 justify-content-lg-between">
                                            <label for="inputSemester" class="text-secondary">Semester<span class="text-danger">*</span></label>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <input type="number" class="form-control form-control-sm" id="inputSemester" placeholder="Placeholder" value="2" required>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="d-flex gap-1 justify-content-lg-between">
                                            <label for="inputAngkatan" class="text-secondary">Angkatan<span class="text-danger">*</span></label>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-select form-select-sm" id="inputAngkatan" required>
                                            <option value="">Placeholder</option>
                                            <option value="1" selected>Reguler</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="d-flex gap-1 justify-content-lg-between">
                                            <label for="inputGelombang" class="text-secondary">Gelombang<span class="text-danger">*</span></label>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-select form-select-sm" id="inputGelombang" required>
                                            <option value="">Placeholder</option>
                                            <option value="1" selected>Gelombang I</option>
                                            <option value="2">Gelombang II</option>
                                            <option value="3">Gelombang III</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="d-flex gap-1 justify-content-lg-between">
                                            <label for="inputKebutuhanKhusus" class="text-secondary">Kebutuhan Khusus<span class="text-danger">*</span></label>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <select class="form-select form-select-sm" id="inputKebutuhanKhusus" required>
                                            <option value="">Placeholder</option>
                                            <option value="1" selected>Tidak berkebutuhan khusus</option>
                                            <option value="2">Berkebutuhan khusus</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="position-fixed z-2 min-vw-100 min-vh-100 start-0 top-0 m-0 p-0 bg-secondary opacity-50"></div>
                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-header d-flex gap-2 align-items-center justify-content-between flex-wrap bg-white border-light-subtle p-3 rounded-top-4 border-2">
                        <div class="d-flex gap-2 align-items-center">
                            <div class="ratio ratio-1x1" style="width: 42px; min-width: 42px;">
                                <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                    <i class="sym sym-user-solid"></i>
                                </span>
                            </div>
                            <div class="d-block ms-1">
                                <h5 class="m-0">
                                    Domisili / Alamat
                                </h5>
                                <span class="fs-6 text-secondary">Data alamat dan tempat tinggal mahasiswa.</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-light ms-auto">
                            <i class="sym sym-edit-02"></i>
                            Ubah Data
                        </a>
                    </div>
                    <div class="card-body">
                        <div class="row gy-3">
                            <div class="col-md-6">
                                <div class="row gx-1 gy-3">
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Alamat</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Jl.Kalibokor Timur 117</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Provinsi</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Jawa Timur</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Kota</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Surabaya</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Kecamatan</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Gubeng</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Kelurahan</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Kertajaya</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row gx-1 gy-3">
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">RT / RW</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>09/02</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Dusun</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Sumber Rejeki</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Kode Pos</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>60282</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Status Tinggal</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Rumah Orang Tua</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-header d-flex gap-2 align-items-center justify-content-between flex-wrap bg-white border-light-subtle p-3 rounded-top-4 border-2">
                        <div class="d-flex gap-2 align-items-center">
                            <div class="ratio ratio-1x1" style="width: 42px; min-width: 42px;">
                                <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                    <i class="sym sym-user-solid"></i>
                                </span>
                            </div>
                            <div class="d-block ms-1">
                                <h5 class="m-0">
                                    Orang Tua
                                </h5>
                                <span class="fs-6 text-secondary">Informasi orang tua / wali mahasiswa.</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-light ms-auto">
                            <i class="sym sym-edit-02"></i>
                            Ubah Data
                        </a>
                    </div>
                    <div class="card-body">
                        <div class="row gy-3">
                            <div class="col-md-6">
                                <div class="row gx-1 gy-3">
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Nama Lengkap</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Muhammad Joko Anwar</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">NIK</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>890778215928</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Tanggal Lahir</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>26 Januari 1973</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Status Hidup</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Hidup</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Pekerjaan</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Pegawai Swasta</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Penghasilan</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>4Jt - 5Jt</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">Alamat</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>Jl.Kalibokor Timur 117</span>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex gap-1 justify-content-between">
                                            <span class="text-secondary">No. Telepon</span>
                                            <span>:</span>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <span>0841 8743 0092</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- [END] Content -->
        <!-- [START] Footer -->
            ${Footer.getFooter(footerAlternative, false, withBottomNav)}
        <!-- [END] Footer -->

    </main>
    <!-- [END] Main -->
    `

    if(template == 'List'){
        main = mainList;
    }else if(template == 'List Alt'){
        main = mainListAlt;
    }else if(template == 'Detail'){
        main = mainDetail;
    }else if(template == 'Detail Alt Edit'){
        main = mainDetailEdit;
    }

    const html = `
    ${Header.getHeader(false, withBottomNav)}
    ${withSidebar ? Sidebar.getSidebar() : ''}
    ${main}
    ${withBottomNav ? BottomNav.getBottomNav() : ''}
    `

    return html;
};
