// Object of cards, context, what to do
const tarot = {

    _world: {
        _name: 'The World',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'completion, achievement, fulfilment, sense of belonging, wholeness, harmony',
                _meaning: {
                    _love: 'feeling loved and grateful, fulfilling romantic life',
                    _career: 'completing career goal, fulfilling career path',
                    _finance: 'completing financial goal'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'lack of closure, lack of achievement, feeling incomplete, emptiness',
                _meaning: {
                    _love: 'missing something in love life, taking partner for granted',
                    _career: 'false measure of success, missing piece in career',
                    _finance: 'close to completing financial goal, unfulfilled despite financial comfort'
                },
            },
        },

    },

    _judgement: {
        _name: 'Judgement',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'self-evaluation, awakening, renewal, purpose, reflection, reckoning',
                _meaning: {
                    _love: 'renewal of love, making adjustments in relationship',
                    _career: 'finding career purpose, accountability at work',
                    _finance: 'reflecting on financial habits, reflecting on your values'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'self-doubt, lack of self-awareness, failure to learn lessons, self-loathing',
                _meaning: {
                    _love: 'blaming your partner, denial about love life',
                    _career: 'self-doubt at work, failure to take responsibility for mistakes',
                    _finance: 'failure to learn financial lessons, too self-denying'
                },
            },
        },

    },

    _sun: {
        _name: 'The Sun',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'happiness, success, optimism, vitality, joy, confidence, happiness, truth',
                _meaning: {
                    _love: 'happiness and love in relationship, positivity is attractive, feeling radian',
                    _career: 'enthusiastic and energetic at work, successful work projects',
                    _finance: 'strong financial situation'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'blocked happiness, excessive enthusiasm, pessimism, unrealistic expectations, conceitedness',
                _meaning: {
                    _love: 'boredom, taking love for granted, being unable to see happiness in relationship',
                    _career: 'failure to appreciate work, over-confidence at work situations, unrealistic beliefs',
                    _finance: 'overly optimistic about finances, hardships are only temporary'
                },
            },
        },

    },

    _moon: {
        _name: 'The Moon',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'illusion, intuition, uncertainty, confusion, complexity, secrets, unconscious',
                _meaning: {
                    _love: 'complicated romance, uncertainty about love or relationship',
                    _career: 'uncertainty around career path, confusion at job, lack of information',
                    _finance: 'unclear around financial decisions, lacking financial knowledge'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'fear, deception, anxiety, misunderstanding, misinterpretation, clarity, understanding',
                _meaning: {
                    _love: 'deception, fear and paranoia regarding love',
                    _career: 'clarity at work, sabotage, deception and trickery at workplace',
                    _finance: 'clarity about finances, deception regarding finances'
                },
            },
        },

    },

    _star: {
        _name: 'The Star',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'hope, inspiration, positivity, faith, renewal, healing, rejuvenation',
                _meaning: {
                    _love: 'optimistic about love life, healing from past wounds',
                    _career: 'positivity brings career rewards, high hopes about job',
                    _finance: 'reaching financial goals, remaining inspired'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'hopelessness, despair, negativity, lack of faith, despondent',
                _meaning: {
                    _love: 'extreme self-criticism, loss of hope about romance, lack of confidence',
                    _career: 'lack of motivation, lack of enthusiasm, pessimism about work',
                    _finance: 'despair regarding financial situation'
                },
            },
        },

    },

    _tower: {
        _name: 'The Tower',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'disaster, destruction, upheaval, trauma, sudden change, chaos',
                _meaning: {
                    _love: 'breakup, weak relationships ending, foundational shift in view of love',
                    _career: 'sudden job loss, workplace disruption, workplace chaos',
                    _finance: 'financial loss, wake up call regarding finances'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'averting disaster, delaying the inevitable, resisting change',
                _meaning: {
                    _love: 'making adjustments in love, leaving a weak relationship',
                    _career: 'surviving layoffs, avoiding taking risks in career',
                    _finance: 'surviving financial disaster, repeating financial troubles'
                },
            },
        },

    },

    _devil: {
        _name: 'The Devil',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'oppression, addiction, obsession, dependency, excess, powerlessness, limitations',
                _meaning: {
                    _love: 'lust, hedonism, selfish disregard for lover’s feelings, obsession',
                    _career: 'feeling trapped in job, blaming colleagues, self-sabotage',
                    _finance: 'bad financial habits'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'independence, freedom, revelation, release, reclaiming power, reclaiming control',
                _meaning: {
                    _love: 'feeling more in control of love life, ending co-dependency',
                    _career: 'more accountability in career path, feeling empowered at job',
                    _finance: 'breaking bad financial habits, feeling independent financially'
                },
            },
        },

    },

    _temperance: {
        _name: 'Temperance',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'balance, peace, patience, moderation, calm, tranquillity, harmony, serenity',
                _meaning: {
                    _love: 'careful and considerate with love, being patient with love or lover',
                    _career: 'success from patience and moderation, steady and slow progress',
                    _finance: 'diligent saving, slow and steady growth'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'imbalance, excess, extremes, discord, recklessness, hastiness',
                _meaning: {
                    _love: 'going to extremes for love, all or nothing romances, impatience',
                    _career: 'work-life imbalance, all or nothing at job, rushed job, reckless decisions',
                    _finance: 'failure to balance long term needs with short term happiness'
                },
            },
        },

    },

    _death: {
        _name: 'Death',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'transformation, endings, change, transition, letting go, release',
                _meaning: {
                    _love: 'changes in relationship, changes in romantic life, ending relationship',
                    _career: 'job transition, career transition, leaving unfulfilling career',
                    _finance: 'financial loss, adapting to financial loss, changing views of money'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'fear of change, repeating negative patterns, resisting change, stagnancy, decay',
                _meaning: {
                    _love: 'resisting change in relationship, failure to change negative emotional patterns',
                    _career: 'repeating negative patterns at work, remaining at unfulfilling job, lack of growth',
                    _finance: 'failure to adapt to financial loss, continuing unhealthy financial habits'
                },
            },
        },

    },

    _hanged: {
        _name: 'The Hanged Man',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'sacrifice, waiting, uncertainty, lack of direction, perspective, contemplation',
                _meaning: {
                    _love: 'love can’t be rushed, avoid romantic pressure, sacrifice for love',
                    _career: 'uncertainty about career, waiting, forced break, thinking of next steps',
                    _finance: 'change in perspective about finances'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'stalling, disinterest, stagnation, avoiding sacrifice, standstill, apathy',
                _meaning: {
                    _love: 'new perspectives on love, changes in romantic life',
                    _career: 'new career move not working, procrastination, stalling for time',
                    _finance: 'indecision, failed investment, wasted financial sacrifice'
                },
            },
        },

    },

    _justice: {
        _name: 'Justice',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'justice, karma, consequence, accountability, law, truth, honesty, integrity, cause and effect',
                _meaning: {
                    _love: 'romantic efforts rewarded, compromise, treating partner fairly',
                    _career: 'integrity at work rewarded, remaining accountable and fair',
                    _finance: 'balancing finances, balancing giving and taking'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'injustice, retribution, dishonesty, corruption, dishonesty, unfairness, avoiding accountability',
                _meaning: {
                    _love: 'unfair romantic expectations, blaming partner unfairly',
                    _career: 'unfair work environment, dishonesty in career, not being accountable',
                    _finance: 'untrustworthy financial dealings, avoiding financial accountability'
                },
            },
        },

    },

    _wheel: {
        _name: 'The Wheel of Fortune',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'change, cycles, fate, decisive moments, luck, fortune, unexpected events',
                _meaning: {
                    _love: 'relationship changes, navigating change with partner, making adjustments',
                    _career: 'luck in career, opportunities present, adapting to changes at work',
                    _finance: 'changes in material situation, being flexible with finances'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'bad luck, lack of control, clinging to control, unwelcome changes, delays',
                _meaning: {
                    _love: 'external events affecting relationship, love life out of control',
                    _career: 'failure to adapt at work, forcing past solutions',
                    _finance: 'unexpected financial changes, preparation'
                },
            },
        },

    },

    _hermit: {
        _name: 'The Hermit',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'self-reflection, introspection, contemplation, withdrawal, solitude, search for self',
                _meaning: {
                    _love: 'pause in love life to introspect, self-understanding in love',
                    _career: 'contemplating next steps in career, searching for purpose in career',
                    _finance: 'contemplating role of finances in happiness, less focus on material things'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'loneliness, isolation, recluse, being anti-social, rejection, returning to society',
                _meaning: {
                    _love: 'romantic rejection, loneliness, feeling distant from partner',
                    _career: 'realigning career to internal goals, outcast at work, working alone',
                    _finance: 'better understanding of material situation'
                },
            },
        },

    },

    _strength: {
        _name: 'Strength',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'courage, bravery, confidence, compassion, self-confidence, inner power',
                _meaning: {
                    _love: 'confidence drawing lovers, strong caring relationship',
                    _career: 'self mastery at work, bold career moves, taking big steps',
                    _finance: 'large purchases, controlled spending'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'self-doubt, weakness, low confidence, inadequacy, cowardice, forcefulness',
                _meaning: {
                    _love: 'self esteem issues, insecurity, negativity about love',
                    _career: 'impostor syndrome, insecurity, fear of making big moves',
                    _finance: 'compulsive spending, hesitancy about spending'
                },
            },
        },

    },

    _chariot: {
        _name: 'The Chariot',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'success, ambition, determination, willpower, control, self-discipline, focus',
                _meaning: {
                    _love: 'taking action on love, taking control of love life',
                    _career: 'strong ambitions, motivation and control at work',
                    _finance: 'determination to reach financial goals'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'forceful, no direction, no control, powerless, aggression, obstacles',
                _meaning: {
                    _love: 'obsession with finding love, forcefulness in love',
                    _career: 'lack of ambition, too aggressive in career goals',
                    _finance: 'rushing into or hesitant about financial decisions'
                },
            },
        },

    },

    _lovers: {
        _name: 'The Lovers',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'love, unions, partnerships, relationships, choices, romance, balance, unity',
                _meaning: {
                    _love: 'balanced, loving, supportive relationship, choices about love',
                    _career: 'business partnership, romance at work, choices about career',
                    _finance: 'mutually exclusive financial choices'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'disharmony, imbalance, conflict, detachment, bad choices, indecision',
                _meaning: {
                    _love: 'cold, detached partner, too many suitors, imbalance in relationship',
                    _career: 'conflicts between colleagues, romance at work leading to trouble',
                    _finance: 'impulsive financial choices, not responsible about finances'
                },
            },
        },

    },

    _hierophant: {
        _name: 'The Hierophant',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'tradition, social groups, conventionality, conformity, education, knowledge, beliefs',
                _meaning: {
                    _love: 'safe, traditional partners, avoiding taboo, spiritual love',
                    _career: 'success in work groups, education, teamwork, mentor',
                    _finance: 'keeping your money safe, traditional financial institutions'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'rebellion, unconventionality, non-conformity, new methods, ignorance',
                _meaning: {
                    _love: 'stale relationship, values not aligned, breaking taboo',
                    _career: 'bureaucracy, stifling, confined workplace, peer pressure',
                    _finance: 'new financial institutions, taking risks with finances'
                },
            },
        },

    },

    _emperor: {
        _name: 'The Emperor',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'stability, structure, protection, authority, control, practicality, focus, discipline',
                _meaning: {
                    _love: 'traditional relationship, use logic in love, unexpressed emotions',
                    _career: 'creating processes, structure, discipline, routine, mentor',
                    _finance: 'being disciplined about money'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'tyrant, domineering, rigid, stubborn, lack of discipline, recklessness',
                _meaning: {
                    _love: 'power struggle, competitiveness, overbearing partner',
                    _career: 'low concentration or focus, bureaucracy, bad boss',
                    _finance: 'not disciplined about money, out of control finances'
                },
            },
        },

    },

    _empress: {
        _name: 'The Empress',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'divine feminine, sensuality, fertility, nurturing, creativity, beauty, abundance, nature',
                _meaning: {
                    _love: 'nurturing, supportive lover, sensual committed relationship',
                    _career: 'nurturing colleagues, freshening up office, creative period at work',
                    _finance: 'material comfort, giving, sharing material wealth, generosity'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'insecurity, overbearing, negligence, smothering, lack of growth, lack of progress',
                _meaning: {
                    _love: 'lack of self worth, jealous, clingy lover, lack of progress in love',
                    _career: 'feeling insecure at work, not growing skills, stale jobareer',
                    _finance: 'feeling insecure about finances, despite being stable'
                },
            },
        },

    },

    _hpriestess: {
        _name: 'The High Priestess',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'unconscious, intuition, mystery, spirituality, higher power, inner voice',
                _meaning: {
                    _love: 'remain patient in love, calm exterior with inner passion, intimacy',
                    _career: 'education, creative inspiration, guide, mentor, use instincts',
                    _finance: 'finakeeping your financial situation privatence'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'repressed intuition, hidden motives, superficiality, confusion, cognitive dissonance',
                _meaning: {
                    _love: 'ignoring intuition in romance, hiding true self with lover',
                    _career: 'feeling isolated, lacking project information, rejecting intuition',
                    _finance: 'lack of information, not knowing all the facts'
                },
            },
        },

    },

    _magician: {
        _name: 'The Magician',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'willpower, desire, being resourceful,, skill, ability, concentration, manifestation',
                _meaning: {
                    _love: 'creating opportunities for love, being proactive in love',
                    _career: 'harnessing career opportunities, determination and drive',
                    _finance: 'pursuing financial opportunity, making use of skills'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'manipulation, cunning, trickery, wasted talent, illusion, deception',
                _meaning: {
                    _love: 'romantic illusion, romantic trickery, low willpower for love',
                    _career: 'wasted talent, unwillingness to take chances, workplace deception',
                    _finance: 'missed financial opportunity, not using skills for financial gain'
                },
            },
        },

    },

    _fool: {
        _name: 'The Fool',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'beginnings, freedom, innocence, originality, adventure, idealism, spontaneity',
                _meaning: {
                    _love: 'new relationship, fun light romance',
                    _career: 'new job, new business, breath of fresh air at work',
                    _finance: 'spontaneous spending, financial opportunities'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'reckless, careless, distracted, naive, foolish, gullible, stale, dull',
                _meaning: {
                    _love: 'lack of commitment, risky relationship',
                    _career: 'stale and boring job, reckless actions at work',
                    _finance: 'caution around financial opportunities, foolish purchases'
                },
            },
        },

    },


