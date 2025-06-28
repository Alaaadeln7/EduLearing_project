export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-2">
              E-Learning
            </h2>
            <p className="text-sm text-gray-400">
              Unlock your creative potential with online learning
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Company</h3>
              <ul className="space-y-1 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Support</h3>
              <ul className="space-y-1 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Social</h3>
              <ul className="space-y-1 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © 2025 E-Learning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
