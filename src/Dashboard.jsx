import Sidebar from "./components/Sidebar";
import DashContent from "./DashContent";

const Dashboard = () => {
    // grid-cols-[240px_1fr]
    return (
        <section className="grid grid-cols-[240px_1fr]">
            <Sidebar />
            <DashContent />
        </section>
    );
};

export default Dashboard;
