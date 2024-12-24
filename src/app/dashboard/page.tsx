"use client";

import React, { useEffect, useState } from "react";
import Tables from "@/components/Tables"
import Navbar from "@/components/Navbar"
import WS from "@/utils/WS"

export default function Dashboard() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const ws = new WS();
            let biodata = await ws.ws2RunLoop("GetListRiwayatPendidikanMahasiswa", {filter: "1=1", limit: 10});
        }

        fetchData();
    })

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row row-cols-1 gy-3 p-3 p-lg-4">
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                            <div
                                className="row d-flex align-items-center justify-content-between gap-2"
                            >
                                <Tables />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}