import Image from "next/image";
import nextImg from "../../assets/next.jpeg"

const GalleryPage = () => {
    return (
      <div className="text-center">
        <h1>Reguler Image Tag</h1>
        {/* <img
          src="https://cdn-media-1.freecodecamp.org/images/1*uIepZ6YWTubeVxD5n5kkyg.png"
          alt=""
          width={500}
          height={500}
          className="mx-auto"
        /> */}

        <h1>Nextjs Image Component</h1>
            <Image src="https://cdn-media-1.freecodecamp.org/images/1*uIepZ6YWTubeVxD5n5kkyg.png" alt="next-image" width={500} height={500} className="mx-auto" />


        <h1>Nextjs Image Component Local Assets Folder</h1>
            <Image src={nextImg} alt="next-image" width={500} height={500} className="mx-auto" />

        <h1>Nextjs Image Component Local Public Folder</h1>
            <Image src="/next.jpeg" alt="next-image" width={500} height={500} className="mx-auto" />
            

      </div>
    );
};

export default GalleryPage;