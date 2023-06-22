import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../../PopularClasses/PopularClasses";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Musical Summer Camp</title>
      </Helmet>
      <div className="text-center">
        <Banner></Banner>
      </div>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
