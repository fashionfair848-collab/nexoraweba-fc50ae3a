import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

interface SliderImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageSliderProps {
  images: SliderImage[];
  variant?: "hero" | "portfolio" | "testimonial" | "logo" | "before-after";
  autoplay?: boolean;
  showThumbnails?: boolean;
  showLightbox?: boolean;
  className?: string;
}

const ImageSlider = ({
  images,
  variant = "portfolio",
  autoplay = true,
  showThumbnails = false,
  showLightbox = true,
  className = "",
}: ImageSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    if (showLightbox) {
      setLightboxIndex(index);
      setLightboxOpen(true);
    }
  };

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const getSliderConfig = () => {
    switch (variant) {
      case "hero":
        return {
          effect: "fade" as const,
          loop: true,
          speed: 1000,
          slidesPerView: 1,
          className: "h-[500px] lg:h-[600px] rounded-2xl overflow-hidden",
        };
      case "logo":
        return {
          loop: true,
          speed: 3000,
          slidesPerView: 3,
          spaceBetween: 30,
          breakpoints: {
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          },
          className: "py-8",
        };
      case "testimonial":
        return {
          loop: true,
          speed: 600,
          slidesPerView: 1,
          spaceBetween: 30,
          breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
          className: "pb-12",
        };
      default:
        return {
          loop: true,
          speed: 600,
          slidesPerView: 1,
          spaceBetween: 20,
          breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
          className: "pb-12",
        };
    }
  };

  const config = getSliderConfig();

  return (
    <div className={`relative ${className}`}>
      <Swiper
        {...config}
        modules={[Navigation, Pagination, Autoplay, EffectFade, Thumbs]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        pagination={{ clickable: true }}
        autoplay={autoplay ? { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true } : false}
        thumbs={showThumbnails && thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        className={config.className}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                variant === "hero" ? "h-full" : "aspect-[4/3]"
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {image.title && (
                    <h3 className="text-white font-display text-xl font-semibold mb-1">{image.title}</h3>
                  )}
                  {image.description && (
                    <p className="text-white/80 text-sm">{image.description}</p>
                  )}
                </div>
                {showLightbox && (
                  <div className="absolute top-4 right-4">
                    <Expand className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      {variant !== "logo" && (
        <>
          <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-card/90 shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-card transition-colors">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-card/90 shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-card transition-colors">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </>
      )}

      {/* Thumbnails */}
      {showThumbnails && (
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="mt-4 thumbs-slider"
          breakpoints={{
            640: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-white/80 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
              }}
              className="absolute left-4 p-2 text-white hover:text-white/80 transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % images.length);
              }}
              className="absolute right-4 p-2 text-white hover:text-white/80 transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              {images[lightboxIndex].title && (
                <h3 className="font-display text-xl mb-1">{images[lightboxIndex].title}</h3>
              )}
              <p className="text-white/60">
                {lightboxIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;