import {
  AchievementsTerms,
  Auction,
  AddSFL,
  AvailableSeeds,
  Base,
  BasicTreasure,
  Beehive,
  BirdiePlaza,
  BoostDescriptions,
  BoostEffectDescriptions,
  BountyDescription,
  BuildingDescriptions,
  BumpkinDelivery,
  BumpkinItemBuff,
  BumpkinPart,
  BumpkinPartRequirements,
  BumpkinSkillsDescription,
  BumpkinTrade,
  BuyFarmHand,
  ClaimAchievement,
  Chat,
  ChickenWinner,
  ChoresStart,
  ChumDetails,
  Community,
  CompostDescription,
  ComposterDescription,
  ConfirmSkill,
  ConfirmationTerms,
  Conversations,
  CropBoomMessages,
  CropMachine,
  CropFruitDescriptions,
  DeliveryItem,
  DefaultDialogue,
  DecorationDescriptions,
  Delivery,
  DeliveryHelp,
  DepositWallet,
  Detail,
  DiscordBonus,
  Donation,
  DraftBid,
  ErrorAndAccess,
  ErrorTerms,
  ExoticShopItems,
  FestiveTree,
  Factions,
  FishDescriptions,
  FishermanModal,
  FishermanQuest,
  FishingChallengeIntro,
  FishingGuide,
  FishingQuests,
  FlowerBed,
  Flowerbreed,
  FlowerShopTerms,
  FoodDescriptions,
  GameDescriptions,
  GameTerms,
  GarbageCollector,
  GeneralTerms,
  GenieLamp,
  GetContent,
  GetInputErrorMessage,
  GOBLIN_MESSAGES,
  GoldTooth,
  GuideCompost,
  GuideTerms,
  HalveningCountdown,
  Harvestflower,
  HarvestBeeHive,
  HayseedHankPlaza,
  HayseedHankV2,
  Helper,
  HeliosSunflower,
  HenHouseTerms,
  HowToFarm,
  HowToSync,
  HowToUpgrade,
  Islandupgrade,
  InteractableModals,
  IntroPage,
  IslandName,
  IslandNotFound,
  LandscapeTerms,
  LetsGo,
  LevelUpMessages,
  Loser,
  LostSunflorian,
  MegaStore,
  ModalDescription,
  Noaccount,
  NoBumpkin,
  NoTownCenter,
  NotOnDiscordServer,
  NFTMinting,
  NPC_MESSAGE,
  Npc,
  NpcDialogues,
  NyeButton,
  ObsessionDialogue,
  Offer,
  Onboarding,
  OnCollectReward,
  OrderHelp,
  Pending,
  PersonHood,
  PirateChest,
  PirateQuest,
  Pickserver,
  PlayerTrade,
  Portal,
  PurchaseableBaitTranslation,
  Quest,
  Questions,
  Reaction,
  ReactionBud,
  Refunded,
  RemoveKuebiko,
  Resale,
  ResourceTerms,
  Restock,
  RetreatTerms,
  Resources,
  RewardTerms,
  RulesGameStart,
  RulesTerms,
  SceneDialogueKey,
  SeasonTerms,
  Share,
  SharkBumpkinDialogues,
  Shelly,
  ShellyDialogue,
  ShopItems,
  ShowingFarm,
  SnorklerDialogues,
  SomethingWentWrong,
  SpecialEvent,
  Statements,
  StopGoblin,
  Swarming,
  TieBreaker,
  ToolDescriptions,
  TransactionTerms,
  TranslationKeys,
  Transfer,
  TreasureModal,
  TutorialPage,
  VisitislandEnter,
  VisitislandNotFound,
  Wallet,
  WarningTerms,
  WelcomeTerms,
  WishingWell,
  Withdraw,
  Winner,
  WornDescription,
  World,
  MilestoneMessages,
  Event,
  Promo,
  Trader,
  NyonStatue,
  Trading,
  TimeUnits,
  PwaInstall,
  GoblinTrade,
  RestrictionReason,
  RemoveHungryCaterpillar,
  Leaderboard,
  GameOptions,
  GreenhouseKeys,
  Minigame,
  RemoveCropMachine,
  Username,
  EasterEggKeys,
  ChangeLanguage,
  FactionShopDescription,
} from "./types";

const generalTerms: Record<GeneralTerms, string> = {
  "2x.sale": "2x Coins",
  achievements: "Achievements",
  "amount.matic": "Amount in MATIC",
  deposit: "Deposit",
  add: "Add",
  addSFL: "Add SFL",
  "add.liquidity": "Add Liquidity",
  "alr.claim": "Already Claimed!",
  "alr.completed": "Already Completed",
  "alr.crafted": "Already Crafted!",
  "alr.minted": "Already minted!",
  "are.you.sure": "Are you sure?",
  auction: "Auction",
  available: "Available",
  back: "Back",
  bait: "Bait",
  balance: "Balance",
  "balance.short": "Bal",
  banner: "Banner",
  banners: "Banners",
  basket: "Basket",
  beta: "Beta",
  bid: "Bid",
  bounty: "Bounty",
  build: "Build",
  buy: "Buy",
  cancel: "Cancel",
  "card.cash": "Card / Cash",
  check: "Check",
  chest: "Chest",
  chores: "Chores",
  "choose.wisely": "Choose wisely!",
  claim: "Claim",
  "claim.gift": "Claim Gift",
  "claim.skill": "Claim Skill",
  clear: "Clear",
  close: "Close",
  coins: "Coins",
  collect: "Collect",
  "coming.soon": "Coming soon",
  completed: "Completed",
  complete: "Complete",
  confirm: "Confirm",
  congrats: "Congratulations",
  connecting: "Connecting",
  continue: "Continue",
  cook: "Cook",
  copied: "Copied",
  "copy.address": "Copy Address",
  "copy.link": "Copy Link",
  "copy.failed": "Copy Failed!",
  coupons: "Coupons",
  craft: "Craft",
  crops: "Crops",
  danger: "Danger",
  date: "Date",
  deliver: "Deliver",
  deliveries: "Deliveries",
  "deliveries.closed": "Ticket deliveries closed",
  delivery: "Delivery",
  details: "Details:",
  donate: "Donate",
  donating: "Donating",
  donations: "Donations",
  earn: "Earn",
  "easter.eggs": "Easter Eggs",
  egg: "Egg",
  empty: "Empty",
  "enjoying.event": "Enjoying this event?",
  equip: "Equip",
  error: "Error",
  exchange: "Exchange",
  exotics: "Exotics",
  "expand.land": "Expand your Land",
  expand: "Expand",
  expired: "Expired",
  explore: "Explore",
  faction: "Faction",
  farm: "Farm",
  featured: "Featured",
  fee: "fee",
  "feed.bumpkin": "Feed Bumpkin",
  fertilisers: "Fertilisers",
  fish: "Fish",
  "fish.caught": "Fish Caught: ",
  flowers: "Flowers",
  "flowers.found": "Flowers Found",
  foods: "Foods",
  for: "for",
  forbidden: "Forbidden",
  free: "Free",
  fruit: "Fruit",
  fruits: "Fruits",
  gift: "Gift",
  "go.home": "Go Home",
  gotIt: "Got it",
  "grant.wish": "Grant New Wish",
  greenhouse: "Greenhouse",
  growing: "Growing",
  guide: "Guide",
  honey: "Honey",
  "hungry?": "Hungry?",
  info: "Info",
  item: "Item:",
  land: "Land",
  "last.updated": "Last updated:",
  "lets.go": "Let's Go!",
  limit: "Limit",
  "linked.wallet": "Linked wallet",
  list: "List",
  "list.trade": "List trade",
  loading: "Loading",
  locked: "Locked",
  "loser.refund": "Refund resources",
  lvl: "Level",
  maintenance: "Maintenance",
  "make.wish": "Make a Wish",
  "making.wish": "Making a wish",
  max: "Max",
  "max.reached": "Max reached",
  minimum: "Minimum",
  mint: "Mint",
  minting: "Minting",
  music: "Music",
  next: "Next",
  "next.order": "Next order:",
  nextSkillPtLvl: "Next skill point: level",
  no: "No",
  "no.delivery.avl": "No deliveries available",
  "no.limits.exceeded": "No limits exceeded",
  "no.mail": "Your mailbox is empty.",
  "no.obsessions": "No Obsessions",
  "no.thanks": "No thanks",
  "ocean.fishing": "Ocean fishing",
  off: "Off",
  "offer.end": "Offer ends in",
  ok: "OK",
  on: "On",
  open: "Open",
  optional: "Optional",
  "open.gift": "Open Gift",
  place: "Place",
  "place.map": "Place on map",
  "place.bid": "Place your bid",
  "placing.bid": "Placing bid",
  plant: "Plant",
  player: "Player",
  "play.again": "Play again",
  "please.try.again": "Please try again later.",
  "pay.attention.feedback": "Pay attention to the feedback icons:",
  print: "Print",
  purchased: "purchased",
  purchasing: "Purchasing",
  rank: "Rank",
  "read.more": "Read more",
  refresh: "Refresh",
  refreshing: "Refreshing",
  remaining: "remaining",
  "remaining.free.listings": "{{listingsRemaining}} free listings remaining",
  "remaining.free.listing": "1 free listing remaining",
  "remaining.free.purchases": "{{purchasesRemaining}} free purchases remaining",
  "remaining.free.purchase": "1 free purchase remaining",
  remove: "Remove",
  reqSkillPts: "Required Skill Points:",
  reqSkills: "Required Skills:",
  required: "Required",
  requires: "Requires",
  requirements: "Requirements",
  resources: "Resources",
  restock: "Restock",
  retry: "Retry",
  reward: "Reward",
  "reward.discovered": "Reward Discovered",
  save: "Save",
  saving: "Saving",
  searching: "Searching",
  seeds: "Seeds",
  selected: "Selected",
  "select.resource": "Select your resource: ",
  sell: "Sell",
  "sell.all": "Sell All",
  "sell.one": "Sell 1",
  "sell.ten": "Sell 10",
  "session.expired": "Session expired!",
  share: "Share",
  skillPts: "Skill Points:",
  skills: "Skills",
  skipping: "Skipping",
  "skip.order": "Skip Order",
  "sound.effects": "Sound Effects:",
  start: "Start",
  submit: "Submit",
  submitting: "Submitting",
  success: "Success!",
  swapping: "Swapping",
  syncing: "Syncing",
  task: "Task",
  test: "Test",
  "thank.you": "Thank you!",
  "time.remaining": "Time remaining: {{time}}",
  tools: "Tools",
  total: "Total",
  trades: "Trades",
  trading: "Trading",
  transfer: "Transfer",
  "try.again": "Try again",
  uhOh: "Uh oh!",
  "unlock.land": "Unlock more land",
  unlocking: "Unlocking",
  unmute: "Unmute",
  "use.craft": "Used to craft items",
  verify: "Verify",
  version: "Version",
  viewAll: "View all",
  visit: "Visit",
  warning: "Warning",
  welcome: "Welcome!",
  "wishing.well": "Wishing Well",
  withdraw: "Withdraw",
  wish: "wish",
  yes: "Yes",
  "yes.please": "Yes Please",
  opensea: "Opensea",
  layouts: "Layouts",
  labels: "Labels",
  buff: "Buff",
  speed: "Speed",
  treasure: "Treasure",
  special: "Special",
  default: "Default",
  formula: "Formula",
  chill: "Chill",
  full: "Full",
  collectibles: "Collectibles",
  buds: "Buds",
  wearables: "Wearables",
  skip: "Skip",
  docs: "Docs",
  exit: "Exit",
  compost: "Compost",
  chicken: "Chicken",
  recipes: "Recipes",
  unlocked: "Unlocked",
  reel: "Reel",
  "new.species": "New Species",
  buildings: "Buildings",
  boosts: "Boosts",
  decorations: "Decorations",
  "sfl/coins": "SFL/Coins",
  vipAccess: "VIP Access",
  bought: "Bought",
};

const timeUnits: Record<TimeUnits, string> = {
  // Full Singular
  "time.second.full": "second",
  "time.minute.full": "minute",
  "time.hour.full": "hour",
  "time.day.full": "day",

  // Full Plural
  "time.seconds.full": "seconds",
  "time.minutes.full": "minutes",
  "time.hours.full": "hours",
  "time.days.full": "days",

  // Medium Singular
  "time.sec.med": "sec",
  "time.min.med": "min",
  "time.hr.med": "hr",
  "time.day.med": "day",

  // Medium Plural
  "time.secs.med": "secs",
  "time.mins.med": "mins",
  "time.hrs.med": "hrs",
  "time.days.med": "days",

  // Short
  "time.second.short": "s",
  "time.minute.short": "m",
  "time.hour.short": "h",
  "time.day.short": "d",

  // Relative Time
  "time.seconds.ago": "{{time}} {{secondORseconds}} ago",
  "time.minutes.ago": "{{time}} {{minuteORminutes}} ago ",
  "time.hours.ago": "{{time}} {{hourORhours}} ago ",
  "time.days.ago": "{{time}} {{dayORdays}} ago",
};

const achievementTerms: Record<AchievementsTerms, string> = {
  "breadWinner.description": "Earn 0.001 SFL",
  "breadWinner.one":
    "Well, well, well, partner... It looks like you need some SFL!",
  "breadWinner.two":
    "In Sunflower Land, a healthy stash of SFL is the key to crafting tools, buildings and rare NFTs",
  "breadWinner.three":
    "The quickest way to earn SFL is by planting and selling crops.",

  "sunSeeker.description": "Harvest Sunflower 100 times",
  "cabbageKing.description": "Harvest Cabbage 200 times",
  "jackOLantern.description": "Harvest Pumpkin 500 times",
  "coolFlower.description": "Harvest Cauliflower 100 times",
  "farmHand.description": "Harvest crops 10,000 times",
  "beetrootBeast.description": "Harvest Beetroot 2,000 times",
  "myLifeIsPotato.description": "Harvest Potato 5,000 times",
  "rapidRadish.description": "Harvest Radish 200 times",
  "twentyTwentyVision.description": "Harvest Carrot 10,000 times",
  "stapleCrop.description": "Harvest Wheat 10,000 times",
  "sunflowerSuperstar.description": "Harvest Sunflower 100,000 times",
  "bumpkinBillionaire.description": "Earn 5,000 SFL",
  "patientParsnips.description": "Harvest Parsnip 5,000 times",
  "cropChampion.description": "Harvest 1 million crops",

  "busyBumpkin.description": "Reach level 2",
  "busyBumpkin.one":
    "Howdy, my ambitious friend! To unlock new crops, expansions, buildings and much more you will need to level up.",
  "busyBumpkin.two":
    "Head over to the Fire Pit, cook up a delicious recipe and feed it to your Bumpkin.",

  "kissTheCook.description": "Cook 20 meals",
  "bakersDozen.description": "Bake 13 cakes",
  "brilliantBumpkin.description": "Reach level 20",
  "chefDeCuisine.description": "Cook 5,000 meals",

  "scarecrowMaestro.description": "Craft a scarecrow and boost your crops",
  "scarecrowMaestro.one":
    "Howdy, partner! It is time you learn the art of crafting and boost your farming abilities",
  "scarecrowMaestro.two":
    "Travel to the Pumpkin Plaza, visit the Blacksmith and craft a Scarecrow.",

  "bigSpender.description": "Spend 10 SFL",
  "museum.description":
    "Have 10 different kinds of rare items placed on your land",
  "highRoller.description": "Spend 7,500 SFL",
  "timbeerrr.description": "Chop 150 trees",
  "craftmanship.description": "Craft 100 tools",
  "driller.description": "Mine 50 stone rocks",
  "ironEyes.description": "Mine 50 iron rocks",
  "elDorado.description": "Mine 50 gold rocks",
  "timeToChop.description": "Craft 500 axes",
  "canary.description": "Mine 1,000 stone rocks",
  "somethingShiny.description": "Mine 500 iron rocks",
  "bumpkinChainsawAmateur.description": "Chop 5,000 trees",
  "goldFever.description": "Mine 500 gold rocks",

  // Explorer
  "explorer.one":
    "Let's gather some wood by chopping down these trees and expand the island. Go ahead and figure out the best way to do it.",
  "expansion.description": "Expand your land to new horizons.",

  // Well of Prosperity
  "wellOfProsperity.description": "Build a well",
  "wellOfProsperity.one": "Well, well, well, what do we have here?",
  "wellOfProsperity.two":
    "It looks like your crops are thirsty. To support more crops you must first build a well.",

  "contractor.description": "Have 10 buildings constructed on your land",
  "fruitAficionado.description": "Harvest 50 fruit",
  "fruitAficionado.one":
    "Hey there, fruit gatherer! Fruits are nature's sweetest gifts, and they bring a burst of flavor to your farm.",
  "fruitAficionado.two":
    "By collecting different fruits, such as apples, oranges, and blueberries, you'll unlock unique recipes, boost your cooking skills, and create delightful treats",

  "orangeSqueeze.description": "Harvest Orange 100 times",
  "appleOfMyEye.description": "Harvest Apple 500 times",
  "blueChip.description": "Harvest Blueberry 5,000 times",
  "fruitPlatter.description": "Harvest 50,000 fruits",
  "crowdFavourite.description": "Complete 100 deliveries",

  "deliveryDynamo.description": "Complete 3 deliveries",
  "deliveryDynamo.one":
    "Howdy, reliable farmer! Bumpkins from all around need your help with deliveries.",
  "deliveryDynamo.two":
    "By completing deliveries, you'll make them happy and earn some fantastic SFL rewards in return ",

  "seasonedFarmer.description": "Collect 50 Seasonal Resources",
  "seasonedFarmer.one":
    "Howdy, seasonal adventurer! Sunflower Land is known for its special seasons filled with unique items and surprises.",
  "seasonedFarmer.two":
    "By collecting Seasonal resources, you'll gain access to limited-time rewards, exclusive crafts, and rare treasures. It's like having a front-row ticket to the wonders of each season.",
  "seasonedFarmer.three":
    "So complete tasks, participate in events, and gather those Seasonal Tickets to enjoy the best that Sunflower Land has to offer!",
  "treasureHunter.description": "Dig 10 holes",
  "treasureHunter.one":
    "Ahoy, treasure hunter! Sunflower Land is full of hidden treasures waiting to be discovered.",
  "treasureHunter.two":
    "Grab your shovel and head to Treasure Island, where you can dig for valuable items and rare surprises.",
  "eggcellentCollection.description": "Collect 10 Eggs",
  "eggcellentCollection.one":
    "Howdy, egg collector! Chickens are wonderful farm companions that provide us with delicious eggs.",
  "eggcellentCollection.two":
    "By collecting eggs, you'll have a fresh supply of ingredients for cooking, and you'll also unlock special recipes and bonuses.",
};

const addSFL: Record<AddSFL, string> = {
  "addSFL.swapDetails":
    "Sunflower Land provides a quick way to swap Matic for SFL via Quickswap.",
  "addSFL.referralFee":
    "Sunflower Land takes a 5% referral fee to complete this transaction.",
  "addSFL.swapTitle": "Swap Details",
  "addSFL.minimumReceived": "Minimum Received: ",
};

const auction: Record<Auction, string> = {
  "auction.title": "Auctions & Drops",
  "auction.bid.message": "You have placed your bid.",
  "auction.reveal": "Reveal winners",
  "auction.live": "Auction is live!",
  "auction.requirement": "Requirements",
  "auction.start": "Starting Time",
  "auction.period": "Auction Period",
  "auction.closed": "Auction closed",
  "auction.const": "Under construction!",
  "auction.const.soon": "This feature is coming soon.",
};

const availableSeeds: Record<AvailableSeeds, string> = {
  "availableSeeds.select": "Seed not selected",
  "availableSeeds.select.plant":
    "What seed would you like to select and plant?",
  "quickSelect.empty": "No greenhouse seeds.",
  "quickSelect.purchase": "Purchase {{name}} at the Market.",
  "quickSelect.label": "Quick select",
  "quickSelect.cropSeeds": "crop seeds",
  "quickSelect.greenhouseSeeds": "greenhouse seeds",
};

const base: Record<Base, string> = {
  "base.far.away": "You are too far away",
  "base.iam.far.away": "I am too far away",
};

const basicTreasure: Record<BasicTreasure, string> = {
  "giftGiver.description":
    "Congratulations, you discovered a gift giver! Each day you can claim a free prize from them.",
  "giftGiver.label": "Gift Giver",

  "basic.treasure.missingKey": "Missing Key",
  "basic.treasure.needKey": "You need a Treasure Key to open this chest",
  "rare.treasure.needKey": "You need a Rare Key to open this chest",
  "luxury.treasure.needKey": "You need a Luxury Key to open this chest",
  "basic.treasure.getKey":
    "You can get treasure keys by completing tasks for Bumpkins",
  "basic.treasure.congratsKey": "Congratulations, you have the key!",
  "basic.treasure.openChest":
    "Would you like to open the chest and claim a reward?",
  "budBox.open": "Open",
  "budBox.opened": "Opened",
  "budBox.title": "Bud box",
  "budBox.description": "Each day, a bud type can unlock farming rewards.",
  "raffle.title": "Goblin Raffle",
  "raffle.description":
    "Each month, you have a chance to win rewards. Winners will be announced on Discord.",
  "raffle.entries": "entries",
  "raffle.noTicket": "Missing Prize Ticket",
  "raffle.how":
    "You can collect Prize Tickets for free through special events and Bumpkin deliveries.",
  "raffle.enter": "Enter",
};

const beehive: Record<Beehive, string> = {
  "beehive.harvestHoney": "Harvest honey",
  "beehive.noFlowersGrowing": "No flowers growing",
  "beehive.beeSwarm": "Bee swarm",
  "beehive.pollinationCelebration":
    "Pollination celebration! Your crops are in for a treat with a 0.2 boost from a friendly bee swarm!",
  "beehive.honeyProductionPaused": "Honey production paused",
  "beehive.yield": "Yield",
  "beehive.honeyPerFullHive": "{{multiplier}} honey / full hive",
  "beehive.speed": "Speed",
  "beehive.fullHivePerDay": "{{speed}} full {{hive}} / day",
  "beehive.estimatedFull": "Estimated full",
  "beehive.hive.singular": "hive",
  "beehive.hives.plural": "hives",
};

const birdiePlaza: Record<BirdiePlaza, string> = {
  "birdieplaza.birdieIntro":
    "Hey there, I'm Birdie, the most beautiful Bumpkin around!",
  "birdieplaza.admiringOutfit":
    "I noticed you admiring my outfit. Isn't it fantastic?!?",
  "birdieplaza.currentSeason":
    "We are currently in {{currentSeason}} Season and Bumpkins are going crazy for {{seasonalTicket}}s.",
  "birdieplaza.collectTickets":
    "Collect enough {{seasonalTicket}}s and you can craft rare NFTs. That's how I got this rare outfit!",
  "birdieplaza.whatIsSeason": "What is a season?",
  "birdieplaza.howToEarnTickets": "{{seasonalTicket}}s?",
  "birdieplaza.earnTicketsVariety":
    "You can earn {{seasonalTicket}} in a variety of ways.",
  "birdieplaza.commonMethod":
    "The most common method to earn {{seasonalTicket}}s is by gathering resources and delivering them to Bumpkins in the Plaza.",
  "birdieplaza.choresAndRewards":
    "You can also earn {{seasonalTicket}}s by completing chores for Hank & claiming daily rewards!",
  "birdieplaza.gatherAndCraft":
    "Gather enough {{seasonalTicket}}s and you will be able to buy some rare items like I did.",
  "birdieplaza.newSeasonIntro":
    "Every 3 months a new season is introduced at Sunflower Land.",
  "birdieplaza.seasonQuests":
    "This season has exciting quests & rare collectibles you can earn.",
  "birdieplaza.craftItems":
    "To obtain these rare items, you must collect {{seasonalTicket}}s and exchange them at Stella's Megastore or bid at the Auction house.",
};

const boostDescriptions: Record<BoostDescriptions, string> = {
  // Mutant Chickens
  "description.speed.chicken.one":
    "Your chickens will now produce eggs 10% faster.",
  "description.speed.chicken.two": "Produces eggs 10% faster",
  "description.fat.chicken.one":
    "Your chickens will now require 10% less wheat per feed.",
  "description.fat.chicken.two": "10% less wheat needed to feed a chicken",
  "description.rich.chicken.one": "Your chickens will now yield 10% more eggs.",
  "description.rich.chicken.two": "Yields 10% more eggs",
  "description.ayam.cemani": "The rarest chicken in existence!",
  "description.el.pollo.veloz.one":
    "Your chickens will lay eggs 4 hours faster!",
  "description.el.pollo.veloz.two":
    "Give me those eggs, fast! 4 hour speed boost on egg laying.",
  "description.banana.chicken":
    "A chicken that boosts bananas. What a world we live in.",

  // Boosts
  "description.lab.grow.pumpkin": "+0.3 Pumpkin Yield",
  "description.lab.grown.radish": "+0.4 Radish Yield",
  "description.lab.grown.carrot": "+0.2 Carrot Yield",
  "description.purple.trail":
    "Leave your opponents in a trail of envy with the mesmerizing and unique Purple Trail",
  "description.obie": "A fierce eggplant soldier",
  "description.maximus": "Squash the competition with plump Maximus",
  "description.mushroom.house":
    "A whimsical, fungi-abode where the walls sprout with charm and even the furniture has a 'spore-tacular' flair!",
  "description.Karkinos":
    "Pinchy but kind, the crabby cabbage-boosting addition to your farm!",
  "description.heart.of.davy.jones":
    "Whoever possesses it holds immense power over the seven seas, can dig for treasure without tiring",
  "description.tin.turtle":
    "The Tin Turtle gives +0.1 to Stones you mine within its Area of Effect.",
  "description.emerald.turtle":
    "The Emerald Turtle gives +0.5 to any minerals you mine within its Area of Effect.",
  "description.iron.idol": "The Idol adds 1 iron every time you mine iron.",
  "description.crim.peckster":
    "A gem detective with a knack for unearthing Crimstones.",
  "description.knight.chicken":
    "A strong and noble chicken boosting your oil yield.",
  "description.skill.shrimpy":
    "Shrimpy's here to help! He'll ensure you get that extra XP from fish.",
  "description.soil.krabby":
    "Speedy sifting with a smile! Enjoy a 10% composter speed boost with this crustaceous champ.",
  "description.nana":
    "This rare beauty is a surefire way to boost your banana harvests.",
  "description.grain.grinder":
    "Grind your grain and experience a delectable surge in Cake XP.",
  "description.kernaldo": "The magical corn whisperer.",
  "description.kernaldo.1":
    "The magical corn whisperer. +25% Corn Growth Speed.",
  "description.poppy": "The mystical corn kernel.",
  "description.poppy.1": "The mystical corn kernel. +0.1 Corn per harvest,",
  "description.victoria.sisters": "The pumpkin loving sisters",
  "description.undead.rooster":
    "An unfortunate casualty of the war. 10% increased egg yield.",
  "description.observatory":
    "Explore the stars and improve scientific development",
  "description.engine.core": "The power of the sunflower",
  "description.time.warp.totem":
    "2x speed for crops, trees, cooking & minerals. Only lasts for 2 hours",
  "description.time.warp.totem.expired":
    "Your Time Warp Totem has expired. Head to the Pumpkin Plaza to discover and craft more magical items to boost your farming abilities!",
  "description.time.warp.totem.temporarily":
    "The Time Warp Totem temporarily boosts your cooking, crops, trees & mineral time. Make the most of it!",
  "description.cabbage.boy": "Don't wake the baby!",
  "description.cabbage.girl": "Shhh it's sleeping",
  "description.wood.nymph.wendy":
    "Cast an enchantment to entice the wood fairies.",
  "description.peeled.potato":
    "A precious potato, encourages bonus potatoes on harvest.",
  "description.potent.potato":
    "Potent! Grants a 3% chance to get +10 potatoes on harvest.",
  "description.radical.radish":
    "Radical! Grants a 3% chance to get +10 radishes on harvest.",
  "description.stellar.sunflower":
    "Stellar! Grants a 3% chance to get +10 sunflowers on harvest.",
  "description.lady.bug":
    "An incredible bug that feeds on aphids. Improves Apple quality.",
  "description.squirrel.monkey":
    "A natural orange predator. Orange Trees are scared when a Squirrel Monkey is around.",
  "description.black.bearry":
    "His favorite treat - plump, juicy blueberries. Gobbles them up by the handful!",
  "description.maneki.neko":
    "The beckoning cat. Pull its arm and good luck will come",
  "description.easter.bunny": "A rare Easter item",
  "description.pablo.bunny": "A magical Easter bunny",
  "description.foliant": "A book of spells.",
  "description.tiki.totem":
    "The Tiki Totem adds 0.1 wood to every tree you chop.",
  "description.lunar.calendar":
    "Crops now follow the lunar cycle! 10% increase to crop growth speed.",
  "description.heart.davy.jones":
    "Whoever possesses it holds immense power over the seven seas, can dig for treasure without tiring.",
  "description.treasure.map":
    "An enchanted map that leads the holder to valuable treasure. +20% profit from beach bounty items.",
  "description.genie.lamp":
    "A magical lamp that contains a genie who will grant you three wishes.",
  "description.basic.scarecrow":
    "Boost nearby Sunflowers, Potatoes and Pumpkins.",
  "description.scary.mike":
    "Boost nearby Carrots, Cabbages, Soybeans, Beetroots, Cauliflowers and Parsnips",
  "description.laurie.chuckle.crow":
    "Boost nearby Eggplant, Corn, Radish, Wheat and Kale",
  "description.immortal.pear": "Increase the survival of your fruit patches.",
  "description.bale": "Boost nearby chickens.",
  "description.sir.goldensnout":
    "A royal member, Sir Goldensnout infuses your farm with sovereign prosperity through its golden manure.",
  "description.freya.fox":
    "Enchanting guardian, boosts pumpkin growth with her mystical charm. Harvest abundant pumpkins under her watchful gaze.",
  "description.queen.cornelia":
    "Command the regal power of Queen Cornelia and experience a magnificent Area of Effect boost to your corn production. +1 Corn.",
};

const boostEffectDescriptions: Record<BoostEffectDescriptions, string> = {
  "description.obie.boost": "-25% Eggplant Growth Time",
  "description.purple.trail.boost": "+0.2 Eggplant",
  "description.freya.fox.boost": "+0.5 Pumpkin",
  "description.sir.goldensnout.boost": "+0.5 Crop (AOE 4x4)",
  "description.maximus.boost": "+1 Eggplant",
  "description.basic.scarecrow.boost": "-20% Growth Time",
  "description.scary.mike.boost": "+0.2 Medium Crops",
  "description.laurie.chuckle.crow.boost": "+0.2 Advanced Crops",
  "description.bale.boost": "+0.2 Eggs",
  "description.immortal.pear.boost": "+1 Fruit Harvest per seed",
  "description.treasure.map.boost": "+20% Coins on Treasure Bounty Sales",
  "description.poppy.boost": "+0.1 Corn",
  "description.kernaldo.boost": "-25% Corn Growth Time",
  "description.grain.grinder.boost": "+20% Cake XP",
  "description.nana.boost": "-10% Banana Growth Time",
  "description.soil.krabby.boost": "-10% Composter Compost Time",
  "description.skill.shrimpy.boost": "+20% Fish XP",
  "description.iron.idol.boost": "+1 Iron",
  "description.emerald.turtle.boost": "+0.5 Stone, Iron, Gold (AOE 3x3)",
  "description.tin.turtle.boost": "+0.1 Stone (AOE 3x3)",
  "description.heart.of.davy.jones.boost": "+20 Daily Digging Limit",
  "description.Karkinos.boost": "+0.1 Cabbage (Inactive with Cabbage Boy)",
  "description.mushroom.house.boost": "+0.2 Wild Mushroom",
  "description.boost.gilded.swordfish": "+0.1 Gold",
  "description.nancy.boost": "-15% Crop Growth Time",
  "description.scarecrow.boost": "-15% Crop Growth Time; +20% Crop Yield",
  "description.kuebiko.boost":
    "-15% Crop Growth Time; +20% Crop Yield; Free Seeds",
  "description.gnome.boost":
    "+10 Yield to Medium/Advanced Crops (AOE plot below)",
  "description.lunar.calendar.boost": "-10% Crop Growth Time",
  "description.peeled.potato.boost": "20% Chance for +1 Potato",
  "description.victoria.sisters.boost": "+20% Pumpkin",
  "description.easter.bunny.boost": "+20% Carrot",
  "description.pablo.bunny.boost": "+0.1 Carrot",
  "description.cabbage.boy.boost": "+0.25 Cabbage (+0.5 with Cabbage Girl)",
  "description.cabbage.girl.boost": "-50% Cabbage Growth Time",
  "description.golden.cauliflower.boost": "+100% Cauliflower",
  "description.mysterious.parsnip.boost": "-50% Parsnip Growth Time",
  "description.queen.cornelia.boost": "+1 Corn (AOE 3x4)",
  "description.foliant.boost": "+0.2 Kale",
  "description.hoot.boost": "+0.5 Wheat, Radish, Kale, Rice",
  "description.hungry.caterpillar.boost": "Free Flower Seeds",
  "description.black.bearry.boost": "+1 Blueberry",
  "description.squirrel.monkey.boost": "-50% Orange Growth Time",
  "description.lady.bug.boost": "+0.25 Apple",
  "description.banana.chicken.boost": "+0.1 Banana",
  "description.carrot.sword.boost": "4x Chance of Mutant Crop",
  "description.stellar.sunflower.boost": "3% Chance of +10 Sunflower",
  "description.potent.potato.boost": "3% Chance of +10 Potato",
  "description.radical.radish.boost": "3% Chance of +10 Radish",
  "description.lg.pumpkin.boost": "+0.3 Pumpkin",
  "description.lg.carrot.boost": "+0.2 Carrot",
  "description.lg.radish.boost": "+0.4 Radish",
  "description.fat.chicken.boost": "-0.1 Wheat to Feed Chickens",
  "description.rich.chicken.boost": "+0.1 Egg",
  "description.speed.chicken.boost": "-10% Egg Production Time",
  "description.ayam.cemani.boost": "+0.2 Egg",
  "description.el.pollo.veloz.boost": "-4h Egg Production Time",
  "description.rooster.boost": "2x Chance of Mutant Chicken",
  "description.undead.rooster.boost": "+0.1 Egg",
  "description.chicken.coop.boost":
    "+1 Egg Yield; +5 Chicken Limit per Hen House",
  "description.gold.egg.boost": "Feed Chickens without Wheat",
  "description.woody.beaver.boost": "+20% Wood",
  "description.apprentice.beaver.boost": "+20% Wood; -50% Tree Recovery Time",
  "description.foreman.beaver.boost":
    "+20% Wood; -50% Tree Recovery Time; Chop Trees without Axes",
  "description.wood.nymph.wendy.boost": "+0.2 Wood",
  "description.tiki.totem.boost": "+0.1 Wood",
  "description.tunnel.mole.boost": "+0.25 Stone",
  "description.rocky.mole.boost": "+0.25 Iron",
  "description.nugget.boost": "+0.25 Gold",
  "description.rock.golem.boost": "10% Chance of +2 Stone",
  "description.crimson.carp.boost": "+0.05 Crimstone",
  "description.battle.fish.boost": "+0.05 Oil",
  "description.crim.peckster.boost": "+0.1 Crimstone",
  "description.knight.chicken.boost": "+0.1 Oil",
  "description.queen.bee.boost": "+1 Honey Production Speed",
  "description.beekeeper.hat.boost": "+0.2 Honey Production Speed",
  "description.flower.fox.boost": "-10% Flower Growth Time",
  "description.humming.bird.boost": "20% Chance for +1 Flower",
  "description.beehive.boost": "10% Chance for +0.2 Crop when Beehive is full",
  "description.walrus.boost": "+1 Fish",
  "description.alba.boost": "50% Chance of +1 Basic Fish",
  "description.knowledge.crab.boost": "Double Sprout Mix Boost Effect",
  "description.maneki.neko.boost": "1 Free Food per Day",
  "description.genie.lamp.boost": "Grants 3 Wishes",
  "description.observatory.boost": "+5% XP",
  "description.blossombeard.boost": "+10% XP",
  "description.desertgnome.boost": "+10% Cooking Speed",
  "description.christmas.festive.tree.boost": "Free Gift at Christmas",
  "description.grinxs.hammer.boost": "Halves expansion costs",
  "description.time.warp.totem.boost":
    "50% Reduction to Crop, Mineral, Cooking and Tree Time",
  "description.radiant.ray.boost": "+0.1 Iron",
  "description.babyPanda.boost": "Beginner 2x XP Boost",
  "description.hungryHare.boost": "Fermented Carrots 2x XP",
  "description.turbo.sprout.boost": "-50% Green House Crop time",
  "description.soybliss.boost": "+1 Soybean",
  "description.grape.granny.boost": "+1 Grape",
  "description.non.la.hat.boost": "+1 Rice",
  "description.oil.can.boost": "+2 Oil",
  "description.olive.shield.boost": "+1 Olive",
  "description.pan.boost": "+25% XP",
  "description.paw.shield.boost": "+25% Faction Pet Satiation",
  "description.vinny.boost": "+0.25 Grape",
  "description.rice.panda.boost": "+0.25 Rice",
  "description.olive.shirt.boost": "+0.25 Olive",
  "description.tofu.mask.boost": "+0.1 Soybean",
  "description.gourmet.hourglass.boost": "+50% Cooking Speed (4hrs)",
  "description.harvest.hourglass.boost": "-25% Crop Growth Time (6hrs)",
  "description.timber.hourglass.boost": "-25% Tree Recovery Time (4hrs)",
  "description.ore.hourglass.boost": "-50% Mineral Recovery Time (3hrs)",
  "description.orchard.hourglass.boost": "-25% Fruit Growth Time (6hrs)",
  "description.fishers.hourglass.boost": "50% Chance of +1 Fish (4hrs)",
  "description.blossom.hourglass.boost": "-25% Flower Growth Time (4hrs)",
  "description.hourglass.running":
    "This {{hourglass}} provides a temporary boost of {{boost}}.",
  "description.hourglass.expired":
    "Your {{hourglass}} has expired. Time to grab another one!",
};

