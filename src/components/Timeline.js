import neuralnetworks from '../images/neuralnetworks.png'
import reactworkshop from '../images/reactworkshop.png'
import timelinetitle from '../images/timelinetitle.svg'
import TimelineCard from './TimelineCard'

export default function Timeline() {
    return (
        <div className="lg:mx-96 grid lg:grid-cols-3 grid-cols-2">
            <div className='mx-auto col-span-3 lg:col-start-1 col-start-2 lg:p-20'>
                <img src={timelinetitle} alt="" />
            </div>
            <div className='py-5 col-span-3 lg:col-start-1 col-start-3'><TimelineCard
                title="Neural Networks and Computer Vision"
                time="05:30PM - 08:00PM"
                date="4th January, 2024"
                image={neuralnetworks}
            // image="https://s3-alpha-sig.figma.com/img/d4f6/f766/62045705fb0b39ff404bb6484cd73c17?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BznrqdfAylnEo9ICeIsTBlLbHqkMq9LKdDNwfsnEjLQpUmZ57c7quBTou1SasojR72N5eT4brixzg2cK~4MGrMqN3gNJqZs85By6G7UBc2nVbWwZeo22v8qj4dQnIF4Vm6duK3C4AZZwHQnNHEABJLM7I4CWU4EpJhd7w7CKUFybSs8RvtSWTyPOIAK0ar2oyc6vtfmtpGGXVmmormT9FTjHIizYBJcQAd6WmEQaffOJUEZbb1NoTARMvZPWw7m-0PFrH8oLx0GJHcOBQtKgQ2BZIjDenEXplMrP7pF3pWek1AWuRmW2g2krLKXscV9IIJYcCdGRf7YQ0-J~c5bi7g__"
            /></div>
            <div className='py-5 col-span-3 col-start-3'><TimelineCard
                title="React Workshop"
                time="05:30PM - 08:00PM"
                date="4th January, 2024 - 5th January, 2024"
                image={reactworkshop}
            // image="https://s3-alpha-sig.figma.com/img/c82c/e689/2d216a7f430fec13ca8d4e780518bfa9?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bBQYmJpTRwjCCMqR1UDjZBqyg1j6tmfrse2tarI~VmoPrtnRK2Q8vP8X4WiIEeoewZXEFb50j2pjyBv7cSfB684at4QIJwhvlwOBrWFpvX8JoE1Wcgoy1P4NtyeCO3kp5YXG3awpL3UIOAmOQzZJUpHdR8kG~1mle5JqMcvMX9Z33W6rgPFy1eAvk81P-qKOiH5Irm1FghuZCoumdAs~~hIDA~jo--xLqqHTFTUeqH~opW9Q~LypsHMILjvSJN2bU4kaheIdirq2Ucnn1Rui2ZQBiqCriHoEfRmOmNubk~9g1kG1bIAr1djc84XfOi~6sGWYmIYB3QLedZjL0Ft6Ww__" 
            /></div>
            <div className='py-5 col-span-3 lg:col-start-1 col-start-3'><TimelineCard
                title="UI Design Workshop"
                time="05:30PM - 08:00PM"
                date="4th January, 2024"
                image={reactworkshop}
            /></div>
            <div className='py-5 col-span-3 col-start-3'><TimelineCard
                title="CSS Frameworks"
                time="05:30PM - 08:00PM"
                date="4th January, 2024"
                image={reactworkshop}
            /></div> 
        </div>
    )
}
