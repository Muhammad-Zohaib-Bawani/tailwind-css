'use client'
import React, { useState } from 'react';
import img from "../assests/sec1.jpeg";
import { logo } from "../assests/photos";
import Image from "next/image";
import Button from "./Button";

function Section() {
  let cardData = [
    {
      imgUrl:
        "https://yourjunkremoved.com/wp-content/uploads/elementor/thumbs/washing-machine-qpsvqv62hcej5yxn0rhggk9qzokumirfnfoc66akby.png",
      title: "Appliance Removal",
    },
    {
      imgUrl:
        "https://yourjunkremoved.com/wp-content/uploads/elementor/thumbs/building-clean-out-qpsvqv62hcej5yxn0rhggk9qzokumirfnfoc66aj0g.png",
      title: "Building Clean Outs",
    },
    {
      imgUrl:
        "https://yourjunkremoved.com/wp-content/uploads/elementor/thumbs/dumpster-rental-qpsvr1qxt6njf8o2ycbug0lz5dof4ehk0c8qj40r6e.png",
      title: "Commercial Junk Removal",
    },
    {
      imgUrl:
        "https://yourjunkremoved.com/wp-content/uploads/elementor/thumbs/debris-qpsvqv62hcej5yxn0rhggk9qzokumirfnfoc66aica.png",
      title: "Construction Debris Removal",
    },
    {
      imgUrl:
        "https://yourjunkremoved.com/wp-content/uploads/elementor/thumbs/rental-qpsvqv62hcej5yxn0rhggk9qzokumirfnfoc66aiwu.png",
      title: "Dumpster Rental",
    },
    {
      imgUrl:
        "https://yourjunkremoved.com/wp-content/uploads/elementor/thumbs/furniture-removal-qpsvqx1qv0h3t6uwpsapljso6gbl1wywbozb4q7qfo.png",
      title: "Furniture Removal",
    },
    {
      imgUrl:
        "https://yourjunkremoved.com/wp-content/uploads/elementor/thumbs/hot-tub-removal-qpsvr0t3mcm93mpg3tx7viuijzt1wpdto7l91u25f4.png",
      title: "Hot Tub Removal",
    },
    {
      imgUrl:
        "https://yourjunkremoved.com/wp-content/uploads/elementor/thumbs/junk-qpsvqv62hcej5yxn0rhggk9qzokumirfnfoc66aj4w.png",
      title: "Junk Removal",
    },
    {
      imgUrl:
        "https://yourjunkremoved.com/wp-content/uploads/elementor/thumbs/mattress-removal-qpsvr0t3mcm93mpg3tx7viuijzt1wpdto7l91u24dc.png",
      title: "Mattress Removal",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://yourjunkremoved.com/wp-content/uploads/2023/04/7-768x432.png",
    "https://yourjunkremoved.com/wp-content/uploads/2023/04/1-768x432.png",
    "https://yourjunkremoved.com/wp-content/uploads/2023/04/5-768x432.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="container-fluid">
      {/* // section 1 */}

      <section className="  sec1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text text-center ">
              <h1 className="HEADING1">
                Junk Removal Services In Tri-Cities,TN
              </h1>
              <h4>We Remove Your Junk, So You Don't have To</h4>
              <p>
                <span style={{ color: "#8DC63F" }}>
                  Reimagine Your Space with YourJunk Removed !
                </span>
                <span style={{ color: "#ffff" }}>
                  Transform Your Surroundings with our best junk removal
                  service, ensuring a clutter-free and revitalized environment
                </span>
              </p>
              <div className="row padding-left">
                <div className="col-12 col-md-6 col-lg-6 mt-2 mr-1 bg-white ">
                  <img
                    src="https://yourjunkremoved.com/wp-content/uploads/2023/02/gt1t.png"
                    alt=""
                  />
                </div>

                <div className="ol-12 col-md-6 col-lg-6 mt-2 bg-white">
                  <img
                    src="https://yourjunkremoved.com/wp-content/uploads/2023/02/5-star-review-picture-transparent-facebook.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="form p-5     col-lg-6 col-md-6 col-sm-12">
              <form
                action=""
                class="container rounded bg-white d-flex flex-wrap "
              >
                <h2>REQUEST A FREE ESTIMATE</h2>
                <Image src={logo} />
                <input
                  type="text"
                  placeholder="First Name*"
                  className="formInput"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="formInput"
                />
                <input type="text" placeholder="Email*" className="formInput" />
                <input type="text" placeholder="Phone*" className="formInput" />
                <input
                  type="text"
                  placeholder="Zip Code*"
                  className="formInput"
                />
                <select name="" id="" placeholder="Service Interested In*">
                  <option value="">Service Interested In*</option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                  <option value="">Option 4</option>
                  <option value="">Option 5</option>
                </select>{" "}
                <br />
                <p>
                  <input type="checkbox" />
                  <space /> I agree to be contacted through SMS/phone by Your
                  Junk Removed to get my free estimate. I also understand that I
                  can opt out at any time by replying “STOP,” that I can Text
                  HELP for help, that message frequency varies, and that message
                  &amp; data rates may apply. Your information is secure and
                  will not be sold to third parties.
                </p>
                <Button data="SUBMIT YOUR REQUEST"></Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section>
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6 sec2">
            <img
              src="https://yourjunkremoved.com/wp-content/uploads/2023/02/4-768x432-1-300x169.png"
              alt=""
              style={{ width: "500px", height: "300px" }}
            />
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6 sec2-2">
            <h2>Your Trusted Junk Removal Company in Tri-Cities, TN</h2>

            <p>
              <span>
                Welcome to Your Junk Removed! We are the top choice for junk
                removal in Tri-Cities, TN. Whether you need furniture or
                appliance removal, garage cleanouts, or hauling of any kind, our
                team of junk removal experts is ready and willing to get your
                space cleared up and looking great. We take great pride in our
                work, providing exceptional customer service while ensuring that
                all items are disposed of responsibly.
              </span>
            </p>

            <Button
              data=" REQUEST A FREE ESTIMATE"
              style={{ color: "#293FAD" }}
            />
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section>
        <div className="sec3">
          <h1>JUNK REMOVAL TRI-CITIES</h1>
          <div className="Images">
            <span className="image-box">
              <img
                src="https://yourjunkremoved.com/wp-content/uploads/2022/06/3.png"
                alt=""
              />{" "}
              <br />
              <h2>Prompt</h2>
              <p>We offer quick &amp; convenient solutions.</p>
            </span>

            <span className="image-box">
              <img
                src="https://yourjunkremoved.com/wp-content/uploads/2022/06/4.png"
                alt=""
              />
              <br />
              <h2>Affordable</h2>
              <p>We provide fair and upfront pricing.</p>
            </span>

            <span className="image-box">
              <img
                src="https://yourjunkremoved.com/wp-content/uploads/2022/06/5.png"
                alt=""
              />
              <br />
              <h2>Reliable</h2>
              <p>We adhere to promised timeframes.</p>
            </span>

            <span className="image-box">
              <img
                src="https://yourjunkremoved.com/wp-content/uploads/2022/06/6.png"
                alt=""
              />
              <br />
              <h2>Committed</h2>
              <p>We prioritize your peace of mind.</p>
            </span>
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section>
        <div className="row">
          <div className="col-lg-6 col-md-6 sec4">
            <h2>We Take Away the Stress of Junk Removal</h2>

            <p>
              <span style={{ textDecoration: "underline" }}>
                <b>Our mission is simple</b>
              </span>
              <strong>:</strong>{" "}
              <span>
                Make <a>junk removal</a> easy for you!{" "}
              </span>
            </p>

            <span>
              We understand how stressful it can be to deal with unwanted
              clutter and waste in your home or office, so we strive to create a
              hassle-free experience from start to finish. Our friendly team
              takes care of everything for you – from sorting through your
              belongings for what should be recycled or donated to removing it
              all safely from your property. We make sure that no matter the job
              – big or small – we always do our best to provide quality results
              at a reasonable price.&nbsp;
            </span>

            <button style={{ margin: "50px 50px 50px 0" }}>
              REQUEST A FREE ESTIMATE
            </button>
          </div>

          <div className="col-lg-6 col-md-6">
            <img
              src="https://yourjunkremoved.com/wp-content/uploads/2023/02/4-768x432-1-300x169.png"
              alt=""
              className="sec4-image"
            />
          </div>
        </div>
      </section>
      {/* section 5 */}
      <section className="sec5">
        <h1 className="my-3">OUR SERVICES</h1>

        <div style={{ background: "#D3E6E3" }} className="pt-3">
          <div class="container" style={{ maxWidth: "960px" }}>
            <div class="row justify-content-center">
              {cardData.map((data, key) => (
                <div
                  class="col-md-4 d-flex justify-content-center mb-4"
                  key={key}
                >
                  <div
                    class="cardCustom d-flex flex-column align-items-center text-center rounded"
                    style={{ width: "18rem" }}
                  >
                    <img
                      class="card-img-top my-3"
                      src={data.imgUrl}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title my-4">{data.title}</h5>
                      <button href="#" class=" mb-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* section 6 */}
      <section className="sec-6">
        <h1 className="text-center my-5 " style={{ color: "#8DC63F" }}>
          Check Out Our Work
        </h1>

     

    <div className="d-flex justify-content-center align-items-center">
      <div className="carousel-container" style={{ maxWidth: "80%", position: "relative", textAlign: "center" }}>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
              key={index}
            >
              <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-control-next" onClick={nextSlide} >
          &#10095;
        </button>
      </div>
    </div>


<div >
    <h1 style={{color:"#293FAD"}} className='text-center my-4'>
    Looking for <span style={{color:"#8DC63F"}}>Junk Removal</span>  in Tri-Cities, TN?
    </h1>
  {/* <button className='justify-content-center'>
    MESSAGE US NOW
  </button> */}
</div>

      </section>
    </div>
  );
}

export default Section;
