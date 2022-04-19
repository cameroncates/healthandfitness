<template>
    <div>
        <section class="container ">
            <form  @submit.prevent="update(form)" class="row mx-0 bg-white py-5 px-4 px-md-5 border-radius-10">
                <div class="col-md-12 px-1 px-md-2 text-center">
                    <img :src="slide_img"  alt="">
                </div>
                <div>
                    For centuries whenever Australians have met they've been asking each other 'ow-y-garn'. One word. The usual response is 'not-bad-ows-y-self'.
                </div>
                <div> 
                    The 100 point 'how are you going' scale will enable you to give a precise answer to the question.
                </div>
                <div>
                    The scale goes from zero (dreadful) through to 100 (absolutely fantastic).
                </div>
                        <input v-model="form.fname" type="hidden" class="form-control custom--input" placeholder="First Name" required>
                        <input v-model="form.lname" type="hidden" class="form-control custom--input" placeholder="Last Name" required>
                        <input v-model="form.email" type="hidden" class="form-control custom--input" placeholder="Email" required>
                        <input v-model="form.mobile_number" type="hidden" class="form-control custom--input" placeholder="Mobile Number" required>
                <div class="col-md-6 px-1 px-md-2 my-2">
                    <label>Your score: any number between 1 and 100</label>
                    <div class="input-group">
                        <input  type="number" v-model="form.score" class="form-control custom--input" placeholder="Score" min="1" max="100" required>
                    </div>    
                </div>

                <div class="col-md-6 px-1 px-md-2 my-2">
                    <label>Age</label>
                    <div class="input-group">
                        <input v-model="form.age" type="number" class="form-control custom--input" placeholder="Age" required>
                    </div>    
                </div>
                <div class="col-md-6 px-1 px-md-2 my-2">
                    <div class="form-group">
                    <label>Gender</label>
                        <select v-model="form.gender" class="form-control custom--input" id="exampleFormControlSelect1" required>
                          <option selected disabled>Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                    </div>                                
                </div> 
                <div class="col-md-6 px-1 px-md-2 my-2">
                    <label>PostCode</label>
                    <div class="input-group">
                        <input  type="text" v-model="form.postcode" class="form-control custom--input" placeholder="Post Code" required>
                    </div>    
                </div>

                <div class="col-md-12 text-center my-4">
                    <button :disabled="loading" class="btn btn--primary px-5 py-1 font-weight-bold rounded-pill">
                        {{ loading ? "Please wait..." : "Submit" }}
                    </button>
                </div>
            </form>

        </section>
        <section class="container text-center">
            <h2 class="text-primary">Fitness Record Asssesment</h2>
            <h5 class="text-muted font-weight-normal">From this page, you will be able to select and complete any of the assessments. You will also be able to come back and view the results and send them to trusted third parties.</h5>
        </section>

        <section class="container mb-5 mt-5">
            <div class="row mx-0">
                <div class="col-md-4 my-3" v-for="(survey, i) in surveys" :key="i">
                    <article class="row mx-0 hover-shadow transition position-relative border-radius-10">
                        <div class="border-radius-top-10 col-12 text-center pt-4">
                            <a :href="`/survey/${survey.collection_name}`"><img :src="survey.thumbnail" width="100" height="100"> </a>
                        </div>
                        <div class="text-center py-4 px-3">
                            <h6 class="font-weight-bold my-2">
                                {{ survey.name }}
                            </h6>
                            <div class="w-100 border-top text-right py-1">
                                <a :href="`/survey/${survey.collection_name}`" class="btn btn--hover--primary font-weight-bold px-2">Take Survey</a>
                                <a :href="`/survey/history/${survey.collection_name}`" class="btn btn--hover--primary font-weight-bold px-2">Results</a>
                            </div>
                        </div>    
                    </article>
                </div>
            </div>
        </section>
        <script src="http://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-e02a350f-9cea-4bdc-9b7d-331349c93400"></div>
    </div>
