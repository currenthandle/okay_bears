const sampleBear = {
  mintAddress: 'zoKpfnxtHPehdTTFGxE6HnyF1mPaLPw1owTSy3fHJsa',
  supply: 1,
  title: 'Okay Bear #1917',
  content:
    'Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.',
  primarySaleHappened: true,
  updateAuthority: '4zj22pu8yRyenFHwLmue28CqVmGFgVQt5FmVvwdP5fLa',
  onChainCollection: {
    key: '3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3',
    verified: 1,
    data: {
      name: 'Okay Bears',
      image: 'https://arweave.net/7QhZL8C-lAWmCFbQ9saAh3ythEhBFhv0YCzKpwFRR6c',
      description:
        'Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.',
    },
  },
  sellerFeeBasisPoints: 500,
  creators: [
    {
      address: '3xVDoLaecZwXXtN59o6T3Gfxwjcgf8Hc9RfoqBn995P9',
      verified: 1,
      share: 0,
    },
    {
      address: '7zL7HVn85F5yFT6XM3BsJcQF7PBcNE7R2BT5GyfunpKe',
      verified: 0,
      share: 100,
    },
  ],
  price: 124,
  escrowPubkey: '7RXry78X7hLtn16H4EENapRhMLNKSvEHjRx6rZJjBQNx',
  owner: '7Ciqa4aSaMnkWXv22RQJen8wnXEeHXhhtbUZeaT2ezVy',
  v2: {
    auctionHouseKey: 'E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe',
    sellerReferral: 'autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2',
    expiry: -1,
  },
  id: '2FStpdNKX7CHCCHYJ3T6gZAsPMrRVZVb3ZvpM4T1hsQd',
  tokenDelegateValid: false,
  isFrozen: true,
  tokenStandard: 5,
  img: 'https://arweave.net/rO6eLwXD5dTQNWngf5Jx7rPIuuUdHw_KXbrWP5rL1z0',
  attributes: [
    {
      trait_type: 'Background',
      value: 'Warm Grey',
    },
    {
      trait_type: 'Fur',
      value: 'Panda',
    },
    {
      trait_type: 'Mouth',
      value: 'Huh',
    },
    {
      trait_type: 'Eyes',
      value: 'Spirited',
    },
    {
      trait_type: 'Hat',
      value: 'Army Hat',
    },
    {
      trait_type: 'Clothes',
      value: 'Tweed Suit',
    },
    {
      trait_type: 'Eyewear',
      value: 'Round Glasses',
    },
  ],
  externalURL: 'https://www.okaybears.com/',
  collectionName: 'okay_bears',
  collectionTitle: 'Okay Bears',
  isTradeable: true,
  rarity: {
    howrare: {
      rank: 892,
    },
    moonrank: {
      rank: 185,
      absolute_rarity: 185,
      crawl: {},
    },
  },
  listingType: 'M2',
  listingUpdatedAt: {
    updatedAt: '2022-08-26T20:24:51.688Z',
    slot: 201041043,
  },
  createdAt: '2023-06-22T11:36:48.411Z',
  updatedAt: '2023-06-22T11:36:48.411Z',
}

export type OkBear = typeof sampleBear
export type BearItem = Pick<OkBear, 'img' | 'title' | 'price' | 'id'>
