<template>
    <div>
        <section class="container text-center">
            <h2 class="text-primary">{{ camelCaseToSentenceCase(collection_name) }}</h2>
            <br>
        </section>    
        <div class="row mx-0 px-0 my-4 py-4">

        </div>

        <div v-if="survey" class="row mx-0 px-0 my-4 py-4">
            <div v-for="(q, i) in survey.list" :key="i" class="mb-5 px-0 align-self-center w-100 "> 
                <p class="line-height-200 mb-1" v-html="q.title">
                </p> 
                <div v-if="collection_name == 'healthClimateSurveys' " class="row">
                    <div v-for="(label, j) in q.labels" :key="j" 
                        :class="label.steps && 
                        (label.steps.length == 1 || label.steps.filter(l => l != null).length == 1) ? 'text-center' : 
                        q.labels[j+1] ? 'text-left' : 'text-right'"
                        class="px-1">
                        <p class="mb-0 font-weight-light pl-2" v-html="label.name">
                        </p>                    
                        <div class="range-slider" v-if="label.steps">
                            <span
                                :style="{
                                    'background-color': (q.active == step && step > 0) || (step == 0 && q.active == step) ? getHealthBgColor(step) : 'transparent',
                                    }"
                                @click="q.active = step" 
                                v-for="(step, k) in label.steps" :key="k" 
                                :class="step == null ? 'p-0 mx-0' : null"
                                class="cursor-pointer range-slider__value text">
                                {{ step }}
                            </span>
                        </div>
                    </div>
                    <span class="align-self-end ml-5 range-slider__value range-slider__value__active">{{ q.active }}</span>
                </div>    
                <div v-else class="row">
                    <div v-for="(label, j) in q.labels" :key="j" 
                        :class="label.steps && 
                        (label.steps.length == 1 || label.steps.filter(l => l != null).length == 1) ? 'text-center' : 
                        q.labels[j+1] ? 'text-left' : 'text-right'"
                        class="px-1">
                        <p class="mb-0 font-weight-light pl-2" v-html="label.name">
                        </p>                    
                        <div class="range-slider" v-if="label.steps">
                            <span
                                :style="{
                                    'background-color': (q.active == step && step > 0) || (step == 0 && q.active == step) ? getBgColor(step) : 'transparent',
                                    }"
                                @click="q.active = step" 
                                v-for="(step, k) in label.steps" :key="k" 
                                :class="step == null ? 'p-0 mx-0' : null"
                                class="cursor-pointer range-slider__value text">
                                {{ step }}
                            </span>
                        </div>
                    </div>
                    <span class="align-self-end ml-5 range-slider__value range-slider__value__active">{{ q.active }}</span>
                </div>    

                <div class="range-slider">
                    <!-- <input class="range-slider__range" type="range" v-model="q.active" 
                        @input="updateHealthSlider($event, q.active)"
                        @change="updateHealthSlider($event, q.active)" min="0" max="10" step="1"> -->
                </div>
            </div>   
            <div class="col-md-11 mt-4 pt-5 border-top text-right">
                <strong>Total Score is:</strong> 
                <span class="align-self-center mt-4 ml-4 range-slider__value range-slider__value__active">{{ survey.list.reduce((prev, cur) => prev + parseInt(cur.active), 0) }}</span>
                <br>
                <button :disabled="loading" @click="submitSurvey(survey)" class="btn btn--primary shadow px-4 py-2 my-5 ">
                    {{ loading ? "Please wait" : "Submit Result" }}
                </button>
            </div>
        </div>    
        <p v-else class="p-5 text-center my-5">No Survey Found</p>      
    </div>
</template>

<script>
import * as fb from '@/services/firebase.js'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            loading: true,
            survey: null,
            collection_name: null
        }
    },
    computed: {
        ...mapGetters({
            uid: "web/getUid"
        })
    },
    methods: {
        async submitSurvey(survey) {
            try {
                this.loading = true
                survey["datetime"] = this.getDateTime()
                let ref = await fb[`${this.collection_name}Collection`].doc(this.uid)
                const doc = await ref.get()
                if (!doc.exists) {
                    ref.set({
                        [new Date().getTime()]: survey
                    })
                } else {
                    ref.update({
                        [new Date().getTime()]: survey
                    })
                }
                this.loading = false
                this.$router.push(`/survey/history/${this.collection_name}`)

            } catch (err) {
                alert(err.message)
                this.loading = false
            }            
        }
    },
    async mounted() {
        this.collection_name = this.$route.params.id
        try {
            let { survey } = require(`@/assets/surveys/${this.collection_name}.js`)
            if (survey) {
                this.survey = survey
            } else {
                alert("Please Add Survey in assets")
            }
        } catch(err) {
            console.log(err)
        }
        this.loading = false

    }
}
</script>

<style>

</style>
