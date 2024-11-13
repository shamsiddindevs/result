import { X } from 'lucide-react'
// eslint-disable-next-line react/prop-types
const ContactModal = ({ closeModal, isModalOpen }) => {
	return (
		isModalOpen && (
			<div
				onClick={closeModal}
				className='bg-black/50 top-0 left-0 w-full h-full z-50 fixed flex items-center justify-center'
			>
				<div
					onClick={e => e.stopPropagation()}
					className='max-w-2xl min-h-52 bg-white flex items-center justify-center flex-col rounded-2xl py-8 px-5 relative'
				>
					<h1 className='text-xl font-bold text-center'>
						So&apos;rovingiz muvofaqiyatli amalga oshirildi. Sizga tez orada
						aloqaga chiqishadi!
					</h1>
					<X
						onClick={closeModal}
						className='absolute top-2 right-2 p-1 text-white bg-red-800 rounded-full cursor-pointer w-6'
					/>
				</div>
			</div>
		)
	)
}

export default ContactModal
