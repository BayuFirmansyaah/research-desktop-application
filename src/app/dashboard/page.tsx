"use client";

import React, { useEffect, useState } from "react";
import Tables from "@/components/Tables"
import Navbar from "@/components/Navbar"
import WS from "@/utils/WS"

export default function Dashboard() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const ws = new WS();
            let biodata = await ws.ws2RunLoop("GetListRiwayatPendidikanMahasiswa", {filter: "1=1", limit: 15});

            setData(biodata.data);
            setLoading(false);
            setError(null);
        }

        fetchData();
    })

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row row-cols-1 gy-3 p-3 p-lg-4">
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                            <div className="row d-flex">
                                <div className="w-100 mb-4">
                                    <h4 className="text-left">Riwayat Pendidikan Mahasiswa</h4>
                                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minus ab molestias, in cumque tempora ipsa. Sunt animi natus, tempore ullam praesentium pariatur illo laudantium. Modi voluptatibus incidunt officiis itaque suscipit, ipsa laborum. Sed magnam, accusantium minima voluptatibus cupiditate temporibus tempore officia accusamus natus, sapiente vel dolor blanditiis dicta perferendis.</p>

                                    <div className="d-flex w-100 gap-3">
                                        <button className="btn btn-primary">Komparasi</button>
                                        <button className="btn btn-success">Kirim Data</button>
                                    </div>
                                </div>
                                <div style={{ minHeight: "550px", width: "50%"}}>
                                    <Tables dataList={data} />
                                </div>
                                <div style={{ width: "50%" }}>
                                    <Tables dataList={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}