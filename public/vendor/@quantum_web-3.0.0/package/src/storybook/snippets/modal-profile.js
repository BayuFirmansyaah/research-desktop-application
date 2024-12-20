import photoProfile from '../assets/images/example/profile-picture.webp';

export function getModalProfile() {
    return `
    <!-- [START] Modal -->
    <!-- [START REDUNDANT CONTENT] Header Avatar Group (fmt. 3) -->
    <div class="modal fade" id="avatarModal" tabindex="-1" aria-labelledby="avatarModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="avatarModalLabel">Aditya Kara</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="list-group">
                        <div class="d-flex flex-column gap-2 p-3 pb-3 text-nowrap">
                            <div class="d-flex align-items-center gap-3">
                                <img src="${photoProfile}" alt="mdo" width="56"
                                    height="56" class="rounded-4">
                                <div class="d-block">
                                    <h6 class="mb-1">Aditya Kara</h6>
                                    <span class="text-muted">Administrator</span>
                                </div>
                            </div>
                            <div class="d-block">
                                <span class="text-muted m-0 fw-bold">Penyimpanan</span>
                                <div class="progress mt-1" role="progressbar"
                                    aria-label="Basic example" aria-valuenow="75"
                                    aria-valuemin="0" aria-valuemax="100"
                                    style="height: .25rem;">
                                    <div class="progress-bar" style="width: 54%;"></div>
                                </div>
                            </div>
                        </div>
                        <a href="#"
                            class="list-group-item list-group-item-action rounded-3 border-0">
                            <div
                                class="dropdown-item d-flex flex-nowrap justify-content-between">
                                Ganti Role
                                <i class="sym sym-refresh-ccw-02"></i>
                            </div>
                        </a>
                        <!-- [START REDUNDANT CONTENT] Header Action (fmt. 2) -->
                        <a href="#"
                            class="list-group-item list-group-item-action rounded-3 border-0">Pindah
                            Modul</a>
                        <a href="#"
                            class="list-group-item list-group-item-action rounded-3 border-0">Notifikasi</a>
                        <!-- [END REDUNDANT CONTENT] Header Action (fmt. 2) -->
                        <a href="#"
                            class="list-group-item list-group-item-action rounded-3 border-0">Pengaturan
                            Akun</a>
                        <a href="#"
                            class="list-group-item list-group-item-action rounded-3 border-0">Media
                            Library</a>
                        <a href="#"
                            class="list-group-item list-group-item-action rounded-3 border-0">Upgrade
                            PRO</a>
                        <hr>
                        <a href="#"
                            class="list-group-item list-group-item-action rounded-3 border-0">
                            <i class="sym sym-translate me-2"></i>
                            Bahasa Indonesia
                        </a>
                        <a href="#"
                            class="list-group-item list-group-item-action rounded-3 border-0">
                            <i class="sym sym-help-circle-solid me-2"></i>
                            Bantuan
                        </a>
                        <a href="#"
                            class="list-group-item list-group-item-action rounded-3 border-0 text-danger">
                            <i class="sym sym-arrow-left-solid me-2"></i>
                            Keluar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- [END REDUNDANT CONTENT] Header Avatar Group (fmt. 3) -->
    <!-- [END] Modal -->
    `
}
