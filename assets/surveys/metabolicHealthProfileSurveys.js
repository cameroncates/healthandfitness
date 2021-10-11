export const survey = {
    list: [
        {
            title: "What was your score on the <strong> Health, Fitness and Wellbeing profile?</strong>",
            labels: [
                { name: "High <br> >120", steps: [0] }, 
                { name: ". <br> 120", steps: [1] }, 
                { name: ". <br> 100", steps: [2] }, 
                { name: ". <br> 80", steps: [3] }, 
                { name: ". <br> 70", steps: [4] }, 
                { name: ". <br> 60", steps: [5] }, 
                { name: ". <br> 50", steps: [6] }, 
                { name: ". <br> 40", steps: [7] }, 
                { name: ". <br> 30", steps: [8] }, 
                { name: ". <br> 20", steps: [9] }, 
                { name: "Low <br> <20", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "<strong>Body Composition</strong> Are you about your ideal weight ? Scores based on number of kilos of body fat over what you consider to be your ideal weight.",
            labels: [
                { name: "No <br> >20", steps: [0] }, 
                { name: ". <br> <20", steps: [1] }, 
                { name: ". <br> <18", steps: [2] }, 
                { name: ". <br> <16", steps: [3] }, 
                { name: ". <br> <14", steps: [4] }, 
                { name: ". <br> <12", steps: [5] }, 
                { name: ". <br> <10", steps: [6] }, 
                { name: ". <br> <8", steps: [7] }, 
                { name: ". <br> <6", steps: [8] }, 
                { name: ". <br> <4", steps: [9] }, 
                { name: "Yes <br> <2", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "Do you smoke? If ‘yes’ score zero. If ‘no’, score 10.",
            labels: [
                { name: "Yes", steps: [0] }, 
                { name: "No", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "Aerobic fitness 5 minute, 20m lap run. Laps .....",
            labels: [
                { name: "Poor <br> <22", steps: [0] }, 
                { name: ". <br> <22", steps: [1] }, 
                { name: ". <br> <24", steps: [2] }, 
                { name: ". <br> <26", steps: [3] }, 
                { name: ". <br> <28", steps: [4] }, 
                { name: ". <br> <30", steps: [5] }, 
                { name: ". <br> <32", steps: [6] }, 
                { name: ". <br> <34", steps: [7] }, 
                { name: ". <br> <36", steps: [8] }, 
                { name: ". <br> <38", steps: [9] }, 
                { name: "Good <br> >40", steps: [10] },
            ],
            scale: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            active: 0 
        },




    ],
    datetime: null
}