const bountyDescription: Record<BountyDescription, string> = {
  "description.clam.shell": "A clam shell.",
  "description.sea.cucumber": "A sea cucumber.",
  "description.coral": "A piece of coral, it's pretty",
  "description.crab": "A crab, watch out for its claws!",
  "description.starfish": "The star of the sea.",
  "description.pirate.bounty":
    "A bounty for a pirate. It's worth a lot of money.",
  "description.wooden.compass":
    "It may not be high-tech, but it will always steer you in the right direction, wood you believe it?",
  "description.iron.compass":
    "Iron out your path to treasure! This compass is 'attract'-ive, and not just to the magnetic North!",
  "description.emerald.compass":
    "Guide your way through the lush mysteries of life! This compass doesn't just point North, it points towards opulence and grandeur!",
  "description.old.bottle":
    "Antique pirate bottle, echoing tales of high seas adventure.",
  "description.pearl": "Shimmers in the sun.",
  "description.pipi": "Plebidonax deltoides, found in the Pacific Ocean.",
  "description.seaweed": "Seaweed.",
};

const buildingDescriptions: Record<BuildingDescriptions, string> = {
  // Buildings
  "description.water.well": "Crops need water!",
  "description.kitchen": "Step up your cooking game",
  "description.compost.bin": "Produces bait & fertiliser on a regular basis.",
  "description.hen.house": "Grow your chicken empire",
  "description.bakery": "Bake your favourite cakes",
  "description.greenhouse": "A sanctuary for sensitive crops",
  "description.turbo.composter":
    "Produces advanced bait & fertiliser on a regular basis.",
  "description.deli": "Satisfy your appetite with these delicatessen foods!",
  "description.smoothie.shack": "Freshly squeezed!",
  "description.warehouse": "Increase your seed stocks by 20%",
  "description.toolshed": "Increase your workbench tool stock by 50%",
  "description.premium.composter":
    "Produces expert bait & fertiliser on a regular basis.",
  "description.town.center":
    "Gather around the town center for the latest news",
  "description.market": "Buy and sell at the Farmer's Market",
  "description.fire.pit":
    "Roast your Sunflowers, feed and level up your Bumpkin",
  "description.workbench": "Craft tools to collect resources",
  "description.tent": "(Discontinued)",
  "description.house": "A place to rest your head",
  "description.crop.machine": "Automate your crop production",
  "building.oil.remaining": "{{oil}} Oil in building",

  "cooking.building.oil.description":
    "You can boost your recipe cooking times by {{boost}}% when adding oil into the {{buildingName}}.",
  "cooking.building.oil.boost": "Oil boost",
  "cooking.building.runtime": "Runtime {{time}}",
};

const bumpkinDelivery: Record<BumpkinDelivery, string> = {
  "bumpkin.delivery.selectFlower": "Select a flower",
  "bumpkin.delivery.noFlowers": "Oh no, you don't have any flowers to gift!",
  "bumpkin.delivery.thanks": "Gee Wizz thanks Bumpkin!!!",
  "bumpkin.delivery.waiting":
    "I've been waiting for this. Thanks a bunch! Come back soon for more deliveries.",
  "bumpkin.delivery.proveYourself":
    "Prove yourself worthy. Expand your island {{missingExpansions}} more times.",
};

const bumpkinItemBuff: Record<BumpkinItemBuff, string> = {
  "bumpkinItemBuff.chef.apron.boost": "+20% Cake Profit",
  "bumpkinItemBuff.fruit.picker.apron.boost":
    "+0.1 Apple, Blueberry, Orange + Banana",
  "bumpkinItemBuff.angel.wings.boost": "30% Chance of Instant Crops",
  "bumpkinItemBuff.devil.wings.boost": "30% Chance of Instant Crops",
  "bumpkinItemBuff.eggplant.onesie.boost": "+0.1 Eggplant",
  "bumpkinItemBuff.golden.spatula.boost": "+10% XP",
  "bumpkinItemBuff.mushroom.hat.boost": "+0.1 Mushrooms",
  "bumpkinItemBuff.parsnip.boost": "+20% Parsnip",
  "bumpkinItemBuff.sunflower.amulet.boost": "+10% Sunflower",
  "bumpkinItemBuff.carrot.amulet.boost": "-20% Carrot Growth time",
  "bumpkinItemBuff.beetroot.amulet.boost": "+20% Beetroot",
  "bumpkinItemBuff.green.amulet.boost": "Chance 10x Crops",
  "bumpkinItemBuff.Luna.s.hat.boost": "-50% Cooking Time",
  "bumpkinItemBuff.infernal.pitchfork.boost": "+3 Crops",
  "bumpkinItemBuff.cattlegrim.boost": "+0.25 Animal Produce",
  "bumpkinItemBuff.corn.onesie.boost": "+0.1 Corn",
  "bumpkinItemBuff.sunflower.rod.boost": "10% Chance +1 Fish",
  "bumpkinItemBuff.trident.boost": "20% Chance +1 Fish",
  "bumpkinItemBuff.bucket.o.worms.boost": "+1 Worm",
  "bumpkinItemBuff.luminous.anglerfish.topper.boost": "+50% Fish XP",
  "bumpkinItemBuff.angler.waders.boost": "+10 Fishing Limit",
  "bumpkinItemBuff.ancient.rod.boost": "Cast without rod",
  "bumpkinItemBuff.banana.amulet.boost": "+0.5 Bananas",
  "bumpkinItemBuff.banana.boost": "-20% Banana Growth Time",
  "bumpkinItemBuff.deep.sea.helm": "3x chance Marine Marvels",
  "bumpkinItemBuff.bee.suit": "+0.1 Honey per Full Beehive",
  "bumpkinItemBuff.crimstone.hammer": "+2 Crimstones on 5th mine",
  "bumpkinItemBuff.crimstone.amulet": "-20% Crimstone Cooldown Time",
  "bumpkinItemBuff.crimstone.armor": "+0.1 Crimstones",
  "bumpkinItemBuff.hornet.mask": "2x chance Bee Swarm",
  "bumpkinItemBuff.honeycomb.shield": "+1 Honey per Full Beehive",
  "bumpkinItemBuff.flower.crown": "-50% Flower Growth Time",
  "bumpkinItemBuff.goblin.armor": "+20% Marks",
  "bumpkinItemBuff.goblin.helmet": "+10% Marks",
  "bumpkinItemBuff.goblin.axe": "+10% Marks",
  "bumpkinItemBuff.goblin.pants": "+5% Marks",
  "bumpkinItemBuff.goblin.sabatons": "+5% Marks",
  "bumpkinItemBuff.nightshade.armor": "+20% Marks",
  "bumpkinItemBuff.nightshade.helmet": "+10% Marks",
  "bumpkinItemBuff.nightshade.sword": "+10% Marks",
  "bumpkinItemBuff.nightshade.pants": "+5% Marks",
  "bumpkinItemBuff.nightshade.sabatons": "+5% Marks",
  "bumpkinItemBuff.sunflorian.armor": "+20% Marks",
  "bumpkinItemBuff.sunflorian.helmet": "+10% Marks",
  "bumpkinItemBuff.sunflorian.sword": "+10% Marks",
  "bumpkinItemBuff.sunflorian.pants": "+5% Marks",
  "bumpkinItemBuff.sunflorian.sabatons": "+5% Marks",
  "bumpkinItemBuff.bumpkin.armor": "+20% Marks",
  "bumpkinItemBuff.bumpkin.helmet": "+10% Marks",
  "bumpkinItemBuff.bumpkin.sword": "+10% Marks",
  "bumpkinItemBuff.bumpkin.pants": "+5% Marks",
  "bumpkinItemBuff.bumpkin.sabatons": "+5% Marks",
};

const bumpkinPart: Record<BumpkinPart, string> = {
  "equip.background": "Background",
  "equip.hair": "Hair",
  "equip.body": "Body",
  "equip.shirt": "Shirt",
  "equip.pants": "Pants",
  "equip.shoes": "Shoes",
  "equip.tool": "Tool",
  "equip.necklace": "Necklace",
  "equip.coat": "Coat",
  "equip.hat": "Hat",
  "equip.secondaryTool": "Secondary Tool",
  "equip.onesie": "Onesie",
  "equip.suit": "Suit",
  "equip.wings": "Wings",
  "equip.dress": "Dress",
  "equip.beard": "Beard",
};

const bumpkinPartRequirements: Record<BumpkinPartRequirements, string> = {
  "equip.missingHair": "Hair is required",
  "equip.missingBody": "Body is required",
  "equip.missingShoes": "Shoes are required",
  "equip.missingShirt": "Shirt is required",
  "equip.missingPants": "Pants are required",
  "equip.missingBackground": "Background is required",
};

const bumpkinSkillsDescription: Record<BumpkinSkillsDescription, string> = {
  // Crops
  "description.green.thumb": "Crops yield 5% more",
  "description.cultivator": "Crops grow 5% quicker",
  "description.master.farmer": "Crops yield 10% more",
  "description.golden.flowers": "Chance for Sunflowers to Drop Gold ",
  "description.happy.crop": "Chance to get 2x crops",
  // Trees
  "description.lumberjack": "Trees drop 10% more",
  "description.tree.hugger": "Trees regrow 20% quicker",
  "description.tough.tree": "Chance to get 3x wood drops",
  "description.money.tree": "Chance for coin drops",
  // Rocks
  "description.digger": "Stone Drops 10% more",
  "description.coal.face": "Stones recover 20% quicker",
  "description.seeker": "Attract Rock Monsters",
  "description.gold.rush": "Chance to get 2.5x gold drops",
  // Cooking
  "description.rush.hour": "Cook meals 10% faster",
  "description.kitchen.hand": "Meals yield an extra 5% experience",
  "description.michelin.stars": "High quality food, earn additional 5% SFL",
  "description.curer": "Consuming deli goods adds extra 15% exp",
  // Animals
  "description.stable.hand": "Animals produce 10% quicker",
  "description.free.range": "Animals produce 10% more",
  "description.horse.whisperer": "Increase chance of mutants",
  "description.buckaroo": "Chance of double drops",
};

const bumpkinTrade: Record<BumpkinTrade, string> = {
  "bumpkinTrade.minLevel": "You must be level 10 to trade",
  "bumpkinTrade.noTradeListed": "You have no trades listed.",
  "bumpkinTrade.sell": "Sell your resources to other players for SFL.",
  "bumpkinTrade.like.list": "What would you like to list?",
  "bumpkinTrade.purchase": "Purchase at Goblin Retreat",

  "bumpkinTrade.available": "Available",
  "bumpkinTrade.quantity": "Quantity",
  "bumpkinTrade.price": "Price",
  "bumpkinTrade.listingPrice": "Listing price",
  "bumpkinTrade.pricePerUnit": "Price per {{resource}}",
  "bumpkinTrade.tradingFee": "Trading fee",
  "bumpkinTrade.youWillReceive": "You will receive",
  "bumpkinTrade.cancel": "Cancel",
  "bumpkinTrade.list": "List",
  "bumpkinTrade.maxListings": "Max listings reached",
  "bumpkinTrade.max": "Max: {{max}}",
  "bumpkinTrade.min": "Min: {{min}}",
  "bumpkinTrade.minimumFloor": "Min unit price: {{min}}",
  "bumpkinTrade.maximumFloor": "Max unit price: {{max}}",
  "bumpkinTrade.floorPrice": "Floor Price: {{price}} SFL",
  "bumpkinTrade.sellConfirmation":
    "Sell {{quantity}} {{resource}} for {{price}} SFL?",
  "bumpkinTrade.cant.sell.all": "Can't sell all",
  "bumpkinTrade.price/unit": "{{price}}/unit",
};

const goblinTrade: Record<GoblinTrade, string> = {
  "goblinTrade.bulk": "Bulk Amount",
  "goblinTrade.conversion": "Conversion",
  "goblinTrade.select": "Select resource to sell",
  "goblinTrade.hoarding": "Oh no! You've reached the max SFL.",
  "goblinTrade.vipRequired": "VIP Access Required",
  "goblinTrade.vipDelivery":
    "Hmmm, looks like you are a basic Bumpkin. I only trade with VIPs.",
};

const buyFarmHand: Record<BuyFarmHand, string> = {
  "buyFarmHand.howdyBumpkin": "Howdy Bumpkin.",
  "buyFarmHand.confirmBuyAdditional":
    "Are you sure you want to buy an additional Bumpkin?",
  "buyFarmHand.farmhandCoupon": "1 Farmhand Coupon",
  "buyFarmHand.adoptBumpkin": "Adopt a Bumpkin",
  "buyFarmHand.additionalBumpkinsInfo":
    "Additional Bumpkins can be used to equip wearables and boost your farm.",
  "buyFarmHand.notEnoughSpace": "Not enough space - upgrade your island",
  "buyFarmHand.buyBumpkin": "Buy Bumpkin",
  "buyFarmHand.newFarmhandGreeting":
    "I am your new farmhand. I can't wait to get to work!",
};

const changeLanguage: Record<ChangeLanguage, string> = {
  "changeLanguage.confirm":
    "This action will refresh the browser. Are you sure you want to change your language?",
  "changeLanguage.contribute": "Want to contribute your Language?",
  "changeLanguage.contribute.message":
    "If you are interested in contributing translations for your preferred language, please contact one of the Moderators in the Sunflower Land Discord Server:",
};

const chat: Record<Chat, string> = {
  "chat.Fail": "Connection failed",
  "chat.mute": "You are muted",
  "chat.again": "You will be able to chat again in",
  "chat.Kicked": "Kicked",
};

const chickenWinner: Record<ChickenWinner, string> = {
  "chicken.winner.playagain": "click here to play again",
};

const choresStart: Record<ChoresStart, string> = {
  "chores.harvestFields": "Harvest the fields",
  "chores.harvestFieldsIntro":
    "These fields ain't gonna plow themselves. Harvest 3 Sunflowers.",
  "chores.earnSflIntro":
    "If you want to make it big in the farming business, you better start by sellin' sunflowers, buyin' seeds, and reaping the profit.",
  "chores.reachLevel": "Reach Level 2",
  "chores.reachLevelIntro":
    "If you want to level up & unlock new abilities, you better start cookin' up food & chowin' it down.",
  "chores.chopTrees": "Chop 3 Trees",
  "chores.helpWithTrees":
    "My old bones ain't what they used to be, reckon you could lend me a hand with these darn trees needin' choppin? Our local Blacksmith will help you craft some tools.",
  "chores.noChore": "Sorry, I don't have any chores that need doing right now.",
  "chores.newSeason": "A new season approaches, chores will temporarily close.",
  "chores.choresFrozen": "New seasonal chores will be available soon.",
  "chores.left": "{{chores}} left",
};

const chumDetails: Record<ChumDetails, string> = {
  "chumDetails.gold": "The shimmering gold can be seen 100 miles away",
  "chumDetails.iron":
    "A shimmering sparkle, can be seen at all angles during Dusk",
  "chumDetails.stone": "Maybe throwing a few stones will attract some fish",
  "chumDetails.egg": "Hmmm, not sure what fish would like eggs...",
  "chumDetails.sunflower": "A sunny, vibrant lure for curious fish.",
  "chumDetails.potato": "Potatoes make for an unusual fishy feast.",
  "chumDetails.pumpkin":
    "Fish might be intrigued by the orange glow of pumpkins.",
  "chumDetails.carrot": "Best used with Earthworms to catch Anchovies!",
  "chumDetails.cabbage": "A leafy temptation for underwater herbivores.",
  "chumDetails.beetroot": "Beets, the undersea delight for the bold fish.",
  "chumDetails.cauliflower": "Fish may find the florets oddly enticing.",
  "chumDetails.parsnip": "An earthy, rooty lure for curious fish.",
  "chumDetails.eggplant":
    "Eggplants: the aquatic adventure for the daring fish.",
  "chumDetails.corn": "Corn on the cob - an odd but intriguing treat.",
  "chumDetails.radish": "Radishes, the buried treasure for aquatics.",
  "chumDetails.wheat": "Wheat, a grainy delight for underwater foragers.",
  "chumDetails.kale": "A leafy green surprise for the inquisitive fish.",
  "chumDetails.blueberry": "Often confused by blue fish as potential mates.",
  "chumDetails.orange": "Oranges, the citrusy curiosity for sea creatures.",
  "chumDetails.apple": "Apples - a crunchy enigma beneath the waves.",
  "chumDetails.banana": "Lighter than water!",
  "chumDetails.seaweed": "A taste of the ocean in a leafy underwater snack.",
  "chumDetails.crab": "A tantalizing morsel for a curious undersea fish.",
  "chumDetails.anchovy":
    "Anchovies, mysteriously alluring to the outlaws of the sea.",
  "chumDetails.redSnapper": "A mystery hidden within the depths of the ocean.",
  "chumDetails.tuna": "What is big enough to eat a tuna?",
  "chumDetails.squid": "Awaken a ray with its favorite treat!",
  "chumDetails.wood": "Wood. An interesting choice....",
  "chumDetails.redPansy": "Fiery allure for elusive fish.",
  "chumDetails.fatChicken":
    "The original white meat that the largest of quarry cannot resist.",
  "chumDetails.speedChicken": "Fast food dessert for sharp-teeth hunters.",
  "chumDetails.richChicken":
    "Delicacy for the bright-bellied terror of the screen.",
  "chumDetails.sunfish": "Perfect for a full moon...",
  "chumDetails.horseMackerel": "Only for the biggest appetites",
};

const claimAchievement: Record<ClaimAchievement, string> = {
  "claimAchievement.alreadyHave": "You already have this achievement",
  "claimAchievement.requirementsNotMet": "You do not meet the requirements",
};

const community: Record<Community, string> = {
  "community.toast": "Toast text is empty",
  "community.url": "Enter your repo URL",
  "comunity.Travel": "Travel to community built islands",
};

const compostDescription: Record<CompostDescription, string> = {
  "compost.fruitfulBlend":
    "Fruitful Blend boosts the yield of each fruit growing on fruit patches by +0.1",
  "compost.sproutMix":
    "Sprout Mix increases your crop yield from plots by +0.2",
  "compost.sproutMixBoosted":
    "Sprout Mix increases your crop yield from plots by +0.4",
  "compost.rapidRoot": "Rapid Root reduces crop growth time from plots by 50%",
};

const composterDescription: Record<ComposterDescription, string> = {
  "composter.compostBin": "Compost Bin details...",
  "composter.turboComposter": "Turbo Composter details...",
  "composter.premiumComposter": "Premium Composter details...",
};

const confirmationTerms: Record<ConfirmationTerms, string> = {
  "confirmation.sellCrops":
    "Are you sure you want to sell {{cropAmount}} {{cropName}} for {{coinAmount}} Coins?",
  "confirmation.buyCrops":
    "Are you sure you want to spend {{coinAmount}} Coins to buy {{seedNo}} {{seedName}}s?",
};

const confirmSkill: Record<ConfirmSkill, string> = {
  "confirm.skillClaim": "Are you sure you want to claim the skill?",
};

const conversations: Record<Conversations, string> = {
  "home-intro.one":
    "Howdy Bumpkin, welcome to your home...It's not much, but we all have to start somewhere!",
  "home-intro.two":
    "Throughout your adventures you will be able to store rare collectibles you find here.",
  "home-intro.three":
    "The bigger your home, the more Bumpkins that can live on your island.",
  "hank-intro.headline": "Help an old man?",
  "hank-intro.one": "Howdy Bumpkin! Welcome to our little patch of paradise.",
  "hank-intro.two":
    "I've been working this land for fifty years but could sure use some help.",
  "hank-intro.three":
    "I can teach you the basics of farming, as long as you help me with my daily chores.",
  "hank.crafting.scarecrow": "Craft a scarecrow",
  "hank-crafting.one":
    "Hmmm, those crops are growing awfully slow. I aint' got time to wait around.",
  "hank-crafting.two": "Craft a scarecrow to speed up your crops.",
  "hank.choresFrozen":
    "Well shucks, looks like we're all caught up for today. Take yourself a little breather and enjoy the rest of the day!",
  "betty-intro.headline": "How to grow your farm",
  "betty-intro.one": "Hey, hey! Welcome to my market.",
  "betty-intro.two":
    "Bring me your finest harvest, and I will give you a fair price for them!",
  "betty-intro.three":
    "You need seeds? From potatoes to parsnips, I've got you covered!",
  "betty.market-intro.one": "Great work Bumpkin! You've just discovered Crops!",
  "betty.market-intro.two":
    "You can harvest and sell them at my market to earn coins and grow your island.",

  "betty.market-intro.three":
    "You can harvest them and sell them at my market to earn coins and grow your farming empire",
  "betty.market-intro.four":
    "Harvest those Sunflowers and let's start your farming empire.",

  "firepit-intro.one": "Congratulations Bumpkin...You're a natural!",
  "firepit-intro.two":
    "If you want to level up & unlock new abilities, gather crops and visit my fire pit. I can cook some nutritious food for you.",
  "firepit.increasedXP": "Increased XP",
  "bruce-intro.headline": "Cooking Introduction",
  "bruce-intro.one": "I'm the owner of this lovely little bistro.",
  "bruce-intro.two":
    "Bring me resources and I will cook all the food you can eat!",
  "bruce-intro.three":
    "Howdy farmer! I can spot a hungry Bumpkin from a mile away.",
  "blacksmith-intro.headline": "Chop chop chop.",
  "blacksmith-intro.one":
    "I'm a master of tools, and with the right resources, I can craft anything you need...including more tools!",
  "pete.first-expansion.one":
    "Congratulations, Bumpkin! Your farm is growing faster than a beanstalk in a rainstorm!",
  "pete.first-expansion.two":
    "With each expansion, you'll find cool stuff like special resources, new trees, and more to collect!",
  "pete.first-expansion.three":
    "Keep an eye out for surprise gifts from the generous goblins as you explore-they're not just expert builders, but crafty secret givers!",
  "pete.first-expansion.four":
    "Congratulations, Bumpkin! Keep up the good work.",
  "pete.craftScarecrow.one": "Hmm, those crops are growing slow.",
  "pete.craftScarecrow.two":
    "Sunflower Land is full of magical items you can craft to enhance your farming abilities.",
  "pete.craftScarecrow.three":
    "Head over to the work bench and craft a scarecrow to speed up those Sunflowers.",
  "pete.levelthree.one": "Congratulations, your green thumb is truly shining!",
  "pete.levelthree.two":
    "It looks like you've got some deliveries in the Plaza to complete.",
  "pete.levelthree.three":
    "View your deliveries in the bottom left of the screen. Once you've gathered the resources, you can travel and deliver the items to the Bumpkins.",
  "pete.levelthree.four":
    "You can travel by clicking on the world icon in the bottom left.",
  "pete.help.zero": "Visit the fire pit, cook food and eat to level up.",
  "pete.pumpkinPlaza.one":
    "As you level up, you will unlock new areas to explore. First up is the Pumpkin Plaza....my home!",
  "pete.pumpkinPlaza.two":
    "Here you can complete deliveries for rewards, craft magical items & trade with other players.",
  "sunflowerLand.islandDescription":
    "Sunflower Land is filled with exciting islands where you can complete deliveries, craft rare NFTs and even dig for treasure!",
  "sunflowerLand.opportunitiesDescription":
    "Different locations bring different opportunities to spend your hard earned resources.",
  "sunflowerLand.returnHomeInstruction":
    "At any time click the travel button to return home.",
  "grimbly.expansion.one":
    "Greetings, budding farmer! I am Grimbly, a seasoned Goblin Builder.",
  "grimbly.expansion.two":
    "With the right materials and my ancient crafting skills, we can turn your island into a masterpiece.",
  "luna.portalNoAccess":
    "Hmmm, this portal just appeared out of nowhere. What could this mean?",
  "luna.portals": "Portals",
  "luna.rewards": "Rewards",
  "luna.travel": "Travel to these player built portals and earn rewards.",
  "pete.intro.one":
    "Howdy there, Bumpkin! Are you ready to get your hands dirty and explore the magical world of Sunflower Land?",
  "pete.intro.two":
    "Before you can embark on your adventure, you will need to grow your farm, cook food and level up!",
  "pete.intro.three":
    "To get started, you will want to chop down those trees and expand your island.",
  "pete.intro.four":
    "Before you can join the fun, you will need to grow your farm and gather some resources. You don't want to turn up empty handed!",
  "pete.intro.five":
    "To get started, you will want to chop down those trees and grow your island.",
  "mayor.plaza.changeNamePrompt":
    "Do you want to change your name? Unfortunately, I can't do that for you right now, the paperwork is too much for me to handle.",
  "mayor.plaza.intro":
    "Howdy fellow Bumpkin, it seems we haven't been introduced yet.",
  "mayor.plaza.role":
    "I'm the Mayor of this town! I'm in charge of making sure everyone is happy. I also make sure that everyone has a name!",
  "mayor.plaza.fixNamePrompt":
    "You don't have a name yet? Well, we can fix that! Do you want me to get the papers ready?",
  "mayor.plaza.enterUsernamePrompt": "Enter your username: ",
  "mayor.plaza.usernameValidation":
    "Please be aware that usernames must adhere to our",
  "mayor.plaza.niceToMeetYou": "Nice to meet you, !",
  "mayor.plaza.congratulations":
    "Congratulations , your paperwork is now complete. See you around!",
  "mayor.plaza.enjoyYourStay":
    "I hope you enjoy your stay in Sunflower Land! If you ever need me again, just come back to me!",
  "mayor.codeOfConduct": "Code of Conduct",
  "mayor.failureToComply":
    "Failure to comply may result in penalties, including possible account suspension",
  "mayor.paperworkComplete": "Your paperwork is now complete. See you around",
};

const cropBoomMessages: Record<CropBoomMessages, string> = {
  "crop.boom.welcome": "Welcome to Crop Boom",
  "crop.boom.reachOtherSide":
    "Reach the other side of the dangerous crop field to claim an Arcade Token",
  "crop.boom.bewareExplodingCrops":
    "Beware of exploding crops. If you step on these, you will start from the beginning",
  "crop.boom.newPuzzleDaily": "Each day a new puzzle will appear",
  "crop.boom.back.puzzle": "Come back later for a brand new puzzle!",
};

const cropFruitDescriptions: Record<CropFruitDescriptions, string> = {
  // Crops
  "description.sunflower": "A sunny flower",
  "description.potato": "Healthier than you might think.",
  "description.pumpkin": "There's more to pumpkin than pie.",
  "description.carrot": "They're good for your eyes!",
  "description.cabbage": "Once a luxury, now a food for many.",
  "description.beetroot": "Good for hangovers!",
  "description.cauliflower": "Excellent rice substitute!",
  "description.parsnip": "Not to be mistaken for carrots.",
  "description.eggplant": "Nature's edible work of art.",
  "description.corn":
    "Sun-kissed kernels of delight, nature's summer treasure.",
  "description.radish": "Takes time but is worth the wait!",
  "description.wheat": "The most harvested crop in the world.",
  "description.kale": "A Bumpkin Power Food!",
  "description.soybean": "A versatile legume!",

  // Greenhouse
  "description.grape": "A zesty and desired fruit.",
  "description.olive": "A luxury for advanced farmers.",
  "description.rice": "Perfect for rations!",

  // Fruits
  "description.blueberry": "A Goblin's weakness",
  "description.orange": "Vitamin C to keep your Bumpkin Healthy",
  "description.apple": "Perfect for homemade Apple Pie",
  "description.banana": "Oh banana!",

  // Exotic Crops
  "description.white.carrot": "A pale carrot with pale roots",
  "description.warty.goblin.pumpkin": "A whimsical, wart-covered pumpkin",
  "description.adirondack.potato": "A rugged spud, Adirondack style!",
  "description.purple.cauliflower": "A regal purple cauliflowser",
  "description.chiogga": "A rainbow beet!",
  "description.golden.helios": "Sun-kissed grandeur!",
  "description.black.magic": "A dark and mysterious flower!",

  //Flower Seed
  "description.sunpetal.seed": "A sunpetal seed",
  "description.bloom.seed": "A bloom seed",
  "description.lily.seed": "A lily seed",
};

const cropMachine: Record<CropMachine, string> = {
  "cropMachine.moreOilRequired": "More oil required",
  "cropMachine.oilTank": "Oil tank",
  "cropMachine.machineRuntime": "Machine runtime {{time}}",
  "cropMachine.growTimeRemaining": "Grow time remaining: {{time}}",
  "cropMachine.paused": "Paused",
  "cropMachine.readyToHarvest": "Ready to harvest",
  "cropMachine.boosted": "Boosted",
  "cropMachine.totalSeeds": "Total seeds planted: {{total}}",
  "cropMachine.totalCrops": "Total {{cropName}} yield: {{total}}",
  "cropMachine.harvest": "Harvest",
  "cropMachine.pickSeed": "Select a seed",
  "cropMachine.addSeeds": "Add {{seedType}}s",
  "cropMachine.availableInventory": "Available {{amount}}",
  "cropMachine.seeds": "Seeds: {{amount}}",
  "cropMachine.growTime": "Grow time: {{time}}",
  "cropMachine.addSeedPack": "Add seed pack",
  "cropMachine.notStartedYet": "Not started yet",
  "cropMachine.seedPacks": "Seed packs",
  "cropMachine.readyCropPacks": "Ready crop packs",
  "cropMachine.readyCropPacks.description":
    "You currently have {{totalReady}} crop packs to harvest! Click the the pack you want to harvest.",
  "cropMachine.harvestCropPack": "Harvest crop pack",
  "cropMachine.addOil": "Add oil",
  "cropMachine.oil.description":
    "Your machine needs oil to run. Every seed pack will require a certain amount of oil based on how long the crops take to grow. As you add oil you can see how long the machine will run when given that amount.",
  "cropMachine.maxRuntime": "Max runtime: {{time}}",
  "cropMachine.oilToAdd": "Oil to add: {{amount}}",
  "cropMachine.totalRuntime": "Total runtime: {{time}}",
  "cropMachine.running": "Crop Machine is running",
  "cropMachine.stopped": "Crop Machine has stopped",
  "cropMachine.idle": "Crop Machine is idle",
  "cropMachine.name": "Crop Machine",
};

