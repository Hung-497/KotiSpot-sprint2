import logo from "../assets/KotiSpot_logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#f1f7f4] px-6 py-10 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-350 flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <img src={logo} alt="KotiSpot" className="h-auto w-57.5" /></div>

        <div className="flex-1">
          <h3 className="mb-4 text-lg font-bold">Explore</h3>

          <ul className="space-y-2 text-black-600">
            <li>
              <a href="#" className="transition-colors hover:text-[#1f7356]">Buy a Home</a></li>

            <li>
              <a href="#" className="transition-colors hover:text-[#1f7356]">Rent a Home</a></li>

            <li>
              <a href="#" className="transition-colors hover:text-[#1f7356]">Properties</a></li>

            <li>
              <a href="#" className="transition-colors hover:text-[#1f7356]">Favorites</a></li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="mb-4 text-lg font-bold">Helpful Links</h3>

          <ul className="space-y-2 text-black-600">

            <li>
              <a href="#" className="transition-colors hover:text-[#1f7356]">Contact</a></li>

            <li>
              <a href="#" className="transition-colors hover:text-[#1f7356]">FAQ</a></li>

            <li>
              <a href="#" className="transition-colors hover:text-[#1f7356]">Privacy Policy</a></li>

            <li>
              <a href="#" className="transition-colors hover:text-[#1f7356]">Terms of Service</a></li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="mb-4 text-lg font-bold">Create your account</h3>

          <p className="mb-4 max-w-320px text-black-600">Get your property now!</p>

          <form className="flex max-w-380px">
            <input type="email" placeholder="Enter your email" className="min-w-0 flex-1 rounded-1-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-black"/>
            <button type="submit" className="bg-[#1f7356] px-5 py-3 text-white font-medium transition hover:bg-[#1a5e45]">Subscribe</button>
          </form>

        </div>

      </div>


      <div className="mx-auto mt-12 flex max-w-350 flex-col gap-5 border-t border-gray-300 pt-6 text-sm md:flex-row md:justify-between">
        <div className="footer-location">
          <span>FI Finland</span>
          <span>🌐 English | Suomi</span>
        </div>

        <div className="footer-copyright">
          <p>© 2026 KotiSpot. All rights reserved.</p>
        </div>

        <div className="footer-socials-medias">
          <a href="#">GitHub</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
          <a href="#">Pinterest</a>
          <a href="#">Reddit</a>
        </div>

      </div>

    </footer>
  )
}

export default Footer