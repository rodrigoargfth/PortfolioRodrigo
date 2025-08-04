import { ReactElement } from "react";
import TiltedCard from "@/src/Components/TiltedCard/TiltedCard";

interface SkillCardProps {
  icon: ReactElement;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name }) => {
  return (
    <TiltedCard
      containerHeight="200px"
      containerWidth="180px"
      imageHeight="140px"
      imageWidth="140px"
      scaleOnHover={1}
      rotateAmplitude={60}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
    >
      <div className="w-full h-full flex flex-col items-center justify-center rounded-xl relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to top, rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0))",
          }}
        />
        <div className="z-10 flex flex-col items-center justify-center text-center gap-2">
          <div className="text-4xl">{icon}</div>
          <p className="text-white font-semibold text-base">
            {name}
          </p>
        </div>
      </div>
    </TiltedCard>
  );
};

export default SkillCard;