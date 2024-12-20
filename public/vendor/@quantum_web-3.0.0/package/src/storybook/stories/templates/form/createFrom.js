import * as Header from "./../../../snippets/header";
import * as Footer from "./../../../snippets/footer"
import * as TOC from "./../../../snippets/toc"
import * as BottomNav from "./../../../snippets/bottom-nav"

export const createForm = ({
    variant,
    advance,
} = {
}) => {
    let main = '';
    let subheaderVariant = '';
    let bottomNav = '';

    const mainDefault = `
    <!-- [START] Main -->
    <main class="qn-main bg-body-tertiary d-flex flex-column">
        <!-- [START] Content -->
        <div class="container-fluid">
            <div class="row">
               ${advance ? TOC.getToc() : ''}
                <form method="GET" action="#" id="advancedForm" class="qn-form py-3 ps-3 position-relative ${advance ? 'col-md-9 col-xl-6 offset-xxl-1' : 'col-xl-6 offset-xl-3'}">
                    ${advance ? TOC.getTocTabToggle() : ''}
                    <div class="row px-3 row-cols-1 gy-4">
                        <div class="d-none d-xl-flex flex-column gap-2">
                            <!-- [START REDUNDANT CONTENT] Form Breadcrumb Navigation (fmt. 2) -->
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-1">
                                    <li class="breadcrumb-item">
                                        <a href="#" aria-label="Home"><i class="sym sym-home-line"></i> Beranda</a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#">Perkuliahan</a></li>
                                    <li class="breadcrumb-item"><a href="#">Data Kurikulum</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Mahasiswa</li>
                                </ol>
                            </nav>
                            <!-- [END REDUNDANT CONTENT] Form Breadcrumb Navigation (fmt. 2) -->
                            <div class="d-flex gap-2 align-items-end">
                                <h4 class="m-0">Tambah Mahasiswa</h4>
                            </div>
                        </div>
                        <div class="card shadow-sm border-0 rounded-4" id="sectionFormDataMahasiswa">
                            <div class="card-header bg-white border-light-subtle rounded-top-4 border-2">
                                <div class="d-flex gap-2 align-items-center">
                                    <div class="ratio ratio-1x1" style="width: 2rem; min-width: 2rem;">
                                        <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                            <i class="sym sym-user-solid"></i>
                                        </span>
                                    </div>
                                    <h5 class="m-0 ms-1">
                                        Data Mahasiswa
                                    </h5>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row row-cols-1 row-cols-md-3 g-3">
                                    <div class="col-md-4">
                                        <label for="inputKodeMataKuliah" class="form-label">
                                            Kode Mata Kuliah<span class="text-danger">*</span>
                                            <i class="sym sym-info-default" data-bs-toggle="tooltip" data-bs-title="Kode Mata Kuliah..."></i>
                                        </label>
                                        <select class="form-select" id="inputKodeMataKuliah">
                                            <option value="">Placeholder</option>
                                            <option value="1" selected>IF19104</option>
                                            <option value="2">IF19105</option>
                                            <option value="3">IF19106</option>
                                            <option value="4">IF19107</option>
                                            <option value="5">IF19108</option>
                                        </select>
                                    </div>
                                    <div class="col-md-8">
                                        <label for="inputNamaMataKuliah" class="form-label">
                                            Nama Mata Kuliah (IND)<span class="text-danger">*</span>
                                        </label>
                                        <input type="text" class="form-control" id="inputNamaMataKuliah" placeholder="Placeholder" required>
                                    </div>
                                    <hr class="border-dark-subtle mb-0 col-md-12">
                                    <div class="col-md-12">
                                        <label for="inputTahunKurikulum" class="form-label">
                                            Tahun Kurikulum<span class="text-danger">*</span>
                                        </label>
                                        <select class="form-select" id="inputTahunKurikulum" required>
                                            <option value="">Placeholder</option>
                                            <option value="1" selected>2020</option>
                                            <option value="2">2021</option>
                                            <option value="3">2022</option>
                                            <option value="4">2023</option>
                                            <option value="5">2024</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="inputNamaMataKuliahEn" class="form-label">
                                            Nama Mata Kuliah (EN)<span class="text-danger">*</span>
                                        </label>
                                        <input type="text" class="form-control" id="inputNamaMataKuliahEn" placeholder="Placeholder" required>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="inputJenisMataKuliah" class="form-label">
                                            Jenis Mata Kuliah<span class="text-danger">*</span>
                                        </label>
                                        <select class="form-select" id="inputJenisMataKuliah" required>
                                            <option value="">Placeholder</option>
                                            <option value="2">2021</option>
                                            <option value="3">2022</option>
                                            <option value="4">2023</option>
                                            <option value="5">2024</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="inputKelompokMataKuliah" class="form-label">
                                            Kelompok Mata Kuliah<span class="text-danger">*</span>
                                        </label>
                                        <input type="text" class="form-control" id="inputKelompokMataKuliah" placeholder="Placeholder" required>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="inputUnitPengampu" class="form-label">
                                            Jenis Mata Kuliah<span class="text-danger">*</span>
                                        </label>
                                        <select class="form-select" id="inputUnitPengampu" required>
                                            <option value="">Placeholder</option>
                                            <option value="1" selected>S1 - Sistem Informasi</option>
                                            <option value="2">S1 - Example</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="inputRumpunMK" class="form-label">
                                            Rumpun MK<span class="text-danger">*</span>
                                        </label>
                                        <input type="text" class="form-control" id="inputRumpunMK" placeholder="Placeholder" required>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="inputKoodPengampuMK" class="form-label">
                                            Kood. Pengampu MK<span class="text-danger">*</span>
                                        </label>
                                        <input type="text" class="form-control" id="inputKoodPengampuMK" placeholder="Placeholder" required>
                                    </div>
                                    <hr class="border-dark-subtle mb-0 col-md-12">
                                    <div class="col-md-12">
                                        <label for="inputSksTatapMuka" class="form-label">
                                            SKS Tatap Muka<span class="text-danger">*</span>
                                        </label>
                                        <input type="number" class="form-control" id="inputSksTatapMuka" placeholder="Placeholder" required>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="inputSksPratikum" class="form-label">
                                            SKS Pratikum<span class="text-danger">*</span>
                                        </label>
                                        <input type="number" class="form-control" id="inputSksPratikum" placeholder="Placeholder" required>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="inputSksPratikLapangan" class="form-label">
                                            SKS Pratik Lapangan<span class="text-danger">*</span>
                                        </label>
                                        <input type="number" class="form-control" id="inputSksPratikLapangan" placeholder="Placeholder" required>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="inputSksSimulasi" class="form-label">
                                            SKS Simulasi<span class="text-danger">*</span>
                                        </label>
                                        <input type="number" class="form-control" id="inputSksSimulasi" placeholder="Placeholder" required>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="inputTotalSks" class="form-label">
                                            Total SKS<span class="text-danger">*</span>
                                        </label>
                                        <input type="number" class="form-control" id="inputTotalSks" placeholder="Placeholder" value="0" required disabled>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card shadow-sm border-0 rounded-4" id="sectionFormInformasiUmum">
                            <div class="card-header bg-white border-light-subtle rounded-top-4 border-2">
                                <div class="d-flex gap-2 align-items-center">
                                    <div class="ratio ratio-1x1" style="width: 2rem; min-width: 2rem;">
                                        <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                            <i class="sym sym-building-06"></i>
                                        </span>
                                    </div>
                                    <h5 class="m-0 ms-1">
                                        Informasi Umum
                                    </h5>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row row-cols-1 g-3">
                                    <div class="col">
                                        <label for="inputExample1" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample1" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample2" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample2" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample3" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample3" placeholder="Placeholder">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card shadow-sm border-0 rounded-4" id="section-form-domisili">
                            <div class="card-header bg-white border-light-subtle rounded-top-4 border-2">
                                <div class="d-flex gap-2 align-items-center">
                                    <div class="ratio ratio-1x1" style="width: 2rem; min-width: 2rem;">
                                        <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                            <i class="sym sym-globe-02-solid"></i>
                                        </span>
                                    </div>
                                    <h5 class="m-0 ms-1">
                                        Domisili atau Wilayah
                                    </h5>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row row-cols-1 g-3">
                                    <div class="col">
                                        <label for="inputExample4" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample4" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample5" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample5" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample6" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample6" placeholder="Placeholder">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card shadow-sm border-0 rounded-4" id="section-form-data-ortu">
                            <div class="card-header bg-white border-light-subtle rounded-top-4 border-2">
                                <div class="d-flex gap-2 align-items-center">
                                    <div class="ratio ratio-1x1" style="width: 2rem; min-width: 2rem;">
                                        <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                            <i class="sym sym-users-solid"></i>
                                        </span>
                                    </div>
                                    <h5 class="m-0 ms-1">
                                        Data Orang Tua
                                    </h5>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row row-cols-1 g-3">
                                    <div class="col">
                                        <label for="inputExample7" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample7" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample8" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample8" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample9" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample9" placeholder="Placeholder">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card shadow-sm border-0 rounded-4" id="sectionFormDataWali">
                            <div class="card-header bg-white border-light-subtle rounded-top-4 border-2">
                                <div class="d-flex gap-2 align-items-center">
                                    <div class="ratio ratio-1x1" style="width: 2rem; min-width: 2rem;">
                                        <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                            <i class="sym sym-user-check-solid"></i>
                                        </span>
                                    </div>
                                    <h5 class="m-0 ms-1">
                                        Data Wali
                                    </h5>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row row-cols-1 g-3">
                                    <div class="col">
                                        <label for="inputExample10" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample10" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample11" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample11" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample12" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample12" placeholder="Placeholder">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card shadow-sm border-0 rounded-4" id="section-form-pendidikan-terakhir">
                            <div class="card-header bg-white border-light-subtle rounded-top-4 border-2">
                                <div class="d-flex gap-2 align-items-center">
                                    <div class="ratio ratio-1x1" style="width: 2rem; min-width: 2rem;">
                                        <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                            <i class="sym sym-graduation-hat-02-solid"></i>
                                        </span>
                                    </div>
                                    <h5 class="m-0 ms-1">
                                        Pendidikan Terakhir
                                    </h5>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row row-cols-1 g-3">
                                    <div class="col">
                                        <label for="inputExample13" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample13" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample14" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample14" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample15" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample15" placeholder="Placeholder">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card shadow-sm border-0 rounded-4" id="section-form-kebutuhan-khusus">
                            <div class="card-header bg-white border-light-subtle rounded-top-4 border-2">
                                <div class="d-flex gap-2 align-items-center">
                                    <div class="ratio ratio-1x1" style="width: 2rem; min-width: 2rem;">
                                        <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                            <i class="sym sym-graduation-hat-02-solid"></i>
                                        </span>
                                    </div>
                                    <h5 class="m-0 ms-1">
                                        Kebutuhan Khusus
                                    </h5>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row row-cols-1 g-3">
                                    <div class="col">
                                        <label for="inputExample16" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample16" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample17" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample17" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample18" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample18" placeholder="Placeholder">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card shadow-sm border-0 rounded-4" id="sectionFormLainnya">
                            <div class="card-header bg-white border-light-subtle rounded-top-4 border-2">
                                <div class="d-flex gap-2 align-items-center">
                                    <div class="ratio ratio-1x1" style="width: 2rem; min-width: 2rem;">
                                        <span class="d-flex align-items-center justify-content-center rounded-circle p-2 border">
                                            <i class="sym sym-dots-vertical-solid"></i>
                                        </span>
                                    </div>
                                    <h5 class="m-0 ms-1">
                                        Lainnya
                                    </h5>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row row-cols-1 g-3">
                                    <div class="col">
                                        <label for="inputExample19" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample19" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample20" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample20" placeholder="Placeholder">
                                    </div>
                                    <div class="col">
                                        <label for="inputExample21" class="form-label">
                                            Label
                                        </label>
                                        <input type="text" class="form-control" id="inputExample21" placeholder="Placeholder">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- [END] Content -->
        ${Footer.getFooter('Default', false, true)}
    </main>
    <!-- [END] Main -->
    `;
    const mainSecond = `
    <!-- [START] Main -->
    <main class="qn-main bg-body-tertiary d-flex flex-column">
        <!-- [START] Content -->
        <div class="container-fluid p-0">
            <div class="w-100 p-2 bg-white">
                <div class="w-100 p-2 py-md-3 py-xl-4 rounded-4 ${variant == 'Second Alt' ? "" : "bg-body-tertiary"}">
                    <!-- <div class="row"> -->
                        <form method="GET" action="#" id="advancedForm" class="qn-form col-xl-8 offset-xl-2 position-relative">
                            <div class="row px-3 row-cols-1 gy-4">
                                <div class="card p-0 border-0 rounded-4 ${variant == 'Second Alt' ? "" : "shadow-sm"}">
                                    <div class="card-body p-3 px-md-4 p-xl-4 px-xl-5">
                                        <div class="row row-cols-1 row-cols-md-2 g-3">
                                            <div class="col-md-12">
                                                <div class="d-flex flex-column gap-1 mb-2">
                                                    <h1 class="fs-5 fw-medium mb-0">General</h1>
                                                    <p class="fs-6 fw-medium text-secondary mb-0">Short Description about title</p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputNIM" class="form-label">
                                                    NIM<span class="text-danger">*</span>
                                                </label>
                                                <input type="number" class="form-control" id="inputNIM" placeholder="Placeholder" value="14410100112" required>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputNamaMahasiswa" class="form-label">
                                                    Nama Mahasiswa<span class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" id="inputNamaMahasiswa" placeholder="Placeholder" value="Aulia Putri Yasmin" required>
                                            </div>
                                            <div class="col-md-12">
                                                <label class="form-label">
                                                    Jenis Kelamin<span class="text-danger">*</span>
                                                </label>
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" type="radio" name="jenis_kelamin" id="radioJenisKelaminLakiLaki">
                                                    <label class="form-check-label" for="radioJenisKelaminLakiLaki">
                                                        Laki-Laki
                                                    </label>
                                                </div>
                                                <div class="form-check m-0">
                                                    <input class="form-check-input" type="radio" name="jenis_kelamin" id="radioJenisKelaminPerempuan" checked>
                                                    <label class="form-check-label" for="radioJenisKelaminPerempuan">
                                                        Perempuan
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputTempatLahir" class="form-label">
                                                    Tempat Lahir<span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" id="inputTempatLahir" required>
                                                    <option value="">Placeholder</option>
                                                    <option value="1" selected>Makassar</option>
                                                    <option value="2">Surabaya</option>
                                                    <option value="3">Malang</option>
                                                    <option value="4">Jakarta</option>
                                                    <option value="5">Balikpapan</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputTanggalLahir" class="form-label">
                                                    Tanggal Lahir<span class="text-danger">*</span>
                                                </label>
                                                <input type="date" class="form-control" id="inputTanggalLahir" placeholder="Placeholder" value="2000-10-28" required>
                                            </div>
                                            <div class="col-md-12">
                                                <label for="inputProgramStudi" class="form-label">
                                                    Program Studi<span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" id="inputProgramStudi" required>
                                                    <option value="">Placeholder</option>
                                                    <option value="1" selected>Desain Komunikasi Visual</option>
                                                    <option value="2">Sistem Informasi</option>
                                                    <option value="3">Teknik Informatika</option>
                                                    <option value="4">Informatika</option>
                                                    <option value="5">Komunikasi</option>
                                                </select>
                                            </div>
                                            <div class="col-md-12">
                                                <label for="inputPeriodeMasuk" class="form-label">
                                                    Periode Masuk<span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" id="inputPeriodeMasuk" required>
                                                    <option value="">Placeholder</option>
                                                    <option value="1">2022/2023</option>
                                                    <option value="2" selected>2023/2024</option>
                                                    <option value="3">2024/2025</option>
                                                    <option value="4">2025/2026</option>
                                                    <option value="5">2026/2027</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputSistemKuliah" class="form-label">
                                                    Sistem Kuliah<span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" id="inputSistemKuliah" required>
                                                    <option value="">Placeholder</option>
                                                    <option value="1">Beasiswa</option>
                                                    <option value="2" selected>Reguler</option>
                                                    <option value="3">UNBK/UTBK</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputKelasKelompok" class="form-label">
                                                    Kelas / Kelompok<span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" id="inputKelasKelompok" required>
                                                    <option value="">Placeholder</option>
                                                    <option value="1" selected>Kelas A</option>
                                                    <option value="2">Kelas B</option>
                                                    <option value="3">Kelas C</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputGelombang" class="form-label">
                                                    Gelombang<span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" id="inputGelombang" required>
                                                    <option value="">Placeholder</option>
                                                    <option value="1" selected>1 (Satu)</option>
                                                    <option value="2">2 (Dua)</option>
                                                    <option value="3">3 (Tiga)</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputTanggalMasuk" class="form-label">
                                                    Tanggal Masuk<span class="text-danger">*</span>
                                                </label>
                                                <input type="date" class="form-control" id="inputTanggalMasuk" placeholder="Placeholder" value="2024-03-16" required>
                                            </div>
                                            <div class="col-md-12">
                                                <label for="inputKebutuhanKhusus" class="form-label">
                                                    Kebutuhan Khusus<span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" id="inputKebutuhanKhusus" required>
                                                    <option value="">Placeholder</option>
                                                    <option value="1" selected>Tidak berkebutuhan khusus</option>
                                                    <option value="2">Berkebutuhan khusus</option>
                                                </select>
                                            </div>
                                            <hr class="border-dark-subtle my-4 col-md-12">
                                            <div class="col-md-12 mt-0">
                                                <div class="d-flex flex-column gap-1 mb-2">
                                                    <h1 class="fs-5 fw-medium mb-0">Asal Sekolah</h1>
                                                    <p class="fs-6 fw-medium text-secondary mb-0">Short Description about title</p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <label for="inputPendidikanTerakhir" class="form-label">
                                                    Pendidikan Terakhir<span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" id="inputPendidikanTerakhir" required>
                                                    <option value="">Placeholder</option>
                                                    <option value="1" selected>SMP (Sekolah Menengah Pertama)</option>
                                                    <option value="2">SMA (Sekolah Menengah Akhir)</option>
                                                    <option value="3">SMK (Sekolah Menengah Kejuruan)</option>
                                                    <option value="4">MA (Madrasah Aliyah)</option>
                                                </select>
                                            </div>
                                            <div class="col-md-12">
                                                <label for="inputNomorIjazah" class="form-label">
                                                    Nomor Ijazah<span class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" id="inputNomorIjazah" placeholder="Placeholder" value="DN-01 DI 123456" required>
                                            </div>
                                            <div class="col-md-12">
                                                <label for="inputNamaSekolah" class="form-label">
                                                    Nama Sekolah<span class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" id="inputNamaSekolah" placeholder="Placeholder" value="SMA Negeri 1 Surabaya" required>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputKotaSekolah" class="form-label">
                                                    Kota Sekolah<span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" id="inputKotaSekolah" required>
                                                    <option value="">Placeholder</option>
                                                    <option value="1" selected>Surabaya</option>
                                                    <option value="2">Malang</option>
                                                    <option value="3">Jakarta</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputNoHp" class="form-label">
                                                    No Hp<span class="text-danger">*</span>
                                                </label>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="codeID">+62</span>
                                                    <input type="number" class="form-control" id="inputNoHp" placeholder="Placeholder" value="81234567890" required aria-describedby="codeID">
                                                </div>
                                            </div>
                                            <hr class="border-dark-subtle my-4 col-md-12">
                                            <div class="col-md-12 mt-0">
                                                <div class="d-flex flex-column gap-1 mb-2">
                                                    <h1 class="fs-5 fw-medium mb-0">Alamat Domisili</h1>
                                                    <p class="fs-6 fw-medium text-secondary mb-0">Short Description about title</p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <label for="inputAlamatLengkap" class="form-label">
                                                    Alamat Lengkap<span class="text-danger">*</span>
                                                    <i class="sym sym-help-circle" data-bs-toggle="tooltip" data-bs-title="Masukkan alamat lengkap..."></i>
                                                </label>
                                                <textarea id="inputAlamatLengkap" class="form-control" rows="4" required>Medokan Asri Tengah MA-2 Blok Q No 16, Medokan Ayu, Kec. Rungkut, Surabaya, Jawa Timur 60295</textarea>
                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputRT" class="form-label">
                                                    RT<span class="text-danger">*</span>
                                                </label>
                                                <input type="number" class="form-control" id="inputRT" placeholder="Placeholder" value="28" required>
                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputRW" class="form-label">
                                                    RW<span class="text-danger">*</span>
                                                </label>
                                                <input type="number" class="form-control" id="inputRW" placeholder="Placeholder" value="11" required>
                                            </div>
                                            <div class="col-md-4">
                                                <label for="inputKodePos" class="form-label">
                                                    Kode Pos<span class="text-danger">*</span>
                                                </label>
                                                <input type="number" class="form-control" id="inputKodePos" placeholder="Placeholder" value="788290" required>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputProvinsi" class="form-label">
                                                    Provinsi<span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" id="inputProvinsi" required>
                                                    <option value="">Placeholder</option>
                                                    <option value="1" selected>Jawa Timur</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputKotaKabupaten" class="form-label">
                                                    Kota / Kabupaten<span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" id="inputKotaKabupaten" required>
                                                    <option value="">Placeholder</option>
                                                    <option value="1" selected>Surabaya</option>
                                                </select>
                                            </div>
                                            <div class="col-md-12">
                                                <label for="inputKecamatan" class="form-label">
                                                    Kecamatan<span class="text-danger">*</span>
                                                </label>
                                                <select class="form-select" id="inputKecamatan" required>
                                                    <option value="">Placeholder</option>
                                                    <option value="1" selected>Rungkut</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    <!-- </div> -->
                </div>
            </div>
        </div>
        <!-- [END] Content -->
        <!-- [START] Footer -->
            <!-- Not use here -->
        <!-- [END] Footer -->
    </main>
    <!-- [END] Main -->
    `;

    if(variant == 'Default'){
        main = mainDefault;
        subheaderVariant = 'On Form';
        bottomNav = BottomNav.getBottomNavForm(advance);
    }else if(variant == 'Second' || variant == 'Second Alt' && advance == false){
        main = mainSecond;
        subheaderVariant= 'On Form Alt';
        bottomNav = BottomNav.getBottomNavForm();
    }else if(variant == 'Second' || variant == 'Second Alt' && advance == true){
        main = mainSecond;
        subheaderVariant= 'On Form Alt Stepper';
        bottomNav = BottomNav.getBottomNavForm(false, true);
    }
    
    const html = `
    ${Header.getHeader(subheaderVariant, false)}
    ${main}
    ${bottomNav}
    `;

    return html;
};