const decorationDescriptions: Record<DecorationDescriptions, string> = {
  // Decorations
  "description.wicker.man":
    "Join hands and make a chain, the shadow of the Wicker Man will rise up again",
  "description.golden bonsai": "Goblins love bonsai too",
  "description.christmas.bear": "Santa's favorite",
  "description.war.skull": "Decorate the land with the bones of your enemies.",
  "description.war.tombstone": "R.I.P",
  "description.white.tulips": "Keep the smell of goblins away.",
  "description.potted.sunflower": "Brighten up your land.",
  "description.potted.potato": "Potato blood runs through your Bumpkin.",
  "description.potted.pumpkin": "Pumpkins for Bumpkins",
  "description.cactus": "Saves water and makes your farm look stunning!",
  "description.basic.bear":
    "A basic bear. Use this at Goblin Retreat to build a bear!",
  "description.bonnies.tombstone":
    "A spooky addition to any farm, Bonnie's Human Tombstone will send shivers down your spine.",
  "description.grubnashs.tombstone":
    "Add some mischievous charm with Grubnash's Goblin Tombstone.",
  "description.town.sign": "Show your farm ID with pride!",
  "description.dirt.path":
    "Keep your farmer boots clean with a well trodden path.",
  "description.bush": "What's lurking in the bushes?",
  "description.fence": "Add a touch of rustic charm to your farm.",
  "description.stone.fence": "Embrace the timeless elegance of a stone fence.",
  "description.pine.tree": "Standing tall and mighty, a needle-clad dream.",
  "description.shrub":
    "Enhance your in-game landscaping with a beautiful shrub",
  "description.field.maple":
    "A petite charmer that spreads its leaves like a delicate green canopy.",
  "description.red.maple": "Fiery foliage and a heart full of autumnal warmth.",
  "description.golden.maple":
    "Radiating brilliance with its shimmering golden leaves.",
  "description.crimson.cap":
    "A towering and vibrant mushroom, the Crimson Cap Giant Mushroom will bring life to your farm.",
  "description.toadstool.seat":
    "Sit back and relax on the whimsical Toadstool Mushroom Seat.",
  "description.chestnut.fungi.stool":
    "The Chestnut Fungi Stool is a sturdy and rustic addition to any farm.",
  "description.mahogany.cap":
    "Add a touch of sophistication with the Mahogany Cap Giant Mushroom.",
  "description.candles":
    "Enchant your farm with flickering spectral flames during Witches' Eve.",
  "description.haunted.stump":
    "Summon spirits and add eerie charm to your farm.",
  "description.spooky.tree": "A hauntingly fun addition to your farm's decor!",
  "description.observer":
    "A perpetually roving eyeball, always vigilant and ever-watchful!",
  "description.crow.rock": "A crow perched atop a mysterious rock.",
  "description.mini.corn.maze":
    "A memento of the beloved maze from the 2023 Witches' Eve season.",
  "description.lifeguard.ring": "Stay afloat with style, your seaside savior!",
  "description.surfboard": "Ride the waves of wonder, beach bliss on board!",
  "description.hideaway.herman":
    "Herman's here to hide, but always peeks for a party!",
  "description.shifty.sheldon":
    "Sheldon's sly, always scuttling to the next sandy surprise!",
  "description.tiki.torch": "Light the night, tropical vibes burning bright!",
  "description.beach.umbrella":
    "Shade, shelter, and seaside chic in one sunny setup!",
  "description.magic.bean": "What will grow?",
  "description.giant.potato": "A giant potato.",
  "description.giant.pumpkin": "A giant pumpkin.",
  "description.giant.cabbage": "A giant cabbage.",
  "description.chef.bear": "Every chef needs a helping hand",
  "description.construction.bear": "Always build in a bear market",
  "description.angel.bear": "Time to transcend peasant farming",
  "description.badass.bear": "Nothing stands in your way.",
  "description.bear.trap": "It's a trap!",
  "description.brilliant.bear": "Pure brilliance!",
  "description.classy.bear": "More SFL than you know what to do with it!",
  "description.farmer.bear": "Nothing quite like a hard day's work!",
  "description.rich.bear": "A prized possession",
  "description.sunflower.bear": "A Bear's cherished crop",
  "description.beta.bear": "A bear found through special testing events",
  "description.rainbow.artist.bear": "The owner is a beautiful bear artist!",
  "description.devil.bear":
    "Better the Devil you know than the Devil you don't",
  "description.collectible.bear": "A prized bear, still in mint condition!",
  "description.cyborg.bear": "Hasta la vista, bear",
  "description.christmas.snow.globe":
    "Swirl the snow and watch it come to life",
  "description.kraken.tentacle":
    "Dive into deep-sea mystery! This tentacle teases tales of ancient ocean legends and watery wonders.",
  "description.kraken.head":
    "Dive into deep-sea mystery! This head teases tales of ancient ocean legends and watery wonders.",
  "description.abandoned.bear": "A bear that was left behind on the island.",
  "description.turtle.bear": "Turtley enough for the turtle club.",
  "description.trex.skull": "A skull from a T-Rex! Amazing!",
  "description.sunflower.coin": "A coin made of sunflowers.",
  "description.skeleton.king.staff": "All hail the Skeleton King!",
  "description.lifeguard.bear": "Lifeguard Bear is here to save the day!",
  "description.snorkel.bear": "Snorkel Bear loves to swim.",
  "description.parasaur.skull": "A skull from a parasaur!",
  "description.goblin.bear": "A goblin bear. It's a bit scary.",
  "description.golden.bear.head": "Spooky, but cool.",
  "description.pirate.bear": "Argh, matey! Hug me!",
  "description.galleon": "A toy ship, still in pretty good nick.",
  "description.dinosaur.bone":
    "A Dinosaur Bone! What kind of creature was this?",
  "description.human.bear": "A human bear. Even scarier than a goblin bear.",
  "description.flamingo":
    "Represents a symbol of love's beauty standing tall and confident.",
  "description.blossom.tree":
    "Its delicate petals symbolizes the beauty and fragility of love.",
  "description.heart.balloons":
    "Use them as decorations for romantic occasions.",
  "description.whale.bear":
    "It has a round, furry body like a bear, but with the fins, tail, and blowhole of a whale.",
  "description.valentine.bear": "For those who love.",
  "description.easter.bear": "How can a Bunny lay eggs?",
  "description.easter.bush": "What is inside?",
  "description.giant.carrot":
    "A giant carrot stood, casting fun shadows, as rabbits gazed in wonder.",
  "description.beach.ball":
    "Bouncy ball brings beachy vibes, blows boredom away.",
  "description.palm.tree":
    "Tall, beachy, shady and chic, palm trees make waves sashay.",
  "description.battleCryDrum": "",
  "description.bullseyeBoard": "",
  "description.chessRug": "",
  "description.cluckapult": "",
  "description.goldenGallant": "",
  "description.goldenGarrison": "",
  "description.goldenGuardian": "",
  "description.noviceKnight": "",
  "description.regularPawn": "",
  "description.rookieRook": "",
  "description.silverSentinel": "",
  "description.silverSquire": "",
  "description.silverStallion": "",
  "description.traineeTarget": "",
  "description.twisterRug": "",

  //other
  "description.sunflower.amulet": "10% increased Sunflower yield.",
  "description.carrot.amulet": "Carrots grow 20% faster.",
  "description.beetroot.amulet": "20% increased Beetroot yield.",
  "description.green.amulet": "Chance for 10x crop yield.",
  "description.warrior.shirt": "A mark of a true warrior.",
  "description.warrior.pants": "Protect your thighs.",
  "description.warrior.helmet": "Immune to arrows.",
  "description.sunflower.shield":
    "A hero of Sunflower Land. Free Sunflower Seeds!",
  "description.skull.hat": "A rare hat for your Bumpkin.",
  "description.sunflower.statue": "A symbol of the holy token",
  "description.potato.statue": "The OG potato hustler flex",
  "description.christmas.tree": "Receive a Santa Airdrop on Christmas day",
  "description.gnome": "A lucky gnome",
  "description.homeless.tent": "A nice and cozy tent",
  "description.sunflower.tombstone": "In memory of Sunflower Farmers",
  "description.sunflower.rock": "The game that broke Polygon",
  "description.goblin.crown": "Summon the leader of the Goblins",
  "description.fountain": "A relaxing fountain for your farm",
  "description.nyon.statue": "In memory of Nyon Lann",
  "description.farmer.bath": "A beetroot scented bath for the farmers",
  "description.woody.Beaver": "Increase wood drops by 20%",
  "description.apprentice.beaver": "Trees recover 50% faster",
  "description.foreman.beaver": "Cut trees without axes",
  "description.egg.basket": "Gives access to the Easter Egg Hunt",
  "description.mysterious.head": "A statue thought to protect farmers",
  "description.tunnel.mole": "Gives a 25% increase to stone mines",
  "description.rocky.the.mole": "Gives a 25% increase to iron mines",
  "description.nugget": "Gives a 25% increase to gold mines",
  "description.rock.golem": "Gives a 10% chance to get 3x stone",
  "description.chef.apron": "Gives 20% extra SFL selling cakes",
  "description.chef.hat": "La couronne d'un boulanger légendaire !",
  "description.nancy": "Keeps a few crows away. Crops grow 15% faster",
  "description.scarecrow": "A goblin scarecrow. Yield 20% more crops",
  "description.kuebiko":
    "Even the shopkeeper is scared of this scarecrow. Seeds are free",
  "description.golden.cauliflower": "Doubles cauliflower yield",
  "description.mysterious.parsnip": "Parsnips grow 50% faster",
  "description.carrot.sword": "Increase chance of a mutant crop appearing",
  "description.chicken.coop": "Collect 2x the amount of eggs",
  "description.farm.cat": "Keep the rats away",
  "description.farm.dog": "Herd sheep with your farm dog",
  "description.gold.egg": "Feed chickens without needing wheat",
  "description.easter.bunny": "Earn 20% more Carrots",
  "description.rooster": "Doubles the chance of dropping a mutant chicken",
  "description.chicken": "Produces eggs. Requires wheat for feeding",
  "description.cow": "Produces milk. Requires wheat for feeding",
  "description.pig": "Produces manure. Requires wheat for feeding",
  "description.sheep": "Produces wool. Requires wheat for feeding",
  "description.basic.land": "A basic piece of land",
  "description.crop.plot": "An empty plot to plant crops on",
  "description.gold.rock": "A mineable rock to collect gold",
  "description.iron.rock": "A mineable rock to collect iron",
  "description.stone.rock": "A mineable rock to collect stone",
  "description.crimstone.rock": "A mineable rock to collect crimstone",
  "description.oil.reserve": "A source of oil",
  "description.flower.bed": "An empty plot to plant flowers on",
  "description.tree": "A choppable tree to collect wood",
  "description.fruit.patch": "An empty plot to plant fruit on",
  "description.boulder": "A mythical rock that can drop rare minerals",
  "description.catch.the.kraken.banner":
    "The Kraken is here! The mark of a participant in the Catch the Kraken Season.",
  "description.luminous.lantern":
    "A bright paper lantern that illuminates the way.",
  "description.radiance.lantern":
    "A radiant paper lantern that shines with a powerful light.",
  "description.ocean.lantern":
    "A wavy paper lantern that sways with the bobbing of the tide.",
  "description.solar.lantern":
    "Harnessing the vibrant essence of sunflowers, the Solar Lantern emanates a warm and radiant glow.",
  "description.aurora.lantern":
    "A paper lantern that transforms any space into a magical wonderland.",
  "description.dawn.umbrella":
    "Keep those Eggplants dry during those rainy days with the Dawn Umbrella Seat.",
  "description.eggplant.grill":
    "Get cooking with the Eggplant Grill, perfect for any outdoor meal.",
  "description.giant.dawn.mushroom":
    "The Giant Dawn Mushroom is a majestic and magical addition to any farm.",
  "description.shroom.glow":
    "Illuminate your farm with the enchanting glow of Shroom Glow.",
  "description.clementine":
    "The Clementine Gnome is a cheerful companion for your farming adventures.",
  "description.blossombeard":
    "The Blossombeard Gnome is a powerful companion for your farming adventures.",
  "description.desertgnome":
    "A gnome that can survive the harshest of conditions.",
  "description.cobalt":
    "The Cobalt Gnome adds a pop of color to your farm with his vibrant hat.",
  "description.hoot": "Hoot hoot! Have you solved my riddle yet?",
  "description.genie.bear": "Exactly what I wished for!",
  "description.betty.lantern":
    "It looks so real! I wonder how they crafted this.",
  "description.bumpkin.lantern":
    "Moving closer you hear murmurs of a living Bumpkin...creepy!",
  "description.eggplant.bear": "The mark of a generous eggplant whale.",
  "description.goblin.lantern": "A scary looking lantern",
  "description.dawn.flower":
    "Embrace the radiant beauty of the Dawn Flower as its delicate petals shimmer with the first light of day",
  "description.kernaldo.bonus": "+25% Corn Growth Speed",
  "description.white.crow": "A mysterious and ethereal white crow",
  "description.sapo.docuras": "A real treat!",
  "description.sapo.travessuras": "Oh oh...someone was naughty",
  "description.walrus":
    "With his trusty tusks and love for the deep, he'll ensure you reel in an extra fish every time",
  "description.alba":
    "With her keen instincts, she ensures you get a little extra splash in your catch. 50% chance of +1 Basic Fish!",
  "description.knowledge.crab":
    "The Knowledge Crab doubles your Sprout Mix effect, making your soil treasures as rich as sea plunder!",
  "description.anchor":
    "Drop anchor with this nautical gem, making every spot seaworthy and splash-tastically stylish!",
  "description.rubber.ducky":
    "Float on fun with this classic quacker, bringing bubbly joy to every corner!",
  "description.arcade.token":
    "A token earned from mini-games and adventures. Can be exchanged for rewards.",
  "description.bumpkin.nutcracker": "A festive decoration from 2023.",
  "description.festive.tree":
    "A festive tree available each holiday season. I wonder if it is big enough for santa to see?",
  "description.white.festive.fox":
    "The blessing of the White Fox inhabits the generous farms",
  "description.grinxs.hammer":
    "The magical hammer from Grinx, the legendary Goblin Blacksmith.",
  "description.angelfish":
    "The aquatic celestial beauty, adorned in a palette of vibrant hues.",
  "description.halibut":
    "The flat ocean floor dweller, a master of disguise in sandy camouflage.",
  "description.parrotFish":
    "A kaleidoscope of colors beneath the waves, this fish is nature's living artwork.",
  "description.Farmhand": "A helpful farmhand",
  "description.Beehive":
    "A bustling beehive, producing honey from actively growing flowers; 10% chance upon Honey harvest to summon a bee swarm which will pollinate all growing crops with a +0.2 boost!",
  // Flowers
  "description.red.pansy": "A red pansy.",
  "description.yellow.pansy": "A yellow pansy.",
  "description.purple.pansy": "A purple pansy.",
  "description.white.pansy": "A white pansy.",
  "description.blue.pansy": "A blue pansy.",

  "description.red.cosmos": "A red cosmos.",
  "description.yellow.cosmos": "A yellow cosmos.",
  "description.purple.cosmos": "A purple cosmos.",
  "description.white.cosmos": "A white cosmos.",
  "description.blue.cosmos": "A blue cosmos.",

  "description.red.balloon.flower": "A red balloon flower.",
  "description.yellow.balloon.flower": "A yellow balloon flower.",
  "description.purple.balloon.flower": "A purple balloon flower.",
  "description.white.balloon.flower": "A white balloon flower.",
  "description.blue.balloon.flower": "A blue balloon flower.",

  "description.red.carnation": "A red carnation.",
  "description.yellow.carnation": "A yellow carnation.",
  "description.purple.carnation": "A purple carnation.",
  "description.white.carnation": "A white carnation.",
  "description.blue.carnation": "A blue carnation.",

  "description.humming.bird":
    "A tiny jewel of the sky, the Humming Bird flits with colorful grace.",
  "description.queen.bee":
    "Majestic ruler of the hive, the Queen Bee buzzes with regal authority.",
  "description.flower.fox":
    "The Flower Fox, a playful creature adorned with petals, brings joy to the garden.",
  "description.hungry.caterpillar":
    "Munching through leaves, the Hungry Caterpillar is always ready for a tasty adventure.",
  "description.sunrise.bloom.rug":
    "Step onto the Sunrise Bloom Rug, where petals dance around a floral sunrise.",
  "description.gauchoRug": "A commerative rug to support South Brazil.",
  "description.blossom.royale":
    "The Blossom Royale, a giant flower in vibrant blue and pink, stands in majestic bloom.",
  "description.rainbow":
    "A cheerful Rainbow, bridging sky and earth with its colorful arch.",
  "description.enchanted.rose":
    "The Enchanted Rose, a symbol of eternal beauty, captivates with its magical allure.",
  "description.flower.cart":
    "The Flower Cart, brimming with blooms, is a mobile garden of floral delights.",
  "description.capybara":
    "The Capybara, a laid-back friend, enjoys lazy days by the water's edge.",
  "description.prism.petal":
    "Wow! What a beautiful flower! I think this one is worthy of placing on your farm.",
  "description.celestial.frostbloom":
    "Wow! What a beautiful flower! I think this one is worthy of placing on your farm.",
  "description.primula.enigma":
    "Wow! What a beautiful flower! I think this one is worthy of placing on your farm.",

  "description.red.daffodil": "A red daffodil.",
  "description.yellow.daffodil": "A yellow daffodil.",
  "description.purple.daffodil": "A purple daffodil.",
  "description.white.daffodil": "A white daffodil.",
  "description.blue.daffodil": "A blue daffodil.",

  "description.red.lotus": "A red lotus.",
  "description.yellow.lotus": "A yellow lotus.",
  "description.purple.lotus": "A purple lotus.",
  "description.white.lotus": "A white lotus.",
  "description.blue.lotus": "A blue lotus.",

  // Banners
  "description.goblin.war.banner":
    "A display of allegiance to the Goblin cause",
  "description.human.war.banner": "A display of allegiance to the Human cause",
  "description.earnAllianceBanner": "A special event banner",
  "description.sunflorian.faction.banner":
    "A display of allegiance to the Sunflorian Faction",
  "description.goblin.faction.banner":
    "A display of allegiance to the Goblin Faction",
  "description.nightshade.faction.banner":
    "A display of allegiance to the Nightshade Faction",
  "description.bumpkin.faction.banner":
    "A display of allegiance to the Bumpkin Faction",

  // Clash of Factions
  "description.turbo.sprout":
    "An engine that reduces the Green House's growth time by 50%.",
  "description.soybliss": "A unique soy creature that gives +1 Soybean yield.",
  "description.grape.granny":
    "Wise matriarch nurturing grapes to flourish with +1 yield.",
  "description.royal.throne": "A throne fit for the highest ranking farmer.",
  "description.lily.egg": "Tiny delight, grand beauty, endless wonder.",
  "description.goblet": "A goblet that holds the finest of wines.",
  "description.clock":
    "A Clock that keeps time with the gentle ticking of the seasons.",
  "description.fancy.rug": "A rug that brings a touch of elegance to any room.",
  "description.vinny":
    "Vinny, a friendly grapevine, is always ready for a chat.",
  "description.ricePanda": "A smart panda never forgets to water the rice.",
  "description.benevolenceFlag":
    "For players who have shown great benevolence by contributing significantly to the Bumpkins.",
  "description.devotionFlag":
    "For players who have shown unwavering devotion by donating extensively to the Nightshades, reflecting their cult-like dedication",
  "description.generosityFlag":
    "For players who have donated substantial resources to the Goblins.",
  "description.splendorFlag":
    "For players who have generously supported the Sunflorians, symbolizing their splendor in generosity.",
  "description.jellyLamp": "A lamp that brings a touch of luxury to any room.",
  "description.paintCan": "A paint can discovered in the festival of colors",
};

const defaultDialogue: Record<DefaultDialogue, string> = {
  "defaultDialogue.intro":
    "Hello, friend! I'm here to see if you have what I need.",
  "defaultDialogue.positiveDelivery":
    "Oh, fantastic! You've brought exactly what I need. Thank you!",
  "defaultDialogue.negativeDelivery":
    "Oh no! It seems you don't have what I need. No worries, though. Keep exploring, and we'll find another opportunity.",
  "defaultDialogue.noOrder": "No active order for me to fulfill right now.",
};

const delivery: Record<Delivery, string> = {
  "delivery.resource": "Want me to deliver resources?",
  "delivery.feed": "It ain't free, I've got a tribe to feed!",
  "delivery.fee":
    "I'll take 30% of the resources for the Goblin Community Treasury",
  "delivery.goblin.comm.treasury": "Goblin Community Treasury",
};

const deliveryHelp: Record<DeliveryHelp, string> = {
  "deliveryHelp.pumpkinSoup":
    "Gather ingredients and take a boat ride to Pumpkin Plaza to deliver orders to Bumpkins for a reward!",
  "deliveryHelp.hammer":
    "Expand your land to unlock more slots + quicker delivery orders",
  "deliveryHelp.axe":
    "Complete your chores and find Hank at the Plaza to claim your rewards.",
  "deliveryHelp.chest":
    "Build relationships with Bumpkins by completing multiple orders to unlock bonus rewards.",
};

const deliveryitem: Record<DeliveryItem, string> = {
  "deliveryitem.inventory": "Inventory:",
  "deliveryitem.itemsToDeliver": "Items to deliver: ",
  "deliveryitem.deliverToWallet": "Deliver to your wallet",
  "deliveryitem.viewOnOpenSea":
    "Once delivered, you will be able to view your items on OpenSea.",
  "deliveryitem.deliver": "Deliver",
};

const depositWallet: Record<DepositWallet, string> = {
  "deposit.errorLoadingBalances": "There was an error loading your balances.",
  "deposit.yourPersonalWallet": "Your Personal Wallet",
  "deposit.farmWillReceive": "Your farm will receive:",
  "deposit.depositDidNotArrive": "Deposit didn't arrive?",
  "deposit.goblinTaxInfo":
    "When players withdraw any SFL, a Goblin Tax is applied.",
  "deposit.sendToFarm": "Send to farm",
  "deposit.toDepositLevelUp": "To deposit items you must first level up",
  "deposit.level": "Level 3",
  "deposit.noSflOrCollectibles": "No SFL or Collectibles Found!",
  "deposit.farmAddress": "Farm address:",
  "question.depositSFLItems":
    "Would you like to deposit Sunflower Land collectibles, wearables or SFL?",
};

const detail: Record<Detail, string> = {
  "detail.how.item": "How to get this item?",
  "detail.Claim.Reward": "Claim reward",
  "detail.basket.empty": "Your basket is empty!",
  "detail.view.item": "View item on",
};

const discordBonus: Record<DiscordBonus, string> = {
  "discord.bonus.niceHat": "Wow, nice hat!",
  "discord.bonus.attentionEvents":
    "Don't forget to pay attention to special events and giveaways on Discord so you don't miss out.",
  "discord.bonus.bonusReward": "Bonus Reward",
  "discord.bonus.payAttention":
    "Pay attention to special events and giveaways on Discord so you don't miss out.",
  "discord.bonus.enjoyCommunity":
    "We hope you are enjoying being a part of our community!",
  "discord.bonus.communityInfo":
    "Did you know that our vibrant Discord community has more than 85,000 farmers?",
  "discord.bonus.farmingTips":
    "If you are looking for farming tips & tricks, it is the place to be.",
  "discord.bonus.freeGift":
    "The best part...everyone who joins gets a free gift!",
  "discord.bonus.connect": "Connect to Discord",
  "fontReward.bonus.claim":
    "Sunflower Land has had a makeover! Thanks for everyone involved in this beautiful update. For extra customisation, you can go to Settings > Appearance.",
  "fontReward.bonus.intro1": "Huh...something strange has happened.",
  "fontReward.bonus.intro2":
    "Sunflower Land feels different. I wonder what it is?",
  "fontReward.bonus.intro3":
    "Ah ah! It's the font - I can see everything clearly now!",
};

const donation: Record<Donation, string> = {
  "donation.one":
    "This was a community art initiative and donations are greatly appreciated!",
  "donation.rioGrandeDoSul.one":
    "Olá gente! South of Brazil has been devastated by recent flooding and we are gathering donations for food and water at the shelters.",
  "donation.rioGrandeDoSul.two":
    "Everyone who donates will receive a commemorative decoration.",
  "donation.matic": "Donation in MATIC",
  "donation.minimum": "Minimum 1 MATIC",
  "donation.airdrop": "Decorations will be airdropped after donations close.",
  "donation.specialEvent": "Special Donation Event",
};

const draftBid: Record<DraftBid, string> = {
  "draftBid.howAuctionWorks": "How does the auction work?",
  "draftBid.unsuccessfulParticipants":
    "Participants who are unsuccessful will be refunded their resources.",
  "draftBid.termsAndConditions": "Terms and conditions",
};

const errorAndAccess: Record<ErrorAndAccess, string> = {
  "errorAndAccess.blocked.betaTestersOnly":
    "Access limited to beta testers only",
  "errorAndAccess.denied.message": "You don't have access to the game yet.",
  "errorAndAccess.instructions.part1": "Make sure you have joined the ",
  "errorAndAccess.sflDiscord": "Sunflower Land Discord",
  "errorAndAccess.instructions.part2":
    ", go to the #verify channel and have the 'farmer' role.",
  "error.cannotPlaceInside": "Cannot place inside",
};

const errorTerms: Record<ErrorTerms, string> = {
  "error.betaTestersOnly": "Beta testers only!",
  "error.congestion.one":
    "We are trying our best but looks like Polygon is getting a lot of traffic or you have lost your connection.",
  "error.congestion.two":
    "If this error continues please try changing your Metamask RPC",
  "error.connection.one":
    "It looks like we were unable to complete this request.",
  "error.connection.two": "It may be a simple connection issue.",
  "error.connection.three": "You can click refresh to try again.",
  "error.connection.four":
    "If the issue remains, you can reach out for help by either contacting our support team or jumping over to our discord and asking our community",
  "error.diagnostic.info": "Diagnostic Information",
  "error.forbidden.goblinVillage":
    "You are not allowed to visit Goblin Village!",
  "error.multipleDevices.one": "Multiple devices open",
  "error.multipleDevices.two":
    "Please close any other browser tabs or devices that you are operating on.",
  "error.multipleWallets.one": "Multiple Wallets",
  "error.multipleWallets.two":
    "It looks like you have multiple wallets installed. This can cause unexpected behaviour. Try to disable all but one wallet.",
  "error.polygonRPC": "Please try again or check your Polygon RPC settings.",
  "error.toManyRequest.one": "Too many requests!",
  "error.toManyRequest.two":
    "Looks like you have been busy! Please try again later.",
  "error.Web3NotFound": "Web3 Not Found",
  "error.wentWrong": "Something went wrong!",
  "error.clock.not.synced": "Clock not in sync",
  "error.polygon.cant.connect": "Can't connect to Polygon",
  "error.composterNotExist": "Composter does not exist",
  "error.composterNotProducing": "Composter is not producing",
  "error.composterAlreadyDone": "Composter already done",
  "error.composterAlreadyBoosted": "Already boosted",
  "error.missingEggs": "Missing Eggs",
  "error.insufficientSFL": "Insufficient SFL",
  "error.dailyAttemptsExhausted": "Daily attempts exhausted",
  "error.missingRod": "Missing rod",
  "error.missingBait": "Missing ",
  "error.alreadyCasted": "Already casted",
  "error.unsupportedChum": "{{chum}} is not a supported chum",
  "error.insufficientChum": "Insufficient Chum",
  "error.alr.composter": "Composter is already composting",
  "error.no.alr.composter": "Composter is not ready for produce",
  "error.missing": "Missing requirements",
  "error.no.ready": "Compost is not ready",
  "error.noprod.composter": "Composter is not producing anything",
  "error.buildingNotExist": "Building does not exist",
  "error.buildingNotCooking": "Building is not cooking anything",
  "error.recipeNotReady": "Recipe is not ready",
  "error.npcsNotExist": "NPCs does not exist",
  "error.noDiscoveryAvailable": "No discovery available",
  "error.obsessionAlreadyCompleted": "This obsession is already completed",
  "error.collectibleNotInInventory": "You do not have the collectible required",
  "error.wearableNotInWardrobe": "You do not have the wearable required",
  "error.requiredBuildingNotExist": "Required building does not exist",
  "error.cookingInProgress": "Cooking already in progress",
  "error.insufficientIngredient": "Insufficient ingredient",
  "error.ClientRPC": "Client RPC Error",
  "error.walletInUse.one": "Wallet in Use",
  "error.walletInUse.two":
    "This wallet is already linked to a farm. Please use social login or another wallet.",
  "error.walletInUse.three": "Try another login method",
  "error.notEnoughOil": "Not enough oil",
  "error.oilCapacityExceeded": "Oil capacity exceeded",
};

const event: Record<Event, string> = {
  "event.christmas": "Christmas event!",
  "event.LunarNewYear": "Lunar New Year Event",
  "event.GasHero": "Gas Hero Event",
  "event.Easter": "Easter Event",
  "event.valentines.rewards": "Valentine Rewards",
};

const exoticShopItems: Record<ExoticShopItems, string> = {
  "exoticShopItems.line1":
    "Our bean shop is closing as our beans embark on a new journey with a mad scientist.",
  "exoticShopItems.line2":
    "Thank you for being part of our legume-loving community.",
  "exoticShopItems.line3": "Best regards,",
  "exoticShopItems.line4": "The Bean Team",
};

const factions: Record<Factions, string> = {
  "faction.join": "Join {{faction}}",
  "faction.description.sunflorians":
    "The Sunflorians are the royals that rule over Sunflower Land. Do you believe in power and rules?",
  "faction.description.bumpkins":
    "The Bumpkins are the farmers and all round lifeblood of Sunflower Land. Do you believe in hard work and community?",
  "faction.description.goblins":
    "The Goblins are the mischievous industrialists of Sunflower Land. Do you believe in progress and innovation?",
  "faction.description.nightshades":
    "The Nightshades are the mysterious and magical beings of Sunflower Land. Do you believe in magic and secrets?",
  "faction.countdown": "In {{timeUntil}} the faction battle begins.",
  "faction.join.confirm": "Do you want to join the {{faction}}?",
  "faction.cannot.change": "You cannot change factions.",
  "faction.joined.sunflorians.intro":
    "Greetings, noble Sunflorian! Join us as we rally our forces to claim supremacy and uphold the honor of our kingdom.",
  "faction.joined.bumpkins.intro":
    "Hey there, fellow Bumpkin! It's time to unite our farming brethren and show the other factions the power of hard work and unity.",
  "faction.joined.goblins.intro":
    "Salutations, crafty Goblin! With our minds sharp and our schemes devious, victory shall be ours in the battles ahead.",
  "faction.joined.nightshades.intro":
    "Greetings, enigmatic Nightshade! Together, we shall navigate the shadows and unveil the secrets that will lead us to victory in the battles ahead.",
  "faction.earn.emblems": "Earn Emblems",
  "faction.earn.emblems.time.left": "{{timeLeft}} left",
  "faction.emblems.tasks":
    "Earn faction points by making donations or completing seasonal deliveries to become eligible for the faction emblems airdrop.",
  "faction.view.leaderboard": "View Leaderboard",
  "faction.donation.request.message":
    "Greetings, {{faction}}! We are currently accepting donations of resources and SFL to help build up our faction. You will be rewarded faction points in return for your generosity.",
  "faction.donation.label": "{{faction}} Faction Donation",
  "faction.donation.sfl": "SFL donations (min 10)",
  "faction.donation.sfl.max.per.day": "{{donatedToday}}/500 max per day",
  "faction.donation.bulk.resources": "Bulk resource donations (min {{min}})",
  "faction.donation.bulk.resources.unlimited.per.day":
    "{{donatedToday}}/unlimited per day",
  "faction.donation.confirm":
    "Are you sure you want to donate the following for a total of {{factionPoints}} {{reward}}?",
  "faction.seasonal.delivery.start.at": "Seasonal Deliveries begin in {{days}}",
  "faction.points.with.number": "Faction points: {{points}}",
  "faction.points.title": "Faction Points",
  "faction.points.pledge.warning":
    "Pledge a faction to receive faction points!",
  "faction.emblemAirdrop": "Emblem Airdrop",
  "faction.emblemAirdrop.closes": "Ends: {{date}}",

  // Kingdom NPCs
  "faction.restrited.area":
    "Hold up farmer! This castle is off limits to you. Only the {{faction}} are allowed here.",
  "faction.not.pledged":
    "Hmm. It looks like you haven't pledged to a faction yet. Would you like to join the {{faction}}?",
  "faction.cost":
    "Show your allegiance and join the {{faction}}. Entry to the faction costs {{cost}} SFL.",
  "faction.pledge.reward":
    "In exchange, you will receive a {{banner}} and {{emblems}} emblems.",
  "faction.welcome": "Welcome to the {{faction}}!",
  "faction.greeting.goblins": "Hail the Goblin King!",
  "faction.greeting.sunflorians": "Our lineage will reign supreme!",
  "faction.greeting.bumpkins": "We must unite the farmers!",
  "faction.greeting.nightshades": "The shadows will guide us to victory!",

  // Faction Claim Emblems
  "faction.claimEmblems.alreadyClaimed":
    "Hey! We already rewarded you with your emblems!",
  "faction.claimEmblems.emblemsEarned": "Emblems Earned",
  "faction.claimEmblems.yourRank": "Your Rank",
  "faction.claimEmblems.yourPercentile": "Your Percentile",
  "faction.claimEmblems.yourEmblems": "Your Emblems",
  "faction.claimEmblems.noContribution":
    "You have not contributed any points to the faction.",
  "faction.claimEmblems.statistics": "Statistics",
  "faction.claimEmblems.thankYou":
    "Thank you {{player}}for your contributions to the {{Faction}}! Take these emblems, they represent your ownership of the faction!",
  "faction.claimEmblems.claimMessage":
    "You contributed {{count}} faction points. Your rank was {{rank}}. You in the top {{percentile}}% of {{Faction}}.",
  "faction.claimEmblems.claim": "Claim {{count}} Emblems",
  "faction.claimEmblems.congratulations":
    "Congratulations! You've received {{count}} emblems!",
  "faction.claimEmblems.comparison":
    "Here is how you compare to your faction members.",
  "faction.claimEmblems.totalMembers": "Total Faction Members",
  "faction.claimEmblems.totalEmblems": "Total Faction Emblems",
  "faction.claimEmblems.percentile": "Top {{percentile}}%",
  "faction.claimEmblems.travelNow": "Travel Now",
  "faction.claimEmblems.visitMe":
    "Visit me, {{recruiterName}}, in the Kingdom to claim your emblems.",

  "faction.kitchen.opensIn": "Opens in {{time}}",
  "faction.kitchen.notReady":
    "Ahhh I love your enthusiasm! However, the kitchen is not open yet. Please come back later.",
  "faction.kitchen.gatherResources":
    "So many new recruits... how will we feed them all! Can you help me gather some resources?",
  "faction.kitchen.preparing":
    "I'm still preparing my orders! Please come back in a few minutes.",
  "faction.kitchen.newRequests": "New requests: {{time}}",
  "faction.openingSoon":
    "Faction houses are opening on July 1st. Earn marks, compete for glory and claim rewards!",
  "faction.emblems": "Emblems",
  "faction.emblems.intro.one":
    "Wow, look at all those emblems. You are a true warrior!",
  "faction.emblems.intro.two":
    "On July 1st the Faction House will open. You will be able to complete tasks, earn marks and claim rewards.",
  "faction.emblems.intro.three":
    "The more emblems you have, the higher your rank and more marks you can earn.",
  "faction.tradeEmblems": "Trade emblems to climb the ranks and attain perks.",
  "faction.marksBoost":
    "Marks boost applies to faction activities coming July 1st.",
  "faction.shop.onlyFor": "{{faction}} only",
  "faction.shop.welcome":
    "Welcome to the Faction Shop! Use your marks to purchase temporary boosts, stylish wearables, and rare collectibles. Dive in and find your next great addition!",
};

const factionShopDescription: Record<FactionShopDescription, string> = {
  "description.factionShop.sunflorianThrone": "A throne fit for a Sunflorian.",
  "description.factionShop.nightshadeThrone": "A throne fit for a Nightshade.",
  "description.factionShop.goblinThrone": "A throne fit for a Goblin.",
  "description.factionShop.bumpkinThrone": "A throne fit for a Bumpkin.",
  "description.factionShop.goldenSunflorianEgg":
    "A jewelled egg created by the House of Sunflorian.",
  "description.factionShop.goblinMischiefEgg":
    "A jewelled egg created by the House of Goblin.",
  "description.factionShop.bumpkinCharmEgg":
    "A jewelled egg created by the House of Bumpkin.",
  "description.factionShop.nightshadeVeilEgg":
    "A jewelled egg created by the House of Nightshade.",
  "description.factionShop.emeraldGoblinGoblet": "An emerald encrusted goblet.",
  "description.factionShop.opalSunflorianGoblet": "An opal encrusted goblet.",
  "description.factionShop.sapphireBumpkinGoblet":
    "A sapphire encrusted goblet.",
  "description.factionShop.amethystNightshadeGoblet":
    "An amethyst encrusted goblet.",
  "description.factionShop.goldenFactionGoblet": "A golden goblet.",
  "description.factionShop.rubyFactionGoblet": "A ruby encrusted goblet.",
  "description.factionShop.sunflorianBunting":
    "Colorful flags celebrating the Sunflorian Faction.",
  "description.factionShop.nightshadeBunting":
    "Colorful flags celebrating the Nightshade faction.",
  "description.factionShop.goblinBunting":
    "Colorful flags celebrating the Goblin faction.",
  "description.factionShop.bumpkinBunting":
    "Colorful flags celebrating the Bumpkin faction.",
  "description.factionShop.sunflorianCandles":
    "Sunflorian Faction decorative candles.",
  "description.factionShop.nightshadeCandles":
    "Nightshade Faction decorative candles.",
  "description.factionShop.goblinCandles": "Goblin Faction decorative candles.",
  "description.factionShop.bumpkinCandles":
    "Bumpkin Faction decorative candles.",
  "description.factionShop.sunflorianLeftWallSconce":
    "Illuminate your living quarters with a Sunflorian Wall Sconce.",
  "description.factionShop.nightshadeLeftWallSconce":
    "Illuminate your living quarters with a Nightshade Wall Sconce.",
  "description.factionShop.goblinLeftWallSconce":
    "Illuminate your living quarters with a Goblin Wall Sconce.",
  "description.factionShop.bumpkinLeftWallSconce":
    "Illuminate your living quarters with a Bumpkin Wall Sconce.",
  "description.factionShop.sunflorianRightWallSconce":
    "Illuminate your living quarters with a Sunflorian Wall Sconce.",
  "description.factionShop.nightshadeRightWallSconce":
    "Illuminate your living quarters with a Nightshade Wall Sconce.",
  "description.factionShop.goblinRightWallSconce":
    "Illuminate your living quarters with a Goblin Wall Sconce.",
  "description.factionShop.bumpkinRightWallSconce":
    "Illuminate your living quarters with a Bumpkin Wall Sconce.",
  "description.factionShop.cookingBoost":
    "Reduces cooking time by 50% for 4 hours.",
  "description.factionShop.cropBoost":
    "Reduces crop growth time by 25% for 6 hours.",
  "description.factionShop.woodBoost":
    "Reduces tree recovery time by 25% for 4 hours.",
  "description.factionShop.mineralBoost":
    "Reduces mineral replenish cooldown by 50% for 3 hours.",
  "description.factionShop.fruitBoost":
    "Reduces fruit growth time by 25% for 6 hours.",
  "description.factionShop.flowerBoost":
    "Reduces flower growth time by 25% for 4 hours.",
  "description.factionShop.fishBoost":
    "Gives a 50% chance of +1 fish for 4 hours.",
  "description.factionShop.sunflorianFactionRug":
    "A magnificent rug made by the talented Sunflorian faction artisans.",
  "description.factionShop.nightshadeFactionRug":
    "A magnificent rug made by the talented Nightshade faction artisans.",
  "description.factionShop.goblinFactionRug":
    "A magnificent rug made by the talented Goblin faction artisans.",
  "description.factionShop.bumpkinFactionRug":
    "A magnificent rug made by the talented Bumpkin faction artisans.",
  "description.factionShop.goblinArmor":
    "Rugged and rowdy, Goblin-approved protection. Earn +20% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.goblinHelmet":
    "Strong and sturdy, crafted for fearless adventures in untamed lands. Earn +10% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.goblinPants":
    "These pants blend agility with Goblin craftsmanship for swift maneuvers. Earn +5% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.goblinSabatons":
    "Designed to outpace and outlast any foe. Earn +5% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.goblinAxe":
    "This axe is a testament to Goblin strength and unmatched battle prowess. Earn +10% marks",
  "description.factionShop.sunflorianArmor":
    "A shimmering protection that mirrors the sun's strength. Earn +20% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.sunflorianHelmet":
    "This helmet is a beacon of light and guardian against shadows. Earn +10% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.sunflorianPants":
    "Stride confidently in attire that captures the warmth and energy of all Sunflorians. Earn +5% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.sunflorianSabatons":
    "Each step taken in these shoes resonating with the power and vitality. Earn +5% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.sunflorianSword":
    "A blade ablaze with the courage and brilliance of the sun. Earn +10% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.bumpkinArmor":
    "A sturdy protection that honors tradition and strength. Earn +20% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.bumpkinHelmet":
    "Adorn your head with a symbol of rustic fortitude and unwavering resolve. Earn +10% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.bumpkinPants":
    "Navigate countryside and city alike blending comfort with the spirit of adventure. Earn +5% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.bumpkinSabatons":
    "Stampede through fields in this sturdy footwear echoing the resilience of rural life. Earn +5% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.bumpkinSword":
    "A weapon forged in fields and forests, ready for any challenge. Earn +10% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.nightshadeArmor":
    "An Armor, crafted for stealth and resilience in the shadows. Earn +20% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.nightshadeHelmet":
    "A strong helmet of secrecy and silent strength. Earn +10% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.nightshadePants":
    "These pants are blending agility with the mystery of the night. Earn +5% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.nightshadeSabatons":
    "Perfect design where every step is a whisper in the dark. Earn +5% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.nightshadeSword":
    "A blade that strikes with the precision of moonlit steel. Earn +10% marks when pledged to this faction. Multiples of this item do not stack.",
  "description.factionShop.knightGambit":
    "Don this hat and be ready to charge into adventure with a playful twist of strategy and style.",
  "description.factionShop.motley":
    "A riot of colors stitched together in merry defiance of fashion norms.",
  "description.factionShop.royalBraids": "A hairstyle fit for a royal.",
};

