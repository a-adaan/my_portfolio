export default function SkillSec() {
  return (
    <>
      <p className="font-bold inline w-1/2 text-center text-5xl m-6">Skills</p>
      <ul className="list-inside space-y-4 ps-5">
        <li>
          <svg
            className="flex-shrink-0 w-3.5 h-3.5 inline text-green-500 dark:text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <p className="inline ml-2 font-semibold">Languages</p>
          <ul className="list-disc list-inside ps-5 mt-2 space-y-1">
            <li>C, Javascript, Python, HTML, CSS</li>
          </ul>
        </li>
        <li>
          <svg
            className="flex-shrink-0 w-3.5 h-3.5 inline text-green-500 dark:text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <p className="inline ml-2 font-semibold">Front-End Technology</p>
          <ul className="list-disc list-inside ps-5 mt-2 space-y-1">
            <li>
              ReactJS, Next.js, Redux, Tailwind CSS, Material UI, Shadcn UI
            </li>
          </ul>
        </li>
        <li>
          <svg
            className="flex-shrink-0 w-3.5 h-3.5 inline text-green-500 dark:text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <p className="inline ml-2 font-semibold">Back-End Technology</p>
          <ul className="list-disc list-inside ps-5 mt-2 space-y-1">
            <li>Firebase, MongoDB, Mongoose, Prisma, NodeJS</li>
          </ul>
        </li>
        <li>
          <svg
            className="flex-shrink-0 w-3.5 h-3.5 inline text-green-500 dark:text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <p className="inline ml-2 font-semibold">
            Version Control and Deployment Platforms
          </p>
          <ul className="list-disc list-inside ps-5 mt-2 space-y-1">
            <li>Vercel, Netlify, Git and Github</li>
          </ul>
        </li>
      </ul>
    </>
  );
}
