import { MdArrowOutward } from "react-icons/md";
import { HiOutlineArrowDownLeft } from "react-icons/hi2";

const DashSummary = () => {
    return (
        <section className="flex my-3 gap-2">
            <SumCard
                head="Total Events"
                value="100,000"
                arr="up"
                arrVal="5.0%"
            />
            <SumCard
                head="Active Speakers"
                value="25"
                arr="down"
                arrVal="5.0%"
            />
            <SumCard
                head="Total Registrations"
                value="300"
                arr="up"
                arrVal="5.0%"
            />
            <SumCard
                head="Total Revenue"
                value="$500,000"
                arr="up"
                arrVal="5.0%"
            />
        </section>
    );
};

const SumCard = ({ head, value, arr, arrVal }) => {
    return (
        <div className="p-1 border flex-1">
            <h3 className="mb-1">{head}</h3>
            <div className=" flex align-middle gap-2">
                <h4>{value}</h4>
                <div
                    className={`arrinfo text-[13px] flex gap-1 align-baseline
                ${arr == "up" ? "text-green-600" : "text-red-800"}
                `}
                >
                    {arr == "up" ? (
                        <MdArrowOutward size={13}/>
                    ) : (
                        <HiOutlineArrowDownLeft size={13} />
                    )}
                    <span>{arrVal}</span>
                </div>
            </div>
        </div>
    );
};

export default DashSummary;
