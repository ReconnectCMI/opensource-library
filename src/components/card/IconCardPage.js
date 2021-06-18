import './cardPage.css';
import React from 'react';
import IconCard from './IconCard';
import templateIcon from '../../images/icons/placeholder.png';

const iconCardsData = [
    {
        "image":templateIcon,
        "title":"Test icon card",
        "description":"ik ben een test icon card en ben heel erg mooi."
    },
    {
        "image":templateIcon,
        "title":"Test icon card",
        "description":"ik ben een test icon card en ben heel erg mooi."
    },
    {
        "image":templateIcon,
        "title":"Test icon card",
        "description":"ik ben een test icon card en ben heel erg mooi."
    },
    {
        "image":templateIcon,
        "title":"Test icon card",
        "description":"ik ben een test icon card en ben heel erg mooi."
    },
]

function IconCardPage() {
    const cards = []
    iconCardsData.forEach((card) => {
        cards.push(<IconCard image={card.image} title={card.title} description={card.description} />)
    });
    return (
        <div>
            {cards}
        </div>
    );
}

export default IconCardPage;