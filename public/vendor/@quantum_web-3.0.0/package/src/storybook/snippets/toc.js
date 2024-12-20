export function getToc(){
    const html = `
    <div class="qn-toc-collapse col-md-3 col-xxl-2 collapse collapse-horizontal show p-0" id="toc">
        <!-- [START REDUNDANT CONTENT] Form ToC (fmt. 1) -->
        <div class="qn-toc d-none d-md-block ps-3 ps-xl-5 pe-1 py-3 sticky-top z-0">
            <h6 class="mb-3">Table of Content</h6>
            <ul class="list-unstyled ps-3 d-flex flex-column gap-1 overflow-hidden">
                <li>
                    <a href="#sectionFormDataMahasiswa"
                        class="qn-toc-item position-relative text-reset text-decoration-none d-block rounded-2 p-2"
                    >
                        Data Mahasiswa
                    </a>
                </li>
                <li>
                    <a href="#sectionFormInformasiUmum"
                        class="qn-toc-item position-relative text-reset text-decoration-none d-block rounded-2 p-2"
                    >
                        Informasi Umum
                    </a>
                </li>
                <li>
                    <a href="#section-form-domisili"
                        class="qn-toc-item position-relative text-reset text-decoration-none d-block rounded-2 p-2"
                    >
                        Domisili atau Wilayah
                    </a>
                </li>
                <li>
                    <a href="#section-form-data-ortu"
                        class="qn-toc-item position-relative text-reset text-decoration-none d-block rounded-2 p-2"
                    >
                        Data Orang Tua
                    </a>
                </li>
                <li>
                    <a href="#sectionFormDataWali"
                        class="qn-toc-item position-relative text-reset text-decoration-none d-block rounded-2 p-2"
                    >
                        Data Wali
                    </a>
                </li>
                <li>
                    <a href="#section-form-pendidikan-terakhir"
                        class="qn-toc-item position-relative text-reset text-decoration-none d-block rounded-2 p-2"
                    >
                        Pendidikan Terakhir
                    </a>
                </li>
                <li>
                    <a href="#section-form-kebutuhan-khusus"
                        class="qn-toc-item position-relative text-reset text-decoration-none d-block rounded-2 p-2"
                    >
                        Kebutuhan Khusus
                    </a>
                </li>
                <li>
                    <a href="#sectionFormLainnya"
                        class="qn-toc-item position-relative text-reset text-decoration-none d-block rounded-2 p-2"
                    >
                        Lainnya
                    </a>
                </li>
            </ul>
        </div>
        <!-- [END REDUNDANT CONTENT] Form ToC (fmt. 1) -->
    </div>
    `
    return html;
}

export function getTocTabToggle(){
    const html = `
    <hr class="qn-toc-vr d-none d-md-block d-xl-none vr m-0 position-absolute start-0 top-0 h-100">
    <div class="qn-toc-toggle d-none d-md-block d-xl-none sticky-top">
        <button type="button" class=" btn btn-light btn-sm rounded-3 border" data-bs-toggle="collapse" data-bs-target="#toc">
            <i class="sym sym-chevron-left-double show"></i>
            <i class="sym sym-chevron-right-double"></i>
        </button>
    </div>
    `
    return html;
}
