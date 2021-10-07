<template>
    <div>        
        <section class="container text-center">
            <h2 class="text-primary">
                {{ camelCaseToSentenceCase(collection_name) }}
            </h2>
            <h5 class="text-muted font-weight-normal">All the survey that you took in {{ camelCaseToSentenceCase(collection_name) }} is showing below</h5>
        </section>    

        <section class="container mb-5 mt-5">
            <div v-if="history && !loading" class="row mx-0">
                <div class="col-md-4 my-3" v-for="(h, id) in history" :key="id">
                    <article class="hover-shadow transition position-relative border-radius-10">
                        <div class="text-left py-4 px-3">
                            <h6 class="font-weight-bold my-2 text-primary">
                                {{ camelCaseToSentenceCase(collection_name) }}
                            </h6>
                            <p class="small font-weight-light line-height-200 mb-0 mt-3">
                                Result submitted: {{ h.datetime }}    
                            </p>
                            <p class="small font-weight-light line-height-200 ">
                                Total Score: {{ h.list.reduce((prev, cur) => prev + parseInt(cur.active), 0) }}/{{ h.list.length * 10 }}    
                            </p>
                            <p class="small font-weight-light line-height-200 ">
                                Rating: 
                                &nbsp;
                                <span class="mdi mdi-star text-warning"></span>
                                <span class="mdi mdi-star text-warning"></span>
                                <span class="mdi mdi-star text-warning"></span>
                                <span class="mdi mdi-star text-warning"></span>
                                <span class="mdi mdi-star text-warning"></span>
                                <span>({{ Math.round(((h.list.reduce((prev, cur) => prev + parseInt(cur.active), 0)/(h.list.length * 10))*10) * 10) / 10  }})</span>    
                            </p>
                            <div class="w-100 border-top text-right py-1 mt-3">
                                <a :href="`/survey/result/${collection_name}-${id}`" class="btn btn--hover--primary font-weight-bold px-2">View Results</a>
                            </div>
                        </div>    
                    </article>
                </div>
            </div>
            <p v-else-if="loading" class="w-100 text-center p-5 my-5">
                Loading...
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
            collection_name: null,
            history: null,
            loading: true,
        }
    },
    computed: {
        ...mapGetters({
            uid: "web/getUid"
        })
    },
    async mounted() {
        this.collection_name = this.$route.params.id
        let ref = await fb.db.collection(this.collection_name).doc(this.uid)
        const doc = await ref.get()
        if (doc.exists) {
            this.history = doc.data()
        }
        this.loading = false
    }
}
</script>

<style>

</style>