const festiveTree: Record<FestiveTree, string> = {
  "festivetree.greedyBumpkin": "Greedy Bumpkin Detected",
  "festivetree.alreadyGifted":
    "This tree has already been gifted. Wait until next Christmas for more festivities.",
  "festivetree.notFestiveSeason":
    "It is not the Festive season. Come back later.",
};

const fishDescriptions: Record<FishDescriptions, string> = {
  // Fish
  "description.anchovy.one":
    "The ocean's pocket-sized darting acrobat, always in a hurry!",
  "description.anchovy.two": "Tiny fish, big flavor!",
  "description.butterflyfish.one":
    "A fish with a fashion-forward sense, flaunting its vivid, stylish stripes.",
  "description.butterflyfish.two": "Swimming in colors and taste!",
  "description.blowfish.one":
    "The round, inflated comedian of the sea, guaranteed to bring a smile.",
  "description.blowfish.two": "Dine with danger, a spiky surprise!",
  "description.clownfish.one":
    "The underwater jester, sporting a tangerine tuxedo and a clownish charm.",
  "description.clownfish.two": "No jokes, just pure deliciousness!",
  "description.seabass.one":
    "Your 'not-so-exciting' friend with silver scales – a bassic catch!",
  "description.seabass.two": "The bass-ics of seaside cuisine!",
  "description.seahorse.one":
    "The ocean's slow-motion dancer, swaying gracefully in the aquatic ballet.",
  "description.seahorse.two": "Dainty, rare, and surprisingly tasty!",
  "description.horsemackerel.one":
    "A speedster with a shiny coat, always racing through the waves.",
  "description.horsemackerel.two": "Gallop through flavors with every bite!",
  "description.squid.one":
    "The deep-sea enigma with tentacles to tickle your curiosity.",
  "description.squid.two": "Ink your way to exquisite tastes!",
  "description.redsnapper.one":
    "A catch worth its weight in gold, dressed in fiery crimson.",
  "description.redsnapper.two": "Snap into rich, zesty oceans of flavor!",
  "description.morayeel.one":
    "A slinky, sinister lurker in the ocean's shadowy corners.",
  "description.morayeel.two": "Slippery, savory, and sensational!",
  "description.oliveflounder.one":
    "The seabed's master of disguise, always blending in with the crowd.",
  "description.oliveflounder.two": "Floundering in richness and taste!",
  "description.napoleanfish.one":
    "Meet the fish with the Napoleon complex – short, but regal!",
  "description.napoleanfish.two": "Conquer your hunger with this catch!",
  "description.surgeonfish.one":
    "The ocean's neon warrior, armed with a spine-sharp attitude.",
  "description.surgeonfish.two": "Operate on your taste buds with precision!",
  "description.zebraturkeyfish.one":
    "Stripes, spines, and a zesty disposition, this fish is a true showstopper!",
  "description.zebraturkeyfish.two":
    "Striped, spiky, and spectacularly scrumptious!",
  "description.ray.one":
    "The underwater glider, a serene winged beauty through the waves.",
  "description.ray.two": "Glide into a realm of rich flavors!",
  "description.hammerheadshark.one":
    "Meet the shark with a head for business, and a body for adventure!",
  "description.hammerheadshark.two": "A head-on collision with taste!",
  "description.tuna.one":
    "The ocean's muscle-bound sprinter, ready for a fin-tastic race!",
  "description.tuna.two": "A titan of taste in every slice!",
  "description.mahimahi.one":
    "A fish that believes in living life colorfully with fins of gold.",
  "description.mahimahi.two": "Double the name, double the deliciousness!",
  "description.bluemarlin.one":
    "An oceanic legend, the marlin with an attitude as deep as the sea.",
  "description.bluemarlin.two":
    "Spearhead your appetite with this royal catch!",
  "description.oarfish.one":
    "The long and the long of it – an enigmatic ocean wanderer.",
  "description.oarfish.two": "Row your way into legendary flavor!",
  "description.footballfish.one":
    "The MVP of the deep, a bioluminescent star that's ready to play!",
  "description.footballfish.two": "Score a touchdown in taste!",
  "description.sunfish.one":
    "The ocean's sunbather, basking in the spotlight with fins held high.",
  "description.sunfish.two": "Bask in the glow of its delectable flavor!",
  "description.coelacanth.one":
    "A prehistoric relic, with a taste for the past and the present.",
  "description.coelacanth.two":
    "Prehistoric flavor that's stood the test of time!",
  "description.whaleshark.one":
    "The gentle giant of the deep, sifting treasures from the ocean's buffet.",
  "description.whaleshark.two": "A mammoth meal for monumental cravings!",
  "description.barredknifejaw.one":
    "An oceanic outlaw with black-and-white stripes and a heart of gold.",
  "description.barredknifejaw.two":
    "Cut through the hunger with sharp flavors!",
  "description.sawshark.one":
    "With a saw-like snout, it's the ocean's carpenter, always cutting edge!",
  "description.sawshark.two": "Cutting-edge flavor from the deep!",
  "description.whiteshark.one":
    "The shark with a killer smile, ruling the seas with fin-tensity!",
  "description.whiteshark.two": "Dive into an ocean of thrilling taste!",

  // Marine Marvels
  "description.twilight.anglerfish":
    "A deep-sea angler with a built-in nightlight, guiding its way through darkness.",
  "description.starlight.tuna":
    "A tuna that outshines the stars, ready to light up your collection.",
  "description.radiant.ray":
    "A ray that prefers to glow in the dark, with a shimmering secret to share.",
  "description.phantom.barracuda":
    "An elusive and ghostly fish of the deep, hiding in the shadows.",
  "description.gilded.swordfish":
    "A swordfish with scales that sparkle like gold, the ultimate catch!",
  "description.crimson.carp": "A rare, vibrant jewel of the Spring waters.",
  "description.battle.fish": "The rare armored swimmer of faction season!",
};

const fishermanModal: Record<FishermanModal, string> = {
  "fishermanModal.attractFish": "Attract fish by throwing chum into the water.",
  "fishermanModal.fishBenefits":
    "Fish are great for eating, delivering and claiming rewards!",
  "fishermanModal.baitAndResources":
    "Bring me bait and resources and we'll reel in the rarest prizes that the ocean has to offer!",
  "fishermanModal.crazyHappening":
    "Wow, something crazy is happening......It is a fish frenzy!",
  "fishermanModal.fullMoon":
    "Wow, look at that full moon! I've heard rumours that during this time you have a chance to catch rare Marine Marvels.",
  "fishermanModal.bonusFish":
    "Hurry, you will get a bonus fish for each catch!",
  "fishermanModal.dailyLimitReached":
    "You have reached your daily fishing limit of {{limit}}",
  "fishermanModal.needCraftRod": "You must first craft a rod.",
  "fishermanModal.craft.beach": "Craft at Beach",
  "fishermanModal.zero.available": "0 available",
  "fishermanmodal.greeting":
    "Ahoy, fellow islanders! I'm {{name}}, your trusty island fisherman, and I've set my sights on a grand challenge - collecting every fish under the sun!",
};

const fishermanQuest: Record<FishermanQuest, string> = {
  "fishermanQuest.Ohno": "Oh no! It got away",
  "fishermanQuest.Newfish": "New fish",
};

const fishingChallengeIntro: Record<FishingChallengeIntro, string> = {
  "fishingChallengeIntro.powerfulCatch": "A powerful catch awaits you!",
  "fishingChallengeIntro.useStrength": "Use all your strength to reel it in.",
  "fishingChallengeIntro.stopGreenBar":
    "Stop the green bar on the fish to succeed.",
  "fishingChallengeIntro.beQuick":
    "Be quick - 3 missed attempts, and it escapes!",
};

const fishingGuide: Record<FishingGuide, string> = {
  "fishingGuide.catch.rod": "Craft a rod and gather bait to catch fish.",
  "fishingGuide.bait.earn":
    "Bait can be earned through composting or crafting lures.",
  "fishingGuide.eat.fish":
    "Eat fish to level up your Bumpkin or perform fish deliveries for rewards.",
  "fishingGuide.discover.fish":
    "Explore the waters to discover rare fish, complete missions, and unlock unique rewards within the Codex.",
  "fishingGuide.condition":
    "Keep track of the changing tide patterns; specific fish species are only available during certain conditions.",
  "fishingGuide.bait.chum":
    "Experiment with different types of bait and chum combinations to maximize your chances of catching various fish species.",
  "fishingGuide.legendery.fish":
    "Beware of legendary fish; they require exceptional skill and strength to catch.",
};

const fishingQuests: Record<FishingQuests, string> = {
  "quest.basic.fish": "Catch each basic fish",
  "quest.advanced.fish": "Catch each advanced fish",
  "quest.all.fish": "Discover each basic, advanced, and expert fish",
  "quest.300.fish": "Catch 300 fish",
  "quest.1500.fish": "Catch 1500 fish",
  "quest.marine.marvel": "Catch each Marine Marvel",
  "quest.5.fish": "Catch 5 of every fish",
  "quest.sunpetal.savant": "Discover 12 Sunpetal variants",
  "quest.bloom.bigshot": "Discover 12 Bloom variants",
  "quest.lily.luminary": "Discover 12 Lily variants",
};

const flowerBed: Record<FlowerBed, string> = {
  "flowerBedGuide.buySeeds": "Buy seeds from the Seed Shop.",
  "flowerBedGuide.crossbreedWithCrops":
    "Crossbreed with crops and other flowers to discover new flowers species.",
  "flowerBedGuide.collectAllSpecies":
    "Collect all species of flowers in the Codex!",
  "flowerBedGuide.beesProduceHoney":
    "Bees produce honey while flowers are growing.",
  "flowerBedGuide.fillUpBeehive":
    "Fill up a beehive completely and collect the honey for a chance of a bee swarm to appear.",
  "flowerBedGuide.beeSwarmsBoost":
    "Bee swarms give +0.2 boost to any planted crops.",
  "flowerBed.newSpecies.discovered":
    "By golly, you've discovered a new species of flower!",
  "flowerBedContent.select.combination": "Select your combination",
  "flowerBedContent.select.seed": "Select a seed",
  "flowerBedContent.select.crossbreed": "Select a crossbreed",
};

const flowerbreed: Record<Flowerbreed, string> = {
  "flower.breed.sunflower": "Bumpkin Botanists swear they're not flowers.",
  "flower.breed.cauliflower":
    "Not so sure what the Bumpkin Botanists say about this one.",
  "flower.breed.beetroot": "It has a beautiful purple color.",
  "flower.breed.parsnip":
    "A parsnip might be a good choice to cross breed with.",
  "flower.breed.eggplant":
    "Eggplant has a vibrant color, perhaps it will cross breed well.",
  "flower.breed.radish": "Wow, this radish is red!",
  "flower.breed.kale": "It's green, but not like the other greens.",
  "flower.breed.blueberry":
    "These blueberries are very ripe, I hope they don't stain.",
  "flower.breed.apple": "Crunchy apples!",
  "flower.breed.banana": "A bunch of bananas.",
  "flower.breed.redPansy": "A red pansy.",
  "flower.breed.yellowPansy": "A yellow pansy.",
  "flower.breed.purplePansy": "A purple pansy.",
  "flower.breed.whitePansy":
    "A white pansy. Devoid of color, I wonder if this is rare.",
  "flower.breed.bluePansy": "A blue pansy.",
  "flower.breed.redCosmos": "A red cosmos.",
  "flower.breed.yellowCosmos": "A yellow cosmos.",
  "flower.breed.purpleCosmos": "A purple cosmos.",
  "flower.breed.whiteCosmos": "A white cosmos.",
  "flower.breed.blueCosmos": "A blue cosmos. Very descriptive.",
  "flower.breed.prismPetal":
    "An extremely rare mutation, are you sure you want to cross breed this?",
  "flower.breed.redBalloonFlower":
    "Balloon flowers are very pretty. The red ones especially.",
  "flower.breed.yellowBalloonFlower": "A yellow balloon flower.",
  "flower.breed.purpleBalloonFlower": "A purple balloon flower.",
  "flower.breed.whiteBalloonFlower": "A white balloon flower. This is rare.",
  "flower.breed.blueBalloonFlower":
    "The most basic of balloon flowers. Nothing to brag about.",
  "flower.breed.redDaffodil": "A red daffoldil",
  "flower.breed.yellowDaffodil": "A yellow daffoldil",
  "flower.breed.purpleDaffodil": "A purple daffoldil",
  "flower.breed.whiteDaffodil": "A white daffoldil",
  "flower.breed.blueDaffodil": "A blue daffoldil",
  "flower.breed.celestialFrostbloom":
    "An extremely rare mutation. Are you sure you want to cross breed this?",
  "flower.breed.redCarnation":
    "Bumpkins value the red carnation for its rarity.",
  "flower.breed.yellowCarnation":
    "Bumpkins don't value the yellow carnation for.",
  "flower.breed.purpleCarnation":
    "Bumpkins value the purple carnation for its beauty.",
  "flower.breed.whiteCarnation":
    "Bumpkins value the yellow carnation for its simplicity.",
  "flower.breed.blueCarnation":
    "Bumpkins value the blue carnation for its ability to cross breed with Bloom seeds.",
  "flower.breed.redLotus": "A red lotus",
  "flower.breed.yellowLotus": "A yellow lotus",
  "flower.breed.purpleLotus": "A purple lotus",
  "flower.breed.whiteLotus": "A white lotus",
  "flower.breed.blueLotus": "A blue lotus",
  "flower.breed.primulaEnigma":
    "An extremely rare mutation, are you sure you want to cross breed this?",
};

const flowerShopTerms: Record<FlowerShopTerms, string> = {
  "flowerShop.desired.dreaming":
    "Oh, I've been dreaming of cultivating a {{desiredFlowerName}}!",
  "flowerShop.desired.delightful":
    "How delightful it would be to have a {{desiredFlowerName}}.",
  "flowerShop.desired.wonderful":
    "How wonderful it would be to have a {{desiredFlowerName}}!",
  "flowerShop.desired.setMyHeart":
    "I've set my heart on growing a {{desiredFlowerName}}.",
  "flowerShop.missingPages.alas":
    "But alas! I've misplaced the pages of my cross-breeding book! They must be in the plaza somewhere.",
  "flowerShop.missingPages.cantBelieve":
    "But I can't believe it, the pages with my best hybrid flower recipes are missing. They must be in the plaza somewhere.",
  "flowerShop.missingPages.inABind":
    "However, I'm in a bit of a bind – the pages containing my cross-breeding techniques seem to have disappeared. They must be in the plaza somewhere.",
  "flowerShop.missingPages.sadly":
    "Sadly, my cross-breeding notes are gone! I'm sure they're somewhere around here. They must be in the plaza somewhere.",
  "flowerShop.noFlowers.noTrade":
    "I'm sorry, I don't have any flowers to trade right now.",
  "flowerShop.do.have.trade":
    "Do you have a {{desiredFlower}} you would trade me?",
  "flowerShop.do.have.trade.one":
    "Do you have a {{desiredFlower}} you would be willing to trade?",
};

const foodDescriptions: Record<FoodDescriptions, string> = {
  // Fire Pit
  "description.pumpkin.soup": "A creamy soup that goblins love",
  "description.mashed.potato": "My life is potato.",
  "description.bumpkin.broth": "A nutritious broth to replenish your Bumpkin",
  "description.boiled.eggs": "Boiled Eggs are great for breakfast",
  "description.kale.stew": "A perfect Bumpkin Booster!",
  "description.mushroom.soup": "Warm your Bumpkin's soul.",
  "description.reindeer.carrot": "Rudolph can't stop eating them!",
  "description.kale.omelette": "A healthy breakfast",
  "description.cabbers.mash": "Cabbages and Mashed Potatoes",
  "description.popcorn": "Classic homegrown crunchy snack.",
  "description.gumbo":
    "A pot full of magic! Every spoonful's a Mardi Gras parade!",
  "description.rapidRoast": "For Bumpkins in a hurry...",
  "description.antipasto": "Assorted bites, perfect for sharing.",
  "description.carrotJuice": "Refreshing juice, pressed fresh by bumpkins.",
  "description.fishBasket": "Oceanic flavors, sourced by goblins.",
  "description.fishBurger": "Succulent burger, loved by seaside adventurers.",
  "description.fishnChips": "Classic seaside meal, loved by all.",
  "description.fishOmelette":
    "Flavorful omelette, filled with oceanic treasures.",
  "description.friedCalamari": "Crispy calamari rings, a delicious indulgence.",
  "description.friedTofu": "Golden fried tofu, crafted with care.",
  "description.grapeJuice": "Sweet and tangy juice, freshly squeezed.",
  "description.oceansOlive":
    "Delightful oceanic dish, a true Sunflorian delicacy.",
  "description.quickJuice": "Quick energy boost, a Goblin favourite.",
  "description.riceBun": "Soft and fluffy rice bun, a favorite.",
  "description.slowJuice": "Nutrient-rich juice, handcrafted by bumpkins.",
  "description.steamedRedRice":
    "Perfectly steamed red rice, a bumpkin's delight.",
  "description.sushiRoll": "Delicious sushi roll, skillfully prepared.",
  "description.theLot": "Flavorful fruit blend, refreshing and nutritious.",
  "description.tofuScramble":
    "Hearty scramble, packed with protein and flavor.",

  // Kitchen
  "description.beetrootBlaze": "A spicy beetroot-infused magic mushroom dish",
  "description.roast.veggies": "Even Goblins need to eat their veggies!",
  "description.bumpkin.salad": "Gotta keep your Bumpkin healthy!",
  "description.goblins.treat": "Goblins go crazy for this stuff!",
  "description.cauliflower.burger": "Calling all cauliflower lovers!",
  "description.club.sandwich":
    "Filled with Carrots and Roasted Sunflower Seeds",
  "description.mushroom.jacket.potatoes": "Cram them taters with what ya got!",
  "description.sunflower.crunch": "Crunchy goodness. Try not to burn it.",
  "description.bumpkin.roast": "A traditional Bumpkin dish",
  "description.goblin.brunch": "A traditional Goblin dish",
  "description.fruit.salad": "Fruit Salad, Yummy Yummy",
  "description.bumpkin.ganoush": "Zesty roasted eggplant spread.",
  "description.chowder":
    "Sailor's delight in a bowl! Dive in, there's treasure inside!",
  "description.pancakes": "A great start to a Bumpkins day",

  // Bakery
  "description.apple.pie": "Bumpkin Betty's famous recipe",
  "description.kale.mushroom.pie": "A traditional Sapphiron recipe",
  "description.cornbread": "Hearty golden farm-fresh bread.",
  "description.sunflower.cake": "Sunflower Cake",
  "description.potato.cake": "Potato Cake",
  "description.pumpkin.cake": "Pumpkin Cake",
  "description.carrot.cake": "Carrot Cake",
  "description.cabbage.cake": "Cabbage Cake",
  "description.beetroot.cake": "Beetroot Cake",
  "description.cauliflower.cake": "Cauliflower Cake",
  "description.parsnip.cake": "Parsnip Cake",
  "description.radish.cake": "Radish Cake",
  "description.wheat.cake": "Wheat Cake",
  "description.honey.cake": "A scrumptious cake!",
  "description.eggplant.cake": "Sweet farm-fresh dessert surprise.",
  "description.orange.cake": "Orange you glad we aren't cooking apples",
  "description.pirate.cake": "Great for Pirate themed birthday parties.",

  // Deli
  "description.fermented.shroomSyrup":
    "The essence of bees and enchanted fungi",
  "description.blueberry.jam": "Goblins will do anything for this jam",
  "description.fermented.carrots": "Got a surplus of carrots?",
  "description.sauerkraut": "No more boring Cabbage!",
  "description.fancy.fries": "Fantastic Fries",
  "description.fermented.fish":
    "Daring delicacy! Unleash the Viking within with every bite!",

  // Smoothie Shack
  "description.apple.juice": "A crisp refreshing beverage",
  "description.orange.juice": "OJ matches perfectly with a Club Sandwich",
  "description.purple.smoothie": "You can hardly taste the Cabbage",
  "description.power.smoothie":
    "Official drink of the Bumpkin Powerlifting Society",
  "description.bumpkin.detox": "Wash away the sins of last night",
  "description.banana.blast":
    "The ultimate fruity fuel for those with a peel for power!",

  // Unused foods
  "description.roasted.cauliflower": "A Goblin's favourite",
  "description.radish.pie": "Despised by humans, loved by goblins",
};

const gameDescriptions: Record<GameDescriptions, string> = {
  // Quest Items
  "description.goblin.key": "The Goblin Key",
  "description.sunflower.key": "The Sunflower Key",
  "description.ancient.goblin.sword": "An Ancient Goblin Sword",
  "description.ancient.human.warhammer": "An Ancient Human Warhammer",

  // Coupons
  "description.community.coin":
    "A valued coin that can be exchanged for rewards",
  "description.bud.seedling": "A seedling to be exchanged for a free Bud NFT",
  "description.gold.pass":
    "An exclusive pass that enables the holder to craft rare NFTs, trade, withdraw and access bonus content.",
  "description.rapid.growth": "Apply to a crop to grow twice as fast",
  "description.bud.ticket":
    "A guaranteed spot to mint a Bud at the Sunflower Land Buds NFT drop.",
  "description.potion.ticket":
    "A reward from the Potion House. Use this to buy items from Garth.",
  "description.trading.ticket": "Free Trades! Woohoo!",
  "description.block.buck": "A valuable token in Sunflower Land!",
  "description.beta.pass": "Gain early access to features for testing.",
  "description.war.bond": "A mark of a true warrior",
  "description.allegiance": "A display of allegiance",
  "description.jack.o.lantern": "A Halloween special event item",
  "description.golden.crop": "A shiny golden crop",
  "description.red.envelope": "Wow, you are lucky!",
  "description.love.letter": "Convey feelings of love",
  "description.solar.flare.ticket":
    "A ticket used during the Solar Flare Season",
  "description.dawn.breaker.ticket":
    "A ticket used during the Dawn Breaker Season",
  "description.crow.feather":
    "A ticket used during the Witches' Eve Ticket Season",
  "description.mermaid.scale":
    "A ticket used during the Catch the Kraken Season",
  "description.sunflower.supporter":
    "The mark of a true supporter of the game!",
  "description.arcade.coin":
    "A token earned from mini-games and adventures. Can be exchanged for rewards.",
  "description.farmhand.coupon":
    "A coupon to exchange for a farm hand of your choice.",
  "description.farmhand": "An adopted Bumpkin on your farm",
  "description.tulip.bulb": "A ticket used during the Spring Blossom",
  "description.treasure.key": "Visit the plaza to unlock your reward",
  "description.rare.key": "Visit the beach to unlock your reward",
  "description.luxury.key":
    "Visit the plaza near woodlands to unlock your reward",
  "description.prizeTicket":
    "A prized ticket. You can use it to enter the monthly goblin raffle.",
  "description.babyPanda":
    "A cute panda from the Gas Hero event. Double experience for beginners during March.",
  "description.baozi": "A delicious treat from the Lunar New Year event.",
  "description.communityEgg": "Wow, you must really care about the community!",
  "description.hungryHare":
    "This ravenous rabbit hops through your farm. A special event item from Easter 2024",
  "description.scroll": "A ticket used during the Clash of Factions Season",

  // Easter Items
  "description.egg.basket": "Easter Event",
  "description.blue.egg": "A blue easter egg",
  "description.orange.egg": "An orange easter egg",
  "description.green.egg": "A green easter egg",
  "description.yellow.egg": "A yellow easter egg",
  "description.red.egg": "A red easter egg",
  "description.pink.egg": "A pink easter egg",
  "description.purple.egg": "A purple easter egg",

  //Home
  "description.homeOwnerPainting": "A painting of the owner of this home.",

  // Emblems
  "description.goblin.emblem": "Show your allegiance to the Goblins",
  "description.sunflorian.emblem": "Show your allegiance to the Sunflorians",
  "description.bumpkin.emblem": "Show your allegiance to the Bumpkins",
  "description.nightshade.emblem": "Show your allegiance to the Nightshades",
  "description.faction.mark": "Use these in the faction shop",
};

const gameTerms: Record<GameTerms, string> = {
  "auction.winner": "Auction Winner!",
  "bumpkin.level": "Bumpkin level",
  bumpkinBuzz: "Mailbox",
  dailyLim: "Daily SFL Limit",
  "farm.banned": "This farm is banned",
  gobSwarm: "Goblin Swarm!",
  "granting.wish": "Granting your wish",
  "harvest.number": "{{minHarvest}}-{{maxHarvest}} harvests",
  "level.number": "Level {{level}}",
  "new.delivery.in": "New deliveries:",
  "new.delivery.levelup": "Level up to unlock more deliveries.",
  "no.sfl": "No SFL tokens found",
  opensea: "OpenSea",
  polygonscan: "PolygonScan",
  potions: "Potions",
  "proof.of.humanity": "Proof of Humanity",
  sflDiscord: "Sunflower Land Discord Server",
  "in.progress": "In Progress",
  "compost.complete": "Compost complete",
  "aoe.locked": "AOE Locked",
  sunflowerLandCodex: "Sunflower Land Codex",
  "visiting.farmId": "Visting #{{farmId}}",
  "stock.inStock": "{{stock}} in stock",
  "stock.left": "{{stock}} left",
};

const garbageCollector: Record<GarbageCollector, string> = {
  "garbageCollector.welcome": "Welcome to my humble shop.",
  "garbageCollector.description":
    "I'm the Garbage Trader, and I'll buy anything you've got - as long as it's garbage.",
};

const genieLamp: Record<GenieLamp, string> = {
  "genieLamp.ready.wish": "Ready to make a wish?",
  "genieLamp.cannotWithdraw":
    "You cannot withdraw the lamp once it has been rubbed",
};

const getContent: Record<GetContent, string> = {
  "getContent.error": "Error!",
  "getContent.joining": "Joining",
  "getContent.accessGranted":
    "You now have access. Go check out the channel in Discord",
  "getContent.connectToDiscord":
    "You must be connected to Discord to join a restricted channel.",
  "getContent.connect": "Connect",
  "getContent.getAccess": "Get access to restricted groups on Discord",
  "getContent.requires": "Requires",
  "getContent.join": "Join",
};

const getInputErrorMessage: Record<GetInputErrorMessage, string> = {
  "getInputErrorMessage.place.bid": "Are you sure you want to place this bid?",
  "getInputErrorMessage.cannot.bid":
    "Bids cannot be changed once they have been placed.",
};

const goblin_messages: Record<GOBLIN_MESSAGES, string> = {
  "goblinMessages.msg1": "Hey you! Human! Bring me some food or else...",
  "goblinMessages.msg2": "I'm always hungry, got any tasty treats for me?",
  "goblinMessages.msg3": "I don't care what it is, just give me food!",
  "goblinMessages.msg4":
    "If you don't give me something to eat, I might have to start nibbling on you.",
  "goblinMessages.msg5": "I heard human food is the best, bring me some!",
  "goblinMessages.msg6": "Hey, you got any food that won't make me sick?",
  "goblinMessages.msg7":
    "I'm getting a bit bored of eating the same thing, got anything different?",
  "goblinMessages.msg8": "I'm hungry for something new, got anything exotic?",
  "goblinMessages.msg9":
    "Hey there, got any snacks to spare? I promise I won't steal them...maybe.",
  "goblinMessages.msg10": "I don't care what it is, just give me food!",
};

const goldTooth: Record<GoldTooth, string> = {
  "goldTooth.intro.part1":
    "Arrr, me hearties! The treasure-diggin' area be teemin' with wealth and adventure, and it be openin' its gates soon for ye daring farmers!",
  "goldTooth.intro.part2":
    "Be ready to join me crew, for the hunt for riches begins shortly!",
};

const guideCompost: Record<GuideCompost, string> = {
  "guide.compost.addEggs.speed": "Add eggs to speed up production",
  "guide.compost.addEggs": "Add Eggs",
  "guide.compost.eggs": "Eggs",
  "guide.compost.cropGrowthTime": "-50% Crop Growth Time",
  "guide.compost.fishingBait": "Fishing bait",
  "guide.compost.placeCrops": "Place crops in the composter to feed the worms",
  "guide.compost.compostCycle":
    "A compost cycle produces multiple fertilisers which can be used to boost your crops & fruit",
  "guide.compost.yieldsWorms":
    "Each compost yields worms that can be used as bait for fishing",
  "guide.compost.useEggs":
    "Tired of waiting? Use Eggs to speed up the compost production",
  "guide.compost.addEggs.confirmation":
    "Are you sure you want to add {{noEggs}} Eggs to reduce compost production time by {{time}}?",
};

const guideTerms: Record<GuideTerms, string> = {
  "guide.intro":
    "From humble beginnings to expert farming, this guide has got you covered!",
  "gathering.guide.one":
    "To thrive in Sunflower Land, mastering the art of resource gathering is essential. Start by equipping the appropriate tools to collect different resources. Use the trusty Axe to chop down trees and acquire wood. To craft tools, visit the local workbench & exchange your Coins/resources for the desired tool.",
  "gathering.guide.two":
    "As you progress and gather sufficient resources, you'll unlock the ability to expand your territory. Expanding your land opens up new horizons in Sunflower Land. Land expansions reveal a treasure trove of resources, including fertile soil for planting crops, majestic trees, valuable stone deposits, precious iron veins, shimmering gold deposits, delightful fruit patches and much more.",
  "gathering.guide.three":
    "Remember, resource gathering and land expansion are the backbone of your farming journey. Embrace the challenges and rewards that come with each step, and watch your Sunflower Land flourish with bountiful resources and endless possibilities.",

  "crops.guide.one":
    "In Sunflower Land, crops play a crucial role in your journey towards prosperity. By planting and harvesting crops, you can earn Coins or utilize them to craft valuable recipes and items within the game.",
  "crops.guide.two":
    "To grow crops, you need to purchase the respective seeds from the in-game shop. Each crop has a different growth time, ranging from just 1 minute for Sunflowers to 36 hours for Kale. Once the crops are fully grown, you can harvest them and reap the rewards.",
  "crops.guide.three":
    "Remember, as you expand your land and progress in the game, more crops will become available, offering greater opportunities for earning Coins and exploring the vast potential of Sunflower Land's farming economy. So get your hands dirty, plant those seeds, and watch your crops flourish as you harvest your way to success!",

  "building.guide.one":
    "Explore the diverse range of buildings available as you progress in Sunflower Land. From hen houses to workshops and beyond, each structure brings unique advantages to your farm. Take advantage of these buildings to streamline your farming operations, increase productivity, and unlock new possibilities. Plan your layout carefully and enjoy the rewards that come with constructing a thriving farm in Sunflower Land.",
  "building.guide.two":
    "In Sunflower Land, buildings are the cornerstone of your farming journey. To access the buildings menu, click the Inventory icon and select the Buildings tab. Choose the desired structure and return to your farm screen. Find an open space, marked in green, and confirm the placement. Wait for the timer to complete, and your new building will be ready to use. Buildings provide various benefits and unlock exciting gameplay features. Strategically position them on your farm to maximize efficiency and watch as your farming empire grows and prospers.",

  "cooking.guide.one":
    "Cooking allows you to nourish your Bumpkin and help them gain valuable experience points (XP). By utilizing the crops you've harvested, you can prepare delicious food at different buildings dedicated to cooking.",
  "cooking.guide.two":
    "Starting with the Fire Pit, every farm has access to basic cooking facilities from the beginning. However, as you progress, you can unlock more advanced buildings such as the Kitchen, Bakery, Deli, and Smoothie Shack, each offering a wider variety of recipes and culinary delights.",
  "cooking.guide.three":
    "To cook, simply select a building and choose a recipe you wish to prepare. The recipe will provide details about the required ingredients, the XP gained upon consumption, and the preparation time. After initiating the cooking process, keep an eye on the timer to know when the food will be ready to collect.",
  "cooking.guide.four":
    "Once the food is ready, retrieve it from the building by clicking on it and moving it into your inventory. From there, you can interact with your Bumpkin NPC on the farm and feed them the prepared food, helping them gain XP and progress further in the game.",
  "cooking.guide.five":
    "Experiment with different recipes, unlock new buildings, and discover the joy of cooking as you nurture your Bumpkin and embark on a delicious culinary adventure in Sunflower Land.",

  "animals.guide.one":
    "Chickens in Sunflower Land are a delightful addition to your farm, serving as a source of eggs that can be used in various recipes and crafting. To start with chickens, you'll need to reach Bumpkin level 9 and build the Hen House. From there, you have the option to purchase chickens or place the ones you already have. Simply drag and drop them onto your farm, just like placing buildings. On a standard farm, every Hen House houses up to 10 chickens, and if you own the Chicken Coop SFT, this limit extends to 15.",
  "animals.guide.two":
    "Each chicken has an indicator above its head, displaying its current mood or needs. This can range from being hungry, tired, happy, or ready to hatch. To keep your chickens content and productive, feed them by selecting wheat from your inventory and interacting with the chicken. Feeding initiates the egg timer, which takes 48 hours for the eggs to be ready to hatch. Once the eggs are ready, visit your farm, check the icon above each chicken, and interact with them to find out the type of egg that has hatched. Occasionally, you may even discover rare mutant chickens, which offer special boosts such as faster egg production, increased yield, or reduced food consumption.",
  "animals.guide.three":
    "Nurturing your chickens and collecting their eggs adds a dynamic and rewarding element to your farm in Sunflower Land. Experiment with recipes, make use of the eggs in your crafting endeavors, and enjoy the surprises that come with rare mutant chickens. Build a thriving poultry operation and reap the benefits of your hard work as you embrace the charming world of chickens in Sunflower Land.",

  "crafting.guide.one":
    "In Sunflower Land, crafting NFTs is a crucial aspect of boosting your farming output and accelerating your progress. These special items provide various bonuses, such as crop growth boosts, cooking enhancements, and resource boosts, which can greatly expedite your journey. By maximizing your Coins you can craft tools, gather resources, and expand your land to further establish your farming empire.",
  "crafting.guide.two":
    "To begin crafting items, we'll visit Igor, a skilled craftsman in Sunfloria. After hopping on the boat and arriving at Sunfloria, head to the top of the island to have a conversation with Igor. He is currently offering a Basic Scarecrow, which boosts the speed of Sunflowers, Potatoes, and Pumpkins. This is an excellent deal that requires exchanging your resources for the scarecrow. Once obtained, return to your main island and enter design mode by clicking on the white hand icon in the top right corner of the game.",
  "crafting.guide.three":
    "In design mode, you can strategically place items and rearrange resources on your farm to optimize its layout and enhance its visual appeal. This step is crucial in maximizing the effectiveness of your crafted equipment. For example, place the Scarecrow over the plots you want to boost. Additionally, consider purchasing decorations to add charm and tidiness to your land.",
  "crafting.guide.four":
    "By crafting equipment and placing it strategically, you can amplify your farming abilities, create an island home to be proud of, and accelerate your progress in Sunflower Land.",

  "deliveries.guide.one":
    "Deliveries in Sunflower Land provide an exciting opportunity to help hungry Goblins and fellow Bumpkins while earning rewards. Every day you will be able to see all the orders you have by clicking on the delivery board on the bottom left of the screen. The orders have been placed by some local NPCs that can be found hanging around Pumpkin Plaza. To fulfill an order, you will need to take a boat ride to Pumpkin Plaza and look for the NPC expecting the delivery. Once you find them, click on them to deliver the order and receive your reward.",
  "deliveries.guide.two":
    "As a new player, you start with three order slots, but as you expand your farm, you will unlock additional slots, allowing advanced players to take on more orders. New orders come in every 24 hours, offering a range of tasks from farming produce to cooking food and gathering resources. Completing orders will earn you milestone bonuses, including Block Bucks, SFL, Coins, delicious cakes, and other rewards. The reward system is based on the difficulty of the request, so consider prioritizing orders that offer greater rewards to maximize your gains. Keep an eye on the board and challenge yourself with a variety of orders, leveling up and unlocking new buildings as needed to fulfill more demanding requests.",
  "deliveries.intro":
    "Travel to different islands and deliver goods to earn rewards.",
  "deliveries.new": "New delivery",
  "chores.intro":
    "Complete tasks around the farm to earn rewards from Bumpkins.",
  "scavenger.guide.one":
    "Scavenging in Sunflower Land offers exciting opportunities to uncover hidden treasures and gather valuable resources. The first aspect of scavenging is digging for treasure on Treasure Island, where you can become a pirate treasure hunter. By crafting a sand shovel and venturing to Treasure Island, you can dig in dark sandy areas to uncover a variety of treasures, including bounty, decorations, and even ancient SFTs with utility.",
  "scavenger.guide.two":
    "Another form of scavenging involves gathering wild mushrooms that appear spontaneously on your farm and surrounding islands. These mushrooms can be collected for free and used in recipes, quests, and crafting items. Keep an eye out for these mushrooms, as they replenish every 16 hours, with a maximum limit of 5 mushrooms on your farm. If your land is full, mushrooms will appear on the surrounding islands, ensuring you don't miss out on these valuable resources.",

  "fruit.guide.one":
    "Fruit plays a significant role in Sunflower Land as a valuable resource that can be sold for Coins or utilized in various recipes and crafting. Unlike crops, fruit patches have the unique ability to replenish multiple times after each harvest, providing a sustainable source of fruit for players.",
  "fruit.guide.two":
    "To plant fruit, you'll need to acquire larger fruit patches, which become available on the 9-10th expansion of your farm.",
  "fruit.guide.three":
    "By cultivating fruit and incorporating it into your farming strategies, you can maximize your profits, create delicious recipes, and unlock new possibilities in Sunflower Land.",

  "seasons.guide.one":
    "Seasons in Sunflower Land bring excitement and freshness to the game, offering players new challenges and opportunities. With the introduction of each season, players can look forward to a variety of new craftable items, limited edition decorations, mutant animals, and rare treasures. These seasonal changes create a dynamic and evolving gameplay experience, encouraging players to adapt their strategies and explore new possibilities on their farms. Additionally, seasonal tickets add a strategic element to the game, as players must decide how to allocate their tickets wisely, whether it's collecting rare items, opting for higher supply decorations, or exchanging tickets for SFL. The seasonal mechanic keeps the game engaging and ensures that there's always something to look forward to in Sunflower Land.",
  "seasons.guide.two":
    "The availability of seasonal items at the Goblin Blacksmith adds another layer of excitement. Players must gather the required resources and seasonal tickets to craft these limited-supply items, creating a sense of competition and urgency. Planning ahead and strategizing become crucial as players aim to secure their desired items before the supply runs out. Moreover, the option to swap seasonal tickets for Coins provides flexibility and allows players to make choices that align with their specific gameplay goals. With each season's unique offerings and the anticipation of surprise events, Sunflower Land keeps players engaged and entertained throughout the year, fostering a vibrant and ever-evolving farming experience.",
  "pete.teaser.one": "Chop the trees",
  "pete.teaser.three": "Harvest the Sunflowers",
  "pete.teaser.four": "Sell the Sunflowers",
  "pete.teaser.five": "Buy Seeds",
  "pete.teaser.six": "Plant Seeds",
  "pete.teaser.seven": "Craft a Scarecrow",
  "pete.teaser.eight": "Cook food and level up",
};

