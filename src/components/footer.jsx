export default function Footer() {
  return (
    <footer className="bg-zinc-200 text-black py-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-4">FieldMaven</h5>
            <p className="text-sm" style={{ paddingRight: 30 }}>
              {" "}
              FieldMaven is an AI-powered tool that helps farmers detect plant diseases instantly by analyzing uploaded images. Using advanced machine learning models, it provides quick and accurate disease predictions along with treatment suggestions. With a simple interface, Crop App makes modern farming smarter and more efficient. 
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-4">Quick Links</h5>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/schemes" className="hover:underline">
                  Latest Schemes
                </a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>{" "}
          </div>{" "}
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-bold mb-4">Contact Us</h5>
            <p className="text-sm mb-2">BCE,Bhagalpur, 2K21 , IN 813210</p>
            <p className="text-sm mb-2">Phone: SSLH </p>
            <p className="text-sm">Email: info@fieldMavenBCE.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; 2024 FieldMaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
