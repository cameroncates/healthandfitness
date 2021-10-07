export const survey = {
    list: [

        {
            title: "<strong>Current Condition</strong> <br> How would you rate the current condition of your musculoskeletal system?",
            labels: [
                { name: "Dreadful", steps: [0, 1, 2,3 ,4, 5] }, 
                { name: "Excellent", steps: [6, 7, 8, 9, 10] }, 
            ],
            active: 0 
        },
        {
            title: `
                <strong>Body Composition.</strong>
                <br>
                How close are you to your <strong>ideal weight</strong>? Scores based on kilos over your ideal weight.                        
            `,
            labels: [
                { name: ">20", steps: [0] }, 
                { name: "20", steps: [1] }, 
                { name: "18", steps: [2] }, 
                { name: "16", steps: [3] }, 
                { name: "14", steps: [4] }, 
                { name: "12", steps: [5] }, 
                { name: "10", steps: [6] }, 
                { name: "8", steps: [7] }, 
                { name: "6", steps: [8] }, 
                { name: "4", steps: [9] }, 
                { name: "2kg", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: `
                <strong>Lower body strength - squat</strong>
                <br>
                How many full squats can you do in 60 seconds? Bottom must get at least half way between knees and your heels, use a heal raise if you need to.                        
            `,
            labels: [
                { name: ">5", steps: [0] }, 
                { name: "5", steps: [1] }, 
                { name: "8", steps: [2] }, 
                { name: "10", steps: [3] }, 
                { name: "13", steps: [4] }, 
                { name: "15", steps: [5] }, 
                { name: "18", steps: [6] }, 
                { name: "20", steps: [7] }, 
                { name: "23", steps: [8] }, 
                { name: "15", steps: [9] }, 
                { name: "30", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: `
                <strong>Lower body strength</strong>
                <br>
                sit-ups with feet held in 60 seconds
            `,
            labels: [
                { name: ">5", steps: [0] }, 
                { name: "5", steps: [1] }, 
                { name: "8", steps: [2] }, 
                { name: "10", steps: [3] }, 
                { name: "13", steps: [4] }, 
                { name: "15", steps: [5] }, 
                { name: "18", steps: [6] }, 
                { name: "20", steps: [7] }, 
                { name: "23", steps: [8] }, 
                { name: "15", steps: [9] }, 
                { name: "30", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: `
                <strong>Upper body strength</strong>
                <br>
                press-ups in 60 seconds, Men on toes, women on front of thighs with knees, bottom and shoulders in a straight line.
            `,
            labels: [
                { name: ">5", steps: [0] }, 
                { name: "5", steps: [1] }, 
                { name: "8", steps: [2] }, 
                { name: "10", steps: [3] }, 
                { name: "13", steps: [4] }, 
                { name: "15", steps: [5] }, 
                { name: "18", steps: [6] }, 
                { name: "20", steps: [7] }, 
                { name: "23", steps: [8] }, 
                { name: "15", steps: [9] }, 
                { name: "30", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: `
               <strong>Sit and reach - hamstring flexibility</strong>
                <br>
                Sitting on the floor, with feet outstretched in front of you, see how far down past your toes you can reach with your fingers. Keep your knees straight.
            `,
            labels: [
                { name: "Can't touch", steps: [0, null, null, null] }, 
                { name: "Fingers", steps: [4, 5, 6] }, 
                { name: "Palm", steps: [7,8,9]}, 
                { name: "Wrist", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: `
                <strong>Ability to sit up straight with legs crossed - buttock flexibility</strong>
                <br>
                With legs crossed and hands clasped behind your back, see if you can sit up straight. Just being able to sit up with hands clasped scores 7/10. Sitting up exceptionally straight with a hollow in your lower back scores 10/10. Falling backwards on one or both sides scores 0.
            `,
            labels: [
                { name: "Fall over", steps: [0, null, null, null] }, 
                { name: "Barely", steps: [4, 5, 6] }, 
                { name: "Just", steps: [7,8,9]}, 
                { name: "Perfect", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: `
                <strong>Shoulder function</strong>
                <br>
                - wall test Stand with your back to the wall. Place your hands in the surrender position with the Back of your forearms, wrists and hands flat back on the wall. Score 10 if you can do it with ease. 7/10 is just getting the ‘flat position’. Score lower if you can’t do it at all.
            `,
            labels: [
                { name: ".", steps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
            ],
            active: 0 
        },
        {
            title: `
                <strong>Strength training behaviour</strong>
                <br>
                Do you have a regular and systematic strength training program either at home or at the gym. Sessions per week.
            `,
            labels: [
                { name: ".", steps: [0, 1, 2] }, 
                { name: "1", steps: [3, 4, 5] }, 
                { name: "2", steps: [6, 7, 8, 9] }, 
                { name: "3", steps: [10] }, 
            ],
            scale: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            active: 0 
        },
        {
            title: `
                <strong>Flexibility training behaviour</strong>
                <br>
                Do you have a regular and systematic flexibility training program either at home or at the gym. It may include yoga, body balance, Pilates ... Sessions per week.
            `,
            labels: [
                { name: ".", steps: [0, 1, 2] }, 
                { name: "1", steps: [3, 4, 5] }, 
                { name: "2", steps: [6, 7, 8, 9] }, 
                { name: "3", steps: [10] },  
            ],
            scale: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            active: 0 
        },
    ],
    datetime: null
}