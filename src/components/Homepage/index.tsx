import Hey from "@/components/common/Hey";
import Footer from "@/components/common/Footer";
import Header from "../common/Header";
import How from "../common/How";
import Projects from "../common/Projects";
import Who from "../common/Who";
import "@/styles/Homepage.scss";

const HomePage = () => {
    
    return (
        <>
            <div className="home-container">
                <Header />
                <Hey />
                <How />
                <Projects/>
                <Who/>
                <Footer showGetInTouch={true} />
            </div>
        </>
    )
}

export default HomePage;