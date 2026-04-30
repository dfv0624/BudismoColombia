"use client"

import { motion } from "framer-motion"
import { Instagram, Mail, Heart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    [t.company]: [
      { name: t.about, href: "#" },
      { name: t.ourMission, href: "#mission" },
      { name: t.careers, href: "#" },
    ],
    [t.legal]: [
      { name: t.privacyPolicy, href: "#" },
      { name: t.termsOfService, href: "#" },
      { name: t.cookiePolicy, href: "#" },
    ],
    [t.support]: [
      { name: t.helpCenter, href: "#" },
      { name: t.contactUs, href: "#contact" },
      { name: t.faq, href: "#" },
    ],
  }

  return (
    <footer className="bg-foreground text-background py-16" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-serif text-2xl text-background mb-4">
                Anicca Mind
              </h3>
              <p className="text-background/70 leading-relaxed max-w-sm mb-6">
                {t.footerDesc}
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-background" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-background" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            >
              <h4 className="font-medium text-background mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-background/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Anicca Mind. {t.allRightsReserved}
            </p>
            <p className="text-background/50 text-sm flex items-center gap-1">
              {t.madeWith} <Heart className="w-4 h-4 text-primary fill-primary" /> {t.forYourPeace}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
