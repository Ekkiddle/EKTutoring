import Image from "next/image";
import dynamic from "next/dynamic";

const TextRevealClient = dynamic(() => import('../components/TextRevealClient'), { ssr: false });

const Header = () => {
    return(
        <div className="w-screen relative h-[32rem] z-0">
          <div className="w-full h-40 absolute bg-gradient-to-b from-black to-transparent z-10" ></div>
          <Image 
            src="/work.jpg"
            fill={true}
            style={{ objectFit: 'cover' }}
            alt="Photo of computers and papers"
            className="absolute z-0"
          />
          <div className="w-[34rem] absolute text-white bottom-0 left-14 text-6xl z-20">
            <TextRevealClient>
                <h1 
                    id="text"
                >
                    At Home Tutoring in NW Calgary
                </h1>
            </TextRevealClient>
          </div>
          <button 
            className="absolute z-20 bottom-0 right-0 w-1/3 bg-indigo-100 text-left px-5 h-10 text-indigo-900 hover:w-2/5
                      transition-all ease-in-out duration-500 rounded-l-lg" >
            Book a free consultation
          </button>
          <div className="absolute z-10 w-full h-60 bg-gradient-to-b from-transparent to-indigo-900 bottom-0" ></div>
        </div>
    );
}

export default Header;