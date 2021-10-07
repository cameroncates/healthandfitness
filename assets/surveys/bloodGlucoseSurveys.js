export const survey = {
    list: [
        {
            title: "<strong>Blood Glucose level</strong> - mmol/l ....... Preferable fasted. Score 0 if on medication.",
            labels: [
                { name: "Poor <br> >10", steps: [0] }, 
                { name: ". <br> <10", steps: [1] }, 
                { name: ". <br> <9.0", steps: [2] }, 
                { name: ". <br> <8.5", steps: [3] }, 
                { name: ". <br> <8.0", steps: [4] }, 
                { name: ". <br> <7.5", steps: [5] }, 
                { name: ". <br> <7.0", steps: [6] }, 
                { name: ". <br> <6.4", steps: [7] }, 
                { name: "Good <br> Less than 6", steps: [10] }, 
            ],
            active: 0 
        },

    ],
    datetime: null
}