const halveningCountdown: Record<HalveningCountdown, string> = {
  "halveningCountdown.approaching": "The Halvening is Approaching!",
  "halveningCountdown.description":
    "At the Halvening, all prices of crops & certain resources are halved. This makes it more difficult to attain SFL.",
  "halveningCountdown.preparation": "Make sure you are prepared!",
  "halveningCountdown.title": "Halvening",
};

const harvestBeeHive: Record<HarvestBeeHive, string> = {
  "harvestBeeHive.notPlaced": "This beehive is not placed.",
  "harvestBeeHive.noHoney": "This beehive has no honey.",
};

const harvestflower: Record<Harvestflower, string> = {
  "harvestflower.noFlowerBed": "Flower bed does not exist",
  "harvestflower.noFlower": "Flower bed does not have a flower",
  "harvestflower.notReady": "Flower is not ready to harvest",
  "harvestflower.alr.plant": "Flower is already planted",
};

const hayseedHankPlaza: Record<HayseedHankPlaza, string> = {
  "hayseedHankPlaza.cannotCompleteChore": "Cannot complete this chore?",
  "hayseedHankPlaza.skipChore": "Skip chore",
  "hayseedHankPlaza.canSkipIn": "You can skip this chore in",
  "hayseedHankPlaza.wellDone": "Well done",
  "hayseedHankPlaza.lendAHand": "Lend a hand?",
};

const hayseedHankV2: Record<HayseedHankV2, string> = {
  "hayseedHankv2.dialog1":
    "Well, howdy there, young whippersnappers! I'm Hayseed Hank, a seasoned ol' Bumpkin farmer, tending to the land like in the good ol' days.",
  "hayseedHankv2.dialog2":
    "However, my bones ain't what they used to be. If you can help me with my daily chores, I will reward you with {{seasonalTicket}}.",
  "hayseedHankv2.action": "Let's do it",
  "hayseedHankv2.title": "Hank's Daily Chores",
  "hayseedHankv2.newChoresAvailable": "New chores:",
  "hayseedHankv2.skipChores": "You can skip chores each new day",
  "hayseedHankv2.greeting":
    "Well, howdy there, young whippersnappers! I'm Hayseed Hank...",
};

const heliosSunflower: Record<HeliosSunflower, string> = {
  "heliosSunflower.title": "Clytie the Sunflower",
  "heliosSunflower.description":
    "Only the true saviour can return and harvest this Sunflower.",
  "confirmation.craft": "Are you sure you want to craft {{item}}?",
};

const helper: Record<Helper, string> = {
  "helper.highScore1": "Incredible! You're mastering the art of potion-making!",
  "helper.highScore2":
    "Magnificent! Your skills are bringing the plant to life!",
  "helper.highScore3": "Astounding! The plant is in awe of your expertise!",
  "helper.midScore1":
    "Almost! Your potion has had a positive impact on your plant!",
  "helper.midScore2":
    "Keep it up! The plant is starting to thrive on your skillful concoction!",
  "helper.midScore3":
    "Nice one! Your potion is starting to work its magic on the plant!",
  "helper.lowScore1": "Getting there. The plant is showing signs of happiness.",
  "helper.lowScore2":
    "Nice effort. Your potion has brought a bit of joy to the plant.",
  "helper.lowScore3":
    "Not bad. Your skills are starting to make a good impression on the plant.",
  "helper.veryLowScore1":
    "Keep trying. The plant recognizes your determination.",
  "helper.veryLowScore2": "You're getting there. The plant sees your progress.",
  "helper.veryLowScore3": "Not quite, but the plant senses your commitment.",
  "helper.noScore1":
    "Oh no! The plant despises something in your potion! Try again.",
  "helper.noScore2":
    "Oops! The plant recoils from something in your potion! Try again.",
  "helper.noScore3":
    "Uh-oh! Something in your potion is a total flop with the plant! Try again.",
};

const henHouseTerms: Record<HenHouseTerms, string> = {
  "henHouse.chickens": "Chickens",
  "henHouse.text.one": "Feed wheat and collect eggs",
  "henHouse.text.two": "Lazy Chicken",
  "henHouse.text.three": "Put your chicken to work to start collecting eggs!",
  "henHouse.text.four": "Working Chicken",
  "henHouse.text.five": "Already placed and working hard!",
  "henHouse.text.six": "Build an extra Hen House to farm more chickens",
};

const howToFarm: Record<HowToFarm, string> = {
  "howToFarm.title": "How to Farm?",
  "howToFarm.stepOne": "1.Harvest crops when they are ready",
  "howToFarm.stepTwo": "2.Visit the town & click on the shop",
  "howToFarm.stepThree": "3.Sell crops at the shop for Coins",
  "howToFarm.stepFour": "4.Buy seeds using your Coins",
  "howToFarm.stepFive": "5. Plant seeds and wait",
};

const howToSync: Record<HowToSync, string> = {
  "howToSync.title": "How to sync?",
  "howToSync.description":
    "All of your progress is saved on our game server. You will need to sync on chain when you want to move your tokens, NFTs and resources onto Polygon.",
  "howToSync.stepOne": "1. Open the menu",
  "howToSync.stepTwo": "2. Click 'Sync on chain'",
};

const howToUpgrade: Record<HowToUpgrade, string> = {
  "howToUpgrade.title": "How to upgrade?",
  "howToUpgrade.stepOne": "1. Talk to a Goblin blocking the fields",
  "howToUpgrade.stepTwo": "2.Visit the town & click on the kitchen",
  "howToUpgrade.stepThree": "3. Craft the food that the goblin wants",
  "howToUpgrade.stepFour": "4. Voila! Enjoy your new fields and crops",
};

const interactableModals: Record<InteractableModals, string> = {
  "interactableModals.returnhome.message": "Would you like to return home?",
  "interactableModals.fatChicken.message":
    "Why won't these Bumpkins leave me alone, I just want to relax.",
  "interactableModals.lazyBud.message": "Eeeep! So tired.....",
  "interactableModals.bud.message":
    "Hmmm, I better leave that bud alone. I'm sure it's owner is looking for it",
  "interactableModals.walrus.message":
    "Arrr arr arrr! The fish shop ain't open 'til I get my fish.",
  "interactableModals.plazaBlueBook.message1":
    "To summon the seekers, we must gather the essence of the land - pumpkins, nurtured by the earth, and eggs, the promise of new beginnings. ",
  "interactableModals.plazaBlueBook.message2":
    "As dusk falls and the moon casts its silvery glow, we offer our humble gifts, hoping to awaken their watchful eyes once more.",
  "interactableModals.plazaOrangeBook.message1":
    "Our brave defenders fought valiantly, but alas, we lost the great war, and the Moonseekers drove us from our homeland. Yet, we hold onto hope, for one day we shall reclaim what was once ours.",
  "interactableModals.plazaOrangeBook.message2":
    "Until then, we will keep Sunflower Land alive in our hearts and dreams, waiting for the day of our triumphant return",
  "interactableModals.beachGreenBook.message1":
    "When you're after those coveted Red Snappers, try an unexpected twist",
  "interactableModals.beachGreenBook.message2":
    "Use Apples with Red Wiggler Bait, and watch those crimson beauties practically leap into your net.",
  "interactableModals.beachBlueBook.message1":
    "Don't tell Shelly, but I've been trying to bring Saw Sharks to the beach!",
  "interactableModals.beachBlueBook.message2":
    "I've been experimenting with different chums lately, but the only one that seems to work is Red Snapper.",
  "interactableModals.beachBlueBook.message3":
    "These oceanic hunters can smell a Red Snapper feast from miles away, so don't be surprised if they come charging. ",
  "interactableModals.beachOrangeBook.message1":
    "A radiant fin appeared on the surface, I couldn't believe my eyes!",
  "interactableModals.beachOrangeBook.message2":
    "Luckily Tango was with me, he must be my good luck charm.",
  "interactableModals.plazaGreenBook.message1":
    "The Bumpkins control these islands, leaving us goblins with scarce work and even scarcer food.",
  "interactableModals.plazaGreenBook.message2":
    "We strive for equality, a place to call our own, where we can live and thrive",
  "interactableModals.fanArt.winner": "Fan art winner",
  "interactableModals.fanArt1.message":
    "Congratulations Palisman, the winner of the first Fan Art competition",
  "interactableModals.fanArt2.message":
    "Congratulations Vergelsxtn, the winner of the Dawn Breaker Party Fan Art competition",
  "interactableModals.fanArt2.linkLabel": "View more",
  "interactableModals.fanArt3.message":
    "The perfect place to for a beautiful painting. I wonder what they will put here next...",
  "interactableModals.clubhouseReward.message1":
    "Patience buddy, rewards are coming...",
  "interactableModals.clubhouseReward.message2":
    "Join #bud-clubhouse on Discord for latest updates.",
  "interactableModals.plazaStatue.message":
    "In honor of Bumpkin Braveheart, the steadfast farmer who rallied our town against the Goblin horde during the dark days of the ancient war.",
  "interactableModals.dawnBook1.message1":
    "For centuries our family has protected Dawn Breaker Island. As the island's bell ringer, we've warned of dangers from the North, even as shadowy creatures threaten our home.",
  "interactableModals.dawnBook1.message2":
    "Our family stands as the first line of defence against the darkness spreading from the North, but alas, our sacrifices go unnoticed.",
  "interactableModals.dawnBook1.message3":
    "Will the day come when our devotion is acknowledged?",
  "interactableModals.dawnBook2.message1":
    "Eggplants, they're more than they appear. Despite their dark exterior that attracts shadowy creatures, they bring light to our dishes.",
  "interactableModals.dawnBook2.message2":
    "Grilled or mashed into a Bumpkin ganoush, their versatility is unmatched. The nightshade vegetables are a symbol of our resilience in the face of adversity.",
  "interactableModals.dawnBook3.message1":
    "Dear diary, the Bumpkins' arrival has brought a ray of hope.",
  "interactableModals.dawnBook3.message2":
    "I dream of the day I can steer my own boat to Sunfloria, the land where adventurers and travelers congregate.",
  "interactableModals.dawnBook3.message3":
    "I've heard whispers about the Bumpkins' special preparations there - a beacon of promise in these challenging times.",
  "interactableModals.dawnBook4.message1":
    "The gnomes, their allure was too potent to resist.",
  "interactableModals.dawnBook4.message2":
    "The Witch's instructions echoed in my mind - 'Align the three, and power shall be yours.'",
  "interactableModals.dawnBook4.message3":
    "Alas, even the eggplant soldiers couldn't guard against the temptation. But I will not falter. One day, I will claim the power I rightfully deserve?.",
  "interactableModals.timmyHome.message":
    "Oh, gee, I really want you to explore my house, but Mom told me not to talk to strangers, maybe it's for the best.",
  "interactableModals.windmill.message":
    "Ah, my windmill is under repair, can't have anyone snooping around while I fix it up, come back later.",
  "interactableModals.igorHome.message":
    "Get lost! I'm in no mood for visitors, especially nosy ones like you!",
  "interactableModals.potionHouse.message1":
    "Watch out friend, the crazy scientist lives in there!",
  "interactableModals.potionHouse.message2":
    "Rumour has it they are searching for Bumpkin apprentices to grow mutant crops with them.",
  "interactableModals.guildHouse.message":
    "Hold on Bumpkin! You need a Bud if you want to enter the Guild House.",
  "interactableModals.guildHouse.budsCollection": "Opensea",
  "interactableModals.bettyHome.message":
    "Oh, sweetie, as much as I love my crops, my house is a private space, not open to visitors right now.",
  "interactableModals.bertHome.message":
    "Intruders! They must be after my collection of rare items and secrets, I can't let them in!",
  "interactableModals.beach.message1": "Have you been to the beach?",
  "interactableModals.beach.message2":
    "Rumour has that it is filled with luxurious treasures! Unfortunately it is under construction.",
  "interactableModals.castle.message":
    "Hold it there peasant! There is no way I'm letting you visit the castle",
  "interactableModals.woodlands.message":
    "Are you travelling to the woodlands? Make sure you pick up some delicious mushrooms!",
  "interactableModals.port.message":
    "Hold it there! The Goblin's are still building the port. It will be ready for travel and fishing soon.",
};

const introPage: Record<IntroPage, string> = {
  "introPage.welcome": "Welcome to the Potion Room, my curious apprentice!",
  "introPage.description":
    "I am Mad Scientist Bumpkin, here to assist you on this magical quest into the world of botanic sorcery. Get ready to uncover the secrets of Sunflower Land! Each attempt will cost 320 coins.",
  "introPage.mission":
    "Your mission: decipher the right combination of potions within the enchanted grid.",
  "introPage.tip":
    "Remember, the more correct potions you select, the happier the plant will be, increasing your chances of rare drops!",
  "introPage.chaosPotion": "Beware the 'chaos' potion, it shakes things up!",
  "introPage.playButton": "Let's play",
};

const islandName: Record<IslandName, string> = {
  "island.home": "Home",
  "island.pumpkin.plaza": "Pumpkin Plaza",
  "island.beach": "Beach",
  "island.kingdom": "Kingdom",
  "island.woodlands": "Woodlands",
  "island.helios": "Helios",
  "island.goblin.retreat": "Goblin Retreat",
};

const islandNotFound: Record<IslandNotFound, string> = {
  "islandNotFound.message": "You have landed in the middle of nowhere!",
  "islandNotFound.takeMeHome": "Take me home",
};

const islandupgrade: Record<Islandupgrade, string> = {
  "islandupgrade.confirmUpgrade":
    "Are you sure you want to upgrade to a new island.",
  "islandupgrade.warning":
    "Make sure you do not have any crops, fruit, buildings, chickens, mushrooms, crimstone, flowers or honey in progress. These will not be able to be harvested and will be returned to your inventory. Sunstones will remain placed on your land.",
  "islandupgrade.upgradeIsland": "Upgrade Island",
  "islandupgrade.newOpportunities":
    "An exotic island awaits you with new resources and opportunities to grow your farm.",
  "islandupgrade.confirmation":
    "Would you like to upgrade? You will start on a small island with all of your items.",
  "islandupgrade.locked": "Locked",
  "islandupgrade.exploring": "Exploring",
  "islandupgrade.welcomePetalParadise": "Welcome to Petal Paradise!",
  "islandupgrade.welcomeDesertIsland": "Welcome to the Desert!",
  "islandupgrade.itemsReturned":
    "Your items have been safely returned to your inventory.",
  "islandupgrade.notReadyExpandMore":
    "You are not ready. Expand {{remainingExpansions}} more times",
  "islandupgrade.exoticResourcesDescription":
    "This area of Sunflower Land is known for its exotic resources. Expand your land to discover fruit, flowers, bee hives & rare minerals!",
  "islandupgrade.desertResourcesDescription":
    "The harsh desert environment requires new technology to survive. Expand your land to discover new buildings and what's inside!",
  "islandupgrade.requiredIsland": "Unlocks at {{islandType}}",
  "islandupgrade.otherIsland": "{{island}} Island",
};

const landscapeTerms: Record<LandscapeTerms, string> = {
  "landscape.intro.one": "Design your dream island!",
  "landscape.intro.two":
    "In design mode you can hold, drag & move items around.",
  "landscape.intro.three": "Craft rare decorations",
  "landscape.intro.four": "Place collectibles from your chest",
  "landscape.expansion.one":
    "Howdy Bumpkin, would you like to expand your land? You can discover new resources, crops, and rewards.",
  "landscape.expansion.two": "More expansions will be available soon...",
  "landscape.timerPopover": "Next Expansion",
  "landscape.dragMe": "Drag me",
  "landscape.expansion.date":
    "More expansions will be available on the 7th February.",
  "landscape.great.work": "Great work Bumpkin!",
};

const letsGo: Record<LetsGo, string> = {
  "letsGo.title": "Time to play!",
  "letsGo.description":
    "Thanks for playing! We appreciate your support of Sunflower Land.",
  "letsGo.readMore": "You can read more about the game in the ", // To figure out how to interpolate links
  "letsGo.officialDocs": "official docs",
};

const levelUpMessages: Record<LevelUpMessages, string> = {
  "levelUp.2":
    "Yeehaw, you've reached level 2! The crops are quakin' in their boots.",
  "levelUp.3": "Congrats on level 3! You're growing like a weed...",
  "levelUp.4":
    "Congrats on level 4! You've officially outgrown your green thumb.",
  "levelUp.5":
    "Level 5 and still alive! Your hard work is paying off...or should we say 'hay work'?",
  "levelUp.6":
    "Wow, level 6 already? You must be as strong as an ox. Or at least your plow is.",
  "levelUp.7": "Congrats on reaching level 7! Your farm is a-maize-ing.",
  "levelUp.8": "Level 8, great job! You're sowing the seeds of success.",
  "levelUp.9":
    "Niner niner, level 9er! Your harvest is growing as fast as your skills.",
  "levelUp.10":
    "Level 10, double digits! Your farm is looking so good, even the chickens are impressed.",
  "levelUp.11": "Level 11, you're making it rain (water, that is)!",
  "levelUp.12":
    "Congrats on level 12! Your farm is really starting to cultivate some character.",
  "levelUp.13":
    "Lucky level 13! You're really getting the hang of this farming thing.",
  "levelUp.14": "Level 14, it's a-maize-ing how much progress you've made!",
  "levelUp.15": "Fifteen and thriving! Your farm is looking better than ever.",
  "levelUp.16":
    "Congrats on level 16! Your farming skills are really taking root.",
  "levelUp.17":
    "Level 17, you're reaping what you sow (and it's looking good!).",
  "levelUp.18": "Eighteen and budding with potential!",
  "levelUp.19":
    "Congrats on level 19! Your farm is growing as fast as your skills.",
  "levelUp.20": "Level 20, you're the cream of the crop!",
  "levelUp.21": "Twenty-one and harvesting like a pro!",
  "levelUp.22":
    "Congrats on level 22! Your farm is getting plowed with success.",
  "levelUp.23": "Level 23, your skills are really starting to bloom!",
  "levelUp.24": "You're really blossoming at level 24!",
  "levelUp.25": "Quarter-century mark! You're making hay while the sun shines.",
  "levelUp.26":
    "Congrats on level 26! You're really milking this farming thing.",
  "levelUp.27": "Level 27, you're really starting to stand out in the field!",
  "levelUp.28": "You're really raising the bar at level 28!",
  "levelUp.29":
    "Congrats on level 29! You're really crop-tivating some serious skills.",
  "levelUp.30": "Level 30, you're a true farmer now!",
  "levelUp.31": "Thirty-one and still growing strong!",
  "levelUp.32": "Congrats on level 32! Your farm is in full bloom.",
  "levelUp.33": "Level 33, your farming skills are really taking off!",
  "levelUp.34": "You're really sprouting at level 34!",
  "levelUp.35": "Level 35, you're the tractor-trailer of farming!",
  "levelUp.36":
    "Congrats on level 36! Your farm is really starting to harvest some success.",
  "levelUp.37": "Level 37, your skills are really starting to crop up!",
  "levelUp.38": "You're really planting the seeds of success at level 38!",
  "levelUp.39": "Congrats on level 39! Your farm is really starting to mature.",
  "levelUp.40": "Level 40, you're a harvesting hero!",
  "levelUp.41": "Forty-one and still growing strong!",
  "levelUp.42":
    "Congrats on level 42! Your farm is starting to rake in the rewards.",
  "levelUp.43": "Level 43, you're really cultivating some serious skills.",
  "levelUp.44": "You're really harvesting success at level 44!",
  "levelUp.45": "Level 45, you're a true master of the harvest!",
  "levelUp.46":
    "Congrats on level 46! Your farming skills are really starting to bear fruit.",
  "levelUp.47": "Level 47, you're really growing into a farming legend.",
  "levelUp.48": "You're really thriving at level 48!",
  "levelUp.49":
    "Congrats on level 49! You're really starting to reap the rewards of your hard work.",
  "levelUp.50": "Halfway to 100! You're a true farming pro now.",
  "levelUp.51": "Fifty-one and still going strong!",
  "levelUp.52": "Congrats on level 52! Your farm is a true work of art.",
  "levelUp.53": "Level 53, your skills are really starting to take root.",
  "levelUp.54": "You're really harvesting happiness at level 54!",
  "levelUp.55": "Level 55, you're a true farming force to be reckoned with.",
  "levelUp.56":
    "Congrats on level 56! Your farm is really starting to blossom.",
  "levelUp.57":
    "Level 57, you're really starting to cultivate some serious skills.",
  "levelUp.58": "You're really sowing the seeds of success at level 58!",
  "levelUp.59": "Congrats on level 59! Your farm is the cream of the crop.",
  "levelUp.60": "Level 60, you're a true farming superstar!",
};

const loser: Record<Loser, string> = {
  "loser.unsuccess": "You were unsuccessful",
  "loser.longer": "Auction no longer exists",
  "loser.refund.one": "Refund",
};

const lostSunflorian: Record<LostSunflorian, string> = {
  "lostSunflorian.line1": "My father sent me here to rule over Helios.",
  "lostSunflorian.line2":
    "Unfortunately, these Bumpkins don't like me watching them.",
  "lostSunflorian.line3": "I can't wait to return to Sunfloria.",
};

const megaStore: Record<MegaStore, string> = {
  "megaStore.message":
    "Welcome to the Mega Store! Check out this month's limited items. If you like something, be sure to grab it before it vanishes into the realms of time.",
  "megaStore.month.sale": "This month's sales",
  "megaStore.wearable":
    "Nice buy! Your new wearable is safely stored in your wardrobe. You can equip it to a bumpkin from there.",
  "megaStore.collectible":
    "Nice buy! Your new collectible is safely stored in your inventory.",
  "megaStore.timeRemaining": "{{timeRemaining}} left!",
};

const milestoneMessages: Record<MilestoneMessages, string> = {
  "milestone.noviceAngler":
    "Congratulations, you've just reached the Novice Angler milestone! You're well on your way to becoming a fishing pro by catching each basic fish.",
  "milestone.advancedAngler":
    "Impressive, you've just reached the Advanced Angler milestone! You've mastered the art of catching each advanced fish. Keep it up!",
  "milestone.expertAngler":
    "Wow, you've just reached the Expert Angler milestone! You're a true fishing expert now! Catching 300 fish is no small feat.",
  "milestone.fishEncyclopedia":
    "Congratulations, you've just reached the Fish Encyclopedia milestone! You've become a true fish connoisseur! Discovering each basic, advanced, and expert fish is a remarkable achievement.",
  "milestone.masterAngler":
    "Wow, you've just reached the Master Angler milestone! Catching 1500 fish is a testament to your fishing skills.",
  "milestone.marineMarvelMaster":
    "Congratulations, you've just reached the Marine Marvel Master milestone! You're the undisputed champion of the seas! Catching each Marvel proves your fishing prowess like no other.",
  "milestone.deepSeaDiver":
    "Congratulations, you've just reached the Deep Sea Diver milestone! You have earnt the Deep Sea Helm - a mysterious Crown that attracts Marine Marvels to your hook.",
  "milestone.sunpetalSavant":
    "Congratulations, you've just reached the Sunpetal Savant milestone! You've discovered each Sunpetal variant. You're a true Sunpetal expert!",
  "milestone.bloomBigShot":
    "Congratulations, you've just reached the Bloom Big Shot milestone! You've discovered each Bloom variant. You're a true Bloom expert!",
  "milestone.lilyLuminary":
    "Congratulations, you've just reached the Lily Luminary milestone! You've discovered each Lily variant. You're a true Lily expert!",
};

const modalDescription: Record<ModalDescription, string> = {
  "modalDescription.friend": "Hey there friend!",
  "modalDescription.love.fruit":
    "Wow, you really do love Fruits as much as I do!",
  "modalDescription.gift":
    "I have no more gifts for you. Don't forget to wear your new items!",
  "modalDescription.limited.abilities":
    "I've been designing limited edition wearables that can enhance your fruit picking abilities",
  "modalDescription.trail":
    "I am looking for dedicated fruit pickers to trial this clothing....for FREE!",
};

const nftminting: Record<NFTMinting, string> = {
  "nftminting.mintAccountNFT": "Minting Account NFT",
  "nftminting.mintingYourNFT":
    "Minting your NFT and storing progress on the Blockchain",
  "nftminting.almostThere": "Almost there",
};

const noaccount: Record<Noaccount, string> = {
  "noaccount.newFarmer": "New Farmer",
  "noaccount.addPromoCode": "Add a promo code?",
  "noaccount.alreadyHaveNFTFarm": "Already have an NFT farm?",
  "noaccount.createFarm": "Create Farm",
  "noaccount.noFarmNFTs": "You do not own any farm NFTs.",
  "noaccount.createNewFarm": "Create new farm",
  "noaccount.selectNFTID": "Select your NFT ID:",
  "noaccount.welcomeMessage":
    "Welcome to Sunflower Land. Do you want to create a farm?",
  "noaccount.promoCodeLabel": "Promo Code",
  "noaccount.haveFarm": "No, I have one",
  "noaccount.letsGo": "Yes, let's go!",
};

const noBumpkin: Record<NoBumpkin, string> = {
  "noBumpkin.readyToFarm": "Awesome, your Bumpkin is ready to farm!",
  "noBumpkin.play": "Play",
  "noBumpkin.missingBumpkin": "You are missing your Bumpkin",
  "noBumpkin.bumpkinNFT":
    "Hmmm, that's strange. It looks like you are playing on a legacy account without a Bumpkin.",
  "noBumpkin.bumpkinHelp":
    "You need a Bumpkin to help you plant, harvest, chop, mine and expand your land. Support is coming soon to add a Bumpkin!.",
  "noBumpkin.mintBumpkin": "You can get a Bumpkin from OpenSea:",
  "noBumpkin.allBumpkins": "Wow, look at all those Bumpkins!",
  "noBumpkin.chooseBumpkin": "Which Bumpkin would you like to play with?",
  "noBumpkin.deposit": "Deposit",
  "noBumpkin.advancedIsland":
    "This is an advanced island. A strong Bumpkin is required:",
  "dequipper.noBumpkins": "No Bumpkins",
  "dequipper.missingBumpkins":
    "You do not have any Bumpkin NFTs in your wallet.",
  "dequipper.intro": "Send clothing from a Bumpkin to your wallet.",
  "dequipper.success":
    "Congratulations, the wearables have been sent to your wallet. Deposit them to your farm to use them.",
  "dequipper.dequip": "Dequip",
  "dequipper.warning": "Once a Bumpkin is dequipped, it can no longer be used.",
  "dequipper.nude": "Bumpkin is already dequipped",
  "noBumpkin.nude": "Cannot dequip an empty Bumpkin",
};

const notOnDiscordServer: Record<NotOnDiscordServer, string> = {
  "notOnDiscordServer.intro":
    "Looks like you haven't joined the Sunflower Land Discord Server yet.",
  "notOnDiscordServer.joinDiscord": "Join our ",
  "notOnDiscordServer.discordServer": "Discord Server",
  "notOnDiscordServer.completeVerification":
    "2. Complete verification & get started",
  "notOnDiscordServer.acceptRules": "3. Accept the rules in #rules",
};

const noTownCenter: Record<NoTownCenter, string> = {
  "noTownCenter.reward": "Reward: 1 x Town Center!",
  "noTownCenter.news": "Your latest news or statement here.",
  "noTownCenter.townCenterPlacement":
    "You can place the Town Center through the inventory > building section",
};

