import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-base-100 p-6 rounded-lg shadow-md mt-6 space-y-4">
      <div className="flex items-center justify-center bg-gray-50 p-4 rounded-lg">
        <Mail className="text-gray-600 mr-2" size={20} />
        <span className="text-gray-800">support@skillbridge.com</span>
      </div>
      <div className="flex items-center justify-center bg-gray-50 p-4 rounded-lg">
        <Phone className="text-gray-600 mr-2" size={20} />
        <span className="text-gray-800">+91 9000000000</span>
      </div>
      <div className="flex items-center justify-center bg-gray-50 p-4 rounded-lg">
        <MapPin className="text-gray-600 mr-2" size={20} />
        <span className="text-gray-800">Some Where in the World</span>
      </div>
      <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg">
        <div className="flex space-x-4 mb-2">
          <a href="#" aria-label="Facebook">
            <Facebook
              className="text-gray-600 hover:text-orange-500"
              size={20}
            />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter
              className="text-gray-600 hover:text-orange-500"
              size={20}
            />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram
              className="text-gray-600 hover:text-orange-500"
              size={20}
            />
          </a>
        </div>
        <p className="text-gray-600 text-sm">Social Profiles</p>
      </div>
    </div>
  );
};

export default ContactInfo;
