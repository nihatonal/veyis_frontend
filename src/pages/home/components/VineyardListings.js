import "./VineyardListings.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const listings = [
  {
    id: 1,
    image: "https://i.imgur.com/0DHxxXx.webp",
    title: "Konya'da Verimli Üzüm Bağı",
    size: "10.000 m²",
    location: "Konya, Türkiye",
    price: "₺1.500.000",
    link: "konyada-verimli-uzum-bagi",
  },
  {
    id: 2,
    image: "https://i.imgur.com/zUC72Vg.webp",
    title: "Ege Bölgesi'nde Organik Bağ",
    size: "8.500 m²",
    location: "İzmir, Türkiye",
    price: "₺1.800.000",
    link: "ege-bölgesinde-organik-bag",
  },
  {
    id: 3,
    image: "https://i.imgur.com/87ESM79.webp",
    title: "Yatırımlık Şaraplık Üzüm Bağı",
    size: "12.000 m²",
    location: "Manisa, Türkiye",
    price: "₺2.000.000",
    link: "yatırimlik-saraplik-uzum-bagi",
  },
];

// Animasyon ayarlarını tek bir obje olarak tanımlayarak tekrarları azalttık
const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const VineyardListings = () => {
  return (
    <section className="section_container vineyard_list_container">
      <div className="section_wrapper">
        <motion.h2 className="section_title" {...fadeInUp(0)}>
          Satılık Bağlar – Kazançlı Yatırım Fırsatları
        </motion.h2>

        <div className="vineyard_list_items">
          {listings.map((listing, i) => (
            <motion.div key={listing.id} className="vineyard_item" {...fadeInUp(i * 0.2)}>
              <LazyLoadImage
                src={listing.image}
                alt={listing.title}
                className="vineyard_item_image"
                effect="blur"
              />
              <h3 className="vineyard_item_title">{listing.title}</h3>
              <p>{listing.size} - {listing.location}</p>
              <p>{listing.price}</p>
              <NavLink to={`/${listing.link}`} className="vineyard_item_link">
                Detaylı Bilgi
              </NavLink>
            </motion.div>
          ))}
        </div>

        <motion.a href="/satilik-uzum-baglari" className="section_item_button" {...fadeInUp(0.4)}>
          Tüm Satılık Bağları Gör
        </motion.a>
      </div>
    </section>
  );
};

export default VineyardListings;
