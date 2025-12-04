import { motion } from 'framer-motion'

const ConfirmationModal = ({onClearAll, onCancel}) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
        <motion.div 
            className="bg-white w-[90%] mx-auto md:w-[70%] lg:w-[35%] text-center space-y-6 px-4 py-10 rounded-md"
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: -20, opacity:0}}
            transition={{duration: 0.4, ease: "easeInOut"}}
        >
            <p className="font-bold text-2xl">Are you sure you want to delete everything?</p>
            <div className="flex gap-2 justify-center">
            <button 
                className="bg-red-600 text-white px-2 rounded-md hover:bg-red-900 cursor-pointer"
                onClick={onClearAll}
            >Yes</button> 
            <button
                className="bg-blue-600 text-white px-2 rounded-md hover:bg-blue-900 cursor-pointer"
                onClick={onCancel}
            >No</button>
            </div>        
        </motion.div>
    </div>
    
  )
}

export default ConfirmationModal