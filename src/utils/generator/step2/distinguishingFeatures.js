const quirks = {
    '1': { description: 'Impeccable poise or clear' },
    '10': { description: 'Is deathly afraid of heights' },
    '11': { description: 'Frequently squints or furrows brow' },
    '12': { description: 'Excessive and/or intense blinking' },
    '13': { description: 'Seems always serious in tone' },
    '14': { description: 'Cracks knuckles or neck frequently' },
    '15': { description: 'Mumbles or trails off when speaking' },
    '16': { description: 'Habitually touches head' },
    '17': { description: 'Walks on edges or balls of feet' },
    '18': { description: 'Has an unusually high-pitched voice' },
    '19': { description: 'Has an unusually low-pitched voice' },
    '20': { description: 'Nose frequently whistles' },
    '21': { description: 'Repeats the last word others speak' },
    '22': { description: 'Frequent sniffing and nose touching' },
    '23': { description: 'Noticably upright posture' },
    '24': { description: 'Habitually sways back and forth' },
    '25': { description: 'Stands too close to others' },
    '26': { description: 'Whisper or vocalizes to self' },
    '27': { description: 'A disarming stoicism' },
    '28': { description: 'Uses animated gesticulations' },
    '29': { description: 'Has a habit of staring' },
    '30': { description: 'Soft-spoken' },
    '31': { description: 'Curses excessively' },
    '32': { description: 'Consistently polite' },
    '33': { description: 'Extremely curt or tight-lipped' },
    '34': { description: 'Prone to chatter' },
    '35': { description: 'Insists on using nicknames' },
    '36': { description: 'Has a habit of winking' },
    '37': { description: 'Laughs after speaking' },
    '38': { description: 'Speaks very slowly' },
    '39': { description: 'Fast talker' },
    '40': { description: 'Takes many pauses when speaking' },
    '41': { description: 'Typically avoids eye contact' },
    '42': { description: 'Seems always to be joking' },
    '43': { description: 'Frequent habitual coughing' },
    '44': { description: 'Speaks excessively loudly' },
    '45': { description: 'An asynchronous gait' },
    '46': { description: 'Experiences acute claustrophobia' },
    '50': { description: 'Feels compelled to intimidate others' }
}

const proportions = {
    '1': { description: 'Strikingly symmetrical' },
    '11': { description: 'Pronounced double chin' },
    '12': { description: 'Very large, gapped teeth' },
    '13': { description: 'Shockingly narrow shoulders' },
    '14': { description: 'Incredibly small, rounded ears' },
    '15': { description: 'Large and/or bulbous nose' },
    '16': { description: 'Remarkably close-set facial features' },
    '17': { description: 'Remarkably wide-set facial features' },
    '18': { description: 'One eye is higher than the other' },
    '19': { description: 'Very small hands' },
    '20': { description: 'Very large hands' },
    '21': { description: 'Very long arms and/or legs' },
    '22': { description: 'Very short arms and/or legs' },
    '23': { description: 'Knobby or spurred elbows' },
    '24': { description: 'Beady eyes' },
    '25': { description: 'Rounded, jutting chin' },
    '26': { description: 'Pronounced underbite' },
    '27': { description: 'Pronounced overbite' },
    '28': { description: 'Proportionately large eyes' },
    '29': { description: 'Incredibly large, elongated ears' },
    '30': { description: 'Strikingly angular features' },
    '31': { description: 'Strong jaw' },
    '32': { description: 'A slender, pointed chin' },
    '33': { description: 'Round or fleshy cheeks' },
    '34': { description: 'Upturned nose' },
    '35': { description: 'Gaping, flared nostrils' },
    '36': { description: 'Incredibly wide set shoulders' },
    '37': { description: 'Crooked or bowed legs' },
    '38': { description: 'Extremely thick hair' },
    '39': { description: 'Very large feet/long toes' },
    '40': { description: 'Noticeably tall or wide forehead' },
    '41': { description: 'Protruding, high cheekbones' },
    '42': { description: 'Pointed ear lobes or tips' },
    '50': { description: 'Shocking asymmetry of facial features' }
}

