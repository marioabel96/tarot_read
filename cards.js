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
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _2C: {
        _name: 'Two of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _3C: {
        _name: 'Three of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _4C: {
        _name: 'Four of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _5C: {
        _name: 'Five of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _6C: {
        _name: 'Six of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _7C: {
        _name: 'Seven of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _8C: {
        _name: 'Eight of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _9C: {
        _name: 'Nine of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _10C: {
        _name: 'Ten of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _pC: {
        _name: 'Page of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _knightC: {
        _name: 'Knight of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _qC: {
        _name: 'Queen of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
    _kingC: {
        _name: 'King of Wands',
        _arcana: 'Minor Arcana',
        _suit: 'Suit of Wands',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    

    
}






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




/*
// Esta es la que necesitp
function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}


// step 1: shuffle cards 
// Function that shuffle cards using Fisher-Yates algorithm
const fisherYates = (toShuffle = []) => {
    for (let i = (toShuffle.length - 1); i > 0; i -= 1) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [toShuffle[i], toShuffle[randomIndex]] = [toShuffle[randomIndex], toShuffle[i]];
    }
    return toShuffle;
    // source: https://medium.com/javascript-by-doing/learn-fisher-yates-shuffle-in-javascript-275881d36650
  }
  
let cards = fisherYates(Object.keys(tarot)).slice(0,3)
console.log(cards); //Should return cards shuffled


// step 2: let user cut cards -------------------------need entry :(
    // so we skip it for now



// step 3: return postion upright or reversed for each
function randomPosition(cards) {
    let position = [];
    for (i = 0; i < cards.length; i++) {
        let random = Math.floor(Math.random()*2)
        if (random === 1) {
            position.push('_upright')
        } else {
            position.push('_reversed')
        }
    }

    return position
}
const positions = randomPosition(cards); // should return array of postions to match cards
console.log(positions) 



// test 
console.log(tarot[cards[0]]._name) // log first card
console.log(tarot[cards[0]]._arcana) // log Arcana
console.log(tarot[cards[0]]._suit) // log suit no suit for majors
console.log('Position: '+ tarot[cards[0]]._position[positions[0]]._position) //log first position
console.log('This card indicates signs of: ' + tarot[cards[0]]._position[positions[0]]._keywords) //log keywords


/*


//postions total tarot._cards.
//console.log(tarot.cards.magician.position.upright.meaning)

var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

//console.log(Object.keys(tarot._cards))
let randomCard = pickRandomProperty(tarot._cards)

console.log(randomCard)
console.log(tarot._cards[randomCard]._name)

*/

/*
let randomPosition = pickRandomProperty(tarot._cards[randomCard]._position)

console.log(randomPosition)
//console.log(tarot._cards[randomCard][randomPosition])

console.log(tarot._cards[randomCard])
keys= Object.keys(tarot)
console.log(keys)
*/

// console.log(tarot._cards[keys[2]]._name) Access a specific propiety
