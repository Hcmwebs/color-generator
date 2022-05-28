import React, { useState } from 'react'
import SingleColor from './Components/SingleColor/SingleColor'
import './index.scss'
import Values from 'values.js'

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
				<header className='header'>
					<div className='title'>
						<h1>Color Generator</h1>
						<div className='underline'></div>
					</div>
				</header>
				<main className='main'>
					<article className='form-group'>
						<form className='form' onSubmit={handleSubmit}>
							<input
								type='text'
								placeholder='#c7c7c7'
								value={color}
								onChange={handleChange}
								className={`${error ? 'error' : null}`}
							/>
							<button className='btn'>Generate</button>
						</form>
					</article>
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
