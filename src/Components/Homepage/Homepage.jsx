import React from "react";
import "./Homepage.css";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { title } from "framer-motion/client";


function Homepage() {
  return (
    <div clasName="primary p-2">
      {/* ///////////////////////// section 1//////////////////////////// */}
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src="iStock-583581070_3.mp4" />
        </video>
        <div className="content">
          <div className="video_heading_section_blur">
            <div className="top_Heading text-start">
              {/* <strong clasName=""> */}

              <div className="">Simple successful</div>
              <div className="">Crypto investing</div>

              {/* </strong> */}
              <p className=" para text-start">
                The ease and familiarty of traditional index fund
                <br />
                investing, but with the potential for higher returns that
                <br />
                crypto makes offer.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////// section 2 /////////////////////////// */}
      <div className="d-flex justify-content-center align-items-center overflow-hidden cards_wrapper">
        <div className="cards">
          <motion.div
            initial={{
              opacity: 0,
              y: 150,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
            style={{ color: "black" }}
          >
            <p className="w-100 investing_heading">
              Moolah makes crypto investing simple and successful for everyone.
              Our platform is designed to emulate the ease and familiarity of
              traditional index fund investing, but with the potential for
              higher returns that crypto markets offer.
            </p>
          </motion.div>
        </div>
      </div>
      {/* /////////////////////// section 3 //////////////////////// */}
      <div className="section_3_cover">
      <div className="section_3">
        <div className="container-fluid">
          <div className="section_3_part_3">
            <h1>Moolah Capital Funds</h1>
            <p>
              Moolah offers a small set of theme-based funds, each built on
              proven investment strategies and supported by cutting-edge
              technology. Our approach leverages both traditional financial
              analysis and advanced machine learning models to optimize returns.
            </p>
          </div>
          <div className="row">
            {/* Left Box */}
            <div className="col-12 col-md-6">
              <div className="section_3_part_2">
                <img
                  src="Puzzle.svg"
                  alt="We do it for you"
                  className="img-fluid"
                />
                <h4>We do it for you - we choose your investments</h4>
                <p>
                  We'll match you with investments that fit how you feel about
                  risk. Then we manage them every step of the way. You'll also
                  get expert investment guidance from real people if you need
                  it.
                </p>
                <button className="funds_31">Invest now
                <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                </button>
              </div>
            </div>
            {/* Right Box */}
            <div className="col-12 col-md-6">
              <div className="section_3_part_2">
                <img
                  src="puzzle2.png"
                  alt="Do it yourself"
                  className="img-fluid"
                />
                <h4>Do it yourself - choose your own investments</h4>
                <p>
                  Build your own portfolio using our individual funds, with
                  different themes, market segments, and financial goals to
                  choose from.
                  <br />
                  Or keep things simple and pick one of our 6 Moolah Future
                  funds. Each Moolah Future fund mixes interest-paying assets
                  and coins to balance risk and reward. You pick the one that
                  suits your goal and attitude to risk.
                </p>
                <button className="funds_31">Invest now
                <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* ////////////////////////////// section 4 ////////////////////////// */}
      <div className="d-flex justify-content-center align-items-center ">
        <div className="section_4 pt-5 ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="text-center">
                  <h1 className="">Simple Investing</h1>
                  <p className="text-start">
                    Invest with a user-friendly interface for beginners and
                    experienced investors alike. Moolah offers themantic crypto
                    investment funds that operate similarly to traditional ETFs.
                    Users can easily sign up, fund their accounts using fiat or
                    crypto, and choose from various curated funds tailored to
                    different risk appetites and goals.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-3">
                <div className="section_4_part_2">
                  <img
                    src="The Benefits of Having a Side Hustle.jpeg"
                    alt=""
                    className=""
                    width="100%"
                  />
                  <h4 className="text-start">Risk appetite</h4>
                  <p className="text-start">
                    Our funds are classified based on their expected risk.
                    Similar to traditional ETFs, we use the synthetic risk and
                    reward indicator (SRRI) to indicate the level of risk of a
                    UCITS fund by providing a number from 1 to 7 , with 1
                    representing low risk and 7 representing high risk.
                  </p>
                  <div className="d-flex justify-content-center">
                    <div className="funds_3 border-1">
                      Invest now
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-3">
                <div className="section_4_part_2">
                  <img
                    src="0_apBACOBeBmxmrP6U.gif"
                    alt=""
                    className=""
                    width="100%"
                  />
                  <h4 className="text-start">Income and Wealth</h4>
                  <p className="text-start">
                    Our funds either pay a monthly income (income finds) or
                    accumulate capital over a medium/long-term
                    period(accumulation funds).
                    <span className="">
                      You can also mix your goals and add both funds types to
                      your protofolio.
                    </span>
                  </p>
                  <div className="d-flex justify-content-center ">
                    <div className="funds_3 border-1">
                      Invest now
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////// section 4 ////////////////// */}

      {/* //////////////////////////// section 5 ////////////////////// */}
      <div className="bards_width_background">
        <div className="p-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-2 border my-2">
                <div>
                  <div clasName="card_shadow">
                    <div className="">
                      <h2 className="">Cybersecurity</h2>
                      <span className="">
                        An index is a basket of crypto assets selected by a
                        strategy, a theme or to track a market or a segment.
                        Index funds can help your diversification as with one
                        investment you get exposure to an entire segment of the
                        market. Index funds are the backbone of Moolah Saving
                        Accounts.
                      </span>
                      <br />
                      <div className="d-flex justify-content-end">
                        <div className="d-flex justify-content-center">
                          <div className="funds_2">
                            Invest now
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-2 my-2">
                <div>
                  <div clasName="card_shadow border">
                    <div className="">
                      <h2 className="">Market Risk</h2>
                      <span className="">
                        Smart Beta Index Funds are a category of index funds
                        that invest with a focus on value, growth, or low
                        volatility, market capitalisation and are typically
                        systematic in implementation. These funds have the
                        financial goal to promote long-term capital accumulation
                        and wealth. Smart Beta Index funds are the core of
                        Moolah Accumulation funds.
                      </span>
                      <br />
                      <div className="d-flex justify-content-end">
                        <div>
                          <div className="funds_2">
                            Invest now
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-2 my-2">
                <div>
                  <div clasName="card_shadow border">
                    <div className="">
                      <h2 className="">Operational Risk</h2>
                      <span className="">
                        Active Index Funds reflect a model portfolio built and
                        actively managed by Moolah portfolio managers, their
                        value won't simply go up and down in value in line with
                        a market index. The aim is to use their flexibility to
                        invest only in securities the portfolio manager believes
                        to be a good potential investment. Active 1 Index Funds
                        are the building blocks of Moolah Accumulation and
                        Income funds.
                      </span>
                      <br />
                      <div className="d-flex justify-content-end">
                        <div>
                          <div className="funds_2">
                            Invest now
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 my-5">
                <div className="Risk_management">
                  <h1>Cybersecurity and Risk Management</h1>
                  <p>
                    At Moolah Capital we believe that protecting money is as
                    important as making money. For that, we specialize in
                    security against cyber attacks, frauds and hacks and in risk
                    management against market risk, liquidity risk and
                    operational risk.
                  </p>
                </div>
                <div className="Risk_management_card">
                  {Indexing_fund.map((data) => (
                    <div className="Risk_management_card_list">
                      <h4>{data.title}</h4>
                      <p>{data.description}</p>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="funds_3 border-1">
                          Learn more
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
const Indexing_fund = [
  {
    title: "Cybersecurity",
    description:
      "An index is a basket of crypto assets selected by a strategy, a theme or to track a market or a segment. Index funds can help your diversification as with one investment you get exposure to an entire segment of the market. Index funds are the backbone of Moolah Saving Accounts.",
  },
  {
    title: "Market Risk",
    description:
      "Smart Beta Index Funds are a category of index funds that invest with a focus on value, growth, or low volatility, market capitalization and are typically systematic in implementation. These funds have the financial goal to promote long-term capital accumulation and wealth. Smart Beta Index funds are the core of Moolah Accumulation funds.",
  },
  {
    title: "Operational Risk",
    description:
      "Active Index Funds reflect a model portfolio built and actively managed by Moolah portfolio managers, their value won't simply go up and down in value in line with a market index. The aim is to use their flexibility to invest only in securities the portfolio manager believes to be a good potential investment. Active 1  Index Funds are the building blocks of Moolah Accumulation and Income funds. ",
  },
];
