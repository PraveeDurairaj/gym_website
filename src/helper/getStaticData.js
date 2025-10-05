import { MesurementIcon, EquipmentIcon, FitnessIcon, GymTimeIcon } from "../assets/SvgComponents";
import { trainersImage, brandLogo,serviceImage1,serviceImage2,serviceImage3,serviceImage4 } from "./getStaticImages";

export const staticContent = {
    homeHeaderData: {
        brandLogo: brandLogo,
        navigationMenus: [
            {
                text: 'About',
                link: '#about'
            },
            {
                text: 'Services',
                link: '#services'
            },
            {
                text: 'Pricing',
                link: '#pricing'
            },
            {
                text: 'FAQ',
                link: '#faq'
            },
            {
                text: 'Contact',
                link: '#contact'
            }
        ],
        contactButton: 'Join now'

    },
    bannerData: {
        title: 'Your Local Fitness Destination for Strength & Energy',
        description: 'Find the perfect workout at a top-rated fitness center near you. From strength training and fat-burning workouts to personal training and group fitness classes, we’ve got everything you need to stay motivated and achieve lasting results.',
        primaryButton: 'Start Free Trial',
        secondaryButton: 'View Plans',
        secondaryButtonLink: '#pricing'

    },
    amenitiesData: {
        title: 'Reasons to join',
        aminitesCardData: [
            {
                icon: MesurementIcon,
                cardTitle: '15000 sq.m',
                cardDescription: 'A spacious gym for sports a safe distance between exercise machines'
            },
            {
                icon: EquipmentIcon,
                cardTitle: 'More than 200 equipment',
                cardDescription: 'No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.'
            },
            {
                icon: FitnessIcon,
                cardTitle: '4 fitness zones',
                cardDescription: 'From cardio to functional and cycle. Separate area for boxing and mixed martial arts'
            },
            {
                icon: GymTimeIcon,
                cardTitle: 'Round-the-clock operation',
                cardDescription: 'The gym is open 24 hours a day, also works on all holidays and weekends'
            },
        ]

    },
    aboutData: {
        title: 'About Our Gym',
        description: 'Find the perfect workout at a top-rated fitness center near you. From strength training and fat-burning workouts to personal training and group fitness classes, we’ve got everything you need to stay motivated and achieve lasting results.',
        description2: 'Find the perfect workout at a top-rated fitness classes, we’ve got everything you need to stay motivated and achieve lasting results.',
    },

    pricingData: {
        title: 'Our Transparent Pricing',
        description: 'Choose the perfect plan to access top-rated fitness classes and modern amenities',
        cardData: [
            {
                packageType: 'Starter Plan',
                price: '$30',
                offerPrice: 'Free',
                planPeriod: '7 days',
                planCovertFeatures: [
                    'Access to amenities',
                    'Unlimited group classes',
                    'Full gym access'
                ],
                planNotCovertFeatures: [
                    'Premium equipment access',
                    'Towel & locker service',
                    'Guest pass privileges'
                ],
                ctaButton: 'Get Start'
            },
            {
                packageType: 'Premium',
                price: '$80',
                offerPrice: '$49',
                planPeriod: 'per month',
                planCovertFeatures: [
                    'Access to amenities',
                    'Unlimited group classes',
                    'Full gym access'
                ],
                planNotCovertFeatures: [
                    'Premium equipment access',
                    'Towel & locker service',
                    'Guest pass privileges'
                ],
                ctaButton: 'Get Start',
                isProPlan: true
            },
            {
                packageType: 'Standard',
                price: '$50',
                offerPrice: '$29',
                planPeriod: 'per month',
                planCovertFeatures: [
                    'Access to amenities',
                    'Unlimited group classes',
                    'Full gym access'
                ],
                planNotCovertFeatures: [
                    'Premium equipment access',
                    'Towel & locker service',
                    'Guest pass privileges'
                ],
                ctaButton: 'Get Start'
            },
        ]
    },
    trainersData: {
        title: 'Meet Our Expert Trainers',
        description: 'we believe that a great fitness journey starts with the right guidance. Our team of professional trainers is the backbone of our gym — experienced, passionate, and 100% dedicated to your transformation.',
        trainerTextData: [
            "Certified & Experienced",
            "Personalized Attention",
            "Motivators & Mentors",
            "Holistic Training Approach",
            "Proven Results"
        ],
        trainerImage: trainersImage
    },
    faqData: {
        title: 'Everything You Need to Know',
        description: "Join with confidence or get more from your membership. Discover everything you need to know about our gym, programs, and perks.",
        faqListData: [
            {
                question: 'What are your opening hours?',
                answer: {
                    normalDescription: ["We’re open 7 days a week!"],
                    descriptionWidthBold: {
                        beforeText: "Monday to Friday:",
                        BoldText: " 5:00 AM – 11:00 PM ",
                        afterText: "| Saturday & Sunday: 6:00 AM – 9:00 PM"
                    },
                    dotList: [
                        "Early birds and night owls are welcome.",
                        "Perfect hours for before or after work visits.",
                        "Weekend hours let you relax and recharge at your pace.",
                        "Consistent schedule so you can plan ahead with ease.",
                        "Open daily—no need to miss a day!"
                    ]
                }
            },
            {
                question: 'Do I need to sign a contract to join?',
                answer: {
                    normalDescription: ["Not at all! We offer flexible plans."],
                    descriptionWidthBold: {
                        beforeText: "Choose between ",
                        BoldText: "contract-free memberships",
                        afterText: " or discounted long-term options."
                    },
                    dotList: ["No hidden fees", "Cancel anytime (with notice)"]
                }
            },
            {
                question: 'What should I bring on my first visit?',
                answer: {
                    normalDescription: ["Come prepared and ready to move!"],
                    descriptionWidthBold: {
                        beforeText: "Don't forget your",
                        BoldText: "energy",
                        afterText: "— we’ll take care of the rest."
                    },
                    dotList: ["Valid ID", "Workout clothes & towel", "Water bottle"]
                }
            },
            {
                question: 'Do you offer personal training?',
                answer: {
                    normalDescription: ["Yes! Get expert guidance to reach your goals."],
                    descriptionWidthBold: {
                        beforeText: "Our trainers help you stay",
                        BoldText: "motivated and accountable",
                        afterText: "through every session."
                    },
                    dotList: ["1-on-1 sessions", "Custom fitness plans", "Flexible booking options"]
                }
            },
            {
                question: 'Are classes included in the membership?',
                answer: {
                    normalDescription: ["Most classes are included at no extra cost."],
                    descriptionWidthBold: {
                        beforeText: "Popular classes like",
                        BoldText: "yoga, Zumba, HIIT, and spin",
                        afterText: "are free for members."
                    },
                    dotList: ["Premium classes may have a fee", "Check schedule online"]
                }
            },
            {
                question: 'Do you have options for beginners?',
                answer: {
                    normalDescription: ["Absolutely! We love helping beginners."],
                    descriptionWidthBold: {
                        beforeText: "Start with our",
                        BoldText: "intro classes and friendly trainers",
                        afterText: "to ease into fitness."
                    },
                    dotList: ["Beginner-friendly programs", "No experience needed", "Supportive environment"]
                }
            },
            {
                question: 'Can I try the gym before committing?',
                answer: {
                    normalDescription: ["We offer a free trial pass for new visitors."],
                    descriptionWidthBold: {
                        beforeText: "Explore the facility and",
                        BoldText: "try a full workout",
                        afterText: "— no strings attached."
                    },
                    dotList: ["Get a feel for the gym", "Meet our team", "Join a class"]
                }
            },
            {
                question: 'What if I need to pause or cancel my membership?',
                answer: {
                    normalDescription: ["We understand — life happens!"],
                    descriptionWidthBold: {
                        beforeText: "You can",
                        BoldText: "pause or cancel",
                        afterText: "your membership with advance notice."
                    },
                    dotList: ["Freeze options available", "No hidden fees", "Simple cancellation process"]
                }
            },
            {
                question: 'Are there locker rooms and showers?',
                answer: {
                    normalDescription: ["Yes, we’ve got clean and secure facilities."],
                    descriptionWidthBold: {
                        beforeText: "Remember to",
                        BoldText: "bring your own lock",
                        afterText: "for personal lockers."
                    },
                    dotList: ["Showers available", "Changing rooms", "Lockers on-site"]
                }
            },
            {
                question: 'Is parking available?',
                answer: {
                    normalDescription: ["Yes! Free parking for all members."],
                    descriptionWidthBold: {
                        beforeText: "Convenient ",
                        BoldText: "on-site parking",
                        afterText: " so you can focus on your workout."
                    },
                    dotList: ["No time limits", "Secure area"]
                }
            },
            {
                question: 'What kind of equipment do you have?',
                answer: {
                    normalDescription: ["We’re fully equipped for all training styles."],
                    descriptionWidthBold: {
                        beforeText: "From",
                        BoldText: "cardio machines to free weights",
                        afterText: ", we’ve got it all."
                    },
                    dotList: ["Treadmills, ellipticals, bikes", "Squat racks & dumbbells", "Resistance machines & recovery tools"]
                }
            },
            {
                question: 'Do you have any fitness programs or challenges?',
                answer: {
                    normalDescription: ["Yes! We keep things exciting all year long."],
                    descriptionWidthBold: {
                        beforeText: "Join our",
                        BoldText: "seasonal challenges or bootcamps",
                        afterText: "for extra motivation."
                    },
                    dotList: ["Weight loss challenges", "Group training events", "Transformation programs"]
                }
            }
        ]

    },
    ctaData: {
        title: 'Ready to Transform Your Body and Mind?',
        description: 'Join a community that pushes limits. Burn fat, build muscle, and break through every barrier. Your transformation starts the moment you commit.',
        primaryButton: 'Join Now',
        secondaryButton: 'Claim Free Trial',
        secondaryButtonLink: '#pricing'
    },
    ServicesData: {
        title: 'What We Offer',
        description: "At [Your Gym Name], we offer a wide range of fitness services tailored to help you achieve your health and wellness goals — whether you're just starting out or a seasoned athlete.",
        cardData: [
            {
                title: 'Personal Training',
                description: 'Work one-on-one with certified personal trainers who tailor every workout to your goals — whether it’s fat loss, muscle gain, or improved athletic performance.',
                image: serviceImage1
            },
            {
                title: 'Nutrition Coaching',
                description: 'Get personalized nutrition guidance, meal planning, and accountability from our certified coaches. We help you build a sustainable, healthy relationship with food.',
                image: serviceImage2
            },
            {
                title: 'Corporate Wellness',
                description: 'Boost employee productivity and well-being with customized fitness and wellness programs for companies, including on-site classes, webinars, and fitness challenges.',
                image: serviceImage3
            },
            {
                title: 'Yoga',
                description: "Improve flexibility, build core strength, and find inner balance. Perfect for all levels, these low-impact classes enhance both body and mind.",
                image: serviceImage4
            },
            {
                title: 'Zumba',
                description: 'Dance your way to fitness with energetic, fun-filled Zumba sessions that make cardio feel like a party.',
                image: serviceImage2
            },
        ]
    }
}