// SEPARATION SUITS OF WANDS

    _aceW: {
        _name: 'Ace of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'inspiration, creative spark, new initiative, new passion, enthusiasm, energy',
                _meaning: {
                    _love: 'excitement and passion in love, flirtation, romance, attraction',
                    _career: 'inspired at work, creative projects, passion for work',
                    _finance: 'financial relief, end to struggles, inspiration in making money'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'delays, blocks, lack of passion, lack of energy, hesitancy, creative blocks',
                _meaning: {
                    _love: 'short-term passionate love affair, lack of excitement in love',
                    _career: 'lacking inspiration at work, feeling uncreative, lack of progress',
                    _finance: 'risky financial decisions, financial losses'
                },
            },
        },

    },
    
    _2W: {
        _name: 'Two of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'planning, first steps, making decisions, leaving comfort, taking risks',
                _meaning: {
                    _love: 'setting romantic goals, making plans in love, planning future together',
                    _career: 'planning your career, taking first steps in your career, envisioning dreams',
                    _finance: 'planning your long term financial future, laying foundations'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'bad planning, overanalyzing, not taking action, playing it safe, avoiding risk',
                _meaning: {
                    _love: 'failed romantic plans, lack of long term prospects or ideas of future',
                    _career: 'unexpected obstacles in career, overanalyzing, not taking action on plans',
                    _finance: 'lack of control regarding finances, failed financial planning'
                },
            },
        },

    },
    
    _3w: {
        _name: 'Three of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'momentum, confidence, expansion, growth, foresight, looking ahead',
                _meaning: {
                    _love: 'next stage in relationship, romantic momentum, creating lasting foundation',
                    _career: 'new horizons in career, expanding your career options',
                    _finance: 'expanding views about finances, expanding financial goals'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'restriction, limitations, lack of progress, obstacles, delays, frustration',
                _meaning: {
                    _love: 'frustrations or obstacles in love, learning to compromise in love',
                    _career: 'obstacles in career path, lack of growth and challenge, feeling caged',
                    _finance: 'delays in achieving financial goals'
                },
            },
        },

    },
    
    _4w: {
        _name: 'Four of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'community, home, celebrations, reunions, parties, gatherings, stability, belonging',
                _meaning: {
                    _love: 'weddings, engagements, gatherings and public celebrations of love',
                    _career: 'feeling supported by colleagues, office parties, bonding with colleagues',
                    _finance: 'financially supporting loved ones, financial stability and comfort'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'lack of support, instability, feeling unwelcome, transience, lack of roots, home conflict',
                _meaning: {
                    _love: 'conflict between family, community and love life, fear of public commitment',
                    _career: 'workplace conflicts between colleagues, office conflicts',
                    _finance: 'unstable finances, supporting family or loved ones can be a burden'
                },
            },
        },

    },
    
    _5w: {
        _name: 'Five of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'conflict, competition, arguments, aggression, tension, rivals, clashes of ego',
                _meaning: {
                    _love: 'competition between suitors, conflict between lovers, playful banter',
                    _career: 'competition between colleagues, competitive work environment, conflict',
                    _finance: 'financial instability, conflicts about money'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'end of conflict, cooperation, agreements, truces, harmony, peace, avoiding conflict',
                _meaning: {
                    _love: 'avoiding conflict, trying to keep peace in relationship, resolution',
                    _career: 'competition or conflict at workplace is resolved, avoiding work conflict',
                    _finance: 'peace after financial stress, escalation in conflicts about money'
                },
            },
        },

    },
    
    _6w: {
        _name: 'Six of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'success, victory, triumph, rewards, recognition, praise, acclaim, pride',
                _meaning: {
                    _love: 'success at love, fulfilling a relationship goal',
                    _career: 'career achievement, project completion, being rewarded',
                    _finance: 'financial stability, financial rewards'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'failure, lack of recognition, no rewards, lack of achievement',
                _meaning: {
                    _love: 'feeling unloved, feeling neglected, being overlooked',
                    _career: 'failed work project, unrewarded work, unmet career goal',
                    _finance: 'financial loss, failed investment, bad purchase'
                },
            },
        },

    },
    
    _7w: {
        _name: 'Seven of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'protectiveness, standing up for yourself, defending yourself, protecting territory',
                _meaning: {
                    _love: 'setting boundaries in relationship, fighting for romance',
                    _career: 'fighting off competition, defending your position, facing challengers',
                    _finance: 'protecting your financial stability, long term success'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'giving up, admitting defeat, yielding, lack of self belief, surrender',
                _meaning: {
                    _love: 'defensiveness, denial in love, a breakup from external pressure',
                    _career: 'failure to hold your ground, being overcome by competition',
                    _finance: 'some loss of savings, overconfidence leading to loss'
                },
            },
        },

    },
    
    _8w: {
        _name: 'Eight of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'movement, speed, progress, quick decisions, sudden changes, excitement',
                _meaning: {
                    _love: 'romantic life picking up pace, excitement, surprises in love',
                    _career: 'quick progress at work, travelling for work, motivation, impact',
                    _finance: 'quick movement of money, cash coming in and going out'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'waiting, slowness, chaos, delays, losing momentum, hastiness, being unprepared',
                _meaning: {
                    _love: 'misunderstandings, delays in love, hectic pace, confusion',
                    _career: 'career stagnation, lost chances, overwhelmed by job',
                    _finance: 'slow flow of money, lack of patience for financial growth'
                },
            },
        },

    },
    
    _9w: {
        _name: 'Nine of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'last stand, persistence, grit, resilience, perseverance, close to success, fatigue',
                _meaning: {
                    _love: 'love requiring hard work, love isn’t easy, self-improvement',
                    _career: 'exhaustion from work, project nearly complete, feeling drained',
                    _finance: 'financial pressure, economic duress, temporary pressure'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'stubbornness, rigidity, defensiveness, refusing compromise, giving up',
                _meaning: {
                    _love: 'relationship failing despite putting in work, one partner putting in work',
                    _career: 'feeling drained and fatigued at work, struggling at work, nearing burnout',
                    _finance: 'avoiding financial pressure, trying to escape financial stress'
                },
            },
        },

    },
    
    _10w: {
        _name: 'Ten of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'burden, responsibility, duty, stress, obligation, burning out, struggles',
                _meaning: {
                    _love: 'heavy burden of love, love creates responsibility, stress creates issues in relationship',
                    _career: 'being overworked, work burdens being carried alone, needing help from colleagues',
                    _finance: 'financial burden, large unavoidable expenses, struggling daily'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'failure to delegate, shouldering too much responsibility, collapse, breakdown',
                _meaning: {
                    _love: 'failure to share burdens with partner, finding emotional support from partner',
                    _career: 'relief from work burdens, finding support, delegating tasks, burn out',
                    _finance: 'relief from financial burden, finding assistance, deeper economic trouble'
                },
            },
        },

    },
    
    _pW: {
        _name: 'Page of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'adventure, excitement, fresh ideas, cheerfulness, energetic, fearless, extroverted',
                _meaning: {
                    _love: 'possibilities and adventures in love, lively lover, fleeting romance',
                    _career: 'new position or project, taking risks at work, eagerness for challenge',
                    _finance: 'small financial gifts, temptations regarding spending'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'hasty, impatient, lacking ideas, tantrums, laziness, boring, unreliable, distracted',
                _meaning: {
                    _love: 'failure to commit, unreliable lover, aimless search for love',
                    _career: 'boredom with job, lack of vigor in pursuing career goals',
                    _finance: 'financial instability, overspending in past creating problems now'
                },
            },
        },

    },
    
    _knightW: {
        _name: 'Knight of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'courageous, energetic, charming, hero, rebellious, hot tempered, free spirit',
                _meaning: {
                    _love: 'fearless, courageous lover, difficult to commit, rash, erratic relationship',
                    _career: 'passion and energy for work, brave decisions, new business favored',
                    _finance: 'sudden influx of money, using finances for travel, expanding horizons'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'arrogant, reckless, impatient, lack of self control, passive, volatile, domineering',
                _meaning: {
                    _love: 'running from commitment, impatience, unstable relationship',
                    _career: 'lacking direction in career, rushing through jobs, unreliable work',
                    _finance: 'overconfident about money, wasting funds, financial loss'
                },
            },
        },

    },
    
    _qW: {
        _name: 'Queen of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'confident, self-assured, passionate, determined, social, charismatic, vivacious, optimistic',
                _meaning: {
                    _love: 'independent, cheerful and confident lover, openness in relationship',
                    _career: 'determination and passion at work, inspiring or leading others',
                    _finance: 'strong financial decisions, confidence making financial decisions'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'demanding, vengeful, low confidence, jealous, selfish, temperamental, bully',
                _meaning: {
                    _love: 'selfish and demanding lover, jealousy, dominating lover, arguments',
                    _career: 'lack of motivation in career, selfish or jealous colleague',
                    _finance: 'bad financial decisions, greediness, overspending'
                },
            },
        },

    },
    
    _kingW: {
        _name: 'King of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'leadership, vision, big picture, taking control, daring decisions, boldness, optimism',
                _meaning: {
                    _love: 'energetic, charismatic lover, taking the lead in love',
                    _career: 'achievement in career, respected position, mentorship',
                    _finance: 'financial stability, financial wisdom, generosity to others'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'forceful, domineering, tyrant, vicious, powerless, ineffective, weak leader',
                _meaning: {
                    _love: 'arrogant, bossy lover, control issues, forceful lover',
                    _career: 'lack of leadership at work, depending on others, passiveness at work',
                    _finance: 'not taking charge of your finances, passiveness, no financial goals'
                },
            },
        },

    },

    // SEPARATION SUITS OF CUPS

    _aceC: {
        _name: 'Ace of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'love, new feelings, emotional awakening, creativity, spirituality, intuition',
                _meaning: {
                    _love: 'new romance, friendship, next level in relationship, deeper intimacy',
                    _career: 'friendly relations at work, new emotions about job, jolt of creativity',
                    _finance: 'financial assistance, happy financial news, creativity in earning money'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'coldness, emptiness, emotional loss, blocked creativity, feeling unloved, gloominess',
                _meaning: {
                    _love: 'sadness, separation, vulnerability, insecurity in the way of love',
                    _career: 'feeling unmotivated and bored at job, unfriendly colleagues',
                    _finance: 'disappointing news, frustration and sadness regarding finances'
                },
            },
        },

    },
    
    _2C: {
        _name: 'Two of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'unity, partnership, attraction, connection, close bonds, joining forces, mutual respect',
                _meaning: {
                    _love: 'starting a relationship, mutually beneficial relationship, working together as a team',
                    _career: 'good relationships with colleagues, helpful business partnership',
                    _finance: 'balanced finances, financial security, not financially stressed'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'separation, rejection, division, imbalance, tension, bad communication, withdrawal',
                _meaning: {
                    _love: 'relationship imbalance, codependency, uneven power dynamics',
                    _career: 'bad business partnerships, tension and conflict with colleagues ',
                    _finance: 'spending more than you are earning, going over budget'
                },
            },
        },

    },
    
    _3C: {
        _name: 'Three of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'friendship, community, gatherings, celebrations, group events, social events',
                _meaning: {
                    _love: 'friendship turning to romance, social gatherings leading to romance',
                    _career: 'planning a celebration at work, happy and joyous office environment',
                    _finance: 'spending on social life, financial stability, reaching financial milestone'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'gossip, scandal, excess, isolation, loneliness, solitude, imbalanced social life',
                _meaning: {
                    _love: 'short but exciting romance, third party coming in between you',
                    _career: 'work events not going as planned, destructive office environment',
                    _finance: 'over spending on social gatherings, giving beyond your means'
                },
            },
        },

    },
    
    _4C: {
        _name: 'Four of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'apathy, contemplation, feeling disconnected, melancholy, boredom, indifference, discontent',
                _meaning: {
                    _love: 'bored with love life, lack of excitement in relationship',
                    _career: 'bored with job, feeling unhappy with job or career, lack of progress',
                    _finance: 'feeling disillusioned with money, envious of others'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'clarity, awareness, acceptance, choosing happiness, depression, negativity',
                _meaning: {
                    _love: 'being more active in love, new understanding of love',
                    _career: 'new inspiration or creativity, realizations about career, adjustments',
                    _finance: 'positive approach to finances, willpower to achieve financial goals'
                },
            },
        },

    },
    
    _5C: {
        _name: 'Five of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'loss, grief, disappointment, sadness, mourning, discontent, feeling let down',
                _meaning: {
                    _love: 'grieving break up, time of tension and sadness in relationship',
                    _career: 'taking a step backward in your career, job loss, business loss',
                    _finance: 'financial loss, still things left to salvage'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'acceptance, moving on, finding peace, contentment, seeing positives',
                _meaning: {
                    _love: 'moving on from past relationship, healing from old wounds',
                    _career: 'job loss leading to better position, healing from career misstep',
                    _finance: 'relief from financial loss, rebuilding financial security'
                },
            },
        },

    },
    
    _6C: {
        _name: 'Six of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'nostalgia, memories, familiarity, healing, comfort, sentimentality, pleasure',
                _meaning: {
                    _love: 'reconnecting with ex, reliving happy memories, healing after breakup',
                    _career: 'returning to previous work, not repeating past mistakes, learning career lessons',
                    _finance: 'moving back in with parents, financial gifts, sharing finances'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'stuck in past, moving forward, leaving home, independence',
                _meaning: {
                    _love: 'unable to move on, clinging to past loves, failure to live in present',
                    _career: 'leaving comfort of job, staying in stale job, repeating negative patterns',
                    _finance: 'financially independent, leaving parental home'
                },
            },
        },

    },
    
    _7C: {
        _name: 'Seven of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'choices, searching for purpose, illusion, fantasy, daydreaming, wishful thinking, indecision',
                _meaning: {
                    _love: 'choosing between lovers, be cautious about romantic decisions',
                    _career: 'many career options, make a choice and stick to it',
                    _finance: 'several financial opportunities, caution about financial choices'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'lack of purpose, disarray, confusion, diversion, distractions, clarity, making choices',
                _meaning: {
                    _love: 'chaotic and confusing love life, avoiding romantic decisions, clarity about love',
                    _career: 'lack of career options, missed opportunities, creating clear career vision',
                    _finance: 'financial clarity, distraction from financial goals, lack of financial goals'
                },
            },
        },

    },
    
    _8C: {
        _name: 'Eight of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'abandonment, walking away, letting go, searching for truth, leaving behind',
                _meaning: {
                    _love: 'leaving unhappy relationship, abandonment issues',
                    _career: 'leaving unhappy relationship, abandonment issues',
                    _finance: 'choosing happiness over financial security'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'stagnation, monotony, accepting less, avoidance, fear of change, staying in bad situation',
                _meaning: {
                    _love: 'staying in a bad relationship, fear of being alone',
                    _career: 'accepting unfulfilling job, fear of change',
                    _finance: 'choosing financial security over happiness'
                },
            },
        },

    },
    
    _9C: {
        _name: 'Nine of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'wishes coming true, contentment, satisfaction, success, achievements, recognition, pleasure',
                _meaning: {
                    _love: 'appreciating current love life, positivity leading to romance, cheerful romance',
                    _career: 'satisfying career, recognition and respect at work, avoid being overconfident',
                    _finance: 'abundance, financial comfort, financial security, material rewards'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'unhappiness, lack of fulfilment, disappointment, underachievement, arrogance, snobbery',
                _meaning: {
                    _love: 'lack of deeper connection, superficial relationship, inner work needed',
                    _career: 'dream job not what you expected, career expectations not met',
                    _finance: 'failed financial goals, no returns on investing your resources'
                },
            },
        },

    },
    
    _10C: {
        _name: 'Ten of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'happiness, homecomings, fulfillment, emotional stability, security, domestic harmony',
                _meaning: {
                    _love: 'commitment, taking next step in relationship, long term stability, lasting relationship',
                    _career: 'feeling of belonging at work, camaraderie between colleagues, fulfilling and supportive job',
                    _finance: 'financial stability and security, a feeling of having enough'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'unhappy home, separation, domestic conflict, disharmony, isolation​',
                _meaning: {
                    _love: 'meddling relatives, a short fling, external forces affecting relationship',
                    _career: 'hostile workplace, tensions between colleagues, isolation at workplace',
                    _finance: 'arguments with family over finances, financial instability'
                },
            },
        },

    },
    
    _pC: {
        _name: 'Page of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'idealism, sensitivity, dreamer, naivete, innocence, inner child, head in the clouds',
                _meaning: {
                    _love: 'fresh perspective on relationship, awe and wonder at love and romance',
                    _career: 'finding a creative outlet at work, daydreams about career paths',
                    _finance: 'unrealistic financial goals, daydreams without putting in effort'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'emotional vulnerability, immaturity, neglecting inner child, escapism, insecurity',
                _meaning: {
                    _love: 'a shy, vulnerable partner, emotionally immature partner, insecurity in romance',
                    _career: 'emotional vulnerability at work, insecurity at work, creative blocks',
                    _finance: 'being in denial about finances, avoiding financial decisions'
                },
            },
        },

    },
    
    _knightC: {
        _name: 'Knight of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'idealist, charming, artistic, graceful, tactful, diplomatic, mediator, negotiator',
                _meaning: {
                    _love: 'romance, attraction, flirtation, being in love with love, unrealistic expectations of love',
                    _career: 'diplomacy at work, tactfulness creates better team cohesion, creative solutions',
                    _finance: 'mediating disputes about finances, using creativity to achieve financial goals'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'disappointment, tantrums, moodiness, turmoil, avoiding conflict, vanity',
                _meaning: {
                    _love: 'avoiding conflict in love, passive aggressive partner, quickly changing feelings, false appearances',
                    _career: 'tensions and moodiness at work, avoiding work confrontation',
                    _finance: 'avoiding financial decisions, financial disappointment'
                },
            },
        },

    },
    
    _qC: {
        _name: 'Queen of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'compassion, warmth, kindness, intuition, healer, counsellor, supportive',
                _meaning: {
                    _love: 'caring and supportive nature brings suitors, deepening existing relationships',
                    _career: 'taking the role of carer at work, seeking out support and compassion at work',
                    _finance: 'using resources to care for others, giving, charity, generosity'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'insecurity, giving too much, overly-sensitive, needy, fragile, dependence, martyrdom',
                _meaning: {
                    _love: 'a dependent or clingy lover, putting more effort in than partner, overly-sensitive lover',
                    _career: 'emotional exhaustion at work, neglecting your own emotional health for job',
                    _finance: 'being too generous, neglecting own financial health for others'
                },
            },
        },

    },
    
    _kingC: {
        _name: 'King of Cups',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Cups',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'wise, diplomatic, balance between head and heart, devoted, advisor, counsellor',
                _meaning: {
                    _love: 'using head and heart in love, a compassionate but calming partner',
                    _career: 'balancing emotional, practical and logical needs, wisdom leads to respect and admiration',
                    _finance: 'financial stability, being realistic but hopeful about finances'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'overwhelmed, anxious, cold, repressed, withdrawn, manipulative, selfish',
                _meaning: {
                    _love: 'manipulation, deceit and selfishness in love, being lead on or used, not putting in effort',
                    _career: 'selfishness at work, staying at job despite lack of emotional fulfillment',
                    _finance: 'out of control spending, bad financial judgement, emotional financial choices'
                },
            },
        },

    },

     // SEPARATION SUITS OF Swords

     _aceS: {
        _name: 'Ace of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'clarity, breakthrough, new idea, concentration, vision, force, focus, truth',
                _meaning: {
                    _love: 'attracted to discussion, facing problems honestly, communication',
                    _career: 'stimulating work environment, clear communication, focus',
                    _finance: 'think rationally, avoid emotional decisions with money'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'confusion, miscommunication, hostility, arguments, destruction, brutality',
                _meaning: {
                    _love: 'failure to communicate, clashing perspectives, painful words',
                    _career: 'failure to communicate, unable to express thoughts clearly, boredom',
                    _finance: 'double check finances, statements or legal documents'
                },
            },
        },

    },
    
    _2S: {
        _name: 'Two of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'stalemate, difficult choices, stuck in the middle, denial, hidden information',
                _meaning: {
                    _love: 'choosing between lovers, choosing between love / family / work',
                    _career: 'choosing between career paths, conflicts at work, taking sides',
                    _finance: 'avoiding financial decisions, unclear finances'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'indecision, hesitancy, anxiety, too much information, no right choice, truth revealed',
                _meaning: {
                    _love: "no suitor is right for you, cant prioritize love / family / work",
                    _career: 'choices with no winner, stressful decisions',
                    _finance: 'realizing truth, accepting financial position'
                },
            },
        },

    },
    
    _3S: {
        _name: 'Three of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'heartbreak, separation, sadness, grief, sorrow, upset, loss, trauma, tears',
                _meaning: {
                    _love: 'breakup, argument, conflict, separation, sadness and tears',
                    _career: 'conflicts at work, job loss, hurt feelings at work, feeling hopeless',
                    _finance: 'loss of assets, division of assets after break up'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'healing, forgiveness, recovery, reconciliation, repressing emotions',
                _meaning: {
                    _love: 'forgiving one another, moving on after pain, separation',
                    _career: 'putting conflicts behind, developing better processes',
                    _finance: 'building savings, finding stability, severe grief about finances'
                },
            },
        },

    },
    
    _4S: {
        _name: 'Four of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'rest, relaxation, peace, sanctuary, recuperation, self-protection, rejuvenation',
                _meaning: {
                    _love: 'withdrawing from love life, alone time, taking a break',
                    _career: 'taking a vacation, mental health day, rest, self-care',
                    _finance: 'anxiety about finances, avoid overthinking about money'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'recovery, awakening, re-entering world, release from isolation, restlessness, burnout',
                _meaning: {
                    _love: 'anxiety about finances, avoid overthinking about money',
                    _career: 'refreshed from vacation or time off, burning out',
                    _finance: 'not accepting support, recovery from financial pressure'
                },
            },
        },

    },
    
    _5S: {
        _name: 'Five of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'arguments, disputes, aggression, bullying, intimidation, conflict, hostility, stress',
                _meaning: {
                    _love: 'tension, conflict, arguments, fights, irritability, wanting to be right',
                    _career: 'workplace bully, intimidation, defensive attitudes, hostility',
                    _finance: 'conflicts about money, being taken advantage of'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'reconciliation, resolution, compromise, revenge, regret, remorse, cutting losses',
                _meaning: {
                    _love: 'getting back together, forgiveness, breakup',
                    _career: 'compromises, open dialogue, sabotage',
                    _finance: 'loosening of financial tension, relief'
                },
            },
        },

    },
    
    _6S: {
        _name: 'Six of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'moving on, departure, leaving behind, distance, accepting lessons',
                _meaning: {
                    _love: 'moving on from relationship, reconciling after fight',
                    _career: 'leaving stressful workplace, moving to new role',
                    _finance: 'finding material stability again, learned lessons'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'stuck in past, returning to trouble, running away from problems, trapped',
                _meaning: {
                    _love: 'cant move on, cant let go, haunted',
                    _career: 'creating conflicts, self-sabotage, trapped at job',
                    _finance: 'avoiding dealing with finances'
                },
            },
        },

    },
    
    _7S: {
        _name: 'Seven of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'lies, trickery, scheming, strategy, resourcefulness,sneakiness, cunning',
                _meaning: {
                    _love: 'lies and deception, affair, sparing feelings, feeling suspicious',
                    _career: 'gossip, sabotage, jealousy at work, working strategically',
                    _finance: 'shady business deals, fraud, theft, scams'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'confession, conscience, regret, maliciousness, truth revealed',
                _meaning: {
                    _love: 'lies revealed, end of playing games, dropping pretension',
                    _career: 'liars exposed, consequences of actions, changing approach',
                    _finance: 'consequences of dishonesty in finances'
                },
            },
        },

    },
    
    _8S: {
        _name: 'Eight of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'trapped, restricted, victimised, paralysed, helpless, powerless, imprisonment',
                _meaning: {
                    _love: 'feeling trapped, suffocated, smothered, passive in love life',
                    _career: 'dependence on job, can’t change careers, fear of job changes',
                    _finance: 'anxiety about money, can’t see financial opportunity'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'freedom, release, taking control, survivor, facing fears, empowered, surrender',
                _meaning: {
                    _love: 'clearer perspective of relationship, active role in love life',
                    _career: 'new job to reach potential, freedom from anxiety, continued struggle',
                    _finance: 'lessened anxiety, intensified anxiety, fears clouding truth'
                },
            },
        },

    },
    
    _9S: {
        _name: 'Nine of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'fear, anxiety, negativity, breaking point, despair, nightmares, isolation',
                _meaning: {
                    _love: 'not trusting partner, suspicious of partner, regret from past',
                    _career: 'anxiety, paranoia, stress from work, no coping mechanisms',
                    _finance: 'panic about finances, all-consuming worries, feeling deprived'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'recovery, learning to cope, facing life, finding help, shame, guilt, mental health issues',
                _meaning: {
                    _love: 'getting help from partner, alleviating stress by sharing',
                    _career: 'clarity about work, finding peace, stresses becoming real',
                    _finance: 'clarity about finances, peace, poverty, lack of resources'
                },
            },
        },

    },
    
    _10S: {
        _name: 'Ten of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'ruin, failure, bitterness, collapse, exhaustion, dead end, victimization, betrayal',
                _meaning: {
                    _love: 'breakup, separation, sadness, grief, pain, infidelity',
                    _career: 'loss of job, office politics, breakdown from stress, burnout',
                    _finance: 'financial loss, failed investment'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'survival, improvement, healing, lessons learned, despair, relapse',
                _meaning: {
                    _love: 'healing from past, putting relationship back together',
                    _career: 'changed jobs, found less stressful work',
                    _finance: 'avoided financial ruin or bankruptcy'
                },
            },
        },

    },
    
    _pS: {
        _name: 'Page of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'curious, witty, chatty, communicative, inspired, vigilant, alert, mental agility',
                _meaning: {
                    _love: 'intellectual relationship, lack of emotional intimacy',
                    _career: 'ambitious, intelligent person, new career, education',
                    _finance: 'financial curiosity, ideas for making money'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'scatterbrained, cynical, sarcastic, gossipy, insulting, rude, lack of planning',
                _meaning: {
                    _love: 'argumentative, defensive partner, failure to communicate',
                    _career: 'job-hopping, unsure about future career, office gossip',
                    _finance: 'overanalyzing finances, research but no action'
                },
            },
        },

    },
    
    _knightS: {
        _name: 'Knight of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'assertive, direct, impatient, intellectual, daring, focused, perfectionist, ambitious',
                _meaning: {
                    _love: 'fears about intimacy, easily bored partner, decisive action',
                    _career: 'getting things done, focus on career, efficiency, making big moves',
                    _finance: 'focus on financial goals, taking action on financial goals'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'rude, tactless, forceful, bully, aggressive, vicious, ruthless, arrogant',
                _meaning: {
                    _love: 'aggressive partner, bullying, abuse, intense arguments',
                    _career: 'ruthless or vicious at work, arrogance, intimidation',
                    _finance: 'fraud, scams, coercion, shady financial deals'
                },
            },
        },

    },
    
    _qS: {
        _name: 'Queen of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'honest, independent, principled, fair, constructive criticism, objective, perceptive',
                _meaning: {
                    _love: 'picky about lovers, independent partner, boundaries',
                    _career: 'constructive criticism, wise guidance, respect in field',
                    _finance: 'acting with logic and reason, financial clarity'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'pessimistic, malicious, manipulative, harsh, bitter, spiteful, cruel, deceitful, unforgiving',
                _meaning: {
                    _love: 'trauma, toxic relationship, manipulation, cruelty',
                    _career: 'cruel coworker, excessive negativity, poor communication',
                    _finance: 'financial confusion, failure to make logical financial decisions'
                },
            },
        },

    },
    
    _kingS: {
        _name: 'King of Swords',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Swords',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'reason, authority, discipline, integrity, morality, serious, high standards, strict',
                _meaning: {
                    _love: 'high standards for love, controlled emotions',
                    _career: 'stern but righteous mentor, challenged to do your best',
                    _finance: 'being disciplined with finances, acting logically'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'irrational, dictator, oppressive, inhumane, controlling, cold, ruthless, dishonest',
                _meaning: {
                    _love: 'selfish, abusive lover, low standards for love',
                    _career: 'dominating, power-hungry colleague, irrational work decisions',
                    _finance: 'irrational financial decisions, lack of financial discipline'
                },
            },
        },

    },

     // SEPARATION SUITS OF PENTACLES

     _aceP: {
        _name: 'Ace of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'new opportunities, resources, abundance, prosperity, security, stability, manifestation',
                _meaning: {
                    _love: 'steady loving relationship, abundance and prosperity in love, privileged couple',
                    _career: 'new work or business opportunities',
                    _finance: 'investing in future, new financial journey'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'missed chances, scarcity, deficiency, instability, stinginess, bad investments',
                _meaning: {
                    _love: 'loss of emotional stability, money issues in relationship',
                    _career: 'missed work opportunities, invested in wrong career',
                    _finance: 'scarcity, bad financial decisions'
                },
            },
        },

    },
    
    _2P: {
        _name: 'Two of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'balancing resources, adaptation, resourcefulness, flexibility, stretching resources',
                _meaning: {
                    _love: 'balancing love / work / family, adapting to changes in love',
                    _career: 'juggling work projects, being resourceful at work',
                    _finance: 'tight finances, prioritizing bills, unstable finances'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'imbalance, unorganized, overwhelmed, messiness, chaos, overextending',
                _meaning: {
                    _love: 'neglecting love, neglecting partner, not focused on love',
                    _career: 'being overworked, too many projects, things falling through cracks',
                    _finance: 'too many bills, cant keep up with payments'
                },
            },
        },

    },
    
    _3P: {
        _name: 'Three of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'teamwork, shared goals, collaboration, apprenticeship, effort, pooling energy',
                _meaning: {
                    _love: 'doing projects with partner, feeling like a team, love at work / creative hobbies',
                    _career: 'working as team, collaborates with others, diverse skill sets and opinions',
                    _finance: 'learning about finances, getting advice on creating budget '
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'lack of cohesion, lack of teamwork, apathy, poor motivation, conflict, ego, competition',
                _meaning: {
                    _love: 'conflicts in practical life, not being a good teammate in love',
                    _career: 'stress and frustration amongst colleagues, office politics',
                    _finance: 'stress and frustration amongst colleagues, office politics'
                },
            },
        },

    },
    
    _4P: {
        _name: 'Four of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'possessiveness, insecurity, hoarding, stinginess, stability, security, savings, materialism, wealth, frugality, boundaries, guardedness',
                _meaning: {
                    _love: 'clingy lover, jealousy, feeling insecure, holding onto past',
                    _career: 'impostor syndrome, paranoia, avoiding collaboration',
                    _finance: 'stable finances, frugality, saving for future'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'generosity, giving, spending, openness, financial insecurity, reckless spending',
                _meaning: {
                    _love: 'overcoming jealousy, release from past lovers',
                    _career: 'generosity with colleagues, risky work decisions',
                    _finance: 'spending, donating, sharing resources'
                },
            },
        },

    },
    
    _5P: {
        _name: 'Five of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'hardship, loss, isolation, feeling abandoned, adversity, struggle, unemployment, alienation, disgrace',
                _meaning: {
                    _love: 'isolation, loneliness, feeling distant, depression',
                    _career: 'work hardships, isolation from colleagues, outcast',
                    _finance: 'poverty, debt, bankruptcy, tight finances'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywpositive changes, recovery from loss, overcoming adversity, forgiveness, feeling welcomedords',
                _meaning: {
                    _love: 'improved love life, opening yourself to others',
                    _career: 'friendship at work, end of work hardships',
                    _finance: 'recovery from loss, saving, paying debts'
                },
            },
        },

    },
    
    _6P: {
        _name: 'Six of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'generosity, charity, community, material help, support, sharing, giving and receiving, gratitude',
                _meaning: {
                    _love: 'supportive relationship, generous lover',
                    _career: 'mentor, being a valued employee, investors',
                    _finance: 'financial support, donations'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'power dynamics, abuse of generosity, strings attached gifts, inequality, extortion',
                _meaning: {
                    _love: 'unfair power dynamics, taking advantage of love, controlling lover',
                    _career: 'hidden agendas, quid pro quo, sucking up to bosses',
                    _finance: 'lack of help, unfair loans, gifts with strings attached, resentment'
                },
            },
        },

    },
    
    _7P: {
        _name: 'Seven of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'harvest, rewards, results, growth, progress, perseverance, patience, planning',
                _meaning: {
                    _love: 'putting work into love, friendship turns to romance',
                    _career: 'progressing to goals, evaluating progress',
                    _finance: 'putting in effort to finances, slow and steady investment'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'unfinished work, procrastination, low effort, waste, lack of growth, setbacks, impatience, lack of reward',
                _meaning: {
                    _love: 'no results from love, can’t force love',
                    _career: 'no results in work efforts, stagnant career',
                    _finance: 'losses, little financial compensation'
                },
            },
        },

    },
    
    _8P: {
        _name: 'Eight of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'skill, talent, craftsmanship, quality, high standards, expertise, mastery, commitment, dedication, accomplishment',
                _meaning: {
                    _love: 'achieved relationship goal, cultivating relationship',
                    _career: 'dedication, promotion, developing skills, showing talent',
                    _finance: 'financial rewards, becoming financially independent'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'lack of quality, rushed job, bad reputation, lack of motivation, mediocrity, laziness, low skill, dead-end job',
                _meaning: {
                    _love: 'not putting effort into love, neglecting relationship',
                    _career: 'little motivation, tedious job, low quality work',
                    _finance: 'careless about finances, overspending'
                },
            },
        },

    },
    
    _9P: {
        _name: 'Nine of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'rewarded efforts, success, achievement, independence, leisure, material security, self-sufficiency',
                _meaning: {
                    _love: 'high standards for partners, balance of love and independence',
                    _career: 'achievement in career, hard work paid off, success',
                    _finance: 'financial abundance, property purchases'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'being guarded, living beyond means, material instability, reckless spending, superficiality',
                _meaning: {
                    _love: 'fear of giving up independence, being guarded in love',
                    _career: 'desire to succeed without work, no work-life balance',
                    _finance: 'overspending, impulse purchases, desire for easy money'
                },
            },
        },

    },
    
    _10P: {
        _name: 'Ten of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'legacy, roots, family, ancestry, inheritance, windfall, foundations, privilege, affluence, stability, tradition',
                _meaning: {
                    _love: 'financially stable couple, relationship milestones, family approval',
                    _career: 'creating lasting career, stable future',
                    _finance: 'windfall, inheritance, developing stable financial future'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'family disputes, bankruptcy, debt, fleeting success, conflict over money, instability, breaking traditions',
                _meaning: {
                    _love: 'conflict between love and family, outside opinions of love',
                    _career: 'company dissolution, debt, unstable career',
                    _finance: 'debt, financial loss, family disputes over money'
                },
            },
        },

    },
    
    _pP: {
        _name: 'Page of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'ambitious, diligent, goal oriented, planner, consistent, star student, studious, grounded, loyal, faithful, dependable',
                _meaning: {
                    _love: 'quiet, steady, diligent lover, dedication in relationship',
                    _career: 'making plans to achieve ambitions, big dreams, training',
                    _finance: 'setting good habits with finances'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'foolish, immature, irresponsible, lazy, underachiever, procrastinator, missed chances, poor prospects',
                _meaning: {
                    _love: 'lack of commitment, boredom, monotonous relationship',
                    _career: 'avoiding work, lazy, unmotivated, wants success without work',
                    _finance: 'financial insecurity, financial irresponsible'
                },
            },
        },

    },
    
    _knightP: {
        _name: 'Knight of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'practical, reliable, efficient, stoic, slow and steady, hard-working, committed, patient, conservative',
                _meaning: {
                    _love: 'loyal but stubborn lover, steady, secure relationship',
                    _career: 'focus and drive, slow and steady work, hard work',
                    _finance: 'slow and steady financial growth, conservation, frugality'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'workaholic, laziness, dull, boring, no initiative, cheap, irresponsible, gambler, risky investments',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _qP: {
        _name: 'Queen of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'generous, caring, nurturing, homebody, good business sense, practical, comforting, welcoming, sensible, luxurious',
                _meaning: {
                    _love: 'stability, abundance, nurturing, kind partner, domestic comfort',
                    _career: 'talented business person, mentor, colleague',
                    _finance: 'financial security, responsible with finances, good deals'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'selfish, unkempt, jealous, insecure, greedy, materialistic, gold digger, intolerant, self-absorbed, envious',
                _meaning: {
                    _love: 'shallow and selfish partner, relationship for wrong reasons',
                    _career: 'bad business partner, unreliable or jealous colleague',
                    _finance: 'money mismanagement, hoarding'
                },
            },
        },

    },
    
    _kingP: {
        _name: 'King of Pentacles',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Pentacles',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'abundance, prosperity, security, ambitious, safe, kind, patriarchal, protective, businessman, provider, sensual, reliable',
                _meaning: {
                    _love: 'generous provider, serious relationship, emotionally and financially secure',
                    _career: 'success, encouraging mentor, referrals, good reputation',
                    _finance: 'financial milestone, saving, investing, supporting loved ones, indulging'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'greed, materialistic, wasteful, chauvanist, poor financial decisions, gambler, exploitative, possessive',
                _meaning: {
                    _love: 'materialistic, greedy lover, being used, controlling',
                    _career: 'poor reputation, unsuccessful at work, being discouraged',
                    _finance: 'financial loss, debt, poor financial decisions, stinginess'
                },
            },
        },

    },
    

    
}





// arcana info
const arcana = {
    _set: {
        'Major Arcana': 'this group of cards represent the pivotal events of our lives. Associated with the major themes and lessons of life.',
        'Minor Arcana': 'related with the day-to-day business of life. They represent the people, tasks, decisions, and events that fill our everyday experiences.',
    },

    _suit: {
        'Suit of Wands': 'linked with the element of fire. This suit represents passion, inspiration and willpower.',
        'Suit of Cups': 'linked with the element of water. This suit represents emotions, the unconscious, creativity, and intuition. ',
        'Suit of Swords': 'linked with the element of air. This suit represents intelligence, logic, truth, ambition, conflict and communication.',
        'Suit of Pentacles': 'linked with the element of earth. This suit represents security, stability, nature, health, and prosperity. '
    }
}




exports.tarot = tarot;
exports.arcana = arcana;
