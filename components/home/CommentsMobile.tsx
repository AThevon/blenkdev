"use client";

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Autoplay, EffectCreative } from 'swiper/modules';
import { testimonials } from '@/data/testimonials';
import { useTranslation } from 'react-i18next';


export function CommentsMobile() {
  const { t } = useTranslation(['home', 'common']);
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-12 mb-4 capitalize">{t("common:testimonials")}</h2>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={800}
        modules={[EffectCreative, Autoplay]}
        className="h-[35rem] w-full bg-gradient-to-b from-transparent to-neutral-100 dark:from-transparent dark:to-neutral-900"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full p-6 bg-neutral-100 dark:bg-neutral-900 flex flex-col px-8 justify-center">
              <h3 className="text-2xl lg:text-4xl font-medium text-start sm:px-0 sm:ml-12 lg:ml-28 mb-4 sm:mb-10">
                {t(testimonial.quote)}
              </h3>
              <p className="text-lg lg:text-xl font-light text-neutral-500 dark:text-neutral-400">
                {testimonial.name}
              </p>
              <p className="text-lg lg:text-xl font-light text-neutral-500 dark:text-neutral-400">
                {testimonial.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CommentsMobile;