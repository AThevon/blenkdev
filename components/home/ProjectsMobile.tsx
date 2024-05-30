"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import { Autoplay, EffectCube } from 'swiper/modules';
import { projects } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';


export function ProjectsMobile() {
  const { t } = useTranslation('common');
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-4 capitalize">{t("projects")}
      </h2>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={800}
        modules={[EffectCube, Autoplay]}
        className="h-[30rem]"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="relative w-full h-full p-6 bg-neutral-900 flex flex-col items-center justify-center">
            <Image src={project.thumbnail} alt={project.title} width={300} height={300} className="absolute top-0 left-0 w-full h-full object-cover -z-20" />
            <span className="absolute top-0 left-0 w-full h-full bg-neutral-950 opacity-60 -z-10" />
            <h3 className="text-2xl font-medium text-center px-6 sm:px-0 sm:ml-12 lg:ml-28 mb-4 sm:mb-10 text-neutral-200">
              {project.title}
            </h3>
            <Image src={project.icon} alt={project.title} width={200} height={200} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
            <Link href={project.link} key={index} className='absolute bottom-8 left-1/2 -translate-x-1/2'>
              <Button className="text-xl w-[10rem] bg-neutral-800 p-4">
                Visit
              </Button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper >
    </>
  );
}
export default ProjectsMobile;