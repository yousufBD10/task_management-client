import React, { useEffect, useState } from 'react';

const OurService = () => {
    // service data api start
    const serviceCollection = [
        {
            name: "Project",
            services: [
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/232/232587.png",
                    title: "Prioritize, Plan, and Deliver",
                    description: "Consolidate all feedback, ideas, epics, and sprints into a unified  product roadmap—providing stakeholders full context and visibility into what's coming next.",
                },
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/2040/2040514.png",
                    title: "Customize your workflows",
                    description: "Create custom agile workflows tailor-fit for product management, and automate handoffs to design and engineering.",
                },
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/9430/9430155.png",
                    title: "All-in-one platform",
                    description: "Connect product briefs, whiteboards, docs, and more directly to your epics and stories for better visibility—without the busy work.",
                },
            ],
            logo: "https://cdn-icons-png.flaticon.com/512/1474/1474674.png",
        },
        {
            name: "Sales",
            services: [
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/3214/3214710.png",
                    title: "Automate sales processes",
                    description: "Keep deals moving through your pipeline with automations that assign leads, track follow-up, and trigger lead status updates for your team.",
                },
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/9504/9504140.png",
                    title: "Manage accounts",
                    description: "Track prospects, clients, and deals on a List, Board, or Table view that make it easy to visualize your accounts at a glance.",
                },
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/2364/2364820.png",
                    title: "Real-time reporting",
                    description: "See how deals track over time, who is closing, and how your team is performing overall with customizable Dashboards.",
                },
            ],
            logo: "https://cdn-icons-png.flaticon.com/512/3505/3505655.png",
        },
        {
            name: "Engineering",
            services: [
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/6111/6111884.png",
                    title: "Develop better products, faster.",
                    description: "From backlog to release, prioritize and plan your initiatives, epics, tasks, and docs—all on a shared platform with your key stakeholders.",
                },
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/8901/8901393.png",
                    title: "Visibility—Without the busy work",
                    description: "Agile dashboards provide better insights, automatic progress tracking and updates, and reduce redundant meetings.",
                },
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
                    title: "Seamless DevOps integrations",
                    description: "Connect your existing development workflows with native integrations for GitHub, GitLab Bitbucket, Sentry, Slack, Figma, and more.",
                },
            ],
            logo: "https://cdn-icons-png.flaticon.com/512/609/609034.png",
        },
        {
            name: "Marketing",
            services: [
                {
                    icon: "",
                    title: "",
                    description: "",
                },
                {
                    icon: "",
                    title: "",
                    description: "",
                },
                {
                    icon: "",
                    title: "",
                    description: "",
                },
            ],
            logo: "https://cdn-icons-png.flaticon.com/512/1934/1934025.png",
        },
        {
            name: "Product",
            services: [
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/232/232587.png",
                    title: "Prioritize, Plan, and Deliver",
                    description: "Consolidate all feedback, ideas, epics, and sprints into a unified  product roadmap—providing stakeholders full context and visibility into what's coming next.",
                },
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/2040/2040514.png",
                    title: "Customize your workflows",
                    description: "Create custom agile workflows tailor-fit for product management, and automate handoffs to design and engineering.",
                },
                {
                    icon: "https://cdn-icons-png.flaticon.com/512/9430/9430155.png",
                    title: "All-in-one platform",
                    description: "Connect product briefs, whiteboards, docs, and more directly to your epics and stories for better visibility—without the busy work.",
                },
            ],
            logo: "https://cdn-icons-png.flaticon.com/512/1474/1474674.png",
        },
        {
            name: "Design",
            services: [
                {
                    icon: "",
                    title: "",
                    description: "",
                },
            ],
            logo: "https://cdn-icons-png.flaticon.com/512/1934/1934025.png",
        },
        {
            name: "Finance",
            services: [
                {
                    icon: "",
                    title: "",
                    description: "",
                },
            ],
            logo: "https://cdn-icons-png.flaticon.com/512/1934/1934025.png",
        },
        {
            name: "HR",
            services: [
                {
                    icon: "",
                    title: "",
                    description: "",
                },
            ],
            logo: "https://cdn-icons-png.flaticon.com/512/1934/1934025.png",
        },
        {
            name: "IT",
            services: [
            ],
            logo: "https://cdn-icons-png.flaticon.com/512/1934/1934025.png",
        },

    ]
    // service data api end

    const [service, setService] = useState([]);

    function serviceHandle(service = "Project") {
        setService(serviceCollection.filter(item => item.name === service));
    }
    useEffect(() => {
        serviceHandle();
    }, []);

    return (

        <div className='lg:mb-24  py-16 border border-none '>
            <div className='text-center mt-24'>
                <h3 className='font-bold text-blue-900'>BUILT FOR EVERYONE</h3>
                <h1 className='text-3xl font-serif mt-5 text-black  font-bold'>See how TaskMaster can work for you.</h1>
            </div>
            {/* dynamic services button start */}
            <div className='justify-around lg:flex lg:px-32 py-16'>
                {
                    service[0] && serviceCollection.map((item, i) =>
                        <div key={i}>
                            <button
                                onClick={() => serviceHandle(item.name)}
                                className={`${item.name === service[0]?.name ? 'bg-gray-300' : 'bg-indigo-500'} text-black hover:bg-gray-300 font-bold w-28  h-8 rounded-sm shadow-lg`}
                            >
                                {item.name}
                            </button>
                        </div>
                    )
                }
            </div>
            {/* dynamic services button end */}
            {/* service section start */}
            {service[0] && <div className='grid grid-cols-2 lg:px-12 items-center'>
                <div className=' lg:px-16 '>
                    {
                        service[0].services?.map((item, i) =>
                            <div className='flex py-4' key={i}>
                                <div>
                                    <img className='w-24 p-2 aspect-square bg-white border rounded-lg hover:bg-gray-300' src={item.icon} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-2xl font-bold text-black px-2'>{item.title}</h2>
                                    <h4 className='font-semibold text-black px-2 '>{item.description}</h4>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div>
                    <img className='lg:w-96 mx-auto' src={service[0].logo} alt="" />
                </div>
            </div>}
            {/* service section end */}
        </div>
    );
};

export default OurService;
