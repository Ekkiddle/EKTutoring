import SubjectCard from "./SubjectCard";
import TextRevealClient from "./TextRevealClient";

const SUBJECT_LIST = [
    {
        image: "/math.jpg",
        title: "Mathematics",
        text: "Master math concepts from basic arithmetic to advanced calculus with personalized tutoring. Gain the skills and confidence you need to excel in your studies, whether you're tackling algebra, geometry, trigonometry, or university-level mathematics.",
        nav: "/subjects/math",
        delay: 0,
        color: "bg-indigo-400" // Add color class
    },
    {
        image: "/chemistry.jpg",
        title: "Chemistry",
        text: "Unlock the mysteries of chemistry with tailored lessons covering everything from fundamental concepts to advanced organic chemistry. Understand chemical reactions, periodic table trends, and lab techniques to excel in your studies.",
        nav: "/subjects/chemistry",
        delay: 350,
        color: "bg-indigo-300" // Add color class
    },
    {
        image: "/physics.jpg",
        title: "Physics",
        text: "Grasp the principles of physics through customized tutoring sessions. Explore topics like mechanics, electromagnetism, and quantum physics while building the problem-solving skills necessary for academic success.",
        nav: "/subjects/physics",
        delay: 700,
        color: "bg-indigo-200" // Add color class
    },
    {
        image: "/cpsc.jpg",
        title: "Computer Science",
        text: "Dive into the world of computer science with expert guidance in programming languages, data structures, algorithms, and more. Whether you're a beginner or tackling advanced topics, personalized tutoring can help you navigate and master the field.",
        nav: "/subjects/computerscience",
        delay: 1050,
        color: "bg-indigo-300" // Add color class
    },
    {
        image: "/books.jpg",
        title: "Other Subjects",
        text: "Enhance your understanding and performance in science and art subjects with personalized tutoring. Receive tailored guidance to excel in your academic pursuits, whether you're focusing on scientific principles or artistic techniques and history.",
        nav: "/subjects/other",
        delay: 1400,
        color: "bg-indigo-400" // Add color class
    }
];

export default function Subjects() {
    return (
        <div className="bg-indigo-900">
            <TextRevealClient delay={0}>
                <h1 className="inline-block text-6xl text-white bg-indigo-900 w-full px-14 pt-12 font-bold" >Subjects</h1>
                <h2 className="italic text-lg text-white px-14 py-3">Explore a range of subjects with expert guidance tailored to your learning style and goals.</h2>
            </TextRevealClient>
            <div className="w-full flex flex-row items-center justify-between py-5">
                {SUBJECT_LIST.map((subject, idx) => (
                    <TextRevealClient key={idx} delay={subject.delay}>
                        <div className={`flex-1 p-3 ${subject.color}`}>
                            <SubjectCard
                                image={subject.image}
                                imageAlt={subject.title}
                                title={subject.title}
                                text={subject.text}
                                nav={subject.nav}
                            />
                        </div>
                    </TextRevealClient>
                ))}
            </div>
        </div>
    );
}