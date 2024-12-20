export default function Navbar() {
    return (
        <header className="qn-header z-2 sticky-top">
            <div className="qn-header-pattern p-md-3 py-3 px-xl-5 bg-primary text-white">
                <div className="container-fluid">
                    <div
                        className="d-flex flex-wrap flex-nowrap align-items-center justify-content-start"
                    >
                        <div className="d-flex gap-2 gap-md-3 align-items-center">
                            <button
                                className="btn btn-icon btn-lg btn-light rounded-1 bg-transparent text-white d-block d-lg-none"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i className="sym sym-menu-03"></i>
                            </button>
                            <a
                                href="#"
                                className="qn-identity d-flex align-items-center link-body-emphasis text-decoration-none rounded-3 bg-white"
                            >
                                <img
                                    className="img-fluid w-auto h-100 object-fit-contain"
                                    src="https://quantum.sevima.com/s/storybook-static/assets/logo-kampus-h-zGziEp.webp"
                                    alt="Example Campus Logo"
                                />
                            </a>
                            <div className="d-flex flex-column">
                                <span>SIM Akademik</span>
                                <h5 className="m-0">Universitas Islam Sevima Indonesia</h5>
                            </div>
                        </div>
                        <div className="ms-auto d-flex align-items-center gap-1">
                            <div className="d-none d-md-flex align-items-center gap-1">
                                
                                <a
                                    href="#"
                                    className="btn btn-light p-2 py-1 bg-transparent text-white border-0 me-1"
                                    aria-label="Notifikasi"
                                >
                                    <i className="sym sym-bell"></i>
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-light p-2 py-1 bg-transparent text-white border-0 me-1"
                                    aria-label="Bantuan"
                                >
                                    <i className="sym sym-help-circle"></i>
                                </a>
                              
                                <a
                                    href="#"
                                    className="btn btn-light p-2 py-1 bg-transparent text-white border-0"
                                    aria-label="Pindah Modul"
                                >
                                    <i className="sym sym-dots-grid-solid"></i>
                                    <span className="d-none d-lg-inline-block ms-2">Module</span>
                                </a>
                            </div>

                            <hr className="d-none d-md-block vr mx-2" />

                            <div
                                className="dropdown d-none d-md-block rounded-4 bg-white text-black p-1"
                            >
                                <a
                                    href="#"
                                    className="d-flex gap-1 align-items-center link-body-emphasis text-decoration-none dropdown-toggle pe-1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                        alt="mdo"
                                        width="32"
                                        height="32"
                                        className="rounded-4"
                                    />
                                    <span className="qn-avatar-name d-none d-lg-block text-truncate">
                                        Aditya Kara
                                    </span>
                                </a>
                                <ul className="dropdown-menu pt-0 text-small" style={{ width: "296px" }}>
                                    <li>
                                        <div className="d-flex flex-column gap-2 p-3 py-4 pb-3 text-nowrap">
                                            <div className="d-flex align-items-center gap-3">
                                                <img
                                                    src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                    alt="mdo"
                                                    width="56"
                                                    height="56"
                                                    className="rounded-4"
                                                />
                                                <div className="d-block">
                                                    <h6 className="mb-1">Aditya Kara</h6>
                                                    <span className="text-muted">Administrator</span>
                                                </div>
                                            </div>
                                            <div className="d-block">
                                                <span className="text-muted m-0 fw-bold">Penyimpanan</span>
                                                <div
                                                    className="progress mt-1"
                                                    role="progressbar"
                                                    aria-label="Basic example"
                                                    aria-valuenow="75"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                    style={{ height: ".25rem" }}
                                                >
                                                    <div className="progress-bar" style={{ width: "54%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item d-flex flex-nowrap justify-content-between"
                                            href="#"
                                        >
                                            Ganti Role
                                            <i className="sym sym-refresh-ccw-02"></i>
                                        </a>
                                    </li>
                                    <li className="d-block d-md-none">
                                        <a className="dropdown-item" href="#">Pindah Modul</a>
                                    </li>
                                    <li className="d-block d-md-none">
                                        <a className="dropdown-item" href="#">Notifikasi</a>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Pengaturan Akun</a></li>
                                    <li><a className="dropdown-item" href="#">Media Library</a></li>
                                    <li><a className="dropdown-item" href="#">Upgrade PRO</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <i className="sym sym-translate me-2"></i>
                                            Bahasa Indonesia
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <i className="sym sym-help-circle-solid me-2"></i>
                                            Bantuan
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item text-danger" href="#">
                                            <i className="sym sym-arrow-left-solid me-2"></i>
                                            Keluar
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="d-block d-md-none rounded-4 bg-white text-black p-1">
                                <a
                                    href="#avatarModal"
                                    className="d-flex gap-1 align-items-center link-body-emphasis text-decoration-none dropdown-toggle pe-1"
                                    data-bs-toggle="modal"
                                >
                                    <img
                                        src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                        alt="mdo"
                                        width="32"
                                        height="32"
                                        className="rounded-4"
                                    />
                                    <span className="qn-avatar-name d-none d-lg-block text-truncate">
                                        Aditya Kara
                                    </span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="p-md-3 py-md-0 px-xl-5 border-bottom shadow-sm bg-white">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg p-0 bg-white">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="w-100 navbar-nav py-1 gap-1">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active text-primary"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Beranda
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Portal
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">List</a></li>
                                        <li><a className="dropdown-item" href="#">Detail</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">List (with Sidebar)</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Detail (with Sidebar)</a>
                                        </li>
                                        <li><a className="dropdown-item" href="#">List Mobile Nav</a></li>
                                        <li><a className="dropdown-item" href="#">Form</a></li>
                                        <li><a className="dropdown-item" href="#">Advanced Form</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Sign In</a></li>
                                        <li><a className="dropdown-item" href="#">Sign Up</a></li>
                                        <li><a className="dropdown-item" href="#">Advanced Sign In</a></li>
                                        <li><a className="dropdown-item" href="#">Advanced Sign Up</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Select Module</a></li>
                                        <li><a className="dropdown-item" href="#">Select Role</a></li>
                                        <li><a className="dropdown-item" href="#">Handler</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Perkuliahan
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Kemahasiswaan
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Kampus Merdeka
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Data Pelengkap
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Laporan
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Pengaturan
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}