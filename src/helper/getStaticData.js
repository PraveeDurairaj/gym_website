import { MesurementIcon, EquipmentIcon, FitnessIcon, GymTimeIcon } from "../assets/SvgComponents";

export const staticContent = {
    bannerData: {
        title: 'Your Local Fitness Destination for Strength & Energy',
        description: 'Find the perfect workout at a top-rated fitness center near you. From strength training and fat-burning workouts to personal training and group fitness classes, we’ve got everything you need to stay motivated and achieve lasting results.',
        primaryButton: 'Start Free Trial',
        secondaryButton: 'View Plans',
        secondaryButtonLink:'#pricing'

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
                packageType: 'basic 🏋️‍♂️',
                price: '$30',
                offerPrice: '$19',
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
            {
                packageType: 'Premium 💎',
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
                packageType: 'Standard 🚀',
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
    }
}