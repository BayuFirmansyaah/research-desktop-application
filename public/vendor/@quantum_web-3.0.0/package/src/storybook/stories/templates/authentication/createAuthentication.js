import * as Footer from "../../../snippets/footer"
import logoGoogle from "../../../assets/images/logo/google-square.svg"
import logoKampus from "../../../assets/images/example/logo-kampus.webp"
import bgModule from "../../../assets/images/example/background-module.webp"

export const createAuth = ({
    template,
    advance
} = {
}) => {
    let main = "";
    const signIn = `
    <h2 class="fs-4 fw-semibold mb-2 ${advance ? '' : 'text-center'}">Masuk ke SiakadCloud</h2>
    <p class="text-body-secondary mb-4 ${advance ? '' : 'text-center'}">
        Masuk ke akun yang telah terdaftar untuk
        merevolusi dunia pendidikan yang lebih baik.
    </p>
    <button type="button" class="btn btn-outline-secondary w-100">
        <span class="me-1">
            <img src="${logoGoogle}" alt="Login google icon">
        </span>
        Sign In dengan Google
    </button>
    <div class="d-flex align-items-center gap-2 my-4">
        <hr class="w-100 m-0">
        <p class="text-secondary m-0" style="min-width: fit-content;">atau login dengan Email</p>
        <hr class="w-100 m-0">
    </div>
    <form action="./list.html" class="row row-cols-1 g-3">
        <div class="col">
            <label for="formControlInputEmail" class="form-label">
                Email <i class="sym sym-info-default" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Masukan email yang sudah terdaftar"></i>
            </label>
            <input type="email" id="formControlInputEmail" class="form-control" placeholder="Masukan email dengan benar" required>
        </div>
        <div class="col">
            <label for="formControlInputPassword" class="form-label">
                Password <i class="sym sym-info-default" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Masukan password setidaknya menggunakan 1 symbol"></i>
            </label>
            <input type="password" id="formControlInputPassword" class="form-control" placeholder="Masukan password" required>
        </div>
        <div class="col d-flex align-items-center justify-content-between">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="inputCheckboxRememberMe">
                <label class="form-check-label" for="inputCheckboxRememberMe">
                    Ingat Saya
                </label>
            </div>
            <a class="link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
                Lupa Password?
            </a>
        </div>
        <div class="col mt-4">
            <button type="submit" class="btn btn-primary w-100">Sign In</button>
            <p class="text-center mb-0 mt-3">Belum punya akun? <a class="fw-semibold" href="#">Daftar di sini</a></p>
        </div>
    </form>
    `

    const signUp = `
    <h2 class="fs-4 fw-semibold mb-2 ${advance ? '' : 'text-center'}">Buat Akun SiakadCloud</h2>
    <p class="text-body-secondary mb-4 ${advance ? '' : 'text-center'}">
        Daftarkan diri Anda di SiakadCloud dan nikmati akses
        penuh ke platform akademik digital perguruan tinggi.
    </p>
    <button type="button" class="btn btn-outline-secondary w-100">
        <span class="me-1">
            <img src="${logoGoogle}" alt="Login google icon">
        </span>
        Lanjutkan dengan Google
    </button>
    <div class="d-flex align-items-center gap-2 my-4">
        <hr class="w-100 m-0">
        <p class="text-secondary m-0" style="min-width: fit-content;">atau gunakan</p>
        <hr class="w-100 m-0">
    </div>
    <form action="./list.html" class="row row-cols-1 g-3">
        <div class="col">
            <label for="formControlInputUsername" class="form-label">
                Username <i class="sym sym-info-default" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Masukan username"></i>
            </label>
            <input type="text" id="formControlInputUsername" class="form-control" placeholder="Masukan username" required>
        </div>
        <div class="col">
            <label for="formControlInputEmail" class="form-label">
                Email <i class="sym sym-info-default" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Masukan email yang sudah terdaftar"></i>
            </label>
            <input type="email" id="formControlInputEmail" class="form-control" placeholder="Masukan email dengan benar" required>
        </div>
        <div class="col">
            <label for="formControlInputPassword" class="form-label">
                Password <i class="sym sym-info-default" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Masukan password setidaknya menggunakan 1 symbol"></i>
            </label>
            <input type="password" id="formControlInputPassword" class="form-control" placeholder="Masukan password" required>
        </div>
        <div class="col">
            <label for="formControlInputConfirmPassword" class="form-label">
                Confirm Password <i class="sym sym-info-default" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Masukan ulang password"></i>
            </label>
            <input type="password" id="formControlInputConfirmPassword" class="form-control" placeholder="Masukan ulang password" required>
        </div>
        <div class="col">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="inputCheckboxAgree" required>
                <label class="form-check-label" for="inputCheckboxAgree">
                    Dengan membuat akun, Anda menyetujui Ketentuan Layanan,
                    Kebijakan Privasi, dan pengaturan standar kami.
                </label>
            </div>
        </div>
        <div class="col mt-4">
            <button type="submit" class="btn btn-primary w-100">Sign Up</button>
            <p class="text-center mb-0 mt-3">Sudah punya akun? <a class="fw-semibold" href="#">Masuk</a></p>
        </div>
    </form>
    `

    if(template == "sign-in"){
        main = signIn
    }else if(template == "sign-up"){
        main = signUp
    }

    const tempBasic = `
    <main>
        <div class="container d-flex min-vh-100">
            <div class="w-100 m-auto py-5" style="max-width: 26.75rem;">
                <div class="d-flex align-items-center justify-content-center gap-3 pb-5">
                    <div style="max-width: 2.75rem;">
                        <img class="w-100 h-100 object-fit-contain" src="${logoKampus}" alt="Example Campus Logo">
                    </div>
                    <hr class="vr align-self-stretch my-1">
                    <h1 class="fs-6 fw-semibold m-0">SEVIMA University</h1>
                </div>
                ${main}
            </div>
        </div>
    </main>
    `

    const tempAdvance = `
    <main>
        <div class="grid min-vh-100">
            <div class="g-col-12 g-col-lg-6 p-4 d-flex flex-column">
                <div class="d-flex align-items-center gap-3">
                    <div class="ratio ratio-1x1" style="max-width: 3rem;">
                        <img class="w-100 h-100 object-fit-contain" src="${logoKampus}" alt="Example Campus Logo">
                    </div>
                    <hr class="vr align-self-stretch my-1">
                    <h1 class="fs-6 fw-semibold m-0" style="max-width: 11.25rem;">
                        Universitas Nusantara Sevima Surabaya
                    </h1>
                </div>
                <div class="w-100 m-auto py-5" style="max-width: 26.75rem;">
                    ${main}
                </div>
                ${Footer.getFooter(true)}
            </div>
            <div class="d-none d-lg-block g-col-lg-6 p-4">
                <img class="w-100 h-100 object-fit-cover rounded-4" src="${bgModule}" alt="">
            </div>
        </div>
    </main>
    `

    const html = `
    ${advance ? tempAdvance : tempBasic}
    `;

    return html;
};
