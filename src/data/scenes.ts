export interface SceneData {
  id: string;
  sceneNumber: number;
  title: string;
  text: string;
  caption: string;
  interpretation: string;
}

export const scenes: SceneData[] = [
  {
    id: "scene-01",
    sceneNumber: 1,
    title: "The Cabinet",
    text: "It happened in a metal drum.",
    caption:
      "\"They put me there, my family that loved me. The water had been saved just for it, that day.\"",
    interpretation:
      "The poem opens with devastating irony. The family \"loved\" the child enough to destroy them. The water was rationed and saved specifically for this ritual conversion.",
  },
  {
    id: "scene-02",
    sceneNumber: 2,
    title: "The House in Chaos",
    text: "The laundry lay caked and smelly. Dishes soiled with fat and swill.",
    caption:
      "\"My cousins did not get washed that morning. Lost in masks of snot and dust, their faces looked tired and resigned to the dirty lot of children.\"",
    interpretation:
      "The family sacrificed its scarce resources, clean water, hygiene, order, for an ideological project. The conversion mattered more than basic survival.",
  },
  {
    id: "scene-03",
    sceneNumber: 3,
    title: "The Uncles Arrive",
    text: "Father had arrived booming with his cousins, my uncles. They were big, strong men.",
    caption:
      "\"They turned the house inside-out looking for me. Curled up in the deepest corner of my dead mother's cabinet, father found me.\"",
    interpretation:
      "The uncles are enforcers of patriarchy. They are not villains. They believe they are saving this child. That is what makes the violence so durable: it disguises itself as love.",
  },
  {
    id: "scene-04",
    sceneNumber: 4,
    title: "The Dragging",
    text: "He dragged me down the stairs by the hair.",
    caption:
      "\"Into the waiting arms of my uncles. Because of modesty, I merely screamed and cried.\"",
    interpretation:
      "\"Because of modesty\" even in terror, the child internalizes shame. The scream is muted by propriety. The neighbors watch from their windows and do nothing.",
  },
  {
    id: "scene-05",
    sceneNumber: 5,
    title: "The Drum",
    text: "Into the cold of the drum I slipped.",
    caption:
      "\"The tingling too much to bear at times my knees felt like they had turned into water.\"",
    interpretation:
      "The metal drum is open on top, filled with cold water. It is a baptismal font and a torture device all at once. They plunge the child in and hold them under. The child's knees turn to water, the body dissolving into the very thing being used to destroy it.",
  },
  {
    id: "scene-06",
    sceneNumber: 6,
    title: "Girl or Boy",
    text: "Girl or Boy.",
    caption:
      "\"I thought about it and squealed, Girl. Water curled under my nose. The same girl kept sinking deeper, breathing deeper in the churning void.\"",
    interpretation:
      "The child answers truthfully, Girl, and is shoved under the water. They pull the child up. The same question. The same answer. Under again. This repeats until the child finally says Boy, not out of belief, but because a pot of rice is burning in the kitchen and the world needs to move on.",
  },
  {
    id: "scene-07",
    sceneNumber: 7,
    title: "The Closing Holes",
    text: "I watched the holes in my ears grow smaller, until they looked as if they had never heard of rhinestones.",
    caption:
      "\"I had to stop wearing my dead mother's clothes. In the mirror I watched the holes in my ears grow smaller.\"",
    interpretation:
      "The body itself erases the evidence. Garcia uses 'heard' deliberately. The ears that once held rhinestones cannot even remember them. The conversion rewrites the flesh.",
  },
  {
    id: "scene-08",
    sceneNumber: 8,
    title: 'The "Redeemed" Man',
    text: "Our four children, all boys, are the joy of my manhood, my proof.",
    caption:
      "\"I should feel happy now that I'm redeemed. And I do. Another child is on the way. I have stopped caring what it will be.\"",
    interpretation:
      "He calls his sons his \"proof,\" still presenting evidence at a trial that never ended. Still answering Girl or Boy. Every son is another answer. The indifference toward the next child reveals the exhaustion beneath the performance.",
  },
  {
    id: "scene-09",
    sceneNumber: 9,
    title: "The Violence",
    text: "I hit her in the mouth to learn her.",
    caption:
      "\"Every time, swill drips from her shredded lips. I drink with my uncles who all agree.\"",
    interpretation:
      "The cycle completes. The boy beaten into manhood now beats his wife. He uses 'learn' as if violence is education. The uncles drink together. The patriarchal system rewards its enforcers with belonging.",
  },
  {
    id: "scene-10",
    sceneNumber: 10,
    title: "The Haunting",
    text: "I see her at night with bubbles springing like flowers from her nose.",
    caption:
      "\"She is dying and before she sinks I try to touch her open face. But the water learns to heal itself and closes around her like a wound.\"",
    interpretation:
      "The drowned girl, his true self, appears in dreams with a grace the living man can never have. He reaches for her, but the water heals over her like scar tissue. She is gone. He reaches for the gin.",
  },
  {
    id: "scene-11",
    sceneNumber: 11,
    title: "The Surface",
    text: "We die to rise to a better life.",
    caption:
      "\"Better off dead, I say to myself and my family that loves me for my bitter breath.\"",
    interpretation:
      "The last line borrows from Christian theology, but the 'better life' is alcoholism, violence, and a haunting that never stops. The drum is still in the yard. Deep and rusty. The conversion succeeded outside and failed within.",
  },
];
