<template>
    <div class="container-fluid px-0">
        <navbar></navbar>   
        <div class="container py-5">
            <nuxt />
        </div>

        <footer class="position-relative bg-dark-grey py-2">
            <div class="container px-0 pt-5">
                <div class="row mx-0 text-white">
                    <div class="col-md-6 mb-5 mb-md-0 px-6">
                        <h5 class="primary-border-left pl-2">Fitness Record <span class="font-weight-light ml-1 text-light">Assesments</span></h5>
                        <div class="w-100 light-border-bottom mt-3 mb-2"></div>
                        <p class="line-height-200 text-light font-weight-normal my-3 "><strong class="text-white">Fitness Record</strong> Assesment is an Health examine platform with lot of survey and have physician,doctor for advice.</p>
                        <a rel="nofollow" href="#" class="btn btn-circle btn-circle-sm btn--secondary mx-1 my-1">
                            <i class="mdi mdi-facebook"></i>
                        </a>
                        <a rel="nofollow" href="#" class="btn btn-circle btn-circle-sm btn--secondary mx-2 my-2">
                            <i class="mdi mdi-instagram"></i>
                        </a>
                        <a rel="nofollow" href="#" class="btn btn-circle btn-circle-sm btn--secondary mx-2 my-2">
                            <i class="mdi mdi-twitter"></i>
                        </a>
                        <a rel="nofollow" href="#" class="btn btn-circle btn-circle-sm btn--secondary mx-2 my-2">
                            <i class="mdi mdi-youtube"></i>
                        </a>
                    </div>
                    <div class="col-md-6 px-6 text-light line-height-200 mb-5 mb-md-0">
                        <h5 class="primary-border-left pl-2 text-white">Contact <span class="font-weight-light ml-1 text-light">Info</span></h5>
                        <div class="w-100 light-border-bottom mt-3 mb-2"></div>
                        <div class="d-flex"><i class="mdi mdi-email mr-2"></i> <p class="font-weight-normal">John.miller@millerhealth.com.au</p></div>
                        <div class="d-flex"><i class="mdi mdi-map-marker-multiple mr-2"></i> <p class="font-weight-normal">Location:7 Salvado place stirling, ACT, Australia 2611</p></div>
                        <div class="d-flex"><i class="mdi mdi-clock-time-eight-outline mr-2"></i> <p class="font-weight-normal">Mon - Fri: 09:00 AM - 09:00 PM</p></div>
                    </div>
                                
                                   
                    <div class="col-md-12 light-border-bottom my-4"></div>
                    <div class="col-12 text-center text-light">
                        <p class="small font-weight-normal">2021 My Fitness Record. All Rights reserved</p>
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