import BuildCard from '../components/BuildCard';
import Button from '../components/Button';
import { cards } from '../data/cards'

export function BuildHistory() {
    const cartObjects = [];
    for (let card of cards) {
        let monthString = card.date.toLocaleString('default', {'month': 'short'});
        monthString = monthString.length === 3 ? monthString : monthString.slice(0,-1);
        const timeString = card.date.toLocaleString('default', {'hour': '2-digit', 'minute': '2-digit'});
        const dateString = `${card.date.getDay()+1} ${monthString}, ${timeString}`;
        const usedTimeString = `${Math.floor(card.time/60)} ч ${card.time%60} мин`;
        cartObjects.push(<BuildCard key={card.commit} status={card.status} trunk={card.trunk} hash={card.hash} date={dateString} commit={card.commit} comment={card.comment} owner={card.owner} time={usedTimeString}/>)
    }

    return (
        <>
            <div className="build-wrapper">
                {cartObjects}
                <div style={{marginBottom: '20px'}}>
                    <Button className="button-control w-100-xl" type='button'>Show more</Button>
                </div>
            </div>
        </>
    );
}