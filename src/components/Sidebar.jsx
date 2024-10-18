import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


const Sidebar = () => {
    return (
        <aside className=" p-2 border">
            <h1>Leni4c</h1>
            <ul>
                <li className="my-4 flex align-middle gap-3">
                    <AiOutlineHome size={20} />
                    <a href="#">Home</a>
                </li>
                <li className="my-4 flex align-middle gap-3">
                    <MdOutlineCalendarMonth size={20} />
                    <a href="#">Events</a>
                </li>
                <li className="my-4 flex align-middle gap-3">
                    <FaMicrophoneAlt size={20} />
                    <a href="#">Speakers</a>
                </li>
                <li className="my-4 flex align-middle gap-3">
                    <BiBarChartSquare size={20} />
                    <a href="#">Reports</a>
                </li>
                <li className="my-4 flex align-middle gap-3">
                    <IoIosNotifications size={20} />
                    <a href="#">Notifications</a>
                    <span className="bg-red-500 text-white rounded-full px-2">
                        3
                    </span>
                </li>
                <li className="my-4 flex align-middle gap-3">
                    <TbMessageCircle size={20} />
                    <a href="#">Messages</a>
                </li>
                <li className="my-4 flex align-middle gap-3">
                    <FiSettings size={20} />
                    <a href="#">Settings</a>
                </li>
                <li className="my-4 flex align-middle gap-3">
                    <MdKeyboardDoubleArrowLeft size={20} />
                    <a href="#">Collapse</a>
                </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-300"></div>
                <div>
                    <p className="font-semibold">Rudra Devi</p>
                    <p className="text-sm text-gray-500">
                        rudra.devi@gmail.com
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
