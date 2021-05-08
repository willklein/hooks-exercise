import React, { useEffect, useRef, useState } from "react"

import "./App.css"

const useToggleModal = (modalNode) => {
	const [state, setState] = useState({ modalIsOpen: false })

	const openModal = () => setState({ modalIsOpen: true })

	const closeModal = () => setState({ modalIsOpen: false })

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!modalNode.current?.contains(event.target)) {
				closeModal()
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [modalNode])

	return [state.modalIsOpen, openModal, closeModal]
}

const App = () => {
	const modal = useRef()

	const [modalIsOpen, openModal, closeModal] = useToggleModal(modal)

	return (
		<div>
			<button onClick={openModal}>Open</button>

			<div
				ref={modal}
				style={{
					display: modalIsOpen ? "block" : "none",
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
