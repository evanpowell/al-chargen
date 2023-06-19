const quirks = {
    '1': { description: `Impeccable $["poise", "clearheadedness"]` },
    '10': { description: `Is deathly afraid of heights` },
    '11': { description: `Frequently $["squints", "furrows brow"]` },
    '12': { description: `$["Excessive", "Intense", "Excessive and intense"] blinking` },
    '13': { description: `Seems always serious in tone` },
    '14': { description: `Cracks $["knuckles", "neck"] frequently` },
    '15': { description: `$["Mumbles", "Trails off"] when speaking` },
    '16': { description: `Habitually touches head` },
    '17': { description: `Walks on $["edges", "balls"] of feet` },
    '18': { description: `Has an unusually high-pitched voice` },
    '19': { description: `Has an unusually low-pitched voice` },
    '20': { description: `Nose frequently whistles` },
    '21': { description: `Repeats the last word others speak` },
    '22': { description: `Frequent sniffing and nose touching` },
    '23': { description: `Noticably upright posture` },
    '24': { description: `Habitually sways back and forth` },
    '25': { description: `Stands too close to others` },
    '26': { description: `$["Whispers", "Vocalizes"] to self` },
    '27': { description: `A disarming stoicism` },
    '28': { description: `Uses animated gesticulations` },
    '29': {
        description: `Has a habit of staring`,
        type: `sight`
    },
    '30': { description: `Soft-spoken` },
    '31': { description: `Curses excessively` },
    '32': { description: `Consistently polite` },
    '33': { description: `Extremely $["curt", "tight-lipped"]` },
    '34': { description: `Prone to chatter` },
    '35': { description: `Insists on using nicknames` },
    '36': { description: `Has a habit of winking` },
    '37': { description: `Laughs after speaking` },
    '38': { description: `Speaks very slowly` },
    '39': { description: `Fast talker` },
    '40': { description: `Takes many pauses when speaking` },
    '41': {
        description: `Typically avoids eye contact`,
        type: `sight`
    },
    '42': { description: `Seems always to be joking` },
    '43': { description: `Frequent habitual coughing` },
    '44': { description: `Speaks excessively loudly` },
    '45': { description: `An asynchronous gait` },
    '46': { description: `Experiences acute claustrophobia` },
    '50': { description: `Feels compelled to intimidate others` }
}

const proportions = {
    '1': { description: `Strikingly symmetrical` },
    '11': { description: `Pronounced double chin` },
    '12': { description: `Very large, gapped teeth` },
    '13': { description: `Shockingly narrow shoulders` },
    '14': { description: `Incredibly small, rounded ears` },
    '15': { description: `$["Large", "Bulbous", "Large and bulbous"] nose` },
    '16': { description: `Remarkably close-set facial features` },
    '17': { description: `Remarkably wide-set facial features` },
    '18': { description: `One eye is higher than the other` },
    '19': {
        description: `Very small hands`,
        type: `limb`,
        alternatives: {
            arm: `Very small $SIDE hand`
        }
    },
    '20': { description: `Very large hands` },
    '21': {
        description: `Very long $["arms", "legs", "arms and legs"]`,
        type: `limb`,
        alternatives: {
            arm: `Very long $["$SIDE arm", "legs", "$SIDE arm and legs"]`,
            leg: `Very long $["arms", "$SIDE leg", "$SIDE leg and arms"]`
        }
    },
    '22': {
        description:`Very short $["arms", "legs", "arms and legs"]`,
        type: `limb`,
        alternatives: {
            arm: `Very short $["$SIDE arm", "legs", "$SIDE arm and legs"]`,
            leg: `Very short $["arms", "$SIDE leg", "$SIDE leg and arms"]`
        }
    },
    '23': { description: `$["Knobby", "Spurred"] elbows` },
    '24': { description: `Beady eyes` },
    '25': { description: `Rounded, jutting chin` },
    '26': { description: `Pronounced underbite` },
    '27': { description: `Pronounced overbite` },
    '28': { description: `Proportionately large eyes` },
    '29': { description: `Incredibly large, elongated ears` },
    '30': { description: `Strikingly angular features` },
    '31': { description: `Strong jaw` },
    '32': { description: `A slender, pointed chin` },
    '33': { description: `$["Round", "Fleshy"] cheeks` },
    '34': { description: `Upturned nose` },
    '35': { description: `Gaping, flared nostrils` },
    '36': { description: `Incredibly wide set shoulders` },
    '37': {
        description: `$["Crooked", "Bowed"] legs`,
        type: `limb`,
        alternatives: {
            leg: `Crooked $SIDE leg`
        }
    },
    '38': { description: `Extremely thick hair` },
    '39': {
        description: `Very $["large feet", "long toes"]`,
        type: `limb`,
        alternatives: {
            leg: `Very $["large $SIDE foot", "long toes"]`
        }
    },
    '40': { description: `Noticeably $["tall", "wide"] forehead` },
    '41': { description: `Protruding, high cheekbones` },
    '42': { description: `Pointed ear $["lobes", "tips"]` },
    '50': { description: `Shocking asymmetry of facial features` }
}

