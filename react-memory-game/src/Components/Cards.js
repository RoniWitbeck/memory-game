import { useState, useRef } from 'react';
import Card from './Card';

export default function Cards() {

    const [cards, setCards] = useState([
        { id: 0, name: 'Palm', status: '', img: '/Leaf/1.jpg' },
        { id: 0, name: 'Palm', status: '', img: '/Leaf/1.jpg' },
        { id: 1, name: 'Areca Palm', status: '', img: '/Leaf/2.webp' },
        { id: 1, name: 'Areca Palm', status: '', img: '/Leaf/2.webp' },
        { id: 2, name: 'Silver Lime', status: '', img: '/Leaf/3.jpg' },
        { id: 2, name: 'Silver Lime', status: '', img: '/Leaf/3.jpg' },
        { id: 3, name: 'Oak', status: '', img: '/Leaf/4.png' },
        { id: 3, name: 'Oak', status: '', img: '/Leaf/4.png' },
        { id: 4, name: 'Sprout', status: '', img: '/Leaf/5.jpg' },
        { id: 4, name: 'Sprout', status: '', img: '/Leaf/5.jpg' },
        { id: 5, name: 'Monstera', status: '', img: '/Leaf/6.jpg' },
        { id: 5, name: 'Monstera', status: '', img: '/Leaf/6.jpg' },
    ].sort(() => Math.random() - .5));

    const [previousCardState, setPreviousCardState] = useState(-1);
    const previousIndex = useRef(-1);

    const matchCheck = (currentCard) => {
        if(cards[currentCard].id === cards[previousCardState].id) {
            cards[previousCardState].status = 'active matched'
            cards[currentCard].status = 'active matched'
            setPreviousCardState(-1)            
        } else {
            cards[currentCard].status = 'active'
            setCards([...cards])
            setTimeout(() => {
                setPreviousCardState(-1)
                cards[currentCard].status = 'unmatch'
                cards[previousCardState].status = 'unmatch'
                setCards([...cards])

            }, 1000);
        }
    }

    const clickhandler = (index) => {
        if(index !== previousIndex.current) {
            if(cards[index].status === 'active matched') {
                alert('already matched')
            } else {
                if(previousCardState === -1) {
                    previousIndex.current = index
                    cards[index].status = 'active'
                    setCards([...cards])
                    setPreviousCardState(index)
                } else {
                    matchCheck(index)
                    previousIndex.current = -1
                }
            }
        } else {
            alert('card currently selected')
        }
    }

    return (
        <div className="container">
            { cards.map((card, index) => {
                return <Card card={card} key={index} index={index} clickhandler={clickhandler} />
            })}
        </div>
    );
}