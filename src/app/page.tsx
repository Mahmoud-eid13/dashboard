import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-[linear-gradient(#C3EBFA,_#FAE27C)] p-4 rounded-md relative h-[60%] w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] flex flex-col gap-6 items-center justify-around ">
        <div className="flex flex-row gap-4 items-center ">
          <Link href="/admin">
            <Image
              src="/avatar.png"
              alt=""
              width={54}
              height={54}
              className="rounded-full"
            />
          </Link>
          <h1>Admin</h1>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Link href="/admin">
            <Image
              src="/avatar.png"
              alt=""
              width={54}
              height={54}
              className="rounded-full"
            />
          </Link>
          <h1>Parent</h1>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Link href="/admin">
            <Image
              src="/avatar.png"
              alt=""
              width={54}
              height={54}
              className="rounded-full"
            />
          </Link>
          <h1>Student</h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
