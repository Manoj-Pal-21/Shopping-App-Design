import React from 'react'
import Details from '../Detail/Details'
import { Title } from '../Title/Title'
import { Typography } from '../Typography/Typography'

const OverView = () => {
    return (
        <div className="left-container col-span-12 md:col-span-8 bg-white rounded-lg p-6 mb-4 md:mb-0 move-up">
            <Details />

            <Title variant='h2'>
                Tour Overview
            </Title>

            <Typography variant='text'>
                The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip whisks you around the islands in one day.
                Swim over the coral reefs of Pileh Lagoon, have lunch at Phi Phi Leh, snorkel at Bamboo Island, and visit Monkey Beach and
                Maya Bay, immortalized in "The Beach." Boat transfers, snacks, buffet lunch, snorkeling equipment, and Phuket hotel pickup
                and drop-off all included.
            </Typography>

            <Title variant='h6'>
                Tour Highlights
            </Title>

            <Typography variant='list'>
                <li>Experience the thrill of a speedboat to the stunning Phi Phi Islands</li>
                <li>Be amazed by the variety of marine life in the archipelago</li>
                <li>Enjoy relaxing in paradise with white sand beaches and azure turquoise water</li>
                <li>Feel the comfort of a tour limited to 35 passengers</li>
                <li>Catch a glimpse of the wild monkeys around Monkey Beach</li>
            </Typography>
            <div className="border-t border-gray-300 mt-[100px]"></div>
        </div>
    )
}

export default OverView
