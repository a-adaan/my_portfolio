import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  project: {
    id,
    title,
    technologiesUsed,
    keyFeatures,
    liveDemo,
    githubLink,
    visuals,
  },
}) {
  return (
    <div className="lg:min-w-[900px] w-[310px] sm:min-w-[600px] lg:h-[90vh] h-auto mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-12">
      {visuals.map((visual, index) => (
        <Image
          key={index}
          src={visual}
          alt={`${title} screenshot ${index + 1}`}
          height={300}
          width={300}
          className="w-full h-[45vh] rounded"
        />
      ))}
      {/* deatils section */}
      <div className="p-3 sm:p-5 lg:h-auto lg:flex lg:flex-col lg:justify-center">
        <h2 className="text-xl lg:text-3xl font-bold mb-1">{title}</h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-2 lg:grow">
          <div className="mb-3">
            <h3 className="font-semibold text-base lg:text-xl">
              Technologies Used:
            </h3>
            <ul className="list-disc list-inside">
              {technologiesUsed.map((tech, index) => (
                <li key={index} className="text-sm lg:text-base">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-base lg:text-xl">
              Key Features:
            </h3>
            <ul className="list-disc list-inside">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="text-sm lg:text-base">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between mt-4 lg:col-span-2">
            <Link
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:bg-teal-600 p-3 bg-teal-400 rounded-2xl"
            >
              Live Demo
            </Link>
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:bg-teal-600 p-3 bg-teal-400 rounded-2xl"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
