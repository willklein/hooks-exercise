import React, { useEffect, useRef, useState } from "react"

import "./App.css"

const App = () => {
	const [state, setState] = useState({ modalIsOpen: false })

	const openModal = () => setState({ modalIsOpen: true })

	const closeModal = () => setState({ modalIsOpen: false })

	const modal = useRef()

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!modal.current?.contains(event.target)) {
				closeModal()
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [modal])

	return (
		<div>
			<button onClick={openModal}>Open</button>

			<div
				ref={modal}
				style={{
					display: state.modalIsOpen ? "block" : "none",
					border: "solid",
					padding: "5px",
					margin: "5px",
				}}
			>
				<h2>Hello</h2>
				<div>I am a modal</div>
				<button onClick={closeModal}>Close</button>
			</div>
		</div>
	)
}

export default App
