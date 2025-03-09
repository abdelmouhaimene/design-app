import {
    servicesDataType,
    PortfolioDataType,
    pricingDataType
} from '@/dataTypes'

export const servicesData: servicesDataType = [
    {
        name : "Animation 2D",
        descreption1 : "Pixel Studios provides high-quality and affordable 2D animation services. Our experienced animators and designers work closely with clients to translate concepts into visually striking animated videos and motion graphics.",
        descreption2 : "Whether you need an explainer video or social media ads, our animations feature smooth character movement, vivid scenes, and consistent graphics.",
        descreption3 : "We also create informative whiteboards and motion graphic animations to explain complex concepts visually. All projects are accurately estimated and delivered on time.",
        image : "/services/2d-animation.gif",
    },
    {
        name : "Animation 3D",
        descreption1 : "Take your projects to the next dimension with Pixel Studios' high-end 3D animation services. Our 3D artists bring objects, characters, and virtual worlds to life using the latest 3D modeling, rigging, and simulation tools.",
        descreption2 : "We can create immersive 3D animated promotions, product demos, architectural visualizations, and more. Our animators treat each project with care, accurately capturing the envisioned style, tone, and behaviors.",
        descreption3 : "We provide 3D animation, character animation, terrain modeling, textures, lighting, camera work, and rendering services.",
        image : "/services/3d-animation.gif",
    },
    {
        name : "Motion graphic",
        descreption1 : "Pixel Studios helps you create visually striking motion graphic content for your videos through animation, graphics, text, and visual effects.",
        descreption2 : "Our designers craft compelling animations and understand client goals, styles, and target platforms to smoothly integrate motion.",
        descreption3 : "Using Adobe tools, our artists conceptualize unique animations featuring smooth transitions, engaging text, and blended 2D/3D elements. We pay attention to pacing, hierarchy, and comprehension across devices.",
        image : "/services/motion_graphic.gif",
    },
    {
        name : "White board",
        descreption1 : "Explain complex topics simply and engagingly with whiteboard animations. Our artists distill messages into key stages and drawings like a live whiteboard session.",
        descreption2 : "Fluid animations bring drawings to life with realistic marker strokes. Tailored voiceovers and feedback-polished mock-ups clearly explain topics. We integrate elements like characters for engagement and optimize the final video for all platforms.",
        descreption3 : "",
        image : "/services/white_board.gif",
    },
    {
        name : "Logo animation",
        descreption1 : "Bring your logo to everyone's attention with creative logo animations. Our expert designers and animators understand your brand through discussion to determine animated approaches that accentuate your logo through movement and visual elements.",
        descreption2 : "ll animations are optimized for websites, social media, and videos with smooth motion and readability in varied sizes. Transparent collaboration allows for conveying feedback until approval.",
        descreption3 : "",
        image : "/services/logo_animation.gif",
    },
    {
        name : "Video editing",
        descreption1 : "Pixel Studios transforms raw footage into polished videos through expert editing. We discuss objectives and target audiences to determine structure, pace, and direction.",
        descreption2 : "During editing, expect meticulous audio, color, effects, and additional sourcing if needed. Extensive reviews help refine videos that convey messages respecting deadlines and quality.",
        descreption3 : "Specialized captioning, subtitling, and localization allow global outreach with ongoing maintenance.",
        image : "/services/video_editing.gif",
    },
]

// Define the type for a single project

export const portfolioData: PortfolioDataType = [
    {
        name : '2D Animation',
        projects : [
            {
                name: 'project 1',
                image: '/services/video_editing.gif'
            },
            {
                name: 'project 2',
                image: '/services/logo_animation.gif'
            },
            {
                name: 'project 3',
                image: '/services/motion_graphic.gif'
            }
        ]
    },
    {
        name : '3D Animation',
        projects : [
            {
                name: 'project 1',
                image: '/services/video_editing.gif'
            },
            {
                name: 'project 2',
                image: '/services/logo_animation.gif'
            },
            {
                name: 'project 3',
                image: '/services/motion_graphic.gif'
            }
        ]
    },
    {
        name : 'Explainer videos',
       projects : [
            {
                name: 'project 1',
                image: '/services/video_editing.gif'
            },
            {
                name: 'project 2',
                image: '/services/logo_animation.gif'
            },
            {
                name: 'project 3',
                image: '/services/motion_graphic.gif'
            }
        ]
    },
    {
        name : 'Whiteboard animation',
       projects : [
            {
                name: 'project 1',
                image: '/services/video_editing.gif'
            },
            {
                name: 'project 2',
                image: '/services/logo_animation.gif'
            },
            {
                name: 'project 3',
                image: '/services/motion_graphic.gif'
            }
        ]
    },
    {
        name : 'Logo animation',
       projects : [
            {
                name: 'project 1',
                image: '/services/video_editing.gif'
            },
            {
                name: 'project 2',
                image: '/services/logo_animation.gif'
            },
            {
                name: 'project 3',
                image: '/services/motion_graphic.gif'
            }
        ]
    },
]

export const pricingData: pricingDataType = [
    {
        name : 'Pack Basic',
        image : '/packs/cart1.webp',
        price : 100,
        oldPrice: 200,
        descreption: 'Basic pack descreption',
        offers : ['60 Sec Duration','Script Writing','Custom Artwork','Background Music','HD Format Video','Dedicated Support']
    },
    {
        name : 'Pack Professional',
        image : '/packs/cart2.webp',
        price : 200,
        oldPrice: 300,
        descreption: 'Professional pack descreption',
        offers : ['60 Sec Duration','Script Writing','Custom Artwork','Background Music','HD Format Video','Dedicated Support']
    },
    {
        name : 'Pack Primium',
        image : '/packs/cart3.webp',
        price : 300,
        oldPrice: 400,
        descreption: 'Primium pack descreption',
        offers : ['60 Sec Duration','Script Writing','Custom Artwork','Background Music','HD Format Video','Dedicated Support','60 Sec Duration','Script Writing','Custom Artwork','Background Music','HD Format Video']
    },
]
