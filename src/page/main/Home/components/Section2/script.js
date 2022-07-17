import { listeningIntro } from '../../../Introduction/data/Listening'
import { readingIntro } from '../../../Introduction/data/Reading'
import { writingIntro } from '../../../Introduction/data/Writing'
import { speakingIntro } from '../../../Introduction/data/Speaking'

export const listGuide = [ 
    {
        title: "PTE Speaking Guide",
        questions: [...speakingIntro]
    },
    {
        title: "PTE Writing Guide",
        questions: [...writingIntro]
    },
    {
        title: "PTE Reading Guide",
        questions: [...readingIntro]
    },
    {
        title: "PTE Listening Guide",
        questions: [...listeningIntro]
    }
]