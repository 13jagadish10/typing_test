const simple = ["India is a vast country with diverse cultures. People here are known for their friendliness and warmth. The food is rich in flavors, offering a variety of delicious dishes that cater to different tastes. From spicy to sweet, Indian cuisine is a delightful experience for anyone who loves tasty meals.",
    "Festivals hold a special place in my family's heart. Diwali, Holi, and Eid are eagerly awaited celebrations that bring us together. The joy and happiness during these festivals create cherished memories. We gather with family and friends, sharing laughter and creating bonds that last a lifetime.",
    "My name is Bhavesh Gharat, I have created a simple typing speed testing web app to check the speed of english typing. The app is created using html, css and pure javascript, this is simple mode of typing which you are typing in. Good luck keep practicing.",
    "My name is Bhavesh Gharat, I am learning in Jeevandeep college of arts, commerce and science , khardi. I am in the second year of the graduation and created this simple typing speed test web application, hope you will like it. Best of luck, keep practicing.",
    "The Indian cricket team holds a special spot in the hearts of millions. Cricket is not just a sport; it's a source of entertainment and excitement. Whether watching a match at the stadium or on television, the enthusiasm is contagious. It's a joyous experience that unites people, creating a sense of camaraderie.",
    "Communication is done in both verbal and non-verbal ways. In day to day life, colloquial language and non-verbal cues are used to communicate. On the other hand, in professional set ups, communication is done in a professional manner by using appropriate words, proper tone, speed, pronunciation and befitting body language. Every attempt of communication carries a specific goal and it is archived by using both verbal and non-verbal cues."]
const hard = ["The ephemeral luminescence of daybreak bathes the landscape, heralding a nascent epoch. Dew-kissed petals, resplendent in the morning glow, evoke the delicate dance of nature's awakening. Zephyrs, with a mellifluous cadence, traverse the arboreal haven, bearing the auspice of a genesis—an evanescent juncture where the boundless tapestry of possibilities unfurls, akin to blossoms unfurling in the ethereal light.",
    "Within the confines of an abode, an enigmatic fireplace emanates a subdued symphony. Melodies, mellifluous and entrancing, permeate the sanctuary, conjuring an ambiance of serenity. Swathed in a luxuriant blanket, immerse thyself in the tranquility of a crepuscular soiree, wherein the temporal flux decelerates, and the psyche discovers repose in the dulcet harmonics of serene nocturnal interludes.",
    "Urban thoroughfares pulsate with vitality as the cosmopolitan tapestry rouses from repose. Mechanized steeds emit a harmonious hum, footfalls echo in cadence, and the urban pulse resonates ubiquitously. Amidst the harmonious cacophony, purpose propels each urbanite forward, orchestrating a polyphonic symphony of progress. Arteries of concrete metamorphose into conduits of ambition, and the metropolitan rhythm narrates sagas of aspirations actualized within the vivacious tableau of urban existence.",
    "Amber-hued undulations of wheat sway sinuously, a testament to the rhythmic ballet of agrarian existence. Beneath Helios' benevolent gaze, assiduous tillers toil, their labor inscribed upon the terrestrial scroll. The rustic simplicity harbors profound beauty—an elemental kinship to the soil that resonates through the susurrating fields and the diaphanous whispers of the zephyr weaving tales of honest toil.",
    "Stellar gems bedeck the celestial expanse, a lustrous pantheon captivating cognizant gazes for eons. Luminous astral entities, ancient sentinels, scintillate in the cosmic pageantry, proffering an invitation to contemplation. In the nocturnal hush, an intrinsic affinity to the cosmos manifests—a cosmic embrace that transcends spatial confines and temporal epochs, enshrouding all within the enigmatic allure of the celestial vastness.",
    "A vibrant marketplace unfolds, a sensorial kaleidoscope replete with chromatic hues, olfactory ambrosia, and auditory cadences. Artisans vociferously extol their artisanal creations, and an effervescent multitude navigates the kaleidoscopic tapestry of commodities. In this effervescent agora, each nook conceals treasures awaiting revelation—the marketplace, a vibrant mosaic of human commerce, interaction, and the pulsating rhythm of communal dynamism."]
