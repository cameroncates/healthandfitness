export const survey = {
    list: [
     
        {
            title:
          "Are you keeping yourself fit and healthy to the best of your ability?",
            labels: [
                { name: "No", steps: [0, 1, 2, 3, 4, 5] }, 
                { name: "Yes", steps: [6, 7, 8, 9, 10] }, 
            ],
            active: 0 
        },
        {
            title: "The body is an ecosystem. What was your score on the Health Climate Survey?",
            labels: [
                { name: ">120", steps: [0] }, 
                { name: "110", steps: [1] }, 
                { name: "90", steps: [2] }, 
                { name: "80", steps: [3] }, 
                { name: "70", steps: [4] }, 
                { name: "60", steps: [5] }, 
                { name: "50", steps: [6] }, 
                { name: "40", steps: [7] }, 
                { name: "30", steps: [8] }, 
                { name: "20", steps: [9] }, 
                { name: "<20", steps: [10] } 
            ],
            active: 0 
        },
        {
            title: "<strong>Fatness. How close are you to being your ideal weight? Scores based on the number of kilos of body fat over what you consider to be your ideal weight.</strong>",
            labels: [
                { name: ">Kg over ideal wt <br> %fat men <br> %fat women", steps: [null, null, null]}, 
                { name: "<25 <br> <35 <br> <45", steps: [3]}, 
                { name: "<20 <br> <30 <br> <40", steps: [4]}, 
                { name: "<15 <br> <28 <br> <38", steps: [5]}, 
                { name: "<10 <br> <26 <br> <36", steps: [6]}, 
                { name: "<8 <br> <24 <br> <34", steps: [7]}, 
                { name: "<6 <br> <22 <br> <32", steps: [8]}, 
                { name: "<4 <br> <20 <br> <30", steps: [9]}, 
                { name: "<2 <br> <18 <br> <28", steps: [10]}, 
            ],
            active: 0 
        },
        {
            title: "<strong>How many full squats can you do in 90 seconds. Bottom must get midway between knees and ankles. Use a heel raise if you need to.</strong>",
            labels: [
                { name: "<7", steps: [0] }, 
                { name: "7", steps: [4]}, 
                { name: "10", steps: [5]}, 
                { name: "15", steps: [6]}, 
                { name: "20", steps: [7]}, 
                { name: "23", steps: [8]}, 
                { name: "25", steps: [9]}, 
                { name: "30", steps: [10]}
            ],
            active: 0 
        },
        {
            title: "Abdominal strength - sit-ups",
            labels: [
                { name: "<7", steps: [0] }, 
                { name: "7", steps: [4]}, 
                { name: "10", steps: [5]}, 
                { name: "15", steps: [6]}, 
                { name: "20", steps: [7]}, 
                { name: "23", steps: [8]}, 
                { name: "25", steps: [9]}, 
                { name: "30", steps: [10]}
            ],
            active: 0 
        },
        {
            title: "Upper body strength - press-ups. Number in 90 seconds. Men on toes, women on front of thighs",
            labels: [
                { name: "<7", steps: [0] }, 
                { name: "7", steps: [4]}, 
                { name: "10", steps: [5]}, 
                { name: "15", steps: [6]}, 
                { name: "20", steps: [7]}, 
                { name: "23", steps: [8]}, 
                { name: "25", steps: [9]}, 
                { name: "30", steps: [10]}
            ],
            active: 0 
        },
        {
            title: "<strong>Flexibility - sit and reachIn a sitting position, with feet outstretched in front of you, see how far down past your toes you can reach with your fingers. Keep you knees straight.</strong>",
            labels: [
                { name: "Can't touch", steps: [0, null, null] }, 
                { name: "Finger", steps: [4, 5, 6]}, 
                { name: "Palm", steps: [7,8]}, 
                { name: "Wrist", steps: [9, 10]}, 
            ],
            active: 0 
        },
        {
            title: "Ability to sit up straightWith legs crossed and hands clasped behind your back, see if you can sit up straight. Falling backwards on one or both sides scores 0. If you can only just sit up without falling over score 5.",
            labels: [
                { name: "Fall Over", steps: [0, null, null, null, null] }, 
                { name: "Barely", steps: [5, 6] }, 
                { name: "Just", steps: [7, 8, 9] },
                { name: "Perfect", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "Aerobic fitness - 5 minute, 20m lap run.",
            labels: [
                { name: "<22", steps: [0]}, 
                { name: "22", steps: [1]}, 
                { name: "24", steps: [2]}, 
                { name: "26", steps: [3]}, 
                { name: "28", steps: [4]}, 
                { name: "30", steps: [5]}, 
                { name: "32", steps: [6]}, 
                { name: "34", steps: [7]}, 
                { name: "36", steps: [8]}, 
                { name: "38", steps: [9]}, 
                { name: "40", steps: [10]}, 
            ],
            active: 0 
        },
        {
            title: "Aerobic Training sessions per week - of at least 30 minutes with heart rate over 120.",
            labels: [
                { name: ".", steps: [0, 1]}, 
                { name: "1", steps: [2, 3]}, 
                { name: "2", steps: [4, 5]}, 
                { name: "3", steps: [6, 7]}, 
                { name: "4", steps: [8, 9]}, 
                { name: "5", steps: [10]}, 
            ],
            active: 0 
        },
    ],
    datetime: null
}
