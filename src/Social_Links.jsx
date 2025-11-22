
import { FaLinkedin } from 'react-icons/fa'; // 'fa' stands for Font Awesome

import { FaFacebook } from 'react-icons/fa'; // 'fa' stands for Font Awesome
import { FaGithub } from 'react-icons/fa'; // 'fa' for Font Awesome
import { FaBehance } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa'; // 'fa' for Font Awesome
function SocialLinks() {

    return (

        <div className=" justify-center hover:shadow-md gap-1 flex flex-col w-60 bg-white rounded-2xl border-1 border-gray-300 justify-center  p-4 text-black ">
            <span className="text-lg">Social Links</span>

            <button className="rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                <div className="items-center flex flex-row items-center gap-2 ">

                    <FaFacebook size={18} color="black" />
                    <span> MC Ganir</span>

                </div>
            </button>
            <button className=" rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5  duration-200 ">
                <div className="items-center flex flex-row items-center gap-2 ">

                    <FaLinkedin size={18} color="black" />
                    <span>

                        MC Ganir
                    </span>
                </div>
            </button>

             <button className="rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                <div className="items-center flex flex-row items-center gap-2 ">
                <FaGithub size={18} color="#181717" />
                <span>

                    @mc489     </span>
            </div>
            </button>

              <button className="rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                <div className="items-center flex flex-row items-center gap-2 ">
                <FaBehance size={18} color="black" />
                <span>
                    mc ganir
                </span>
            </div>
</button>

        <button className="rounded-[12px] border-1 border-gray-300 px-2 py-2 hover:-translate-y-0.5 duration-200 ">
                <div className="items-center flex flex-row items-center gap-2 ">
  <FaYoutube size={18} color="black" />
                <span>
                    mcjemuelganir
                </span>
            </div>


        </button>
</div>
    )
}
export default SocialLinks