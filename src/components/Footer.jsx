import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A202C] text-background/80 py-8 md:py-10 border-t border-background/10">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {/* Brand Col */}
        <div className="col-span-2 md:col-span-1">
          <div className="text-background text-xl font-bold tracking-tight mb-4">
            CRITIGEN <span className="text-primary font-medium">PHARMA</span>
          </div>
          <p className="text-xs leading-relaxed mb-4 text-background/70">
            Advancing critical care and improving lives globally through precision, innovation, and unwavering commitment to quality.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-background/60 hover:text-primary transition-colors"><Globe size={18} /></a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors"><MessageCircle size={18} /></a>
          </div>
        </div>

        {/* Links Col */}
        <div className="col-span-1">
          <h4 className="text-background font-semibold mb-4 uppercase tracking-wider text-xs">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/science" className="hover:text-primary transition-colors">Our Science</Link></li>
            <li><Link to="/infrastructure" className="hover:text-primary transition-colors">Infrastructure</Link></li>
            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Products Col */}
        <div className="col-span-1">
          <h4 className="text-background font-semibold mb-4 uppercase tracking-wider text-xs">Portfolio</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Injectables</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Oral Solid Dosage</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Anti-infectives</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Critical Care</Link></li>
          </ul>
        </div>

        {/* Contact Col */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-background font-semibold mb-4 uppercase tracking-wider text-xs">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <MapPin size={16} className="mr-2 text-primary shrink-0 mt-0.5" />
              <span className="text-background/80">
                3rd Flr, 15-31-1/HIG-V-71, Phase V, Kukatpally, KPHB Colony, Tirumalagiri, Hyderabad- 500085, Telangana</span>
            </li>
            <li className="flex items-center">
              <Phone size={16} className="mr-2 text-primary shrink-0" />
              <span className="text-background/80">+91 8522801254</span>
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-2 text-primary shrink-0" />
              <span className="text-background/80">[EMAIL_ADDRESS]</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mt-8 md:mt-10 pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-xs text-background/50">
        <p className="text-center md:text-left mb-4 md:mb-0">&copy; {new Date().getFullYear()} Critigen Pharma Private Limited . All rights reserved.</p>
        <div className="flex space-x-6">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
