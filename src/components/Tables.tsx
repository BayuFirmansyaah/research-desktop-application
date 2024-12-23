export default function Tables() {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered align-middle">
                    <thead className="align-middle">
                        <tr className="table-light">
                            <th style={{ minWidth: "36px", width: "36px" }}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang semua data pada tabel"
                                />
                            </th>
                            <th style={{ minWidth: "248px" }}>
                                <button
                                    className="btn p-0 border-0 w-100 h-100 text-start"
                                    aria-label="Photo: active to sort"
                                >
                                    Group
                                    <i className="float-end sym sym-switch-vertical"></i>
                                </button>
                            </th>
                            <th style={{ minWidth: "120px", width: "10%" }}>
                                <button
                                    className="btn p-0 border-0 w-100 h-100 text-start"
                                    aria-label="Photo: active to sort"
                                >
                                    String I
                                    <i className="float-end sym sym-switch-vertical"></i>
                                </button>
                            </th>
                            <th style={{ minWidth: "120px", width: "10%" }}>
                                <button
                                    className="btn p-0 border-0 w-100 h-100 text-start"
                                    aria-label="Photo: active to sort"
                                >
                                    Number I
                                    <i className="float-end sym sym-switch-vertical"></i>
                                </button>
                            </th>
                            <th style={{ minWidth: "140px", width: "10%" }}>
                                <button
                                    className="btn p-0 border-0 w-100 h-100 text-start"
                                    aria-label="Photo: active to sort"
                                >
                                    Status
                                    <i className="float-end sym sym-switch-vertical"></i>
                                </button>
                            </th>
                            <th className="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">-</td>
                            <td>
                                <span
                                    className="badge text-success bg-success bg-opacity-10 border border-success"
                                >
                                    Aktif
                                </span>
                            </td>
                            <td style={{ width: "124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-danger bg-danger bg-opacity-10 border border-danger"
                                >
                                    Tidak Aktif
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{width: "124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    aria-label="Centang data dengan NIM: 1455201001"
                                />
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="ratio ratio-1x1" style={{ width:"32px" }}>
                                        <div className="rounded-circle overflow-hidden">
                                            <img
                                                className="object-fit-cover w-100"
                                                src="https://quantum.sevima.com/s/storybook-static/assets/profile-picture-DLXSk8tp.webp"
                                                alt="Foto dari NIM 1455201001"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-block">
                                        <span className="d-block fs-6 fw-medium text-primary">
                                            Mayang Larasati
                                        </span>
                                        <span className="d-block fs-6 text-secondary">
                                            1455201001
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>Strata 1</td>
                            <td className="text-end">3.83</td>
                            <td>
                                <span
                                    className="badge text-warning bg-warning bg-opacity-10 border border-warning"
                                >
                                    Lulus
                                </span>
                            </td>
                            <td style={{ width:"124px" }}>
                                <div
                                    className="d-flex align-items-center justify-content-end gap-1"
                                >
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="Lihat detail"
                                    >
                                        <i className="sym sym-eye-solid"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="d-none d-md-block btn btn-icon btn-sm btn-outline-secondary"
                                        aria-label="hapus"
                                    >
                                        <i className="sym sym-trash-solid"></i>
                                    </button>
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown-toggle-iconless"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Aksi lainnya"
                                        >
                                            <i className="sym sym-dots-horizontal"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Detail
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-block d-md-none" href="#">
                                                    Hapus
                                                </a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}