const scarsWeathering = {
    '1': { description: `Smooth, uniformly textured skin` },
    '13': { description: `Deep scar across right cheek` },
    '14': { description: `Missing several teeth` },
    '15': { description: `Burn scars on $["face", "shoulder", "face and shoulder"]` },
    '16': {
        description: `Burn scars on $["arms", "body", "arms and body"]`,
        type: `limb`,
        alternatives:   {
            arm: `Burn scars on $["$SIDE arm", "body", "body and $SIDE arm"]`,
        }
    },
    '17': { description: `$["Cauliflower", "Torn"] ear` },
    '18': { description: `$["Two", "Three", "Four", "Five"] noticeable stabbing scars` },
    '19': {
        description: `Missing two fingers from right hand`,
        type: `limb`,
        alternatives:   {
            arm: `Missing two fingers from $SIDE hand`,
        }
    },
    '20': {
        description: `Missing two fingers from left hand`,
        type: `limb`,
        alternatives:   {
            arm: `Missing two fingers from $SIDE hand`,
        }
    },
    '21': { description: `$["Clouded", "Scarred", "Damaged"] right eye` },
    '22': { description: `$["Clouded", "Scarred", "Damaged"] left eye` },
    '23': { description: `Whip scars across back` },
    '24': { description: `Broken nose that healed misshapenly` },
    '25': { description: `$["Missing", "Mangled"] left ear` },
    '26': { description: `Symmetrical scars across both cheeks` },
    '27': { description: `Long, ragged diagonal face scar` },
    '28': { description: `Scars from animal bite` },
    '29': { description: `Large, thick callouses` },
    '30': { description: `Noticeably $["unscarred", "soft-skinned"]` },
    '31': { description: `$["Sun", "Age"] spots` },
    '32': { description: `$["Freckled", "Spotted"] skin` },
    '33': { description: `Ruddy complexion` },
    '34': { description: `Deep pock marks in face and skin` },
    '35': { description: `$["Missing", "Mangled"] right ear` },
    '36': { description: `Deep scar across left cheek` },
    '37': { description: `$["Concave", "Sunken"] skin` },
    '38': { description: `$["Missing", "Mangled"] tip of nose` },
    '39': { description: `$["Missing", "Mangled"] $["finger", "toe"]` },
    '40': { description: `Ligature scars from bindings` },
    '41': { description: `Abundant gray hair` },
    '50': { description: `Deeply $["weathered", "stained"] skin` }
}

