export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="text-2xl font-bold mb-4 block">
              LWS.SHOP
            </a>
            <p className="text-gray-600 mb-4">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
