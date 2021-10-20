<template>
    <div>
        <section class="container text-center">
            <h2 class="text-primary">Fitness Record Asssesment</h2>
            <h5 class="text-muted font-weight-normal">From this page, you will be able to select and complete any of the assessments. You will also be able to come back and view the results and send them to trusted third parties.</h5>
        </section>

        <section class="container mb-5 mt-5">
            <div class="row mx-0">
                <div class="col-md-4 my-3" v-for="(survey, i) in surveys" :key="i">
                    <article class="row mx-0 hover-shadow transition position-relative border-radius-10">
                        <div class="border-radius-top-10 col-12 text-center pt-4">
                            <img :src="survey.thumbnail" width="100" height="100"> 
                        </div>
                        <div class="text-center py-4 px-3">
                            <h6 class="font-weight-bold my-2">
                                {{ survey.name }}
                            </h6>
                            <p class="small font-weight-light line-height-200">Be patience and check the survey questions properly.</p>
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
export default {
    data() {
        return {
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
    }
}
</script>

<style>

</style>