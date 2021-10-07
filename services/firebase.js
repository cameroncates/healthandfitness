import firebase from 'firebase'
import "firebase/auth"
import "firebase/storage"

const config = {
    // apiKey: "AIzaSyD0F-iGG3cZUtC9cPEqk7ollgDRlbS6EyU",
    // authDomain: "healthandfitness-30a22.firebaseapp.com",        
    // projectId: "healthandfitness-30a22",
    // storageBucket: "healthandfitness-30a22.appspot.com",
    // messagingSenderId: "656635818871",
    // appId: "1:656635818871:web:e660e2a41c40d664ef2772",
    // measurementId: "G-TY027EBF6Y"
  
    apiKey: "AIzaSyBEq2ZneWrjlFHGF9dexAA6A5jtsbc6AqQ",
    authDomain: "health-and-fitness-1efff.firebaseapp.com",
    projectId: "health-and-fitness-1efff",
    storageBucket: "health-and-fitness-1efff.appspot.com",
    messagingSenderId: "854851350497",
    appId: "1:854851350497:web:86bb289667e4a06e7aeca0",
    measurementId: "G-MZ0QYBWSXM"  
};
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const healthClimateSurveysCollection = db.collection('healthClimateSurveys')
const fitnessProfileSurveysCollection = db.collection('fitnessProfileSurveys')
const universalFitnessSurveysCollection = db.collection('universalFitnessSurveys')
const specificJointSurveysCollection = db.collection('specificJointSurveys')
const musculoskeletalSurveysCollection = db.collection('musculoskeletalSurveys')
const metabolicHealthProfileSurveysCollection = db.collection('metabolicHealthProfileSurveys')
const bloodGlucoseSurveysCollection = db.collection('bloodGlucoseSurveys')
const cholesterolLevelSurveysCollection = db.collection('cholesterolLevelSurveys')
const bloodPressureSurveysCollection = db.collection('bloodPressureSurveys')

const dietProfileSurveysCollection = db.collection('dietProfileSurveys')
const chemicalIntakeProfileSurveysCollection = db.collection('chemicalIntakeProfileSurveys')
const stressRiskProfileSurveysCollection = db.collection('stressRiskProfileSurveys')
const careerSatisfactionProfileSurveysCollection = db.collection('careerSatisfactionProfileSurveys')
const meaningAndPurposeProfileSurveysCollection = db.collection('meaningAndPurposeProfileSurveys')
const familyLifeProfileSurveysCollection = db.collection('familyLifeProfileSurveys')
const financeProfileSurveysCollection = db.collection('financeProfileSurveys')
const peopleSurveysCollection = db.collection('peopleSurveys')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  healthClimateSurveysCollection,
  fitnessProfileSurveysCollection,
  universalFitnessSurveysCollection,
  specificJointSurveysCollection,
  musculoskeletalSurveysCollection,
  metabolicHealthProfileSurveysCollection,
  bloodGlucoseSurveysCollection,
  cholesterolLevelSurveysCollection,
  bloodPressureSurveysCollection,
  dietProfileSurveysCollection,
  chemicalIntakeProfileSurveysCollection,
  stressRiskProfileSurveysCollection,
  careerSatisfactionProfileSurveysCollection,
  meaningAndPurposeProfileSurveysCollection,
  familyLifeProfileSurveysCollection,
  financeProfileSurveysCollection,
  peopleSurveysCollection,
  
}