export const survey = {
    list: [
        {
            title: `                        
                20 metre run - number of 20m laps in 5 minutes. This is the classic test of aerobic fitness, superseding the 'beep test'.
                <br><br>
                One foot must go beyond the line at the end of each lap.
                <br><br>
                It may take you several attempts to work out the best speed to start off with. You can walk, shuffle, jog or run. If you're running and you run out of puff you can slow down to a walk.
                <br><br>
                If you're in very poor metabolic health, start off with a slow walk and over the weeks and months gradually pick up the pace. Consult your physician if you feel you may be in very poor cardio-vascular health and request a 'proper' cardio-vascular fitness test...
                <br><br>
            `,
            labels: [
                { name: "Men <br> Women", steps: [null, null]}, 
                { name: "<22 <br> <20", steps: [0] }, 
                { name: "22 <br> 20", steps: [1] }, 
                { name: "26<br> 24", steps: [2] }, 
                { name: "32<br> 30", steps: [3] }, 
                { name: "36<br> 34", steps: [4] }, 
                { name: "38<br> 36", steps: [5] }, 
                { name: "40<br> 38", steps: [6] }, 
                { name: "45<br> 43", steps: [7] }, 
                { name: "50<br> 46", steps: [8] }, 
                { name: "53<br> 49", steps: [9] }, 
                { name: "55<br> 52", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: `               
                Situps - consecutive number of sit-ups until exhaustion - feet held, hands clasping opposite shoulders, coming up so elbows touch the knees, upper back (not head) 'hitting' the ground.
                <br> <br>
                With feet held, the test becomes a front of body muscle test, Leg muscles, hip flexors and abdominal muscles are all involved in the setup process.
                <br><br>
            `,
            labels: [
                { name: "<5", steps: [0]}, 
                { name: "<10", steps: [1]}, 
                { name: "10", steps: [2]}, 
                { name: "15", steps: [3]}, 
                { name: "20", steps: [4]}, 
                { name: "25", steps: [5]}, 
                { name: "30", steps: [6]}, 
                { name: "40", steps: [7]}, 
                { name: "50", steps: [8]}, 
                { name: "60", steps: [9]}, 
                { name: "70", steps: [10]}, 
            ],
            active: 0 
        },
        {
            title: `               
                Pressups - consecutive number of press ups until exhaustion - men on toes, women on knees.
                <br><br>
                Women make sure that your knees, bottom and shoulders are in a straight line.                        
                <br><br>
            `,
            labels: [
                { name: "<5", steps: [0]}, 
                { name: "<10", steps: [1]}, 
                { name: "10", steps: [2]}, 
                { name: "15", steps: [3]}, 
                { name: "20", steps: [4]}, 
                { name: "25", steps: [5]}, 
                { name: "30", steps: [6]}, 
                { name: "40", steps: [7]}, 
                { name: "50", steps: [8]}, 
                { name: "60", steps: [9]}, 
                { name: "70", steps: [10]}, 
            ],
            active: 0 
        },
        {
            title: `               
                Squats - consecutive number of squats until exhaustion. Bottom must go down to mid-way between knees and ankles. Most people will need to use a heel raise to successfully complete the test.
                <br><br>
                The classic test of leg strength                        
                <br><br>
            `,
            labels: [
                { name: "<5", steps: [0]}, 
                { name: "<10", steps: [1]}, 
                { name: "10", steps: [2]}, 
                { name: "15", steps: [3]}, 
                { name: "20", steps: [4]}, 
                { name: "25", steps: [5]}, 
                { name: "30", steps: [6]}, 
                { name: "40", steps: [7]}, 
                { name: "50", steps: [8]}, 
                { name: "60", steps: [9]}, 
                { name: "70", steps: [10]}, 
            ],
            active: 0 
        },
        {
            title: `        
                Arm hang (Second) - hanging from a bar until exhaustion.
                <br><br>
                Hang with palms facing away from you.
                <br><br>
                A large proportion of people are unable to support their own weight at all so be careful and be ready to land safely on your feet if your hands fail to support you.
                <br><br>
                The classic test of hand strength. No need of a grip strength machine.. just you knowing how long you can support your own weight with your hands.                            
                <br><br>
            `,
            labels: [
                { name: "Men <br> Women", steps: [null, null]}, 
                { name: ">35 <br> >45", steps: [0] }, 
                { name: "<35 <br> <45", steps: [1] }, 
                { name: "<30<br> <40", steps: [2] },  
                { name: "<28<br> <38", steps: [3] }, 
                { name: "<26<br> <36", steps: [4] }, 
                { name: "<24<br> <34", steps: [5] }, 
                { name: "<22<br> <32", steps: [6] }, 
                { name: "<20<br> <30", steps: [7] }, 
                { name: "<18<br> <28", steps: [8] }, 
                { name: "<16<br> <26", steps: [9] }, 
                { name: "<14<br> <24", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: `        
                Percent body fat (%)
                <br> <br>
                The gold standard for body composition is percent body fat. Theoretically, there is no need to measure how fat people are because generally speaking the fitter they are the closer they will be to their ideal weight. But having said that, its a useful metric to include in a fitness assessment.                            
                <br><br>
            `,
            labels: [
                { name: "Men <br> Women", steps: [null, null]}, 
                { name: ">35 <br> >45", steps: [0] }, 
                { name: "<35 <br> <45", steps: [1] }, 
                { name: "<30<br> <40", steps: [2] },  
                { name: "<28<br> <38", steps: [3] }, 
                { name: "<26<br> <36", steps: [4] }, 
                { name: "<24<br> <34", steps: [5] }, 
                { name: "<22<br> <32", steps: [6] }, 
                { name: "<20<br> <30", steps: [7] }, 
                { name: "<18<br> <28", steps: [8] }, 
                { name: "<16<br> <26", steps: [9] }, 
                { name: "<14<br> <24", steps: [10] },
            ],
            active: 0 
        },
        {
            title: `        
                SUPPLEMENTARY TESTS
                <br><br>
                Flexibility
                <br><br>
                The third major fact of fitness is flexibility. Tight muscles move bones out of alignment. Thats the bad news. The good news is that once you have a flexibility training program muscles can move bones back into alignment again; poor function is resorted to good. The body becomes pain free
                <br><br>
                Whilst the flexibility tests don't lend themselves to the Universal Fitness Test scoring system, we have included two supplementary tests of flexibility to round out the test battery.
                <br><br>
                Flexibility - sit and reach - test of hamstring flexibility
                <br><br>
                In a sitting position, with feet outstretched in front of you, see how far down past your toes you can reach with your fingers. Keep your knees straight.                            
                <br><br>
            `,
            labels: [
                { name: "Can't touch", steps: [0, null, null, null] }, 
                { name: "Fingers", steps: [4, 5, 6] }, 
                { name: "Palm", steps: [7, 8, 9] }, 
                { name: "Wrist", steps: [10]}, 
            ],
            active: 0 
        },
        {
            title: `        
                Ability to sit up straight - test of buttock flexibility
                <br><br>
                With legs crossed and hands clasped behind your back, see if you can sit up straight. Falling backwards on one of both sides scores 0. If you can only just sit up without falling over score 5.                            
                <br><br>
            `,
            labels: [
                { name: "Fall Over", steps: [0, null, null, null, null] }, 
                { name: "Barely", steps: [5, 6] }, 
                { name: "Just", steps: [7, 8, 9] }, 
                { name: "Perfect", steps: [10]}, 
            ],
            active: 0 
        },


    ],
    datetime: null
}