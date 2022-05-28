import React, { useState, useEffect } from 'react'
import './index.scss'

const SingleColor = ({ hex, rgb, index, weight }) => {
	const [alert, setAlert] = useState(false)

	const bgc = rgb.join(',')
	const hexValue = `#${hex}`

	const handleCopyToClipboard = () => {
		setAlert(true)
		navigator.clipboard.writeText(hexValue)
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false)
		}, 3000)

		return () => {
			clearTimeout(timeout)
		}
	}, [alert])
	return (
		<>
			<div
				className={`color ${index > 10 && 'color-light'}`}
				style={{ backgroundColor: `rgb(${bgc})` }}
				onClick={handleCopyToClipboard}>
				<p>{weight}%</p>
				<p>{hexValue}</p>
				{alert && <p>Copied on the clipboard</p>}
			</div>
		</>
	)
}

export default SingleColor
