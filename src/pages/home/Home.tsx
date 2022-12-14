import {
  InfoBar,
  ProductDealsCart,
  Search,
  Carousel,
  Banner,
} from "../../components";

import classes from "./home.module.scss";

const Home: React.FC = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.home_search}>
          <Search
            borderColor="#d1d5d7"
            buttonColor="#f9fafb"
            color="black"
            buttonWidth="2.5rem"
            buttonHeight="2.25rem"
            buttonMarginBottom="-1px"
            strokeSvg="#3598cc"
          />
        </div>
        <p className={classes.container_title}>Today&apos;s Deals</p>
        <div className={classes.deals_bar_content}>
          <ProductDealsCart />
        </div>
      </div>
      <div className={classes.section_info}>
        <div className={classes.info}>
          <InfoBar />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.section_slide}>
          <Carousel title="Top Producs" />
        </div>
        <div className={classes.section_banner}>
          <Banner />
        </div>
        <div className={classes.section_slide}>
          <Carousel title="Most Popular" />
        </div>
      </div>
    </>
  );
};

export default Home;