const scarsWeathering = {
    '1': { description: 'Smooth, uniformly textured skin' },
    '13': { description: 'Deep scar across right cheek' },
    '14': { description: 'Missing several teeth' },
    '15': { description: 'Burn scars on face and/or shoulder' },
    '16': { description: 'Burn scars on arms and/or body' },
    '17': { description: 'Cauliflower ear/torn ear' },
    '18': { description: 'Four noticeable stabbing scars' },
    '19': { description: 'Missing two fingers from right hand' },
    '20': { description: 'Missing two fingers from left hand' },
    '21': { description: 'Clouded/scarred/damaged right eye' },
    '22': { description: 'Clouded/scarred/damaged left eye' },
    '23': { description: 'Whip scars across back' },
    '24': { description: 'Broken nose that healed misshapenly' },
    '25': { description: 'Missing or mangled left ear' },
    '26': { description: 'Symmetrical scars across both cheeks' },
    '27': { description: 'Long, ragged diagonal face scar' },
    '28': { description: 'Scars from animal bite' },
    '29': { description: 'Large, thick callouses' },
    '30': { description: 'Noticeably unscarred or soft-skinned' },
    '31': { description: 'Sun spots or age spots' },
    '32': { description: 'Freckled or spotted skin' },
    '33': { description: 'Ruddy complexion' },
    '34': { description: 'Deep pock marks in face and skin' },
    '35': { description: 'Missing or mangled right ear' },
    '36': { description: 'Deep scar across left cheek' },
    '37': { description: 'Concave or sunken patch of skin' },
    '38': { description: 'Missing or mangled tip of nose' },
    '39': { description: 'Missing or mangled finger/toe' },
    '40': { description: 'Ligature scars from bindings' },
    '41': { description: 'Abundant gray hair' },
    '50': { description: 'Deeply weathered or stained skin' }
}

const modificationsAdornments = {
    '1': { description: 'Incredibly dense, braided hair' },
    '15': { description: 'Stretched ear piercings' },
    '16': { description: 'Pierced septum with elaborate jewelry' },
    '17': { description: 'Ritually tattooed body' },
    '18': { description: 'Ritually tattooed face' },
    '19': { description: 'Teeth filed to points' },
    '20': { description: 'Shaved head' },
    '21': { description: 'Pierced nasal bridge' },
    '22': { description: 'Multiple ear piercings (at least eight)' },
    '23': { description: 'Ritual or symbolic branding on arms' },
    '24': { description: 'Scarification on body and/or face' },
    '25': { description: 'Colored nails' },
    '26': { description: 'Dyed hair and/or fur' },
    '27': { description: 'Matted or dreaded hair and/or fur' },
    '28': { description: 'Striking, patterned face paint' },
    '29': { description: 'Shaved eyebrows' },
    '30': { description: 'Paints face with bright colors' },
    '31': { description: 'Wears beads or shells in hair' },
    '32': { description: 'A split tongue' },
    '33': { description: 'Pierced lip or stretched lip plate' },
    '34': { description: 'Angular bangs or haircut' },
    '35': { description: 'Wears garb from other cultures' },
    '36': { description: 'Wears elaborate body paints' },
    '37': { description: 'Wears numerous decorative pendants' },
    '38': { description: 'Wears very loose, baggy clothing' },
    '39': { description: 'Tattooed fingers and/or hands' },
    '40': { description: 'Always wears a head covering' },
    '50': { description: 'Controversial symbolic tattoos' }
}

const anomalies = {
    '1': { description: 'Iridescent, bioluminescent eyes' },
    '17': { description: 'Nearly hairless with translucent skin' },
    '18': { description: 'Albinism' },
    '19': { description: 'Ocular heterochromia' },
    '20': {
        description: 'Particularly short',
        modifications: [
            {
                appearanceDetail: 'height',
                multiplier: .75
            }
        ]
    },
    '21': {
        description: 'Dwarfism',
        modifications: [
            {
                appearanceDetail: 'height',
                multiplier: .6
            },
            {
                appearanceDetail: 'weight',
                multiplier: .5
            }
        ]
    },
    '22': { description: 'Chimerism (multicolored hair/skin)' },
    '23': { description: 'Deeply curved spine' },
    '24': { description: 'Extra digit on hands and/or feet' },
    '25': { description: 'Elongated, protruding canine teeth' },
    '26': { description: 'Skin is tinted dark gray or blue' },
    '27': { description: 'Wide neck and/or sloped shoulders' },
    '28': { description: 'Cleft palate/cleft lip' },
    '29': { description: 'An odd, but not displeasing smell' },
    '30': { description: 'Amblyopia' },
    '31': { description: 'Extremely long ears' },
    '32': { description: 'Unusual, strangely colored eyes' },
    '33': { 
        description: 'Particularly tall',
        modifications: [
            {
                appearanceDetail: 'height',
                multiplier: 1.25
            }
        ]
    },
    '34': { description: 'Hirsutism' },
    '35': { description: 'Vitiligo' },
    '36': { description: 'Webbed fingers and/or toes' },
    '37': { description: 'Patchy baldness' },
    '38': { description: 'Dark birthmark in prominent location' },
    '39': {
        description: 'Ectomorphic',
        modifications: [
            {
                appearanceDetail: 'weight',
                multiplier: .75
            }
        ]
    },
    '50': { description: 'Completely darkened or black sclera' }
}
