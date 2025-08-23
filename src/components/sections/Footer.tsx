import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-gradient-blue/5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Contact details top-right */}
        <div className="absolute top-6 right-6 text-right space-y-1 hidden md:block">
          <p className="text-sm text-foreground/60">Email: contact@solvexa.com</p>
          <p className="text-sm text-foreground/60">Phone: +1 234 567 890</p>
          <p className="text-sm text-foreground/60">Address: 123 Innovation Lane, Tech City</p>
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gradient-blue via-gradient-violet to-gradient-teal bg-clip-text text-transparent">
            Ready to Shape the Future?
          </h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join us in creating tomorrow's solutions today. Let's innovate together.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hero-button px-8 py-4 text-lg font-semibold text-primary-foreground rounded-full relative overflow-hidden group"
          >
            <span className="relative z-10">Get In Touch</span>
          </motion.button>
        </motion.div>

        {/* Footer links */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-2xl font-bold text-primary mb-4">Solvexa</h4>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Innovating the future through cutting-edge technology solutions and visionary research.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Team', 'Project'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-4">Connect</h5>
            <ul className="space-y-2 text-sm">
              {['LinkedIn', 'Twitter', 'GitHub', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/50 text-sm">
              © 2024 Solvexa. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="text-foreground/50 hover:text-primary transition-colors text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
