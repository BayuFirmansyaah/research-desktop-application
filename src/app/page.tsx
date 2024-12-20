import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="grid min-vh-100">
        <div className="g-col-12 g-col-lg-6 p-4 d-flex flex-column">
          
          <div className="d-flex align-items-center gap-3">
            <div className="ratio ratio-1x1" style={{ maxWidth: "3rem" }}>
              <Image
                src="/image/siakad.webp"
                alt="Example Campus Logo"
                width={100}
                height={100}
              />
            </div>
            <hr className="vr align-self-stretch my-1" />
            <h1 className="fs-6 fw-semibold m-0" style={{ maxWidth: "11.25rem" }}>
              Universitas Nusantara Sevima Surabaya
            </h1>
          </div>

          <div className="w-100 m-auto py-5" style={{ maxWidth: "26.75rem"}}>
            <h2 className="fs-4 fw-semibold mb-2">Masuk ke Profeeder</h2>
            <p className="text-body-secondary mb-4">
              Masuk ke akun yang telah terdaftar untuk merevolusi dunia pendidikan
              yang lebih baik.
            </p>

            <form action="./list.html" className="row row-cols-1 g-3">
              <div className="col">
                <label className="form-label">
                  Email
                  <i
                    className="sym sym-info-default"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Masukan email yang sudah terdaftar"
                  ></i>
                </label>
                <input
                  type="email"
                  id="formControlInputEmail"
                  className="form-control"
                  placeholder="Masukan email dengan benar"
                />
              </div>
              <div className="col">
                <label className="form-label">
                  Password
                  <i
                    className="sym sym-info-default"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Masukan password setidaknya menggunakan 1 symbol"
                  ></i>
                </label>
                <input
                  type="password"
                  id="formControlInputPassword"
                  className="form-control"
                  placeholder="Masukan password"
                />
              </div>
              <div className="col d-flex align-items-center justify-content-between">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="inputCheckboxRememberMe"
                  />
                  <label className="form-check-label">
                    Ingat Saya
                  </label>
                </div>
                <a
                  className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  href="#"
                >
                  Lupa Password?
                </a>
              </div>
              <div className="col mt-4">
                <button type="submit" className="btn btn-primary w-100">Sign In</button>
              </div>
            </form>
          </div>

          <div className="container-fluid mt-auto bg-white border-top">
            <footer
              className="d-flex flex-column-reverse flex-lg-row flex-wrap justify-content-center justify-content-lg-between align-items-center py-1 py-md-3 gap-3"
            >
              <div className="d-flex gap-2 align-items-center">
                <a
                  href="#"
                  className="d-none d-md-block mb-md-0 text-body-secondary text-decoration-none lh-1"
                >
                  <Image
                    src="image/sevima.webp"
                    alt="Footer Logo"
                    width={70}
                    height={20}
                    />
                </a>
                <span className="mb-0 fs-7 text-body-tertiary">
                  © 2005-2023 SEVIMA. All Rights Reserved
                </span>
              </div>
            </footer>
          </div>
        </div>

        <div className="d-none d-lg-block g-col-lg-6 p-4">
          <Image
            className="w-100 h-100 object-fit-cover rounded-4"
            src="/image/bg-login.webp"
            alt="Login Background"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>

  );
}
