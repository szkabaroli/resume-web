import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyD8o_VkuEZ5TotOacMv7AZBPUYRFTKPHTo',
	authDomain: 'resume-86eff.firebaseapp.com',
	databaseURL: 'https://resume-86eff.firebaseio.com',
	projectId: 'resume-86eff',
	storageBucket: 'resume-86eff.appspot.com',
	messagingSenderId: '602358459469',
	appId: '1:602358459469:web:0645f2d354c2740f7bc004',
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const textsRef = db.collection("resume-texts")
const timelineRef = db.collection("experience-timeline")
const skillsRef = db.collection("skills").doc('3gkoQI1JLNFHkU9AlteY')
const schoolsRef = db.collection("schools")

const languagesRef = skillsRef.collection('languages')
const frameworksRef = skillsRef.collection('frameworks')
const technologiesRef = skillsRef.collection('technologies')



export const getTexts = async () => {
	const data = {}
	try {
		const docs = await textsRef.get()
		docs.forEach(doc => {
			data[doc.id] = doc.data()
		})
	} catch (error) {
		alert("Error getting documents:", error)
	}

	return data
}

export const getExperienceTimeline = async () => {
	const data = {}

	try {
		const docs = await timelineRef.get()
		docs.forEach(doc => {
			data[doc.id] = doc.data()
		})
	} catch (error) {
		alert("Error getting documents:", error)
	}

	return data
}

export const getSkills = async () => {
	const data = {
		languages: [],
		frameworks: [],
		technologies: []
	}

	try {
		const languagesDocs = await languagesRef.get()
		languagesDocs.forEach(doc => {
			data.languages[doc.id] = doc.data()
		})

		const frameworksDocs = await frameworksRef.get()
		frameworksDocs.forEach(doc => {
			data.frameworks[doc.id] = doc.data()
		})

		const technologiesDocs = await technologiesRef.get()
		technologiesDocs.forEach(doc => {
			data.technologies[doc.id] = doc.data()
		})
	} catch (error) {
		alert("Error getting documents:", error)
	}

	return data
}

export const getSchools = async () => {
	const data = {}

	try {
		const docs = await schoolsRef.get()
		docs.forEach(doc => {
			data[doc.id] = doc.data()
		})
	} catch (error) {
		alert("Error getting documents:", error)
	}

	return data
}