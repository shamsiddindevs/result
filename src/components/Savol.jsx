import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const Savol = () => {
	const [isActive, setIsActive] = useState(false)
	const [isActive2, setIsActive2] = useState(false)
	return (
		<section
			id='savol'
			className='pt-[45px] pb-[90px]'
			style={{ backgroundColor: 'rgb(141, 213, 79)' }}
		>
			<div className='w-full max-w-[1200px] mx-auto px-5'>
				<div className='flex flex-col items-center gap-2 pb-[45px] text-white'>
					<h2 className='text-3xl md:text-3xl lg:text-4xl font-semibold md:font-bold mb-3'>
						Agar biror narsani o'tkazib yuborgan bo’lsangiz
					</h2>
					<p className='text-[18px] leading-[22px] font-semibold'>
						Bu yerda siz bizning treningimiz haqida tez-tez beriladigan
						savollarga javob topasiz
					</p>
				</div>
				<div className='grid grid-cols-1 gap-[15px] mx-auto max-w-780px'>
					<div
						className={`flex flex-col w-full h-full ${
							!isActive && 'overflow-hidden max-h-[75px]'
						} rounded-[10px] py-[25px] pr-[10px] pl-5 `}
						style={{
							backgroundColor: 'rgb(125, 189, 70)',
							transition: '350ms ease-out',
						}}
					>
						<div className='flex justify-between items-center h-full '>
							<h4 className='text-white text-[18px] font-semibold inline-block'>
								Kurs necha oy davom etadi?
							</h4>
							<div
								className={`  w-10 h-10 cursor-pointer text-[24px] flex items-center justify-center ${
									isActive && 'rotate-[45deg] rounded-full bg-white '
								}`}
								style={{
									color: isActive ? 'rgb(125, 189, 70)' : '#fff',
									transition: '0.2s ease-in-out',
								}}
								onClick={() => setIsActive(!isActive)}
							>
								<FaPlus width={24} height={24} />
							</div>
						</div>
						<div className='w-full mt-[25px] text-white text-[18px]'>
							Har bir kurs 3 oy davom etadi.
							<br />
							Beginner - 3 oy
							<br />
							Elementary - 3 oy
							<br />
							<br />
						</div>
					</div>
					<div
						className={`flex flex-col w-full h-full ${
							!isActive2 && 'overflow-hidden max-h-[75px]'
						} rounded-[10px] py-[25px] pr-[10px] pl-5 `}
						style={{
							backgroundColor: 'rgb(125, 189, 70)',
							transition: '350ms ease-out',
						}}
					>
						<div className='flex justify-between items-center h-full '>
							<h4 className='text-white text-[18px] font-semibold inline-block'>
								Kurs necha oy davom etadi?
							</h4>
							<div
								className={`  w-10 h-10 cursor-pointer text-[24px] flex items-center justify-center ${
									isActive2 && 'rotate-[45deg] rounded-full bg-white '
								}`}
								style={{
									color: isActive2 ? 'rgb(125, 189, 70)' : '#fff',
									transition: '0.2s ease-in-out',
								}}
								onClick={() => setIsActive2(!isActive2)}
							>
								<FaPlus width={24} height={24} />
							</div>
						</div>
						<div className='w-full mt-[25px] text-white text-[18px]'>
							Har bir kurs 3 oy davom etadi.
							<br />
							Beginner - 3 oy
							<br />
							Elementary - 3 oy
							<br />
							<br />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Savol