</template>

<script>
import * as fb from '@/services/firebase.js'
import { mapGetters } from 'vuex'
import slide_img from "@/assets/images/slide.jpg"
export default {
    data() {
        return {
            score:'',
            age:'',
            gender:'',
            postcode:'',
            slide_img,
            form: {
                fname: "loading...",
                lname: "loading...",
                email: "loading...",
                mobile_number: "loading...",
                postcode: "loading...",
                score: "loading...",
                age: "loading...",
                gender: null
            },
            surveys: [
               { name: "Health climate Survery", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/health_climate_survey_app_logo_125.jpg", collection_name: "healthClimateSurveys"  },
                { name: "Fitness Profile", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/fitness_assessment%20app%20logo_125.jpg", collection_name: "fitnessProfileSurveys" },
                { name: "Universal Fitness Test", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/universal_fitness_test_app_logo_125.jpg", collection_name: "universalFitnessSurveys"  },
                { name: "Specific Joint Assessment", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/specific_joint_assessment_app%20_logo_125.jpg", collection_name: "specificJointSurveys" },
                { name: "Musculoskeletal", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/musculo-skeletal_fitness_app_logo_125.jpg",  collection_name: "musculoskeletalSurveys" },
                { name: "Metabolic Health Profile", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/metabolic_fitness-app_logo_125.jpg", collection_name: "metabolicHealthProfileSurveys" },
                { name: "Blood Glucose Level", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/blood_glucose_app_logo_125.jpg", collection_name: "bloodGlucoseSurveys" },
                { name: "Cholesterol Level", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/cholesterol_app_logo_125.jpg", collection_name: "cholesterolLevelSurveys" },
                { name: "Blood pressure (systolic and diastolic)", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/blood_pressure_app_logo_125.jpg", collection_name: "bloodPressureSurveys" },
                
                { name: "Diet Profile", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/diet_profile_app_logo_125.jpg", collection_name: "dietProfileSurveys" },
                { name: "Chemical Intake Profile", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/chemical_intake_profile_app_logo_125.jpg", collection_name: "chemicalIntakeProfileSurveys" },
                { name: "Stress Risk Profile", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/stress_profile_app_logo_125.jpg", collection_name: "stressRiskProfileSurveys" },
                { name: "Career Satisfaction Profile", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/career_satisfaction_profile_app_logo_125.jpg", collection_name: "careerSatisfactionProfileSurveys" },
                { name: "Meaning and Purpose Profile", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/meaning_and_purpose_app_logo_125.jpg", collection_name: "meaningAndPurposeProfileSurveys" },
                { name: "Family Life Profile", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/family_profile_app_logo_125.jpg",collection_name: "familyLifeProfileSurveys" },
                { name: "Finance Profile", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/finance_profile_app_log_125.jpg", collection_name: "financeProfileSurveys" },
                { name: "People", thumbnail: "https://www.johnmiller.com.au/my_fitness_record/images/logos_complete_9-21/people-profile_app_logo_125.jpg", collection_name: "peopleSurveys" },
            ]
        }

    },
    computed: {
        ...mapGetters({
            uid: "web/getUid",
            user: "web/getUser"
        })
    },
    watch: {
        user(user) {
            this.score = user.score
            this.age = user.age
            this.gender = user.gender
            this.postcode = user.postcode
            this.form.fname = user.fname
            this.form.lname = user.lname
            this.form.email = user.email
            this.form.mobile_number = user.mobile_number
            this.form.postcode = user.postcode
            this.form.score = user.score
            this.form.gender = user.gender
            this.form.age = user.age
        }
    },
    methods: {
        async update(form) {
            try {
                this.loading = true
                await fb.usersCollection.doc(this.uid).set(form)
                this.loading = false
                alert("Updated successfully")

            } catch (err) {
                alert(err.message)
                this.loading = false
            }
        }
    },}
</script>

<style>

</style>