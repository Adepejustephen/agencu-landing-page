import { Stars } from "../../../assets"
import { TestimonialProp } from "../../../model"




export const TestimonialCard= ({quote, name,role, image, alt}:TestimonialProp ) => {
  return (
    <div className="flex flex-col p-8 rounded shadow gap-6">
      {/* STARS */}

      <Stars />
      <p className="text-xs text-bodyColor font-normal md:text-sm">"{quote}"</p>

      {/* USER INFO */}

      <div className="flex gap-5 items-center">
        <img src={image} alt={alt}  />
        <div className="flex flex-col gap-2">
          <p className="text-md font-semibold text-black md:text-lg">{name}</p>
          <span className="text-xs font-normal text-bodyColor md:text-sm">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}
