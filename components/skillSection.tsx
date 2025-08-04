import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import SkillCard from "./skillCard";
import { SkillIcon } from "@/constants/techIcons";

import "swiper/css";
import "swiper/css/pagination";

interface SkillsSectionProps {
  title: string;
  skills: SkillIcon[];
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ 
  title, 
  skills, 
  className = "" 
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className={`mt-10 ${className}`}>
      <h2 className="text-xl font-semibold mb-10">
        {title}
      </h2>
      <Swiper
        slidesPerView={isMobile ? 2 : 6}
        spaceBetween={2}
        modules={[Pagination]}
        className="mySwiper"
        pagination={{
          dynamicBullets: false,
          clickable: true
        }}
      >
        {skills.map(({ icon, name }, idx) => (
          <SwiperSlide key={idx}>
            <SkillCard icon={icon} name={name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SkillsSection;