const harder = ["The ineffable luminosity heralds the nascent epoch, orchestrating a celestial symphony in the intricate ballet of existence. Petals, kissed by dawn's resplendence, partake in a ballet of ephemeral beauty, mirroring nature's awakening dance. Zephyrs, ethereal in their cadence, traverse the arboreal sanctuary, bearing witness to a genesis—a transient juncture where the boundless tapestry of potential unfurls, akin to delicate blossoms unfurling in the ethereal light.",
    "Within the sanctified confines of an abode, an enigmatic hearth emanates a nuanced symphony. Melodies, both mellifluous and enchanting, permeate the sanctuary, conjuring an ambiance of unparalleled serenity. Enveloped in the embrace of a sumptuous textile, immerse thyself in the transcendental tranquility of a crepuscular soiree. Here, the relentless flow of temporal currents decelerates, and the psyche finds repose in the dulcet harmonics of serene nocturnal interludes.",
    "Urban thoroughfares, labyrinthine conduits of vitality, pulsate with the relentless energy of a metropolis rousing from its nocturnal repose. Mechanized steeds emit a harmonious hum, footfalls echo in rhythmic cadence, and the urban pulse resonates ubiquitously. Amidst the harmonious cacophony, the impetus of purpose propels each urbanite forward, orchestrating a polyphonic symphony of progress. Arteries of concrete metamorphose into conduits of ambition, and the metropolitan rhythm narrates sagas of aspirations actualized within the vivacious tableau of urban existence.",
    "Amber-hued undulations of wheat sway sinuously, a testament to the rhythmic ballet of agrarian existence. Beneath the benevolent gaze of Helios, assiduous tillers toil, their labor inscribed upon the terrestrial scroll. The rustic simplicity harbors profound beauty—an elemental kinship to the soil that resonates through the susurrating fields and diaphanous whispers of the zephyr, weaving tales of unyielding toil and indomitable spirit.",
    "Stellar gems bedeck the celestial expanse, a lustrous pantheon captivating cognizant gazes for eons. Luminous astral entities, ancient sentinels, scintillate in the cosmic pageantry, proffering an invitation to contemplation. In the nocturnal hush, an intrinsic affinity to the cosmos manifests—a cosmic embrace transcending spatial confines and temporal epochs, enshrouding all within the enigmatic allure of the celestial vastness.",
    "A vibrant marketplace unfurls, a sensorial kaleidoscope replete with chromatic hues, olfactory ambrosia, and auditory cadences. Artisans vociferously extol their artisanal creations, and an effervescent multitude navigates the kaleidoscopic tapestry of commodities. In this effervescent agora, each nook conceals treasures awaiting revelation—the marketplace, a vibrant mosaic of human commerce, interaction, and the pulsating rhythm of communal dynamism."]
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const starttest = document.getElementById('starttest')
const container = document.querySelector('.text');
const mode = document.querySelectorAll('.mode');
let mode_type = "Simple";
let show_mode = starttest.querySelector('span');
let timerid = "";
let link = document.getElementsByTagName('h3.link')
let topscore = {
    simple: 0,
    hard: 0,
    harder: 0
}
let time_taken = 0;
let test_mode = "";




mode[0].addEventListener('click', () => {
    show_mode.innerText = "Simple";
    mode_type = "Simple"
})
mode[1].addEventListener('click', () => {
    show_mode.innerText = "Medium";
    mode_type = "Hard"
})
mode[2].addEventListener('click', () => {
    show_mode.innerText = "Hard";
    mode_type = "Harder"
})

starttest.addEventListener('click', () => {
    let counter = document.getElementById('counter')
    navigate('second')
    setTimeout(() => {
        counter.innerText = "2";
        setTimeout(() => {
            counter.innerText = "1";
        }, 1000)
    }, 1000)
    setTimeout(() => {
        document.querySelector('.second_content').classList.remove('hide')
        document.querySelector('.start_timer').classList.add('hide')
        start_test(mode_type.toLowerCase())
    }, 3000)
})

