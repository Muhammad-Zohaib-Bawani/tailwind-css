import React from 'react'
import img from "../assests/sec1.jpeg"
import { logo } from '../assests/photos'
import Image from 'next/image'
import Button from './Button'

function Section() {
    return (
        <div className='container-fluid'>
            {/* // section 1 */}

            <section className='  sec1'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 text text-center '>
                            <h1 className='HEADING1'>
                                Junk Removal Services In  Tri-Cities,TN
                            </h1>
                            <h4>
                                We Remove Your Junk, So You Don't have To
                            </h4>
                            <p>
                                <span style={{ color: "#8DC63F" }}>
                                    Reimagine Your Space with YourJunk Removed !
                                </span>
                                <span style={{ color: "#ffff" }} >
                                    Transform Your Surroundings with our best junk removal service, ensuring a clutter-free and revitalized environment
                                </span>
                            </p>
                            <div className="row padding-left">
                                <div className="col-12 col-md-6 col-lg-6 mt-2 mr-1 bg-white ">
                                    <img src="https://yourjunkremoved.com/wp-content/uploads/2023/02/gt1t.png" alt="" />
                                </div>

                                <div className="ol-12 col-md-6 col-lg-6 mt-2 bg-white">
                                    <img src="https://yourjunkremoved.com/wp-content/uploads/2023/02/5-star-review-picture-transparent-facebook.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='form p-5     col-lg-6 col-md-6 col-sm-12'>

                            <form action="" class="container rounded bg-white d-flex flex-wrap " >
                                <h2>REQUEST A FREE ESTIMATE</h2>
                                <Image src={logo} />


                                <input type="text" placeholder='First Name*' className='formInput' />
                                <input type="text" placeholder='Last Name*' className='formInput' />
                                <input type="text" placeholder='Email*' className='formInput' />
                                <input type="text" placeholder='Phone*' className='formInput' />
                                <input type="text" placeholder='Zip Code*' className='formInput' />
                                <select name="" id="" placeholder='Service Interested In*'>
                                    <option value="">Service Interested In*</option>
                                    <option value="">Option 1</option>
                                    <option value="">Option 2</option>
                                    <option value="">Option 3</option>
                                    <option value="">Option 4</option>
                                    <option value="">Option 5</option>
                                </select> <br />

                                <p >
                                    <input type="checkbox" />
                                    <space /> I agree to be contacted through SMS/phone by Your Junk Removed to get my free estimate. I also understand that I can opt out at any time by replying “STOP,” that I can Text HELP for help, that message frequency varies, and that message &amp; data rates may apply. Your information is secure and will not be sold to third parties.
                                </p>



                                <Button data="SUBMIT YOUR REQUEST">

                                </Button>
                            </form>
                        </div>

                    </div>
                </div>


            </section>
            {/* section 2 */}
            <section>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-md-6 sec2">
                        <img src="https://yourjunkremoved.com/wp-content/uploads/2023/02/4-768x432-1-300x169.png" alt="" style={{ width: "500px", height: "300px" }} />


                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6 sec2-2" >
                        <h2 >Your Trusted Junk Removal Company in Tri-Cities, TN</h2>

                        <p><span >Welcome to Your Junk Removed! We are the top choice for junk removal in Tri-Cities, TN. Whether you need furniture or appliance removal, garage cleanouts, or hauling of any kind, our team of junk removal experts is ready and willing to get your space cleared up and looking great. We take great pride in our work, providing exceptional customer service while ensuring that all items are disposed of responsibly.</span></p>


                        <Button data=" REQUEST A FREE ESTIMATE" style={{ color: "#293FAD" }} />
                    </div>
                </div>
            </section>
            {/* section 3 */}
            <section>
                <div className='sec3'>
                    <h1>JUNK REMOVAL TRI-CITIES</h1>
                    <div className='Images'>
                        <span className='image-box'>
                            <img src="https://yourjunkremoved.com/wp-content/uploads/2022/06/3.png" alt="" /> <br />
                            <h2>Prompt</h2>
                            <p>We offer quick &amp; convenient solutions.</p>
                        </span>

                        <span className='image-box'>
                            <img src="https://yourjunkremoved.com/wp-content/uploads/2022/06/4.png" alt="" /><br />
                            <h2>Affordable</h2>
                            <p>We provide fair and upfront pricing.</p>
                        </span>

                        <span className='image-box'>
                            <img src="https://yourjunkremoved.com/wp-content/uploads/2022/06/5.png" alt="" /><br />
                            <h2>Reliable</h2>
                            <p>We adhere to promised timeframes.</p>
                        </span>

                        <span className='image-box'>
                            <img src="https://yourjunkremoved.com/wp-content/uploads/2022/06/6.png" alt="" /><br />
                            <h2>Committed</h2>
                            <p>We prioritize your peace of mind.</p>
                        </span>
                    </div>

                </div>
            </section>
            {/* section 4 */}
            <section>
                <div className="row">
                    <div className="col-lg-6 col-md-6 sec4" >
                        <h2 >We Take Away the Stress of Junk Removal</h2>

                        <p><span style={{ textDecoration: "underline" }}><b>Our mission is simple</b></span><strong>:</strong> <span >Make <a >junk removal</a> easy for you! </span></p>


                        <span >We understand how stressful it can be to deal with unwanted clutter and waste in your home or office, so we strive to create a hassle-free experience from start to finish. Our friendly team takes care of everything for you – from sorting through your belongings for what should be recycled or donated to removing it all safely from your property. We make sure that no matter the job – big or small – we always do our best to provide quality results at a reasonable price.&nbsp;</span>

                        <button style={{ margin: "50px 50px 50px 0" }}>
                            REQUEST A FREE ESTIMATE
                        </button>
                    </div>

                    <div className="col-lg-6 col-md-6" >

                        <img src="https://yourjunkremoved.com/wp-content/uploads/2023/02/4-768x432-1-300x169.png" alt="" className='sec4-image' />

                    </div>

                </div>
            </section>
            {/* section 5 */}
            <section className="sec5">
                <h1>OUR SERVICES</h1>
               

            </section>
        </div>
    )
}

export default Section
