import ContactForm from "./ContactForm"
import { MdOutlineMailOutline, MdPhone } from "react-icons/md";


export default function Footer() {
    return(
        <div className="flex flex-col bg-gradient-to-b from-indigo-400 to-indigo-100 pb-10 pt-20 px-20"
            style={{ boxShadow: 'inset 0 5px 20px rgba(0, 0, 0, 0.25)' }}>
            <div className="w-full h-1 rounded-lg shadow-md bg-indigo-900 mb-4"></div>
            <div className="flex flex-row"
                >
                
                <div className="flex-1 flex flex-row w-full p-5 text-indigo-900 space-x-5">
                    <div className="flex-1 w-full">
                        <h1 className="text-2xl font-bold mb-4">Useful Links</h1>
                    </div>
                    <div className="flex-1">
                        <h1 className="font-bold text-2xl mb-4">Contact</h1>
                        <h2 className="font-bold">Email</h2>
                        <div className="flex flex-row items-center my-3">
                            <MdOutlineMailOutline className="text-2xl mx-3"/>
                            <a href="mailto:ektutoring@gmail.com" className="text-sm hover:underline">ektutoring@gmail.com</a>
                        </div>
                        <h2 className="font-bold">Phone</h2>
                        <div className="flex flex-row items-center my-3">
                            <MdPhone className="text-2xl mx-3"/>
                            <a href="tel:+15877037826" className="text-sm hover:underline">587-703-7826</a>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}