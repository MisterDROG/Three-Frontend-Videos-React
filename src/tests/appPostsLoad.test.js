import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';

const mockData = [
    {
        "date": "06.07.22",
        "embedLink": "https://www.youtube.com/embed/doympyOFlKE",
        "id": 1,
        "title": "What is React js. Overview of opportunities for beginners. Study plan.",
        "youTubeLink": "https://www.youtube.com/watch?v=doympyOFlKE&ab_channel=WebDeveloperBlog"
    },
    {
        "date": "06.07.22",
        "embedLink": "https://www.youtube.com/embed/Av53VJI-UiE",
        "id": 2,
        "title": "JavaScript game from scratch for beginners. VERY SIMPLE!",
        "youTubeLink": "https://www.youtube.com/watch?v=Av53VJI-UiE&ab_channel=WebDeveloperBlog"
    },
    {
        "date": "06.07.22",
        "embedLink": "https://www.youtube.com/embed/oUCbeRf_xwA",
        "id": 3,
        "title": "Website Layout - SEO Basics for Beginners.",
        "youTubeLink": "https://www.youtube.com/watch?v=UpBc8cui9ZM&ab_channel=UlbiTV"
    },
    {
        "date": "07.07.22",
        "embedLink": "https://www.youtube.com/embed/UpBc8cui9ZM",
        "id": 4,
        "title": "We create our own UI Framework. Webpack, StoryBook, NPM publishing.",
        "youTubeLink": "https://www.youtube.com/watch?v=doympyOFlKE&ab_channel=WebDeveloperBlog"
    },
    {
        "date": "07.07.22",
        "embedLink": "https://www.youtube.com/embed/2AWcWODemB8",
        "id": 5,
        "title": "How to successfully pass an interview for a JUNIOR developer.",
        "youTubeLink": "https://www.youtube.com/watch?v=2AWcWODemB8&ab_channel=UlbiTV"
    },
    {
        "date": "07.07.22",
        "embedLink": "https://www.youtube.com/embed/y2emL1fMRyY",
        "id": 6,
        "title": "JavaScript Testing from A to Z (Jest, React Testing Library, e2e, screenshot)",
        "youTubeLink": "https://www.youtube.com/watch?v=y2emL1fMRyY&ab_channel=UlbiTV"
    },
    {
        "date": "08.07.22",
        "embedLink": "https://www.youtube.com/embed/YDKFWhBkC8c",
        "id": 7,
        "title": "Front-end 2022 Roadmap & Trends | What to study in 2022?",
        "youTubeLink": "https://www.youtube.com/watch?v=YDKFWhBkC8c&ab_channel=webDev"
    },
    {
        "date": "08.07.22",
        "embedLink": "https://www.youtube.com/embed/WWtEPKaSpIw",
        "id": 8,
        "title": "Website layout Bootstrap 5 / HTML / CSS in practice for beginners.",
        "youTubeLink": "https://www.youtube.com/watch?v=WWtEPKaSpIw&ab_channel=%D0%90%D0%BD%D0%BD%D0%B0%D0%91%D0%BB%D0%BE%D0%BA"
    },
    {
        "date": "08.07.22",
        "embedLink": "https://www.youtube.com/embed/CsqbPIXX_oY",
        "id": 9,
        "title": "What is web programming? FOR BEGINNERS / About IT / Geekbrains.",
        "youTubeLink": "https://www.youtube.com/watch?v=CsqbPIXX_oY&ab_channel=GeekBrains"
    },
    {
        "date": "09.07.22",
        "embedLink": "https://www.youtube.com/embed/QyfzMzo9QGs",
        "id": 10,
        "title": "Webpack - assembler of web applications (in simple js and css)",
        "youTubeLink": "https://www.youtube.com/watch?v=QyfzMzo9QGs&t=667s&ab_channel=letsCode"
    },
    {
        "date": "09.07.22",
        "embedLink": "https://www.youtube.com/embed/fu_shslaI14",
        "id": 11,
        "title": "Bootstrap 5 Parallax Scrolling Effect | Pure CSS | No Javascript",
        "youTubeLink": "https://www.youtube.com/watch?v=fu_shslaI14&ab_channel=WebDesignInspiration"
    },
    {
        "date": "09.07.22",
        "embedLink": "https://www.youtube.com/embed/SWBUS99Hlfc",
        "id": 12,
        "title": "Figma from start - Introduction to the program | Web design.",
        "youTubeLink": "https://www.youtube.com/watch?v=SWBUS99Hlfc&ab_channel=VideoSmile"
    }
]

describe('App test', () => {

    test('Test for main videos load', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
            );
        render(<App/>)
        const helpLink = screen.getByText('Help')
        userEvent.click(helpLink)
        expect(fetch).toBeCalledTimes(1) 
    }) 
    
})