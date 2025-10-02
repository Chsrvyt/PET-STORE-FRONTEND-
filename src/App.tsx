import { Header } from './components/Header'
import { HeroBanner } from './components/HeroBanner'
import { CategoryHighlights } from './components/CategoryHighlights'
import { TrendingProducts } from './components/TrendingProducts'
import { DealsSection } from './components/DealsSection'
import { BestSellers } from './components/BestSellers'
import { PetCareGuide } from './components/PetCareGuide'
import { Testimonials } from './components/Testimonials'
import { NewsletterSection } from './components/NewsletterSection'
import { AboutSection } from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { BlogSection } from './components/BlogSection'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'
import { ShoppingProvider } from './contexts/ShoppingContext'
import { Toaster } from './components/ui/sonner'
import { motion } from 'motion/react'

export default function App() {
  return (
    <ShoppingProvider>
      <motion.div 
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Header />
        </motion.div>
        
        <main>
          <motion.section
            id="home"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroBanner />
          </motion.section>
          
          <motion.section
            id="categories"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CategoryHighlights />
          </motion.section>
          
          <motion.section
            id="trending"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TrendingProducts />
          </motion.section>
          
          <motion.section
            id="deals"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <DealsSection />
          </motion.section>
          
          <motion.section
            id="bestsellers"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BestSellers />
          </motion.section>

          <motion.section
            id="petcare"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <PetCareGuide />
          </motion.section>

          <motion.section
            id="testimonials"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Testimonials />
          </motion.section>

          <motion.section
            id="about"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AboutSection />
          </motion.section>

          <motion.section
            id="services"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ServicesSection />
          </motion.section>

          <motion.section
            id="blog"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <BlogSection />
          </motion.section>

          <motion.section
            id="faq"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FAQSection />
          </motion.section>

          <motion.section
            id="newsletter"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <NewsletterSection />
          </motion.section>
        </main>
        
        <motion.footer
          id="contact"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Footer />
        </motion.footer>

        <Toaster />
      </motion.div>
    </ShoppingProvider>
  )
}