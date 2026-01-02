import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

interface Logo {
  name: string;
  image?: string;
}

interface LogoSliderProps {
  logos: Logo[];
  title?: string;
  className?: string;
}

const LogoSlider = ({ logos, title, className = "" }: LogoSliderProps) => {
  return (
    <div className={className}>
      {title && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mb-8"
        >
          {title}
        </motion.p>
      )}

      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={2}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="!py-4"
      >
        {[...logos, ...logos].map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-12 lg:h-16 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
              {logo.image ? (
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="font-display font-bold text-lg text-muted-foreground">
                  {logo.name}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;