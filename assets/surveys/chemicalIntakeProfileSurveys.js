export const survey = {
    list: [
        {
            title: "Do you smoke? If ‘yes’ score zero. If ’no, score 10. Tick the box if you’re ready to give it away",
            labels: [
                { name: "Yes", steps: [0] }, 
                { name: "No", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "How many standard alcoholic drinks do you have a week?",
            labels: [
                { name: "High <br> >20", steps: [0] }, 
                { name: ". <br> 20", steps: [1] }, 
                { name: ". <br> 15", steps: [2, 3] }, 
                { name: ". <br> 13", steps: [4, 5] }, 
                { name: ". <br> 11", steps: [6, 7] }, 
                { name: "Low <br> 9", steps: [8, 9] }, 
                { name: "Nil <br> 7", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "Do you drink too much caffeine? How many cups of coffee or cola drinks do you have a day? We live in a high caffeine culture!",
            labels: [
                { name: "Yes <br> >8", steps: [0, null, null] }, 
                { name: ". <br> 8", steps: [3] }, 
                { name: ". <br> 7", steps: [4] }, 
                { name: ". <br> 6", steps: [5] }, 
                { name: ". <br> 5", steps: [6] }, 
                { name: ". <br> 4", steps: [7] }, 
                { name: ". <br> 3", steps: [8] }, 
                { name: ". <br> 2", steps: [9] }, 
                { name: "No <br> 1", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "Are you a high salt eater? If you add lots of salt to your food; if you eat a lot of salty food (chips, nuts, Vegemite, processed meat, take-aways, canned food...), score low.",
            labels: [
                { name: "Yes", steps: [0, 1, 2, 3, 4, 5] }, 
                { name: "No", steps: [6, 7, 8, 9, 10] }, 
            ],
            active: 0 
        },
        {
            title: "How do you rate your reliance on anti-inflammatory tablets?Score 0 if you’re currently on them.",
            labels: [
                { name: "High", steps: [0, 1, 2, 3, 4, 5, 6, 7] }, 
                { name: "Low", steps: [8, 9] }, 
                { name: "Nil", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "How do you rate your reliance on headache and pain killing tablets?",
            labels: [
                { name: "High", steps: [0, 1, 2, 3, 4, 5, 6, 7] }, 
                { name: "Low", steps: [8, 9] }, 
                { name: "Nil", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "Are you on sleeping (tranquillisers, hypnotics, relaxants) tablets?If ‘yes’ score zero. If ‘no’, score 10.",
            labels: [
                { name: "Yes", steps: [0] }, 
                { name: "No", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "Are you on anti-depressant tablets?If ‘yes’ score zero. If ‘no’, score 10.",
            labels: [
                { name: "Yes", steps: [0] }, 
                { name: "No", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "Are you on blood pressure tablets?If ‘yes’ score zero. If ‘no’, score 10.",
            labels: [
                { name: "Yes", steps: [0] }, 
                { name: "No", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "Are you on diabetes tablets?If ‘yes’ score zero. If ‘no’, score 10.",
            labels: [
                { name: "Yes", steps: [0] }, 
                { name: "No", steps: [10] }, 
            ],
            active: 0 
        },


    ],
    datetime: null
}