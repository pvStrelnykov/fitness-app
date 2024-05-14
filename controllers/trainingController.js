import trainings from '../models/TrainingList.js'

class trainingController {
	static renderTrainingPage(req, res) {
		const trainingId = parseInt(req.params.id)
		const selectedTraining = trainings.find(
			training => training.id === trainingId
		)

		res.render('exercises', {
			titlePage: 'Training',
			exercises: selectedTraining.exercises,
			selectedTraining: selectedTraining,
		})
	}

	static renderEditPage(req, res) {
		const trainingId = parseInt(req.params.trainingId)
		const exerciseId = parseInt(req.params.exerciseId)
		const selectedTraining = trainings.find(
			training => training.id === trainingId
		)
		const selectedExercise = selectedTraining.exercises.find(
			exercise => exercise.id === exerciseId
		)

		res.render('edit-exercise', {
			titlePage: 'Edit Exercise',
			exercise: selectedExercise,
			selectedTraining: selectedTraining,
		})
	}

	static editExercise(req, res) {
		const trainingId = parseInt(req.params.trainingId)
		const exerciseId = parseInt(req.params.exerciseId)
		const { name, reps, weight } = req.body
		const selectedTraining = trainings.find(
			training => training.id === trainingId
		)
		const selectedExercise = selectedTraining.exercises.find(
			exercise => exercise.id === exerciseId
		)

		selectedExercise.name = name
		selectedExercise.reps = reps
		selectedExercise.weight = weight

		res.redirect(`/training/${trainingId}`)
	}

	static deleteExercise(req, res) {
		const trainingId = parseInt(req.params.trainingId)
		const exerciseId = parseInt(req.params.exerciseId)

		const selectedTraining = trainings.find(
			training => training.id === trainingId
		)

		const exerciseIndex = selectedTraining.exercises.findIndex(
			exercise => exercise.id === exerciseId
		)

		selectedTraining.exercises.splice(exerciseIndex, 1)

		res.redirect(`/training/${trainingId}`)
	}
}

export default trainingController
