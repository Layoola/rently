import Link from "next/link"
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

const footerLinks = [
  { name: "Company", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Privacy & Legal", href: "#" },
  { name: "Cookie Settings", href: "#" },
  { name: "Newsletter", href: "#" },
]

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="flex flex-row flex-wrap justify-start space-y-4 space-x-6 mb-6">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-nowrap font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col justify-between items-start">
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer