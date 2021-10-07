<template>
    <div class="container-fluid px-0">
        <navbar></navbar>   
        <div class="container py-5">
            <nuxt />
        </div>

        <footer class="position-relative bg-dark-grey py-2">
            <div class="container px-0 pt-5">
                <div class="row mx-0 text-white">
                    <div class="col-md-3 mb-5 mb-md-0 px-3">
                        <h5 class="primary-border-left pl-2">HEALTH & FITNESS <span class="font-weight-light ml-1 text-light">Solutions</span></h5>
                        <div class="w-100 light-border-bottom mt-3 mb-2"></div>
                        <p class="line-height-200 text-light font-weight-normal my-3 "><strong class="text-white">HEALTH & FITNESS</strong> Solutions is an IT Solution Provider Company having superb expertise in all aspects of Internet Services</p>
                        <a rel="nofollow" href="#" class="btn btn-circle btn-circle-sm btn--secondary mx-1 my-1">
                            <i class="mdi mdi-facebook"></i>
                        </a>
                        <a rel="nofollow" href="#" class="btn btn-circle btn-circle-sm btn--secondary mx-1 my-1">
                            <i class="mdi mdi-instagram"></i>
                        </a>
                        <a rel="nofollow" href="#" class="btn btn-circle btn-circle-sm btn--secondary mx-1 my-1">
                            <i class="mdi mdi-twitter"></i>
                        </a>
                        <a rel="nofollow" href="#" class="btn btn-circle btn-circle-sm btn--secondary mx-1 my-1">
                            <i class="mdi mdi-youtube"></i>
                        </a>
                    </div>
                    <div class="col-md-3 px-3 text-light line-height-200 mb-5 mb-md-0">
                        <h5 class="primary-border-left pl-2 text-white">Contact <span class="font-weight-light ml-1 text-light">Info</span></h5>
                        <div class="w-100 light-border-bottom mt-3 mb-2"></div>
                        <div class="d-flex"><i class="mdi mdi-email mr-2"></i> <p class="font-weight-normal">info@usquaresolutions.com</p></div>
                        <div class="d-flex"><i class="mdi mdi-map-marker-multiple mr-2"></i> <p class="font-weight-normal">Office No# 11, 3rd Floor, Capital Trade Center, Islamabad</p></div>
                        <div class="d-flex"><i class="mdi mdi-clock-time-eight-outline mr-2"></i> <p class="font-weight-normal">Mon - Fri: 09:00 AM - 09:00 PM</p></div>
                    </div>
                    <div class="col-md-3 mb-5 mb-md-0 px-3">
                        <h5 class="primary-border-left pl-2">Latest <span class="font-weight-light ml-1 text-light">Info</span></h5>
                        <div class="w-100 light-border-bottom mt-3 mb-2"></div>                    
                        <p class="line-height-200 text-light font-weight-normal my-3">We deliver modern design with clean lines and structure for a wide variety of content, exactly how a business design should be.</p>
                    </div>                
                    <div class="col-md-3 mb-5 mb-md-0 px-2">
                        <h5 class="primary-border-left pl-2">Newsletter</h5>
                        <div class="w-100 light-border-bottom mt-3 mb-2"></div>
                        <form class="d-inline-block mb-0 w-100">
                            <div class="input-group row mx-0 my-3">
                                <input type="text" class="col-10 align-self-center form-control rounded-pill small transition newsletter-field bg-white w-100 border-0 py-2" placeholder="Enter your email here..." style="font-size: 0.75rem;">
                            </div>
                        </form>                    
                        <p class="line-height-200 text-light font-weight-normal">Get Latest News and promotions Letters direct in your inbox!</p>
                    </div>                
                    <div class="col-md-12 light-border-bottom my-4"></div>
                    <div class="col-12 text-center text-light">
                        <p class="small font-weight-normal">2021 HEALTH & FITNESS Solutions. All Rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>          
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
export default {
    components: { Navbar }, 

}
</script>