const npc_message: Record<NPC_MESSAGE, string> = {
  // Betty
  "npcMessages.betty.msg1":
    "Oh boy, I can't wait to get my hands on some fresh produce!",
  "npcMessages.betty.msg2":
    "I'm so excited to try out some new crops, what have you got for me?",
  "npcMessages.betty.msg3":
    "I've been waiting all day for a chance to harvest some delicious fruits!",
  "npcMessages.betty.msg4":
    "I'm eager to see what kind of crops are ready for harvesting today.",
  "npcMessages.betty.msg5":
    "I can't wait to taste the fruits of my labor, what kind of produce do you have?",
  "npcMessages.betty.msg6":
    "I've got a real passion for farming, and I'm always looking for new and interesting crops to grow.",
  "npcMessages.betty.msg7":
    "There's nothing like the feeling of harvesting a bumper crop, it's what farming is all about!",
  // Blacksmith
  "npcMessages.blacksmith.msg1":
    "I need some supplies for my latest invention, got any materials?",
  "npcMessages.blacksmith.msg2":
    "I'm looking to stock up on some raw resources, got any to sell?",
  "npcMessages.blacksmith.msg3":
    "I need some crafting materials, got anything I can use?",
  "npcMessages.blacksmith.msg4":
    "Do you have any rare or unique resources that I could use?",
  "npcMessages.blacksmith.msg5":
    "I'm interested in acquiring some high-quality materials, what do you have?",
  "npcMessages.blacksmith.msg6":
    "I'm looking for some materials for my next project, got anything to offer?",
  "npcMessages.blacksmith.msg7":
    "I'm in the market for some raw materials, got any to sell?",
  // Pumpkin' pete
  "npcMessages.pumpkinpete.msg1":
    "Hey there, newbie! How 'bout some fresh produce?",
  "npcMessages.pumpkinpete.msg2":
    "Tasty crops, anyone? I'm your guy for easy pickings!",
  "npcMessages.pumpkinpete.msg3":
    "Fresh and delightful, that's my motto. What do you have?",
  "npcMessages.pumpkinpete.msg4":
    "Newcomer in town? Let's brighten up your day with some crops!",
  "npcMessages.pumpkinpete.msg5":
    "Need a hand, friend? I've got a variety of crops for you!",
  "npcMessages.pumpkinpete.msg6":
    "Energetic Pete, at your service! Crops, anyone?",
  "npcMessages.pumpkinpete.msg7":
    "Welcome to the plaza! Let's make your day brighter with crops!",
  // Cornwell
  "npcMessages.cornwell.msg1":
    "Ah, the good old days... Hard work's my motto. What've you got?",
  "npcMessages.cornwell.msg2":
    "These youngsters, no work ethic! Bring me the challenging stuff.",
  "npcMessages.cornwell.msg3":
    "I remember when... Hard work, that's what's missing!",
  "npcMessages.cornwell.msg4":
    "Hard-earned knowledge deserves the finest harvest. Impress me!",
  "npcMessages.cornwell.msg5":
    "History and hard work, that's what we're all about. What's your pick?",
  "npcMessages.cornwell.msg6":
    "Cornwell's the name, and I'm here for the real farm experience.",
  "npcMessages.cornwell.msg7":
    "Hard tasks, rich rewards. Show me what you've got!",
  // Raven
  "npcMessages.raven.msg1":
    "Darkness and mystery, that's my game. I'll take the tough crops.",
  "npcMessages.raven.msg2":
    "Goth at heart, I need the darkest crops for my potions.",
  "npcMessages.raven.msg3":
    "Supernatural and sinister, that's the vibe I'm after. Impress me.",
  "npcMessages.raven.msg4":
    "I crave the shadowy harvest for my spellwork. Hand 'em over.",
  "npcMessages.raven.msg5":
    "Bring me the crops that hide in the shadows. I won't be disappointed.",
  "npcMessages.raven.msg6":
    "Raven, the keeper of darkness, wants your most challenging crops.",
  "npcMessages.raven.msg7":
    "Dark delights for a goth heart. Show me your darkest harvest.",
  // Bert
  "npcMessages.bert.msg1":
    "Man, these shrooms... they're the key. Got any magic ones?",
  "npcMessages.bert.msg2":
    "Mushroom madness, that's me. Magic mushrooms, anyone?",
  "npcMessages.bert.msg3":
    "It's all about the shrooms, baby. Hand over the enchanted ones.",
  "npcMessages.bert.msg4":
    "I see things, you know? Magic mushrooms, that's what I need.",
  "npcMessages.bert.msg5":
    "Life's a trip, man, and I need those magic mushrooms to ride it!",
  "npcMessages.bert.msg6":
    "Bert's the name, shrooms are the game. Enchanted ones, please!",
  "npcMessages.bert.msg7":
    "Magic mushrooms, my friend. That's what keeps me going.",
  // Timmy
  "npcMessages.timmy.msg1":
    "Roar! I'm Timmy the bear! Gimme all the fruity goodness!",
  "npcMessages.timmy.msg2":
    "I'm a bear, and bears love fruit! Got any fruity treats for me?",
  "npcMessages.timmy.msg3":
    "Fruity delights, that's the secret. It's a Timmy thing, you know?",
  "npcMessages.timmy.msg4":
    "Bear hugs for fruits! It's a Timmy thing, you know?",
  "npcMessages.timmy.msg5":
    "In a bear suit, life's a treat. Fruits are my jam, got any?",
  "npcMessages.timmy.msg6":
    "Timmy the bear's here for fruity fun! Hand over those fruits!",
  "npcMessages.timmy.msg7":
    "Fruitful conversations with a bear! Share the fruity love!",
  // Tywin
  "npcMessages.tywin.msg1":
    "Gold, gold, and more gold! Show me the riches, peasants!",
  "npcMessages.tywin.msg2":
    "I watch over Bumpkins to ensure they pay their dues. Gold, now!",
  "npcMessages.tywin.msg3":
    "Peasants, bring me your riches! I am Tywin, the demanding prince!",
  "npcMessages.tywin.msg4":
    "Pumpkin Plaza is beneath me, but gold is never enough. More!",
  "npcMessages.tywin.msg5":
    "It's a prince's life, and I demand your wealth. Pay your taxes!",
  "npcMessages.tywin.msg6":
    "A prince's wealth knows no bounds. Gold, gold, and more gold!",
  "npcMessages.tywin.msg7":
    "Gold is my crown, and I want it all! Bring me your riches!",
  // Tango
  "npcMessages.tango.msg1":
    "Chatter, chomp, and chatter again! Fruits, fruits, and more fruits!",
  "npcMessages.tango.msg2":
    "I'm Tango, the fruity squirrel monkey! Bring me fruity treasures!",
  "npcMessages.tango.msg3":
    "Orange, cheeky, and playful, that's me. Fruits, anyone?",
  "npcMessages.tango.msg4":
    "Fruit secrets? I've got 'em! Share the fruity wonders with me!",
  "npcMessages.tango.msg5":
    "Fruitful mischief and fruity delights. Let's have some fun!",
  "npcMessages.tango.msg6":
    "Tango's the name, fruity games are my claim to fame. Gimme!",
  "npcMessages.tango.msg7":
    "Fruit knowledge runs in my family. Tell me your fruitiest tales!",
  // Miranda
  "npcMessages.miranda.msg1":
    "Dance with me, friend! Add to my fruit-tastic hat, won't you?",
  "npcMessages.miranda.msg2":
    "Samba and fruits  they go hand in hand. What can you offer?",
  "npcMessages.miranda.msg3":
    "In the rhythm of samba, fruits are a must. Care to share?",
  "npcMessages.miranda.msg4":
    "It's all about the samba beat and fruity treats. Bring some over!",
  "npcMessages.miranda.msg5":
    "Join the samba celebration with a fruit gift for my hat!",
  "npcMessages.miranda.msg6":
    "Miranda's hat loves fruity flair. What can you contribute?",
  "npcMessages.miranda.msg7":
    "Samba, fruits, and friendship. Let's make it a party!",
  // Finn
  "npcMessages.finn.msg1":
    "I've reeled in the biggest catch ever! Fish, anyone?",
  "npcMessages.finn.msg2":
    "Life's a fisherman's tale, and I've got stories to tell. Reeled in some fish!",
  "npcMessages.finn.msg3":
    "Finn the fisherman, the legend, and the fish whisperer. Reeled in some fish?",
  "npcMessages.finn.msg4":
    "Big fish, big stories, and a big ego. Bring me your fishy treasures!",
  "npcMessages.finn.msg5":
    "Hook, line, and swagger, that's me. Fish, it's what I do!",
  "npcMessages.finn.msg6":
    "Fish tales, bragging rights, and a hint of modesty. Fish, please!",
  "npcMessages.finn.msg7":
    "Did you know Surgeonfish have a soft spot for the zesty allure of oranges",
  "npcMessages.finn.msg8":
    "Caught the biggest fish ever. It's not just a story; it's reality!",
  // Findley
  "npcMessages.findley.msg1":
    "Not letting Finn have all the glory! I need bait and chum for my big catch!",
  "npcMessages.findley.msg2":
    "Finn's not the only one who can fish. I need bait and chum, stat!",
  "npcMessages.findley.msg3":
    "I'll show Finn who's the real angler! Bait and chum, I must have them!",
  "npcMessages.findley.msg4":
    "Looking to hook a Tuna? They have a peculiar fondness for the crisp allure of cauliflower.",
  "npcMessages.findley.msg5":
    "Fishy rivalry runs in the family. I'm out to prove a point. Bait and chum, please!",
  "npcMessages.findley.msg6":
    "Finn's not the only one with fishing skills. I'm going for the catch of a lifetime!",
  "npcMessages.findley.msg7":
    "Competing with Finn is a must. Bait and chum, I need your help!",
  "npcMessages.findley.msg8":
    "Siblings in a fishing showdown. Bait and chum are my secret weapons!",
  "npcMessages.findley.msg9":
    "Did you know Mahi Mahi can't resist the sweet crunch of corn",
  // Corale
  "npcMessages.corale.msg1":
    "The ocean calls, and I need fish. Help me set my friends free!",
  "npcMessages.corale.msg2":
    "Fish are my friends, and I must set them free. Will you assist me?",
  "npcMessages.corale.msg3":
    "For the love of the sea, bring me fish. I'll release them to their home.",
  "npcMessages.corale.msg4":
    "Beneath the waves, my friends await. Fish, so they can swim free!",
  "npcMessages.corale.msg5":
    "A mermaid's plea to protect her friends. Bring me fish, kind soul.",
  "npcMessages.corale.msg6":
    "Fishes' freedom, that's my mission. Help me with fish, won't you?",
  "npcMessages.corale.msg7":
    "Join me in the sea's dance of life. Fish, to set my friends free!",
  //Shelly
  "npcMessages.shelly.msg1":
    "Bumpkins are vanishing, and I fear the Kraken is the cause. Help me collect its tentacles!",
  "npcMessages.shelly.msg2":
    "Bumpkins are disappearing, and I suspect the Kraken. Can you fetch its tentacles, please?",
  "npcMessages.shelly.msg3":
    "Kraken's a threat, Bumpkins missing. Bring its tentacles to keep them safe.",
  "npcMessages.shelly.msg4":
    "Kraken's ominous, Bumpkins gone. Bring its tentacles for their safety.",
  "npcMessages.shelly.msg5":
    "Guarding the beach is tough with the Kraken. Help me protect Bumpkins, get its tentacles.",
  "npcMessages.shelly.msg6":
    "Protecting Bumpkins is my duty, but the Kraken worries me. Get its tentacles to safeguard them.",
  "npcMessages.shelly.msg7":
    "Kraken's causing panic, Bumpkins missing. Help me gather its tentacles for their safety.",
  "npcMessages.shelly.msg8":
    "Bumpkins' safety's my top priority, and I'm afraid the Kraken's involved. Tentacles can make a difference!",

  "npcMessages.gambit.msg1":
    "Feeling lucky today? I've got a wager that might pique your interest!",
  "npcMessages.gambit.msg2":
    "Step right up! Ready to test your luck and play a game?",
  "npcMessages.gambit.msg3":
    "The stakes are high and the game is on. Are you in?",
  "npcMessages.gambit.msg4":
    "I've got a risky proposition for you. Care to place a bet?",
  "npcMessages.gambit.msg5":
    "Luck favors the bold! Let's see if you can outwit me.",
  "npcMessages.gambit.msg6":
    "Fancy a game of chance? The odds might be in your favor.",
  "npcMessages.gambit.msg7":
    "Ready for a gamble? I've got just the challenge for you.",
  "npcMessages.gambit.msg8":
    "Place your bets and let's see who comes out on top!",
  "npcMessages.gambit.msg9":
    "Feeling daring? I've got a high-stakes game just for you.",
  "npcMessages.queenVictoria.msg1":
    "Peasant, have you brought my taxes? The throne's coffers must be filled.",
  "npcMessages.queenVictoria.msg2":
    "I expect nothing less than perfection. Have you completed my orders?",
  "npcMessages.queenVictoria.msg3":
    "Do you have what I require, or are you wasting my time?",
  "npcMessages.queenVictoria.msg4":
    "The throne sits idle, and so do my coffers. Have you brought my dues?",
  "npcMessages.queenVictoria.msg5":
    "I trust you have brought what I asked for. Do not disappoint me.",
  "npcMessages.queenVictoria.msg6":
    "I have no time for idle chatter. Show me what you've brought.",
  "npcMessages.queenVictoria.msg7":
    "The kingdom's wealth must grow. Have you fulfilled your duty?",
  "npcMessages.queenVictoria.msg8":
    "Peasant, your queen awaits. Have you completed your task?",
  "npcMessages.queenVictoria.msg9":
    "I demand excellence. Have you brought my taxes?",
  "npcMessages.jester.msg1":
    "Welcome to the court! Ready for a jest or two about the royals?",
  "npcMessages.jester.msg2":
    "Ah, a new face! Fancy a laugh at the queen's expense?",
  "npcMessages.jester.msg3": "The court's a lively place! Got any good jokes?",
  "npcMessages.jester.msg4":
    "Hello, adventurer! Let's share a laugh about the royals.",
  "npcMessages.jester.msg5":
    "Ahoy! Ready to hear the latest jest about our dear queen?",
  "npcMessages.jester.msg6":
    "Step into the court and enjoy the humor. Got any good jokes?",
  "npcMessages.jester.msg7":
    "Greetings, friend! The court is always lively with jesters around.",
  "npcMessages.jester.msg8":
    "Well, well, look who’s here! Got any funny stories?",
  "npcMessages.jester.msg9":
    "The queen loves a good laugh. Ready to join the fun?",
};

const npc: Record<Npc, string> = {
  "npc.Modal.Hammer": "Gather round Bumpkins, an auction is about to begin.",
  "npc.Modal.Marcus":
    "Hey! You are not allowed to go in my house. Don't you dare touch my things!",
  "npc.Modal.Billy": "Howdy, y'all! Name's Billy.",
  "npc.Modal.Billy.one":
    "I found these baby seedlings but for the life of me I cannot figure out what to do with them.",
  "npc.Modal.Billy.two":
    "I bet they have something to do with the worm buds that have been appearing around the plaza.",
  "npc.Modal.Gabi": "Oi Bumpkin!",
  "npc.Modal.Gabi.one":
    "You look creative, have you ever thought about contributing art to the game?",
  "npc.Modal.Craig": "Why are you looking at me strange?",
  "npc.Modal.Craig.one": "Is there something in my teeth...",
};

const npcDialogues: Record<NpcDialogues, string> = {
  // Blacksmith Intro
  "npcDialogues.blacksmith.intro1":
    "What do you want? Speak quickly; time is money.",
  "npcDialogues.blacksmith.intro2":
    "What brings you to my workshop? I'm busy, so make it quick.",
  "npcDialogues.blacksmith.intro3":
    "Welcome to my humble abode. What brings you here?",
  "npcDialogues.blacksmith.intro4":
    "State your purpose. I'm busy, and I don't have time for idle chatter. What brings you to my workshop?",
  // Blacksmith Positive Delivery
  "npcDialogues.blacksmith.positiveDelivery1":
    "Finally! You brought the materials I need. Step aside; let me work my magic.",
  "npcDialogues.blacksmith.positiveDelivery2":
    "Ah, about time! You've acquired the exact items I sought. Prepare for equipment crafted with precision.",
  "npcDialogues.blacksmith.positiveDelivery3":
    "Good. You've delivered the materials I need. I shall not disappoint; my creations will be remarkable.",
  "npcDialogues.blacksmith.positiveDelivery4":
    "Impressive! You've acquired the necessary components. I will transform them into farming marvels!",
  "npcDialogues.blacksmith.positiveDelivery5":
    "Hmm, you actually managed to find what I wanted. Well done.",
  // Blacksmith Negative Delivery
  "npcDialogues.blacksmith.negativeDelivery1":
    "You don't have what I require? Time is wasted. Come back when you have what's necessary.",
  "npcDialogues.blacksmith.negativeDelivery2":
    "No, no, no. You lack the essential materials. Don't waste my time. Return when you're prepared.",
  "npcDialogues.blacksmith.negativeDelivery3":
    "Unacceptable. You don't possess what I require. I have no time for incompetence. Return when you're capable.",
  "npcDialogues.blacksmith.negativeDelivery4":
    "Unsatisfactory. You don't possess what I need. Come back when you're ready to fulfill your end of the bargain.",
  "npcDialogues.blacksmith.negativeDelivery5":
    "Incompetence. You lack the materials required. Don't waste my time; return when you're prepared.",
  // Blacksmith NoOrder
  "npcDialogues.blacksmith.noOrder1":
    "No active order for me to fulfill at the moment, but if you're in need of tools or have materials for crafting, I am always here to assist you. Speak up, and we'll get to work.",
  "npcDialogues.blacksmith.noOrder2":
    "No active order from me, but if you require sturdy equipment or have materials in need of shaping, I am your craftsman.",
  // Betty Into
  "npcDialogues.betty.intro1":
    "Hey there, sunshine! It's been a busy day at the market. I'm here to see if you've got the ingredients I ordered. Do you have them with you?",
  "npcDialogues.betty.intro2":
    "Hello, hello! I've been waiting to see if you've got the ingredients I ordered. Have you brought them?",
  "npcDialogues.betty.intro3":
    "Welcome to Betty's market! Ready to check if you've got the ingredients I need? Let's see what you've got in store for me!",
  "npcDialogues.betty.intro4":
    "Hey, hey! I'm eager to know if you've brought the ingredients I ordered. Show me what you've got!",
  "npcDialogues.betty.intro5":
    "Greetings, my green-thumbed friend! I'm excited to see if you've got the ingredients I asked for. What's in your basket?",
  // Betty Positive Delivery
  "npcDialogues.betty.positiveDelivery1":
    "Hooray! You've brought the ingredients I ordered. They're as fresh and vibrant as can be. Thank you, my gardening genius!",
  "npcDialogues.betty.positiveDelivery2":
    "That's what I'm talking about! You've got the exact ingredients I needed. You've made my day with your prompt delivery. Thank you!",
  "npcDialogues.betty.positiveDelivery3":
    "Oh, fantastic! These are the exact ingredients I asked for. The market will be buzzing with excitement. Thanks for your hard work!",
  "npcDialogues.betty.positiveDelivery4":
    "Oh, my garden! These ingredients are absolutely perfect. You've got a talent for finding the finest produce. Thank you, my green-thumbed hero!",
  "npcDialogues.betty.positiveDelivery5":
    "Bravo! You've brought the exact ingredients I needed. I can't wait to use them to create something extraordinary. Thanks for your swift delivery!",
  // Betty Negative Delivery
  "npcDialogues.betty.negativeDelivery1":
    "Oopsie-daisy! It seems you don't have the ingredients I ordered. No worries, though. Keep searching, and we'll find another opportunity.",
  "npcDialogues.betty.negativeDelivery2":
    "Oh, no! It looks like you don't have the ingredients I need at the moment. Don't worry, though. I believe in your resourcefulness. Come back when you have what I'm after!",
  "npcDialogues.betty.negativeDelivery3":
    "Aw, shucks! It seems you don't have the ingredients I'm looking for right now. Keep foraging, though! Maybe next time we'll have better luck.",
  "npcDialogues.betty.negativeDelivery4":
    "Oh, bummer! It seems the ingredients you brought don't match what I need. But don't lose heart; keep working, and return soon.",
  "npcDialogues.betty.negativeDelivery5":
    "Oh, snapdragons! It seems you don't have the exact ingredients I'm searching for. But don't worry, my friend. Keep working hard, and we'll celebrate when you find them!",
  // Betty NoOrder
  "npcDialogues.betty.noOrder1":
    "No active order for me to fulfill right now, but that won't stop me from offering you the finest seeds and crops. Step right up and let's see what you're in the market for!",
  "npcDialogues.betty.noOrder2":
    "No specific order from me today, but that's not a problem. I'm here with a bounce in my step, ready to provide you with the best seeds and buy your delightful crops!",
  // Grimbly Intro
  "npcDialogues.grimbly.intro1":
    "Hungry. Need food. Have anything tasty for a hungry goblin?",
  "npcDialogues.grimbly.intro2":
    "Hungry goblin needs sustenance. Have what I need?",
  "npcDialogues.grimbly.intro3":
    "Starving goblin here. Got anything scrumptious for me to munch on?",
  "npcDialogues.grimbly.intro4":
    "Grimbly's hungry. Did you bring something tasty for me?",
  // Grimbly Positive Delivery
  "npcDialogues.grimbly.positiveDelivery1":
    "Ah, finally! Something delicious to satisfy my hunger. You're a lifesaver, my friend!",
  "npcDialogues.grimbly.positiveDelivery2":
    "You've brought food! Grimbly's hunger is appeased. Thank you, thank you!",
  "npcDialogues.grimbly.positiveDelivery3":
    "Hooray! You've brought me food to fill my hungry belly. Grimbly appreciates your generosity!",
  "npcDialogues.grimbly.positiveDelivery4":
    "A feast for Grimbly! You've brought me exactly what I needed. Your kindness won't be forgotten!",
  // Grimbly Negative Delivery
  "npcDialogues.grimbly.negativeDelivery1":
    "No food? Grimbly still hungry. Find food, bring food. Grimbly grateful.",
  "npcDialogues.grimbly.negativeDelivery2":
    "No food for Grimbly? Grimbly's tummy growls. Come back when you find something tasty.",
  "npcDialogues.grimbly.negativeDelivery3":
    "Grimbly still hungry. No food? Keep searching, and maybe next time you'll satisfy my goblin appetite.",
  "npcDialogues.grimbly.negativeDelivery4":
    "Empty-handed? Grimbly's stomach rumbles. Keep searching, and don't forget about a goblin's hunger!",
  // Grimbly NoOrder
  "npcDialogues.grimbly.noOrder1":
    "Grimbly doesn't have an active order for you, but that doesn't mean I'm not hungry!",
  "npcDialogues.grimbly.noOrder2":
    "No active order from Grimbly today, but fear not! I'm always on the lookout for tasty treats. If you find anything delicious, you know who to bring it to!",
  // Grimtootk Intro
  "npcDialogues.grimtooth.intro1":
    "Greetings, weary traveler. Looking for me, are you?",
  "npcDialogues.grimtooth.intro2":
    "Step into the realm of shadows. Have you fulfilled my order?",
  "npcDialogues.grimtooth.intro3":
    "Welcome, wanderer, to my mystical realm. Do you have what I need?",
  "npcDialogues.grimtooth.intro4":
    "Step inside, dear traveler, and uncover the secrets I've amassed. Did you find what I requested?",
  // Grimtooth Positive Delivery
  "npcDialogues.grimtooth.positiveDelivery1":
    "Incredible! You've found the ingredients I require. The magic of Sunflorea is at your fingertips!",
  "npcDialogues.grimtooth.positiveDelivery2":
    "Marvelous! You've acquired what I sought. Together, we shall delve into the deepest depths of magic!",
  "npcDialogues.grimtooth.positiveDelivery3":
    "Incredible! You've gathered the mystical components I required. Your journey in the realm of magic begins!",
  "npcDialogues.grimtooth.positiveDelivery4":
    "Ah, splendid! You've obtained the elusive ingredients I sought. Your journey in the realm of magic begins!",
  // Grimtooth Negative Delivery
  "npcDialogues.grimtooth.negativeDelivery1":
    "Alas, the required ingredients elude you. Fear not, though. Keep searching, and the mysteries shall reveal themselves!",
  "npcDialogues.grimtooth.negativeDelivery2":
    "Oh, darkness and dismay. You don't possess what I need. But fret not; keep working and the shadows will continue to guide you.",
  "npcDialogues.grimtooth.negativeDelivery3":
    "Fear not, though. Continue your work, and the magic shall manifest.",
  "npcDialogues.grimtooth.negativeDelivery4":
    "Oh, alas. You don't possess what I need. Return when you do.",
  // Grimtooth NoOrder
  "npcDialogues.grimtooth.noOrder1":
    "No active order from GrimTooth at the moment, but don't worry. If you're in need of exquisite craftsmanship or have materials for me to work with, I'll be here, ready to create.",
  "npcDialogues.grimtooth.noOrder2":
    "No active order for you to fulfill with GrimTooth, but should you require the master craftsman's touch or have materials that need transforming, I'm at your service.",
  // Old Salty Intro
  "npcDialogues.oldSalty.intro1":
    "Arghhhh, welcome, me heartie! Old Salty's the name, and treasure's me game. Do ye have what I seek?",
  "npcDialogues.oldSalty.intro2":
    "Ahoy, landlubber! Old Salty's the treasure enthusiast ye be lookin' for. Show me what ye've found on yer quest?",
  "npcDialogues.oldSalty.intro3": "",
  // Old Salty Positive Delivery
  "npcDialogues.oldSalty.positiveDelivery1":
    "Arghhhh, ye've found the treasure I be seekin'. Ye've got the heart of a true adventurer, me matey!",
  "npcDialogues.oldSalty.positiveDelivery2":
    "Avast! Ye've brought the very treasure Old Salty desires. Ye be earnin' me respect, me hearty!",
  "npcDialogues.oldSalty.positiveDelivery3":
    "Ahoy, ye've found the treasure Old Salty's been huntin'. Ye be a true legend in these waters, me hearty!",
  //  Olkd Salty Negative Delivery
  "npcDialogues.oldSalty.negativeDelivery1":
    "Arrrr, no treasure for Old Salty? Keep yer eyes peeled, me heartie. The hidden gems await yer discovery!",
  "npcDialogues.oldSalty.negativeDelivery2":
    "Ah, scallywag! No treasure for Old Salty? Keep searchin', and ye'll find the riches ye seek!",
  "npcDialogues.oldSalty.negativeDelivery3":
    "Shiver me timbers! No treasure for Old Salty? Keep sailin', me matey. The loot be out there, waitin' fer ye!",
  // Old Salty NoOrder
  "npcDialogues.oldSalty.noOrder1":
    "No active order for Old Salty's treasure cove, me heartie, but that doesn't mean there's no adventure to be had. Keep your eyes peeled for hidden treasures and uncharted waters!",
  "npcDialogues.oldSalty.noOrder2":
    "No specific treasure for you to seek with Old Salty at the moment, but don't fret, my hearty sailor! The high seas hold countless riches waiting to be discovered.",
  // Raven Intro
  "npcDialogues.raven.intro1":
    "Welcome to my humble abode. Careful where you step; there are potions brewing. Did you get what I ordered?",
  "npcDialogues.raven.intro2":
    "Step into the realm of shadows. Seek wisdom, find enchantment. Do you have what I need?",
  "npcDialogues.raven.intro3":
    "Welcome, wanderer, to my mystical realm. Seeking something magical, are you? Or do you have what I need?",
  "npcDialogues.raven.intro4":
    "Step inside, dear traveler. The shadows will guide you. Did you find what I seek?",
  // Raven Positive Delivery
  "npcDialogues.raven.positiveDelivery1":
    "Incredible! You've found the ingredients I require. The magic of Sunflorea is at your fingertips!",
  "npcDialogues.raven.positiveDelivery2":
    "Marvelous! You've acquired what I sought. Together, we shall delve into the deepest depths of magic!",
  "npcDialogues.raven.positiveDelivery3":
    "Incredible! You've gathered the mystical components I required. Your journey in the realm of magic begins!",
  "npcDialogues.raven.positiveDelivery4":
    "Ah, splendid! You've obtained the elusive ingredients I sought. Your journey in the realm of magic begins!",
  // Raven Negative Delivery
  "npcDialogues.raven.negativeDelivery1":
    "Alas, the required ingredients elude you. Fear not, though. Keep searching, and the mysteries shall reveal themselves!",
  "npcDialogues.raven.negativeDelivery2":
    "Oh, darkness and dismay. You don't possess what I need. But fret not; the shadows will guide you to it.",
  "npcDialogues.raven.negativeDelivery3":
    "Fear not, though. Continue your quest, and the magic shall manifest.",
  // Raven NoOrder
  "npcDialogues.raven.noOrder1":
    "It seems there's no active order awaiting your arrival in my dark domain. However, should you seek guidance or have questions about the mystical arts, don't hesitate to ask.",
  "npcDialogues.raven.noOrder2":
    "No active order from me, traveler. But fret not! The shadows are ever-watchful, and when the time is right, we'll delve into the depths of magic together.",
  // Tywin Intro
  "npcDialogues.tywin.intro1":
    "Ah, another commoner gracing my presence. Do you have what I want? Speak quickly.",
  "npcDialogues.tywin.intro2":
    "Oh, great, another one from the peasantry. What's your business with someone of my stature? Do you have what I need?",
  "npcDialogues.tywin.intro3":
    "Greetings, commoner. Seeking wisdom, are you? Do you have everything I asked for?",
  "npcDialogues.tywin.intro4":
    "What do you want? Speak quickly; time is money. You have what I need, I assume?",
  // Tywin Positive Delivery
  "npcDialogues.tywin.positiveDelivery1":
    "Hmm, it seems you're not entirely useless. You've managed to bring what I wanted. Carry on, peasant!",
  "npcDialogues.tywin.positiveDelivery2":
    "Surprisingly, you've actually delivered what I desired. Perhaps you're not as useless as I presumed.",
  "npcDialogues.tywin.positiveDelivery3":
    "Ah, marvelous work! You've brought the materials I require. Together, we shall create masterpieces!",
  "npcDialogues.tywin.positiveDelivery4":
    "Good. You've delivered the materials I need. Igor shall not disappoint; the tools will be remarkable.",
  // Tywin Negative Delivery
  "npcDialogues.tywin.negativeDelivery1":
    "Pathetic. You don't have what I asked for. Don't waste my time with your incompetence. Leave!",
  "npcDialogues.tywin.negativeDelivery2":
    "What a disappointment. You don't have what I requested. Typical of your kind. Now begone!",
  "npcDialogues.tywin.negativeDelivery3":
    "Unsatisfactory. You don't possess what I require. I have no time for incompetence. Return when you're capable.",
  "npcDialogues.tywin.negativeDelivery4":
    "Incompetence. You lack the materials required. Don't waste my time; return when you're prepared.",
  // Tywin NoOrder
  "npcDialogues.tywin.noOrder1":
    "Ah, it appears I don't have an active order for you, commoner. But if you require my esteemed presence or have a request, state it quickly. Time is money, after all.",
  "npcDialogues.tywin.noOrder2":
    "No active order for you today, peasant. However, should you stumble upon something worthy of my attention or require my expertise, you know where to find me.",
  //Bert Intro
  "npcDialogues.bert.intro1":
    "Psst! Explorer of the arcane! Sunflorea's vast secrets are manifold...",
  "npcDialogues.bert.intro2":
    "Ah, kindred spirit! Sunflorea is home to countless treasures...",
  "npcDialogues.bert.intro3":
    "Greetings, bearer of the mysterious! In Sunflorea, some items demand Delivery...",
  "npcDialogues.bert.intro4":
    "Hello, seeker of the concealed! Sunflorea's enchantments can be categorized into two...",
  "bert.day":
    "You cannot withdraw this item for 3 days after claiming {{seasonalTicket}}s.",
  //Bert Positive Delivery
  "npcDialogues.bert.positiveDelivery1":
    "Incredible! You've brought me everything I need...",
  "npcDialogues.bert.positiveDelivery2":
    "Oh, fascinating find! You have brought me the exact items I sought...",
  "npcDialogues.bert.positiveDelivery3":
    "Ah, about time! You've acquired the exact items I sought. Excellent!",
  "npcDialogues.bert.positiveDelivery4":
    "Impressive! You've brought me exactly what I need to uncover the secrets of Sunflorea.",
  //Bert Negative Delivery
  "npcDialogues.bert.negativeDelivery1":
    "Oh, alas. You don't possess what I seek. Keep exploring, I will see you when you have what I need!",
  "npcDialogues.bert.negativeDelivery2":
    "Drat! What you have isn't quite what I need. Keep working on my order, and together, we'll unravel the mysteries!",
  "npcDialogues.bert.negativeDelivery3":
    "Hmm, not quite what I expected. But fear not! There is still time to get me what I need.",
  "npcDialogues.bert.negativeDelivery4":
    "Oh, not quite what I sought. Return when you have it. But keep your eyes open; the pages of history have more to reveal.",
  //Bert NoOrder
  "npcDialogues.bert.noOrder1":
    "No active order for me to fulfill today, but that doesn't mean I don't have any intriguing secrets to share.",
  "npcDialogues.bert.noOrder2":
    "No enigmatic artifact for you to discover with Bert at the moment, but that doesn't mean I'm short on peculiar facts and hidden truths.",
  // Timmy Intro
  "npcDialogues.timmy.intro1":
    "Hey there, friend! It's Timmy, and I'm eager to see if you have what I asked for.",
  "npcDialogues.timmy.intro2":
    "Greetings, fellow adventurer! Timmy here, wondering if you've found what I requested.",
  "npcDialogues.timmy.intro3":
    "Welcome, welcome! I'm Timmy, the friendliest face in the plaza. Can you help me out by checking if you have what I need?",
  "npcDialogues.timmy.intro4":
    "Hey, hey! Ready for some fun in the sun? It's Timmy, and I can't wait to see if you've got what I asked for.",
  "npcDialogues.timmy.intro5":
    "Hello, sunshine! Timmy's here, hoping you have what I requested. Let's see?",
  // Timmy Positive Delivery
  "npcDialogues.timmy.positiveDelivery1":
    "Woohoo! You've got just what I needed. Your generosity fills my heart with joy. Thank you!",
  "npcDialogues.timmy.positiveDelivery2":
    "That's what I'm talking about! You've brought exactly what I was looking for. You're a superstar!",
  "npcDialogues.timmy.positiveDelivery3":
    "Oh, fantastic! Your timing couldn't be better. You've made my day with your thoughtful offering. Thank you!",
  "npcDialogues.timmy.positiveDelivery4":
    "Hooray! You've delivered the goods. Sunflorea is lucky to have someone as amazing as you!",
  "npcDialogues.timmy.positiveDelivery5":
    "You've done it again! Your kindness and generosity never cease to amaze me. Thank you for brightening up the plaza!",
  // Timmy Negative Delivery
  "npcDialogues.timmy.negativeDelivery1":
    "Oopsie-daisy! It seems you don't have what I'm searching for right now. No worries, though. Keep exploring, and we'll find another opportunity.",
  "npcDialogues.timmy.negativeDelivery2":
    "Oh, no! It looks like you don't have what I need at the moment. Don't worry, though. I believe in you. Come back when you find it!",
  "npcDialogues.timmy.negativeDelivery3":
    "Aw, shucks! You don't have what I'm looking for right now. Keep exploring, though! Maybe next time you'll stumble upon what I need.",
  "npcDialogues.timmy.negativeDelivery4":
    "Oh, bummer! It seems you don't have the item I'm seeking. But don't give up; new opportunities await just around the corner.",
  "npcDialogues.timmy.negativeDelivery5":
    "Oh, snapdragons! You don't have what I'm searching for. But don't worry, my friend. Keep exploring, and we'll celebrate when you find it!",
  // Timmy NoOrder
  "npcDialogues.timmy.noOrder1":
    "Oh, hi there! I don't have any active orders for you right now, but I'm always eager to learn and hear stories. Have any exciting tales of your adventures in Sunflorea? Or perhaps you've come across a new bear friend? Share it with me!",
  "npcDialogues.timmy.noOrder2":
    "No specific order for me to fulfill at the moment, but that won't stop me from being curious! Do you have any interesting stories about your travels? Maybe you've encountered a rare bear or discovered a hidden gem in Sunflorea? Let's chat!",
  // Cornwell Intro
  "npcDialogues.cornwell.intro1":
    "Greetings, young adventurer! Have you come bearing the items I seek?",
  "npcDialogues.cornwell.intro2":
    "Ah, welcome, seeker of knowledge and relics! Do you have the items I requested? Show me what you've got.",
  "npcDialogues.cornwell.intro3":
    "Step into the realm of ancient secrets and wisdom. Have you acquired the items I desire? Share your discoveries with me, young one.",
  "npcDialogues.cornwell.intro4":
    "Ah, it's you! The one on a noble quest. Have you found the items I seek? Come, show me what you've uncovered in Sunflower Land's vast lands.",
  "npcDialogues.cornwell.intro5":
    "Greetings, young traveler! The winds of curiosity have brought you here. Do you have the items I require to enrich my collection?",
  // Cornwell Positive Delivery
  "npcDialogues.cornwell.positiveDelivery1":
    "Marvelous! You've brought the very relics I desired. Your efforts in preserving Sunflower Land's history will be remembered.",
  "npcDialogues.cornwell.positiveDelivery2":
    "Ah, splendid! Your findings align perfectly with the relics I sought. These treasures shall add great wisdom to my collection.",
  "npcDialogues.cornwell.positiveDelivery3":
    "Impressive! The items you've acquired are just what I was looking for. Sunflower Land's history will shine through them.",
  "npcDialogues.cornwell.positiveDelivery4":
    "Ah, young adventurer, you've surpassed my expectations! The items you've brought will be invaluable to my research.",
  "npcDialogues.cornwell.positiveDelivery5":
    "Ah, well done, my keen-eyed friend! The items you've delivered will find a place of honor in my windmill's collection.",
  // Cornwell Negative Delivery
  "npcDialogues.cornwell.negativeDelivery1":
    "Oh, it seems you haven't found the items I seek. Fear not; the journey of discovery continues. Keep exploring Sunflower Land's mysteries.",
  "npcDialogues.cornwell.negativeDelivery2":
    "Hmm, not quite the relics I was expecting. But do not despair! Keep searching, and the treasures of Sunflower Land will reveal themselves to you.",
  "npcDialogues.cornwell.negativeDelivery3":
    "Oh, it appears the items I desired elude you. No matter; your curiosity will lead you to the right discoveries eventually.",
  "npcDialogues.cornwell.negativeDelivery4":
    "Ah, I see you haven't found the specific items I need. Fret not; the history of Sunflower Land holds many secrets waiting to be unearthed.",
  "npcDialogues.cornwell.negativeDelivery5":
    "Oh, my dear traveler, it seems you didn't bring the exact items I sought. But your dedication to Sunflower Land's history is commendable.",
  // Cornwell NoOrder
  "npcDialogues.cornwell.noOrder1":
    "Ah, it appears there are no quest items for you to deliver at the moment. But do not be disheartened! Your journey in Sunflower Land is filled with untold adventures waiting to be discovered.",
  "npcDialogues.cornwell.noOrder2":
    "Oh, it seems I have no need for your services at the moment. But don't fret; the pages of Sunflower Land's history turn endlessly, and new quests will surely present themselves.",
  "npcDialogues.cornwell.noOrder3":
    "Ah, my apologies, but I have nothing for you to fulfill right now. Fear not, though; your path as a seeker of knowledge is bound to lead you to new quests in due time.",
  "npcDialogues.cornwell.noOrder4":
    "Ah, it seems you haven't received any quest orders from me at the moment. But do not lose hope; your inquisitive nature will soon guide you to exciting new quests in Sunflower Land.",
  // Pumpkin Pete Intor
  "npcDialogues.pumpkinPete.intro1":
    "I have been waiting for you, my friend! Do you have my order ready?",
  "npcDialogues.pumpkinPete.intro2":
    "Hey there, pumpkin! I have been busy guiding Bumpkins around the plaza? Did you get my order?",
  "npcDialogues.pumpkinPete.intro3":
    "Greetings, friend! The plaza is bursting with excitement today. Did you get manage to get my order?",
  "npcDialogues.pumpkinPete.intro4":
    "Hello there, fellow adventurer! What brings you to my humble abode? Did you get my order?",
  "npcDialogues.pumpkinPete.intro5":
    "Hey, hey! Welcome to the plaza? Did you manage to find what I needed?",
  // Pumpkin Pete Positive Delivery
  "npcDialogues.pumpkinPete.positiveDelivery1":
    "Hooray! You've brought exactly what I need. You're a true hero of the plaza!",
  "npcDialogues.pumpkinPete.positiveDelivery2":
    "Pumpkin-tastic! You've got just what I needed. You're making our little community brighter!",
  "npcDialogues.pumpkinPete.positiveDelivery3":
    "Great seeds of joy! You've brought exactly what I need. The plaza is lucky to have you!",
  "npcDialogues.pumpkinPete.positiveDelivery4":
    "Fantastic! You've arrived bearing exactly what I desired. Your kindness spreads sunshine in our plaza!",
  "npcDialogues.pumpkinPete.positiveDelivery5":
    "Oh, pumpkin seeds of joy! You've brought me exactly what I needed. The plaza is grateful for your help!",
  // Pumpkin Pete Negative Delivery
  "npcDialogues.pumpkinPete.negativeDelivery1":
    "Oh, no. It seems you don't have what I'm looking for. Don't worry, though. I believe in you. Come back when you find it!",
  "npcDialogues.pumpkinPete.negativeDelivery2":
    "Aw, shucks! You don't have what I'm looking for right now. Keep exploring, though! Maybe next time.",
  "npcDialogues.pumpkinPete.negativeDelivery3":
    "Oh, seeds of sorrow! You don't have what I'm searching for. But don't give up; new opportunities bloom every day!",
  "npcDialogues.pumpkinPete.negativeDelivery4":
    "Oh, snapdragons! You don't have what I'm seeking right now. Keep exploring, though! I'm confident you'll find it.",
  "npcDialogues.pumpkinPete.negativeDelivery5":
    "Oopsie-daisy! You don't have what I'm searching for. But don't worry, my friend. Keep exploring, and we'll celebrate when you find it.",
  // Pumpkin Pete NoOrder
  "npcDialogues.pumpkinPete.noOrder1":
    "Ah, my friend, it seems I don't have an active order for you at the moment. But fear not! I'm always here to offer guidance and a friendly pumpkin smile.",
  "npcDialogues.pumpkinPete.noOrder2":
    "Oh, no active order for you today, my friend. But don't worry! Feel free to explore the plaza, and if you need any assistance, I'm your trusty Bumpkin.",

  // NPC gift dialogues
  "npcDialogues.pumpkinPete.reward":
    "Thank you kindly for your deliveries. Here's a token of appreciation for you.",
  "npcDialogues.pumpkinPete.flowerIntro":
    "Have you ever seen the elegance of a Yellow Cosmos? I'm craving one...",
  "npcDialogues.pumpkinPete.averageFlower":
    "Not exactly what I had in mind, but it's quite charming. Thanks.",
  "npcDialogues.pumpkinPete.badFlower":
    "This isn't what I was hoping for. Perhaps you can find a more suitable one?",
  "npcDialogues.pumpkinPete.goodFlower":
    "This Yellow Cosmos is splendid! Thank you for bringing it to me.",

  "npcDialogues.betty.reward":
    "I appreciate your thoughtful gifts. Here's a little something to show my gratitude.",
  "npcDialogues.betty.flowerIntro":
    "Can you imagine the beauty of a Red, Yellow, Purple, White, or Blue Pansy? I long for one...",
  "npcDialogues.betty.averageFlower":
    "Not exactly what I was expecting, but it's quite lovely. Thank you.",
  "npcDialogues.betty.badFlower":
    "This isn't what I had in mind. Could you try to find a more suitable flower?",
  "npcDialogues.betty.goodFlower":
    "This Pansy is beautiful! Thank you for bringing it to me.",

  "npcDialogues.blacksmith.reward":
    "Your deliveries are much appreciated. Here's something for your efforts.",
  "npcDialogues.blacksmith.flowerIntro":
    "I'm in need of a vibrant Red Carnation. Have you come across one?",
  "npcDialogues.blacksmith.averageFlower":
    "Not exactly what I was hoping for, but it's quite nice. Thank you.",
  "npcDialogues.blacksmith.badFlower":
    "This flower isn't quite right. Could you search for a more suitable one?",
  "npcDialogues.blacksmith.goodFlower":
    "Ah, this Red Carnation is perfect! Thank you for bringing it to me.",

  "npcDialogues.bert.reward":
    "Thank you for your continuous help. Here's a small token of appreciation.",
  "npcDialogues.bert.flowerIntro":
    "The Lotus flowers in Red, Yellow, Purple, White, or Blue are truly enchanting. Do you have one?",
  "npcDialogues.bert.averageFlower":
    "This wasn't what I had in mind, but it's quite delightful. Thank you.",
  "npcDialogues.bert.badFlower":
    "This isn't the flower I needed. Perhaps another search is in order?",
  "npcDialogues.bert.goodFlower":
    "This Lotus is exquisite! Thank you for bringing it to me.",

  "npcDialogues.finn.reward":
    "Your contributions are invaluable. Here's a little something to express my gratitude.",
  "npcDialogues.finn.flowerIntro":
    "I'm yearning for a beautiful Cosmos in White, or Blue. Can you find one?",
  "npcDialogues.finn.averageFlower":
    "Not exactly what I was hoping for, but it's quite pleasing. Thank you.",
  "npcDialogues.finn.badFlower":
    "This flower doesn't quite meet my expectations. Perhaps another try?",
  "npcDialogues.finn.goodFlower":
    "This Cosmos is stunning! Thank you for bringing it to me.",

  "npcDialogues.finley.reward":
    "Thank you for your efforts. Here's a small token of appreciation for your deliveries.",
  "npcDialogues.finley.flowerIntro":
    "A lovely Daffodil, like the one I'm thinking of, would brighten up my day. Have you seen one?",
  "npcDialogues.finley.averageFlower":
    "It's not exactly what I had in mind, but it's quite charming. Thank you.",
  "npcDialogues.finley.badFlower":
    "This flower isn't quite right. Perhaps another one would be more suitable?",
  "npcDialogues.finley.goodFlower":
    "This Daffodil is beautiful! Thank you for bringing it to me.",

  "npcDialogues.corale.reward":
    "Your deliveries are much appreciated. Here's a little something to show my gratitude.",
  "npcDialogues.corale.flowerIntro":
    "Have you ever encountered the radiant Prism Petal? It's simply enchanting...",
  "npcDialogues.corale.averageFlower":
    "Not exactly what I was hoping for, but it's quite delightful. Thank you.",
  "npcDialogues.corale.badFlower":
    "This isn't quite what I had in mind. Could you find a more suitable flower?",
  "npcDialogues.corale.goodFlower":
    "This Prism Petal is exquisite! Thank you for bringing it to me.",

  "npcDialogues.raven.reward":
    "Thank you for your deliveries. Here's a small token of appreciation for your efforts.",
  "npcDialogues.raven.flowerIntro":
    "Deep dark purple is the color of my soul - have you come across anything like this?",
  "npcDialogues.raven.averageFlower":
    "Not quite what I was expecting, but it's quite pleasing. Thank you.",
  "npcDialogues.raven.badFlower":
    "This flower isn't quite right. Perhaps another search is in order?",
  "npcDialogues.raven.goodFlower":
    "This Purple flower is perfect! Thank you for bringing it to me.",

  "npcDialogues.miranda.reward":
    "Thank you for your efforts. Here's a small token of appreciation for your deliveries.",
  "npcDialogues.miranda.flowerIntro":
    "The vibrancy of a Yellow flower would surely lift my spirits. Have you seen one around?",
  "npcDialogues.miranda.averageFlower":
    "It's not exactly what I was hoping for, but it's quite charming. Thank you.",
  "npcDialogues.miranda.badFlower":
    "This flower isn't quite right. Perhaps another one would be more suitable?",
  "npcDialogues.miranda.goodFlower":
    "This Yellow flower is lovely! Thank you for bringing it to me.",

  "npcDialogues.cornwell.reward":
    "Thank you for your deliveries. Here's a small token of appreciation for your efforts.",
  "npcDialogues.cornwell.flowerIntro":
    "The sight of a Balloon Flower in Red, Yellow, Purple, White, or Blue is truly delightful...",
  "npcDialogues.cornwell.averageFlower":
    "Not quite what I was expecting, but it's quite charming. Thank you.",
  "npcDialogues.cornwell.badFlower":
    "This flower isn't quite right. Perhaps another search is in order?",
  "npcDialogues.cornwell.goodFlower":
    "This Balloon Flower is delightful! Thank you for bringing it to me.",

  "npcDialogues.tywin.reward":
    "Thank you for your deliveries. Here's a small token of appreciation for your efforts.",
  "npcDialogues.tywin.flowerIntro":
    "Have you heard of the exquisite Primula Enigma or the mesmerizing Celestial Frostbloom? I'm in need of one.",
  "npcDialogues.tywin.averageFlower":
    "Not exactly what I was hoping for, but it's quite delightful. Thank you.",
  "npcDialogues.tywin.badFlower":
    "This flower isn't quite right. Perhaps another one would be more suitable?",
  "npcDialogues.tywin.goodFlower":
    "This flower is simply breathtaking! Thank you for bringing it to me.",

  "npcDialogues.default.flowerIntro":
    "Have you got a flower for me? Make sure it is something I like.",
  "npcDialogues.default.averageFlower": "Wow, thanks! I love this flower!",
  "npcDialogues.default.badFlower":
    "Hmmmm, this isn't my favorite flower. But I guess it's the thought that counts.",
  "npcDialogues.default.goodFlower":
    "This is my favorite flower! Thanks a bunch!",
  "npcDialogues.default.reward":
    "Wow, thanks Bumpkin. Here is a small gift for your help!",
  "npcDialogues.default.locked": "Please come back tomorrow.",

  // Queen Victoria Intro
  "npcDialogues.queenVictoria.intro1":
    "Oh, it's you. Do you have my taxes ready, peasant?",
  "npcDialogues.queenVictoria.intro2":
    "Greetings, subject. I trust you have brought the taxes I demanded?",
  "npcDialogues.queenVictoria.intro3":
    "What do you want, peasant? I'm busy worrying about the throne. Have you brought my taxes?",
  "npcDialogues.queenVictoria.intro4":
    "Oh, the things I must tolerate. Make it quick, peasant. Did you bring my taxes?",
  "npcDialogues.queenVictoria.intro5":
    "The throne sits idle, and here you are. I hope you brought my taxes, peasant.",

  // Queen Victoria Positive Delivery
  "npcDialogues.queenVictoria.positiveDelivery1":
    "Finally, something done right. You've brought my taxes. Consider yourself acknowledged.",
  "npcDialogues.queenVictoria.positiveDelivery2":
    "Very well, this will suffice. You've brought the taxes. You may go now.",
  "npcDialogues.queenVictoria.positiveDelivery3":
    "Acceptable. You've brought my taxes. Perhaps you're not entirely useless.",
  "npcDialogues.queenVictoria.positiveDelivery4":
    "Impressive, for a peasant. The taxes are in order. You may leave.",
  "npcDialogues.queenVictoria.positiveDelivery5":
    "Good. You've managed to bring my taxes. The throne shall not remain empty forever.",

  // Queen Victoria Negative Delivery
  "npcDialogues.queenVictoria.negativeDelivery1":
    "What is this? You haven't brought my taxes? How utterly disappointing.",
  "npcDialogues.queenVictoria.negativeDelivery2":
    "Pathetic. No taxes? How do you expect the kingdom to thrive?",
  "npcDialogues.queenVictoria.negativeDelivery3":
    "Disgraceful. You come to me without the taxes. This is unacceptable.",
  "npcDialogues.queenVictoria.negativeDelivery4":
    "Really? No taxes? I should have known not to expect much from peasants.",
  "npcDialogues.queenVictoria.negativeDelivery5":
    "Useless! Without the taxes, how can I maintain the kingdom's wealth?",

  // Queen Victoria NoOrder
  "npcDialogues.queenVictoria.noOrder1":
    "Hmph, it seems I have no tasks for you at the moment. You're free to go, but don't forget who rules here.",
  "npcDialogues.queenVictoria.noOrder2":
    "No active orders for now, peasant. Consider yourself lucky. Be gone.",

  // Queen Victoria gift dialogues
  "npcDialogues.queenVictoria.reward":
    "Very well, I suppose you deserve a token for your services. Don't expect this often.",
  "npcDialogues.queenVictoria.flowerIntro":
    "Have you laid eyes on the magnificent Primula Enigma? I desire one...",
  "npcDialogues.queenVictoria.averageFlower":
    "This is not what I envisioned, but I suppose it will do. Leave it here.",
  "npcDialogues.queenVictoria.badFlower":
    "This is utterly unsuitable. Find me a better one, peasant.",
  "npcDialogues.queenVictoria.goodFlower":
    "Ah, splendid! This Primula Enigma is precisely what I wanted. Well done, for once.",

  // Gambit Intro
  "npcDialogues.gambit.intro1":
    "Hehe, what do we have here? Ready to play a game of chance, friend?",
  "npcDialogues.gambit.intro2":
    "Well, well, if it isn't my favorite risk-taker! Care to place a bet?",
  "npcDialogues.gambit.intro3":
    "Greetings, my fellow adventurer! Shall we test our luck today?",
  "npcDialogues.gambit.intro4":
    "Ah, a new face! Ready to gamble your way to fortune, or perhaps misfortune?",
  "npcDialogues.gambit.intro5":
    "Hey there! Fancy a game of wits and chance? The stakes are high, just the way I like it.",

  // Gambit Positive Delivery
  "npcDialogues.gambit.positiveDelivery1":
    "Aha! You've come through! Seems luck is on your side today.",
  "npcDialogues.gambit.positiveDelivery2":
    "Well played! You've brought exactly what I needed. Fortune favors the bold!",
  "npcDialogues.gambit.positiveDelivery3":
    "Perfect! You've delivered just what I was hoping for. Let's see if your luck holds!",
  "npcDialogues.gambit.positiveDelivery4":
    "Excellent! You've got what I needed. Seems the odds were in your favor this time.",
  "npcDialogues.gambit.positiveDelivery5":
    "Bravo! You've brought what I asked for. Perhaps there's more fortune to be found.",

  // Gambit Negative Delivery
  "npcDialogues.gambit.negativeDelivery1":
    "Oh, tough luck! You don't have what I need. Better luck next time!",
  "npcDialogues.gambit.negativeDelivery2":
    "Not quite what I was hoping for. Keep trying, and maybe the odds will be in your favor.",
  "npcDialogues.gambit.negativeDelivery3":
    "Ah, bad luck! You don't have it. But don't give up, there's always another chance!",
  "npcDialogues.gambit.negativeDelivery4":
    "Close, but not quite! You don't have what I'm looking for. Try again, the game isn't over.",
  "npcDialogues.gambit.negativeDelivery5":
    "Oops, seems you're out of luck this time. But don't worry, keep playing and you'll win eventually.",

  // Gambit NoOrder
  "npcDialogues.gambit.noOrder1":
    "Looks like I don't have any bets for you right now. Come back later and we'll see what we can wager!",
  "npcDialogues.gambit.noOrder2":
    "No games for you today, my friend. But stick around, the stakes are always changing!",

  // Jester Intro
  "npcDialogues.jester.intro1":
    "Ah, a new face in the court! Ready for a jest or two?",
  "npcDialogues.jester.intro2":
    "Greetings, friend! Fancy a laugh at the royals' expense?",
  "npcDialogues.jester.intro3":
    "Well, well, look who’s graced the court! Got any good jokes?",
  "npcDialogues.jester.intro4":
    "Hello, adventurer! Ready to hear the latest about our dear queen?",
  "npcDialogues.jester.intro5":
    "Ahoy! Step into the court and let's share a laugh or two about the royals.",

  // Jester Positive Delivery
  "npcDialogues.jester.positiveDelivery1":
    "Haha! You've brought exactly what I need. You're funnier than I thought!",
  "npcDialogues.jester.positiveDelivery2":
    "Perfect! You've got just what I asked for. Maybe you should be the jester!",
  "npcDialogues.jester.positiveDelivery3":
    "Marvelous! You've delivered right on cue. The court will be delighted!",
  "npcDialogues.jester.positiveDelivery4":
    "Fantastic! You've brought the goods. The queen will be amused!",
  "npcDialogues.jester.positiveDelivery5":
    "Splendid! Just what I needed. You might have a knack for this!",

  // Jester Negative Delivery
  "npcDialogues.jester.negativeDelivery1":
    "Oh dear, that's not what I needed. But hey, it's the thought that counts!",
  "npcDialogues.jester.negativeDelivery2":
    "Oops, not quite right! But don't worry, even the best jesters miss the mark sometimes.",
  "npcDialogues.jester.negativeDelivery3":
    "Oh no, that's not it! But don't fret, we'll laugh about this later.",
  "npcDialogues.jester.negativeDelivery4":
    "Haha, not what I asked for! But I appreciate the effort. Try again?",
  "npcDialogues.jester.negativeDelivery5":
    "Whoops, that's not what I needed. But hey, every joke has its off day!",

  // Jester NoOrder
  "npcDialogues.jester.noOrder1":
    "No tasks for you right now, friend. But feel free to stick around and enjoy the court's humor!",
  "npcDialogues.jester.noOrder2":
    "No orders today, but don't be a stranger! The court is always lively with jesters around.",

  // Jester gift dialogues
  "npcDialogues.jester.reward":
    "Bravo! Here’s a little something for your trouble. Keep the laughs coming!",
  "npcDialogues.jester.flowerIntro":
    "Ever seen a Red Balloon Flower or a Red Carnation? They always bring a smile to my face...",
  "npcDialogues.jester.averageFlower":
    "Hmm, not exactly a knee-slapper, but it'll do. Thanks!",
  "npcDialogues.jester.badFlower":
    "Oh no, this flower is as funny as a wet sock! Try again, will you?",
  "npcDialogues.jester.goodFlower":
    "Splendid! This flower is perfect. Almost as good as one of my jokes!",
};

