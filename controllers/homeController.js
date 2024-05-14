import Training from '../models/Training.js'
import trainings from '../models/TrainingList.js'

class homeController {
	static renderHomePage(req, res) {
		res.render('home', {
			titlePage: 'Home',
			trainings,
		})
	}

	static renderAddPage(req, res) {
		res.render('add-workout', { titlePage: 'Add training' })
	}

	static createTraining(req, res) {
		const { title, intensity } = req.body
		const newTraining = new Training(trainings.length + 1, title, intensity, [
			{ id: 1, name: 'Exercise 1', reps: 10, weight: 20 },
			{ id: 2, name: 'Exercise 2', reps: 12, weight: 25 },
			{ id: 3, name: 'Exercise 3', reps: 10, weight: 20 },
			{ id: 4, name: 'Exercise 4', reps: 12, weight: 25 },
		])

		trainings.push(newTraining)

		res.redirect('/')
	}

	static renderEditPage(req, res) {
		const trainingId = parseInt(req.params.id)

		const training = trainings.find(training => training.id === trainingId)

		if (!training) {
			return res.status(404).send('Training not found')
		}

		res.render('edit-workout', { titlePage: 'Edit training', training })
	}

	static editTraining(req, res) {
		const trainingId = parseInt(req.params.id)
		const { title, intensity } = req.body

		const index = trainings.findIndex(training => training.id === trainingId)

		if (index !== -1) {
			trainings[index].name = title
			trainings[index].intensity = intensity

			res.redirect('/')
		} else {
			res.status(404).send('Training not found')
		}
	}

	static deleteTraining(req, res) {
		const id = parseInt(req.params.id)
		const index = trainings.findIndex(training => training.id === id)

		trainings.splice(index, 1)

		res.redirect('/')
	}
}

export default homeController
