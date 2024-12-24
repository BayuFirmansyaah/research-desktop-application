type TablesProps = {
    dataList: Array<Object>
}

const Tables: React.FC<TablesProps> = ({ dataList }) => {
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
                            <th>
                                <button
                                    className="btn p-0 border-0 w-100 h-100 text-start"
                                    aria-label="Photo: active to sort"
                                >
                                    Jenis Kelamin
                                    <i className="float-end sym sym-switch-vertical"></i>
                                </button>
                            </th>
                            <th>
                                <button
                                    className="btn p-0 border-0 w-100 h-100 text-start"
                                    aria-label="Photo: active to sort"
                                >
                                    Nama Mahasiswa
                                    <i className="float-end sym sym-switch-vertical"></i>
                                </button>
                            </th>
                            <th>
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
                        {dataList.map((item: any, index: number) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        aria-label="Centang data dengan NIM: 1455201001"
                                    />
                                </td>
                                <td>{ item.nim }</td>
                                <td>{ item.nama_mahasiswa }</td>
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
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Tables