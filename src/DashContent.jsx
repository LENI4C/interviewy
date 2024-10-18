import DashSummary from "./components/DashSummary";
import DashUpdate from "./components/DashUpdate";
import DashHistory from "./components/DashHistory";

const DashContent = () => {
    return (
        <section className="p-8 border">
            <h2> Welcome ! Here's your summary</h2>
            <DashSummary />
            <DashUpdate />
            <DashHistory />
        </section>
    );
};

export default DashContent;
