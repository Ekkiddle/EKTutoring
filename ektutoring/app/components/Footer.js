import ContactForm from "./ContactForm"

export default function Footer() {
    return(
        <div className="flex flex-row bg-gradient-to-b from-indigo-300 to-indigo-100 px-20"
            style={{ boxShadow: 'inset 0 5px 10px rgba(0, 0, 0, 0.15)' }}>
            
            <div className="flex-1 flex flex-row w-full p-5 text-indigo-900">
                <div className="flex-1 w-full text-center">
                    Useful Links
                </div>
                <div className="flex-1">
                    <h1 className=" text-bold text-2xl">Contact</h1>
                    <p>Email: ektutoring@gmail.com</p>
                    <p>Phone: 587-703-7826</p>
                </div>
            </div>
            <div className="flex-1">
                <ContactForm />
            </div>
        </div>
    )
}