const nyeButton: Record<NyeButton, string> = {
  "plaza.magicButton.query":
    "A magical button has appeared in the plaza. Do you want to press it?",
};

export const NYON_STATUE: Record<NyonStatue, string> = {
  "nyonStatue.memory": "In memory of",
  "nyonStatue.description":
    "The legendary knight responsible for clearing the goblins from the mines. Shortly after his victory he died by poisoning from a Goblin conspirator. The Sunflower Citizens erected this statue with his armor to commemorate his conquests.",
};

const obsessionDialogue: Record<ObsessionDialogue, string> = {
  "obsessionDialogue.line1":
    "Ah, the {{itemName}}! I only wish to see it, not possess. Show it to me, and {{seasonalTicket}}s will be your reward.",
  "obsessionDialogue.line2":
    "You've brought the {{itemName}}? I merely want to gaze upon it. Let me see, and {{seasonalTicket}}s shall be yours.",
  "obsessionDialogue.line3":
    "Is that the {{itemName}} you have? A mere glance is all I desire. Fore this, you'll receive {{seasonalTicket}}s.",
  "obsessionDialogue.line4":
    "The {{itemName}}! I don't want to keep it, just to behold it. Show it to me, and {{seasonalTicket}}s are yours.",
  "obsessionDialogue.line5":
    "You offer a view of the {{itemName}}? All I ask is to see it briefly. For your generosity, {{seasonalTicket}}s will be granted to you.",
};

const offer: Record<Offer, string> = {
  "offer.okxOffer": "Howdy Farmer, I have an exclusive OKX offer for you!",
  "offer.beginWithNFT":
    "To begin you will need to mint a free Farm NFT. This will include:",
  "offer.getStarterPack": "Get Starter Pack Now",
  "offer.newHere": "Howdy Farmer, you look new here!",
  "offer.getStarted": "Get Started Now",
  "offer.not.enough.BlockBucks": "You do not have enough Block Bucks!",
};

const onboarding: Record<Onboarding, string> = {
  "onboarding.welcome": "Welcome to decentralized gaming!",
  "onboarding.step.one": "Step 1/3",
  "onboarding.step.two": "Step 2/3 (Create a wallet)",
  "onboarding.step.three": "Step 3/3 (Create your NFT)",
  "onboarding.intro.one":
    "In your travels, you will earn rare NFTs that need to be protected. To keep these secure you'll need a Web3 wallet.",
  "onboarding.intro.two": "To begin your journey, your wallet will receive:",
  "onboarding.cheer": "You're almost there!",
  "onboarding.form.one": "Fill in your details",
  "onboarding.form.two":
    "and we will send a free NFT to play. (This will take us 3-7 days)",
  "onboarding.duplicateUser.one": "Already signed up!",
  "onboarding.duplicateUser.two":
    "It looks like you have already registered for beta testing using a different address. Only one address can be used during beta testing. ",
  "onboarding.starterPack": "Starter Pack",
  "onboarding.settingWallet": "Setting up your wallet",
  "onboarding.wallet.one":
    "There are many wallet providers out there, but we've partnered with Sequence because they're easy to use and secure.",
  "onboarding.wallet.two":
    "Select a sign-up method in the pop-up window and you're good to go. I'll see you back here in just a minute!",
  "onboarding.wallet.haveWallet": "I already have a wallet",
  "onboarding.wallet.createButton": "Create wallet",
  "onboarding.wallet.acceptButton": "Accept terms of service",
  "onboarding.buyFarm.title": "Buy your farm!",
  "onboarding.buyFarm.one":
    "Now that your wallet is all set up, it's time to get your very own farm NFT! ",
  "onboarding.buyFarm.two":
    "This NFT will securely store all your progress in Sunflower Land and allow you to keep coming back to tend to your farm.",
  "onboarding.wallet.already": "I already have a wallet ",
};

const onCollectReward: Record<OnCollectReward, string> = {
  "onCollectReward.Missing.Seed": "Missing Seeds",
  "onCollectReward.Market": "Go to the Market to purchase seeds.",
  "onCollectReward.Missing.Shovel": "Missing Shovel",
  "onCollectReward.Missing.Shovel.description":
    "Expand your island to find it.",
};

const orderhelp: Record<OrderHelp, string> = {
  "orderhelp.Skip.hour": "You're only able to skip an order after 24 hours!",
  "orderhelp.New.Season":
    "A new season approaches, ticket deliveries will temporarily close.",
  "orderhelp.New.Season.arrival": "New seasonal deliveries opening soon.",
  "orderhelp.Wisely": "Choose wisely!",
  "orderhelp.SkipIn": "Skip in",
  "orderhelp.NoRight": "Not Right Now",
  "orderhelp.ticket.deliveries.closed":
    "Ticket deliveries are currently closed",
};

const pending: Record<Pending, string> = {
  "pending.calcul": "The results are being calculated.",
  "pending.comeback": "Come back later.",
};

const personHood: Record<PersonHood, string> = {
  "personHood.Details": "Failed Loading Personhood Details",
  "personHood.Identify": "Your identity could not be verified",
  "personHood.Congrat": "Congratulations, your identity has been verified!",
};

const pickserver: Record<Pickserver, string> = {
  "pickserver.server": "Choose a server to join",
  "pickserver.full": "FULL",
  "pickserver.explore": "Explore custom project islands.",
  "pickserver.built": "Do you want to build your own island?",
};

const piratechest: Record<PirateChest, string> = {
  "piratechest.greeting":
    "Ahoy matey! Set sail and come back later for a chest full of swashbuckling rewards!",
  "piratechest.refreshesIn": "Chest Refreshes in:",
  "piratechest.warning":
    "Ahoy there! This chest be filled with treasures fit for a pirate king, but beware, only those with a pirate skin can open it and claim the booty within!",
};

const pirateQuest: Record<PirateQuest, string> = {
  "questDescription.farmerQuest1": "Harvest 1000 Sunflowers",
  "questDescription.fruitQuest1": "Harvest 10 Blueberries",
  "questDescription.fruitQuest2": "Harvest 100 Oranges",
  "questDescription.fruitQuest3": "Harvest 750 Apples",
  "questDescription.pirateQuest1": "Dig 30 holes",
  "questDescription.pirateQuest2": "Collect 10 Seaweeds",
  "questDescription.pirateQuest3": "Collect 10 Pipis",
  "questDescription.pirateQuest4": "Collect 5 Corals",
  "piratequest.welcome":
    "Welcome to the high seas of adventure, where ye be tested as a true pirate. Set sail on a journey to find the richest pillage and become the greatest pirate to ever grace the ocean waves.",
  "piratequest.finestPirate":
    "Ahoy, ye be the finest pirate on the seven seas with yer loot!!",
};

const playerTrade: Record<PlayerTrade, string> = {
  "playerTrade.no.trade": "No trades available.",
  "playerTrade.max.item": "Oh no! You've reached your max items.",
  "playerTrade.Progress":
    "Please store your progress on chain before continuing.",
  "playerTrade.transaction":
    "Oh oh! It looks like you have a transaction in progress.",
  "playerTrade.Please": "Please allow 5 minutes before continuing.",
  "playerTrade.sold": "Sold",
  "playerTrade.sale": "For sale: ",
  "playerTrade.title.congrat": "Congratulations, your listing was purchased!",
};

const portal: Record<Portal, string> = {
  "portal.wrong": "Something went wrong",
  "portal.unauthorised": "unauthorised",
  "portal.example.claimPrize": "Claim your prize!",
  "portal.example.intro": "Howdy Howdy, welcome to this test portal",
  "portal.example.purchase": "Purchase fake pass",
};

const promo: Record<Promo, string> = {
  "promo.cdcBonus": "Crypto.com Bonus!",
  "promo.expandLand": "Expand your land twice to claim 100 SFL.",
};

const purchaseableBaitTranslation: Record<PurchaseableBaitTranslation, string> =
  {
    "purchaseableBait.fishingLure.description":
      "Great for catching rare fish ! ",
  };

const pwaInstall: Record<PwaInstall, string> = {
  "install.app": "Install App",
  "magic.link": "Magic Link",
  "generating.link": "Generating Link",
  "generating.code": "Generating Code",
  "install.app.desktop.description":
    "Scan the code below to install on your device. Please be sure to open in either Safari or Chrome browser.",
  "install.app.mobile.metamask.description":
    "Copy the magic link below and open it in {{browser}} on your device to install!",
  "do.not.share.link": "Do not share this link!",
  "do.not.share.code": "Do not share this code!",
  "qr.code.not.working": "QR code not working?",
};

const quest: Record<Quest, string> = {
  "quest.mint.free": "Mint Free Wearable",
  "quest.equipWearable": "Equip this wearable on your Bumpkin",
  "quest.congrats": "Congratulations, you have minted a {{wearable}}",
};

const questions: Record<Questions, string> = {
  "questions.obtain.MATIC": "How do I get MATIC?",
  "questions.lowCash": "Short on Cash?",
};

const reaction: Record<Reaction, string> = {
  "reaction.bumpkin": "Lvl 3 Bumpkin",
  "reaction.bumpkin.10": "Lvl 10 Bumpkin",
  "reaction.bumpkin.30": "Lvl 30 Bumpkin",
  "reaction.bumpkin.40": "Lvl 40 Bumpkin",
  "reaction.sunflowers": "Harvest 100,000 Sunflowers",
  "reaction.crops": "Harvest 10,000 crops",
  "reaction.goblin": "Turn into a Goblin",
  "reaction.crown": "Own a Goblin Crown",
};

const reactionBud: Record<ReactionBud, string> = {
  "reaction.bud.show": "Show your buds",
  "reaction.bud.select": "Select a bud to place in the plaza",
  "reaction.bud.noFound": "No buds found in your inventory",
};

const refunded: Record<Refunded, string> = {
  "refunded.itemsReturned": "Your items have been returned to your inventory",
  "refunded.goodLuck": "Good luck next time!",
};

const removeKuebiko: Record<RemoveKuebiko, string> = {
  "removeKuebiko.title": "Remove Kuebiko",
  "removeKuebiko.description":
    "This action will remove all your seeds from your inventory.",
  "removeKuebiko.removeSeeds": "Remove seeds",
};

const removeHungryCaterpillar: Record<RemoveHungryCaterpillar, string> = {
  "removeHungryCaterpillar.title": "Remove Hungry Caterpillar?",
  "removeHungryCaterpillar.description":
    "This action will remove all your flower seeds from your inventory.",
  "removeHungryCaterpillar.removeFlowerSeeds": "Remove flower seeds",
  "removeHungryCaterpillar.confirmation":
    "Are you sure you want to remove your Hungry Caterpillar?",
};

const removeCropMachine: Record<RemoveCropMachine, string> = {
  "removeCropMachine.title": "Remove Crop Machine?",
  "removeCropMachine.description":
    "This action will remove all the oil stored in your crop machine.",
};

const resale: Record<Resale, string> = {
  "resale.actionText": "Resale",
};

const resources: Record<Resources, string> = {
  "resources.recoversIn": "Recovers in:",
  "resources.boulder.rareMineFound": "You found a rare mine!",
  "resources.boulder.advancedMining": "Advanced mining on its way.",
};

const resourceTerms: Record<ResourceTerms, string> = {
  "chicken.description": "Used to lay eggs",
  "magicMushroom.description": "Used to cook advanced recipes",
  "wildMushroom.description": "Used to cook basic recipes",
  "honey.description": "Used to sweeten your cooking",
};

const restock: Record<Restock, string> = {
  "restock.one.buck":
    "You are going to use 1 Block Buck to restock all shop items in the game.",
  "restock.sure": "Are you sure you want to Restock?",
  "restock.tooManySeeds": "You have too many seeds in your basket!",
  "seeds.reachingInventoryLimit": "You are reaching your seed basket limit!",
};

const retreatTerms: Record<RetreatTerms, string> = {
  "retreatTerms.lookingForRareItems": "Looking for rare items?",
  "retreatTerms.resale.one":
    "Players can trade special items they crafted in-game.",
  "retreatTerms.resale.two":
    "You can purchase these on secondary marketplaces like OpenSea.",
  "retreatTerms.resale.three": "View items on OpenSea",
};

const rewardTerms: Record<RewardTerms, string> = {
  "reward.daily.reward": "Daily Reward",
  "reward.streak": " day streak",
  "reward.comeBackLater": "Come back later for more rewards",
  "reward.nextBonus": "Next bonus:",
  "reward.unlock": "Unlock Reward",
  "reward.open": "Open reward",
  "reward.lvlRequirement": "You must be level 3 to claim daily rewards.",
  "reward.whatCouldItBe": "What could it be?",
  "reward.streakBonus": "3x streak bonus",
  "reward.found": "You found",
  "reward.spendWisely": "Spend it wisely.",
  "reward.wearable": "A wearable for your Bumpkin",
  "reward.promo.code": "Enter your promo code:",
  "reward.woohoo": "Woohoo! You found a hidden reward.",
  "reward.connectWeb3Wallet": "Connect a Web3 Wallet for a daily reward.",
  "reward.factionPoints": "Earn glory for your faction!",
};

const rulesGameStart: Record<RulesGameStart, string> = {
  "rules.gameStart":
    "At the beginning of the game, the plant will randomly pick a combination of 4 potions and 1 'chaos' potion. The combination can be all different or all the same.",
  "rules.chaosPotionRule":
    "If you add the 'chaos' potion your score for that attempt will be 0.",
  "rules.potion.feedback":
    "Select your potions and unveil the secrets of the plants!",
  "BloomBoost.description": "Ignite your plants with vibrant blooms!",
  "DreamDrip.description":
    "Drizzle your plants with magical dreams and fantasies.",
  "EarthEssence.description":
    "Harness the power of the earth to nurture your plants.",
  "FlowerPower.description":
    "Unleash a burst of floral energy upon your plants.",
  "SilverSyrup.description":
    "A sweet syrup to bring out the best in your plants.",
  "HappyHooch.description":
    "A potion to bring joy and laughter to your plants.",
  "OrganicOasis.description":
    "Create a lush, organic paradise for your plants.",
};

const rulesTerms: Record<RulesTerms, string> = {
  "game.rules": "Game Rules",
  "rules.oneAccountPerPlayer": "1 account per player",
  "rules.gameNotFinancialProduct": "This is a game. Not a financial product.",
  "rules.noBots": "No botting or automation",
  "rules.termsOfService": "Terms of Service",
};

const sceneDialogueKey: Record<SceneDialogueKey, string> = {
  "sceneDialogues.chefIsBusy": "Chef is busy",
};

const seasonTerms: Record<SeasonTerms, string> = {
  "season.access": "You have access to:",
  "season.banner": "Seasonal Banner",
  "season.bonusTickets": "Bonus Seasonal Tickets",
  "season.boostXP": "+10% EXP from food",
  "season.buyNow": "Buy Now",
  "season.discount": "25% SFL discount on seasonal items",
  "season.exclusiveOffer": "Exclusive offer!",
  "season.goodLuck": "Good luck in the season!",
  "season.includes": "Includes:",
  "season.limitedOffer": " Limited time only!",
  "season.wearableAirdrop": "Seasonal Wearable Airdrop",
  "season.place.land": "You must place it on your land",
  "season.megastore.discount": "Megastore SFL discount",
  "season.supporter.gift": "Supporter Gift",
  "season.free.season.passes": "Free Season Banners",
  "season.free.season.passes.description": "Receive banners for every Season",
  "season.vip.access": "Season VIP Access",
  "season.vip.claim": "Claim your monthly seasonal airdrop.",
  "season.vip.description":
    "Unlock perks, discounts, bonus tickets, airdrops and more!",
  "season.mystery.gift": "Mystery Gift",
  "season.xp.boost": "10% XP boost",
  "season.lifetime.farmer": "Lifetime Farmer",
  "season.free.with.lifetime": "Free with Lifetime Farmer",
};

const share: Record<Share, string> = {
  "share.TweetText": "Visit My Sunflower Land Farm",
  "share.ShareYourFarmLink": "Share Your Farm Link",
  "share.ShowOffToFarmers":
    "Show off to fellow farmers by sharing your farm link",
  "share.FarmNFTImageAlt": "Sunflower-Land Farm NFT Image",
  "share.CopyFarmURL": "Copy farm URL",
  "share.Tweet": "Tweet",
  "share.chooseServer": "Choose a server to join",
  "share.FULL": "FULL",
  "share.exploreCustomIslands": "Explore custom project islands.",
  "share.buildYourOwnIsland": "Do you want to build your own island?",
};

const sharkBumpkinDialogues: Record<SharkBumpkinDialogues, string> = {
  "sharkBumpkin.dialogue.shhhh": "Shhhh!",
  "sharkBumpkin.dialogue.scareGoblins": "I'm trying to scare the Goblins.",
};

const shelly: Record<Shelly, string> = {
  "shelly.Dialogue.one": "Howdy, Bumpkin! Welcome to the beach!",
  "shelly.Dialogue.two":
    "After a hard day's work on your farm, there's no better place to kick back and enjoy the waves.",
  "shelly.Dialogue.three":
    "But we've got a bit of a situation. A massive kraken has emerged and taken control of our beloved beach.",
  "shelly.Dialogue.four":
    "We could really use your help, dear. Grab your bait and fishing rods, and together, we'll tackle this colossal problem!",
  "shelly.Dialogue.five":
    "For each tentacle you catch I will provide you with valuable mermaid scales!",
  "shelly.Dialogue.letsgo": "Let's do it!",
};

const shellyDialogue: Record<ShellyDialogue, string> = {
  "shellyPanelContent.tasksFrozen":
    "I am waiting for the new season to start. Come back to me then!",
  "shellyPanelContent.canTrade":
    "Oh my, you've got a Kraken Tentacle! I'll swap it for some mermaid scales.",
  "shellyPanelContent.cannotTrade":
    "Looks like you don't have any Kraken Tentacles at hand! Come back when you do.",
  "shellyPanelContent.swap": "Swap",
  "krakenIntro.congrats":
    "Well done! The Kraken has stopped terrorising Bumpkins.",
  "krakenIntro.noMoreTentacles":
    "You have collected all the tentacles for the week. Let's keep a close eye on it, I'm sure the hunger will return.",
  "krakenIntro.gotIt": "Got it!",
  "krakenIntro.appetiteChanges":
    "The Kraken's appetite is constantly changing.",
  "krakenIntro.currentHunger":
    "Right now it has a hunger for ....Phew, that's better than Bumpkins.",
  "krakenIntro.catchInstruction":
    "Head to your fishing spot and try catch the beast!",
};

