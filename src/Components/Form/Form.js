import React from 'react'
import './index.scss'

const Form = ({color,error,handleChange,handleSubmit}) => {
	return (
		<>
			<article className='form-group'>
				<form className='form' onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='#3acabb'
						value={color}
						onChange={handleChange}
						className={`${error ? 'error' : null}`}
					/>
					<button className='btn'>Generate</button>
				</form>
			</article>
		</>
	)
}

export default Form