const start_test = (mode) => {
    test_mode = mode
    time_taken = 0
    let min = 0
    let sec = 0
    let msec = 0
    document.getElementById("typed").focus()
    timerid = setInterval(() => {
        msec += 100;
        time_taken += 100;
        if (msec >= 1000) {
            msec = 100
            sec++
        } else if (sec >= 60) {
            sec = 0
            min++;
        }
        document.getElementById('min').innerText = min > 9 ? min : '0' + min
        document.getElementById('sec').innerText = sec > 9 ? sec : '0' + sec
        document.getElementById('msec').innerText = msec / 10
    }, 100)
    let selected = []
    if (mode === 'simple') {
        container.innerHTML = "";
        selected = simple[Math.ceil(Math.random() * simple.length - 1)].split(" ");
        selected.map((e) => { container.innerHTML += `<z>${e}</z> ` })
    } else if (mode === 'hard') {
        container.innerHTML = "";
        const selected = hard[Math.ceil(Math.random() * hard.length - 1)].split(" ");
        selected.map((e) => { container.innerHTML += `<z>${e}</z> ` })
    } else if (mode === 'harder') {
        container.innerHTML = "";
        const selected = harder[Math.ceil(Math.random() * harder.length - 1)].split(" ");
        selected.map((e) => { container.innerHTML += `<z>${e}</z> ` })
    }

    const actual = document.getElementsByClassName('text')[0].innerText.split(' ')
    const list = document.getElementsByClassName('text')[0].querySelectorAll('z')
    const typed = document.getElementById('typed')
    container.addEventListener('contextmenu', (e) => { e.preventDefault() })
    container.addEventListener('copy', (e) => { e.preventDefault() })
    typed.addEventListener('contextmenu', (e) => { e.preventDefault() })
    typed.addEventListener('paste', (e) => { e.preventDefault() })


    typed.addEventListener('keypress', (e) => {
        if (e.key === " ") {
            let l = typed.value.split(' ').length - 1;
            const lastw = typed.value.split(' ')[l];
            if (actual[l] === lastw) {
                list[l].style.color = "green";
            } else {
                list[l].style.fontWeight = "bold"
                list[l].style.color = "red";
            }
            if (l === selected.length - 1) { stop_test() }
        }
    })

}

const navigate = (page) => {
    let p = document.getElementById(page)
    first.classList.add('hide')
    second.classList.add('hide')
    third.classList.add('hide')
    p.classList.remove('hide')
}

const stop_test = () => {
    clearInterval(timerid);
    let que = container.innerText.split(" ");
    let ans = typed.value.split(" ");
    let no_of_words = 0;
    que.map((e, i) => {
        if (e === ans[i]) {
            no_of_words++;
        }
    })
    navigate('third')
    let time = time_taken / 1000
    let wpm = Math.round((no_of_words / time) * 60)
    document.querySelector('.green > span').innerHTML = wpm

    if (!(localStorage.getItem('typing-test'))) { localStorage.setItem('typing-test', JSON.stringify(topscore)) }
    let scores = JSON.parse(localStorage.getItem('typing-test'))
    if (scores[test_mode] < wpm) { scores[test_mode] = wpm }
    localStorage.setItem('typing-test', JSON.stringify(scores))

    let wpmscore = document.querySelectorAll('.wpmscore')
    scores = JSON.parse(localStorage.getItem('typing-test'))

    let top_sent = document.querySelectorAll('.topsent')

    if (scores['simple'] > 0) { top_sent[0].classList.remove('hide'); wpmscore[0].innerText = scores['simple'] }
    if (scores['hard'] > 0) { top_sent[1].classList.remove('hide'); wpmscore[1].innerText = scores['hard'] }
    if (scores['harder'] > 0) { top_sent[2].classList.remove('hide'); wpmscore[2].innerText = scores['harder'] }
}
