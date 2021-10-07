export const survey = {
    list: [
        {
            title: "Blood pressure - systolic ......./ (The higher figure.) Normal is 120 for men and 110 - 120 for women. Score 0 if on medication.",
            labels: [
                { name: "Poor <br> >160", steps: [0, null, null] }, 
                { name: ". <br> >155", steps: [3] }, 
                { name: ". <br> <150", steps: [4] }, 
                { name: ". <br> <145", steps: [5] }, 
                { name: ". <br> <140", steps: [6] }, 
                { name: ". <br> <135", steps: [7] }, 
                { name: ". <br> <130", steps: [8] }, 
                { name: ". <br> <125", steps: [9] }, 
                { name: "Good <br> <120", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "Blood pressure - diastolic ...../ (The lower figure.) Normal is 80 for men and 70 - 80 for women. Score 0 if on medication.",
            labels: [
                { name: "Poor <br> >100", steps: [0, null, null, null] }, 
                { name: ". <br> <100", steps: [4] }, 
                { name: ". <br> <97", steps: [5] }, 
                { name: ". <br> <94", steps: [6] }, 
                { name: ". <br> <90", steps: [7] }, 
                { name: ". <br> <87", steps: [8] }, 
                { name: ". <br> <84", steps: [9] }, 
                { name: "Good <br> <80", steps: [10] },  
            ],
            active: 0 
        },




    ],
    datetime: null
}