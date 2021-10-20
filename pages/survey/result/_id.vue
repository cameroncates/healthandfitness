<template>
    <div>        
        <div id="editor">
            <section class="container text-center">
                <h2 class="text-primary">
                    {{ camelCaseToSentenceCase(collection_name) }} Result
                </h2>
                <h5 class="text-muted font-weight-normal">All the survey that you took in {{ camelCaseToSentenceCase(collection_name) }} is showing below</h5>
            </section>    

            <section class="container mb-5 mt-5 px-0">
                <div v-if="result && !loading" class="row mx-0">
                    <div id="non-rendered" class="buttons-section col-md-12 text-right py-4 px-0">
                        <div class="w-100 text-left">
                            <button @click="exportAsPDF('editor', 'non-rendered', camelCaseToSentenceCase(collection_name))" class="btn hover-effect font-weight-bold">
                                <span class="text-primary d-flex align-items-center">
                                    <span class="mdi mdi-pdf-box mdi-24px mr-2"></span>
                                    Download as PDF
                                </span>
                            </button>
                            <p class="pl-4"><strong>Note: </strong> When you click on the <strong><i>Download as PDF</i></strong> button, the pdf will appear in the downloads folder of your computer. To send it to someone else, open your email account, insert the email of the person you are sending the report to and extract the PDF from your Download box and attach it to the email. Then Press 'send'.</p>
                        </div>
                        <button @click="setNotification({
                            title: user ? `<strong>${user.fname} ${user.lname}</strong> shared a survey with you: I have scored <strong>${result.list.reduce((prev, cur) => prev + parseInt(cur.active), 0)}</strong> out of ${result.list.length * 10} in the <strong>${camelCaseToSentenceCase(collection_name)}</strong>. My overall Rating was <strong>${Math.round(((result.list.reduce((prev, cur) => prev + parseInt(cur.active), 0)/(result.list.length * 10))*10) * 10) / 10}</strong>` : 'Unknow Title',
                            read: false,
                            datetime: getDateTime(),
                            url: `/survey/result/${collection_name}-${result_id}?uid=${uid}`,
                            user
                        })" 
                        class="btn hover--primary font-weight-bold"  data-toggle="modal" data-target="#shareModal" >
                            <span class="text-primary d-flex align-items-center">
                                <span class="mdi mdi-share-variant mdi-24px mr-2"></span>
                                Share
                            </span>
                        </button>
                    </div>
                    <div class="col-md-12 mx-0 px-0 row">
                        <p class="small font-weight-bold text-right col-12 px-4">
                            Scored: /10    
                        </p>
                        <div class="col-md-12 my-2" v-for="(question, id) in result.list" :key="id">
                            <article class="border-bottom">
                                <div class="d-flex justify-content-between align-items-center text-left px-3">
                                    <h6 class="font-weight-normal w-75" v-html="camelCaseToSentenceCase(question.title)">
                                    </h6>
                                    <h5 class="font-weight-bold px-3 py-1" style="border: 4px solid black">
                                        {{ question.active}}  
                                    </h5>
                                </div>    
                            </article>
                        </div>
                        <div class="col-md-12 my-3">
                            <article class="transition position-relative border-radius-10">
                                <div class="text-left py-4 px-3">
                                    <h6 class="font-weight-light line-height-200 mb-0 mt-3">
                                        Result submitted: {{ result.datetime }}    
                                    </h6>
                                    <h6 class="font-weight-light line-height-200 ">
                                        Total Scored: {{ result.list.reduce((prev, cur) => prev + parseInt(cur.active), 0) }}/{{ result.list.length * 10 }}    
                                    </h6>
                                    <h6 class="font-weight-light line-height-200 ">
                                        Overall Rating: 
                                        &nbsp;
                                        <span class="mdi mdi-star text-warning"></span>
                                        <span class="mdi mdi-star text-warning"></span>
                                        <span class="mdi mdi-star text-warning"></span>
                                        <span class="mdi mdi-star text-warning"></span>
                                        <span class="mdi mdi-star text-warning"></span>
                                        <span>({{ Math.round(((result.list.reduce((prev, cur) => prev + parseInt(cur.active), 0)/(result.list.length * 10))*10) * 10) / 10  }})</span>    
                                    </h6>
                                    <!-- <div class="w-100 border-top text-center py-1 mt-3">
                                        <a href="`/survey/result/${collection_name}-${id}`" class="btn text-white font-weight-bold px-2">View Results</a>
                                    </div> -->
                                </div>    
                            </article>
                        </div>                        
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
        <share-modal />
    </div>
</template>

<script>
import * as fb from '@/services/firebase.js'
import { mapGetters, mapMutations } from 'vuex'
import ShareModal from '../../../components/ShareModal.vue'
export default {
    components: {
        ShareModal
    },
    data() {
        return {        
            collection_name: null,
            result_id: null,
            result: null,
            loading: true,
        }
    },
    computed: {
        ...mapGetters({
            uid: "web/getUid",
            user: "web/getUser"
        })
    },
    methods: {
        ...mapMutations({
            setNotification: "web/setNotification"
        }),
    },
    async mounted() {
        let params = this.$route.params.id.split("-")
        this.collection_name = params[0]
        this.result_id = params[1]
        let doc = await this.getDoc({ collection_name: this.collection_name, uid: this.$route.query.uid || this.uid }) 
        if (doc.exists) {
            this.result = doc.data()[this.result_id]
        }
        this.loading = false
    }
}
</script>

<style>

</style>