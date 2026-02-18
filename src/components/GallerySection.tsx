import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Adjust this path if your component is deeper inside folders
const getAssetUrl = (name: string) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};

type Category = {
  name: string;
  cover: string;
  images: string[];
};

const categories: Category[] = [
  {
    name: "Painting",
    cover: getAssetUrl("painting1.jpg"),
    images: [
      "painting1.jpg",
      "painting2.jpg",
      "painting3.jpg",
      "painting4.jpg",
      "painting5.jpg",
      "painting6.jpg",
      "painting7.jpg",
    ],
  },
  {
    name: "Roofing",
    cover: getAssetUrl("roofing1.jpg"),
    images: [
      "roofing1.jpg",
      "roofing2.jpg",
      "roofing3.jpg",
      "roofing4.jpg",
      "roofing5.jpg",
      "roofing6.jpg",
      "roofing7.jpg",
    ],
  },
  {
    name: "Paving",
    cover: getAssetUrl("paving1.jpg"),
    images: [
      "paving1.jpg",
      "paving2.jpg",
      "paving3.jpg",
      "paving4.jpg",
    ],
  },
  {
    name: "Flooring",
    cover: getAssetUrl("flooring1.jpg"),
    images: [
      "flooring1.jpg",
      "flooring2.jpg",
      "flooring3.jpg",
    ],
  },
  {
    name: "Kitchen",
    cover: getAssetUrl("kitchen1.jpg"),
    images: ["kitchen1.jpg"],
  },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Project Categories
          </h2>
        </div>

        {/* CATEGORY FOLDERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveCategory(category)}
              className="cursor-pointer relative overflow-hidden rounded-2xl group shadow-lg"
            >
              <img
                src={category.cover}
                alt={category.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold tracking-wide">
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL WITH MASONRY */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-background/95 backdrop-blur-xl rounded-2xl max-w-6xl w-full p-8 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveCategory(null)}
                  className="absolute top-5 right-6 text-foreground text-xl hover:opacity-70"
                >
                  ✕
                </button>

                <h3 className="text-2xl font-bold mb-8">
                  {activeCategory.name}
                </h3>

                {/* Masonry Layout */}
                <div className="max-h-[75vh] overflow-y-auto">
                  <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                    {activeCategory.images.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="break-inside-avoid rounded-xl overflow-hidden shadow-md"
                      >
                        <img
                          src={getAssetUrl(img)}
                          alt={activeCategory.name}
                          className="w-full object-cover rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
