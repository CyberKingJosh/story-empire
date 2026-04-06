// Story data — serves chapters from the /stories directory
// In production, this would come from a database. For localhost, we use static data.

export interface Chapter {
  number: number;
  title: string;
  content: string;
  isFree: boolean;
  headerImage?: string;
  audioUrl?: string;
}

export interface Story {
  slug: string;
  title: string;
  tagline: string;
  genre: "romantasy" | "cozy-mystery" | "bl-romance" | "spicy-romance";
  coverImage?: string;
  chapters: Chapter[];
}

export const stories: Story[] = [
  {
    slug: "the-ember-throne",
    title: "The Ember Throne",
    tagline:
      "She could destroy him. And it would destroy her.",
    genre: "romantasy",
    chapters: [
      {
        number: 1,
        title: "The Dream Reader",
        isFree: true,
        content: `My name is Kael Ashford, and I read people's dreams for a living. Not by choice. The empire that conquered my homeland gave me two options at eight years old: be useful, or follow my mother into an early grave. I chose useful.

Fifteen years later, I'm still choosing it.

The dissident strapped to the iron chair was a schoolteacher before the Caeloran occupation made that profession dangerous. Now he was just another prisoner, drugged unconscious so I could press my fingers to his temples and sift through his nightmares for anything the empire could use against his friends.

His nightmare tasted like burnt copper.

I sank deeper, past the screaming surface into the architecture beneath. Every mind builds differently. This one had constructed walls of white marble with carved arches and climbing ivy. Verenthi. Unmistakably. The kind of courtyard I'd played in as a child, before the soldiers came.

My concentration almost cracked.

Almost. Fifteen years of practice doesn't crack easily.

"Anything?" The Caeloran guard behind me shifted his weight. Bored. They were always bored during readings, which was useful. Bored people don't watch closely.

"Fragments," I said. "Give me a moment."

His dreams spilled like water from a broken jar, too fast, too fractured. I caught pieces. A meeting in a wine cellar. Faces I was supposed to memorise and report. Hands passing a folded document.

I memorised the faces. I would report two of them. The other three, I would forget, the way I always forgot faces. The way I misidentified meetings. The way my reports were always just useful enough to keep me employed and just incomplete enough to keep the people who mattered alive.

I pulled out of the dream and wiped my hands on my robe. They weren't actually dirty. It just felt that way.

"Two contacts," I told the guard. "A woman who works at the harbour market and a man from the textile district. I'll include descriptions in my report."

The guard grunted and unlocked the door. "Commander wants the report by sundown."

"Which commander?"

"New one. Voss."

The name landed like a stone in still water. I'd heard it in whispers for months. Commander Aeron Voss, transferred from the northern campaigns where he'd crushed three Verenthi resistance cells in a single season. Efficient. Ruthless. The kind of Caeloran officer who didn't just enforce the occupation. He perfected it.

And now he was here. In my city. Asking for my reports.

"Sundown," I repeated. "Understood."

I walked the corridor of the detention hall with my spine straight and my expression neutral. The expression I'd perfected at eight years old, standing in a line of Verenthi children while Caeloran soldiers decided which of us were useful enough to keep. I'd been useful. I was always useful. The most gifted dream weaver of my generation, and I'd let them harness me like a draught horse because the alternative was my mother's fate.

My mother. Elena Ashford. The last Dream Speaker of Verenthos.

They made me watch.

I pushed through the detention hall's outer doors into blinding white sunlight. The heat hit my face and I stood there, letting it burn, letting it replace the cold of the reading room and the worse cold of memory.

*Fifteen years.* I'd been planning for fifteen years. Building my reputation as a loyal, precise, invaluable tool of the occupation. Feeding Caelora just enough intelligence to trust me while feeding the fragments of Verenthi resistance just enough warning to survive. Walking a wire so thin it should have cut me in half by now.

I wasn't going to let a new commander unravel what I'd built.

The summons came three hours later, while I was in the reading room of the great library, which the Caelorans had renamed the Administrative Archive and stripped of two-thirds of its contents. The remaining books were the ones they'd deemed harmless. Poetry. Agriculture. Mathematics. Nothing about dream-weaving. Nothing about Verenthi history.

Nothing they thought mattered.

They were wrong about the poetry.

"Ashford." A junior officer stood in the doorway. "Commander Voss requests your presence."

*Requests.* That was new. Commanders didn't request. They summoned.

I closed my book, a volume of sea poems by Ilaya the Wanderer, whose metaphors for dream-walking were so layered that the Caelorans read them as love poetry. Then I followed the officer through the administrative quarter.

The former palace of the Verenthi kings had been converted into Caeloran military headquarters with the subtlety of a sledgehammer. The mosaic floors were covered by Caeloran banners. The fountains ran dry. The courtyard where my mother once taught dream-weaving to children now served as a training ground where Caeloran soldiers practised with weapons forged from volcanic glass.

Every time I walked through it, I let myself feel the anger. Briefly. Like touching a flame to remind yourself it burns.

The commander's office was the old council chamber. The officer knocked.

"Enter."

The voice was lower than I'd expected. Quieter.

I walked in and stopped two paces from the desk, hands clasped at my waist in the posture of a compliant ward. I'd perfected this posture too. The slight bow of the head. The downcast eyes. The body language that said *I am yours to command* while the mind behind it said something very different.

Commander Aeron Voss sat behind a desk that was too small for him. He was reading something. My personnel file, I realised, recognising the distinctive red binding of Caeloran military records. He didn't look up immediately.

I catalogued him the way I catalogued everything: systematically. Tall. Broad through the shoulders and chest in a way that suggested real strength, not just drill-ground fitness. Sharp jaw, dark hair cropped close, campaign scars across both forearms. A burn scar on his left shoulder, visible where his uniform collar sat open. Eyes so dark they seemed to absorb the light in the room.

When he looked up, those eyes weren't what I expected.

They were tired.

Not the tiredness of a long day. The tiredness of a man carrying something heavy for a long time. I knew that tiredness. I saw it in my own face every morning.

"Kael Ashford," he said. Not a question.

"Commander."

"Sit."

I sat. The chair was positioned precisely, far enough from the desk that I couldn't read anything on it, close enough that he could watch my face. Standard interrogation geometry. He'd arranged this room with care.

"Your reports are exceptional." He turned a page in my file. "Dream-readings with ninety-three percent intelligence yield. The highest accuracy rate in the western territories."

"I take my work seriously, Commander."

"You were raised in the Caeloran court. Educated at the Academy of Letters."

"Yes."

"Your mother was Elena Ashford."

My breath didn't catch. My fingers didn't tighten. My expression didn't flicker. I gave him nothing.

"Yes."

He watched me for a moment too long. Not suspicious, exactly. Something else. Something I couldn't read, and I could read almost anyone.

"I've requested you specifically," he said. "Your skills are wasted on routine dissident screenings. I need a reader who can handle sensitive assignments. Direct reports to me. No intermediary officers."

The wire I walked just got thinner.

"I'm honoured, Commander."

"Don't be." He closed my file. "The work will be harder. The subjects will be more dangerous. And I have higher standards than your previous commanders."

"I look forward to meeting them."

Was that too much? Too sharp? I watched his face for a reaction. His mouth moved, not quite a smile, something closer to recognition, as if he'd heard the blade beneath my courtesy and found it interesting rather than threatening.

"You'll begin tomorrow. Report here at dawn." He stood, signalling dismissal. "That's all, Ashford."

I rose, inclined my head, turned toward the door.

And then I felt it.

It was like walking through a cobweb, gossamer-thin and nearly invisible, but once you'd felt it, unmistakable. A tendril of dream energy, loose and undirected, drifting through the room like smoke from a candle someone had forgotten to snuff.

Dream energy. In a waking room. In broad daylight.

Dream energy didn't exist in the waking world unless someone was weaving. And the only dream weaver in this room was supposed to be me.

I stopped. One heartbeat. Two. I felt the energy brush against my awareness, tasting of iron and ash and something beneath, something raw and vast and barely controlled, like a fire burning in a sealed room.

Ember-touched. The energy was ember-touched.

That was impossible.

Ember magic and dream magic were opposites. Caelora had spent a century refining ember magic specifically to overpower and replace dream-weaving. You couldn't wield both. Everyone knew this. It was doctrine. It was law. It was the foundation of everything Caelora had built.

And Commander Aeron Voss was sitting three metres behind me with dream energy leaking from him like blood from an untreated wound.

I walked out without turning around. I walked down the corridor. I walked through the courtyard where soldiers trained. I walked until I reached the street and then I kept walking, past the market, past the dry fountain, past the boarded-up entrance to the library-temple where my mother died.

I walked until my hands stopped shaking.

Then I stopped, and I stood on the cobblestones of a Verenthi street, and I thought very carefully about what I now knew.

Commander Aeron Voss. The man assigned to oversee me. The man who'd crushed three resistance cells. The most dangerous Caeloran officer in the western territories. He was a dream weaver. An impossibility. An abomination by his own people's standards.

If I reported him, he'd be executed. Publicly, probably, given his rank. The scandal would destabilise Caeloran command in the region for months. It would create exactly the kind of chaos the resistance needed.

All I had to do was tell the right person, and my enemy would be destroyed.

But.

But if I reported him, I'd have to explain how I knew. How I'd sensed dream energy with the precision of someone who does more than just read dreams. Someone who weaves them. My cover, my careful, patient, fifteen-year cover, would burn along with his.

And I'd be dead by the following sunrise.

I stood in the street while the sun hammered down and the market noise washed around me, and I held this impossible knowledge like a live coal in my bare hands.

I could destroy him. And it would destroy me.

Or.

I could keep his secret. And he would owe me in ways he couldn't yet imagine.

The sun was dropping toward the snow-capped peaks of the western mountains, turning the sky the colour of an open wound. I turned my face toward it and let myself, for the first time in years, smile.

This changed everything.`,
      },
      {
        number: 2,
        title: "The First Assignment",
        isFree: false,
        content: `Dawn in Verenthos smelled like jasmine and woodsmoke, even now. Fifteen years of occupation hadn't killed the jasmine vines that climbed the old quarter walls, and the bread sellers still lit their ovens before the sun crested the mountains. Small rebellions. The empire could take our sovereignty, our library-temples, our dream speakers. It couldn't kill the jasmine.

I stood outside the former palace at first light, smoothing the front of my grey ward's robe, running through scenarios. I'd been up since the third bell, which meant I'd slept maybe two hours. The rest of the night I'd spent lying rigid on my cot, replaying that gossamer thread of dream energy drifting through Voss's office.

Iron and ash. That was what his power tasted like.

Mine tasted like sea salt and old paper. Every weaver's signature was different, as distinct as a voice. Elder Dayo had taught me that when I was twelve, in whispered lessons beneath the ruins of the south library-temple. He'd also taught me how to mask my own signature so thoroughly that even another weaver would miss it unless they knew exactly what to look for.

Voss wasn't masking anything. His energy leaked like water through cracked stone. Which meant one of two things: either he didn't know he was doing it, or he didn't know it was something that needed hiding.

Both possibilities frightened me.

The palace doors opened and a clerk waved me through. I walked the familiar route past the covered fountains and through the colonnade, letting my sandals snap against the mosaic floor in the precise, unhurried rhythm of a woman with nothing to hide.

Voss was already at his desk. The same desk, the same room, but the light was different at dawn. It poured through the eastern windows in long amber columns and caught the dust motes that drifted through the air. In that light, the campaign scars on his forearms looked like script. Like someone had tried to write a message on his skin.

"Ashford. You're early."

"You said dawn, Commander."

"I said dawn. It's a quarter before dawn."

"I prefer to be thorough."

He looked at me then. Really looked, not the evaluating scan from yesterday but something more direct, more searching. I held his gaze and gave him the blankness I'd been practising since childhood. It was my best mask, the one that said *there is nothing here worth examining.*

"Sit," he said. "We have work."

I sat. He pushed a leather folder across the desk. I opened it and found three sheets of thick Caeloran parchment, each bearing a name, a sketch, and a summary of alleged crimes.

"Three subjects," he said. "Brought in overnight. The first two are standard. Harbour workers suspected of smuggling messages for the resistance."

"And the third?"

He paused. The pause lasted half a breath too long, and in that half breath I felt it again. The faintest tremor of dream energy, like a plucked string vibrating at the edge of hearing. His jaw tightened as if he'd felt it too.

"The third is a Caeloran officer," he said.

I kept my face still. Caelorans didn't get dream-read. That was the whole architecture of the occupation: Verenthi minds were open territory, Caeloran minds were sovereign. Reading a Caeloran officer would require authorization from the provincial governor at minimum.

"I have the authorization," Voss said, as though he'd followed my thoughts. He pulled a sealed document from his desk drawer and set it beside the folder. The governor's seal, heavy red wax stamped with the double flame of Caelora. "Captain Petros Dane. Forty-two. Twelve years in the occupation forces. His commanding officer reported erratic behaviour. Paranoia. Night terrors."

"Night terrors aren't a crime."

"They are when you start talking in your sleep about things you shouldn't know." His eyes held mine. "Classified things. Troop movements. Intelligence reports he never had access to."

The implications stacked in my mind like bricks. A Caeloran officer dreaming classified information he'd never seen. There were only a few explanations. Someone was weaving dreams into him, planting information to turn him into an unwitting messenger. Or he was accessing the dream realm on his own, drifting through other people's sleeping minds and bringing back what he found.

Either way, someone was dream-weaving. And Voss wanted me to find out who.

"When do I begin?" I asked.

"Now. Captain Dane is in holding cell four. I'll observe the reading."

My pulse kicked. Commanders didn't observe dream readings. They received reports. The reading itself was intimate, invasive, and profoundly boring to watch from the outside. There was no reason for Voss to be in that room unless he wanted to watch me specifically.

Unless he wanted to watch how I worked.

"Of course," I said. "Standard protocol allows the subject four hours of unmedicated sleep before a reading. Has Captain Dane been given that?"

"He has."

"Then I'm ready."

We walked the corridor together, his boots heavy on the stone, my sandals near-silent. The detention wing smelled the way it always did. Damp stone, iron, the sour chemical tang of the sedation draughts. I'd walked this route hundreds of times. It never stopped making my stomach clench.

"You've been doing this for how long?" Voss asked. His voice was conversational, which made me trust it less.

"Eleven years. I was certified at twelve."

"Twelve." Something moved behind his expression. "That's young."

"The empire was in a hurry."

He glanced at me. I kept my eyes forward.

"I've read your full record," he said. "Four hundred and thirty-seven readings. Zero complaints from your subjects."

"I don't damage the minds I read. It's not because I'm kind. Damaged minds produce unreliable intelligence."

"That's what you wrote in your certification essay."

"You read my certification essay?"

"I told you. Full record."

We reached holding cell four. The guard outside saluted Voss and unlocked the door. The room beyond was the same as every reading room I'd ever worked in. Stone walls. Iron chair. A narrow table with leather restraints that smelled of old sweat. A single window set too high to see anything but sky.

Captain Dane sat in the iron chair, already restrained. He was a thick man with a red face and hands that shook even in the restraints. His eyes darted to us when we entered, and I saw it immediately. The look. The one that said *I don't know what's happening to me and I'm terrified.*

I'd seen that look on Verenthi prisoners a thousand times. Seeing it on a Caeloran officer was new.

"Captain," I said, keeping my voice level. "My name is Kael Ashford. I'm a dream reader. Do you understand what that means?"

"I know what you are." His voice was rough, like he'd been shouting. Or screaming. "I'm not some Verenthi dissident. I'm a captain in the emperor's army."

"Yes, sir. This reading has been authorised by the provincial governor."

"This is a mistake. I haven't done anything."

"The reading will confirm that," I said. "It's painless. I'll place my hands on your temples. You'll feel pressure, possibly a sensation of falling. Do not resist. Resistance makes the process longer and less comfortable for both of us."

Behind me, Voss moved to the corner of the room. I heard his chair scrape against stone as he sat. Watching. I could feel his attention on my back like heat from a furnace.

I placed my fingers against Captain Dane's temples. His skin was clammy. Hot.

Then I sank.

Dane's mind was a mess. Not the structured architecture of a trained thinker, not the chaotic sprawl of a dreamer. This was wreckage. Walls half-built and half-collapsed. Corridors that looped back on themselves. Dark water rising in places it shouldn't be.

Someone had been in here.

I moved through the wreckage carefully, cataloguing damage. Whoever had woven into Dane's dreams was skilled but careless. They'd left traces the way a burglar leaves muddy footprints. Threads of foreign dream energy clinging to the shattered walls of his subconscious.

The foreign energy tasted like copper and smoke.

Not Voss. Different signature entirely. Someone else. Someone I didn't recognise.

I pushed deeper, following the threads. They led me through a collapsing gallery of Dane's memories, past his childhood on a Caeloran farm, past his military training, past a woman's face that recurred with painful frequency. His wife, probably. Or someone he'd lost.

There. A knot of foreign energy, thick as rope, coiled around a cluster of memories that didn't belong to Dane at all. Troop movements. Supply routes. The location of a weapons cache in the old quarter.

Someone had woven these into him. Planted them like seeds in soil, knowing they would grow into his speech, his nightmares, his waking babble.

I could see exactly how it was done. The technique was old. Pre-war. The kind of deep weaving that the library-temples had taught before the occupation burned them.

Which meant the weaver was Verenthi.

Which meant the resistance had a dream weaver I didn't know about.

I pulled out of Dane's mind with careful precision, extracting myself layer by layer to avoid leaving traces of my own. When I opened my eyes, the reading room was painfully bright. Dane was unconscious, his chin on his chest, drool on his uniform collar.

Voss leaned forward in his chair.

"Well?"

I turned to face him. My hands were trembling, so I pressed them flat against my thighs where he couldn't see.

"Captain Dane's dreams have been compromised," I said. "Foreign dream energy has been woven into his subconscious. The memories he's been speaking aloud were planted."

"By whom?"

"I don't know yet. The weaver's signature is unfamiliar. But the technique is sophisticated. This isn't a novice."

Voss stood. He crossed the small room in two strides and stopped close enough that I had to tilt my chin up to meet his eyes. Close enough that the dream energy leaking from him washed over me like a wave, iron and ash and that raw, vast power barely held in check.

My breath wanted to catch. I didn't let it.

"Can you find them?" he asked.

"Maybe. With access to Dane for follow-up readings and time to trace the signature, I might be able to narrow it down."

"You'll have both."

He was watching me with that searching intensity again, and I realised something that made the ground feel unstable beneath my feet. He wasn't just looking for competence. He was looking for recognition. He wanted to know if I could feel what he was.

I gave him nothing. Flat eyes. Steady hands. A useful tool, waiting for instruction.

"Is there anything else you can tell me?" he asked.

*Yes,* I thought. *I can tell you that your dream energy is leaking through your skin right now. I can tell you that every weaver within a hundred yards could sense you if they knew what to look for. I can tell you that you are the most dangerous secret in this building, and you don't even know how to hide it.*

"Not at this time, Commander."

He held my gaze for three more heartbeats. Then he stepped back.

"Tomorrow. Same time. I want a full analysis of the weaving technique and any identifying markers."

"Understood."

I walked out of the reading room, down the corridor, through the courtyard. The sun was fully up now, burning white through the haze. I made it to the street before I let myself think about what I'd found.

A Verenthi dream weaver, operating in the city, powerful enough to plant false memories in a Caeloran officer's mind. This wasn't some hedge-witch with a scrap of inherited talent. This was someone trained. Someone who had survived the purge.

Someone Elder Dayo hadn't told me about.

The bread sellers were calling their wares, filling the morning air with the smell of sesame and honey. I bought a flatbread because it would look strange not to, and I ate it as I walked toward the old quarter, tearing off pieces and chewing without tasting.

Elder Dayo's house was a crumbling villa behind the dead fountain in the scholars' district. I knocked three times, paused, knocked twice. The door opened a crack.

"It's barely past dawn," Dayo said. His voice was like old leather, cracked and warm. "You only come this early when something's wrong."

"Something's wrong."

He opened the door. I stepped inside. The villa smelled like it always did: incense, old books, and the bitter coffee that Dayo brewed strong enough to wake the dead.

"There's a dream weaver in the city," I said. "Trained. Powerful. They've been weaving into a Caeloran officer's dreams, planting intelligence. And I don't know who they are."

Dayo lowered himself into his chair by the cold hearth. His movements were slow, deliberate, the careful performance of frailty that had kept him alive for fifteen years. His eyes, though, were sharp as glass.

"You're sure?"

"I read the officer myself. The technique is pre-war. Library-temple trained. Dayo, who is this? You taught me there were no other weavers left."

"I taught you," he said slowly, "that there were no other weavers left that I could vouch for."

The distinction hit me like cold water.

"You knew."

"I suspected. There have been rumours. Whispers in the dream realm, patterns I couldn't trace. Someone moving through the edges, careful but not invisible. Not to someone who knows where to look."

"And you didn't tell me?"

"I'm telling you now."

"Because I found out on my own."

He poured two cups of coffee from the pot on the hearth. Handed me one. The cup was warm, chipped, painted with faded geometric patterns that had once marked it as property of the library-temple.

"This weaver," Dayo said. "The one who touched the officer's dreams. Their signature. What did it taste like?"

"Copper and smoke."

Something shifted in his face. A tightening around his eyes, a stillness in his hands that hadn't been there a moment ago.

"You recognise it," I said.

"I recognise the description." He drank his coffee. Set the cup down. Folded his hands. "Kael. The new commander you've been assigned to. Tell me about him."

The change of subject was so abrupt it felt like a door slamming. I stared at him.

"Why?"

"Because an old man is asking. Humour me."

"Commander Aeron Voss. Transferred from the northern campaign. Efficient. Dangerous. He's assigned me to work directly under his authority."

"And?"

I held his gaze. Dayo had taught me everything I knew. He had kept me alive, kept me sane, kept the ember of my mother's legacy burning when the empire tried to snuff it out. I trusted him more than anyone breathing.

But I'd kept secrets from him before, and he'd kept them from me. That was the currency we traded in.

"And he's watching me closely," I said. "More closely than a commander watches a tool."

Dayo nodded slowly. "Be careful, child. The board is changing and we cannot see all the pieces."

"That's not an answer."

"No," he agreed. "It isn't."

I left his house with more questions than I'd arrived with and the bitter taste of coffee on my tongue. The morning heat was building, pressing down on the narrow streets like a hand. I turned toward home, walking fast, my mind running calculations.

A rogue dream weaver targeting Caeloran officers. A new commander with impossible abilities and an agenda I couldn't read. An old teacher who knew more than he was sharing.

And tomorrow, I had to walk back into that reading room, stand three feet from a man whose power I could taste on the air, and pretend I noticed nothing.

I was halfway to my quarters when I felt it. A ripple in the air, subtle as breath on the back of my neck. Dream energy, faint but distinct, brushing against my awareness and withdrawing.

Someone was watching me.

Not Voss. Wrong signature. Not the copper-and-smoke weaver from Dane's mind either. This was something else entirely. Wild. Unstructured. Like wind moving through an open doorway.

I stopped walking. I stood in the middle of the street, surrounded by market noise and morning sun, and I reached out with the part of my mind that I never, ever used in public.

Nothing. The presence was already gone. Just a trace, a footprint in wet sand, already filling with water.

But the signature lingered on my skin like perfume, and it tasted like nothing I'd ever encountered. Desert sand and lightning. Something ancient and untamed.

Something from the Dreaming Waste.

I walked the rest of the way home with my hands in fists and a new fear settling into my bones, cold and certain as stone.

The game I thought I was playing had more players than I knew.`,
      },
      {
        number: 3,
        title: "The Weaver and the Waste",
        isFree: false,
        content: `Three days. Three readings of Captain Dane's shattered mind. Three mornings standing in that stone room with Voss at my back, his dream energy pressing against my awareness like someone leaning on a bruise.

By the third day, I'd mapped the full extent of the damage to Dane's subconscious. Whoever the copper-and-smoke weaver was, they'd been in his mind at least half a dozen times over several weeks, layering false memories like sediment. The work was elegant and vicious. Library-temple trained, without question. And they were still active. Fresh threads appeared between my readings, which meant they were weaving into Dane even now, even in a secure Caeloran holding cell.

That should have been impossible. Weaving required proximity. You couldn't enter someone's dreams from across a city.

Unless you could dream-walk.

I was thinking about this as I sat in Voss's office on the evening of the third day, writing my report by lamplight. He sat across from me, reading dispatches. The room was quiet except for the scratch of my pen and the occasional rustle of his papers.

"You're frowning," he said.

I looked up. "I'm concentrating."

"You concentrate with your jaw clenched and your left hand flat on the table. You frown when something doesn't fit."

The accuracy of the observation made my skin prickle. Three days. He'd been watching me for three days with the same meticulous attention he probably gave troop deployments, and he'd learned to read my body the way I read dreams.

"Something doesn't fit," I admitted, because denying it would only sharpen his attention. "The weaver is still accessing Dane. Despite isolation. Despite the wards."

"What does that tell you?"

"That they're either inside this facility, which I'd have sensed, or they're operating at a range that shouldn't be possible."

He set down his dispatch. "What range is possible?"

Careful. This was a line. A dream reader knew theory. A dream weaver knew practice.

"Standard doctrine says proximity is required," I said. "Within the same room. The same building at most."

"Standard doctrine."

"Yes."

"And what does non-standard doctrine say?"

I met his eyes. The lamp threw shadows across his face, deepening the hollows beneath his cheekbones. He looked tired again. He always looked tired by evening, as if the effort of holding himself together throughout the day cost him something visible.

"Non-standard doctrine was burned with the library-temples, Commander."

"All of it?"

"All of it."

He held my gaze. I held his. The air between us thickened with everything neither of us was saying, and his dream energy pulsed once, a slow expansion like a heartbeat, iron and ash filling the room.

I didn't react. I was granite. I was nothing.

"Finish your report," he said.

I finished the report. I wrote down exactly what a loyal dream reader would write: technical observations, clinical language, no speculation beyond what the evidence supported. I left out the texture of the foreign weaver's signature. I left out the dream-walking theory. I left out everything that mattered.

And then I went home, and I didn't sleep, because sleeping meant dreaming, and dreaming meant vulnerability.

---

The fourth morning broke grey and heavy, clouds piling against the mountains like siege towers. Rain was coming. In the old days, Verenthi dream weavers would gather during storms because lightning charged the dream realm, made it vivid and close. My mother used to dance in the rain.

I was crossing the market square when Amira found me.

"Kael." She fell into step beside me, her Caeloran-style robes crisp and pressed, her dark hair pinned in the elaborate braided crown that the empire's administrators favoured. She smelled like rose oil and parchment. She always had, even as a girl.

"You look terrible," she said.

"Thank you, Amira."

"I mean it. When did you last sleep?"

"Recently enough."

She caught my arm and pulled me to a stop beside a spice merchant's stall. Saffron and cardamom and dried chili hung in bundles above our heads, filling the air with a warmth that was almost painful in its familiarity.

"Talk to me," she said. "You've been avoiding the residence for days. You missed the concert last night."

"I've been working."

"With the new commander." Her voice dropped. "People are talking about that, Kael."

"People always talk."

"They're saying he asked for you specifically. That he's running some kind of special operation and you're his personal reader." She leaned closer. "They're saying he's different from the others."

"Different how?"

"I don't know. Quieter. Less cruel. He reinstated water access to the south quarter last week. Did you know that?"

I hadn't known that. The south quarter had been on restricted water rations for two years as collective punishment for a resistance bombing. Reinstating access would have required Voss to overrule the previous commander's order, which would have made him enemies among the hardliners.

"Why would he do that?" I asked.

"Maybe he's not what you want him to be." Amira's eyes were soft. Sincere. She genuinely believed what she was saying. "Maybe not all of them are monsters, Kael."

My throat tightened. Not with anger. Something worse. Sadness, maybe. For the girl Amira had been, running through library-temple corridors with ink on her fingers. For the woman she'd become, standing in Caeloran silks and calling our conquerors reasonable.

"I have to go," I said. "I'll come to the next concert."

"Promise?"

"Promise."

I left her at the spice stall and walked the rest of the way to the palace with her words sitting in my chest like a splinter. *Maybe he's not what you want him to be.* That was the problem, wasn't it? I wanted Voss to be simple. A villain. A tool of the empire I could use and discard. Every piece of evidence that complicated that picture was an obstacle to the plan I'd been building for fifteen years.

The reading room was cold when I arrived. Voss was already there, standing instead of sitting, his arms crossed over his chest. No file on the table. No Captain Dane in the iron chair.

"Dane is dead," he said.

The floor tilted beneath me. Not physically. The sensation was in my mind, the kind of lurch that comes when reality shifts under your feet.

"When?"

"Last night. In his cell. The guards found him at the fourth bell. No marks. No signs of struggle. His heart simply stopped."

*His heart didn't simply stop,* I thought. *Someone wove his heart into stopping.*

I said nothing. I watched Voss's face and saw there what I hadn't expected to find: real anger. Not the cold, administrative displeasure of an officer losing an asset. Something hotter. Something personal.

"I want you to examine the body," he said.

"Commander, dream reading requires a living mind."

"I'm not asking you to read him. I'm asking you to examine him. For traces. Residual energy. Anything the weaver left behind."

This was the line again, sharper now, thinner. What he was asking required abilities beyond standard reading. He was asking me to sense dream energy on a corpse, which meant he knew that dream energy could linger after death, which meant he knew more about dream-weaving than any Caeloran commander should.

He was testing me. Or trusting me. Or both.

"I can try," I said.

They'd laid Dane in the infirmary, on a stone slab, covered with a military shroud. When I pulled the shroud back, his face was peaceful. More peaceful than it had been in life. Whatever terror the weaver had planted in him, death had finally ended it.

I placed my hands on his temples the way I would for a reading, and I let my awareness sink.

There was nothing to sink into. A dead mind is silence. Not empty silence but thick silence, like water filling a cave. No architecture. No dreams. No fear.

But there were traces.

Faint threads of foreign dream energy clinging to the inside of his skull like cobwebs in an abandoned house. Copper and smoke. The same signature as before. And something else beneath it, something I hadn't noticed in the living readings, masked by the noise of Dane's terror.

A second signature.

Faint. Almost invisible. But there, woven beneath the first like a thread hidden inside a rope. This one tasted like nothing I could name. Clean and sharp, the way air tastes before a storm.

Two weavers. Not one. Two.

I pulled back and opened my eyes. Voss stood at the foot of the slab, watching me.

"Two signatures," I said, before I could stop myself.

His expression didn't change. But something behind his eyes shifted, the way light shifts when a cloud passes.

"Explain."

"The copper-and-smoke signature I've been tracking. That's the primary weaver, the one who planted the false memories. But there's a second presence beneath it. Subtler. Whoever it is, they were watching. Observing the first weaver's work without interfering."

"Could the second signature have killed him?"

"I don't know. Maybe. A precise enough weave could stop a heart. But it would take extraordinary skill."

He was quiet for a long time. The infirmary was cold, the stone walls sweating moisture in the pre-storm humidity. Somewhere distant, thunder rolled.

"Ashford," he said. "How do you know what two dream signatures feel like?"

The question hit me like a fist to the sternum.

Stupid. Stupid. I'd been too precise. Too detailed. A dream reader sensed the general presence of dream energy. They didn't differentiate signatures. They didn't taste individual weavers. That level of sensitivity required being a weaver yourself.

I'd walked straight into it.

"Training," I said. My voice was steady. Fifteen years of lying made it steady. "The Academy taught signature differentiation as advanced theory. I've applied it practically."

"The Academy teaches that signature differentiation is theoretically possible but has never been demonstrated in a non-weaver."

"I've always been exceptional, Commander."

His mouth twitched. Not a smile. That same recognition from our first meeting, the blade beneath courtesy.

"Yes," he said. "You have."

He crossed to the door and closed it. The latch clicked with a sound that felt final. He turned back to me, and the room contracted. Just the two of us and the dead man between.

"I'm going to say something," he said. "And you're going to listen without performing."

"I'm not performing."

"You've been performing since the moment we met. Every gesture. Every word. The way you hold your hands, the way you pitch your voice. You are the most precisely controlled person I have ever encountered, and I have spent my career studying people who hide things."

"That's an interesting observation, Commander."

"Stop."

The word was quiet. No force behind it. But his dream energy surged, filling the room like floodwater, iron and ash and that raw, terrible power that tasted like a sealed furnace. My skin prickled. My awareness rang like a struck bell.

He felt it. He saw my reaction, the involuntary widening of my eyes, the way my breath caught for a fraction of a second before I could control it.

"You can feel that," he said. Not a question.

I could lie. I could double down on the Academy training explanation. I could perform confusion, ask him what he meant, buy myself time.

Or I could acknowledge what we both already knew and take control of this conversation before he did.

"Yes," I said. "I can feel it."

"How long have you known?"

"Since our first meeting. You leak. Your energy is uncontrolled, undirected. Every weaver within range could sense you."

Something crossed his face. Not fear, exactly. The shadow of fear, quickly mastered. "Every weaver. Meaning you."

"Meaning me."

Thunder cracked outside, closer now. Rain began to fall, heavy and sudden, hammering the infirmary's high windows. The storm light turned everything silver.

"So," he said. "We're both dead if this leaves this room."

"Yes."

"You've known for three days and you didn't report me."

"Reporting you would require explaining how I knew. Which would require explaining what I am. Which would put me on the same execution pyre they'd build for you."

"Mutual destruction."

"Mutual preservation," I said. "If we're smart about it."

He studied me. I studied him. The rain fell and the thunder rolled and somewhere in the city, a bell was ringing, and neither of us spoke for a long time.

"My mother was from the borderlands," he said finally. "The territories between Caelora and Verenthos. She never told anyone what she was. She never trained me. I didn't understand what was happening to me until I was sixteen and I wove into my commanding officer's nightmare by accident."

"And he didn't notice?"

"He noticed he slept better after that. He didn't notice why."

"You've been hiding this for ten years."

"Badly, apparently."

"Very badly. If I were you, I'd be terrified."

"I am terrified." He said it simply, the way you'd say *I am tired* or *I am hungry.* A fact, stated without decoration. "I have been terrified every day for ten years, Ashford. You don't have a monopoly on fear."

The honesty of it cracked something in my chest. I didn't want it to. I wanted to stay granite, stay nothing, stay the useful tool with no interior life. But he was standing there in the storm light, telling me he was afraid, and for a moment he wasn't Commander Voss, enforcer of the occupation. He was a man with an impossible secret, and he was alone with it, the way I'd been alone with mine.

I sealed that crack immediately. Sentiment was a luxury I couldn't afford.

"Here's what I propose," I said. "We continue as we are. Commander and reader. You keep my secret. I keep yours. We investigate this rogue weaver together, because they're a threat to both of us."

"And?"

"And when the time comes to use what we know about each other, we'll negotiate."

"That's not reassuring."

"It's not meant to be. It's meant to be honest."

The rain was easing. The thunder retreated toward the mountains, grumbling. Voss looked at me for a long time, and then he nodded once.

"Tomorrow," he said. "Dawn. We have a rogue weaver to find."

I left the infirmary and walked into the rain. Warm rain, monsoon rain, the kind that soaked through fabric in seconds and turned the red earth streets into rivers. I let it wash over me and I did not let myself feel relief.

Relief was premature. I'd revealed myself to the most dangerous man in the city. I'd made a pact with my enemy based on nothing but mutual vulnerability.

And somewhere in this city, two dream weavers were operating in the shadows, one of whom could kill a man through his dreams.

I was still thinking about this when the woman appeared.

She stepped out of a side alley like she'd been waiting for exactly this moment, which she probably had. She was tall, lean, wrapped in layers of bleached linen that were already soaked through. Her hair was a crown of tight coils, and her skin was weathered the deep bronze of someone who'd spent a lifetime under desert sun. Gold rings climbed both ears. A staff of pale wood rested against her shoulder.

She looked at me and grinned, wide and sharp and completely unafraid.

"Kael Ashford," she said. "I've been looking for you."

I went still. My hand dropped to the small blade I kept in my belt, a reflex so practiced it was automatic.

"Who are you?"

"My name is Zuri." She said it like it should mean something. When my expression didn't change, she laughed. "Oh, they really did burn everything, didn't they? You library children don't even know the old names anymore."

"I know plenty of old names."

"Not mine. I'm from the Waste, sister. The Dreaming Waste. I walked here through the dream realm, which is exactly as unpleasant as it sounds, because something is happening in this city that is going to get a lot of people killed."

"You dream-walked into the city."

"Three days ago. Took me a week of walking, most of it sideways through nightmares I'd rather forget." She tilted her head, studying me with eyes that caught the grey storm light and threw it back like mirrors. "You felt me, didn't you? In the market square. That little brush of attention. I wanted to see what you were before I introduced myself."

The desert-sand-and-lightning signature. The presence I'd felt four days ago, wild and untamed.

"What I am is none of your business."

"It's exactly my business. You're a weaver pretending to be a reader, working for an empire that would kill you if it knew. And you've just spent three days poking at the work of a weaver who is considerably less friendly than I am."

"You know who the copper-and-smoke weaver is?"

Zuri's grin faded. For the first time, something serious moved behind her eyes, something old and heavy and afraid.

"I know what they are," she said. "And that's worse. That Caeloran officer they killed? He was practice. A test run. Whatever they're building toward, it's bigger. And it has something to do with the Ember Throne."

The rain stopped. Just like that, the way monsoon storms do, cutting off as if someone had closed a valve. The sudden silence was enormous.

"I need your help, Kael Ashford," Zuri said. "And you need mine. And I suspect we both need that leaking furnace of a commander you've been circling, though I'd rather eat sand than admit it."

"You can sense him?"

"Sister, I could sense him from the Waste. Why do you think I'm here? When a Caeloran starts weaving with that much raw power, the dream realm notices. When two more weavers start circling each other in the same city, the dream realm pays attention. And when someone starts killing through dreams?" She leaned close, and her breath smelled like desert sage and ozone. "The dream realm wakes up."

A chill ran through me that had nothing to do with wet clothes.

"What do you mean, wakes up?"

Zuri straightened. She planted her staff on the cobblestones and looked up at the clearing sky, where the first stars were appearing through the torn clouds.

"Come find me tomorrow night. The abandoned temple on the south ridge, the one with the cracked dome. Bring your furnace commander if you trust him enough. Don't bring him if you don't." She started walking backward into the alley. "But come, Kael. Because what's happening here isn't politics. It isn't resistance. It's something that hasn't happened in three hundred years, and the last time it did, it burned a kingdom to ash."

She turned and walked into the shadows, and between one step and the next, she was gone. Not hidden. Not running. Gone, the way a dream dissolves when you open your eyes.

I stood alone on the wet street, rain dripping from my hair, staring at the empty alley. Then I looked down. Where Zuri's staff had rested against the cobblestones, a single scorch mark glowed faintly orange, like an ember refusing to die.

I pressed my boot against it. The heat soaked through the leather sole.

Real. Whatever Zuri was, whatever she could do, it was real.

I walked home through streets that steamed in the aftermath of the storm, and I did not sleep that night either.`,
      },
      {
        number: 4,
        title: "The Bleeding",
        isFree: false,
        content: `I lasted until the second night without sleeping. By the third, my body made the decision for me.

I'd gone to my quarters after the dawn briefing with Voss, intending to wash, change, eat something. Instead, I sat on the edge of my cot to unlace my sandals and the world tilted sideways and swallowed me whole.

I dreamed.

In the dream, I stood in my mother's library-temple. Not the ruin it was now but the real one, the living one, the way it existed in the memories I guarded like a miser guards gold. Sunlight poured through the latticed windows and painted geometric shadows on the mosaic floor. The shelves stretched upward, three stories of scrolls and bound volumes, and the air smelled like cedar and lamp oil and the faint electric sweetness of dream energy.

My mother stood at the central reading table, her back to me. Tall. Slender. Her hair in long coils down her back, the way Verenthi scholars wore it before the occupation made that dangerous. She was writing something, her pen scratching softly against parchment.

"Mama," I said.

She didn't turn. She never turned, in these dreams. Fifteen years and she never turned.

But this time, someone else did.

Aeron Voss stood by the eastern windows, half-lit by the geometric shadows, looking at the library with an expression I'd never seen on his face. Not hunger, not calculation. Wonder. Pure, unguarded wonder, the kind that belongs to children encountering something miraculous for the first time.

He shouldn't have been here. This was my dream, my private architecture, the place I'd built in my sleeping mind to house everything I refused to lose. No one entered here. Not even Elder Dayo, who'd taught me to construct it.

"What is this place?" Voss said.

His voice sounded wrong. Too present. Too real. Dreams have a quality to them, a softness at the edges, a faint luminescence that marks them as constructed. His voice cut through that softness like a blade through silk.

He was really here. Not a figment of my dreaming mind. Aeron Voss, somehow, impossibly, was standing inside my dream.

Panic hit me like a wall of cold water. I reached for control, for the architecture, for the levers and walls that let me shape this space. I could feel them, but they were sluggish, waterlogged. My two nights without sleep had left me too depleted to respond with any speed.

"Get out," I said.

He turned to me. His eyes widened. "Ashford?"

"Get out of my dream. Now."

"I'm not." He looked around, and I watched realisation crawl across his face. "This isn't my dream."

"No. It isn't."

"I was asleep in my quarters. I was dreaming about... something else. And then I was here." He looked at the bookshelves, at the latticed windows, at my mother's back where she stood writing, unchanging, untouchable. "Where is here?"

I should have thrown him out. I had the skill. Even depleted, I could have collapsed the architecture, ejected him back to his own sleeping mind, rebuilt afterward. It would have cost me. Every major weave costs a memory, and collapsing an architecture this complex would cost a significant one. But I should have done it anyway.

Instead, I watched him walk toward the shelves. He reached out and touched the spine of a book, and his fingertips came away glowing faintly, dusted with dream energy the colour of old gold.

"These are real," he said. "These aren't constructed. These are actual memories."

"Yes."

"You built a library inside your own mind."

"My mother built it. I maintain it."

His hand fell to his side. He turned to look at the figure at the reading table, and something in his face shifted. Softened. He understood what he was looking at without being told.

"That's her," he said. "Elena Ashford."

"Don't say her name."

"I'm sorry."

The words landed strangely. Not a social reflex, not the practiced condolence of someone who's learned the formula. He said it the way he'd said *I am terrified* in the infirmary. A fact. Simple and bare and true.

The crack in my chest opened again. Wider this time.

"How did you get here?" I asked. "You said you weren't weaving."

"I wasn't. I was sleeping. Dreaming about the northern campaign, the outpost at Kerran Ridge. Standard nightmare. And then the walls of the dream dissolved and I was standing in a corridor I didn't recognise, and I followed it, and it led here."

"A corridor."

"Stone. Mosaic floor. Geometric patterns. It looked like this building."

My blood went cold. Not metaphorically. The sensation was physical, a freezing rush from my scalp to my fingertips, because I knew what he was describing. Elder Dayo had taught me the theory when I was fourteen, and I'd dismissed it as myth, as romance, as the kind of story weavers told to make their craft seem more mysterious than it was.

The Binding.

When two dream weavers become emotionally entangled, their dreams begin to bleed together. A corridor forms between their sleeping minds, invisible at first, then undeniable. They see each other's memories. They feel each other's emotions. It cannot be undone.

Dayo had called it the deepest intimacy two weavers could share. He'd also called it a trap.

"You need to leave," I said. "Right now. Wake yourself up."

"How?"

"Pain works. Bite your tongue. Pinch yourself. Anything to shock your body into waking."

"Why? What's happening?"

"Something that cannot happen. Wake up, Voss. Now."

He must have heard something in my voice, some edge of genuine fear that cut through all my masks, because he didn't argue. He closed his eyes. His image flickered, the way a candle flame stutters in a draft. Then he was gone, and I was alone in the library with my mother's ghost.

I collapsed the dream. I paid for it with the memory of a summer afternoon, age six, playing in a courtyard I could no longer picture. Gone. A hole in my history, clean and permanent.

I woke gasping, tangled in my sheets, my skin damp with sweat despite the cool evening air that drifted through my window. The light outside was amber. I'd slept through the entire day.

I pressed my hands against my face and breathed until the shaking stopped.

The Binding. Of all the myths, of all the ancient complications, of all the ways this situation could get worse, this was the one I'd never considered. The Binding required emotional entanglement. It required some connection between the weavers, some thread of feeling strong enough to bridge the gap between sleeping minds.

I did not have feelings about Aeron Voss. He was a tool. A threat. A puzzle to solve. I did not feel wonder when he showed vulnerability. I did not feel the crack in my chest widen when he said simple, honest things in his quiet voice. I did not think about the tiredness in his eyes or the way his dream energy tasted of iron and ash, dark and vast and lonely.

I didn't.

The Binding was a mistake. A malfunction. Two weavers in close proximity, both under stress, both hiding their true nature from everyone around them. The dream realm was a living thing, and living things made errors.

I told myself this as I dressed. I told myself this as I walked to Elder Dayo's house. I was still telling myself this when I knocked three times, paused, knocked twice.

Dayo opened the door and took one look at my face.

"It's started, hasn't it?" he said.

I pushed past him into the villa. The incense was burning, thick and sweet, and two cups of coffee sat on the table by the hearth. Two cups. He'd been expecting me.

"You knew this would happen."

"I suspected."

"You put me next to a weaver. You knew what he was before I told you. You let me walk into his orbit knowing the Binding was a possibility."

Dayo lowered himself into his chair. His performance of frailty was thinner tonight. I could see the alertness beneath it, the old weaver's sharpness that no amount of pretending could fully hide.

"Sit, Kael."

"I don't want to sit."

"Sit anyway."

I sat. I picked up the coffee because my hands needed something to hold. The cup was warm and solid and real, and the dream realm felt very far away.

"The Binding is not a malfunction," Dayo said. "It is not a mistake. It is the dream realm recognising a truth that the weavers themselves have not yet accepted."

"There is no truth to accept. He is a Caeloran commander. He is the occupation."

"He is a weaver. Like you. Like your mother."

"Don't compare him to my mother."

"I'm not comparing. I'm observing. Two weavers, both hiding, both carrying impossible weight, both orbiting the same centre. The dream realm sees what you will not."

"The dream realm is not sentient."

"The dream realm is alive. You know this. You've felt it. And it is paying attention to this city, Kael. To what's gathering here." He paused. "Zuri found you?"

I stared at him. "How do you know about Zuri?"

"She contacted me first. Through the dream realm, three weeks ago. A sending from the Waste, which is a feat of power I haven't seen in decades. She told me something was coming. Something connected to the Ember Throne, to the old magic, to the thing your mother died trying to prevent."

My hand tightened on the cup. "What thing?"

"Your mother didn't die because she resisted the occupation. Everyone resisted the occupation. She died because she discovered something about the Ember Throne. About what it truly is. And she tried to destroy it before Caelora could use it."

"The Ember Throne is a symbol. Volcanic glass. A seat of power."

"The Ember Throne is a weapon." Dayo's voice dropped. "It was built three hundred years ago by a weaver who discovered how to bind dream energy into physical form permanently. Not the crude ember magic the Caelorans use now. Something older. Deeper. The throne absorbs the dream energy of everyone who sits upon it, every emperor, every ruler, every conqueror. It feeds. And it grows."

Thunder rumbled outside. The storm was returning, or a new one was arriving, and the air inside the villa pressed tight against my skin.

"What does that have to do with the Binding?"

"The last time a Binding occurred near the Ember Throne, three hundred years ago, the throne consumed both weavers. Drained them. Used their combined power to burn an entire kingdom to ash. That's how the Caeloran Empire began, Kael. Not through military conquest. Through two weavers whose dreams bled together within range of something hungry."

The coffee cup in my hand was shaking. I set it down.

"You're saying the Binding between Voss and me could feed the throne."

"I'm saying the throne may be why the Binding is happening. It may be calling you together. Two powerful weavers in the same city as the seat of Caeloran power? It's a feast the throne has been waiting centuries for."

"Then I leave. I break proximity. I go to the Waste, to Sahira, anywhere."

"You could. And the copper-and-smoke weaver would continue operating. The throne would continue feeding on Emperor Kazan's nightmares, growing stronger year by year. And whoever is killing through dreams would find new targets." He leaned forward. "Or you could do what your mother tried to do. Destroy the throne. Use the Binding instead of running from it."

"You're asking me to stay Bound to a Caeloran commander."

"I'm asking you to consider that the dream realm chose him for a reason."

"The dream realm doesn't choose. It's not a god."

"No," Dayo agreed. "It's not a god. It's something older than gods. And it doesn't choose randomly."

I left his house and walked into the storm. Lightning split the sky over the mountains, and for a fraction of a second the entire city was lit white, every rooftop, every alley, every cobblestone sharp and clear and shadowless.

In that flash, I saw someone standing on the rooftop across the street. Zuri. Staff in hand, linen wraps whipping in the wind. She raised one hand in a wave, casual as greeting a neighbour.

Then the darkness returned and she was gone.

I walked home through the rain. I locked my door. I sat on my cot and I made a decision.

I would not run.

I would go to the cracked-dome temple. I would bring Voss, because Zuri was right: whatever was coming, his power was part of the equation. I would face the Binding instead of running from it. I would use it, the way I used everything, as a weapon pointed at the empire that had taken my mother and my homeland and my name.

And if the dream realm had chosen Aeron Voss to walk through my dreams, then the dream realm would learn what I'd learned fifteen years ago in a burning library-temple, watching soldiers drag my mother into the light.

I don't break. I adapt. And I turn every weapon they forge against me into one that cuts the other way.

I lay down. I closed my eyes. The rain hammered the roof and the thunder shook the walls and I let myself fall into sleep, into the dream realm, into whatever was waiting.

The corridor was there. Stone and mosaic and geometric patterns, stretching into darkness, and at the far end, a faint glow of iron and ash.

He was dreaming too.

I stepped forward, and the corridor pulled me in like a breath, and somewhere deep in the dream realm, something ancient and vast and hungry opened its eyes.`,
      },
    ],
  },
  {
    slug: "the-steeping-room-mysteries",
    title: "The Steeping Room Mysteries",
    tagline:
      "The knots on those crab pot lines weren't crab pot knots.",
    genre: "cozy-mystery",
    chapters: [
      {
        number: 1,
        title: "Low Tide",
        isFree: true,
        content: `My name is Margot Baptiste, and I've made a habit of starting over. I did it at twenty-two when I left Trinidad for Sydney with a chemistry degree and a man who made me laugh until I couldn't breathe. I did it at fifty-six when that man died and took the laughter with him. And I did it again three months ago when I sold our house, packed a cat and twenty-seven jars of tea into a rented van, and drove to a coastal village where nobody knew my name.

The Darjeeling was misbehaving.

I held the tin up to the early light and frowned at it. Good first flush, Castleton estate, exactly the kind of base that should play nicely with dried lavender and a whisper of orange peel. But the sample cup on my counter smelled wrong. Too floral. Not enough spine.

"What do you think?" I asked Professor Whiskers.

He was sitting on the far end of the blending counter, tail curled around his considerable ginger body, watching me with the expression of a being who had never doubted himself in his life. He blinked slowly. This was not, I understood after eight years of cohabitation, an endorsement of the blend. It was an observation that I had not yet produced his breakfast.

"Helpful as always."

I adjusted the ratio, less lavender, a pinch more peel, and started over. The Steeping Room at 5:30 in the morning was my favourite version of itself. No customers yet. The morning dark still pressed against the windows. Just me, the cat, the brass scales, and twenty-seven jars of tea arranged by region across the shelves David had built the year before he died.

David. My husband. Eighteen months gone and I still reached for his coffee cup every morning before remembering. Not the grief of the early days anymore. That had been a tsunami, indiscriminate and obliterating. This was a tide. Predictable. Manageable. Sometimes I barely noticed it. Sometimes it knocked me sideways at the kitchen sink because I'd found one of his socks behind the dryer.

The new blend was better. Warmer. The orange peel had found its voice.

"Morning Courage," I said to Whiskers, writing the name on a label. "Darjeeling, lavender, orange peel. For mornings that require bravery."

He jumped down from the counter, which in Professor Whiskers meant he was ready for his morning walk. Our routine, established in the three months since I'd opened the Steeping Room, went like this: wake at five, blend until six, walk Whiskers to the harbour and back, open by seven. The walk was technically for him, but I needed it too. The harbour path followed the curve of Pearl Bay, past the fishing boats and the crab pots and the old stone seawall where the pelicans sat in a judgmental row every morning like a panel of magistrates.

I clipped on his harness (a walking harness, not a leash, because Whiskers had opinions about his dignity) and we stepped out the navy blue door into the grey morning.

Pearl Bay at dawn was a watercolour. The sky hadn't decided what colour to be yet. The sea was flat and silver, the air tasted of salt and eucalyptus, and the only sounds were the clank of the harbour rigging and the screech of a cockatoo who had strong feelings about the sunrise.

I loved it here. That still surprised me.

Three months ago, I'd been standing in the empty Sydney house David and I had shared for twenty-eight years, surrounded by boxes, wondering if I'd lost my mind. Fifty-eight years old. Retired from teaching. Widowed. Selling the house to open a tea shop in a town where I knew exactly nobody.

My daughter Simone, pragmatic to her bones, had said: "Mum. Are you sure?"

My son Marcus, who had his father's gift for gentle honesty, had said: "Dad would love this."

Marcus was right. David would have loved this. He'd have been building shelves and arguing with the plumber and making terrible jokes about how the tea was "steeped in tradition." I missed his terrible jokes most of all.

Whiskers and I took the harbour path. The tide was out, which turned the harbour into a study in geometry. The boats sat at angles on the exposed mud, their reflections gone, looking stranded and slightly embarrassed, like guests who'd arrived at the wrong party. The crab pots were stacked at the end of the fishing jetty, and the air smelled of brine and diesel and the particular muddy sweetness of low tide.

I liked to walk slowly. Whiskers liked to walk even slower, stopping to investigate every post, every rope coil, every crab carcass the seagulls had left on the path. I let him. My phone was in my back pocket playing an audiobook I'd been failing to pay attention to for three days because my brain kept drifting to the question of whether cardamom would work in the Harbour Fog blend.

Probably not. Cardamom was pushy.

We were halfway along the seawall when Whiskers stopped. Not his usual investigative pause. This was different. His body went rigid. His ears flattened. He made a sound I'd only heard him make once before, when a brown snake had appeared in the courtyard garden: a low, guttural growl that seemed far too large for a house cat.

"What is it?" I looked where he was looking.

Down in the harbour. Between the fishing jetty and the seawall. The mud was dark and gleaming where the water had retreated, and the crab pot lines stretched from the jetty posts in long, slack arcs.

Something was tangled in the lines.

My first thought was a seal. We got them sometimes, the big Australian fur seals that came into the harbour to raid the bait buckets. They got caught in lines occasionally. It was sad; the fishermen hated it.

But this wasn't a seal.

I stood very still. My reading glasses were hanging around my neck on the beaded chain my students had given me when I retired, and I pushed them onto my nose even though I didn't need them to see this. I think I was stalling. I think some part of me knew what I was looking at and was giving the rest of me time to catch up.

A man. Face down in the harbour mud, arms caught in the tangle of crab pot lines. He was wearing a dark jacket, expensive. The kind of waxed cotton jacket people from the city bought when they wanted to look "coastal." One shoe was missing. His hair was dark, plastered to his skull with mud and something else.

The chemistry teacher in me took over. Thirty years of lab safety training, of assessing hazards before entering a workspace, kicked in before the rest of me could fall apart.

*Don't touch anything. Don't step into the scene. Call triple zero. Note the time.*

6:14am. I noted the time. I pulled out my phone. My hands were steady, which surprised me. My voice, when the operator answered, was not.

"I need police and ambulance to Pearl Bay harbour. The seawall path, about halfway along." I swallowed. "There's a man in the water. In the mud, I mean. The tide's out. He's — I don't think he's breathing. He's tangled in the crab pot lines."

The operator was calm and specific, the way I'd trained myself to be calm and specific with panicking Year 10 students who'd knocked over the Bunsen burner. She asked me questions. I answered them. No, I hadn't touched him. No, I couldn't see anyone else. Yes, I would stay on the line.

Whiskers pressed against my ankles, still growling.

The ambulance arrived first, then a police car. I stood back and held Whiskers against my chest like he was the only warm thing in the world. He didn't complain. He let me hold him, which told me he understood the gravity of the situation, because Professor Whiskers was not a cat who tolerated being held.

A young constable took my name and a preliminary statement. Very young. My God, they looked like sixth-formers now. He was trying to be professional but his hands were shaking worse than mine.

"Did you recognise him?" he asked.

"I only saw him from behind. From above. I didn't go down."

He nodded. Scribbled. Nodded again.

From where I stood, I could see the paramedics on the mud. Their body language told me everything. No urgency. No CPR. They moved slowly, carefully, the way you move around something you can't help anymore.

And then the detective arrived.

She came around the corner of the harbour master's office in a dark jacket, badge on her belt, a takeaway coffee cup in one hand and an expression that suggested she'd been expecting this day to be ordinary and was recalibrating. Tall, sharp-featured, dark skin, close-cropped natural hair. She surveyed the scene, the seawall, the constable, and me — a fifty-eight-year-old woman in a turquoise linen tunic, holding a fat ginger cat and standing exactly where a civilian should not be standing.

"Detective Senior Constable Sarah Okafor." She didn't extend a hand. "You found the body?"

"Margot Baptiste. Yes."

"And you are?"

"I own the tea house. The Steeping Room, on Main Street."

Something moved behind her eyes. Not recognition, more like filing. A box labelled *civilian, tea lady, nuisance potential: moderate.*

"Walk me through it. Start from when you left your house."

I walked her through it. She asked good questions, the kind that circled back on themselves to check for consistency. I recognised the technique. I'd used it myself, in a different context, when Year 9 students claimed the missing sodium had "probably just evaporated, miss."

She took my phone number, told me someone would follow up for a formal statement, and dismissed me with the particular politeness of a professional who needed me to leave.

I turned to go. Whiskers was still tense in my arms, ears flat, tail rigid.

And then I stopped.

I looked back at the harbour, at the crab pot lines still stretched taut between the jetty posts and the mud where the body lay. The police had begun cordoning the area, blue and white tape fluttering in the early breeze. From this angle, I could see where the lines had been pulled and knotted around the victim's arms. The paramedics had cut some of them, but the intact sections were visible.

The knots.

I had been tying knots for thirty years. Lab equipment, tent ropes on school camps, the rigging on David's little sailing dinghy that still sat in our — my — garage. I knew knots the way I knew chemical compounds: by shape and function.

The knots on those crab pot lines weren't crab pot knots.

Fishermen tied bowlines and clove hitches and round turns. I knew this because Rick Sullivan at the fish market had spent twenty minutes last month showing me the difference while I waited for my weekly order of smoked trout. He'd been proud of them. "Forty years of tying the same six knots," he'd said. "My hands do it while I sleep."

Those knots weren't any of Rick's six. They were something else. Something neater, more square, more... deliberate.

I'd seen that knot before. I was sure of it. But the memory sat just out of reach, like a word in a language I'd once spoken fluently but hadn't used in years. It nagged at me. Pulled at me.

I walked home. I put Whiskers down. I opened the Steeping Room at seven, like I did every morning, and I made tea for the three early customers who came in, and I smiled, and I chatted about the weather and the new blend.

But my hands smelled of salt and mud, and every time I closed my eyes I saw the geometry of those knots, precise and wrong, and I couldn't stop the feeling, quiet, insistent, certain as a chemical reaction, that something about that harbour was very, very wrong in a way that went far beyond the tragedy of a man tangled in fishing lines.

Professor Whiskers sat on the true crime shelf and watched me through the morning, and I swear, I absolutely swear, his expression said: *Well? Are you going to figure it out or not?*`,
      },
      {
        number: 2,
        title: "The Weight of Whispers",
        isFree: false,
        content: `The kettle screamed at half past five the next morning. I hadn't slept.

Every time I closed my eyes, I saw the pale bloat of James Whitford's face, the crab pot lines wound tight around his torso like a grotesque corset. And those knots. I kept seeing the knots, kept turning them over in my mind the way I used to turn over molecular structures on the whiteboard, searching for the bond that held the whole thing together.

Professor Whiskers sat on the kitchen counter watching me with that particular expression cats reserve for humans who have disappointed them. I'd missed his six o'clock harbour walk. In his world, a dead body was no excuse for disrupting routine.

"I know," I told him. "Give me ten minutes."

He blinked once, slowly. Judgment rendered.

I measured three spoons of my Morning Courage blend into the pot. Darjeeling, lavender, orange peel. David had named it. He'd said I needed courage every morning just to face my Year 11 students, and he wasn't wrong. These days I needed it for different reasons. For the quiet of a house meant for two. For a town that still called me "the new lady." For mornings like this one, when the world had tilted sideways and I couldn't find the level.

The tea steeped for exactly four minutes. I poured it into the blue cup David had bought me in Kyoto, the one with the hairline crack along the handle that I refused to acknowledge. The first sip burned my tongue. The lavender followed, soft and steady. I breathed.

Then I pulled on my walking shoes and clipped the Professor's harness.

---

Pearl Bay at dawn looked scrubbed clean, as if the night had taken a cloth to it. The harbour water sat flat and silver. Three pelicans occupied the end of the jetty like magistrates on a bench. The police tape from yesterday was gone, but the absence of it felt louder than its presence. Everyone would know by now. A town this size metabolised news the way a flame metabolises oxygen.

Professor Whiskers pulled toward his usual route along the seawall. I let him lead, though my legs wanted to go the other direction, away from the spot where the crab pots sat in their neat row. Rick Sullivan's pots. I wondered if he'd slept either.

We made it as far as the boat ramp before I heard footsteps behind me.

"Margot. Margot, wait."

Helen Whitford moved fast for seventy-two. She wore a grey cardigan buttoned wrong, one side hanging lower than the other, and her white hair stood in a halo of static. I had never seen Helen Whitford with a single hair out of place. She ran the Pearl Bay Historical Society with the precision of a military campaign and baked scones that could make a grown man weep.

This morning she looked like she'd been taken apart and put back together by someone who'd lost the instructions.

"Helen." I reached for her hands. They were freezing. "Come sit down."

"They won't let me see him." Her voice came out scraped thin. "That detective, the one from Sydney, she says I have to wait. He's my nephew, Margot. He's my boy."

I guided her to the bench by the memorial anchor. Professor Whiskers, who generally tolerated no one, climbed into her lap and pressed his considerable weight against her chest. Helen's fingers found his fur automatically.

"I brought him up, you know," she said. "After his mother left. He was seven. Skinny little thing with ears too big for his head. I taught him to read in my kitchen."

I sat beside her and said nothing. There are moments when words are just noise.

"People didn't like him," Helen went on. "I know that. He wasn't easy. But he was mine, and someone took him from me, and that detective told me to go home and rest." She looked at me with eyes like flint. "I am seventy-two years old. I have buried a husband, two brothers, and now my nephew. I do not need rest. I need answers."

"The police will investigate, Helen."

"Will they? One detective and a couple of constables who spend most of their time booking tourists for illegal camping?"

I didn't have a response to that. She wasn't wrong.

Helen pulled a tissue from her cardigan sleeve and pressed it to her nose. "You found him. You were there."

"I was."

"Tell me."

So I did. Not the worst of it. Not the colour of his skin or the way the water had started its work. But the rest. The early morning, the low tide, the crab pots pulled close to shore by the receding water. Professor Whiskers straining at his harness. The shape that wasn't driftwood.

Helen listened without interruption. When I finished, she stroked the cat's ears and stared out at the harbour.

"Those were Rick Sullivan's pots," she said.

"Yes."

"Rick hated James. The whole business with the marina expansion. James wanted to buy out his mooring lease." Helen paused. "But Rick's not a killer. He's a drunk and a gossip, but he's not that."

"Helen, I really think you should let the police handle this."

She looked at me sideways. "You're a scientist, Margot. You spent thirty years teaching children to observe, hypothesise, test. Are you telling me you walked away from that scene yesterday and haven't thought about it since?"

The knots. The strange, precise knots that weren't fishing knots, weren't sailing knots, weren't any kind of knot a fisherman would tie.

"I've thought about it," I admitted.

"Good." Helen set Professor Whiskers on the bench and stood up, rebuttoning her cardigan correctly this time. "I'll bring scones to the shop at ten. We'll talk properly."

She walked away before I could argue.

---

The Steeping Room opened at eight. By quarter past, every table was full, which had never happened on a Tuesday morning. Pearl Bay had come to process its shock, and apparently it wanted to do so over tea and banana bread.

I worked the counter while my part-time girl, Jess, handled the tables. The conversation in the room hummed at a frequency I recognised from staffroom gossip sessions: low voices, wide eyes, the performative concern that barely concealed ravenous curiosity.

"Heard it was drugs," said Barry Fenton from the hardware store, speaking to his wife but loud enough for the room. "Sydney business, followed him up here."

"Don't be ridiculous." That was Maureen Cho, who ran the post office and therefore considered herself the town's official information bureau. "James Whitford was a property developer, not a drug dealer."

"Property developers can be drug dealers," Barry said.

"Property developers are worse than drug dealers," said a voice from the doorway.

Priya Sharma stood on the threshold in paint-stained overalls, her dark hair twisted up with what appeared to be a pencil holding it in place. She was twenty-eight, built like a distance runner, and had spent the last year trying to block James Whitford's resort development through every legal channel available.

The room went very quiet.

"What?" Priya looked around. "I'm not going to pretend I'm sad. He was going to bulldoze nesting habitat for endangered shorebirds so rich people could have infinity pools. That's a fact."

"A man is dead, Priya," Maureen said.

"A man who wanted to destroy a protected wetland. I can hold both things at once."

She walked to the counter. I could feel the room watching, could feel the story being assembled in real time: the environmentalist who'd publicly threatened the developer, now refusing to mourn him.

"Pot of The Sleuth, please," Priya said. "And whatever pastry you've got."

I put the kettle on and sliced a piece of the cardamom and pear cake I'd baked at four in the morning when sleep had refused to come. The baking had helped. Measuring flour, cracking eggs, the alchemy of heat transforming batter into something golden. Chemistry I could control.

"Priya," I said quietly as I set her order on the counter. "Maybe today isn't the day for public statements."

"Maybe today is exactly the day." But she took the cake and sat by the window, and she didn't say anything else.

I watched her eat. She broke the cake into precise pieces and placed each one in her mouth like she was thinking between bites. When she finished, she brought her plate to the counter instead of leaving it on the table, which put her in the minority of Pearl Bay's population.

"For what it's worth," she said quietly, leaning across the counter so only I could hear, "I was at a council meeting the night James died. Twenty people saw me there. So if anyone starts pointing fingers, I've got receipts."

"I wasn't pointing fingers, Priya."

"No. But someone will." She tapped the counter twice with her fingertips. "The development approval went through six weeks ago. Did you know that? Councillor Gibson cast the deciding vote. James took him to dinner at that Italian place in Coffs Harbour the week before. It's all on the public record if you know where to look."

She left before I could respond. The bell above the door chimed behind her, and the room exhaled and resumed its buzzing.

Jess appeared at my elbow. "That was intense."

"That was a Tuesday in Pearl Bay," I said. "Apparently."

The rest of the morning brought a steady parade of faces. Some I knew, some I didn't. A couple of tourists wandered in, oblivious, and ordered iced tea. The regulars sat in their usual spots and traded theories like playing cards. I refilled pots and cleared plates and wiped tables and listened.

Listening is an underrated skill. David taught me that. He'd been a social worker before he retired, and he could sit with someone for an hour without saying a word and come away knowing their whole story. I was never that patient. But I was learning.

Tom Kowalski arrived at noon. He filled the doorway the way he always did, all broad shoulders and sawdust on his boots. He'd been renovating the upstairs rooms of The Drowned Sailor for months. I suspected the renovation would last precisely as long as it took him to run out of excuses to come to my tea house for lunch.

"Margot." He set his hands on the counter. Big hands, scarred across the knuckles. "How are you doing? Really."

"I'm fine."

"You found a body yesterday."

"And today I'm making tea and selling cake. That's how I'm doing."

He studied me the way he sometimes did, like he was reading a menu in a language he was still learning. "I brought you something." He produced a brown paper bag. Inside were two meat pies, golden and steaming.

"Tom, I can't accept—"

"They're from the pub kitchen. Not a romantic gesture. Just a bloke making sure another bloke eats." He paused. "You know what I mean."

I took the pies. They smelled of butter and rosemary and something deeper, something that reminded me of cold Saturday afternoons at the footy with David, his knee pressed against mine on the plastic seats.

"Thank you," I said, and meant it for more than the pies.

Tom lingered. He ordered a Harbour Fog and sat at the counter while the lunch crowd filtered in and out. I caught him watching the room, cataloguing faces the way a publican does, tracking who was talking to whom and about what.

"Interesting thing," he said after a while. "Diana Morrison hasn't been in today. Not at my place, not here, not at the bakery. And Diana Morrison has never missed a day of making sure everyone in Pearl Bay knows she exists."

Diana Morrison. James Whitford's business partner. I'd met her twice: once at a council meeting about the resort development, once in my shop when she'd ordered a chamomile tea and then complained it tasted like chamomile. Both times she'd struck me as someone who had rehearsed her personality in a mirror.

"Maybe she's grieving," I said.

"Maybe." Tom sipped his tea. "Or maybe she's busy."

"Busy doing what?"

He shrugged. "That's the question, isn't it?"

---

Helen arrived at two with a basket of scones that could have fed a football team. She also brought a folder.

We sat in the back room after the lunch rush, the one I used for private tastings and bookkeeping. Professor Whiskers stationed himself between us on the table like a furry arbitrator. The scones were still warm. I split one and let the steam rise, then spread it thick with butter and Helen's rosella jam, tart and sweet at once. For a moment, nothing else existed except the crumble of that scone against my teeth.

"James had enemies," Helen said, opening the folder. "I'm not naive about that. He was pushy, he cut corners, and he didn't care who he upset. But this is what I know."

She spread papers across the table. Council meeting minutes. Property records. A hand-drawn map of the proposed resort site.

"The development was worth forty million dollars," Helen said. "James needed council approval for the environmental impact assessment to go through. Three councillors were for it, two against, and Frank Gibson was the swing vote."

"Councillor Gibson voted in favour, didn't he?"

"Six weeks ago. The day after James made a very generous donation to the Pearl Bay Scout Hall restoration fund." Helen's mouth thinned. "Frank Gibson has been running those Scouts for thirty years. That hall is his legacy."

"That's not necessarily corruption, Helen. It could be coincidence."

"Margot. You're a scientist. How do you feel about coincidence?"

I felt about coincidence the way I felt about students who claimed their dog ate their homework. It was possible. It was rarely probable.

"What do you want me to do with this?" I asked.

"I want you to keep your eyes open. You're new here. People don't watch what they say around you yet because they haven't decided if you matter. That's an advantage."

I looked at the scone in my hand, the folder on the table, the cat between us. Three months ago I'd come to Pearl Bay to be quiet. To grieve in a place where no one knew me, where the ocean could do the heavy emotional work while I made tea and learned to sleep alone.

"I'm not a detective, Helen."

"No. You're a chemist. You look at things and figure out what they're made of." She gathered her papers. "That's close enough."

After she left, I cleaned the back room and tried not to think. I wiped the counter and restocked the tea canisters and swept the floor, and the whole time the knots turned in my mind like a lock without a key.

Professor Whiskers watched me from the shelf where I kept my true crime collection. Forty-seven books. David used to joke that I'd solve a murder before I retired. I'd laughed at that. It had been funny when it was theoretical.

I closed the shop at five and walked home along the Cliff Walk. The ocean was turning indigo, the sky bruised pink and purple above the headland. The wind carried salt and eucalyptus and the faint diesel tang of fishing boats heading in for the night.

My phone rang as I reached the front gate.

"Mrs Baptiste? It's Detective Okafor."

"Ms," I corrected automatically.

A pause. "Ms Baptiste. I need to ask you some follow-up questions about yesterday morning. Can you come to the station tomorrow at nine?"

"Of course."

"And Ms Baptiste? I understand Helen Whitford visited you today. I'd appreciate it if you didn't involve yourself in this investigation. It's a police matter."

"I sold her scones, Detective. Is that involvement?"

Another pause, longer this time. "Nine o'clock. Thank you."

She hung up. I stood at my gate with the phone in my hand and the wind pulling at my hair and Professor Whiskers winding between my ankles.

From the Cliff Walk, I could see the harbour below. The crab pots were gone. Rick Sullivan's mooring sat empty, his boat nowhere in sight.

And on the jetty, standing very still in the failing light, was a figure I recognised. Diana Morrison, staring out at the exact spot where I had found James Whitford's body.

She was holding something. A small box or case, pressed against her chest.

Then she turned, walked to the end of the jetty, and dropped it into the water.`,
      },
      {
        number: 3,
        title: "What the Tide Brings Back",
        isFree: false,
        content: `I dreamed about the box.

It sank through green water in my sleep, tumbling end over end, slow as a leaf falling in still air. I reached for it and my hands passed through the surface like it was glass, solid and cold, and I woke up with my fingers gripping the edge of the mattress so hard my knuckles ached.

Professor Whiskers was sitting on my chest. His weight was substantial and his breath was terrible and I had never been more grateful for another living creature in my life.

"Okay," I told him. "Okay. We're getting up."

It was five fifteen. The sky outside my bedroom window was the colour of a bruise, not quite dark, not quite anything else. I went through the motions: kettle, teapot, three spoons of Morning Courage. Blue cup with the cracked handle. Four minutes steep. First sip. Breathe.

But the ritual felt thin this morning, like a coat you keep wearing even after the lining's gone. The lavender couldn't touch what was coiling in my chest. I had watched Diana Morrison throw something into Pearl Bay harbour twelve hours ago, and I had done nothing about it.

What would I have done? Shouted from the cliff? Sprinted down the steps and confronted her on the jetty? And said what? Excuse me, Diana, I was spying on you from sixty metres away and I'd like to know what was in that box.

I could call Detective Okafor. I should call Detective Okafor.

I picked up my phone, put it down, picked it up again. The Detective had told me, in terms that left no room for interpretation, to stay out of this. Walking my cat and happening to witness something from a public footpath wasn't the same as involvement. Was it?

Professor Whiskers meowed. It was not a suggestion. It was a command.

"Fine. Walk first. Crisis of conscience after."

---

The harbour was empty at five forty-five. Fog sat on the water like a held breath, thick enough that the far headland had disappeared entirely. The boats at their moorings were just shapes, grey on grey. I could hear water lapping against the seawall, the creak of rope against timber, and somewhere out in the fog, the mournful complaint of a channel marker buoy.

Professor Whiskers walked with his tail high and his ears swivelling. He liked the fog. It made the world smaller, more manageable, reduced to the immediate circle of what we could see and smell and hear. I understood the appeal.

We walked past the memorial anchor, past the boat ramp, past the spot where Helen had grabbed me yesterday. My feet wanted to keep going. My brain wanted to turn around. My feet won.

I stopped at the jetty.

The tide was low again, not as low as Monday morning, but low enough that the pylons wore skirts of barnacles and weed above the waterline. The jetty itself was weathered grey timber, solid enough despite its age. I walked to the end, where Diana had stood last night.

The water below was murky with fog and tannin. Whatever she'd dropped was gone, swallowed by the harbour floor. I wasn't about to go diving for it. I was fifty-eight years old with a dodgy left knee and a strong preference for remaining dry.

But I looked. And as I looked, I noticed something on the jetty itself, right at the edge where the last plank met open air. A scratch in the wood. Fresh, pale against the grey, shaped like a curved line. It could have been anything. A dragged anchor. A dropped tool. A box scraping the edge as it went over.

I took a photo with my phone. Probably meaningless. David used to say I could find a conspiracy in a car park. I'd say that depended on the car park.

"You're out early."

I nearly went off the jetty. Professor Whiskers hissed.

Nina Chen stood at the landward end, coffee cup in hand, microphone bag over one shoulder. She was small and precise, with short black hair and glasses that made her look like a particularly stylish librarian. She ran Pearl Bay Community Radio from a converted garden shed behind the library. I listened to her morning show most days. She played good music and had a voice like warm honey over gravel.

"You scared me half to death," I said.

"Sorry. Occupational hazard. I'm always lurking where news might happen." She walked toward me. "And the harbour feels like where news is happening this week."

"I was walking my cat."

Nina looked at Professor Whiskers, who was grooming his paw with elaborate unconcern. "On the jetty. At five forty-five in the morning. In fog."

"He likes fog."

"Margot." Nina's voice dropped. She glanced over her shoulder, though there was no one to hear us. "I heard you found the body. I also heard Helen Whitford came to see you yesterday. And I've been doing this job long enough to know when someone is standing at the end of a jetty looking for something."

I considered lying. It lasted about two seconds. Nina Chen had a quality that made dishonesty feel exhausting.

"I saw something last night," I said. "From the Cliff Walk. Someone throwing something into the water from this spot."

"Someone."

"I'd rather not say who until I know what I saw."

Nina sipped her coffee. "Fair. But can I tell you something?"

"Go ahead."

"I've been covering local news in this town for four years. Council meetings, fundraisers, the occasional break-in at the surf club. Nothing like this. And since Monday morning, three people have called my station to tell me things about James Whitford. Things they've apparently been sitting on for months."

"What kind of things?"

"The kind of things people only share when they're scared, or when they think staying quiet is more dangerous than talking." She paused. "One of them was about a councillor. I'm still verifying."

My stomach turned over. "Which councillor?"

"I can't say yet. Journalistic ethics and all that. But Margot, this town is a pressure cooker with the lid rattling. James Whitford's death didn't create the pressure. It just turned up the heat."

Professor Whiskers wound himself around Nina's ankles. This was unprecedented. The Professor did not fraternise.

"He likes you," I said.

"Animals and small children. My two demographics." Nina scratched behind his ears. "Listen, I have an idea. It's probably terrible. But I want to float it."

"Float away."

"I've been wanting to start a true crime segment on the station. Local stories, historical cases, that sort of thing. Pearl Bay's got a surprisingly dark past for a town this pretty. Shipwrecks, disappearances, a smuggling ring in the 1920s."

"That's interesting, but what does it have to do with—"

"I need a co-host. Someone with an analytical mind who can look at evidence and ask the right questions. Someone the town is starting to trust because she makes excellent tea and doesn't gossip."

"Nina."

"I'm not asking you to solve James Whitford's murder on air. I'm asking you to sit in front of a microphone and talk about how evidence works. How observations lead to hypotheses. How you separate what you know from what you assume." She tilted her head. "Think about it. That's all I'm asking."

I thought about it on the walk home. I thought about it while I showered and dressed and opened the shop. I thought about it while I brewed sixteen pots of tea and sliced three loaves of lemon drizzle cake and smiled at forty-odd customers who all wanted to talk about the same thing.

---

Detective Okafor's follow-up interview happened at nine sharp in the Pearl Bay police station, which was a fibro building the colour of old teeth, wedged between the surf club and a vacant lot. The interview room smelled like instant coffee and regret.

Okafor sat across from me with a notepad and a face that gave away nothing. She was tall, angular, with close-cropped hair and hands that moved with an economy that suggested she didn't waste anything, not words, not motion, not time.

"Walk me through Monday morning again," she said. "From the moment you left your house."

I walked her through it. The same details, the same order. She wrote in a small, tight hand without looking up.

"The knots," she said when I finished. "You mentioned to the attending constable that the knots looked unusual."

"They did."

"Can you be more specific?"

I closed my eyes. The image was there, clear as a photograph. "They were precise. Symmetrical. Two half-hitches into a square lashing, if I'm remembering correctly. That's not a fishing knot. It's not a knot anyone would tie in a hurry or in the dark."

"How do you know about knots?"

"I was a chemistry teacher for thirty years. I ran a school camp program every year. You pick things up."

Okafor looked at me. Really looked at me, for the first time since I'd sat down. I could see her reassessing, adjusting her mental file from "civilian witness, minimal value" to something else.

"Ms Baptiste, I'm going to be direct with you. This case is complicated. James Whitford had business dealings that extend well beyond Pearl Bay, and there are a lot of people in this town who seem very eager to point fingers at each other."

"That doesn't surprise me."

"No, I imagine it doesn't." She set her pen down. "I've spoken to Rick Sullivan. He says the crab pots were secured with standard fisherman's knots when he last checked them on Saturday. Someone re-tied them."

"Someone who wanted to make sure the body stayed tangled."

"That's one interpretation."

"What's another?"

Okafor almost smiled. Almost. "That's police business, Ms Baptiste."

"Of course."

She walked me to the door. I was halfway out when she said, "Those knots. The square lashing. Where would someone learn that?"

"Military. Maritime training. Rock climbing." I paused in the doorway. "Scouts."

Okafor's pen tapped twice against her notepad. "Thank you, Ms Baptiste. That's all for now."

I walked back to the shop through streets that felt different now, charged with something invisible. The morning sun was warm on my face and the footpath smelled like hot concrete and frangipani from the tree outside the library, but underneath the ordinary beauty of a coastal Wednesday, something had shifted. Okafor had asked me about the knots. Not dismissed me, not patronised me. Asked. Which meant she didn't know. Which meant the case was more open than anyone in Pearl Bay was comfortable admitting.

I stopped at the bakery for supplies. Len Proctor, who'd been baking bread in Pearl Bay since before I was born, wrapped up a sourdough loaf and two almond croissants without making eye contact.

"Terrible business," he said to the counter.

"It is."

"James Whitford used to come in here every Saturday. Large white, two bacon and egg rolls. Never said please." Len finally looked up. His eyes were red-rimmed. "Doesn't mean he deserved what happened."

"No. It doesn't."

"People are saying things, Margot. Ugly things. This town's got secrets the way every town does, and a murder has a way of shaking them loose." He handed me the bag. "Be careful who you listen to. Not everyone who wants to tell you things has your best interests at heart."

I took the bag. His hands, flour-dusted and steady, had a small bandage wrapped around the left index finger. A baker's wound. Nothing sinister. But I noticed it, and the fact that I noticed it told me something uncomfortable about where my head was at.

I was looking at everyone's hands now. Everyone's knots. Everyone's small injuries and odd behaviours. A filter had settled over my vision, and I couldn't figure out how to lift it.

---

The afternoon brought rain. It came in hard from the south, driving against the windows of The Steeping Room in sheets, turning the street outside into a wash of grey and silver. I lit the lamps and put on Coltrane and the shop became a warm island in the storm.

Tom Kowalski arrived at three with rain in his hair and a question on his face.

"Quiet afternoon," he said, looking at the empty tables.

"Rain keeps people home."

"It drove me out." He sat at the counter. "Harbour Fog, please. Strong."

I made his tea with extra lapsang, the way he liked it, and the smoke-and-vanilla scent curled between us. He wrapped both hands around the cup.

"Rick Sullivan came into the pub last night," Tom said. "Eleven o'clock. Three sheets to the wind already. Started telling anyone who'd listen that the police were trying to fit him up."

"Fit him up how?"

"The crab pots. They're his pots. His lines. His mooring. He reckons Okafor thinks he did it."

"Does she?"

"I don't know what she thinks. But Rick said something interesting before his mate drove him home." Tom lowered his voice. "He said someone asked to borrow his boat two weeks ago. Wanted to go out at night, something about checking on a property from the water. Rick said no."

"Who asked?"

"Rick wouldn't say. Got cagey. Changed the subject. But he was looking at the back wall of the pub when he said it, and you know what's on the back wall of the pub?"

I didn't.

"Community noticeboard. Council meeting schedule, footy fixtures, and a very large poster for the Pearl Bay Scout Jamboree, courtesy of Councillor Frank Gibson."

I stared at Tom. He stared back. The rain hammered the windows.

"That could mean anything," I said.

"It could."

"Or nothing."

"It could mean that too." He sipped his tea. "But it doesn't, does it?"

Professor Whiskers jumped onto the counter and pushed his head against Tom's forearm. Tom scratched the cat's chin without looking, his eyes still on me.

"Nina Chen wants me to do a podcast with her," I said. I hadn't planned to tell him. It fell out.

"About the murder?"

"About true crime. Evidence. Local history. Not specifically about James."

"But eventually about James."

"I don't know. Maybe."

Tom was quiet for a while. The rain eased from fury to persistence.

"David would have loved this," he said. I must have looked startled because he added, "You talk about him sometimes. The way he read true crime, the way you'd argue about cases over dinner. He'd have been all over this."

My throat tightened. "He would have been better at it than me."

"I doubt that." Tom finished his tea and set the cup down carefully. "Do the podcast, Margot. This town needs someone asking questions that aren't just gossip."

He left. I stood behind the counter in the lamp-lit quiet and listened to the rain and the distant brass of Coltrane and the rumble of Professor Whiskers purring on the counter.

My phone buzzed. A text from Nina.

*Had a thought. The historical society archives include records of every community organisation in Pearl Bay going back fifty years. Scout troop membership rolls, volunteer lists, committee minutes. Helen Whitford is the archivist. Want to take a look?*

I typed back: *Tomorrow. After the shop closes.*

Then another text arrived. Unknown number. No greeting, no signature. Just six words.

*Stop asking questions about James Whitford.*

The phone sat in my hand, suddenly heavy, the screen glowing in the dim room. Professor Whiskers stopped purring. Outside, the rain had ceased. The silence it left behind was the loudest thing I had ever heard.`,
      },
      {
        number: 4,
        title: "A Frequency of Our Own",
        isFree: false,
        content: `I did not sleep well. I did not sleep at all.

The anonymous text sat on my phone like something venomous, and every time the screen dimmed I tapped it awake again, rereading the six words as though repetition might drain them of menace. It didn't work. Stop asking questions about James Whitford. Someone was watching. Someone knew I'd been asking. Someone cared enough to warn me off.

Professor Whiskers spent the night on the pillow beside my head, which he hadn't done since the first week after David died, when I'd cried so much and so quietly that the cat had apparently decided supervision was required. His purring was a low, mechanical vibration against my skull. Not comforting, exactly. Grounding. A reminder that whatever was happening out there in the dark and the rain and the town full of secrets, in this room, in this bed, I was safe.

At four thirty I gave up on sleep and went to the kitchen. I didn't make tea. I made David's recipe for coconut bake, the Trinidadian flatbread his mother had taught me the first year we were married. Flour, coconut milk, sugar, butter. Knead until the dough is smooth. Rest it. Roll it. Bake it in the cast iron skillet until it puffs and goes golden-brown. The kitchen filled with warmth and the sweet, dense scent of toasted coconut, and my hands remembered what my mind couldn't hold: that making something from raw ingredients was an act of faith. You combine, you apply heat, you trust the chemistry.

I ate two pieces standing at the counter, hot enough to sting my fingers, with butter melting into the crumb. Then I wrapped the rest in a cloth for the shop and went to shower.

---

I showed Nina the text message at seven, before either of us had opened our respective businesses. We sat in The Steeping Room's back room with the door locked and the lights off in the shop front, drinking Afternoon Conspiracy because I'd grabbed the wrong canister in the dark and neither of us cared enough to fix it.

Nina held my phone at arm's length, squinting. "Unknown number. Prepaid burner, probably. Or a spoofed number. Not hard to do."

"You sound like you've looked into this before."

"I'm a journalist in a small town. You'd be amazed what people send me." She set the phone down. "Are you scared?"

I considered the question honestly. My pulse had been running fast since last night, a low hum of adrenaline that spiked every time I looked at the message. My appetite was gone. My hands weren't entirely steady.

"I'm unsettled," I said. "Which is different."

"Is it?"

"Fear makes you run. Being unsettled makes you pay attention."

Nina leaned back in her chair. "You should tell Okafor."

"I know."

"But you're not going to."

"Not yet. Because the moment I tell her, she'll use it as a reason to shut me out entirely. She'll say it's proof I'm in over my head, and she won't be wrong."

"So what do you want to do?"

I looked at the table between us: the teapot, the cups, my phone with its ugly little message, and Nina's microphone bag sitting on the floor like it was waiting for something. Like it had been waiting for weeks.

"Tell me about the podcast idea," I said. "The real version, not the soft pitch you gave me on the jetty."

Nina's eyes sharpened. She sat forward.

"Right. Here's what I've been thinking. Pearl Bay Community Radio reaches about three thousand regular listeners. Good for local, useless for anything bigger. But if I record segments as a podcast and put them online, the reach is theoretically unlimited."

"And you want to cover James Whitford's murder."

"I want to cover the questions around it. Not amateur detective stuff, not speculation. I mean proper, structured analysis. What do the facts tell us? What do people know and when did they know it? How does a town like this deal with something like this?" She paused. "And I want you to do it with me because you think like a scientist and you talk like a human being. That's rarer than you'd imagine."

"What would we actually say? We don't have evidence. We have observations and gossip."

"We have more than that. We have the historical context of the resort development, public council records, the environmental impact dispute. All of it on the public record. And we have something the police don't have."

"What?"

"People talk to us. They don't talk to Okafor. She's an outsider with a badge. You're an outsider with a teapot. Guess which one Pearl Bay trusts more?"

I poured more tea. The Earl Grey and rose petals released a fragrance that always reminded me of my grandmother's garden in Port of Spain, the roses she grew along the fence that smelled like the colour pink should smell. I held the cup under my nose and let the memory settle me.

"If we do this," I said, "there are rules."

"Name them."

"We don't accuse anyone. We present facts and ask questions. If the police tell us to stop, we reassess. And nothing goes on air that we haven't verified through at least two sources."

"That's just basic journalism, Margot."

"Good. Then we agree."

Nina grinned. It changed her whole face, turned her from precise and careful into something brighter, someone who had been waiting a long time for a project that mattered.

"I'll set up the equipment this afternoon," she said. "We can record a pilot episode tomorrow. Just to see how it feels. Nothing has to go live until we're ready."

"Tomorrow is Thursday."

"Perfect. Shop closes at four, right? I'll come at four thirty. We'll do it in the back room."

"With tea."

"Obviously with tea."

---

I opened the shop at eight and the morning passed in a blur of customers and conversation. Pearl Bay was still running hot. I heard three different theories about James Whitford's death before ten o'clock: a Sydney hitman, a jealous lover, a fishing accident. The last one was patently absurd, and the person suggesting it knew it, but people reach for simple explanations the way they reach for railings on stairs.

At eleven, Councillor Frank Gibson walked through my door.

I had seen Frank Gibson many times in three months. At council meetings, at the pub, at the Anzac Day service where he'd laid the wreath with the practiced solemnity of a man who understood the political value of visible emotion. He was sixty, tall, going soft around the middle, with a face that had been handsome twenty years ago and was now mostly jaw. His handshake, when I'd first met him, had lasted exactly one second too long.

"Margot," he said, settling himself at the counter with the ease of a man who believed every room was improved by his presence. "I've been meaning to come in. Terrible business, isn't it? Terrible."

"It is."

"I knew James well, of course. We worked together on the resort proposal. He was a difficult man, but a visionary. Pearl Bay needs vision."

"What can I get you, Councillor?"

"Frank, please. And whatever you'd recommend. I trust your judgment."

I made him a pot of Harbour Fog. I watched his hands as I set it on the counter. They were large, well-kept, with blunt fingers and clean nails. Capable hands. The kind of hands that could tie a complicated knot and make it look effortless.

He wore a signet ring on his right hand. On his left wrist, a watch that cost more than my monthly rent. Council work in Pearl Bay was supposed to be a volunteer position.

"Terrible about Helen," he said, pouring his tea. "I called on her yesterday, brought flowers. She's devastated, as you'd expect."

"She's a strong woman."

"Too strong, some would say. She's been asking questions all over town. Understandable, of course, but the police are handling it. Best to let them do their job."

"I'm sure Helen just wants answers."

"We all want answers, Margot. But poking around in dark corners can be dangerous. People get hurt when they go looking for things they're not equipped to find." He smiled at me over his teacup. "This is excellent, by the way. What's in it?"

"Lapsang souchong, vanilla, smoked salt."

"Lovely. Smoky. Like a campfire."

"Or a bonfire," I said. "Scouts used to have those, didn't they? Big bonfires at jamborees?"

Something moved behind his eyes. Fast, there and gone, like a fish turning in dark water. "Still do. I've been running the Pearl Bay Scout troop for thirty years. We had our autumn jamboree just last month."

"You must know every knot in the book."

"Every knot and then some." He laughed. It was a good laugh, warm and full. Practiced. "You learn a lot in Scouts. Preparedness, resourcefulness, how to handle yourself in difficult situations. I've always said it builds character."

"I'm sure it does."

He finished his tea, left a twenty-dollar note on the counter for a nine-dollar pot, and told me to keep the change. At the door, he paused.

"Margot, a word of advice from someone who's lived here a long time. Pearl Bay looks after its own. But it can be an unforgiving place for people who stir the pot." He was still smiling. "No pun intended."

The door closed behind him. I stood very still for a long moment, listening to my own heartbeat.

Then I picked up my phone and saved the anonymous text message to my cloud storage. I took a screenshot and emailed it to myself, to Nina, and to a third address: the generic inbox for Pearl Bay police.

Professor Whiskers jumped onto the counter and sat on the spot where Frank Gibson's teacup had been. His tail swept back and forth like a metronome.

"I know," I told him. "I noticed it too."

Because Frank Gibson's left hand, when he'd lifted the teacup, had trembled. Just once. Just barely. But I'd spent thirty years watching students' hands during exams, and I knew the difference between a tremor of age and a tremor of something else entirely.

---

Nina arrived at four thirty with her equipment: a portable recorder, two microphones, a laptop, and a bag of Tim Tams she tossed onto the table as if they were as essential as the technology.

"Audio quality won't be studio-grade," she said, plugging in cables. "But it'll be good enough for a pilot. The back room has decent acoustics. All this wood."

I had set out a pot of The Sleuth and two cups. The peppermint and ginger filled the room with something sharp and alive. Professor Whiskers settled in his usual spot on the true crime shelf, wedged between Ann Rule and a dog-eared copy of In Cold Blood.

"Before we start," I said. "Frank Gibson came in today."

Nina stopped plugging things in.

I told her everything. The conversation, the Scouts, the knots, the warning about stirring pots. The tremor in his hand.

"And this was after the anonymous text," Nina said.

"Yes."

"Margot, do you think Frank Gibson sent that message?"

"I don't know. But I think someone in this town killed James Whitford, and I think that someone is getting nervous. And I think nervous people do stupid things like sending anonymous threats and making veiled warnings over tea."

Nina was quiet for a moment. Then she unwrapped a Tim Tam, bit both ends off, and used it as a straw to drink her tea. It was the most unhinged thing I had ever seen a grown woman do.

"What?" she said. "It's called a Tim Tam Slam. You've lived in Australia for how long?"

"Thirty-two years, and I have never—"

"Try it. It'll change your life. Also, it's a good way to calm down before we record."

I tried it. It did not change my life, but the rush of hot peppermint tea through a collapsing chocolate biscuit was so absurd and so sweet that I laughed. A real laugh, the kind that surprises you, the kind that lives in your stomach instead of your throat. I hadn't laughed like that in a while.

"Okay," Nina said, setting up the microphones. "Here's how this works. I'll intro, you follow. We talk about Pearl Bay, the setting, the history. We talk about what brought you here. We talk, in general terms, about what happened on Monday. We don't name suspects. We don't make accusations. We ask questions and we let the listener sit with them."

"What do we call it?"

"I've been thinking about that." Nina adjusted her microphone. "The Steeping Room. Like the tea house. Because steeping is what we're doing. Sitting with things, letting them develop, waiting for the flavour to come through."

I looked at her. She looked back. Professor Whiskers yawned from the shelf.

"That's good," I said.

"I know."

Nina hit record. The red light blinked on. She leaned into her microphone with the ease of someone who had been talking to invisible audiences for years.

"Welcome to The Steeping Room. I'm Nina Chen."

"And I'm Margot Baptiste."

"This is a podcast about a town, a cup of tea, and a question that won't let go. Three days ago, a man was found dead in Pearl Bay harbour. His name was James Whitford. The police are investigating. The town is talking. And we think it's worth sitting with the facts, slowly and carefully, the way you steep a good pot of tea."

I took a breath. "In chemistry, we call it qualitative analysis. You observe a substance. You test it. You don't jump to conclusions, because the first explanation that fits isn't always the right one. It's just the easiest one."

"So let's not be easy," Nina said. "Let's be thorough."

We talked for forty minutes. It was rough, unpolished, two women finding a rhythm that didn't exist yet. I stumbled over my words. Nina asked questions that circled too wide and had to be reined in. Professor Whiskers knocked a book off the shelf at the twenty-minute mark and the sound was going to have to be edited out.

But there were moments. Moments when the conversation locked into something real, when the microphone disappeared and it was just two people turning a problem over together, looking for the angle that caught the light. Nina asked me what I'd seen on Monday morning and I described it the way I'd describe an experiment to a class: observation, conditions, anomalies. When I got to the knots, I could feel the air in the room change.

"Knots are language," I said. "Every knot tells you something about the person who tied it. Their training, their habits, their muscle memory. You can lie with words. It's much harder to lie with your hands."

Nina let the silence hold for three beats. Perfect radio instinct.

"And the knots on those crab pot lines," she said. "What were they saying?"

"That whoever tied them learned to do it a long time ago. And that they were very, very careful."

Nina cut the recording. We sat in the quiet for a moment, the red light gone, the microphones just objects again.

"That's a pilot," she said. "I'll clean it up tonight. We can decide tomorrow if we want to release it."

"If we release it," I said, "there's no taking it back. Whoever sent that text will know I didn't listen."

"Is that going to stop you?"

I thought about David. How he used to sit in his armchair with a true crime book on his lap and say, The thing about ordinary people, Margot, is that they notice everything. They just don't trust themselves enough to act on it.

I thought about Helen Whitford buttoning her cardigan with shaking hands. I thought about the box sinking into dark water. I thought about Frank Gibson's trembling hand and his warm, practiced laugh.

"No," I said. "It isn't."

Nina nodded. She packed up her equipment and left with a wave and a promise to call in the morning. I locked the back room and carried the tea things to the kitchen and stood at the sink washing cups while the last light died outside the window.

Professor Whiskers was on the counter again. He was sitting on something. I lifted him, and underneath was a piece of paper I hadn't seen before, folded once.

Not mine. Not Nina's. It hadn't been there before the recording.

I unfolded it. The handwriting was blocky, all capitals, pressed hard enough to dent the paper.

*I WARNED YOU.*

Underneath, a photograph. Printed, not developed. A picture of my house. My front door. My sage green cottage with its navy door, taken from across the street, and in the window, just visible through the curtain, the shape of me.

Someone had been outside my house. Someone had been inside my shop while we were recording, close enough to leave a note in the back room, and I hadn't heard a thing.

My hands went to the deadbolt on the back door. Locked. The front door. Locked. Windows. All closed. But the side window in the kitchen, the one I kept cracked an inch for ventilation, was open wide enough for a hand to reach through.

I closed it. I locked it. I pulled the curtain.

Then I called Detective Okafor.

It rang four times. Five. Voicemail.

I called Nina. She picked up on the second ring.

"Don't go home," I said. "Come back to the shop. Now. Someone was in here, Nina. Someone was in here while we were recording."

Silence on the line. Then: "Lock everything. I'm coming."

I hung up. I stood in my kitchen with a photograph of my own house in my hand and my cat pressed against my ankles and the taste of peppermint still on my tongue.

From outside, somewhere in the dark street, a car engine started. Headlights swept across the curtain, slow and deliberate, and then pulled away.

I didn't move until I heard Nina's knock.`,
      },
    ],
  },
  {
    slug: "crimson-vow",
    title: "Crimson Vow",
    tagline: "Both of them were liars. Only one of them knew it.",
    genre: "bl-romance",
    chapters: [
      {
        number: 1,
        title: "The Collector",
        isFree: true,
        content: `My name is Shin Haneul, and I was thirty seconds away from ruining a man's life when his hands started shaking.

Not the bold kind of shaking, the kind that precedes a fist. This was fine motor failure. The tendons in his wrists jumping under skin that had gone the colour of old rice paper. His fingers were wrapped around a teacup he hadn't touched in twenty minutes, and the tea inside was cold, and the cup was chattering against the saucer like a tiny porcelain animal trying to escape.

I watched the cup. I let him see me watching.

"Mr. Bae," I said. "I think we both know I didn't come here for the bulgogi."

The restaurant was empty. Ten p.m. on a Wednesday in Hagu-dong, which meant the dinner rush had petered out an hour ago, and the kitchen staff had been sent home with the kind of urgent hand gestures that told me Mr. Bae had been expecting this visit. The chairs were stacked on half the tables. The overhead fluorescents buzzed at a frequency that lived somewhere behind my left eye. Through the plate glass window, Hagu-dong did what Hagu-dong did at night: bled neon onto wet asphalt, pink and electric blue running together in the gutters like something alive.

"I have until Friday," Bae said. "That's what they told me. Friday."

"That was three Fridays ago."

His mouth opened. Closed. The cup kept chattering.

I leaned back in my chair. The vinyl seat cover was cracked and repaired with electrical tape, and it stuck to the back of my leather jacket with a soft tearing sound every time I moved. I pulled a cigarette from the sky-blue pack of Raison Blues in my breast pocket and held it between my fingers without lighting it. A prop. Something to occupy my hands while his fell apart.

"Forty-two million won, Mr. Bae. That's the principal. The interest is another eleven. Fifty-three total. You know this."

"I know this."

"And you know what happens when this number gets handed to someone who isn't me."

He knew. Everyone in Hagu-dong knew. The Yun Syndicate had a spectrum of debt collection, and I occupied the polite end of it. The end with conversation and tea and the illusion that this was a negotiation between equals. Past me on that spectrum, there was Park Seojin with his fox grin and his two knives. Past Seojin, there were men whose names I'd never learned because names weren't relevant to what they did.

Bae set the cup down. It took him two attempts. "My daughter," he said.

I waited.

"Yejin. She's eleven. She's sick." He looked at the table. "Lymphoma. Stage two. The treatment at Haemun General, the good treatment, not the public ward, it costs more than this restaurant makes in a year. That's where the money went. All of it. I borrowed to pay for her treatment and now I can't pay for the borrowing and if I stop the treatment she..." He trailed off. His jaw worked around something he couldn't make into words.

The fluorescents buzzed. Outside, a stray cat screamed at something in the alley, and the sound was almost human.

I rolled the unlit cigarette between my thumb and forefinger. The paper crinkled softly. Inside my chest, something pressed against the walls I'd built there, and I held it down with the flat professional weight of twenty-six months of practice.

"Mr. Bae. Look at me."

He looked. His eyes were red-rimmed and dry. He'd run out of tears before I arrived. Probably days ago.

"You have assets," I said. "The restaurant lease. The kitchen equipment. You have a Hyundai Sonata, 2019 model, parked in the alley behind the building. Blue. You have a life insurance policy through Hanwha, medium-term, taken out four years ago."

His face changed. Not to fear. To something flatter than that. The realisation that he'd been researched.

"Here's what I'm going to recommend to my superiors." I placed the cigarette on the table, parallel to the edge, precise. "You liquidate the Sonata. That's roughly eight million. You sign over the insurance policy assignment, which gives us a guaranteed payout schedule. That covers twenty-six million over three years. The remaining nineteen, we restructure at reduced interest, monthly payments indexed to the restaurant's revenue."

"That's... you can do that?"

"I can recommend it. Whether they accept depends on how convincing I am."

"Why would you..."

"Because a dead man doesn't pay his debts, Mr. Bae. And a man who loses his restaurant doesn't either. The Syndicate isn't a charity, but it's not stupid. You alive and working is worth more than your organs."

Crude. Deliberately crude. I needed him scared enough to comply and grateful enough not to run. The balance mattered. Push too far and they vanish in the night, which means I failed the collection, which means attention I couldn't afford. Not far enough and they think the terms are negotiable, which means the same thing.

Bae nodded. His hands had stopped shaking. Direction will do that. Give a drowning man a piece of driftwood and he stops thrashing.

"The paperwork for the Sonata," I said. "Bring it to the Vein building, third floor, Friday. Ask for Han. Not anyone else. Me."

"Han."

"That's right."

I stood. Tucked the cigarette behind my ear. Pulled my jacket straight. On my right thumb, my mother's ring caught the fluorescent light, and for half a second, the silver threw a coin of brightness onto the wall behind Bae's head. A tiny halo. There and gone.

"Mr. Bae."

He looked up.

"Your daughter's treatment. Don't stop it."

I left before he could respond. The door chime rang a flat, electronic note behind me, and then I was outside, and Hagu-dong swallowed me whole.

---

The night was warm and wet. Not raining, but remembering rain, the air thick enough to leave a film on exposed skin. I walked south through the district with my hands in my jacket pockets and my collar up, moving at the pace of a man going nowhere in particular. Neon signs stacked three high along the narrow street: a hostess bar, a PC bang, a karaoke place with a sign that read STAR GALAXY PREMIUM in English letters that flickered between hot pink and dead. The gutter ran with oily water. Somewhere to my left, a street vendor was still frying scallion pancakes, and the smell hit me low in the stomach, sesame oil and batter and the char of a griddle that hadn't been cleaned since the last administration.

I turned the ring on my thumb. A habit. The silver was worn thin on the inside from two years of this exact gesture, my skin slowly eating the metal my mother once wore.

Two blocks. Three. Past the jjimjilbang with its fogged windows and its hand-painted sign. Past the alley where the Syndicate ran a card game every Thursday. Past the convenience store where the night clerk, a kid named Dohyun who couldn't have been older than nineteen, was leaning in the doorway scrolling his phone, bathed in the store's white light like a saint in a painting.

Four blocks south. Then east, away from the commercial strip into the concrete residential grid where the streetlights worked on a two-out-of-three basis and the buildings crowded together like they were trying to keep warm. I cut through a playground that hadn't seen a child in years. The swing set was rusted solid. A cat watched me from the top of the slide with the flat, appraising stare of a landlord.

The parking garage was underneath an apartment complex on the eastern edge of the district. Eight stories of water-stained concrete with a population of approximately four working vehicles and an unlimited number of rats. I took the pedestrian entrance, a steel door with no handle on the outside that I opened with a bump key, and descended the stairs to sublevel two. The stairwell smelled like piss and engine coolant. The fluorescent tubes overhead were the same sickly frequency as Bae's restaurant, and I thought, not for the first time, that Hagu-dong's entire electrical grid was tuned to the precise wavelength of despair.

Sublevel two. Three cars: a dead Kia with no plates, a construction van that hadn't moved in months, and a black Hyundai Grandeur with tinted windows and the engine running. Exhaust fumes pooled in the low-ceilinged space, mixing with the mineral smell of wet concrete. I could see the cherry-red ember of a cigarette floating behind the Grandeur's cracked driver-side window.

Dunhill. Not Raison. The smoke was heavier, richer. That was how I always found Minjun. Follow the expensive cancer.

I walked to the passenger side and got in.

Cha Minjun was forty-one and looked fifty-five. Lean, hollowed out, with the permanent under-eye bruising of a man who had been sleeping four hours a night for fifteen years and had stopped noticing. His hair was cropped short and going grey at the temples. He wore a dark wool coat over a shirt that might have been white that morning. The Dunhill was between his index and middle fingers, and he held it the way smokers held cigarettes in films from the eighties, with a kind of practised elegance that suggested he'd learned the gesture before the habit.

"You're late," he said.

"Collection ran long."

"The restaurant owner? Bae?"

"Handled. He'll liquidate the car, sign over the insurance assignment. I'll push a restructure."

Minjun took a drag. The ember brightened, painting his cheekbones in orange light, and then faded. "You're good at this."

"You say that like it's a compliment."

"It is."

"It shouldn't be."

He exhaled smoke through his nose. It filled the car like a slow, grey thought. Through the windshield, the parking garage stretched out in rows of empty spaces marked by faded yellow paint. The ceiling was low enough to feel like a hand pressing down.

"Report," he said.

I reported. Twenty-six months of cover maintenance had turned debriefing into something mechanical: names, dates, amounts, movements. I gave him the week's intelligence in flat, ordered sentences. A shipment rerouted through Pier 9 last Tuesday, estimated street value of three hundred million won. Kwon Mirae had restructured the Club Vein accounts through a new shell company registered in Sejong. Seojin had beaten a man named Cho outside the jjimjilbang over a gambling debt, broken his left orbital bone, and Cho was now at Haemun General telling the nurses he fell down stairs. Yun Jaewon had not been seen outside The House in eleven days.

Minjun listened. He didn't take notes. He never did. Everything went into the device clipped to the sun visor, recording in a format that would be transcribed at the Sangji field office by someone who had never smelled Hagu-dong and never would.

When I finished, the silence sat between us. The engine idled. Minjun smoked his Dunhill down to the filter and crushed it in the ashtray, which was already full.

"There's a development," he said.

I waited.

"The brass is escalating. We've been building a peripheral case for two years, and they want the centre." He turned to look at me. His eyes were the colour of black coffee, flat and assessing. "They want someone in Dowan's inner circle. Not the Syndicate's orbit. Not collections and club work. Inside. Close enough to document the pipeline from source to street, and the political connections above it."

My thumb found the ring. Turned it. The silver was cool against my skin.

"Dowan doesn't let people close," I said.

"No. He doesn't."

"The inner circle is Seojin and Mirae. That's it. Everyone else is staff."

"Which is why we need you promoted. Not in rank. In proximity." Minjun lit another Dunhill. The flame from his lighter threw shadows across his face that made him look like a woodcut of someone already dead. "You've been noticed. Your work on the collections has been clean, efficient. The Syndicate values competence. Dowan values it more than most."

"You want me working directly under Yun Dowan."

"Starting tomorrow."

The word sat in the car like a third passenger.

"That's fast," I said.

"The timeline has accelerated. Political pressure from above. Someone in the National Assembly is getting nervous about the Haemun port contracts, and they want results before the next election cycle. The director has signed off. This is happening, Haneul."

Haneul. My real name, said by the only person alive who knew it was real. In Minjun's mouth, it always sounded like a reminder. Or a question.

"Dowan is not his father," I said. "He's smarter. More observant. If my cover has any inconsistency, any gap, he'll find it."

"Then don't have gaps."

"Everyone has gaps."

Minjun looked at me. The Dunhill smoke curled between us, and for a moment the only sound was the engine and the distant drip of water from the parking garage's broken drainage pipe, a metronome counting nothing.

"Are you still you?" he asked.

The question he asked every time. His check-in. His welfare assessment, dressed up as three words casual enough to deny in a report.

"I'm still me," I said.

He held my gaze for two beats longer than the words required. Then he nodded. Turned back to the windshield. Took a drag.

"You report to The House at nine a.m. Dowan's office, third floor. Seojin will escort you. Don't be charming. Don't be clever. Be exactly what your file says: a competent collector with no ambition beyond his next payday."

"And what am I actually doing?"

"Everything. Shipment manifests, financial records, personnel connections. We need the thread that runs from the Hagu-dong pipeline to the assemblyman's office in Sangji. That thread goes through Dowan. He manages the operational layer between street-level crime and political money. Get close enough to document it."

"How close is close enough?"

"You'll know." He crushed the second Dunhill. "One more thing. The Bae collection."

"What about it?"

"His daughter. The sick one."

My hand stopped turning the ring. "What about her?"

"Nothing. Just remember she exists. Remember he's a person. The day you stop noticing that is the day I pull you out."

I opened the car door. The garage air hit my face, damp concrete and exhaust, and it felt cleaner than the air inside the Grandeur, which was sixty percent Dunhill smoke and forty percent things neither of us would say.

"Haneul."

I paused, one foot on the concrete.

"The House," Minjun said. "Have you ever been inside?"

"No."

"No one on our side has. Not in three years of this operation. Whatever you see in there tomorrow, keep your face still. You're not an agent walking into an intelligence target. You're a debt collector who's been called up. Act like it."

"I know how to act."

Something moved behind his eyes. Something that might have been concern, if Minjun were the kind of man who let concern survive long enough to be visible.

"That's what worries me," he said.

I shut the door. Walked back across the empty parking level, my boots echoing on concrete that had never been warm. Up the stairwell. Out the steel door into the night.

---

Hagu-dong was quieter now. Past midnight, and the district had settled into its late shift: the hostess bars still glowing, the street vendors packing up their carts with a clatter of metal and propane, a few drunks navigating the sidewalks like men crossing a frozen river. The fog had rolled in from the harbour, and it erased the tops of the buildings and softened the neon into smeared halos of colour that seemed to float in the air unattached to anything.

I walked home. Block 7 was a concrete apartment stack that looked like it had been built angry and never recovered. The elevator had been broken since before I moved in. The stairwell smelled like bleach and someone else's cigarettes. Fourth floor. My door. The lock was cheap, the kind you could defeat with a credit card and determination, and I'd left it that way on purpose. A better lock would have been a question without an answer my cover could provide.

Inside. One room. Mattress on the floor, sheets tangled from this morning. The ashtray on the windowsill, overflowing. Ramyeon cups stacked on the counter like a skyline made of sodium and regret. The window looked out onto the fire escape and the karaoke bar across the alley, whose sign was in its red phase tonight, painting everything in the room the colour of a wound.

I didn't turn on the light. I stood in the doorway and let the red wash over me and waited for the thing I always waited for when I came back to this apartment: the moment when the performance ended and whatever was underneath it was supposed to surface.

It didn't come. It hadn't come in months. The cover and the man had grown together like two trees planted too close, their roots tangled underground in ways I couldn't separate without killing one or both.

Han, the collector. Efficient. A little mean. Quick with a line that cut. He was easy. He fit the world he lived in the way a key fits a lock, and the door he opened led to rooms I understood: debts, leverage, the arithmetic of fear.

Shin Haneul, NIS agent. Mission-oriented. Disciplined. Trained at twenty-two, deployed at twenty-five, undercover at twenty-five and a half. He was a file in a drawer in the Sangji field office, a set of quarterly performance metrics, a voice on Minjun's recordings.

And then there was whoever stood in this apartment at midnight with the red light on his face, turning a dead woman's ring on his thumb, and I didn't have a name for him. I wasn't sure he had one. I wasn't sure he was anyone at all.

I went to the bathroom. Crouched beside the sink. Reached under the basin where the pipe met the wall and pressed my fingers against the duct tape until I felt the hard rectangle of the phone. My real phone. The one that connected to encrypted NIS servers and contained enough evidence to put me in a Syndicate grave within the hour.

Still there. Still taped. Still ticking like a second heartbeat in a body that was already running out of room.

I didn't pull it out. I just touched it. Confirmed it. The way you touch a scar to remember the wound, even when you'd rather forget.

Tomorrow I would walk into The House. The Yun Syndicate's heart. The place where Yun Jaewon ran his empire from a room full of screens, where Dowan managed violence like other men managed spreadsheets, where the soundproofed basement served purposes no one discussed. I had spent twenty-six months circling that building, collecting debts in its shadow, feeding intelligence about its edges. I had never been inside.

Tomorrow, I would be.

I stood up. Washed my face with cold water. Looked at myself in the mirror above the sink. The red neon from the bedroom reached even here, and in the glass I looked like something developing in a darkroom, half-formed, the image not yet fixed.

My mother's ring glinted on my thumb. The only true thing I carried.

I dried my face and went to the window. Lit the cigarette I'd been carrying behind my ear since Bae's restaurant, the one I'd used as a prop and then forgotten was there. The first drag hit my lungs like a small, familiar punishment. I exhaled into the red-stained air and watched the smoke dissolve against the glass.

Nine a.m. The House. Third floor. Dowan's office.

I had never met Yun Dowan. I'd seen him three times: once outside Club Vein, crossing the street in a black coat with Seojin at his heels, moving through the crowd like a blade through water. Once on the CCTV footage Minjun had shown me during a briefing, Dowan sitting at a desk, reviewing papers, his face revealing exactly nothing. Once at a Syndicate gathering I'd attended as peripheral staff, watching him across a room full of men who were afraid of him, and noticing that his hands, when he held his glass, were very still.

Three sightings. A file two inches thick. Twenty-six months of secondhand intelligence. None of it told me what it would be like to stand in front of him and lie.

I finished the cigarette. Crushed it in the ashtray with the others. Lay down on the mattress without undressing and stared at the ceiling, where the red light made slow, shifting patterns as the karaoke sign across the alley flickered between alive and dead, alive and dead, alive and dead.

I closed my eyes.

I was still me.

I was still me.

Nine a.m.`,
      },
      {
        number: 2,
        title: "The House",
        isFree: false,
        content: `The building looked dead from the outside. That was the point.

I stood across the street at eight fifty-three in the morning, smoking a Raison Blue and cataloguing every detail the way Minjun had trained me to. Peeling grey paint curling off reinforced concrete walls in strips that reminded me of burnt skin. Ground-floor windows boarded with plywood so weathered it had gone the colour of bone. A rusted loading dock on the harbour side where seagulls fought over something I couldn't see and didn't want to. The whole structure sat on the waterfront like a corpse that hadn't been identified yet, and if you were a tourist, or a cop, or anyone who hadn't been invited, you'd walk past it without a second glance.

Hagu-dong was overcast. The harbour fog had burned off enough to reveal a sky the colour of dishwater, and the air tasted like salt and diesel fuel and the particular metallic tang that meant rain was coming but hadn't committed. Behind me, a delivery truck idled outside a shuttered fish market, its exhaust mixing with steam from a pojangmacha where an old woman was already boiling tteokbokki for the lunch crowd, the red pepper smell so thick it coated the back of my throat.

I finished the cigarette. Dropped it. Crushed it under my boot.

Eight fifty-five. Five minutes to become a different kind of liar.

The entrance was on the east side. No sign, no buzzer. Just a steel door painted the same grey as the walls and a man standing beside it who was roughly the dimensions of a commercial refrigerator. He looked at me with the expression of someone who had been hired specifically for his lack of expression.

"Han," I said. "Dowan's office. Nine o'clock."

He didn't respond. He pressed something on his phone, waited, then stepped aside. The steel door buzzed and I pulled it open and stepped into the Yun Syndicate's throat.

The contrast hit like a slap.

Outside: decay. Inside: control. The entrance corridor was polished concrete, seamless, lit by recessed LEDs that threw a cool, even light without shadows. The air smelled different in here. Climate-controlled, faintly chemical, the smell of money spent on things you couldn't see. Ventilation, soundproofing, the kind of infrastructure that said this building had been gutted and rebuilt from the inside, its rotten shell kept as camouflage around a body of steel and glass.

I walked. My boots were quiet on the concrete. My hands were in my jacket pockets, and my right thumb turned the silver ring against my knuckle, a rhythm that nobody could see and I couldn't stop.

The ground floor was open-plan. A long zinc-topped bar ran along the left wall, bottles arranged behind it with the precision of a museum display. Whiskey, mostly. Japanese and Korean. A few Scotches that cost more than my monthly cover stipend. The furniture was minimal: low leather couches, black, arranged around glass coffee tables. A few men in dark clothing sat in the far corner, talking quietly. They glanced at me and looked away. Nobody smiled. Nobody nodded. The social temperature of this room was approximately zero.

Ahead: a staircase, industrial steel with open treads. A camera mounted above it, the lens tracking my approach with a soft mechanical whir.

"Don't touch the railing."

The voice came from behind me. I turned.

Park Seojin was leaning against the bar with his arms crossed and a look on his face that suggested I'd already failed a test I didn't know I was taking. He was exactly how the file described him: wiry, quick, with sharp features and bleached blond hair that stuck up in calculated chaos. An oversized black hoodie hung off his frame, sleeves pushed to the elbows, revealing forearms corded with lean muscle. An eyebrow piercing caught the LED light. He was twenty-five and looked like a knife someone had dressed in streetwear.

"Seojin?" I asked.

"Seo." He pushed off the bar. "Nobody calls me Seojin except my mother, and she's dead, so." He walked past me toward the stairs, not checking to see if I followed. "Keep up. He doesn't like waiting."

I kept up. First flight: the staircase opened onto a corridor of closed doors. Second flight: another corridor, narrower, with the same polished concrete and recessed lighting. Seojin moved fast, his sneakers silent on the stairs, and I matched his pace while my eyes did what they'd been trained to do. Four cameras on the ground floor, visible. Two on the second floor, positioned to cover both ends of the corridor. The doors were solid, no windows. Keycard access, from the looks of the electronic panels beside each one. Whoever had designed the interior security had been thorough and paranoid, which in this business meant they'd been right.

"How long have you been collecting?" Seojin asked without turning around.

"Two years."

"For us?"

"Who else?"

He snorted. The sound contained no amusement. "Lot of people collect debts in Hagu-dong. Most of them are stupid. You're not stupid. That's what I hear."

"I just follow the numbers."

"Right." He stopped at the bottom of the third flight and turned to face me. His eyes were dark, quick, and they moved over my face the way a butcher assesses a cut of meat. Looking for the line where the knife should go. "Here's the thing, Han. I've been with Dowan since I was sixteen. Nine years. I've watched a lot of men walk into this building thinking they were smart enough to matter. Most of them are gone. Some of them left on their own feet. Some of them didn't."

"That a warning?"

"It's a weather report." He smiled. It didn't reach anything above his mouth. "Don't get lost."

He turned and climbed the last flight. I followed, filing every word, every micro-expression, every detail of the route into the architecture of my memory where Minjun's recorder couldn't reach. The hostility wasn't personal. Or rather, it was entirely personal and had nothing to do with me. Seojin was territorial. I was an intruder in his hierarchy, a stranger being elevated past people who'd bled for their position. His instinct was sound.

That made him dangerous.

Third floor. The corridor here was shorter. Two doors only. One on the left, closed, with a heavier frame than the others and no electronic panel. Just a deadbolt. A room that was locked the old-fashioned way, with a key, and I noted it the way I noted everything: calmly, completely, and with the awareness that nothing in this building was accidental.

Seojin caught me looking. His jaw tightened for half a second before he jerked his chin toward the door on the right.

"Through there. He's waiting."

He didn't follow me in. He leaned against the corridor wall, arms crossed again, and watched me open the door with an expression I couldn't read and didn't try to.

---

Dowan's office was light.

That was the first thing. After the controlled dimness of the corridors, the room was almost shockingly bright. Floor-to-ceiling windows filled the entire far wall, and beyond them, the harbour stretched out in a panorama of grey water, grey sky, and the rusted geometry of container cranes at Pier 9, their arms frozen mid-reach like metal skeletons praying. The morning light came through the glass diffused by cloud cover, soft and even, and it turned everything in the room into a study in muted tones.

The office was sparse. A black lacquer desk, large, positioned so its occupant faced the door with the harbour at his back. A single chair in front of it. No personal effects on the desk except a laptop, a glass of water, and a ceramic pot containing an orchid. White petals, a single stem, improbably alive in a room that felt like it had been designed to discourage living things. Along the left wall, a bank of monitors showed CCTV feeds in silent rotation: the ground floor, the entrance, the loading dock, angles of Hagu-dong streets I recognised. The wall of eyes. Jaewon's eyes, distributed throughout the district, and this room was where they converged.

The chair behind the desk was occupied.

Yun Dowan did not look up when I entered.

He was reading something on the laptop screen, his face lit from below by the pale glow, and I stood three feet inside the door and waited. The file had given me photographs. Surveillance stills, mostly, grainy, shot from distance. They hadn't prepared me for the physical fact of him.

He was larger than the photographs suggested. Broad through the shoulders and chest, the kind of build that came from use, not vanity, filling out a black shirt that was tailored well enough to follow the lines of his body without straining. His jaw was square, heavy, and his brows were thick and straight above eyes that, in the harbour light, appeared almost black. His hair was cropped close on the sides, longer on top, styled with a precision that said someone took care with it every morning. His mouth was set in a line that communicated nothing.

On his left hand, where it rested beside the laptop, I could see the tattoo. A black chrysanthemum, the petals detailed and dense, covering the back of his hand and wrapping around his wrist before disappearing beneath his sleeve. The Yun family mark. Ink that said ownership the way a brand says ownership, and I thought of cattle, and then I thought of nothing, because he looked up.

The weight of his attention was physical. Not threatening, exactly. Worse. Thorough. His eyes moved from my face to my shoulders to my hands to my boots and back to my face in a circuit that took perhaps four seconds and left me with the distinct impression that he now knew things about me I hadn't told him.

I held still. I kept my face in its default register: mild, attentive, the expression of a man who was competent and uncomplicated and had nothing to hide. Inside, every nerve I owned was firing at a frequency I hadn't felt since training.

"Han." His voice was quiet. Not soft. Quiet the way a room goes quiet before the verdict. Low, unhurried, with a texture like gravel under water. "Sit."

I sat. The chair was wood, uncomfortable by design. Everything in this room served a purpose, and the purpose of this chair was to remind its occupant that they were not comfortable here.

Dowan closed the laptop. Placed his hands flat on the desk, one on each side, the chrysanthemum tattoo vivid against the black lacquer. His fingers were long, the knuckles thickened and scarred, skin split and re-healed over years until the bones beneath looked like they'd been set wrong and corrected by someone who wasn't a doctor.

"Bae's restructure," he said. "The restaurant owner."

"Approved?"

"Being reviewed. You recommended leniency on a fifty-three-million-won default. That's unusual for a collector."

"A dead debtor doesn't generate revenue. A breathing one does. It's arithmetic."

Something shifted in his expression. Not a smile. The ghost of a place where a smile would go, if he were the kind of man who offered them to strangers. "My father's people wanted to liquidate him completely. Take the restaurant, the car, the insurance, and send someone to explain the interest in person. You know what that means."

"I know what that means."

"You talked them into a restructure instead. With a revenue-indexed repayment schedule. That's not arithmetic. That's creative."

I said nothing. Silence was a tool Minjun had taught me early: let the other person fill it. They'll tell you what they think while trying to make you tell them what you know.

Dowan studied me. The harbour light shifted as a cloud moved, and for a moment his face was in shadow, the angles harder, the eyes darker. Then the light returned, and he leaned back in his chair.

"Your file says you did two years in Chungju for assault. Discharged from the army before that. No education past high school."

"That's what it says."

"A man with no education past high school doesn't build a revenue-indexed repayment schedule."

"A man in Chungju has a lot of time to read."

His eyes stayed on mine. Two seconds. Three. The silence was a living thing in the room, and I let it breathe, let it sit between us like a third party who knew more than either of us was saying.

"I have a job for you," he said. "A test, if you want to call it that."

"I'd rather call it a job. Tests imply I might fail."

"You might." He opened a drawer, pulled out a slim folder, and slid it across the desk. "Nam Jungsoo. Owns a construction company in Sangji District. He borrowed two hundred million won through a chain of intermediaries that trace back to us. He's been under police protection for three weeks because he went to the fraud division with a sudden attack of conscience. He's untouchable by conventional collection methods."

I opened the folder. A photograph clipped to the first page: a man in his fifties, soft-faced, wearing a suit that cost more than my apartment's annual rent. An address in Sangji. Police incident reports. Financial statements.

"The fraud division is protecting him because he's offering testimony against the lending chain," I said, scanning. "Not against the Syndicate directly. Against the intermediaries."

"Correct. Which means the police think he's a witness, not a debtor. And we need the money back without creating a trail that connects the lending chain to us."

"You want me to collect two hundred million won from a man surrounded by cops."

"I want you to collect it without anyone knowing it was collected. No threats. No violence. No contact that can be documented. If you can do that, we'll have a longer conversation about your future here."

I closed the folder. Behind Dowan, through the floor-to-ceiling windows, a container ship was moving through the harbour, slow and enormous, its hull the red-brown of dried blood. Seagulls wheeled above it. The cranes at Pier 9 hadn't moved.

"Timeline?" I asked.

"One week."

"I'll need access to his financial records. The real ones, not the police filings."

"Mirae will provide them. Anything else?"

"Quiet. I need everyone else off this. No Seojin, no backup, nobody watching. If the cops smell Syndicate attention, the protective detail doubles and we lose the window."

His eyes narrowed by a fraction. Not suspicion. Assessment. I could feel him weighing me, and the sensation was not unlike being held underwater by someone deciding whether to let you breathe.

"Granted," he said. "Report to me directly. Not to my father's people. Me."

"Understood."

I stood. Tucked the folder under my arm. Turned for the door.

"Han."

I stopped.

"The orchid." I turned back. He was looking at the white flower on his desk, and for the smallest fragment of a second, the mask he wore was not a mask. The something underneath it was not anger or authority or assessment. It was care. The careful attention of a man watching something fragile that he'd chosen to keep alive. Then it was gone, and he was looking at me again with those black, flat, unreadable eyes.

"Close the door when you leave."

I closed it. In the corridor, Seojin was still leaning against the wall, watching me with the unblinking focus of a cat deciding whether something was prey.

"Still breathing?" he asked.

"Apparently."

"Enjoy it." He peeled off the wall and headed for the stairs. "That feeling doesn't last around here."

---

I didn't go straight home.

I walked. Through Hagu-dong's morning shift, which was a different animal than its night. The neon was off and the streets looked worse for it: grease-stained concrete, cracked sidewalks, the shuttered fronts of bars that only had faces after dark. Delivery scooters buzzed through the narrow lanes. A grandmother in a floral housecoat was hanging laundry on a rooftop line four stories up, the sheets snapping in the harbour wind like white flags of surrender. The smell was different too. Morning Hagu-dong smelled like fish guts from the market, exhaust from the buses on the main road, and coffee from the single franchise cafe that had opened on the corner of Block 3 and was slowly being rejected by the neighbourhood like a transplanted organ.

My head was full.

Dowan's office. The sparse control of it. The monitors on the wall, the harbour light, the orchid sitting on that black desk like a single note of colour in a room that had been drained of everything inessential. The way he'd looked at me like he was reading a language he didn't trust himself to translate.

The locked door on the third floor. Deadbolt, no electronic panel, no camera visible. Everything else in The House was surveilled, catalogued, controlled. That door was different. That door was private. Dowan had seen me notice it, and I'd seen his jaw shift when he did, a muscle tightening along the hinge of his mandible that told me the room behind that lock was something he guarded.

I filed it. All of it. The camera positions, the staff layout, the security protocols, the architecture. I would give Minjun the floor plan at our next meeting. I would describe Jaewon's office on the top floor, which I hadn't seen but which Seojin had gestured toward when he'd said, with a casual menace that impressed me despite myself, "Don't go up there unless you're invited. People who go up uninvited come back different. If they come back."

I would describe Dowan. Height, build, appearance, speech patterns, the chrysanthemum tattoo, the scarred knuckles. I would describe the test he'd given me and its parameters. I would be professional and thorough and I would give Minjun everything he needed to update the operational file on the Yun Syndicate's interior.

What I would not describe was the orchid. The way Dowan's face had changed when he looked at it, for that fraction of a second, like a door opening onto a room I wasn't supposed to see. That detail was not operationally relevant. It was personal. It told me nothing about drug pipelines or political connections or shipping manifests.

It told me he was capable of tenderness. And that was the most dangerous piece of intelligence I'd collected in twenty-six months.

I turned onto Block 7's street. The apartment building rose ahead of me, water-stained and sulking, and the broken elevator was a fact of life I no longer resented because four flights of stairs kept me sharp. The stairwell smelled like bleach and someone else's cigarettes. Fourth floor. My door. The karaoke sign across the alley was off in the daylight, just dead glass and metal, and I unlocked the door and went inside and stood in the middle of my one-room performance and thought about the folder under my arm.

Nam Jungsoo. Two hundred million won. Police protection. One week.

I pulled the chair from the counter and sat down and opened the folder and began to work.

Somewhere in the back of my mind, in the room where I kept the things I didn't let myself examine, a white orchid bloomed on a black desk, and a man with scarred knuckles touched it the way you touch something you're afraid of losing.

I turned the page.

The test had started.`,
      },
      {
        number: 3,
        title: "Collection",
        isFree: false,
        content: `Nam Jungsoo lived on the fourteenth floor of a Sangji District high-rise that looked like it had been designed by someone who confused money with taste. Glass and brushed steel, a lobby with marble floors and a concierge desk staffed by a woman who smiled like she was being paid by the tooth. The kind of building where people paid thirty million won a year in maintenance fees and still complained about the water pressure.

I didn't go through the lobby.

I'd spent four days building a pressure profile on Nam Jungsoo, and the picture it painted was the portrait of a man who had mistaken running for a plan. His construction company, Namsung Development, held three active permits in the Sangji redevelopment zone. His wife, a woman named Cho Eunji, taught piano at a private academy in Haeundae and drove a white Mercedes SUV she'd bought with money that had passed through four shell companies before landing in her account. His daughter was nineteen, studying abroad at a university in Melbourne whose tuition was roughly the GDP of a small fishing village. He attended a Presbyterian church on Sundays, played golf at the Haemun Country Club on Wednesdays, and on Tuesdays and Thursdays between two and five in the afternoon, he visited an apartment in Jungang-dong that was leased under the name of a woman named Shin Yuna, age twenty-six, who worked at a hostess bar in Sangji and who was not his wife.

That last detail wasn't in the file Dowan had given me. Mirae's financial records had shown a recurring monthly transfer of four million won to an account registered to a "personal services consultant." A vague enough description to be anything. But the payment dates aligned with a pattern in Jungsoo's credit card transactions: a restaurant in Jungang-dong every Tuesday, a hotel in the same neighbourhood every Thursday, both charges appearing and disappearing within a six-month window before being replaced by the lease payment. He'd moved his mistress into her own apartment. Upgraded from hotels. The progression of a man getting comfortable.

I found Yuna through the lease records Mirae had pulled. I didn't approach her. I didn't need to. What I needed was the fact of her, and the fact that Jungsoo's wife didn't know, and the fact that the police protective detail assigned to Jungsoo was monitoring his safety, not his fidelity. The fraud division cared about his testimony against the lending chain. They did not care about where he spent his Tuesday afternoons.

People always assumed debt collection was about force. About men with scarred knuckles showing up at your door and explaining the mathematics of pain. Sometimes it was. But the cleanest collections, the ones that left no trail and no bruises, were built on something quieter. Information. The gap between who a person presented themselves to be and who they actually were. Everyone had that gap. My entire existence was that gap. The trick was finding the right pressure point: the place where the gap was widest and the fear of exposure was greater than the cost of compliance.

Jungsoo's gap was a twenty-six-year-old woman in a Jungang-dong apartment, and the forty-year marriage that would detonate if her name surfaced in the fraud investigation testimony he was currently volunteering.

---

On the fifth day, I found him.

Not at the Sangji high-rise. Not at the apartment in Jungang-dong. I found him at a coffee shop three blocks from the courthouse where he'd been giving his deposition, a sleek glass-fronted place with too many plants and a barista who took his work personally. Jungsoo was sitting at a corner table with a paper cup he hadn't touched, staring out the window at the street where his police escort, two plainclothes detectives in a silver Kia, were parked at the kerb and looking spectacularly bored.

I ordered an Americano. Sat at the table beside his. Opened a newspaper I'd bought from the stand outside.

"Mr. Nam."

He looked at me the way people look at strangers who know their name: with the careful, calibrated fear of a man calculating how many steps it was to the door.

"Who are you?"

"Nobody important. I'm going to talk for about ninety seconds, and then I'm going to leave, and you're going to finish your coffee and go home and think about what I've said. That's all."

His hand moved toward his phone. I shook my head once, the smallest motion.

"The detectives outside are watching the entrance and the south window. We're at the north wall. They can't see us, and this conversation isn't happening. If you call them over, I'll leave before they reach the door, and the next conversation will be less polite. I am the polite version, Mr. Nam. You don't want the other version."

He stopped reaching for the phone. His face had gone the colour of wet cement.

"Two hundred million won," I said. "You know who it belongs to. The fraud division thinks you borrowed from the intermediaries. You and I both know the chain doesn't stop there. You're giving testimony about the middle of a ladder while pretending the top and bottom don't exist."

"I don't know what you're talking about."

"Jungang-dong. Apartment 14-03. Lease registered to Shin Yuna."

The cement colour drained into something closer to ash. His mouth opened. Nothing came out.

"Your wife is Cho Eunji. Teaches piano. Drives a white Mercedes, license plate Gyeonggi 48-7702. Your daughter is studying in Melbourne on money that Mrs. Cho believes came from the Namsung pension fund. It didn't. It came from the same source as the two hundred million, and if Mrs. Cho's lawyers get involved in a divorce proceeding, the discovery process will make the fraud division's investigation look like a children's game."

"You can't..."

"I'm not threatening you. I'm describing a sequence of events that will occur if the two hundred million isn't returned within seventy-two hours. Not to us. To the intermediary account you originally drew from. The same one you reported to the police. You'll simply... settle your balance. The police will see a debtor honouring his obligation. No Syndicate connection. No trail. And the information about Jungang-dong stays exactly where it is now, which is nowhere."

He was breathing through his mouth. Short, shallow pulls of air that fogged the window beside him in uneven patches. The coffee sat untouched. The newspaper in my hands was open to the business section, and to anyone glancing over, we were two men sitting at adjacent tables, one reading, one staring at nothing.

"Seventy-two hours," I said. "The account number is written on the napkin under your cup. I put it there before you sat down."

His eyes dropped to the cup. His hand trembled as he lifted it. The napkin was there, folded once, with a string of numbers in blue ink that I'd written in a hand nothing like my own.

I stood. Folded the newspaper. Left the Americano on the table with enough cash to cover it and a tip that the barista would remember as generous and the face behind it as forgettable.

At the door, I didn't look back. The detectives in the silver Kia were watching the entrance now, and I turned right, away from their sightline, and walked two blocks north before cutting through a department store and exiting on the opposite street. I caught the 302 bus back to Hagu-dong and sat in the rear seat and watched Sangji's glass towers shrink in the window until they were replaced by the low, stained concrete of the docklands, and the buildings got shorter, and the sky got closer, and I was home.

The whole thing had taken eleven minutes.

---

Dowan was in his office when I reported the next evening. Same desk, same harbour light, same orchid. The container cranes at Pier 9 were lit against the darkening sky, floodlights making them glow like the bones of something prehistoric.

I placed the folder on his desk, open to the confirmation page. A wire transfer of two hundred million won, routed through the intermediary account, timestamped fourteen hours after our coffee shop meeting. Jungsoo had needed less than a day. Fear will do that. The right kind of fear, applied to the right pressure point, and people move faster than you'd believe possible.

Dowan looked at the confirmation. Then at me. Then back at the confirmation.

"Sit down," he said.

I sat. The uncomfortable wooden chair. The harbour behind him had gone the colour of ink, and the office lights reflected in the windows, doubling the room, creating a ghost version of us floating over the water.

"Walk me through it."

I walked him through it. The cover version: Jungsoo had financial exposure through his personal life that made continued police cooperation riskier than settling his debt. I'd identified the exposure. Applied it. He'd paid.

"What kind of personal exposure?"

"An affair. The mistress is in a Jungang-dong apartment. His wife doesn't know. A divorce proceeding would open financial discovery that would unravel everything the fraud division is building, which means Jungsoo's own testimony becomes a weapon against him. He understood that."

"You found a mistress that the police protective detail missed."

"The police weren't looking for a mistress. They were looking for threats."

"And you were looking for leverage."

"I was looking for whatever would work."

He leaned back. The chair creaked. His hands rested on the arms, the chrysanthemum tattoo dark against the chrome, and his knuckles caught the light in a way that made the scar tissue look like quartz seams in stone.

"No contact with the target's family. No threats documented. No violence. No Syndicate fingerprint anywhere on the transaction."

"That was the brief."

"The brief was a test, Han. Most people fail it by being too aggressive or too slow. You did neither." He paused. The silence had texture. "You built a pressure profile. Behavioural patterns, financial cross-referencing, relationship mapping. You found leverage that required access to records most street collectors wouldn't know how to read, let alone think to request."

I kept my face still. The words were praise, but the delivery was dissection. He was taking apart my method the way a mechanic takes apart an engine, looking for parts that didn't belong.

"Mirae provided the financial records," I said. "I just read them."

"You read them like someone who's been trained to read them."

"Chungju had a library."

"Chungju's library doesn't teach intelligence tradecraft."

The word landed in the room like a stone in still water. Intelligence. Not business. Not street smarts. He'd chosen that word deliberately, and the ripples from it touched every wall.

I let two seconds pass. Then I let my mouth pull into the half-grin that Han, the collector, wore when someone came too close to something he didn't want examined. Cocky. A little mean. The face of a man who found the accusation funny because it was absurd.

"Tradecraft," I said. "That's a big word for a guy who reads credit card statements."

"It is."

He didn't smile. He didn't look away. His eyes held mine with the steady, unblinking focus of someone who had decided to see me and was no longer interested in what I was showing him. The harbour light was gone now, replaced by the cold white of the office LEDs, and in that light his face was all planes and shadows and the dimple on his left cheek was invisible, as if even his body knew this wasn't a moment for softness.

"Get up," he said. "We're going somewhere."

---

The car was a black Genesis sedan that smelled like leather and the ghost of Dowan's cologne, something clean and woody with a bitter edge that sat at the back of my throat. He drove. I sat in the passenger seat and didn't ask where we were going because asking would mean I cared, and Han, the collector, didn't care about destinations. He cared about getting paid.

We drove south through Hagu-dong. The streets were narrow and wet from an afternoon rain that had passed through without breaking the humidity, and the neon was on now, pink and blue and the sick yellow of a pawnshop sign that buzzed like something dying. Dowan drove the way he spoke: controlled, unhurried, with a precision that left no room for error or spontaneity. His left hand rested on the wheel, the chrysanthemum visible even in the intermittent streetlight. His right hand was on the gear shift, and I noticed the second tattoo for the first time: a thin line along his right collarbone, visible where his shirt collar fell open. Musical notation. Small enough to miss if you weren't looking. I was always looking.

He pulled over on a side street I didn't recognise. Between a shuttered dry cleaner and a building supply store with a faded awning, there was a door. Not a storefront. Just a door, wooden, with a pane of frosted glass in the upper half that glowed warm amber from inside.

No sign. No markings. The kind of place you only found if someone showed you where it was.

"Come on," Dowan said. He killed the engine and got out.

Inside, the world changed.

The shop was small. Eight seats at a worn wooden counter that had been polished by decades of elbows and wet bowls until the grain had darkened to the colour of honey. Behind the counter, a kitchen the size of a closet, every surface covered with something functional: jars of dried anchovies and kelp, a row of earthenware pots containing pastes and pickled things, a rack of ladles hanging from hooks, a cutting board scarred deep enough to read like a topographical map. The walls were bare except for a single calendar, three years out of date, and a photograph in a wooden frame that showed a young man standing in front of the same counter, thirty years and a full head of hair ago.

Steam. That was what hit me first. Steam rising from a pot on the stove that was large enough to bathe a child in, and in it, broth. The smell of that broth filled the entire space and pushed out everything else: the damp of the streets, the leather of Dowan's car, the tight, controlled atmosphere of The House. It replaced all of it with something so specific and so deeply buried in my memory that my hands went still on the counter before I'd even registered sitting down.

Pork bone. Dried anchovies. Dashima. Green onion, cut thick, not thin. A depth of garlic that meant whole cloves had been simmered for hours, not minced and tossed in at the end. And underneath all of it, the barest trace of doenjang, not enough to taste but enough to give the broth a low, earthy gravity that anchored everything above it.

My grandmother's ramyeon. Not the recipe. The philosophy. The understanding that broth was not a step in cooking but the point of it, that the noodles were a vehicle and the toppings were decoration but the broth was the conversation between the cook and the person being fed, and if you rushed it, you were saying something you didn't mean.

"Wan-ah."

The voice came from the kitchen, and the man it belonged to emerged from behind the steam like something developing in a photograph. Old Man Jung. Sixty-seven, according to the universe bible of Hagu-dong gossip. Small, stooped, with a face that had been weathered past age into the kind of permanence that mountains have. His hair was white and thin, combed back from a forehead creased with deep lines that all pointed upward, as though his face had spent more years smiling than frowning and the architecture reflected it. He wore a stained apron over a thermal shirt, and his hands were red from hot water and steady as stone.

"Two?" Jung asked, looking at me and then at Dowan with an expression that contained no surprise. As if strange men at his counter were as expected as the steam from his pot.

"Two," Dowan said.

Jung nodded and turned back to the stove. No menus. No questions about preferences or allergies or spice levels. Two bowls. That was the entire transaction.

I watched him work. He moved in the small kitchen with an economy that came from forty years of the same choreography: noodles dropped into rolling water, broth ladled from the big pot into two mismatched ceramic bowls, one blue, one brown with a chip on the rim. A handful of chopped green onion. A soft-boiled egg, split with a knife so the yolk ran slow and golden. Sliced mushrooms. A single sheet of gim laid across the top, already curling from the heat.

He placed the blue bowl in front of Dowan and the brown one in front of me. The broth was the colour of clouded amber, and the steam that rose from it carried everything I'd been holding at arm's length for twenty-six months.

Dowan picked up his chopsticks. "Eat," he said. Not an invitation. An instruction.

I ate.

The first mouthful of broth hit my tongue and the back of my throat simultaneously, and something behind my ribs cracked open without warning or permission. It was not the taste. Or not only the taste. It was the temperature of it, the specific scalding warmth that numbed your lips and then bloomed into something gentler as it went down, and it was the weight of it, heavier than water, richer than anything made from simple ingredients had a right to be, and it was the smell, which at this distance, with the bowl inches from my face, was so close to the smell of my grandmother's kitchen in Tongyeong that for three unguarded seconds I was not in Hagu-dong, I was not Han, I was not Agent Shin Haneul, I was eight years old and sitting on a wooden stool while a woman with my mother's hands and a patience the size of the sea fed me because I was hungry and because feeding me was how she said the things she couldn't put into words.

My eyes burned.

I didn't blink. I breathed in through my nose and out through my mouth and I ate another mouthful of noodles and I did not let whatever was happening in my chest reach my face. But my hand. My left hand, the one not holding the chopsticks, had gone flat on the counter, fingers pressed hard against the worn wood, and the pressure was wrong for a man who was simply enjoying a bowl of ramyeon. It was the pressure of someone holding on.

I looked up. Jung was watching me from behind the counter with an expression I couldn't name and didn't want to. It was not curiosity. It was recognition. The look of a man who had been feeding people for forty years and knew exactly what it meant when someone gripped his counter like it was the edge of a cliff.

He said nothing. He placed a small dish of kkakdugi beside my bowl, the radish kimchi cut into rough cubes, bright red, and he did it the way my grandmother used to place things beside my plate: without comment, without expectation, as though the act of giving required nothing in return.

I ate the kkakdugi. It was perfect. Crisp, sour, the ferment sharp enough to cut through the richness of the broth and reset the palate for the next mouthful. I ate it and I kept my eyes on my bowl because the alternative was looking at Jung again, and I was not confident about what my face would do if I did.

Dowan ate beside me in silence. He ate slowly, methodically, and I noticed that he held his bowl the way you hold something you've been given many times: without ceremony, with the comfort of repetition. He belonged here. This counter, this steam, this old man who called him by a childhood name. This was not business. This was the room behind the locked door, or something adjacent to it. The place where the mask thinned.

I understood, then, what this was. A reward. I'd passed the test. I'd collected two hundred million won from a man surrounded by police without leaving a mark, and this was what success earned in Dowan's world. Not money. Not promotion. A bowl of ramyeon in a shop with no sign, served by an old man who called you by name.

But it was also a test. A different kind. The collection had shown him what I could do under pressure. The ramyeon shop was showing him what I did when the pressure dropped. When the performance wasn't necessary. When there was steam and warmth and a bowl of something made with care, and the walls I maintained might, for a moment, come down.

He was watching me. I could feel it without looking. The particular weight of his attention, which I'd first felt in his office and which I was beginning to understand was not something he turned on and off but something he aimed, like a weapon, and right now it was aimed at my hands.

My left hand. Still flat on the counter. Still pressing too hard.

I made myself relax it. Picked up the bowl with both hands and drank the broth the way Han, the collector, would drink it: appreciatively, simply, the way a man with no past and no complications enjoys a good meal. I set it down. Wiped my mouth with the back of my hand.

"That's the best ramyeon I've ever had," I said to Jung. And my voice was steady, and the words were true, and the truth of them was the most dangerous thing in the room.

Jung smiled. The lines on his face rearranged themselves into something warm and worn, like a door that had been opened ten thousand times. "You eat like someone who's been hungry for a long time," he said. "Not in the stomach. Somewhere else."

I looked at my bowl. The broth was nearly gone. The noodles were finished. The egg yolk had mixed with the last of the liquid, turning it golden, and the gim had dissolved into dark, soft fragments that clung to the sides of the ceramic.

"It reminds me of someone's cooking," I said. And I should not have said it. Han, the debt collector with no education past high school and two years in Chungju for assault, did not have a someone whose cooking made his eyes burn. He had a past made of fabricated violence and institutional food and the kind of emptiness that didn't lend itself to nostalgia. What I'd just said was a crack in the wall, and I'd handed it to Dowan for free.

"Whose?" Jung asked.

"My grandmother's." The words came out before the discipline caught them. Two words. A lifetime inside them.

Jung nodded. He took my bowl and Dowan's and carried them to the sink and began washing them with the careful attention of a man who believed that how you cleaned was as important as how you cooked. The water ran. Steam rose from the sink. The shop was quiet except for the sound of water and the low, constant simmer of the pot on the stove, which would keep going long after we left, feeding whoever came next.

Dowan placed a folded bill on the counter. Jung ignored it. Dowan left it there. This, too, had the rhythm of repetition. An argument conducted entirely in gestures, settled the same way every time: the money left, the money eventually taken, the principle maintained on both sides.

We walked out into the night. The side street was dark except for a single streetlight at the far end that turned the wet asphalt into a mirror reflecting nothing. The air was cool against my face after the warmth of the shop, and it smelled like rain and rust and the salt tang of the harbour two blocks south.

Dowan lit a cigarette. Not Raison. Something else, a brand I didn't recognise, in a black pack he pulled from his coat pocket. The lighter's flame was brief, and the first exhale of smoke drifted between us and vanished.

He didn't offer me one. He stood beside the car and smoked and looked at the street, and I stood beside him and waited, because the silence was his and he would fill it when he was ready.

"Jung's been here forty years," he said. "Same spot. Same recipe. My mother brought me when I was four. Before she left."

I said nothing. The information was a door he'd opened on purpose. I didn't walk through it. I waited on the threshold.

"He's the only person in Hagu-dong who isn't afraid of my father." He took a drag. The cherry brightened, painting his cheekbones in amber. "That makes him either brave or senile. I've never figured out which."

"Could be both."

The ghost of the dimple. There and gone. He looked at me, and the look lasted one beat longer than it should have. Two beats. Three. The streetlight was behind him, which meant his face was in shadow and mine was lit, and I was aware, with the trained precision of a man whose survival depended on reading rooms, that the balance of visibility was not in my favour. He could see me. I could not see him. And whatever he was looking for in my face, he was looking for it in the place where the ramyeon had opened something I hadn't closed fast enough.

"You're not what your file says you are, collector."

He said it lightly. The way you'd comment on the weather or the time. A throwaway observation between the last drag and the moment you drop the cigarette.

Not lightly meant. The weight of it sat in the air between us like a held breath. His eyes were still on me, dark, unreadable, and the cigarette burned down between his fingers, and the harbour wind moved through the street carrying salt and diesel and the distant sound of a ship's horn, low and long, the sound of something arriving or leaving, and I couldn't tell which.

I held his gaze. I let Han's half-grin surface, easy, unbothered, the face of a man who had nothing to hide because he had nothing worth hiding.

"Files don't say much," I said.

He dropped the cigarette. Ground it under his heel. The ember died on the wet asphalt.

"No," he said. "They don't."

He got in the car. I got in the car. He drove me back to Block 7 without another word, and when I got out, he pulled away before I reached the building's entrance, the Genesis's taillights bleeding red into the wet street until the darkness and the fog swallowed them.

I climbed four flights. Stood in my apartment in the dark. The karaoke sign across the alley was in its red phase, and the room was the colour of an open wound.

My hands were shaking.

Not fear. Not adrenaline. Something worse. The afterimage of a wooden counter under my palms and the taste of broth that a dead woman used to make me and an old man's voice saying *you eat like someone who's been hungry for a long time*, and the precise, annihilating weight of Dowan's attention as he watched me remember something I'd been paid to forget.

I went to the bathroom. Crouched beside the sink. Pressed my fingers against the duct tape. The phone was there. The mission was there. The architecture of my fabricated life was intact, every wall in place, every door locked.

Except one. A crack, two words wide. *My grandmother's.* Said in a steam-filled shop to an old man who fed strangers, in front of a man who was already looking at me too closely and who had just told me, in six words delivered like a knife wrapped in silk, that he saw the gap between who I was performing and who I was.

I pressed my forehead against the cold pipe under the sink and breathed.

*You're not what your file says you are, collector.*

No. I wasn't.

And the problem, the real problem, the one that no amount of tradecraft or training or twenty-six months of practice could solve, was that in Jung's shop, with the steam on my face and the broth on my tongue, I hadn't wanted to be.`,
      },
      {
        number: 4,
        title: "Closer",
        isFree: false,
        content: `A month is long enough to learn how a man takes his coffee. Short enough to pretend that knowing doesn't mean anything.

Dowan drank his black. No sugar, no cream, from a ceramic mug he kept in the bottom drawer of his desk that was chipped on the rim and didn't match anything else in the office. He filled it from the machine on the ground floor every morning at exactly seven forty-five, before anyone else arrived, and carried it up three flights without a lid. I knew this because I was there at seven forty-five now. Every morning. Standing by the zinc-topped bar, pretending to review collection files on my phone while my peripheral vision tracked the chrysanthemum tattoo wrapped around the hand that held the mug.

Thirty-one days since the ramyeon shop. Thirty-one days since *you're not what your file says you are, collector*. In that time, I had become something I didn't have a clean word for. Not his partner. Not his lieutenant. Seojin held those positions and guarded them with the instinct of a dog who'd been fed from one hand his entire life. What I'd become was closer to a shadow. Where Dowan went, I went. What Dowan needed done, I did.

And every seventy-two hours, I told Minjun everything.

---

The work had a rhythm. Ugly, efficient, repeating.

Mornings were collections. The black Genesis moving through Hagu-dong's waking streets, parking outside restaurants and warehouses and apartment blocks. I'd go in with a folder and come out with a signature or a payment plan or the quiet understanding that the next visit would not be mine. A dry cleaner who wept into his hands while his wife pressed shirts behind the counter, the hiss of the iron punctuating his sobs. A nightclub owner who pulled a knife and found his wrist pinned to the table by Seojin before the blade cleared the sheath. A shipping executive who paid in full, in cash, from a briefcase he'd had waiting by the door.

I memorised everything. Names, amounts, account numbers, the flow of cash from street-level businesses into Mirae's laundering architecture. I transmitted it at night, sitting on my bathroom floor with the NIS phone, typing reports into the encrypted server while the karaoke sign across the alley painted my walls in alternating red and nothing.

Evenings were Club Vein.

The ground floor was a body. Three hundred people moving in violet light, the air thick with fog machine haze and sweat and the sweet chemical burn of whatever was being smoked in the corners the bouncers pretended not to see. The music wasn't heard so much as inhabited. Bass frequencies low enough to settle into the cage of your ribs and replace your heartbeat with something louder and less personal. Violet LED strips cut through the fog in parallel lines that made the crowd look sectioned, bodies appearing and disappearing in slices of purple light.

We never stayed on the ground floor.

The VIP level was a different country. The booths were deep, upholstered in black velvet worn to a shine at the edges, and heavy curtains could be drawn for the kind of privacy that turned conversations into confessions and handshakes into contracts. The light up here was dimmer, warmer, amber cutting through the residual violet, and the smell shifted from the ground floor's chemical fog to something older: leather, expensive whisky, the faint musk of cologne layered over cigarette smoke.

Dowan held court here two, three nights a week. He sat in the corner booth with his back to the wall and his eyes on the room, and people came to him. Suppliers. Club managers. Men who spoke in low voices and left envelopes that Dowan slid into his jacket without looking at. I sat beside him and memorised every name, every face, every figure spoken over whisky that cost more per bottle than Bae's restaurant made in a week.

The bass from below lived in my sternum. Hours of it, night after night, until I started feeling the phantom vibration even in silence, a ghost rhythm in my chest that wouldn't stop, as though Club Vein had installed something inside me that kept playing after I left.

Seojin watched me. He was always watching. From across the VIP booth, from the bar, from the doorway where he leaned with his arms crossed and his bleached hair catching the violet light like a warning flare. He never said anything directly. He didn't need to. His presence was a question asked in silence: *who are you, and why are you here, and how long before I find out?*

I ignored him the way Han, the collector, would ignore him. With the casual indifference of a man too busy being useful to worry about being liked.

---

"Shipment schedules," Minjun said. "Names. Account numbers. It's good. It's not enough."

The parking garage. Sublevel two. The same dead Kia, the same construction van, the same black Grandeur with the engine running and the ashtray overflowing with Dunhill filters. Two in the morning, and I was sitting in the passenger seat with the window cracked because the smoke had reached a density that qualified as weather.

"What else do you need?"

"Political connections. The pipeline from Syndicate money to government officials. That's the case, Haneul. Without the political thread, we have a mid-level organised crime prosecution. The brass didn't invest three years for a mid-level prosecution."

"I'm working on it."

"Work faster." He lit a fresh Dunhill off the dying one. The brief doubling of ember light turned his face into something carved: all hollows and edges, the skin under his eyes so dark it looked bruised. "The director wants a progress briefing in two weeks. If I walk in there with shipment logs and club revenue, he'll pull funding and reassign you."

"Jaewon keeps the political contacts separate from operations. I can't access his private records without being on the top floor, and nobody goes up there without an invitation."

"Then get invited."

"You don't get invited. You get summoned. And if you get summoned for the wrong reason, you don't come back down."

Minjun smoked. The engine idled.

"There might be another way," he said. "Dowan's office. He manages the operational layer between street crime and political money. If those connections exist in documentation, they'd be in his files."

"You want me to search Dowan's office."

"I want you to find the political thread. How you find it is operational discretion."

"If I'm wrong about the files being there, I've burned my cover for nothing. If I'm right and I'm caught, I'm dead."

"You won't get caught."

"Twenty-six months is a long time to keep winning."

He turned to look at me. The Dunhill between his fingers had burned down to a column of ash that defied gravity.

"Are you still you?" he asked.

The question. The check-in. The three words that were supposed to function as a welfare assessment and increasingly functioned as an accusation.

"I'm still me."

He held my gaze. Something worked behind his expression, a calculation or a concern, and I watched him decide which one to let through. He chose neither. He looked away. Crushed the Dunhill.

"Two weeks," he said. "Find the thread."

---

The days blurred. That was the danger of proximity. When you spent enough time with someone, the hours stopped being discrete units and started flowing together, a current you floated in without noticing the distance you'd covered until you looked back and the shore was gone.

I learned things about Dowan that no intelligence file contained. That he read on his phone during sedan rides and held the screen close to his face because he would never admit he needed glasses. That he tipped the pojangmacha vendors in Hagu-dong, folded bills left under bowls without comment. That he called Old Man Jung every Sunday morning for exactly twelve minutes, standing by his office window, and his voice during those calls was different. Not softer. Younger. As if the man who spoke to Jung existed at a different age than the man who managed violence.

I learned that his hands narrated what his face refused to. When he was angry, they went still. When he was thinking, the right hand would tap a rhythm on whatever surface was nearest, something musical and precise, a pattern I suspected was connected to the notation tattooed along his collarbone.

I learned all of this. I filed none of it. These details were not operationally relevant. They were useless to every version of me except the one who sat in the passenger seat of the Genesis at eleven p.m. on a Tuesday, watching Hagu-dong scroll past the rain-streaked window, and felt the silence between us like a room I wanted to stay in.

---

It was raining. It was always raining in Haemun, but this rain had committed. A full downpour that turned the windshield into a streaming wall of distortion and reduced the neon of Hagu-dong to smeared blurs of pink and blue, colour without shape, like a painting left out in a storm.

Dowan drove. The wipers beat a slow, metronomic rhythm. The sedan's interior was dark except for dashboard glow and the intermittent sweep of headlights from oncoming traffic, each one flaring across Dowan's face and disappearing. The car smelled like rain-damp wool and leather and the ghost of his last cigarette.

We'd come from Pier 9. A cargo ship from Vladivostok with a manifest that listed machine parts and a hold that didn't match. I'd committed the ship's name and registry to memory, and the calculation of when I could transmit them to Minjun had felt mechanical, obligatory, like a prayer recited by someone who'd stopped believing but couldn't stop kneeling.

Dowan hadn't spoken since we left the pier. The silence was comfortable, which was worse than the alternative. Comfortable silence was intimacy. The sound of two people who had spent enough time together that the absence of words had become a language of its own.

The rain hammered the roof. The wipers beat. Hagu-dong slid past in watercolour.

"Do you have anyone?"

The question came without preamble. No shift in posture, no preparatory breath. He asked it the way he asked everything: directly, without decoration, his eyes on the road.

I looked at him. His profile was lit intermittently by the streetlights, each one revealing him in a flash and then returning him to shadow. Jaw. Brow. The heavy line of his mouth. Flash, shadow, flash.

"Anyone?" I asked.

"Family. Someone waiting. Anyone."

The wipers beat. Two cycles. Three.

"No," I said.

He nodded. The gesture was small, almost imperceptible, the kind of nod that acknowledged an answer without evaluating it. But his right hand, the one resting on the gear shift, pressed his thumb against the scarred knuckle of his index finger. Once. Hard.

"Why do you ask?" I said.

"Curiosity."

"You're not the curious type."

"No." He turned the wheel. The sedan rounded a corner, and the headlights swept across a row of shuttered shop fronts, metal gates gleaming wet. "I'm not."

The silence returned. But it was a different silence now. Heavier. Shaped by the question and the answer and the things neither of us had said. He'd asked because he wanted to know. Not for the Syndicate. Not for operational reasons. He'd asked the way a person asks when they're standing at the edge of something and checking whether anyone will notice if they fall.

I knew this because the answer I'd given him was true. Both versions of it. Han, the collector, had no one. Shin Haneul, NIS agent, had no one. The fabrication and the reality had converged on the same empty room, and the loneliness was so precisely shared between my two selves that it had become the most honest thing about me.

He didn't tell me his answer. He didn't need to. It was there in the thumb pressed against the scarred knuckle, in the twelve-minute Sunday calls to an old man who made ramyeon, in the orchid he kept alive on a black desk in an office designed to discourage living things. He had no one. He had built a life inside a machine that killed softness, and he had survived it by becoming the machine, and somewhere inside the mechanism, a white flower bloomed because he refused to let it die.

We drove the rest of the way without speaking. He dropped me at Block 7. The rain was still falling, and when I opened the door, the sound of it flooded the sedan's quiet interior like a broken seal.

"Collector."

I paused.

He was looking at the windshield, not at me. The rain streamed down the glass and the dashboard light caught the planes of his face and for a moment he looked like someone underwater, seen from above, sinking slowly, watching the surface recede.

"Get some sleep," he said.

I got out. Shut the door. Watched the taillights disappear into the rain, red bleeding into grey, and then gone.

---

I searched his office on a Thursday.

Dowan left The House at nine p.m. for a meeting with Mirae at Club Vein, something to do with quarterly accounts that required the kind of concentration he didn't give to things that bored him. He'd be gone two hours minimum. Seojin went with him. The ground floor was staffed by two men who spent their nights watching CCTV feeds and playing cards, and whose attention could be reliably predicted by the schedule of a football match I'd confirmed was on that night.

The third floor was empty. The camera in the corridor was on a forty-five-second rotation that left a twelve-second blind spot at the door to Dowan's office. I'd timed it across six separate nights. Twelve seconds to enter. Twelve seconds to exit. Everything between was invisible to the surveillance system because Dowan, in a decision that revealed more about him than any conversation, had no camera inside his own office. He surveilled everyone. He refused to be surveilled himself.

I picked the lock in four seconds. Closed the door behind me. Stood in the dark.

The harbour was visible through the floor-to-ceiling windows, the city's lights reflecting off the water in long, shivering columns of white and amber. The orchid on the desk was a pale shape in the dimness. The room smelled like him. Coffee and clean cotton and the woody edge of cologne that had seeped into the furniture over months, maybe years.

I moved to the desk. The laptop was password-protected. I'd expected that. I wasn't here for the laptop. I was here for the filing cabinet against the left wall, a steel unit with three drawers, locked with a key Dowan kept on a ring in his coat pocket. I'd watched him open it twice. Standard pin-tumbler lock, four pins.

Thirty seconds. The drawer slid open.

Files. Organised with the precision I'd come to expect. Collection records, payment schedules, personnel files, operational summaries. I photographed each page with the NIS phone, working by the harbour light that came through the windows, my hands steady, my breathing controlled, my pulse doing something my breathing refused to.

Middle drawer. Financial records. Mirae's laundering accounts, routing numbers, shell company registrations. I photographed them. This was the architecture Minjun wanted, the skeleton of the money flow, and each image I captured was a bone pulled from the body of the operation I was embedding myself inside.

Bottom drawer. I almost didn't open it. The first two drawers had given me enough to keep Minjun satisfied for weeks. The political thread might not be here. It might be in Jaewon's office, or in Dowan's head, or nowhere in paper form at all.

I opened it.

The folder was unmarked. Brown manila, no label, thinner than the others. I pulled it out and opened it on the desk and angled it toward the harbour light.

Bank statements. Transfer confirmations. A list of account numbers paired with names and amounts, handwritten in Dowan's precise, angular script. I scanned the names, looking for politicians, assemblymen, government officials, the political thread that would justify three years of operation and one man's dismantled life.

The names were not politicians.

Hagu-dong Community Youth Centre. 15,000,000 won. Monthly.

Haemun Dockworkers' Mutual Aid Society. 8,000,000 won. Quarterly.

Block 7 Residents' Emergency Fund. 3,000,000 won. Monthly.

Tongyeong Coastal Fishermen's Cooperative. 5,000,000 won. Bi-monthly.

The list continued. Twelve organisations. Community groups, mutual aid funds, worker cooperatives, a free clinic in Hagu-dong I'd walked past a hundred times without knowing who funded it. The amounts were significant. The transfers were routed through three layers of intermediary accounts, structured to be invisible to anyone who wasn't specifically looking for them, and they originated from Syndicate revenue streams that I recognised from Mirae's laundering architecture.

He was stealing from the Syndicate. Not for himself. For them. For Hagu-dong.

I stood in the dark office with the file open on the desk and the harbour light falling across handwritten numbers that added up to something I hadn't been trained to account for. The orchid was a white blur at the edge of my vision. The room smelled like coffee and cotton and the cologne of a man who broke people's hands for a living and used the money to fund a youth centre and a free clinic and an emergency fund for the residents of the building where I slept.

Block 7. My building. The emergency fund that had repaired the stairwell lighting last month, that I'd assumed was the landlord finally doing his job. That was Dowan. The free clinic where the pojangmacha vendors went when they burned themselves on the griddles and couldn't afford the hospital. That was Dowan. The youth centre where kids from the dockworker families went after school so they weren't on the streets where the Syndicate recruited. That was Dowan.

He was redistributing. Quietly, systematically, at enormous personal risk. If Jaewon discovered this, the consequence would not be a reprimand. It would be the soundproofed basement and the men whose names I'd never learned because names weren't relevant to what they did. Dowan knew this. He was doing it anyway. He was hollowing out his father's empire from the inside and filling the cavity with something that looked, from the right angle, like penance.

This didn't fit the profile. The NIS file on Yun Dowan described an enforcer, an heir apparent, a man who had been shaped by violence into a weapon his father aimed at whatever needed breaking. Efficient. Dispassionate. Dangerous. The file did not describe a man who funneled millions to community organisations and kept an orchid alive on his desk and took his collector to an old man's ramyeon shop as a reward.

The file described a monster. The file was wrong.

I photographed the pages. All of them. My hands were steady. My breathing was controlled. The images would go to Minjun, who would file them in the operational record, where they would become evidence. Evidence that Dowan was embezzling from the Syndicate. Evidence that could be used as leverage, as a weapon, as the thread that unraveled a man who was already unraveling himself.

I put the file back. Closed the drawer. Locked it. Wiped the surfaces I'd touched. Stood in the dark office and looked at the orchid, which was the same white it had been when I walked in, which hadn't changed at all, which didn't know anything about what I'd just done.

The harbour light moved on the ceiling. The building was quiet. Somewhere below, the football match was still playing, and the men at the CCTV monitors were still watching it, and the world was still the shape it had been an hour ago.

Except it wasn't. Because I was standing in the office of a man who had asked me if I had anyone, and whose answer was the same as mine, and who was trying to save the neighbourhood that his family's empire was poisoning, and I was holding a phone full of photographs that could destroy him.

I left the office. Twelve-second blind spot. The corridor was empty. The stairwell was quiet. The rain had stopped while I was inside, and when I stepped out of The House into the Hagu-dong night, the streets were wet and gleaming and the air smelled like salt and clean concrete, the way a city smells when the rain has washed it and left it raw.

I walked home. Four flights. My apartment. The karaoke sign was off. The room was dark.

I sat on the bathroom floor with the NIS phone in my hand and the photographs glowing on the screen and I thought about a man who drove through rain-soaked streets and asked questions he already knew the answer to and funded youth centres with money stolen from his father's drug pipeline.

I thought about the word *monster*.

I thought about how easy it had been, until tonight, to believe that what I was doing was simple. A mission. An operation. A case with a target and an objective and an endpoint where I walked away and became someone real. Simple. Clean. The math of justice: gather evidence, build a case, bring down the bad men, save the world, go home.

The photographs on the screen didn't fit that math. They were a remainder. The part left over after the equation balanced, the part that meant the equation had never been as clean as I'd needed it to be.

I pressed my thumb against the ring on my right hand. My mother's silver. Worn thin on the inside from turning.

I sent the photographs to Minjun.

Then I put the phone back under the sink and pressed my forehead against the cold pipe and stayed there until my breathing evened out and the trembling in my hands found something to do with itself, which was nothing, which was all I had to offer.

The pipe was cold against my skin. The apartment was dark. Somewhere in Hagu-dong, a man with scarred knuckles and a chrysanthemum on his hand was sitting in a velvet booth reviewing quarterly accounts, and he didn't know that the person he'd asked about was no one, and that the no one was me, and that I had just handed his secret to the people who would use it to end him.

I closed my eyes.

I was still me.

I wasn't sure that was a good thing anymore.`,
      },
    ],
  },
  {
    slug: "brutal-vows",
    title: "Brutal Vows",
    tagline: "I didn't come to be a wife. I came to be a weapon.",
    genre: "spicy-romance",
    chapters: [
      {
        number: 1,
        title: "The Fitting",
        isFree: true,
        content: `The woman in the mirror was wearing a wedding dress, and I wanted to set her on fire.

My name is Sera Maren. In eleven days, I would become Sera Valenti, and the seamstress kneeling at my feet had no idea she was pinning silk to a loaded gun. She worked a needle through the hem with the quiet efficiency of someone who'd dressed a thousand brides and believed in every single one. The dress was Vera Wang. Column silhouette, off-the-shoulder, Italian mikado fabric so white it made my skin look like something carved from warm stone. Forty-seven thousand dollars of bridal fantasy, charged to my father's account. He could afford it. He was selling his daughter. The least he could do was wrap her nicely.

"Stop fidgeting," Lena said from the champagne-coloured settee behind me. She had her legs crossed, a glass of Veuve in one hand, and the expression of a woman trying very hard not to cry or commit a felony. Possibly both. "You look incredible."

"I look like a sacrifice."

"You look like a Vogue cover. Same energy, I guess."

I studied my reflection. Kleinfeld's fitting room was designed to make women fall in love with themselves. Circular platform, three angled mirrors, lighting calibrated to erase every flaw and amplify every curve. The walls were ivory. The carpet was ivory. The champagne was golden and the chairs were blush and everything in this room existed to whisper *yes, this is who you were always meant to be*.

It was suffocating. All that white. All those mirrors. Twelve versions of me stared back from every surface, and not one of them looked like a woman about to marry for love.

Good. Love was not the assignment.

The seamstress shifted on her knees, tugging the fabric tighter at my waist. Her fingers were quick and sure. A pin appeared between her lips, then in the silk.

"You carry tension here," she said, pressing two fingers to the spot where the dress met my ribcage. "And here." She touched my shoulder. "I can let out the bodice a quarter inch. It won't change the line, but you'll breathe easier."

"She doesn't breathe easier," Lena said. "That's her whole thing."

I shot her a look through the mirror. She raised her glass and didn't apologize.

The seamstress moved to my left side and paused. Her eyes caught on my wrist. The tattoo was small, precise black ink against the inside of my forearm: *III*. Roman numeral three.

"That's lovely," she said. "What does it mean?"

I pulled my hand away. Not fast, not rude. Controlled. The way I did everything.

"Family," I said.

She smiled and went back to the pins. She didn't push. People rarely did. There was something in the way I said the word that shut doors.

*III.* Third of three. Marcus, Celia, Sera. The Maren children, raised in glass towers and silence, each of us bright and sharp and built to cut. Marcus was the eldest. Twenty-three when he died, his car wrapped around a guardrail on the Long Island Expressway, a story I had swallowed like shrapnel and carried in my chest for seven years. Celia was the youngest. Twenty when the pills stopped her heart, curled on a bathroom floor in a Soho apartment she couldn't afford, wearing a dress she'd bought to impress people who didn't care if she lived or died.

I was the middle. I was the one who survived. I was the Roman numeral that mattered, the only digit in that sequence that still had a pulse, and some mornings the weight of that felt like drowning in open air.

But I did not think about that in the fitting room. I thought about angles. Exits. The task at hand.

"So," Lena said, setting down her champagne with the careful precision of someone choosing her next words the way a surgeon chooses a scalpel. "Are we going to talk about it?"

"We're not."

"Because I feel like we should."

"You feel like we should talk about a lot of things. That's because you're a lawyer. You're pathologically incapable of leaving silence alone."

"I'm your best friend."

"Also true. And as my best friend, you know that when I say *we're not talking about it*, I mean exactly that."

Lena leaned forward. The settee creaked. Her dark curls fell across her forehead, and she pushed them back with a gesture so familiar it ached. I'd known her since law school orientation, when she'd sat next to me, taken one look at my colour-coded notes, and said, *You're either going to be my best friend or my nemesis, and I don't have the energy for a nemesis.* She'd been right. She usually was.

"Sera."

"Lena."

"You're marrying Nico Valenti."

There it was. The name. I let it land the way you let a wasp land on your skin, still, watchful, aware that any sudden movement would cause a sting.

Nico Valenti. Thirty years old. Dark-eyed, sharp-jawed, heir to an empire built on blood and territory and the kind of loyalty that only exists when the alternative is a shallow grave. His father, Dominic, had been shot dead at a family dinner five years ago. His younger brother, Luca, was beautiful and volatile and almost certainly the reason my sister had access to the pills that killed her. And Nico, the eldest, the one who sat at the head of that family like a king carved from black marble, had agreed to marry me as part of an alliance brokered by his mother and my father.

A ceasefire disguised as a wedding. A business merger sealed with two human lives.

My father had told me over dinner at the Maren Tower, his silver hair immaculate, his voice the same flat, boardroom monotone he used for everything, from quarterly earnings to the sale of his only living daughter. *The Valentis have agreed. You'll marry the eldest. It secures the transition. It protects our assets. It ends the exposure.* He'd turned his signet ring once, twice, three times. His tell. *You'll do this for the family, Sera.*

And I had looked at him across the white tablecloth and the crystal and the silence where my siblings should have been, and I had said *yes*.

Not because I was obedient. Not because I was afraid. Because I had spent seven years waiting for exactly this invitation. An open door into the house of the people who destroyed my family. A seat at their table. A place close enough to reach.

I didn't come to be a wife. I came to be a weapon.

"I know who I'm marrying," I told Lena.

"Do you? Because last time we discussed the Valentis, you referred to Nico as, and I quote, *the reason I believe in hell*."

"I contain multitudes."

"You contain a terrifying revenge fantasy that you think I don't know about."

I turned on the platform. The dress whispered against my legs. The seamstress made a small, distressed sound and reached for a pin that had come loose.

"Please hold still, Ms. Maren."

"I'm fine." I wasn't fine. My left hand had drifted to my wrist again, thumb pressing against the tattoo. I caught myself and stopped. Folded my hands in front of me. The seamstress noticed. I saw it in her eyes. She said nothing.

People who work with brides learn to read bodies the way soldiers learn to read terrain. She could see the tension threaded through me like wire, and she was smart enough not to pull it.

"I know what I'm doing," I said to Lena, quieter now. Not softer. There's a difference. Soft was a thing I couldn't afford. Quiet was a thing I could weaponize.

"I know you know what you're doing. That's the part that scares me." Lena uncrossed her legs and leaned back. "You've been planning something since Marcus died. Don't look at me like that. I know you. I've watched you build a case the way other people build houses, one brick at a time, every piece load-bearing. I've seen that notebook."

"Don't."

The word came out like a blade. Sharp, clean, final. Lena's mouth closed.

The notebook. Marcus's notebook. Black Moleskine, soft cover, filled with his handwriting, that angular, impatient scrawl that looked like a man in a hurry. I'd found it in his apartment two weeks after the funeral, hidden in a hollowed-out copy of *The Art of War* because my brother had always been smarter than anyone gave him credit for and more dramatic than he needed to be. Inside: names. Numbers. Dates. Valenti names and Valenti numbers and Valenti connections laid out in ink like a map of the thing that killed him.

I had memorized every page. I had built my life around those pages. And I did not talk about them. Not here. Not in a room full of mirrors and white fabric, where every surface was designed to reflect a woman who didn't exist.

Lena held up both hands. Surrender.

"Okay. Okay. I'm done."

"You're done."

"I'm done." She picked up her champagne. Took a long sip. Set it down. "But Sera?"

"Mm."

"If this is really what you want, then I'm with you. Maid of honour. Ride or die. All of it. But you have to promise me one thing."

I waited.

"Come back from it. Whatever you're walking into, whatever you're planning, come back. I can't lose you too."

The word *too* hung in the air between us. Lena had loved Marcus. Not romantically, but she'd loved him the way you love your best friend's older brother, that easy, uncomplicated warmth that exists without negotiation. She'd helped me pack Celia's apartment. She'd held my hair back while I threw up on the bathroom floor the night we got the call. She knew what the Roman numeral meant. She knew what every part of me meant, and she still chose to sit on this ridiculous champagne-coloured settee and drink expensive wine and pretend we were just two women at a bridal fitting, doing a normal thing, living a normal life.

I loved her for it. I would never tell her. But I loved her.

"I'll come back," I said.

She nodded. Wiped under her eye with one finger. Picked up her glass.

"Good. Now turn around. I need to see the back."

I turned. The dress moved with me, heavy and fluid, like water given shape. The seamstress stepped back to assess. I caught myself in the mirror again. Three of me. Always three.

Marcus had been the one who believed in people. He'd had this light in him, this stupid, stubborn faith that the world could be better than it was, that families like ours could change. He used to argue with our father at dinner, leaning forward with his elbows on the table and his eyes on fire, insisting that there was another way. Dad would sit there with his signet ring and his silence and wait for Marcus to run out of air. Marcus always ran out of air. He'd push back from the table and go to his room and call me, and I'd listen to him rage for twenty minutes, and then he'd laugh and say, *Okay, I'm done. Tell me something real, Sera. Tell me something that matters.*

I couldn't remember the last real thing I'd told anyone.

Celia had been the one who felt everything. She'd been wrecked by Marcus's death in a way that made the rest of us look functional. She'd started disappearing, slipping out of our lives like water through a cracked glass. I should have caught her. I should have held on tighter. But I was nineteen and furious and so consumed by my own grief that I'd mistaken her quiet for healing when it was really the sound of someone giving up. The pills were just the period at the end of a sentence that had been writing itself for years.

Two siblings. Two different kinds of gone. Both roads leading back to the same family name.

Valenti.

"The waistline is beautiful on you," the seamstress said, circling me now with a tape measure looped around her neck. "You have a dancer's frame. Long. But you're holding so much tension. Here, and here." She touched my shoulders again. "Try to drop them. You'll carry the dress differently."

I dropped my shoulders. Breathed. The dress settled against my collarbone like a hand.

"There," the seamstress said. She smiled. It was warm. Genuine. She saw a bride. She saw the dress and the occasion and the start of something, and she had no idea that the woman on her platform was not starting something. She was ending something. Or she was trying to.

"Two more adjustments at the hip," she said. "Then we'll do the veil. Twenty minutes."

She left to get supplies. The fitting room door closed behind her with a soft click, and then it was just Lena and me and twelve reflections.

"He's going to figure you out," Lena said quietly. "Men like that don't stay fooled."

"I don't need him fooled. I need him close."

"There's a difference?"

"A critical one."

Lena shook her head. She stood, smoothing the front of her red wrap dress. She was every colour I wasn't. Bold lipstick, gold hoops, a warmth that radiated from her like heat off pavement. Standing next to her, I looked exactly like what I was: a woman dressed in white who had no business wearing it.

"You know what your problem is?" she said.

"I'm sure you'll tell me."

"You think you can walk into that family, that house, that marriage, and feel nothing. You think you can sit across from him at breakfast and lie next to him at night and stay cold."

"I'm very good at cold."

"Yeah. You are. But what if he's warm?"

I didn't answer. My thumb found my wrist again. The ink. The number. The dead.

What if he's warm. As if warmth were something I needed. As if warmth were anything other than a tactic used by people who wanted something from you. The Marens ran cold, all glass towers and white marble and silence. If the Valentis ran warm, it was because fire was their weapon, and I knew better than to mistake it for comfort.

I looked at myself in the mirror. The dress. The bare shoulders. The dark hair pinned up in a knot so tight my scalp ached. The jaw that people called strong when they meant hard. The mouth that stayed flat because smiling was a currency I didn't spend cheaply.

Eleven days. In eleven days, I would walk down the aisle of a crumbling church in Little Italy toward a man whose family name I'd scratched into the margin of every document, every plan, every late-night list I'd made since I was nineteen years old. I would say vows I didn't mean. I would let him put a ring on my finger. I would move into his house and eat at his table and learn the shape of his empire from the inside, and I would find every crack, every fault line, every place where the structure was weakest.

And then I would pull.

"I need air," I said. "Can you handle the veil fitting?"

Lena blinked. "You're leaving me to make veil decisions? I have terrible taste in veils."

"You have terrible taste in men. Your taste in veils is fine."

"That's the nicest thing you've ever said to me."

I stepped off the platform. The dress pooled at my feet, unhemmed, trailing white silk across the ivory carpet. I gathered the fabric in both hands and walked toward the changing room. Lena watched me go. I could feel her watching. She had that look again, the one she thought she hid, the one that said *I'm scared for you* without using any words at all.

In the changing room, I stood alone. Smaller mirror. Harsher light. The dress was a costume. Everything in my life was a costume. The composed daughter. The dutiful executive. The grieving sister who had packed her grief into a box and labelled it *motivation* and stored it somewhere no one could touch it.

I reached behind my back and unzipped. The silk fell away. Underneath, I was just a body. Lean, scarred on the inside where it didn't show, held together by routine and rage and a plan I'd been sharpening for seven years.

I dressed in my own clothes. Black trousers, cream silk blouse, heels that added two inches and cost nine hundred dollars and made a sound on marble floors that said *I am not someone you ignore.* The Maren uniform. I buttoned the blouse at the wrist, covering the tattoo. Then I uncovered it. Then I covered it again.

*III.*

Marcus. Celia. Sera.

One buried. One cremated. One getting married.

I walked out. Lena was talking to the seamstress about cathedral-length versus fingertip. I caught her eye, mouthed *thank you*, and headed for the entrance.

Kleinfeld was busy. Brides everywhere, real brides, women who giggled and cried and spun in circles while their mothers clutched tissues. I moved through them like a knife through gauze. The door. The street. February air, sharp and clean, hitting my face like a corrective. Manhattan was grey and bright and loud around me, taxis honking, pedestrians weaving, the city doing what it always did: moving forward without caring who it left behind.

I stood on the sidewalk and breathed.

My phone buzzed.

I pulled it from my coat pocket. The screen was bright. One notification. A text message from an unknown number. No contact name. No context. Just ten words that rearranged something inside my chest before I could stop them.

*You should know -- he chose you. Not your father's offer. You.*

I stared at the screen. The letters were black on white. Clear. Certain. They could have meant anything. They could have been a wrong number, a mistake, a misfired message from some other story.

But they weren't. I knew they weren't. Because the feeling that moved through me when I read them was not confusion. It was recognition. The sick, unwanted recognition of a truth you aren't ready to carry.

*He chose you.*

Nico Valenti did not marry for alliance. He did not marry for his mother's negotiations or my father's offer or the terms of a contract hammered out in boardrooms by people who would never have to live inside it.

He chose me.

My thumb hovered over the message. I could feel my heartbeat in my fingertips, in my throat, in the tattoo on my wrist. Three seconds. I gave myself three seconds to feel whatever this was, this tremor, this fracture in the wall, this terrible, inconvenient crack in the architecture of my anger.

Three seconds. Then I deleted the message.

My hands were shaking. I shoved them in my coat pockets and started walking. The city swallowed me. The noise closed in. Above me, the sky was the colour of old steel, pressing down on Manhattan like a lid.

I walked faster.

He chose me. Fine. Let him.

I didn't come here to be chosen. I came here to be a weapon. And weapons don't care who pulls the trigger.

But my hands kept shaking, and I couldn't make them stop.`,
      },
      {
        number: 2,
        title: "The Rehearsal",
        isFree: false,
        content: `The Ashford Hotel smelled like money and gardenias.

Not real gardenias. The Ashford hadn't used real flowers in the lobby since the renovation in 2019. These were diffused through the ventilation system, a custom scent developed by a perfumer in Grasse who charged six figures to make a building smell like old wealth and good taste. I knew this because my father owned the hotel. I knew this because I had approved the invoice. I knew this because noticing things like artificial floral scent was how my brain kept itself from screaming in rooms where screaming was not allowed.

I counted exits. Front entrance, thirty feet behind me. Service corridor left of the concierge desk. Fire stairs through the door marked STAFF ONLY. Freight elevator at the end of the east hallway. Four ways out. Filed. Moving on.

The private dining room was on the second floor. The Monarch Room, named for the butterfly motif in the crown moulding, though I'd always thought it was named for what monarchs did best: sit in gilded rooms and decide who lived. Tonight, two families would sit in this gilded room and pretend they hadn't spent thirty years trying to destroy each other. Tonight, I would meet the man I was going to marry.

Lena was waiting outside the double doors. Emerald green dress, statement earrings, curls pinned half-up in a way that looked effortless and had almost certainly taken forty-five minutes.

"You're late," she said.

"I'm exactly on time."

"Your father arrived twenty minutes ago. In Victor Maren's world, on time is late. You know this."

"I do. I chose to arrive at the time printed on the invitation."

She wanted to argue. She looked at my face and decided against it.

"You look good," she said instead.

I looked calculated. Black dress, fitted, high neck, long sleeves. No jewellery except my mother's watch. Hair down, which I almost never wore, because Lena had said, *Wear it down, it makes you look less like you're about to cross-examine someone.* She had a point.

"How many inside?" I said.

"Twelve at last count. Your father, his lawyer, two security. Gianna Valenti, Luca Valenti, three men I don't recognise, and a woman in black who looks like she could kill me with a salad fork."

"That's the mother."

"She's terrifying."

"She's five-three."

"Terrifying isn't a height requirement, Sera."

"And Nico?"

"Not yet."

Something loosened in my chest. A reprieve. Time to enter and position myself before he arrived.

"Let's go."

The Monarch Room hit me first as colour. Gold leaf on the ceiling, gold frames on the oil paintings, gold-rimmed china on a table long enough to seat twenty. Crystal chandeliers hung at intervals, three of them, dripping light like something liquid. White linen, tall candles in silver holders, white roses and dark greenery that smelled sharp and alive. The walls were panelled in dark wood that caught the candlelight and held it, giving the room the feeling of the inside of a jewellery box. Floor-to-ceiling windows along the far wall overlooked Central Park, the park a dark sprawl beyond the glass, dotted with the distant orange of lampposts.

Beautiful. And a cage.

My father stood at the head of the table with scotch. Charcoal bespoke, silver hair swept back, his signet ring catching light as he turned it. Once. Twice. He was nervous.

"Sera. You look well."

"Thank you."

"The Valentis will arrive shortly. Gianna is already here."

"Power move."

His jaw tightened. He couldn't deny it. Gianna Valenti had walked into his hotel twenty minutes early and claimed the space. She sat at the far end of the table now, a small woman in black, silver-streaked hair pinned in an elegant knot, a glass of red wine she hadn't touched. She was watching me the way a cat watches a bird it hasn't decided to kill yet.

My father's hand caught my elbow. "Be gracious tonight. Smile. Make her believe this is something you want."

"I'll handle it."

I walked the length of the table. Twenty-two steps. The candles flickered as I passed.

"Mrs. Valenti. Thank you for coming."

"Gianna," she said. Her voice was lower than I expected, accented, warm the way a cast-iron pan is warm: useful and capable of burning you. "We are to be family."

"Gianna." I offered my hand. Her grip was firm and brief.

"You have your mother's face," she said.

"You knew my mother?"

"I met her once. A lifetime ago. She was very beautiful. Very quiet." Gianna's eyes moved across my features like fingers reading Braille. "You have her bones. But your eyes are your father's."

"I've been told."

"It was not a compliment."

Lena, somewhere behind me, made a sound like a swallowed cough. Gianna's expression didn't change. It wasn't hostile. It was honest, which was worse.

"Sit," Gianna said. "We'll talk while the men arrange themselves."

A waiter poured wine without asking. I lifted the glass and didn't drink.

"You are not what I expected," Gianna said.

"What did you expect?"

"Someone softer. Victor's daughter, I thought, would be polished glass. Pretty and breakable. You are not breakable."

"Thank you."

"It was not a compliment either."

I felt something I hadn't anticipated: respect. Not trust, not warmth, but the specific regard of one strategic woman recognising another.

Then Luca Valenti walked in, and the room shifted.

Six feet, lean, dark hair slicked back, green eyes that swept the room with lazy confidence. Navy suit, no tie, gold watch catching candlelight. A snake tattoo wound from his right wrist up beneath his cuff. He was beautiful the way sharp things are beautiful: you admired them right up until they opened you.

He found me immediately. Crossed the room, took my hand before I offered it, and raised it to his lips.

"Sera Maren." His mouth grazed my knuckles. His eyes didn't leave mine. "My brother's bride. I've been looking forward to this."

"Have you."

"A beautiful woman joining our family? Of course." He stayed close. I could smell his cologne, cedar and something darker. "I only wish it were me walking you down the aisle."

He said it lightly. A joke, or the shape of one. But his thumb was resting on my knuckle, and the pressure was a fraction too deliberate to be accidental.

"I'm sure you'll survive the disappointment."

He laughed. Quick and bright, reaching his eyes just enough to be convincing. He was charming the way a pickpocket is charming: the warmth was there to distract from the hand in your pocket.

"Luca." Gianna's voice carried the weight of a closing door. "Sit down."

He winked at me and took his seat across the table. I catalogued him: dangerous, charismatic, resentful. A thread I could pull, or one that could unravel me.

But it was the seat he chose that interested me. Directly across from where Nico would sit. Not beside his mother. Not at the far end, where distance could masquerade as deference. He sat where his brother would have to look at him all night, and the placement had the precision of someone who had been mapping power dynamics since he was old enough to understand them.

The door opened again.

Nico Valenti entered the way silence enters a room: without announcement, but suddenly everything else was quieter. His eyes swept the table and landed on Luca, who was still leaning toward me, still too close, still wearing the residue of that kiss-the-hand performance. Nico's jaw tightened. One controlled flex of muscle, barely visible in the candlelight, and then gone. Luca saw it. He smiled wider. Gianna's hand moved to her wine glass. The three Valenti men by the door straightened like dogs hearing a whistle.

Six-two, broad through the shoulders, black on black, tailored to the millimetre. No tie. Rolled sleeves. A watch on his left wrist that looked old, well-worn, kept because someone he loved gave it to him. Dark hair pushed back, stubble shadowing a jaw that could have been drawn with a straight edge. The thin scar bisecting his left eyebrow. Eyes so dark they looked black in the candlelight.

I had expected a brute. I had built him in my mind as something crude, a man who led through force. I had made him simple because simple enemies are easy to destroy.

He was not simple.

He moved quietly for his size, and the quiet unsettled me. Greeted my father with a brief handshake. Kissed his mother's cheek and murmured something in Italian that made her touch his face. Passed Luca without stopping. Luca's jaw tightened, barely, a micro-expression that lasted less than a heartbeat. I caught it. Filed it. Brothers who loved each other didn't look like that. Brothers at war did. Then Nico straightened and looked at me.

Just looked. Dark eyes steady, expression neutral, giving nothing.

I looked back. I had told myself I would study him clinically, as a problem to be solved. But looking at Nico Valenti was like staring into a room with no lights on and knowing something was in there, something that could hear you breathing.

He held my gaze. I held his. The room, the candles, the crystal, all of it receded, and for four seconds there was nothing except his eyes on mine and the terrible feeling that he was not just looking at me but reading me, turning pages I hadn't given him permission to open.

I looked away first.

It happened before I could stop it. My eyes dropped to the linen, the gold-rimmed plate. A flinch. I had looked away first, and he had seen it, and the knowledge sat in my chest like a coal.

When I looked up, he was pulling out the chair beside mine.

"Sera," he said. "We finally meet."

"We've met."

"We've been in the same room. That's different."

He sat. He smelled like something clean and warm, the faintest trace of smoke underneath, like a fireplace in a house where someone actually lived. I hated that I noticed.

"You're right," I said. "It is different."

He didn't smile. He watched me the way you watch weather changing. Like he was noting where the clouds were and calculating when the storm would hit. I straightened my knife beside my plate. Aligned it parallel to the fork. Small controls. Small comforts.

Dinner was served. Seven courses. The first was a bisque poured tableside from a silver tureen, steam curling through candlelight. My father spoke to Gianna about Midtown property. Gianna responded with the ease of a woman who could discuss real estate while calculating the cost of betrayal. Luca charmed Lena, who was seated beside him and alternating between laughter and the expression she wore when cross-examining a hostile witness. The Valenti men ate in silence. My father's security watched them. Their security watched back. Everyone performed. Everyone knew it. The candlelight made it all look warm, and the wine made it all feel possible, and I reminded myself that this was what danger looked like when it put on a suit and sat down to dinner.

Nico ate without speaking. He held his fork the European way, and his hands were large, scarred across the knuckles, capable of things I refused to think about while close enough to touch him. He didn't fill the silence between us. He simply existed beside me, and the silence had a texture I could almost feel on my skin.

I broke first. Again.

"Tell me something," I said, low enough for only him.

He turned his head. This close, I could see the scar in detail. Someone had opened his face once, and he'd let it heal without hiding it.

"Ask."

"Why did you agree to this?"

"The alliance is strategic."

"That's your mother's reason. I'm asking for yours."

He set down his fork. Picked up his wine. Turned the glass slowly.

"My father spent the last year of his life trying to build something with your family. He died before he could finish. This marriage finishes it."

"Better answer. Still not yours."

His jaw tightened. The muscle flexed once, then released.

"I don't give away answers for free, Sera."

"What's the price?"

"Time. Ask me again in a year."

Across the table, a man leaned into the candlelight. Stocky, five-ten, buzzed brown hair, a nose broken at least twice. Leather jacket in a room full of suits. Kind eyes that were absolutely devoid of trust, fixed on me.

"Marco," Nico said without looking away from me. "Stop staring at my wife."

"She's not your wife yet," Marco said.

"A technicality. Sera, Marco DeLucci. He handles my security."

"He handles more than that," I said.

Marco's eyes narrowed. Not anger. Interest. The interest of a man who'd been identified and was recalculating.

"I do my homework," I said.

"So do I," Marco said. He didn't blink. He watched me the way you watch a door you expect to open from the wrong side.

Midway through the fourth course, my father tapped his glass. The room stilled.

"I'll keep this brief." He stood. Candlelight carved his face into planes of shadow. "Tomorrow, our families join. But tonight, I want to speak to something contracts don't cover. Legacy. The Marens and the Valentis share a history. It has not always been kind. But my daughter carries the best of this family forward. I trust her to represent us well."

He looked at me. For less than a second, something moved behind his eyes. Something like guilt. Then it was gone, and he was raising his glass.

Nico stood.

The room went quiet. Not polite quiet. Held-breath quiet.

"To new beginnings," Nico said. His voice carried without effort. He held his glass before him, wine dark as blood against his scarred knuckles. "And to the courage they require."

He looked at me when he said *courage*. Directly at me. He turned his head and fixed those black eyes on mine and placed the word in the space between us like he was handing it to me.

This time, I did not look away. I held it until the glass came down and his mouth was wet with wine and the candlelight caught the scar through his brow, and I thought: *You don't scare me.* Which wasn't true. But I needed it to be.

The table drank. Conversation resumed. But the word stayed lodged behind my sternum, pulsing. Courage. A challenge. Or a warning.

The remaining courses passed. I spoke to Gianna about ceremony logistics. Deflected Luca's wine refills. Exchanged three sentences with Marco about Brooklyn parking, which was either the most mundane conversation of my life or a test I couldn't identify. Through all of it, Nico sat beside me and said very little and took up an unreasonable amount of space. Not physically. Something about his presence bled past its boundaries, a gravitational field I kept drifting toward and correcting away from.

I excused myself. The hallway was cool and dim after the dining room's candlelit heat. I leaned against the wall and pressed my fingers to my temples.

A hand touched my arm.

Gianna. Small and straight in black, green eyes bright. She spoke. Italian, rapid and low, a sentence I caught fragments of but couldn't assemble. Her hand was firm on my arm, her eyes holding mine with an intensity that felt like a transfer. She was giving me something. I couldn't read it.

"I don't speak Italian," I said.

"I know." And then, in English: "Learn."

She walked back in. The door swung shut.

I stood replaying the words, syllable by syllable, feeling them slip.

The door opened. Nico.

He leaned against the opposite wall, hands in his pockets.

"She does that," he said.

"Does what?"

"Tests people in languages they don't speak. She wants to see how you react to not understanding."

"And how did I react?"

"You tried to memorize what she said. I watched your lips move."

I folded my arms. "Are you going to tell me what she said, or are you going to stand there looking enigmatic?"

The corner of his mouth shifted. Not a smile. A fracture in the mask.

"She said: *Le donne che sopravvivono a questa famiglia sono quelle che smettono di fingere.*"

"Translation."

"'The ones who survive this family are the ones who stop pretending.'"

The words settled over me like a change in temperature.

"Good advice," I said.

"My mother doesn't give advice. She gives warnings."

He pushed off the wall. At his full height, I had to tilt my chin to hold eye contact.

"Courage," I said.

"What?"

"Your toast. What did you mean?"

He was quiet. Five seconds. Ten. The hallway clock ticked.

"I meant that tomorrow, you and I stand in front of everyone we know and promise things we don't yet mean. And the only honest thing about it will be the courage it takes to do it anyway."

He held my gaze one more breath. Then he turned and walked back in, and I was alone with the gold wallpaper and the echo of a man who had handed me the truth like a lit match and walked away.

The dinner ended at eleven. My father told me I'd done well. Lena hugged me in the lobby and whispered, "He watches you," and I said, "I know," and she said, "No, Sera. He *watches* you," and I chose not to examine the emphasis.

My apartment. Thirty-second floor, Upper East Side. Clean lines, white walls, a kitchen I used for coffee and nothing else. I locked the door, kicked off my heels, and stood in the dark for twelve seconds.

Then I moved.

The writing desk was walnut, antique, the one piece of furniture I'd chosen myself. I sat and pressed my thumb to the underside of the second drawer. A click. The false bottom released.

Inside: Marcus's notebook. A USB drive, brushed silver, no label. And a photograph.

I picked it up. Slightly faded, creased at one corner. Two men at a table in what looked like a restaurant, warm-toned, low lighting, cloth napkins. The man on the left was Marcus. Younger, maybe twenty-two, leaning forward with his elbows on the table, gesturing with one hand. Talking about something that mattered. I knew the posture. I knew the fire.

The man on the right I did not know.

Older. Fifties. Dark complexion, heavy brows, a strong face that might have been handsome before something carved severity into it. He was listening to Marcus with an expression I couldn't read. Not hostile. Not friendly. Something careful and weighted.

Three years I'd had this photograph. He wasn't in any database I could access, any of my father's files. A ghost sitting across from my dead brother in a restaurant I couldn't name.

I memorised his face again. The heavy brow. The jaw. The slight asymmetry of his nose, broken once and set imperfectly. Every detail committed to the part of my brain where I kept the things that mattered most.

I put everything back. Pressed the false bottom shut. Seamless. Invisible.

I sat in the dark and pressed my thumb to the tattoo. Three.

Tomorrow I would walk into the Church of St. Cecilia and promise myself to a man whose family name was written in my brother's hand in the notebook hidden three feet from where I sat. Tomorrow I would move into his home, eat at his table, sleep on the other side of his wall.

I thought about Nico's voice in the hallway. The way he said *courage* like he already knew what it would cost.

I thought about Gianna's warning: *stop pretending.*

I thought about Luca's mouth on my knuckles and Marco's mistrustful stare and the photograph of my brother with a man whose face I would find if it took another seven years.

Tomorrow I walked into the lion's den.

I turned off the light. I didn't sleep.`,
      },
      {
        number: 3,
        title: "The Vows",
        isFree: false,
        content: `The Church of St. Cecilia smelled like incense and centuries.

I stood in the vestibule with my father's arm through mine and counted the things I could see through the crack in the oak doors. Fourteen rows of pews, dark wood worn smooth by generations of hands. Stone columns rising into vaulted arches, the kind of architecture that was built to make humans feel small and God feel close. Stained glass along the eastern wall throwing colour onto the floor in long, bleeding panels: gold, crimson, blue, violet. The light moved when clouds shifted outside, so the saints in the glass seemed to breathe. Candles everywhere, hundreds of them, clustered on the altar and lining the aisle in glass holders that caught the flame and multiplied it.

It was beautiful. The kind of beautiful that made your chest ache if you let it.

I was not going to let it.

"Ready?" my father said.

Silver hair. Charcoal bespoke. Signet ring turning, turning, turning.

"You look beautiful," he said. He didn't meet my eyes.

"Thank you."

"Your mother would have loved this."

"My mother would have hated this. You know that."

His jaw tightened. For one breath I wanted to ask him: *Did you think about Marcus? Did you think about Celia?* I didn't ask. I'd stopped needing things from Victor Maren the night I found Marcus's notebook.

"Ready," I said.

The doors opened.

The organ hit first. Bach, Jesu, Joy of Man's Desiring, swelling up into the vaulted ceiling like something alive. The pews were full. Two hundred guests split down the centre aisle in a division that had everything to do with territory. Left: Maren allies, politicians, women in pastel. Right: Valentis, darker colours, harder faces.

My father walked me forward. The dress moved like water against my legs. My veil trailed on stone.

Marcus would have walked me down this aisle.

The thought arrived without permission, and I let it stay because fighting it would have shown on my face. Marcus, who believed in people. Marcus, who called me after every fight with our father and said, *Tell me something real, Sera.* He would have been thirty this year. He would have leaned in halfway down the aisle and whispered something irreverent, because Marcus understood that the only way to survive a performance was to acknowledge it was one.

But Marcus was dead. And the family waiting at the altar was the reason. So I carried my brother's memory like a blade beneath my ribs and kept my face as still as the stone saints in the windows.

The incense was thick enough to taste. The stained glass painted my white silk in shifting colour as I moved. Gold, then crimson, then blue. Like the church was trying to mark me.

Nico stood at the altar. Black suit. No tie. His father's watch on his left wrist.

His eyes found mine at twenty feet.

I held them. I did not look away. Not this time. I had played that weakness at the rehearsal dinner, broken first, dropped my gaze, and I'd spent the hours since cataloguing it as a mistake I would not repeat. He would see exactly what I wanted him to see: a woman walking toward him with purpose, with poise, with nothing in her chest but the cold clarity of a plan seven years in the making.

That was the version I chose to project. It was mostly true. Mostly.

Because beneath the silk and the composure and the white-knuckled grip on the bouquet, something else was happening. Something I did not sanction. His face was doing that thing it did in the hallway at the Ashford, that almost-imperceptible shift from neutral to something unguarded. His lips parted a fraction. His shoulders dropped, just barely, like a breath he'd been holding released on its own. And his eyes moved over me not the way an adversary appraises a threat but the way a man looks at a woman who has stopped him mid-thought.

I filed it. I told myself it was useful information.

My pulse was wrong. I pressed my bouquet tighter to my stomach as if pressure could correct a physiological response.

My father released my arm. I stepped up to the altar.

"You wore your hair down," Nico said.

Not *you look beautiful*. Not *I'm glad you're here*. He noticed the specific thing. The deviation from my pattern.

"Don't read into it," I said.

"I read into everything."

"I know. That's why I said it."

"Warning me?"

"Establishing terms."

The corner of his mouth shifted. "Noted."

The priest began. Father Rossi. Seventy, white-haired, kind-faced, the kind of priest who believed in the sacrament with his whole body and had no idea he was consecrating a treaty.

Luca read from Corinthians. He stood at the lectern in his navy suit, green eyes bright, and delivered the words about love being patient and kind with a voice so smooth it could have sold you anything. *Love does not insist on its own way. It is not irritable or resentful.* He looked at me on the word *resentful*. A beat too long. Then he smiled and stepped down.

Lena read the Song of Solomon. Her voice shook once, on the word *beloved*, and she looked at me while she read and I could see the effort it took her not to cry. I gave her the smallest nod.

The vows.

"Dominic Nicolo Valenti, do you take this woman to be your wife? To have and to hold, from this day forward, for better, for worse, for richer, for poorer, in sickness and in health, to love and to cherish, until death do you part?"

"I do," Nico said. No hesitation. No performance. Two words in that low, rough voice, spoken directly to me, not to the priest, not to the congregation.

Then Father Rossi turned to me.

"Seraphina Maren, do you take this man to be your husband?"

The church waited. Two hundred people held their breath, and the candles flickered in a draft I couldn't feel.

"I do," I said.

My voice didn't shake. I delivered the words like a contract clause, clean and precise and legally binding, because that was all they were. The verbal architecture of a deal struck in boardrooms by people who didn't care if the two humans standing in this church ever felt anything for each other.

*Until death do you part.* I planned for it to be the death of his empire, not mine.

The rings. Nico took my left hand.

His fingers were warm. Steady. His thumb settled against my palm, and the contact sent something electric up through my wrist, past the tattoo, into the hollow of my elbow. My pulse jumped. Not a subtle thing. A jolt, the kind that originated somewhere deeper than logic. I hated that my body responded to his touch with something that felt less like strategy and more like want. I hated that his hand was gentle when it didn't need to be. He held it the way you hold something you're being careful with, and the care was worse than any roughness would have been because it confused the narrative I'd built around him.

He slid the ring on. White gold, simple. It settled against my finger like it had always been there.

I slid his ring on without letting my fingers linger.

"You may kiss the bride."

He stepped forward. His hand came to my jaw, his thumb just below my ear, the touch so light I might have imagined it if my nerve endings hadn't been cataloguing every point of contact.

The kiss was brief. Dry. His lips touched mine for two seconds, maybe three. It was performative. We both knew it.

But his hand. His hand pressed against the small of my back as he pulled away. One second too long. Five fingertips and a palm, firm and warm through the silk, holding me in place at the exact point where my spine curved. My body catalogued it: the heat, the pressure, the way his thumb shifted against my vertebra before he dropped his hand.

Hours later, I could still feel it.

The congregation applauded. The organ surged. We turned, and two hundred people saw the Maren-Valenti alliance, sealed, signed, delivered.

I walked back down the aisle with Nico's arm through mine.

"Breathe," he said without looking at me.

"I'm breathing."

"You're not."

I breathed. He was right. The stained glass saints watched us pass, their painted faces as serene and indifferent as God.

Outside, the cold hit like a correction. Lena caught my arm on the church steps.

"You okay?"

"Perfect."

"You're lying."

"I'm a bride. It's expected."

---

The Ashford ballroom was a cage made of crystal.

Three chandeliers hanging from a ceiling painted to look like a Venetian sky. Gold leaf on the moulding. Marble floors polished to a mirror. Round tables draped in white, centrepieces of roses and greenery and candles in glass columns. A string quartet playing something classical that bled into the ambient noise of two hundred people drinking champagne and pretending they were happy to be here.

Four exits. Main entrance behind me. Service door near the kitchen. French doors to the terrace. Staff corridor behind the bar. Filed.

"Mrs. Valenti." A waiter appeared with champagne. The name hit me like a slap delivered with a silk glove. I took the glass.

Lena appeared at my elbow. "How are you holding up?"

"I'm fine."

"You've said *I'm fine* four times today. At what point do we acknowledge that's code for the opposite?"

"Five. Five is the threshold."

"Sera."

"I'm standing in a ballroom wearing a ring that belongs to a man whose family I'm going to dismantle. I'm fine."

She looked at me for a long moment. "You know what scares me? I believe you."

"Good."

"That's the scary part."

My father spoke first. Controlled, polished, brief. He talked about legacy and the strength of partnership, and he never once said the word *love*, and I respected the honesty of the omission even as I hated him for it.

Then Luca stood.

He took the microphone with the ease of a man who'd been performing since birth. The room laughed before he'd said a word.

"So," he said. "My brother got married." He grinned. "Some of you know Nico. You know he's not exactly the romantic type. The man runs an empire. He doesn't write love letters. He writes contracts. He doesn't send flowers. He sends NDAs."

Laughter. Warm, easy. Luca waited for it to subside.

"But I'll tell you something about my brother that most people don't know. When Nico decides something belongs to him, that's it. Done. There's no negotiation, no appeal, no exit clause. He protects what's his with everything he has." Luca's eyes drifted to me. "Everything."

The word sat in the air a beat too long.

"So, Sera." He raised his glass. His smile was wide and warm and the threat underneath was so perfectly calibrated that only someone looking for it would find it. I was looking. "Welcome to the family. We take care of our own."

*We take care of our own.* Two meanings, delivered simultaneously, wrapped in charm.

Lena leaned close. "Did that speech sound like a threat to you, or am I being paranoid?"

"It sounded like a best man speech."

"Sera."

"It sounded like a threat dressed up as a best man speech. Better?"

"Much. Just wanted to confirm we're living in the same reality."

The quartet shifted to something slower. Nico appeared at my side without sound. He did that. Moved through rooms like smoke.

"Dance," he said. Not a question.

His right hand settled on my waist. His left held mine at shoulder height. We stepped into the waltz and I understood immediately that Nico Valenti was a good dancer. Not the kind of good that comes from lessons. The kind that comes from awareness of another body in relation to your own, from the ability to lead without forcing. He moved, and I moved with him, and my body did the thing bodies do when they find a partner who matches their cadence: it stopped resisting.

"You're angry," he said. Low enough that only I heard it, his mouth close enough to my ear that I felt his breath displace my hair.

"I'm your wife," I said. "Same thing."

Something shifted in his face. Not a smile. Almost. The corner of his mouth moved, and for a half-second I saw something that looked like genuine amusement, the kind that surprises the person feeling it. Then it was gone and we were turning slowly under three chandeliers while the quartet played Debussy and the champagne went flat in glasses no one was drinking.

"Your brother's speech was interesting," I said.

"Luca says what he means in a way that lets him deny he meant it."

"A useful skill."

"A dangerous one."

"For who?"

"For everyone near him."

The song ended. Another began. He didn't let go, and I didn't pull away.

"You didn't step on my feet," I said.

"Low bar."

"You'd be surprised. Most men dance like they're solving a math problem."

"I'm not most men."

"I've noticed."

"People are watching," I said.

"People have been watching us all night. That's the point."

"The point is the alliance."

"Yes."

"So this is performance."

He was quiet. We turned. The music swelled.

"If it helps you to think so," he said.

"What's the alternative?"

"That I wanted to dance with my wife."

"Don't call me that."

"It's what you are."

"It's what the contract says I am. Not the same thing."

"Closer than you think," he said.

The song ended. I stepped back. He let me.

At the bar, I ordered water instead of champagne. Pellegrino over ice. I stood at the mahogany counter and pressed my thumb to the ring on my left hand and tried to remember the plan.

A woman sat three stools down. Red hair, sharp bob, pale skin, freckles. Glasses with dark frames. She wore a grey blazer over a black dress, practical, the kind of outfit that said *I dressed to blend in but not to belong.* She was drinking whisky, neat, and she was watching the room the way I watched rooms. Exits. Faces. Connections. The scan of someone here to observe, not celebrate.

She wasn't on the guest list. I would have remembered the hair.

Our eyes met. One second. She didn't smile. Didn't look away. Just held my gaze with calm assessment, then returned to her whisky.

I filed her. Red hair. Glasses. Watching. Something to find later.

The bartender refilled my water without being asked. "Long night?" he said.

"Long year," I said.

He had the good sense not to follow up.

Across the room, near the service corridor, my father stood in the shadow of a marble column speaking to Gianna Valenti. Their heads were close together. Not intimate. Urgent. Gianna's hand was on his forearm, gripping, and her mouth was moving fast, and my father's face was ashen. Not the controlled pallor of discomfort. The grey of a man hearing something that frightened him. His signet ring was still. Not turning. That was wrong. He always turned it. The stillness of his hands meant whatever Gianna was saying had stopped even his subconscious fidgeting.

They noticed me watching. My father's face reassembled into composure so quickly it was like watching a mask slide back into place. Gianna moved in the opposite direction.

Lena materialized beside me. "Your father looks like he just saw a ghost."

"He looks like he always looks."

"He does not. I've seen Victor Maren in boardrooms, at funerals, at your sister's memorial. He doesn't rattle. He's rattled."

"I saw."

"And?"

"And I'll deal with it."

"Tonight?"

"When I'm ready."

She looked at me, then at the spot where my father had been standing. "Be careful, Sera. Whatever that was, it wasn't small."

I added it to the file. Victor. Gianna. The fear on my father's face. I would find it.

The night wore on. I danced with Marco, who held me like a man defusing a bomb.

"Can I ask you something?" I said.

"You can ask."

"How long have you known him?"

"Since we were fifteen. He broke a guy's nose for me in a parking lot in Red Hook. I drove the getaway car. We've been inseparable since."

"That's almost sweet."

"Don't hurt him," Marco said.

"That's a strange thing to say to a bride."

"Not this bride."

We finished the song in silence.

At eleven, the ballroom thinned. The white roses were wilting.

Nico found me on the terrace. The evening air was sharp and cold against my bare shoulders. Central Park stretched below, dark and vast.

"It's time to go," he said.

"Already tired of me?"

"If I were tired of you, I'd have left you at the church."

"Romantic."

"Honest. There's a difference. Where's your coat?"

"I didn't bring one."

He looked at my bare shoulders. Looked away. "The car's warm."

"Where's the car?"

"I'm driving."

"You're driving."

"I don't let other people drive me."

"A preference or a control issue?"

"Both."

He opened the passenger door. I got in. The leather was cold, then warm where my body met it.

We drove south. Manhattan at midnight was all headlights and reflections, the wet streets catching neon. His scarred knuckles caught streetlight as we passed beneath lamps.

"You can turn on the radio," he said.

"I don't need music."

"Most people fill silence."

"Most people are uncomfortable with what silence tells them."

"And what is it telling you?"

"That we just made a very large mistake in a very old church."

"Or a very calculated decision."

"Those aren't mutually exclusive."

He almost smiled again. That fracture in the mask, there and gone.

"No," he said. "They're not."

We crossed the Brooklyn Bridge. The cables rose above us in dark lines against the sky, and the glittering Manhattan skyline receded in the rearview.

He parked on a street I didn't recognize but had memorized from satellite imagery three months ago. Four townhouses, connected in ways that weren't visible from outside.

"This is it?" I said.

"This is it."

"It looks like a neighbourhood."

"That's the idea."

Nico turned off the engine. Came around to my side. Opened my door.

He stood in the amber wash of a streetlamp, one hand on the door, his face half in shadow.

"Welcome home, Mrs. Valenti."

The words hit like a key turning in a lock. Not opening something. Closing it.

I stepped out. The brownstone loomed above us, four stories of red brick and dark windows, a wrought-iron gate leading to stone steps. Ivy climbed the facade, dead in February, its skeleton clinging to the brick like the memory of something green.

The front door was open. Warm light spilled from inside, and the smell of espresso reached me before I reached the threshold. Not the thin coffee of a machine left running. The rich, deliberate scent of espresso made by hand.

Gianna stood in the entrance hall. Five-three, silver-streaked hair still pinned, still in black, still straight-backed. She held two small cups on a tray. Her green eyes moved from her son to me and back.

It was midnight. She had left the reception, driven here, and made espresso. As if she'd known exactly when we'd arrive. As if time was a thing this family bent to its convenience.

"Come in," she said. "You'll want coffee."

I stepped across the threshold. Dark wood floors, warm light, the smell of decades of cooking embedded in the plaster walls, oil paintings in heavy frames, a staircase curving upward into shadow. Nothing like the glass and white marble I'd grown up in. Dense and warm and, against my will, not quite hostile.

Gianna handed me the espresso.

"Drink," she said. "Tomorrow is harder."

"Harder than marrying a stranger?"

"He is not a stranger anymore. That is what makes it harder."

I drank. It was perfect. Dark, bitter, no sugar.

Nico stood behind me. I could feel him without turning. The specific displacement of air that meant he was close.

"You don't have to hover," I said without turning around.

"I'm not hovering. I live here."

Gianna took the empty cup from my hands. "Your room is upstairs. Third floor. Nico will show you." She touched my face, brief, her thumb against my cheekbone. The gesture of a mother, or the assessment of a sculptor checking her material. "Sleep. If you can."

She walked deeper into the house, her footsteps fading on the dark wood floors, and I stood in the entrance hall of the Valenti compound at midnight, wearing a wedding dress and a dead man's name and a ring I planned to use as a skeleton key.

No one in this family slept. I was beginning to understand why.`,
      },
      {
        number: 4,
        title: "The Compound",
        isFree: false,
        content: `I woke in a bed that wasn't mine, in a house that smelled like someone else's life.

For three seconds I didn't know where I was. The ceiling was wrong. Too high, plaster instead of drywall, a hairline crack running from the light fixture to the far corner. The light was wrong too. Not the hard, white morning that bounced off my Upper East Side walls but something softer, filtered through curtains I hadn't chosen. Heavy linen. Cream with a thread of gold.

Then I felt the ring on my finger and remembered everything.

I sat up. The bedroom was warm-toned, nothing like the glass and bleached surfaces I'd grown up in. Dark wood floors, a Persian rug in deep reds and navy, a wardrobe built into the wall sometime around 1920. The sheets were white cotton, worn soft, the kind of fabric that had been washed a hundred times and gotten better for it. On the nightstand: a lamp with a brass base, a glass of water I didn't remember pouring, and a single stem of rosemary in a small vase.

Gianna. It had to be.

I crossed to the window. Brooklyn Heights in February. Grey sky, brown brick, bare branches. A woman walked a dog. A delivery truck idled at the corner. Normal life, unaware of what operated behind the wrought-iron gate below my window.

I counted cameras. One above the front gate. One tucked under the eave of the neighbouring townhouse, covering the shared alley. A third mounted on the lintel of the first-floor window directly below me. Three visible from this position alone. Filed. I started getting dressed.

Black trousers, grey cashmere sweater, hair in a low knot. No jewellery except the ring and my mother's watch.

The hallway outside my door was dim. Dark wood panelling, sconce lighting, a runner carpet in faded burgundy. To my left: Nico's bedroom door. Closed. To my right: the shared sitting room connecting our two bedrooms like a demilitarised zone. Ahead: the staircase, curving down into the warm belly of the house.

Below me, the faint clink of ceramic. The hiss of steam. A radio playing something low and Italian. The house was alive.

I went down.

The staircase walls were lined with photographs. Not the curated gallery-wall aesthetic of the homes I knew, where art was chosen by consultants and hung by specialists. These were family photographs in mismatched frames, arranged with the organic logic of accumulation. A wedding portrait, black and white. A christening. Children on a stoop, squinting in summer light.

And then I stopped.

Two boys. Maybe eight and five. The older one had his arm around the younger, protective and easy, the way children hold each other before they learn to calculate the cost. The older boy was dark-haired, serious-eyed, already carrying something in his expression that was too heavy for a child. The younger boy was laughing, mouth open, green eyes bright, leaning into his brother like his brother was the most solid thing in the world.

Nico and Luca. Before.

Behind them stood a man. Tall, broad, dark-complexioned, with a face that held the particular warmth of someone who loved without reservation. He had one hand on each boy's shoulder. His smile was wide and real, crinkling the corners of his eyes, and he was looking not at the camera but at his sons.

Dominic Valenti.

I stared at his face. I'd built an image of the Valenti patriarch over seven years: cold, calculating, a man who ordered violence the way other men ordered dinner. The man in this photograph was none of those things. He looked kind.

This didn't fit. I pushed it away. Photographs lie. A kind face means nothing. The same hands resting on those small shoulders had signed orders, moved money, built an empire on the bones of people who got in the way.

I kept walking. But Dominic Valenti's face stayed behind my eyes like an afterimage, warm and inconvenient.

The kitchen was on the ground floor, at the back of the house. I smelled it before I saw it: coffee, butter, old wood. The scent of a room that had been cooking for forty years and had absorbed every meal into its walls.

Nico was standing at the counter with his back to me.

Of course he was. The man ran a criminal empire but apparently he also made espresso at six in the morning, standing barefoot on terracotta tile. I catalogued: dark T-shirt, grey sweatpants, wet hair from a shower I was not going to think about. His shoulders were broader without a jacket. The muscles in his forearms moved as he worked the lever on an old Pavoni espresso machine, chrome and brass, built in 1970 and never broken.

"There's a cup for you," he said without turning around. "Left of the stove."

A white ceramic cup on a saucer beside the range. Already warm. He'd heated it.

"You knew I was coming down," I said.

"I heard the fourth stair. It creaks."

"I'll remember that."

"I'm sure you will."

I picked up the cup and waited. He pulled the shot. The espresso was dark and thick, a perfect crema forming as it settled. He poured it into my cup first, then his own. I noted that. My cup first.

The kitchen was large by New York standards. Terracotta floor, butcher-block counters worn pale where knives had worked for decades. Copper pots hung from a rack above the stove. A window over the sink looked onto a narrow garden, winter-bare. The wooden table in the centre was scarred and large enough for eight, surrounded by chairs that didn't match. One had a cushion tied to its seat. Another had a child's scratch marks on the armrest.

A family ate here. A real family, with elbows on the table and arguments over bread. The warmth of it pressed against me like a hand on my chest.

I drank the espresso standing up. Dark, bitter, no sugar.

"Your mother's recipe?" I said.

"My father's."

I filed that too. Everything in this house pointed back to Dominic.

Nico leaned against the counter. He watched me over the rim of his cup. Not staring. Just present, the way a person is present when they're comfortable in a room and you're the variable.

"How did you sleep?" he said.

"Fine."

"You run the tap for four minutes before bed. Every night?"

My hand tightened on the cup. He'd heard that. Through the wall, through the shared sitting room. Four minutes of water running, drowning out the thoughts that came when the lights went off. I'd done it since Celia died. I didn't examine it.

"Thin walls," I said.

"Old house."

"Is that your way of saying you'll be listening?"

"It's my way of saying the walls don't keep secrets here. If that matters to you, adjust accordingly."

"In this house, is there a difference between a warning and a courtesy?"

He set down his cup. "Not always."

"That's honest."

"You sound surprised."

"I expected more strategy from you. Less candour."

"Candour is a strategy. You just haven't decided what kind yet."

I almost smiled. The impulse came and went before it reached my mouth.

"Your mother will give you the tour this morning," he said. "She'll be thorough."

"I'd expect nothing less."

"She'll show you everything she wants you to see. The things she doesn't show you are the things worth finding."

I looked at him. His wet hair was drying in uneven waves, and there was a crease on his cheek from his pillow. For one disorienting second he looked like a person instead of an adversary.

"Why would you tell me that?" I said.

"Because you'd figure it out anyway. And I'd rather you know I know."

"You're giving me permission to snoop around your family's house."

"I'm giving you the courtesy of acknowledging what we both know you're going to do."

"And if I find something you don't want me to find?"

"Then we'll have a very interesting conversation."

I set the cup in the sink. Turned to leave. His voice followed me.

"Sera."

I stopped.

"The espresso machine takes a specific grind. Cabinet above the stove, left side. In case you want to make your own tomorrow."

"I won't be making my own tomorrow."

"No?"

"I want to see if you heat the cup again."

Something shifted in his face. Not a smile. The space where a smile would go if he allowed it.

I left the kitchen. My hands were steady. My pulse was not.

---

Gianna's tour began at nine.

She moved through the compound with the precision of a general walking a new officer through a military installation. Every room had a name, a history, a purpose she explained with warmth that did not invite questions.

The main house was four stories. Ground floor: kitchen, formal dining room, a parlour with bookshelves floor to ceiling. First floor: a living room with two sofas facing a coffee table made from a ship's hatch, a study lined in green leather. Second floor: guest bedrooms. Third floor: mine and Nico's.

"This floor is yours," Gianna said at the top of the stairs. "The sitting room is shared. His bedroom is there, yours is there. The door between the sitting room and his side locks from both sides."

"And his side?"

"Locks from both sides."

"Equal terms."

"In this house, we respect closed doors." She paused. "We also notice them."

She showed me the connections between the townhouses. Doorways cut through shared walls, some disguised behind bookcases.

"How many people live here?" I said.

"Nico. You. Luca, when he chooses to be home. Marco has his own apartment but keeps a room. And me." She opened a door to what had been a dining room, now filled with monitors. She closed it again without comment. "The family has always been here. Dominic bought the first townhouse when Nico was born. The others came later."

"He built all of this?"

"He built all of this." Her voice didn't change, but something behind it did. "My husband believed that family should live close enough to protect each other."

"And far enough apart to keep secrets?"

She looked at me. Her green eyes were Luca's eyes in a steadier face. "You're sharper than your father described."

"My father doesn't know me as well as he thinks."

"No," she said. "Fathers rarely do."

I mapped it all. Six exterior exits from the main house alone. Eight cameras I could spot. Seventeen rooms I was shown, plus the ones I wasn't.

The basement door was at the end of the ground-floor hallway, past the kitchen, set into the wall like an afterthought. Heavy wood, iron hardware, a deadbolt that looked newer than the door.

"And down there?" I said.

"Storage," Gianna said. She didn't slow down. "Old furniture, wine that needs temperature control, the things every old house accumulates. It runs the full block."

"Can I see it?"

"When it's been organised. Right now it's forty years of Valenti clutter. You'd need a map."

She smiled. It was warm and final. The door was locked, and she didn't offer a key, and the subject was closed with the gentle authority of a woman who had been deciding what people could and could not access for longer than I'd been alive.

I smiled back. "I'm patient."

"I know," Gianna said. "That's what concerns me."

---

The house emptied by early afternoon. Gianna left for what she called errands. Nico left without announcement. Luca's music stopped. The silence that followed was total, the particular silence of a large, old house holding its breath.

I explored.

The study first. Desk drawers unlocked but empty. Deliberately empty. Someone had cleared them before I arrived. The bookshelves held history, philosophy, Italian literature, a battered copy of *The Prince* with notes in the margins in a handwriting I didn't recognise. I photographed three pages with my phone.

The living room. The ship's-hatch coffee table had a drawer. Inside: coasters, a lighter, a deck of cards, a photograph face-down. I turned it over. Dominic again. Older, maybe fifty, sitting on this sofa with wine and a newspaper. He was looking at whoever held the camera with an expression that made my stomach tighten. Tenderness. Unguarded, unperformative.

I put it back. Face-down, exactly as I'd found it.

More photographs along the hallway. Christmases, birthdays, a teenage Nico in a football jersey with a black eye and a grin that transformed his face into something I wasn't prepared for. Dominic in a tuxedo, Gianna on his arm, both laughing.

And one more. Dominic and another man, standing outside what looked like a restaurant, shoulders almost touching. The other man was shorter, older, silver-haired. They were shaking hands, smiling, and the body language was unmistakable: these were men who trusted each other.

The silver-haired man was my father.

Victor Maren and Dominic Valenti. Smiling. My father had never mentioned anything but enmity, territory, threat. The Valentis were the enemy. That was the first and final word.

But here they were. And no one had told me.

I checked every door, every window, every lock. The kitchen door to the garden had an old, loose bolt. The alley door had a keypad with a green light.

And then the basement.

I stood in front of it for a full minute. The deadbolt was a Medeco, high security, resistant to picking without professional tools I didn't have. The door frame was reinforced, the hinges on the inside. Whatever was down there, the Valentis didn't protect it casually.

I tried the handle. Locked. Firm. The mechanism didn't give even a millimetre.

I pressed my ear to the wood. Nothing. Just the deep, insulated silence of a space below ground.

I stepped back. Filed it. Moved on.

The kitchen was empty when I returned to it, but it wasn't empty for long.

"Making yourself at home?"

Marco stood in the doorway. Leather jacket, boots, arms crossed. His broken nose cast a shadow across his upper lip, and his kind eyes had gone flat and watchful. He filled the doorframe the way men fill doorframes when they want you to know the only exit is through them.

"Gianna said to treat the house as mine," I said.

"Gianna is polite."

"And you're not."

"Not when it matters." He stepped into the kitchen. The distance between us halved. "I've known Nico since we were fifteen. I know what loyalty looks like."

He stopped. Close enough that I could see the individual scars on his knuckles, white lines over brown skin, a map of every fight he'd walked away from.

"You don't have it," he said.

The words were quiet. Not angry. Certain, the way a man is certain about weather or gravity. A fact, not an accusation.

I smiled. Not warmly. The way you smile when someone plays a card you expected.

"You don't know what I have."

"I know you're in this house with an agenda. I know you volunteered for this marriage, which means you wanted to be here, which means you want something. I don't know what it is yet. But I'll find out."

"Is that a threat?"

"It's a promise. I don't make threats. Threats are for people who might not follow through."

We stood there. The kitchen clock ticked. The copper pots caught afternoon light and threw it in dull circles on the ceiling.

"I appreciate the honesty," I said.

"No, you don't. You appreciate the information. You're filing this conversation right now, deciding what it tells you about me and about Nico and about how this household works."

"Am I that transparent?"

"You're not transparent at all. That's the problem. Transparent people are harmless. You're the opposite."

"And what does that make me?"

"Something I'm going to keep my eye on."

"Fair enough."

"It's not about fair. It's about Nico." His jaw tightened. "He's given more to this family than anyone knows. I'm not going to watch someone take it apart from the inside."

"You're loyal."

"And you're not. That's the whole conversation."

"Then why are we still having it?"

"Because I want you to know that I see you. Whatever face you show Gianna, whatever game you play with Nico, I see you. And I don't look away."

He was right. He didn't.

"Nico already knows what you are," he said. "He married you anyway. That's the part I can't figure out." He looked at me for a long moment. "But I will."

He left. I stood in the kitchen with the afternoon light and the copper pots and the lingering pressure of a man who saw me clearly and did not like what he saw.

My reflection in the kitchen window was a woman in grey cashmere in a warm room, and she looked, against her will, like she could belong here.

---

Night came slowly.

I spent the evening in my room. The house resettled around me. Doors opening, closing. Footsteps on stairs. The smell of dinner cooking: garlic, tomato, something herbed and slow. Gianna had left a plate outside my door: pasta with red sauce, bread, a glass of wine. The gesture was either kindness or a message. You are fed. You are provided for. Guests eat what the host gives them.

The pasta was extraordinary. I hated how good it was.

By eleven, the house was quiet. I did my ritual. Four minutes, tap running. Changed into the silk robe. Sat on the edge of the bed with the lights off, the streetlamp painting a pale rectangle on the floor.

Then I heard it.

Piano. Coming through the wall, through the shared sitting room, from Nico's side of the floor. Not scales or exercises. A piece. Something classical and slow, built on a melody that climbed and fell and climbed again, each phrase more exposed than the last. I didn't know the composer. I knew the feeling. The music sounded the way grief sounds when it stops being sharp and becomes the thing you live inside, the temperature of every room, the colour behind your eyes when you close them.

He played without stopping. No pauses, no mistakes, no hesitation. The notes moved through the wall like water through stone, finding every crack, every gap, filling the dark.

I stood. Crossed the room. Pressed my back against the wall that separated us.

The plaster was cool through the silk. I could feel the vibration of the piano in my shoulder blades, a low hum that was not quite sound, not quite touch. He was fifteen feet away. Playing something that I understood without knowing the name of it, something that said *I am alone in a room and I am not performing for anyone and this is what I sound like when no one is watching.*

I pressed my palms flat against the wall. I listened. I did not go to him.

I stayed there long enough for the piece to end and another to begin, slower, quieter, as if the piano itself were falling asleep. Long enough for my breathing to match the rhythm of his playing, which I noticed and did not correct.

I did not go to him.

The music stopped. A creak, a footstep, a door closing softly. His side of the floor went dark.

I slid down the wall until I was sitting on the floor, knees drawn up, silk robe pooling around me. The ring was heavy on my finger. The house kept its secrets in the walls, and I sat against one and kept mine.

At some point in the small hours, I got up for water. The streetlamp had shifted, the light rectangle now lying across the foot of the bed. As I moved toward the bathroom, my bare foot touched something on the floor near the door.

Paper. Stiff. An envelope, cream-coloured, slid beneath the gap.

I picked it up. No name on the front. No markings. I turned it over. Unsealed.

Inside: a photograph.

My breath stopped.

Marcus. My brother. Sitting in a restaurant, warm-toned, low lighting, leaning forward with his elbows on the table. The same posture, the same fire. And across from him, the same man I'd kept in my desk for three years. The older man with the heavy brows and the broken nose and the face I'd memorised a hundred times without ever learning his name.

But this was a different photograph. Different angle, taken from across the room, slightly blurred as if shot quickly, without permission. In this version, I could see more of the restaurant. A wine bottle between them. Marcus's hand gesturing. The other man leaning forward, listening. Their body language was close, conspiratorial, two people in the middle of something important.

I turned the photograph over.

Handwriting on the back. Not Marcus's angular scrawl. Not my father's precise capitals. A hand I didn't recognise, small and neat and deliberate.

Five words:

*Ask your father about Dominic.*

My blood went cold. Not a metaphor. A plunge in temperature that started in my hands and moved inward, like falling through ice into dark water. I stood barefoot on the dark wood floor of the Valenti compound at two in the morning, holding a photograph of my dead brother and a message from someone who knew things I didn't, and every assumption I'd carried into this house shifted beneath me like a floor that had been solid a moment ago and now was not.

Ask your father about Dominic.

The kind-faced man in the photographs on the stairs. The man whose espresso recipe his son still used. The man who was murdered at a family dinner five years ago.

What did my father know? What did Marcus know? And who in this house was sliding messages under my door in the dark?

I put the photograph back in the envelope, the envelope in my suitcase, interior pocket, zipped shut. I would need a better hiding place. Tomorrow.

I sat on the edge of the bed. Pressed my thumb to the tattoo. Three.

I had come here with a plan. A clean, sharp, seven-year plan built on grief and certainty.

The certainty was cracking.

I pressed harder. Marcus. Celia. Sera.

*Ask your father about Dominic.*

I did not sleep. I sat in the dark and held the question like a blade, turning it, feeling its weight, trying to decide which direction it cut.

Toward the Valentis. Or toward home.`,
      },
    ],
  },
];

export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getChapter(
  slug: string,
  chapterNum: number
): Chapter | undefined {
  const story = getStory(slug);
  return story?.chapters.find((c) => c.number === chapterNum);
}
