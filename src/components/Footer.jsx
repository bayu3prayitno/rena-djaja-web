import React from "react";
import {
  ChefHat,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold">Rena Djaja</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              perspiciatis tandem voluptatem avarus vel appello distinctio tero
              placeat animadverto ventito patruus tripudio infit bis velit
              vicissitudo texo abstergo.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-gray-300 text-sm">+62 857 1234 5678</span>
              </div>
              <div className="flex items-start space-x-2">
                <Instagram className="h-4 w-4 text-red-600 mt-0.5" />
                <span className="text-gray-300 text-sm">@renadjaja</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-gray-300 text-sm">
                  info@renadjaja.example.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-red-600 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Jl. jalanan No. 123
                  <br />
                  Semarang, Indonesia
                </span>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <div>
              <iframe
                title="Lokasi Rena Djaja"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15838.39388923213!2d110.4228611!3d-6.9903611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTknMjUuMyJTIDExMMKwMjUnMjIuMyJF!5e0!3m2!1sen!2sid!4v1723200000000!5m2!1sen!2sid"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Info */}
        </div>
        <div className="flex items-center gap-4 p-2 max-w-sm">
          <img
            src="halal.png"
            alt="Moto Cap Mobil"
            className="w-12 h-12 object-contain"
          />
          <p className="text-gray-400 text-xs leading-snug">
            Seluruh produk kami telah mendapatkan sertifikat halal dari Majelis
            Ulama Indonesia (MUI) dan Badan Penyelenggara Jaminan Produk Halal
            (BPJPH)
          </p>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rena Djaja. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
