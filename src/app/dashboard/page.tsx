import Tables from "@/components/Tables"
import Navbar from "@/components/Navbar"

export default function Dashboard() {
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