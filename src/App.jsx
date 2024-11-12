import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import News from './components/News'
import Testimonal from './components/Testimonal'
import Contact from './components/Contact'
import Shop from './components/Shop'
import { useState } from 'react'
import ContactModal from './components/ContactModal'

const App = () => {
	const [isModalOpen, setModalOpen] = useState(false)

	const openModal = () => {
		setModalOpen(true)

		setTimeout(() => {
			closeModal()
		}, 5000)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	return (
		<div
			style={{
				background:
					'linear-gradient(rgb(72, 138, 249) 0%, rgb(81, 163, 254) 100%)',
			}}
			className='relative'
		>
			<Navbar />
			<main>
				<Hero openModal={openModal} />
				<ContactModal isModalOpen={isModalOpen} closeModal={closeModal} />
				<About />
				<News />
				<Testimonal />
				<Contact />
				<Shop />
			</main>
		</div>
	)
}

export default App
