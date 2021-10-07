export const survey = {
    list: [
        {
            title: "How close are you to being your ideal weight? Scores based on number of kilos of body fat over what you consider to be your ideal weight.",
            labels: [
                { name: ">20", steps: [0] }, 
                { name: "<20", steps: [1] }, 
                { name: "<18", steps: [2] }, 
                { name: "<16", steps: [3] }, 
                { name: "<14", steps: [4] }, 
                { name: "<12", steps: [5] }, 
                { name: "<10", steps: [6] }, 
                { name: "<8", steps: [7] }, 
                { name: "<6", steps: [8] }, 
                { name: "<4", steps: [9] }, 
                { name: "<2", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "Do you eat a decent breakfast or is it just flour and sugar? Dont score more than 6 it its just flour and sugar.",
            labels: [
                { name: "No", steps: [0, 1, 2, 3, 4, 5] }, 
                { name: "Yes", steps: [6, 7, 8, 9, 10] }, 
            ],
            active: 0 
        },
        {
            title: "For your weight, do you eat a high fat diet?",
            labels: [
                { name: "Yes", steps: [0, 1, 2, 3, 4, 5] }, 
                { name: "No", steps: [6, 7, 8, 9, 10] }, 
            ],
            active: 0 
        },
        {
            title: "Do you predominantly form the top of the Hourglass: - plenty of vegetables and fruit mixed with adequate protein and fat?",
            labels: [
                { name: "No", steps: [0, 1, 2, 3, 4, 5] }, 
                { name: "Yes", steps: [6, 7, 8, 9, 10] },
            ],
            active: 0 
        },
        {
            title: "For your weight, do you eat a high flour and sugar diet?",
            labels: [
                { name: "Yes", steps: [0, 1, 2, 3, 4, 5] }, 
                { name: "No", steps: [6, 7, 8, 9, 10] }, 
            ],
            active: 0 
        },
        {
            title: "How many glasses of plain, unadulterated water (or green tea) do you drink each day?",
            labels: [
                { name: ".", steps: [0] }, 
                { name: "1", steps: [1] }, 
                { name: "2", steps: [2, 3] }, 
                { name: "3", steps: [4, 5] }, 
                { name: "4", steps: [6, 7] }, 
                { name: "5", steps: [8, 9] }, 
                { name: ">6", steps: [10] }, 
            ],
            active: 0 
        },
        {
            title: "When you look at your health, do you believe you're getting enough of the essential vitamins, minerals, fatty acids and glycoproteins?",
            labels: [
                { name: "No", steps: [0, 1, 2, 3, 4, 5] }, 
                { name: "Yes", steps: [6, 7, 8, 9, 10] },
            ],
            active: 0 
        },
        {
            title: "Do you eat too much?",
            labels: [
                { name: "Yes", steps: [0, 1, 2, 3, 4, 5] }, 
                { name: "No", steps: [6, 7, 8, 9, 10] }, 
            ],
            active: 0 
        },
        {
            title: "Are you ruled by your addictions and cravings to food which are not good for you?",
            labels: [
                { name: "Yes", steps: [0, 1, 2, 3, 4, 5] }, 
                { name: "No", steps: [6, 7, 8, 9, 10] }, 
            ],
            active: 0 
        },
        {
            title: "Does the back end of your system work like a charm? - score low if you have irritable bowel or diarrhoea, are constipated, and/or have piles.",
            labels: [
                { name: "No", steps: [0, 1, 2, 3, 4, 5] }, 
                { name: "Like a charm", steps: [6, 7, 8, 9, 10] },
            ],
            active: 0 
        },


    ],
    datetime: null
}