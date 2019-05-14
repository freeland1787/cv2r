const { book, enemy, npc, orb, sign } = require('./object');

module.exports = [
    {
        name: 'Jovah',
        objset: 0,
        area: 0,
        submap: 0,
        pattern: {
            bg: 0,
            sprite: 0x01,
            pointer: 0x1CCF9
        },
        actors: [
            npc.shepherd(0x04, 0x0C, 0x38, 0x50BC),
            npc.shepherd(0x04, 0x1A, 0x3D, 0x50C0),
            npc.shepherd(0x08, 0x12, 0x3E, 0x50C4),
            sign(0x0C, 0x1A, 0x3A, 0x50C8),
            enemy.zombie(0x0C, 0x0C, 0x01, 0x50CC),
            npc.shepherd(0x14, 0x1A, 0x41, 0x50D0),
            enemy.zombie(0x14, 0x14, 0x01, 0x50D4),
            npc.man(0x18, 0x14, 0x44, 0x50D8),
            enemy.zombie(0x18, 0x0C, 0x01, 0x50DC),
            enemy.zombie(0x1C, 0x1A, 0x01, 0x50E0),
            npc.shepherd(0x24, 0x0C, 0x4C, 0x50E4),
            npc.man(0x28, 0x14, 0x4D, 0x50E8),
            npc.man(0x2C, 0x1A, 0x4E, 0x50EC),
            enemy.zombie(0x28, 0x14, 0x01, 0x50F0),
            enemy.zombie(0x2C, 0x0C, 0x01, 0x50F4),
            npc.merchant(0x34, 0x12, 0x07, 0x50F8),
            enemy.zombie(0x34, 0x12, 0x01, 0x50FC),
            enemy.zombie(0x38, 0x0C, 0x01, 0x5100)
        ]
    },
    {
        name: 'Veros',
        objset: 0,
        area: 0x01,
        submap: 0,
        actors: [
            npc.man(0x04, 0x0C, 0x40, 0x522A),
            enemy.bat(0x04, 0x08, 0x02, 0x522E),
            npc.man(0x0C, 0x0C, 0x43, 0x5232),
            sign(0x0D, 0x0C, 0x3B, 0x5036),
            npc.man(0x14, 0x0C, 0x48, 0x523A),
            npc.woman(0x1A, 0x0C, 0x4F, 0x523E),
            enemy.zombie(0x18, 0x0C, 0x02, 0x5242),
            npc.shepherd(0x1C, 0x0C, 0x50, 0x5246),
            npc.shepherd(0x24, 0x0C, 0x39, 0x524A),
            enemy.zombie(0x28, 0x0C, 0x02, 0x524E),
            enemy.zombie(0x2C, 0x0C, 0x02, 0x5252),
            enemy.zombie(0x34, 0x08, 0x02, 0x5256),
            enemy.bat(0x34, 0x0C, 0x02, 0x525A)
        ]
    },
    {
        name: 'Aljiba',
        objset: 0,
        area: 0x02,
        submap: 0,
        actors: [
            npc.crystalDude(0x08, 0x0C, 0x03, 0x517C),
            enemy.zombie(0x08, 0x0C, 0x02, 0x5180),
            npc.man(0x0C, 0x0C, 0x57, 0x5184),
            sign(0x0C, 0x1A, 0x51, 0x5188),
            enemy.zombie(0x14, 0x0C, 0x02, 0x518C),
            npc.woman(0x18, 0x0C, 0x58, 0x5190),
            npc.shepherd(0x1C, 0x0C, 0x5B, 0x5194),
            enemy.zombie(0x24, 0x1A, 0x05, 0x5198),
            npc.man(0x28, 0x1A, 0x60, 0x519C),
            enemy.zombie(0x2C, 0x0C, 0x02, 0x51A0),
            npc.shepherd(0x34, 0x0C, 0x69, 0x51A4),
            npc.man(0x34, 0x12, 0x67, 0x51A8),
            enemy.zombie(0x38, 0x0C, 0x02, 0x51AC)
        ]
    },
    {
        name: 'Alba',
        objset: 0,
        area: 0x03,
        submap: 0,
        actors: [
            npc.woman(0x08, 0x0C, 0x5F, 0x5105),
            npc.woman(0x08, 0x1A, 0x61, 0x5109),
            npc.woman(0x0C, 0x20, 0x62, 0x510D),
            sign(0x0C, 0x28, 0x52, 0x5111),
            enemy.zombie(0x0C, 0x0C, 0x04, 0x5115),
            npc.woman(0x14, 0x0C, 0x63, 0x5119),
            enemy.zombie(0x14, 0x0C, 0x04, 0x511D),
            enemy.zombie(0x14, 0x1A, 0x04, 0x5121),
            npc.woman(0x18, 0x1A, 0x66, 0x5125),
            enemy.zombie(0x1C, 0x28, 0x04, 0x5129),
            npc.woman(0x24, 0x0C, 0x5D, 0x512D),
            enemy.zombie(0x28, 0x1A, 0x04, 0x5131),
            npc.crystalDude(0x2C, 0x22, 0x04, 0x5135),
            enemy.zombie(0x2C, 0x0C, 0x04, 0x5139),
            enemy.zombie(0x2C, 0x22, 0x04, 0x513D),
            enemy.zombie(0x2C, 0x28, 0x04, 0x5141),
            enemy.zombie(0x34, 0x0C, 0x04, 0x5145),
            npc.woman(0x38, 0x0C, 0x68, 0x5149)
        ]
    },
    {
        name: 'Ondol',
        objset: 0,
        area: 0x04,
        submap: 0,
        actors: [
            npc.shepherd(0x08, 0x0C, 0x3F, 0x525F),
            sign(0x0C, 0x28, 0x3C, 0x5263),
            enemy.zombie(0x0C, 0x0C, 0x04, 0x5267),
            npc.man(0x14, 0x0C, 0x45, 0x526B),
            npc.man(0x14, 0x1A, 0x46, 0x526F),
            enemy.zombie(0x18, 0x0C, 0x04, 0x5273),
            enemy.zombie(0x18, 0x18, 0x04, 0x5277),
            enemy.zombie(0x1C, 0x28, 0x04, 0x527B),
            enemy.zombie(0x24, 0x0C, 0x04, 0x527F),
            enemy.zombie(0x24, 0x14, 0x04, 0x5283),
            npc.shepherd(0x28, 0x14, 0x47, 0x5287),
            npc.shepherd(0x28, 0x24, 0x4A, 0x528B),
            enemy.zombie(0x2C, 0x1A, 0x04, 0x528F),
            npc.shepherd(0x34, 0x0C, 0x4B, 0x5293),
            enemy.zombie(0x34, 0x12, 0x04, 0x5297),
            enemy.zombie(0x38, 0x0C, 0x04, 0x529B),
            enemy.zombie(0x38, 0x1A, 0x04, 0x529F)
        ]
    },
    {
        name: 'Doina',
        objset: 0,
        area: 0x05,
        submap: 0,
        actors: [
            npc.shepherd(0x04, 0x0C, 0x5E, 0x51B1),
            sign(0x0C, 0x0C, 0x53, 0x51B5),
            enemy.zombie(0x14, 0x0C, 0x08, 0x51B9),
            npc.shepherd(0x1C, 0x06, 0x65, 0x51BD),
            enemy.zombie(0x1C, 0x0C, 0x08, 0x51C1),
            enemy.zombie(0x24, 0x0C, 0x08, 0x51C5),
            npc.shepherd(0x28, 0x0C, 0x6A, 0x51C9),
            enemy.zombie(0x2C, 0x0C, 0x08, 0x51CD),
            enemy.zombie(0x34, 0x0C, 0x08, 0x51D1)
        ]
    },
    {
        name: 'Yomi',
        objset: 0,
        area: 0x06,
        submap: 0,
        actors: [
            sign(0x0C, 0x0C, 0x54, 0x51D6),
            enemy.bat(0x14, 0x0C, 0x08, 0x51DA),
            enemy.bat(0x18, 0x06, 0x08, 0x51DE),
            enemy.bat(0x24, 0x0C, 0x08, 0x51E2),
            enemy.bat(0x2C, 0x0C, 0x08, 0x51E6),
            enemy.bat(0x38, 0x0C, 0x08, 0x51EA)
        ]
    },
    {
        name: 'Church',
        objset: 0,
        area: 0x07,
        submap: 0,
        actors: [
            npc.priest(0x08, 0x08, 0x31, 0x4EED)
        ]
    },
    {
        name: 'Jovah - Thorn Whip Room',
        objset: 0,
        area: 0x08,
        submap: 0,
        actors: [
            npc.merchant(0x0C, 0x0C, 0x08, 0x514E)
        ]
    },
    {
        name: 'Jovah - Holy Water Room',
        objset: 0,
        area: 0x09,
        submap: 0,
        actors: [
            npc.merchant(0x0C, 0x0C, 0x03, 0x5153)
        ]
    },
    {
        name: 'Veros - Empty Room Before Dagger',
        objset: 0,
        area: 0x0A,
        submap: 0
    },
    {
        name: 'Veros - Dagger Room',
        objset: 0,
        area: 0x0A,
        submap: 0x01,
        actors: [
            npc.merchant(0x0C, 0x0C, 0x04, 0x52A5)
        ]
    },
    {
        name: 'Veros - Chain Whip Room',
        objset: 0,
        area: 0x0B,
        submap: 0,
        actors: [
            npc.merchant(0x0A, 0x1A, 0x09, 0x52AA),
            book(0x0D, 0x17, 0x42, 0x52AE)
        ]
    },
    {
        name: 'Aljiba - Garlic Room',
        objset: 0,
        area: 0x0C,
        submap: 0,
        actors: [
            npc.merchant(0x0C, 0x1A, 0x02, 0x51EF)
        ]
    },
    {
        name: 'Aljiba - Book Room Before Old Lady',
        objset: 0,
        area: 0x0D,
        submap: 0,
        actors: [
            book(0x03, 0x15, 0x5C, 0x51F4)
        ]
    },
    {
        name: 'Aljiba - Old Lady Room',
        objset: 0,
        area: 0x0D,
        submap: 0x01,
        actors: [
            npc.oldLady(0x0C, 0x1A, 0x59, 0x51F9)
        ]
    },
    {
        name: 'Aljiba - Empty Room Before Laurels',
        objset: 0,
        area: 0x0E,
        submap: 0
    },
    {
        name: 'Aljiba - Laurels Room',
        objset: 0,
        area: 0x0E,
        submap: 0x01,
        actors: [
            npc.merchant(0x0C, 0x1A, 0x00, 0x51FF)
        ]
    },
    {
        name: 'Alba - Empty Room Before Garlic',
        objset: 0,
        area: 0x0F,
        submap: 0
    },
    {
        name: 'Alba - Garlic Room',
        objset: 0,
        area: 0x0F,
        submap: 0x01,
        actors: [
            npc.merchant(0x0C, 0x1A, 0x02, 0x5159)
        ]
    },
    {
        name: 'Alba - Empty Room Before Laurels',
        objset: 0,
        area: 0x10,
        submap: 0
    },
    {
        name: 'Alba - Laurels Room',
        objset: 0,
        area: 0x10,
        submap: 0x01,
        actors: [
            npc.merchant(0x0C, 0x0C, 0x00, 0x515F)
        ]
    },
    {
        name: 'Ondol - Empty Room Before Morning Star',
        objset: 0,
        area: 0x11,
        submap: 0
    },
    {
        name: 'Ondol - Morning Star Room',
        objset: 0,
        area: 0x11,
        submap: 0x01,
        actors: [
            npc.merchant(0x0C, 0x1A, 0x0A, 0x52B4)
        ]
    },
    {
        name: 'Ondol - Death Star Lady Room',
        objset: 0,
        area: 0x12,
        submap: 0,
        actors: [
            npc.oldLady(0x0C, 0x0C, 0x49, 0x52B9)
        ]
    },
    {
        name: 'Ondol - Empty Room',
        objset: 0,
        area: 0x13,
        submap: 0
    },
    {
        name: 'Doina - Get Back Lady Room',
        objset: 0,
        area: 0x14,
        submap: 0,
        actors: [
            npc.oldLady(0x0C, 0x0C, 0x64, 0x5204)
        ]
    },
    {
        name: 'Doina - Laurels Room',
        objset: 0,
        area: 0x15,
        submap: 0,
        actors: [
            npc.merchant(0x0C, 0x1A, 0x00, 0x5209)
        ]
    },
    {
        name: 'Yomi - Empty Room',
        objset: 0,
        area: 0x16,
        submap: 0
    },
    {
        name: 'Yomi - Old Lady Room',
        objset: 0,
        area: 0x17,
        submap: 0,
        actors: [
            npc.oldLady(0x0C, 0x0C, 0x5A, 0x520F)
        ]
    },
    {
        name: 'Laruba Mansion - Door',
        objset: 0x01,
        area: 0,
        submap: 0
    },
    {
        name: 'Berkeley Mansion - Door',
        objset: 0x01,
        area: 0x01,
        submap: 0
    },
    {
        name: 'Rover Mansion - Door',
        objset: 0x01,
        area: 0x02,
        submap: 0
    },
    {
        name: 'Brahm Mansion - Door',
        objset: 0x01,
        area: 0x03,
        submap: 0
    },
    {
        name: 'Bodley Mansion - Door',
        objset: 0x01,
        area: 0x04,
        submap: 0
    },
    {
        name: 'Laruba Mansion - Part 1',
        objset: 0x01,
        area: 0x06,
        submap: 0,
        actors: [
            enemy.skeleton(0x04, 0x04, 0x1E, 0x5A18),
            enemy.skeleton(0x04, 0x0E, 0x1E, 0x5A1C),
            enemy.skeleton(0x08, 0x1A, 0x1E, 0x5A20),
            enemy.skeleton(0x0C, 0x0C, 0x1E, 0x5A24),
            enemy.skeleton(0x0C, 0x1A, 0x1E, 0x5A28),
            enemy.skeleton(0x14, 0x04, 0x1E, 0x5A2C),
            enemy.skeleton(0x14, 0x0C, 0x1E, 0x5A30),
            enemy.spearKnight(0x18, 0x12, 0x1E, 0x5A34),
            enemy.spearKnight(0x18, 0x1A, 0x1E, 0x5A38),
            enemy.skeleton(0x1C, 0x0C, 0x1E, 0x5A3C),
            enemy.boneThrower(0x1C, 0x1A, 0x1E, 0x5A40),
            enemy.skeleton(0x24, 0x08, 0x1E, 0x5A44),
            enemy.spearKnight(0x24, 0x12, 0x1E, 0x5A48),
            enemy.skeleton(0x28, 0x18, 0x1E, 0x5A4C),
            enemy.skeleton(0x2C, 0x08, 0x1E, 0x5A50),
            enemy.boneThrower(0x34, 0x04, 0x1E, 0x5A54),
            enemy.skeleton(0x34, 0x14, 0x1E, 0x5A58),
            enemy.boneThrower(0x38, 0x0E, 0x1E, 0x5A5C),
            enemy.spearKnight(0x3C, 0x14, 0x1E, 0x5A60)
        ]
    },
    {
        name: 'Laruba Mansion - Part 2',
        objset: 0x01,
        area: 0x06,
        submap: 0x01,
        actors: [
            enemy.crystalDude(0x02, 0x34, 0x01, 0x5A65),
            enemy.skeleton(0x03, 0x12, 0x1E, 0x5A69),
            enemy.skeleton(0x03, 0x1A, 0x1E, 0x5A6D),
            enemy.skeleton(0x03, 0x22, 0x1E, 0x5A71),
            enemy.skeleton(0x08, 0x0E, 0x1E, 0x5A75),
            enemy.boneThrower(0x08, 0x1E, 0x1E, 0x5A79),
            enemy.skeleton(0x08, 0x28, 0x1E, 0x5A7D),
            // block
            // arrow
            // arrow
            // arrow
            enemy.skeleton(0x14, 0x0C, 0x1E, 0x5A91),
            enemy.spider(0x14, 0x2B, 0x1E, 0x5A95),
            // block
            enemy.spider(0x1C, 0x2B, 0x1E, 0x5A9D),
            npc.merchant(0x1D, 0x0C, 0x06, 0x5AA1),
            enemy.skeleton(0x24, 0x12, 0x1E, 0x5AA5),
            enemy.boneThrower(0x24, 0x26, 0x1E, 0x5AA9),
            enemy.boneThrower(0x28, 0x0C, 0x1E, 0x5AAD),
            enemy.boneThrower(0x28, 0x16, 0x1E, 0x5AB1),
            enemy.spearKnight(0x28, 0x20, 0x1E, 0x5AB5),
            enemy.spearKnight(0x2A, 0x30, 0x1E, 0x5AB9),
            enemy.skeleton(0x2C, 0x12, 0x1E, 0x5ABD),
            enemy.skeleton(0x2C, 0x20, 0x1E, 0x5AC1)
        ]
    },
    {
        name: 'Laruba Mansion - Camilla Fight',
        objset: 0x01,
        area: 0x06,
        submap: 0x02,
        actors: [
            enemy.camilla(0x08, 0x0A, 0xF0, 0x5AC6)
        ]
    },
    {
        name: 'Laruba Mansion - Orb Room',
        objset: 0x01,
        area: 0x06,
        submap: 0x03,
        actors: [
            orb(0x0D, 0x07, 0x1C, 0x5ACB)
        ]
    },
    {
        name: 'Berkeley Mansion - Part 1',
        objset: 0x01,
        area: 0x07,
        submap: 0,
        actors: [
            enemy.spearKnight(0x04, 0x0E, 0x02, 0x5AD4),
            // block
            enemy.skeleton(0x08, 0x10, 0x02, 0x5ADC),
            enemy.skeleton(0x08, 0x14, 0x02, 0x5AE0),
            enemy.skeleton(0x0C, 0x08, 0x02, 0x5AE4),
            enemy.spearKnight(0x0C, 0x1E, 0x02, 0x5AE8),
            enemy.blob(0x14, 0x0E, 0x01, 0x5AEC),
            enemy.gargoyle(0x14, 0x18, 0x02, 0x5AF0),
            enemy.skeleton(0x18, 0x08, 0x02, 0x5AF4),
            enemy.skeleton(0x18, 0x1E, 0x02, 0x5AF8),
            enemy.skeleton(0x18, 0x26, 0x02, 0x5AFC),
            enemy.blob(0x1C, 0x0E, 0x01, 0x5B00),
            enemy.blob(0x1C, 0x18, 0x01, 0x5B04),
            enemy.blob(0x24, 0x0E, 0x01, 0x5B08),
            enemy.blob(0x24, 0x18, 0x01, 0x5B0C),
            enemy.skeleton(0x28, 0x08, 0x02, 0x5B10),
            enemy.blob(0x28, 0x18, 0x01, 0x5B14),
            enemy.skeleton(0x28, 0x1E, 0x02, 0x5B18),
            enemy.blob(0x2C, 0x0E, 0x01, 0x5B1C),
            enemy.gargoyle(0x2C, 0x26, 0x02, 0x5B20),
            enemy.skeleton(0x34, 0x0C, 0x02, 0x5B24),
            enemy.skeleton(0x34, 0x26, 0x02, 0x5B28),
            enemy.skeleton(0x38, 0x06, 0x02, 0x5B2C),
            enemy.skeleton(0x3C, 0x0C, 0x02, 0x5B30),
            enemy.skeleton(0x3C, 0x22, 0x02, 0x5B34),
            book(0x3E, 0x0C, 0x1E, 0x5B38)
        ]
    },
    {
        name: 'Berkeley Mansion - Part 2',
        objset: 0x01,
        area: 0x07,
        submap: 0x01,
        actors: [
            book(0x01, 0x0C, 0x1F, 0x5B3D),
            enemy.gargoyle(0x04, 0x26, 0x02, 0x5B41),
            npc.merchant(0x07, 0x0C, 0x06, 0x5B45),
            enemy.spearKnight(0x08, 0x22, 0x02, 0x5B49),
            enemy.boneThrower(0x0C, 0x06, 0x02, 0x5B4D),
            enemy.gargoyle(0x0C, 0x26, 0x02, 0x5B51),
            enemy.skeleton(0x14, 0x1C, 0x02, 0x5B55),
            enemy.spearKnight(0x14, 0x22, 0x02, 0x5B59),
            enemy.spearKnight(0x14, 0x26, 0x02, 0x5B5D),
            enemy.boneThrower(0x18, 0x06, 0x02, 0x5B61),
            enemy.skeleton(0x18, 0x16, 0x02, 0x5B65),
            enemy.skeleton(0x1C, 0x0C, 0x02, 0x5B69),
            enemy.skeleton(0x1C, 0x12, 0x02, 0x5B6D),
            enemy.spearKnight(0x1C, 0x26, 0x02, 0x5B71),
            enemy.skeleton(0x28, 0x12, 0x02, 0x5B75),
            enemy.skeleton(0x28, 0x1E, 0x02, 0x5B79),
            enemy.skeleton(0x28, 0x24, 0x02, 0x5B7D),
            enemy.blob(0x2C, 0x16, 0x01, 0x5B81),
            enemy.skeleton(0x2C, 0x1A, 0x02, 0x5B85),
            enemy.skeleton(0x2C, 0x26, 0x02, 0x5B89),
            book(0x2E, 0x16, 0x20, 0x5B8D),
            enemy.blob(0x34, 0x26, 0x01, 0x5B91),
            enemy.blob(0x38, 0x26, 0x01, 0x5B95),
            orb(0x3D, 0x15, 0x18, 0x5B99)
        ]
    },
    {
        name: 'Rover Mansion - Part 1',
        objset: 0x01,
        area: 0x08,
        submap: 0,
        actors: [
            enemy.spearKnight(0x04, 0x0A, 0x04, 0x5BA2),
            enemy.skeleton(0x08, 0x10, 0x04, 0x5BA6),
            enemy.skeleton(0x08, 0x18, 0x04, 0x5BAA),
            enemy.spearKnight(0x08, 0x28, 0x04, 0x5BAE),
            enemy.skeleton(0x0C, 0x0A, 0x04, 0x5BB2),
            enemy.skeleton(0x0C, 0x20, 0x04, 0x5BB6),
            enemy.boneThrower(0x0C, 0x28, 0x04, 0x5BBA),
            enemy.gargoyle(0x14, 0x0A, 0x04, 0x5BBE),
            enemy.mansionBat(0x14, 0x0C, 0x04, 0x5BC2),
            enemy.mansionBat(0x14, 0x16, 0x04, 0x5BC6),
            enemy.boneThrower(0x14, 0x28, 0x04, 0x5BCA),
            enemy.spearKnight(0x18, 0x10, 0x04, 0x5BCE),
            enemy.mansionBat(0x18, 0x16, 0x04, 0x5BD2),
            enemy.skeleton(0x18, 0x28, 0x04, 0x5BD6),
            enemy.gargoyle(0x1C, 0x0A, 0x04, 0x5BDA),
            enemy.mansionBat(0x1C, 0x0C, 0x04, 0x5BDE),
            enemy.mansionBat(0x1C, 0x16, 0x04, 0x5BE2),
            enemy.skeleton(0x1C, 0x20, 0x04, 0x5BE6),
            enemy.skeleton(0x23, 0x1E, 0x04, 0x5BEA),
            enemy.skeleton(0x24, 0x0A, 0x04, 0x5BEE),
            enemy.skeleton(0x24, 0x10, 0x04, 0x5BF2),
            enemy.skeleton(0x27, 0x1C, 0x04, 0x5BF6),
            enemy.skeleton(0x28, 0x0A, 0x04, 0x5BFA),
            enemy.skeleton(0x2C, 0x16, 0x04, 0x5BFE),
            enemy.skeleton(0x2C, 0x22, 0x04, 0x5C02)
        ]
    },
    {
        name: 'Rover Mansion - Part 2',
        objset: 0x01,
        area: 0x08,
        submap: 0x01,
        actors: [
            enemy.boneThrower(0x03, 0x28, 0x04, 0x5C07),
            enemy.boneThrower(0x07, 0x28, 0x04, 0x5C0B),
            enemy.skeleton(0x14, 0x14, 0x04, 0x5C0F),
            enemy.skeleton(0x14, 0x1C, 0x04, 0x5C13),
            enemy.skeleton(0x18, 0x16, 0x04, 0x5C17),
            enemy.skeleton(0x18, 0x22, 0x04, 0x5C1B),
            enemy.skeleton(0x24, 0x08, 0x04, 0x5C1F),
            enemy.skeleton(0x24, 0x12, 0x04, 0x5C23),
            enemy.spearKnight(0x24, 0x1A, 0x04, 0x5C27),
            // block
            enemy.skeleton(0x28, 0x0E, 0x04, 0x5C2F),
            enemy.spearKnight(0x28, 0x1A, 0x04, 0x5C33),
            enemy.skeleton(0x2C, 0x08, 0x04, 0x5C37),
            enemy.spearKnight(0x34, 0x08, 0x04, 0x5C3B),
            enemy.boneThrower(0x34, 0x28, 0x04, 0x5C3F),
            enemy.skeleton(0x38, 0x22, 0x04, 0x5C43),
            npc.merchant(0x38, 0x28, 0x06, 0x5C47),
            orb(0x3D, 0x15, 0x19, 0x5C4B),
            book(0x3E, 0x08, 0x21, 0x5C4F),
            book(0x3E, 0x22, 0x22, 0x5C53)
        ]
    },
];