const modificationsAdornments = {
    '1': { description: `Incredibly dense, braided hair` },
    '15': { description: `Stretched ear piercings` },
    '16': { description: `Pierced septum with elaborate jewelry` },
    '17': { description: `Ritually tattooed body` },
    '18': { description: `Ritually tattooed face` },
    '19': { description: `Teeth filed to points` },
    '20': { description: `Shaved head` },
    '21': { description: `Pierced nasal bridge` },
    '22': { description: `$["Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen"] ear piercings` },
    '23': {
        description: `$["Ritual", "Symbolic"] branding on arms`,
        type: `limb`,
        alternatives: {
            arm: `$["Ritual", "Symbolic"] branding on $SIDE arm`
        }
    },
    '24': { description: `Scarification on $["body", "face", "body and face"]` },
    '25': { description: `Colored nails` },
    '26': { description: `Dyed hair and/or fur` },
    '27': { description: `$["Matted", "Dreaded"] hair and/or fur` },
    '28': { description: `Striking, patterned face paint` },
    '29': { description: `Shaved eyebrows` },
    '30': { description: `Paints face with bright colors` },
    '31': { description: `Wears $["beads", "shells", "beads and shells"] in hair` },
    '32': { description: `A split tongue` },
    '33': { description: `$["Pierced lip", "Stretched lip plate"]` },
    '34': { description: `Angular $["bangs", "haircut"]` },
    '35': { description: `Wears garb from other cultures` },
    '36': { description: `Wears elaborate body paints` },
    '37': { description: `Wears numerous decorative pendants` },
    '38': { description: `Wears very loose, baggy clothing` },
    '39': {
        description: `Tattooed $["hands", "fingers", "hands and fingers"]`,
        type: `limb`,
        alternatives: {
            arm: `Tattooed $["$SIDE hand", "fingers", "$SIDE hand and fingers"]`
        }
    },
    '40': { description: `Always wears a head covering` },
    '50': { description: `Controversial symbolic tattoos` }
}

const anomalies = {
    '1': { description: `Iridescent, bioluminescent eyes` },
    '17': { description: `Nearly hairless with translucent skin` },
    '18': { description: `Albinism` },
    '19': { description: `Ocular heterochromia` },
    '20': {
        description: 'Particularly short',
        modifications: [
            {
                type: 'appearance',
                name: 'height',
                multiplier: .75
            }
        ]
    },
    '21': {
        description: 'Dwarfism',
        modifications: [
            {
                type: 'appearance',
                name: 'height',
                multiplier: .6
            },
            {
                type: 'appearance',
                name: 'weight',
                multiplier: .5
            }
        ]
    },
    '22': { description: `Chimerism (multicolored hair/skin)` },
    '23': { description: `Deeply curved spine` },
    '24': {
        description: `Extra digit on $["right hand", "left hand", "both hands", "right foot", "left foot", "both feet"]`,
        type: `limb`,
        alternatives: {
            arm: `Extra digit on $["$SIDE hand", "right foot", "left foot", "both feet"]`,
            leg: `Extra digit on $["right hand", "left hand", "both hands", "$SIDE foot"]`,
        }
    },
    '25': { description: `Elongated, protruding canine teeth` },
    '26': { description: `Skin is tinted $["dark gray", "blue"]` },
    '27': { description: `$["Wide neck", "Sloped shoulders", "Wide neck and sloped shoulders"]` },
    '28': { description: `Cleft $["palate", "lip"]` },
    '29': { description: `An odd, but not displeasing smell` },
    '30': { description: `Amblyopia` },
    '31': { description: `Extremely long ears` },
    '32': { description: `Unusual, strangely colored eyes` },
    '33': { 
        description: 'Particularly tall',
        modifications: [
            {
                type: 'appearance',
                name: 'height',
                multiplier: 1.25
            }
        ]
    },
    '34': { description: `Hirsutism` },
    '35': { description: `Vitiligo` },
    '36': { description: `Webbed $["fingers", "toes", "fingers and toes"]` },
    '37': { description: `Patchy baldness` },
    '38': { description: `Dark birthmark in prominent location` },
    '39': {
        description: 'Ectomorphic',
        modifications: [
            {
                type: 'appearance',
                name: 'weight',
                multiplier: .75
            }
        ]
    },
    '50': { description: `Completely $["darkened", "black"] sclera` }
}


export const distinguishingFeatures = {
    quirks,
    proportions,
    scarsWeathering,
    modificationsAdornments,
    anomalies
};
