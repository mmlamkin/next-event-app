import Link from "next/link"
import Image from "next/image"

interface Props {
    title: string,
    image: string,
    location: string,
    date: string,
    time: string,
    slug: string,
}
const EventCard = ({title, image, slug, time, location, date}: Props) => {
    return (
        <Link href={`/events/${slug}`} id={'event-card'}>
            <Image src={image} alt={title} width={410} height={300} className={"poster"}/>
            <div className="flex flex-row gap-2">
                <Image src="/icon/pin.svg" alt="location" width={14} height={14}/>
                <p className="text-sm">{location}</p>
            </div>
            <p className='title'>{title}</p>
            <div className="datetime">
                <div>
                    <Image src="/icon/calendar.svg" alt="date" width={14} height={14}/>
                    <p>{date}</p>
                </div>
                <div>
                    <Image src="/icon/clock.svg" alt="time" width={14} height={14}/>
                    <p>{time}</p>
                </div>
            </div>
        </Link>
    )
}
export default EventCard
