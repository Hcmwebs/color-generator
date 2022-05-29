import React, { useState } from 'react'
import SingleColor from './Components/SingleColor/SingleColor'
import './index.scss'
import Values from 'values.js'
import Title from './Components/Title/Title'
import Form from './Components/Form/Form'

const App = () => {
	const [color, setColor] = useState('')
	const [error, setError] = useState(false)
	const [list, setList] = useState(new Values('#c7c7c7').all(10))

	const handleChange = (e) => {
		setColor(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		try {
			let colors = new Values(color).all(10)
			setList(colors)
		} catch (error) {
			setError(true)
			console.log(error)
		}
	}
	return (
		<>
			<div className='container'>
				<Title />
				<main className='main'>
					<Form
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						color={color}
						error={error}
					/>
					<article className='colors'>
						{list.map((color, index) => {
							return (
								<SingleColor
									key={index}
									{...color}
									index={index}
									hex={color.hex}
								/>
							)
						})}
					</article>
				</main>
			</div>
		</>
	)
}

export default App
