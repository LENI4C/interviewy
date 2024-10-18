import ChartComponent from "./ChartComponent";
import Carousel from "./Carousel";

const DashUpdate = () => {
    return (
        <>
            <h3>Event Registrations per month</h3>
            <section className="border">
                <ChartComponent />
                {/* <Carousel /> */}
            </section>
        </>
    );
};

export default DashUpdate;
