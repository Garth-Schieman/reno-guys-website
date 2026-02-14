import { motion } from "framer-motion";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryPainting from "@/assets/gallery-painting.jpg";
import galleryDeck from "@/assets/gallery-deck.jpg";
import galleryRoofing from "@/assets/gallery-roofing.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import heroImage from "@/assets/hero-renovation.jpg";

const images = [
  { src: galleryKitchen, alt: "Kitchen renovation" },
  { src: galleryBathroom, alt: "Bathroom remodel" },
  { src: galleryPainting, alt: "Exterior painting" },
  { src: galleryDeck, alt: "Deck renovation" },
  { src: galleryRoofing, alt: "Roofing work" },
  { src: heroImage, alt: "Interior renovation" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold font-heading mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Project Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="overflow-hidden rounded-xl aspect-square group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