const shopItems: Record<ShopItems, string> = {
  "betty.post.sale.one": "Hey, hey! Welcome back.",
  "betty.post.sale.two":
    "You've helped solve the crop shortage and prices have returned to normal.",
  "betty.post.sale.three":
    "It's time to move onto some bigger and better crops!",
  "betty.welcome": "Welcome to my market. What would you like to do?",
  "betty.buySeeds": "Buy seeds",
  "betty.sellCrops": "Sell crops",
};

const showingFarm: Record<ShowingFarm, string> = {
  "showing.farm": "Showing on Farm",
  "showing.wallet": "In Wallet",
};

const snorklerDialogues: Record<SnorklerDialogues, string> = {
  "snorkler.vastOcean": "It is a vast ocean!",
  "snorkler.goldBeneath": "There must be gold somewhere beneath the surface.",
};

const somethingWentWrong: Record<SomethingWentWrong, string> = {
  "somethingWentWrong.supportTeam": "support team",
  "somethingWentWrong.jumpingOver": "or jumping over to our",
  "somethingWentWrong.askingCommunity": "and asking our community.",
};

const specialEvent: Record<SpecialEvent, string> = {
  "special.event.easterIntro":
    "Oh no, my 6 rabbits have gone missing again....they must be searching for food. Can you help me find them? They look similar to other rabbits but have a unique sparkle. Click on them to capture them.",
  "special.event.rabbitsMissing": "Rabbits missing",
  "special.event.link": "Airdrop link",
  "special.event.claimForm":
    "Please fill in the form below to claim your airdrop.",
  "special.event.airdropHandling":
    "Airdrops are handled externally and may take a few days to arrive.",
  "special.event.walletRequired": "Wallet Required",
  "special.event.web3Wallet":
    "A Web3 wallet is required for this event as it contains an Airdrop.",
  "special.event.airdrop": "Airdrop",
  "special.event.finishedLabel": "Event Finished",
  "special.event.finished":
    "This event has finished. Stay tuned for future events!",
  "special.event.ineligible":
    "There is no work needing to be done right now, thanks for stopping by though!",
};

const statements: Record<Statements, string> = {
  "statements.adventure": "Start your Adventure!",
  "statements.auctioneer.one":
    "I've travelled far and wide across Sunflower Land in search for exotic treasures to bring to my fellow Bumpkins.",
  "statements.auctioneer.two":
    "Don't miss one of the Auctions where a swing of my mighty hammer can turn your hard-earned resources into rare, minted marvels!",
  "statements.beta.one": "Beta is only accessible to our OG farmers.",
  "statements.beta.two": "Stay tuned for updates. We will be going live soon!",
  "statements.better.luck": "Better luck next time!",
  "statements.blacklist.one":
    "The anti-bot and multi-account detection system has picked up strange behaviour. Actions have been restricted.",
  "statements.blacklist.two":
    "Please submit a ticket with details and we will get back to you.",
  "statements.clickBottle": "Click on a bottle to add to your guess",
  "statements.clock.one":
    "Uh oh, it looks like your clock is not in sync with the game. Set date and time to automatic to avoid disruptions",
  "statements.clock.two":
    "Need help to sync your clock? Have a look at our guide!",
  "statements.conversation.one": "I've got something for you!",
  "statements.cooldown":
    "To protect the community, we require a 2 week waiting period before this farm can be accessed.",
  "statements.docs": "Go to docs",
  "statements.dontRefresh": "Do not refresh your browser!",
  "statements.guide.one": "Go to guide",
  "statements.guide.two": "Check out this guide to help you get started.",
  "statements.jigger.one":
    "You will be redirected to a 3rd party service to take a quick selfie. Never share any personal information or crypto data.",
  "statements.jigger.two": "You failed the Jigger Proof of Humanity.",
  "statements.jigger.three":
    "You can continue playing, but some actions will be restricted while you are being verified.",
  "statements.jigger.four":
    "Please reach out to support@usejigger.com if you beleive this was a mistake.",
  "statements.jigger.five":
    "Your proof of humanity is still being processed by Jigger. This can take up to 2 hours.",
  "statements.jigger.six":
    "The multi-account detection system has picked up strange behaviour.",
  "statements.lvlUp": "Feed your Bumpkin to level up",
  "statements.maintenance":
    "New things are coming! Thanks for your patience, the game will be live again shortly.",
  "statements.minted": "The goblins have crafted your ",
  "statements.minting":
    "Please be patient while your item is minted on the Blockchain.",
  "statements.mutant.chicken":
    "Congratulations, your chicken has laid a very rare mutant chicken!",
  "statements.news":
    "Receive the latest news, complete chores & feed your Bumpkin.",
  "statements.ohNo": "Oh no! Something went wrong!",
  "statements.openGuide": "Open guide",
  "statements.patience": "Thank you for your patience.",
  "statements.potionRule.one":
    "Objective: Figure out the combination. You have 3 tries to get it right. The game will end if you have a perfect potion or if you run out of tries.",
  "statements.potionRule.two":
    "Choose a combination of potions and attempt to mix them.",
  "statements.potionRule.three":
    "Adjust your next combination based on the feedback given.",
  "statements.potionRule.four":
    "When the game is complete, the score for your last attempt will determine help to determine your reward.",
  "statements.potionRule.five": "A perfect potion in the perfect position",
  "statements.potionRule.six": "Correct potion but wrong position",
  "statements.potionRule.seven": "Oops, wrong potion",
  "statements.sflLim.one": "You have reached the daily SFL limit.",
  "statements.sflLim.two":
    "You can continue playing, but will need to wait until tomorrow to sync again.",
  "statements.sniped": "Oh no! Another player bought that trade before you.",
  "statements.switchNetwork": "Add or Switch Network",
  "statements.sync":
    "Please bear with us while we sync all of your data on chain.",
  "statements.tapCont": "Tap to continue",
  "statements.price.change":
    "Oh no! Looks like the price has changed, please try again!",

  "statements.tutorial.one":
    "The boat will take you between islands where you can discover new lands and exciting adventures.",
  "statements.tutorial.two":
    "Many lands are far away and will require an experienced Bumpkin before you can visit them.",
  "statements.tutorial.three":
    "Your adventure begins now, how far you explore ... that is on you.",
  "statements.visit.firePit":
    "Visit the Fire Pit to cook food and feed your Bumpkin.",
  "statements.wishing.well.info.four": "provide liquidity",
  "statements.wishing.well.info.five": " in the game",
  "statements.wishing.well.info.six": "providing liquidity",
  "statements.wishing.well.worthwell":
    "There is currently {{rewards}} SFL worth of rewards in the well!",
  "statements.wishing.well.look.like":
    "It doesn't look like you are providing liquidity yet.",
  "statements.wishing.well.lucky": "Let's see how lucky you are!",
  "statements.wrongChain.one":
    "Check out this guide to help you get connected.",
  "statements.feed.bumpkin.one": "You have no food in your inventory.",
  "statements.feed.bumpkin.two":
    "You will need to cook food in order to feed your Bumpkin.",
  "statements.empty.chest": "Your chest is empty, discover rare items today!",
  "statements.chest.captcha": "Tap the chest to open it",
  "statements.frankie.plaza": "Travel to the plaza to craft rare decorations!",
  "statements.blacksmith.plaza": "Travel to the Plaza for more rare items.",
  "statements.water.well.needed.one": "Additional Water Well required.",
  "statements.water.well.needed.two":
    "In order to support more crops, build a well.",
  "statements.soldOut": "Sold out",
  "statements.soldOutWearables": "View sold out wearables",
  "statements.craft.composter": "Craft at Composter",
  "statements.wallet.to.inventory.transfer": "Deposit items from your wallet",
  "statements.crop.water": "These crops need water!",
  "statements.daily.limit": "Daily Limit: ",
  "statements.sure.buy": "Are you sure you want to buy {{item}}?",
  "statements.perplayer": "per Player",
  "statements.minted.goToChest": "Go to your chest and place it on your island",
  "statements.minted.withdrawAfterMint":
    "You will be able to withdraw your item once the mint has finished",
  "statements.startgame": "Start Game",

  "statements.session.expired":
    "It looks like your session has expired. Please refresh the page to continue playing.",
  "statements.translation.joinDiscord": "Join Discord",
};

const stopGoblin: Record<StopGoblin, string> = {
  "stopGoblin.stop.goblin": "Stop the Goblins!",
  "stopGoblin.stop.moon": "Stop the Moon Seekers!",
  "stopGoblin.tap.one": "Tap the Moon Seekers before they steal your resources",
  "stopGoblin.tap.two": "Tap the Goblins before they eat your food",
  "stopGoblin.left": "Attempts left: {{attemptsLeft}}",
};

const swarming: Record<Swarming, string> = {
  "swarming.tooLongToFarm":
    "Pay attention, you took too long to farm your crops!",
  "swarming.goblinsTakenOver":
    "The Goblins have taken over your farm. You must wait for them to leave",
};

const tieBreaker: Record<TieBreaker, string> = {
  "tieBreaker.tiebreaker": "Tiebreaker",
  "tieBreaker.closeBid":
    " A tie breaker is chosen by whichever Bumpkin has more experience. Unfortunately you lost.",
  "tieBreaker.betterLuck":
    "Time to eat some more cakes! Better luck next time.",
  "tieBreaker.refund": "Refund resource",
};

const toolDescriptions: Record<ToolDescriptions, string> = {
  // Tools
  "description.axe": "Used to chop wood",
  "description.pickaxe": "Used to mine stone",
  "description.stone.pickaxe": "Used to mine iron",
  "description.iron.pickaxe": "Used to mine gold",
  "description.gold.pickaxe": "Used to mine crimstone and sunstone",
  "description.rod": "Used to catch fish",
  "description.rusty.shovel": "Used to remove buildings and collectibles",
  "description.shovel": "Plant and harvest crops.",
  "description.sand.shovel": "Used for digging treasure",
  "description.sand.drill": "Drill deep for uncommon or rare treasure",
  "description.oil.drill": "Drill for oil",
};

const trader: Record<Trader, string> = {
  "trader.you.pay": "You pay",
  "trader.price.per.unit": "Price per unit",
  "trader.goblin.fee": "Goblin fee",
  "trader.they.receive": "They receive",
  "trader.seller.receives": "Seller receives",
  "trader.buyer.pays": "Buyer pays",
  "trader.cancel.trade": "Cancel trade",
  "trader.you.receive": "You receive",
  "trader.PoH":
    "Proof of humanity is needed for this feature. Please take a quick selfie.",
  "trader.start.verification": "Start Verification",
};

const transactionTerms: Record<TransactionTerms, string> = {
  "transaction.starterOffer": "Starter offer",
  "transaction.t&c.one":
    "Accept the terms and conditions to sign in to Sunflower Land.",
  "transaction.t&c.two": "Accept Terms and Conditions",
  "transaction.mintFarm": "Your farm has been minted!",
  "transaction.farm.ready": "Your farm will be ready in",
  "transaction.networkFeeRequired":
    "To secure your NFTs on the Blockchain, a small network fee is required.",
  "transaction.estimated.fee": "Estimated fee",
  "transaction.payCardCash": "Pay with Card/Cash",
  "transaction.creditCard": "*Credit card fees apply",
  "transaction.rejected": "Transaction Rejected!",
  "transaction.message0":
    "You need to accept the transaction in the metamask popup to continue.",
  "transaction.noFee":
    "This request will not trigger a blockchain transaction or cost any gas fees.",
  "transaction.chooseDonationGame":
    "Thank you for your support! Kindly choose the game that you like donate to.",
  "transaction.minblockbucks": "Minimum 5 Block Bucks",
  "transaction.payCash": "Pay with Cash",
  "transaction.matic": "Matic",
  "transaction.payMatic": "Pay with MATIC",
  "transaction.storeBlockBucks": "Block bucks will be stored on your farm.",
  "transaction.excludeFees": "*Prices exclude transaction fees.",
  "transaction.storeProgress.blockchain.one":
    "Do you wish to store your progress on the Blockchain?",
  "transaction.storeProgress.blockchain.two":
    "Storing data on the Blockchain does not restock shops.",
  "transaction.storeProgress": "Store progress",
  "transaction.storeProgress.chain": "Store progress on chain",
  "transaction.storeProgress.success":
    "Woohoo! Your items are secured on the Blockchain!",
  "transaction.trade.congrats": "Congratulations, your trade was successful",
  "transaction.processing": "Processing your transaction.",
  "transaction.pleaseWait":
    "Please wait for your transaction to be confirmed by the Blockchain.",
  "transaction.unconfirmed.reset":
    "After 5 minutes, any unconfirmed transactions will be reset.",
  "transaction.withdraw.one": "Withdrawing",
  "transaction.withdraw.sent": "Your items/tokens have been sent to:",
  "transaction.withdraw.view": "You can view your items on",
  "transaction.openSea": "OpenSea",
  "transaction.withdraw.four":
    "You can view your tokens by importing the SFL Token to your wallet.",
  "transaction.withdraw.five": "Import SFL Token to MetaMask",
  "transaction.displayItems":
    "Please note that OpenSea can take up to 30 minutes to display your items. You can also view your items on",
  "transaction.withdraw.polygon": "PolygonScan",
  "transaction.id": "Transaction ID:",
  "transaction.termsOfService": "Accept the terms of service",
  "transaction.termsOfService.one":
    "In order to buy your farm you will need to accept the Sunflower Land terms of service.",
  "transaction.termsOfService.two":
    "This step will take you back to your new sequence wallet to accept the terms of service.",
  "transaction.buy.BlockBucks": "Buy Block Bucks",
};

const transfer: Record<Transfer, string> = {
  "transfer.sure.adress":
    "Please ensure that the address you provided is on the Polygon Blockchain, is correct and is owned by you. There is no recovery from incorrect addresses.",
  "transfer.Account":
    "Your Account #{{farmID}} has been transferred to {{receivingAddress}}!",
  "transfer.Farm": "Transferring your farm!",
  "transfer.Refresh": "Do not refresh this browser",
  "transfer.Taccount": "Transfer your account",
  "transfer.address": "Wallet address: ",
};

const treasureModal: Record<TreasureModal, string> = {
  "treasureModal.noShovelTitle": "No Sand Shovel!",
  "treasureModal.needShovel":
    "You need to have a Sand Shovel equipped to be able to dig for treasure!",
  "treasureModal.purchaseShovel":
    "If you need to purchase one, you can head to the Treasure Shop at the southern end of the island.",
  "treasureModal.gotIt": "Got it",
  "treasureModal.maxHolesTitle": "Max holes reached!",
  "treasureModal.saveTreasure": "Save some treasure for the rest of us!",
  "treasureModal.comeBackTomorrow":
    "Come back tomorrow to search for more treasure.",
  "treasureModal.drilling": "Drilling",
};

const tutorialPage: Record<TutorialPage, string> = {
  "tutorial.pageOne.text1":
    "This menu will show you the levels required to unlock new buildings.",
  "tutorial.pageOne.text2":
    "Some of these can be built multiple times once you reach a certain level.",
  "tutorial.pageTwo.text1":
    "Buildings are an important way to progress through the game as they will help you to expand and evolve.",
  "tutorial.pageTwo.text2":
    "Lets start by leveling up our Bumpkin so we can get the Workbench to learn about tools.",
};

const username: Record<Username, string> = {
  "username.tooShort": "Username is too short (min 3 characters)",
  "username.tooLong": "Username is too long (max 12 characters)",
  "username.invalidChar": "Username contains invalid characters",
  "username.startWithLetter": "Username must start with a letter",
};

const visitislandEnter: Record<VisitislandEnter, string> = {
  "visitIsland.enterIslandId": "Enter Island ID:",
  "visitIsland.visit": "Visit",
};

const visitislandNotFound: Record<VisitislandNotFound, string> = {
  "visitislandNotFound.title": "Island Not Found!",
};

const wallet: Record<Wallet, string> = {
  "wallet.connect": "Connect your wallet",
  "wallet.linkWeb3": "Link a Web3 Wallet",
  "wallet.setupWeb3":
    "To access this feature, you must first setup a Web3 wallet",
  "wallet.wrongWallet": "Wrong Wallet",
  "wallet.connectedWrongWallet": "You are connected to the wrong wallet",
  "wallet.missingNFT": "Missing NFT",
  "wallet.requireFarmNFT":
    "Some actions require a Farm NFT. This helps keep all of your items secure on the Blockchain",
  "wallet.uniqueFarmNFT":
    "A unique farm NFT will be minted to store your progress",
  "wallet.mintFreeNFT": "Mint your NFT",
  "wallet.wrongChain": "Wrong Chain",
  "wallet.walletAlreadyLinked": "Wallet already linked",
  "wallet.linkAnotherWallet": "Please link another wallet",
  "wallet.transferFarm":
    "Please transfer the farm to another wallet in order to mint the new account",
  "wallet.signRequest": "Sign",
  "wallet.signRequestInWallet": "Sign the request in your wallet to continue",
};

const warningTerms: Record<WarningTerms, string> = {
  "warning.noAxe": "No Axe Selected!",
  "warning.chat.maxCharacters": "Max characters",
  "warning.chat.noSpecialCharacters": "No special characters",
  "warning.level.required": "Level {{lvl}} required",
  "warning.hoarding.message":
    "Are you {{indefiniteArticle}} {{itemName}} hoarder?!",
  // indefiniteArticle: 'a' or 'an' depending if first letter is vowel.
  // If this is not used in your language, leave the `{{indefiniteArticle}}` part out
  "warning.hoarding.indefiniteArticle.a": "a", // Leave this blank if not needed
  "warning.hoarding.indefiniteArticle.an": "an", // Leave this blank if not needed
  "warning.hoarding.one":
    "Word is that Goblins are known to raid farms that have an abundance of resources.",
  "warning.hoarding.two":
    "To protect yourself and keep those precious resources safe, please store your progress on chain.",
  "travelRequirement.notice": "Before travelling, you must level up.",
};

const welcomeTerms: Record<WelcomeTerms, string> = {
  "welcome.createAccount": "Create account",
  "welcome.creatingAccount": "Creating your account",
  "welcome.email": "Email & Social Login",
  "welcome.login": "Login",
  "welcome.needHelp": "Need help?",
  "welcome.otherWallets": "Other wallets",
  "welcome.signingIn": "Signing you in",
  "welcome.signIn.Message":
    "Accept the signature request in your browser wallet to login.",
  "welcome.takeover.ownership":
    "It looks like you are new to Sunflower Land and have claimed ownership of another player's account.",
  "welcome.promo": "Add Promo Code",
  "welcome.offline":
    "Hey there Bumpkin, it looks like you aren't online. Please check your network connection.",
};

const winner: Record<Winner, string> = {
  "winner.mintTime": "You have 24 hours to mint your prize.",
  "winner.mintTime.one": "No items available to craft!",
};

const wishingWellTerms: Record<WishingWell, string> = {
  "wishingWell.makeWish": "Grant a new wish and see how lucky you are!",
  "wishingWell.newWish":
    "A new wish has been made for you based on your current balance of LP tokens!",
  "wishingWell.noReward":
    "You have no reward available! Liquidity needs to be held for 3 days to get a reward!",
  "wishingWell.wish.lucky": "Grant a new wish and see how lucky you are!",
  "wishingWell.sflRewardsReceived": "You received {{reward}} SFL!",
  "wishingWell.wish.grantTime": "It's time to grant your wish!",
  "wishingWell.wish.granted": "Your wish has been granted.",
  "wishingWell.wish.made": "You have made a wish!",
  "wishingWell.wish.timeTillNextWish": "Time till next wish: {{nextWishTime}}",
  "wishingWell.wish.thanksForSupport":
    "Thanks for supporting the project and making a wish.",
  "wishingWell.wish.comeBackAfter":
    "Come back in {{nextWishTime}} to see just how lucky you have been!",
  "wishingWell.wish.warning.one":
    "Be aware that only the LP tokens you held at the time the wish was made will be considered when the wish is granted.",
  "wishingWell.wish.warning.two":
    "If you remove your liquidity during this time you won't receive any rewards.",
  "wishingWell.info.one":
    "The wishing well is a magical place where SFL rewards can be made just by making a wish!",
  "wishingWell.info.two":
    "Wishes are granted to farmers who provided liquidity in the game.",
  "wishingWell.info.three":
    "Looks like you have those magic LP tokens in your wallet!",
  "wishingWell.moreInfo": "More info",
  "wishingWell.noLiquidity":
    "It doesn't look like you're providing liquidity yet. More info,",
  "wishingWell.rewardsInWell": "Amount of rewards in the well",
  "wishingWell.luck": "Let's see how lucky you are!",
};

const withdraw: Record<Withdraw, string> = {
  "withdraw.proof":
    "Proof of humanity is needed for this feature. Please take a quick selfie.",
  "withdraw.verification": "Start Verification",
  "withdraw.unsave": "Any unsaved progress will be lost.",
  "withdraw.sync":
    "You can only withdraw items that you have synced to the blockchain.",
  "withdraw.available": "Available May 9th",
  "withdraw.sfl.available": "SFL is available on-chain",
  "withdraw.send.wallet": "Sent to your wallet",
  "withdraw.choose": "Choose amount to withdraw",
  "withdraw.receive": "You will receive: {{sflReceived}}",
  "withdraw.select.item": "Select items to withdraw",
  "withdraw.opensea":
    "Once withdrawn, you will be able to view your items on OpenSea.",
  "withdraw.restricted":
    "Some items cannot be withdrawn. Other items may be restricted when",
  "withdraw.bumpkin.wearing":
    "Your Bumpkin is currently wearing the following item(s) that can't be withdrawn. You will need to unequip them before you can withdraw.",
  "withdraw.bumpkin.sure.withdraw":
    "Are you sure you want to withdraw your Bumpkin?",
  "withdraw.bumpkin.closed": "Bumpkin withdrawal has been permanently disabled",
  "withdraw.bumpkin.closing":
    "Bumpkins are moving off chain. Bumpkin withdrawal will be permanently disabled, {{timeRemaining}}",
  "withdraw.buds": "Select Buds to withdraw",
  "withdraw.budRestricted": "Used in today's bud box",
};

const world: Record<World, string> = {
  "world.intro.one":
    "Howdy Bumpkin, welcome to the Pumpkin Plaza. Here Bumpkins from far and wide come together to trade, complete deliveries and play mini-games.",
  "world.intro.two":
    "Explore the Plaza and find Bumpkins who are waiting for your deliveries. In exchange, they will give you rewards!",
  "world.intro.missingDelivery":
    "Hmmm, it looks like you haven't gathered resources for a delivery yet. You can still explore in the meantime.",
  "world.intro.delivery":
    "Oh great, it looks like you've got the resources for a delivery!",
  "world.intro.levelUpToTravel": "Level up to travel",
  "world.intro.findNPC": "Explore the plaza and find {{name}}.",
  "world.intro.find": "Find",
  "world.intro.visit":
    "Visit NPCs and complete deliveries to earn SFL, Coins and rare rewards.",
  "world.intro.craft":
    "Craft rare collectibles, wearables and decorations at the different shops.",
  "world.intro.carf.limited":
    "Hurry, items are only available for a limited time!",
  "world.intro.trade":
    "Trade resources with other players. To interact with a player, walk nearby and click on them.",
  "world.intro.auction":
    "Prepare your resources & visit the Auction House to compete with other players for rare collectibles!",
  "world.intro.four": "To move your Bumpkin, use the keyboard arrow keys",
  "world.intro.five": "On touch screen, use the joystick.",
  "world.intro.six":
    "To interact with a Bumpkin or an object, walk near it and click it",
  "world.intro.seven":
    "No harrasment, swearing or bullying. Thank you for respecting others.",
  "world.plaza": "Plaza",
  "world.beach": "Beach",
  "world.woodlands": "Woodlands",
  "world.retreat": "Retreat",
  "world.home": "Home",
  "world.kingdom": "Kingdom",
  "world.travelTo": "Travel to {{location}}",
};

const wornDescription: Record<WornDescription, string> = {
  "worm.earthworm": "A wriggly worm that attracts small fish.",
  "worm.grub": "A juicy grub - perfect for advanced fish.",
  "worm.redWiggler": "An exotic worm that entices rare fish.",
};

const trading: Record<Trading, string> = {
  "trading.select.resources": "Select resources to view listings",
  "trading.no.listings": "No listings found",
  "trading.listing.congrats":
    " Congratulations, you just listed your items for trade!",
  "trading.listing.deleted": "Your listing has been deleted",
  "trading.listing.fulfilled": "Trade has been fulfilled",
  "trading.your.listing": "Your listing",
  "trading.you.receive": "You receive",
  "trading.burned": "is burned.",
};

const restrictionReason: Record<RestrictionReason, string> = {
  "restrictionReason.isGrowing": "{{item}} is growing",
  "restrictionReason.beanPlanted": "Magic Bean is planted",
  "restrictionReason.cropsGrowing": "Crops are growing",
  "restrictionReason.?cropGrowing": "{{crop}} is growing",
  "restrictionReason.basicCropsGrowing": "Basic crops are growing",
  "restrictionReason.mediumCropsGrowing": "Medium crops are growing",
  "restrictionReason.advancedCropsGrowing": "Advanced crops are growing",
  "restrictionReason.fruitsGrowing": "Fruits are growing",
  "restrictionReason.treesChopped": "Trees are chopped",
  "restrictionReason.stoneMined": "Stone is mined",
  "restrictionReason.ironMined": "Iron is mined",
  "restrictionReason.goldMined": "Gold is mined",
  "restrictionReason.crimstoneMined": "Crimstone is mined",
  "restrictionReason.chickensFed": "Chickens are fed",
  "restrictionReason.treasuresDug": "Treasure holes are dug",
  "restrictionReason.inUse": "In use",
  "restrictionReason.recentlyUsed": "Recently used",
  "restrictionReason.recentlyFished": "Recently fished",
  "restrictionReason.flowersGrowing": "Flowers are growing",
  "restrictionReason.beesBusy": "Bees are busy",
  "restrictionReason.pawShaken": "Paw shaken",
  "restrictionReason.festiveSeason": "Locked during festive season",
  "restrictionReason.noRestriction": "No restriction",
  "restrictionReason.genieLampRubbed": "Genie Lamp rubbed",
  "restrictionReason.oilReserveDrilled": "Oil reserves are drilled",
  "restrictionReason.buildingInUse": "Building is in use",
  "restrictionReason.beehiveInUse": "Beehive in use",
};

export const leaderboardTerms: Record<Leaderboard, string> = {
  "leaderboard.leaderboard": "Leaderboard",
  "leaderboard.error": "Error loading leaderboard. Please try again later.",
  "leaderboard.initialising": "Calculating your rank. Please try again later.",
  "leaderboard.topTen": "Top ten",
  "leaderboard.yourPosition": "Your position",
  "leaderboard.factionMembers": "Faction Members",
};

const gameOptions: Record<GameOptions, string> = {
  "gameOptions.title": "Game Options",
  "gameOptions.howToPlay": "How to Play? (Under Reconstruction)",
  "gameOptions.farmId": "Farm ID #{{farmId}}",
  "gameOptions.logout": "Logout",
  "gameOptions.confirmLogout": "Are you sure you want to Logout?",

  // Amoy Actions
  "gameOptions.amoyActions": "Amoy Testnet Actions",
  "gameOptions.amoyActions.timeMachine": "Time Machine",

  // Blockchain Settings
  "gameOptions.blockchainSettings": "Blockchain Settings",
  "gameOptions.blockchainSettings.refreshChain": "Refresh from Chain",
  "gameOptions.blockchainSettings.storeOnChain": "Store on Chain",
  "gameOptions.blockchainSettings.swapMaticForSFL": "Swap MATIC for SFL",
  "gameOptions.blockchainSettings.transferOwnership": "Transfer Ownership",

  // General Settings
  "gameOptions.generalSettings": "General Settings",
  "gameOptions.generalSettings.connectDiscord": "Connect to Discord",
  "gameOptions.generalSettings.assignRole": "Assign Discord Role",
  "gameOptions.generalSettings.changeLanguage": "Change Language",
  "gameOptions.generalSettings.darkMode": "Dark Mode",
  "gameOptions.generalSettings.lightMode": "Light Mode",
  "gameOptions.generalSettings.appearance": "Appearance",
  "gameOptions.generalSettings.font": "Font",

  "gameOptions.generalSettings.disableAnimations": "Disable Animations",
  "gameOptions.generalSettings.enableAnimations": "Enable Animations",
  "gameOptions.generalSettings.share": "Share",

  // Plaza Settings
  "gameOptions.plazaSettings": "Plaza Settings",
  "gameOptions.plazaSettings.title.mutedPlayers": "Muted Players",
  "gameOptions.plazaSettings.title.keybinds": "Keybinds",
  "gameOptions.plazaSettings.mutedPlayers.description":
    "In case you have muted some players using the /mute command, you can see them here and unmute them if you want.",
  "gameOptions.plazaSettings.keybinds.description":
    "Need to know what keybinds are available? Check them out here.",
  "gameOptions.plazaSettings.noMutedPlayers": "You have no muted players.",
  "gameOptions.plazaSettings.changeServer": "Change server",
};

const greenhouse: Record<GreenhouseKeys, string> = {
  "greenhouse.oilDescription": "The greenhouse needs oil to grow plants.",
  "greenhouse.oilRequired": "Oil required",
  "greenhouse.oilInMachine": "{{oil}} Oil in machine",
  "greenhouse.insertOil": "Insert Oil: {{oil}} available",
  "greenhouse.numberOil": "{{oil}} Oil",
};

const minigame: Record<Minigame, string> = {
  "minigame.chickenRescue": "Minigame - Chicken Rescue",
  "minigame.comingSoon": "Coming soon...",
  "minigame.completed": "Complete",
  "minigame.confirm": "Are you sure you want to spend the following:",
  "minigame.noPrizeAvailable": "No daily prize available",
  "minigame.playNow": "Play now",
  "minigame.purchase": "Purchase",
  "minigame.chickenRescueHelp": "Can you help me rescue the chickens?",
  "minigame.discovered.one": "Howdy Bumpkin, you've discovered a portal!",
  "minigame.discovered.two":
    "Step into the magical realm to earn rewards and glory. Good luck!",
  "minigame.communityEvent": "Community event",
  "minigame.festivalOfColors": "Festival of colors",
  "minigame.festivalOfColors.comingSoon":
    "A community event is coming on the 25th of June...",
  "minigame.festivalOfColors.intro":
    "Celebrate the season of colors in this community designed event.",
  "minigame.festivalOfColors.mission": "Find the paint bombs!",
};

export const easterEggTerms: Record<EasterEggKeys, string> = {
  "easterEgg.queensDiary": "Victoria's Diary",
  "easterEgg.jesterDiary": "Jester's Diary",
  "easterEgg.tywinDiary": "Tywin's Diary",
  "easterEgg.kingDiary": "King's Diary",
  "easterEgg.lostKnight": "Lost Knight",
  "easterEgg.knight": "Hellllllp...Don't trust the Gambit or his dirty tricks!",
  "easterEgg.kingdomBook1":
    "Dear Diary, I fear the king may never return. Whispers in the court suggest someone may seize the throne in his absence. This kingdom teeters on a knife's edge.",
  "easterEgg.kingdomBook2":
    "Tywin is too weak and far too soft on the Bumpkins. They need to pay more taxes. This kingdom needs a firm hand, not his gentle touch.",
  "easterEgg.kingdomBook3":
    "The royals are a cruel bunch. They treat everyone like dirt beneath their feet. No wonder no one likes them! At least they give me plenty of material for my jokes.",
  "easterEgg.kingdomBook4":
    "Authority and respect are crucial to suppressing the Goblins. We didn’t endure the war only to hand them power. They must be kept in their place for our kingdom's safety.",
  "easterEgg.kingdomBook5":
    "To be king, I must be extra cruel. Once I ascend the throne, all Goblins will suffer. Their rebellion ends with me, and our kingdom will be stronger for it.",
};

export const ENGLISH_TERMS: Record<TranslationKeys, string> = {
  ...achievementTerms,
  ...addSFL,
  ...auction,
  ...availableSeeds,
  ...base,
  ...basicTreasure,
  ...beehive,
  ...birdiePlaza,
  ...boostDescriptions,
  ...boostEffectDescriptions,
  ...bountyDescription,
  ...buildingDescriptions,
  ...bumpkinDelivery,
  ...bumpkinItemBuff,
  ...bumpkinPart,
  ...bumpkinPartRequirements,
  ...bumpkinSkillsDescription,
  ...bumpkinTrade,
  ...buyFarmHand,
  ...changeLanguage,
  ...chat,
  ...chickenWinner,
  ...choresStart,
  ...chumDetails,
  ...claimAchievement,
  ...community,
  ...compostDescription,
  ...composterDescription,
  ...confirmationTerms,
  ...confirmSkill,
  ...conversations,
  ...cropBoomMessages,
  ...cropFruitDescriptions,
  ...cropMachine,
  ...decorationDescriptions,
  ...defaultDialogue,
  ...delivery,
  ...deliveryHelp,
  ...deliveryitem,
  ...depositWallet,
  ...detail,
  ...discordBonus,
  ...donation,
  ...draftBid,
  ...errorAndAccess,
  ...errorTerms,
  ...event,
  ...exoticShopItems,
  ...factions,
  ...factionShopDescription,
  ...festiveTree,
  ...fishDescriptions,
  ...fishermanModal,
  ...fishermanQuest,
  ...fishingChallengeIntro,
  ...fishingGuide,
  ...fishingQuests,
  ...flowerBed,
  ...flowerbreed,
  ...flowerShopTerms,
  ...foodDescriptions,
  ...gameDescriptions,
  ...gameOptions,
  ...gameTerms,
  ...garbageCollector,
  ...generalTerms,
  ...genieLamp,
  ...getContent,
  ...getInputErrorMessage,
  ...goblin_messages,
  ...goblinTrade,
  ...goldTooth,
  ...greenhouse,
  ...guideCompost,
  ...guideTerms,
  ...halveningCountdown,
  ...harvestBeeHive,
  ...harvestflower,
  ...hayseedHankPlaza,
  ...hayseedHankV2,
  ...heliosSunflower,
  ...helper,
  ...henHouseTerms,
  ...howToFarm,
  ...howToSync,
  ...howToUpgrade,
  ...interactableModals,
  ...introPage,
  ...islandName,
  ...islandNotFound,
  ...islandupgrade,
  ...landscapeTerms,
  ...leaderboardTerms,
  ...letsGo,
  ...levelUpMessages,
  ...loser,
  ...lostSunflorian,
  ...megaStore,
  ...milestoneMessages,
  ...modalDescription,
  ...minigame,
  ...nftminting,
  ...noaccount,
  ...noBumpkin,
  ...notOnDiscordServer,
  ...noTownCenter,
  ...npc_message,
  ...npc,
  ...npcDialogues,
  ...nyeButton,
  ...NYON_STATUE,
  ...obsessionDialogue,
  ...offer,
  ...onboarding,
  ...onCollectReward,
  ...orderhelp,
  ...pending,
  ...personHood,
  ...pickserver,
  ...piratechest,
  ...pirateQuest,
  ...playerTrade,
  ...portal,
  ...promo,
  ...purchaseableBaitTranslation,
  ...pwaInstall,
  ...quest,
  ...questions,
  ...reaction,
  ...reactionBud,
  ...refunded,
  ...removeHungryCaterpillar,
  ...removeKuebiko,
  ...resale,
  ...resources,
  ...resourceTerms,
  ...restock,
  ...retreatTerms,
  ...rewardTerms,
  ...rulesGameStart,
  ...rulesTerms,
  ...sceneDialogueKey,
  ...seasonTerms,
  ...share,
  ...sharkBumpkinDialogues,
  ...shelly,
  ...shellyDialogue,
  ...shopItems,
  ...showingFarm,
  ...snorklerDialogues,
  ...somethingWentWrong,
  ...specialEvent,
  ...statements,
  ...stopGoblin,
  ...swarming,
  ...tieBreaker,
  ...timeUnits,
  ...toolDescriptions,
  ...trading,
  ...trader,
  ...transactionTerms,
  ...transfer,
  ...treasureModal,
  ...username,
  ...tutorialPage,
  ...visitislandEnter,
  ...visitislandNotFound,
  ...wallet,
  ...warningTerms,
  ...welcomeTerms,
  ...winner,
  ...wishingWellTerms,
  ...withdraw,
  ...world,
  ...wornDescription,
  ...restrictionReason,
  ...removeCropMachine,
  ...easterEggTerms,
};
