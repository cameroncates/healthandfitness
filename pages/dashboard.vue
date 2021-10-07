<template>
    <div>
        <section class="container text-center">
            <h2 class="text-primary">HEALTH AND FITNESS AUDIT</h2>
            <h5 class="text-muted font-weight-normal">Let's check out our different surveys</h5>
        </section>

        <section class="container mb-5 mt-5">
            <div class="row mx-0">
                <div class="col-md-4 my-3" v-for="(survey, i) in surveys" :key="i">
                    <article class="hover-shadow transition position-relative border-radius-10">
                        <div class="border-radius-top-10">
                            <img :src="survey.thumbnail" class="w-100 border-radius-top-10" alt="">
                        </div>
                        <div class="text-center py-4 px-3">
                            <h6 class="font-weight-bold my-2">
                                {{ survey.name }}
                            </h6>
                            <p class="small font-weight-light line-height-200">Quo iste velit, porro quis facilis tenetur repellat ipsa omnis! Voluptates officiis </p>
                            <div class="w-100 border-top text-right py-1">
                                <a :href="`/survey/${survey.collection_name}`" class="btn btn--hover--primary font-weight-bold px-2">Take Survey</a>
                                <a :href="`/survey/history/${survey.collection_name}`" class="btn btn--hover--primary font-weight-bold px-2">Results</a>
                            </div>
                        </div>    
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            surveys: [
                { name: "Health climate Survery", thumbnail: "https://healthandfitnessauditonline.com/img/healthclimatesurvey-min.png", collection_name: "healthClimateSurveys"  },
                { name: "Fitness Profile", thumbnail: "https://healthandfitnessauditonline.com/img/fitnessassessment-min.png", collection_name: "fitnessProfileSurveys" },
                { name: "Universal Fitness Test", thumbnail: "https://healthandfitnessauditonline.com/img/universalfitnesstest-min.png", collection_name: "universalFitnessSurveys"  },
                { name: "Specific Joint Assessment", thumbnail: "https://healthandfitnessauditonline.com/img/specificjointassessment-min.png", collection_name: "specificJointSurveys" },
                { name: "Musculoskeletal", thumbnail: "https://healthandfitnessauditonline.com/img/musculoskeletalrisk-min.png",  collection_name: "musculoskeletalSurveys" },
                { name: "Metabolic Health Profile", thumbnail: "https://healthandfitnessauditonline.com/img/metabolichealth-min.png", collection_name: "metabolicHealthProfileSurveys" },
                { name: "Blood Glucose Level", thumbnail: "https://healthandfitnessauditonline.com/img/metabolichealth-min.png", collection_name: "bloodGlucoseSurveys" },
                { name: "Cholesterol Level", thumbnail: "https://healthandfitnessauditonline.com/img/metabolichealth-min.png", collection_name: "cholesterolLevelSurveys" },
                { name: "Blood pressure (systolic and diastolic)", thumbnail: "https://healthandfitnessauditonline.com/img/metabolichealth-min.png", collection_name: "bloodPressureSurveys" },
                
                { name: "Diet Profile", thumbnail: "https://healthandfitnessauditonline.com/img/dietassessment-min.png", collection_name: "dietProfileSurveys" },
                { name: "Chemical Intake Profile", thumbnail: "https://healthandfitnessauditonline.com/img/chemicalintakeassessment-min.png", collection_name: "chemicalIntakeProfileSurveys" },
                { name: "Stress Risk Profile", thumbnail: "https://healthandfitnessauditonline.com/img/stressrisk-min.png", collection_name: "stressRiskProfileSurveys" },
                { name: "Career Satisfaction Profile", thumbnail: "https://healthandfitnessauditonline.com/img/careersatisfaction-min.png", collection_name: "careerSatisfactionProfileSurveys" },
                { name: "Meaning and Purpose Profile", thumbnail: "https://healthandfitnessauditonline.com/img/meaningandpurpose-min.png", collection_name: "meaningAndPurposeProfileSurveys" },
                { name: "Family Life Profile", thumbnail: "https://healthandfitnessauditonline.com/img/familylife-min.png",collection_name: "familyLifeProfileSurveys" },
                { name: "Finance Profile", thumbnail: "https://healthandfitnessauditonline.com/img/financeassessment-min.png", collection_name: "financeProfileSurveys" },
                { name: "People", thumbnail: "https://healthandfitnessauditonline.com/img/peopleassessment-min.png", collection_name: "peopleSurveys" },
            ]
        }
    }
}
</script>

<style>

</style>