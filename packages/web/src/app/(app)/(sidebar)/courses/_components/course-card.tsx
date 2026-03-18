import Image from "next/image";

export default function CourseCard() {
  const imgUrl =
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="border-2 rounded-md border-gray-200 hover:border-gray-300 bg-white hover:shadow-xs overflow-hidden relative hover:translate-y-[2px] transition-[translate] ease-out">
      <div>
        <Image src={imgUrl} height={300} width={400} alt="course-image" className="w-full" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium">Course Name</h3>
        <p className="line-clamp-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quaerat, excepturi quam
          praesentium qui.
        </p>
      </div>
    </div>
  );
}
