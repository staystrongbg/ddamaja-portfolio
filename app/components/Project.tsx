import Image, { StaticImageData } from 'next/image';
type Project = {
  title: string;
  id: number;
  img: StaticImageData;
  link: string;
  stack: {
    title: string;
    image: StaticImageData;
  }[];
};
const Project = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center border rounded-lg  h-[300px]  overflow-hidden border-black shadow-lg">
      <div className="flex-1 items-center justify-center h-full flex bg-gray-950 flex-col gap-12 ">
        <h3 className="text-[2em] text-gray-50">{project.title}</h3>
        <ul className="flex gap-4">
          {project.stack.map((item, idx) => (
            <li key={idx}>
              <Image src={item.image} alt={item.title} width={32} height={32} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 relative h-full w-[300px] grayscale">
        <Image
          src={project.img}
          fill
          className="absolute object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Project;
