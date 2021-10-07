<template>
    <div>        
        <section class="container text-center">
            <h2 class="text-primary">List of all the Surveys performed</h2>
            <h5 class="text-muted font-weight-normal">Let's check out what different surveys you have performed</h5>
        </section>

        <section class="container mb-5 mt-5">
            <div v-if="!loading" class="row mx-0">
                <div class="col-md-6 my-3" v-for="(survey, survey_name) in surveys" :key="survey_name">
                    <article class="bg-light transition position-relative border-radius-10">
                        <div class="text-left py-4 px-3">
                            <h5 class="font-weight-bold my-2 p-4 text-primary">
                                {{ camelCaseToSentenceCase(survey_name) }}
                            </h5>
                            <!-- <p class="small font-weight-light line-height-200 mb-0 mt-3">
                                Result submitted: {{ h.datetime }}    
                            </p> -->
                            <!-- <p class="small font-weight-light line-height-200 ">
                                Total Score: {{ h.list.reduce((prev, cur) => prev + cur.active, 0) }}/{{ h.list.length * 10 }}    
                            </p>
                            <p class="small font-weight-light line-height-200 ">
                                Rating: 
                                &nbsp;
                                <span class="mdi mdi-star text-warning"></span>
                                <span class="mdi mdi-star text-warning"></span>
                                <span class="mdi mdi-star text-warning"></span>
                                <span class="mdi mdi-star text-warning"></span>
                                <span class="mdi mdi-star text-warning"></span>
                                <span>({{ Math.round(((h.list.reduce((prev, cur) => prev + cur.active, 0)/(h.list.length * 10))*10) * 10) / 10  }})</span>    
                            </p> -->                            
                            <!-- <div>
                                <a href="#" v-for="(history, history_id, i) in survey" :key="i" class="btn bg-primary m-2 rounded-pill px-4 shadow text-white">
                                    {{ `Survey No.${i+1}` }}
                                </a>
                            </div> -->
                            <table class="table border-0">
                                <thead class="border-0">
                                    <tr class="small border-0 text-center">
                                        <th scope="col" class="border-0">#</th>
                                        <th scope="col" class="border-0">Submitted</th>
                                        <th scope="col" class="border-0">Total Score</th>
                                        <th scope="col" class="border-0">Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr @click="$router.push(`/survey/result/${survey_name}-${history_id}`)" v-for="(history, history_id, i) in survey" :key="i" class="small text-center cursor-pointer">
                                        <th class="border-bottom" scope="row">{{ i + 1 }}</th>
                                        <td class="border-bottom">{{ history.datetime }}</td>
                                        <td class="border-bottom">{{ history.list.reduce((prev, cur) => prev + cur.active, 0) }}/{{ history.list.length * 10 }}</td>
                                        <td class="border-bottom">
                                            <span class="mdi mdi-star text-warning"></span>
                                            <span class="mdi mdi-star text-warning"></span>
                                            <span class="mdi mdi-star text-warning"></span>
                                            <span class="mdi mdi-star text-warning"></span>
                                            <span class="mdi mdi-star text-warning"></span>
                                            <span>({{ Math.round(((history.list.reduce((prev, cur) => prev + cur.active, 0)/(history.list.length * 10))*10) * 10) / 10  }})</span>                                               
                                        </td>
                                    </tr>
                                </tbody>
                            </table>        
                            <!-- <p class="small font-weight-light line-height-200 mb-0 mt-3">
                                Result submitted: {{ h.datetime }}    
                            </p> -->
                            <!-- <p class="small font-weight-light line-height-200 ">
                                Total Score: {{ h.list.reduce((prev, cur) => prev + cur.active, 0) }}/{{ h.list.length * 10 }}    
                            </p>
                            <p class="small font-weight-light line-height-200 ">
                                Rating: 
                                &nbsp;
                                <span class="mdi mdi-star text-warning"></span>
                                <span class="mdi mdi-star text-warning"></span>
                                <span class="mdi mdi-star text-warning"></span>
                                <span class="mdi mdi-star text-warning"></span>
                                <span class="mdi mdi-star text-warning"></span>
                                <span>({{ Math.round(((h.list.reduce((prev, cur) => prev + cur.active, 0)/(h.list.length * 10))*10) * 10) / 10  }})</span>    
                            </p> -->
                            <!-- <div class="w-100 border-top text-right py-1 mt-3">
                                <a :href="`/survey/result/${collection_name}-${id}`" class="btn btn--hover--primary font-weight-bold px-2">View Results</a>
                            </div> -->
                        </div>    
                    </article>
                </div>
            </div>
            <p v-else-if="loading" class="w-100 text-center p-5 my-5">
                Loading Surveys... This will take a while
            </p>
            <p v-else class="w-100 text-center p-5 my-5">
                No Survey Found
            </p>
        </section>    
    </div>
</template>

<script>
import * as fb from '@/services/firebase.js'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            surveys: {
                "careerSatisfactionProfileSurveys": {}, 
                "chemicalIntakeProfileSurveys": {}, 
                "dietProfileSurveys": {}, 
                "familyLifeProfileSurveys": {}, 
                "financeProfileSurveys": {},
                "fitnessProfileSurveys": {},
                "healthClimateSurveys": {},
                "meaningAndPurposeProfileSurveys": {},
                "metabolicHealthProfileSurveys": {},
                "musculoskeletalSurveys": {},
                "peopleSurveys": {},
                "specificJointSurveys": {},
                "stressRiskProfileSurveys": {},
                "universalFitnessSurveys": {}

            },
            loading: true,
        }
    },
    computed: {
        ...mapGetters({
            uid: "web/getUid"
        })
    },
    async mounted() {
        for (var key in this.surveys) {
            let ref = await fb.db.collection(key).doc(this.uid)
            const doc = await ref.get()
            this.surveys[key] = doc.data()

        }
        this.loading = false            
        console.log(this.surveys, "surveys")


    }
}
</script>

<style>

</style>