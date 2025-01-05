export default{
    firstName:'James',
    lastName:'Carter',
    jobTitle:'full stack developer',
    address:'525 N tryon Street, NC 28117',
    phone:'+91 8666968115',
    email:'exmaple@gmail.com',
    linkedin:"https://www.linkedin.com/in/rajat-parihar-681097306",
    github:"https://github.com/devXprite/resumave/blob/main/components/Resume/html/ListItem.js",
    portfolio:"",
    themeColor:"#FF1744",
    summary:`Versatile Full Stack Developer with hands-on experience building responsive, high-performance web applications. Proficient in React.js,
Tailwind CSS, Node.js, Express, and MongoDB, with expertise in crafting seamless user experiences and scalable back-end solutions.
Skilled in leveraging BaaS platforms for efficient development and deployment. A quick learner who thrives in fast-paced environments,
eager to tackle challenges and deliver innovative solutions using cutting-edge technologies.`,
    experience:[
        {
            id:1,
            title:'Full Stack Developer',
            companyName:'Amazon',
            location:'New York',
            
            startDate:'Jan 2021',
            endDate:'',
            currentlyWorking:true,
            workSummary:' Designed, developed, and maintained full-stack applications using React and Node.js.\n'+
            '• Implemented responsive user interfaces with React, ensuring seamless user experiences across various devices and browsers.\n'+
            '• Maintaining the React Native in-house organization application.\n'+
            '• CreatedRESTfulAPIs withNode.js and Express,facilitating data communicationbetween the front-end'+
            'and back-end systems.\n'
        },
        {
            id:2,
            title:'Frontend Developer',
            companyName:'Google',
            city:'Charlotte',
            state:'NC',
            startDate:'May 2019',
            endDate:'Jan 2021',
            currentlyWorking:false,
            workSummary:' Designed, developed, and maintained full-stack applications using React and Node.js. \n'+
            '• Implemented responsive user interfaces with React, ensuring seamless user experiences across various devices and browsers. \n'+
            '• Maintaining the React Native in-house organization application. \n'+
            '• CreatedRESTfulAPIs withNode.js and Express,facilitating data communicationbetween the front-end and back-end systems.\n'
        }
    ],
    education:[
        {
            id:1,
            universityName:'Ramdeobaba College Of Engineering And Management ',
            startDate:'August 2023',
            endDate:'May 2027',
            degree:'Bachelor Of Computer Science',
          grade:'9.66',
            location:"Nagpur,India"
        },
        {
            id:2,
            universityName:'Ramdeobaba College Of Engineering And Management ',
            startDate:'August 2023',
            endDate:'May 2027',
            degree:'Bachelor Of Computer Science',
          grade:'9.66',
            location:"Nagpur,India"
        }
    ],
    projects:[
        {
            id:1,
            projectName:'RBU AI Interviewer',
            projectDescription:` Developed an AI-powered interviewer platform that simulates real-life technical and behavioral interviews. The platform allows
users to set up interview sessions by specifying the job position, tech stack, and experience level. It conducts interactive audio-based
interviews, evaluates responses in real time, and provides comprehensive feedback, including skill assessments and actionable
improvement suggestions. Designed to help candidates prepare effectively for their next career opportunity`,
            projectLink:'https://rbuaiinterveiw-xl88.vercel.app/',
        }
    ],
    skills:"JavaScript,ReactJS,Tailwind Css,REST APIs,MONGODB,Supabase,NodeJs,ExpressJs,NextJS(Beginner)"
}