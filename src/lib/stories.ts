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
