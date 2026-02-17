document.addEventListener("DOMContentLoaded", ()=>{
    const footerHTML= `
    <footer class="footer-wrapper footer-layout1 footer-background footer-space-top">
        <div class="widget-area footer-space-bottom">
            <div class="container">
                <div class="newsletter-area">
                    <div class="newsletter-top">
                        <div class="row gy-4 align-items-center">
                            <div class="col-lg-9">
                                <h2 class="newsletter-title text-white text-capitalize mb-0">Do you want to enroll at
                                    our College?</h2>
                            </div>
                            <div class="col-lg-3">
                                <form class="newsletter-form ">

                                    <a href="applications.html"><button type="submit" class="th-btn style3">Application <img
                                            src="assets/img/icon/plane.svg" alt=""></button></a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-md-6 col-xl-4">
                        <div class="widget footer-widget">
                            <div class="th-widget-about">
                                <div class="about-logo">
                                    <a href="index.html"><img src="assets/img/mainlogo.png" alt="Atek"></a>
                                </div>
                                <p class="about-text">Founded in 1997, ABI & ABI College provides value-based, future-ready education promoting creativity, self-employment, holistic growth, and excellence.</p>
                                <div class="th-social">
                                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.twitter.com/"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget widget_nav_menu footer-widget">
                            <h3 class="widget_title">Useful Link</h3>
                            <div class="menu-all-pages-container">
                                <ul class="menu">

                                    <li><a href="about-institution.html">About Institution</a></li>
                                    <li><a href="facilities.html">Facilities</a></li>
                                    <li><a href="placement.html">Placement</a></li>
                                    <li><a href="carrer.html">Careers</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget footer-widget">
                            <h3 class="widget_title">Get In Touch</h3>
                            <div class="th-widget-contact">
                                <div class="info-box_text">
                                    <div class="icon">
                                        <img src="assets/img/icon/phone.svg" alt="img">
                                    </div>
                                    <div class="details phone-deatlsas">
                                        <p><a href="tel:9751165000" class="info-box_link">Office: +91 9751165000</a>
                                        </p>
                                        <p><a href="tel:8098405000" class="info-box_link">8124145000, 8098405000</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="info-box_text">
                                    <div class="icon">
                                        <img src="assets/img/icon/envelope.svg" alt="img">
                                    </div>
                                    <div class="details phone-deatlsas" style="margin-top: 5px;">
                                        <p><a href="mailto:abiabicollege5000@gmail.com"
                                                class="info-box_link">abiabicollege5000@gmail.com</a></p>

                                    </div>
                                </div>
                                <div class="info-box_text">
                                    <div class="icon"><img src="assets/img/icon/location-dot.svg" alt="img"></div>
                                    <div class="details">
                                        <p>ABI & ABI
                                                College,
                                                Thanjavur – 613004</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget footer-widget">
                            <h3 class="widget_title">Location</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.488704530972!2d79.1507095!3d10.8401987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11f0b07a0aa7d763!2sAbi%20%26%20Abi%20Arts%20College!5e0!3m2!1sen!2sin!4v1577108990731!5m2!1sen!2sin"
                                width="100%" height="180px" frameborder="0" style="border:0;"
                                allowfullscreen="true"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-wrap">
            <div class="container">
                <div class="row justify-content-lg-between align-items-center">
                    <div class="col-lg-6">
                        <p class="copyright-text">Copyright © 2020 <a href="index.html">abiabicollege</a>. All Rights
                            Reserved.
                        </p>
                    </div>
                    <div class="col-lg-6 text-center text-lg-end">
                        <div class="footer-links">
                            <ul>
                                <li><a href="https://impinfo.in/" target="_blank"> Designed By Imperial</a></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </footer>
    `;

    document.getElementById("footer").innerHTML = footerHTML
})

