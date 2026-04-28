const STORAGE_KEY = "adventurer-sheet-v1";
const CHARACTER_LIBRARY_KEY = "adventurer-sheet-library-v1";
const THEME_KEY = "adventurer-sheet-theme";
const RULES_CACHE_KEY = "adventurer-sheet-rules-cache-v2";
const FIVEETOOLS_DATA_BASE_URL =
  "https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/";
const standardConditions = [
  "Blinded",
  "Charmed",
  "Deafened",
  "Exhaustion",
  "Frightened",
  "Grappled",
  "Incapacitated",
  "Invisible",
  "Paralyzed",
  "Petrified",
  "Poisoned",
  "Prone",
  "Restrained",
  "Stunned",
  "Unconscious",
];

const abilities = [
  { key: "strength", label: "STR" },
  { key: "dexterity", label: "DEX" },
  { key: "constitution", label: "CON" },
  { key: "intelligence", label: "INT" },
  { key: "wisdom", label: "WIS" },
  { key: "charisma", label: "CHA" },
];

const skills = [
  { key: "acrobatics", label: "Acrobatics", ability: "dexterity" },
  { key: "animalHandling", label: "Animal Handling", ability: "wisdom" },
  { key: "arcana", label: "Arcana", ability: "intelligence" },
  { key: "athletics", label: "Athletics", ability: "strength" },
  { key: "deception", label: "Deception", ability: "charisma" },
  { key: "history", label: "History", ability: "intelligence" },
  { key: "insight", label: "Insight", ability: "wisdom" },
  { key: "intimidation", label: "Intimidation", ability: "charisma" },
  { key: "investigation", label: "Investigation", ability: "intelligence" },
  { key: "medicine", label: "Medicine", ability: "wisdom" },
  { key: "nature", label: "Nature", ability: "intelligence" },
  { key: "perception", label: "Perception", ability: "wisdom" },
  { key: "performance", label: "Performance", ability: "charisma" },
  { key: "persuasion", label: "Persuasion", ability: "charisma" },
  { key: "religion", label: "Religion", ability: "intelligence" },
  { key: "sleightOfHand", label: "Sleight of Hand", ability: "dexterity" },
  { key: "stealth", label: "Stealth", ability: "dexterity" },
  { key: "survival", label: "Survival", ability: "wisdom" },
];

const attackFormulaTokens = {
  STR: "strength",
  DEX: "dexterity",
  CON: "constitution",
  INT: "intelligence",
  WIS: "wisdom",
  CHA: "charisma",
  PROF: "proficiencyBonus",
  PB: "proficiencyBonus",
};

const damageTypes = [
  "Acid",
  "Bludgeoning",
  "Cold",
  "Fire",
  "Force",
  "Lightning",
  "Necrotic",
  "Piercing",
  "Poison",
  "Psychic",
  "Radiant",
  "Slashing",
  "Thunder",
];

const spellLevels = [
  "Cantrip",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
];

const spellSchools = [
  "Abjuration",
  "Conjuration",
  "Divination",
  "Enchantment",
  "Evocation",
  "Illusion",
  "Necromancy",
  "Transmutation",
];

const spellCastTypes = [
  { value: "attack", label: "Attack Roll" },
  { value: "save", label: "Saving Throw" },
  { value: "utility", label: "Utility / Other" },
];

const trackingTotalOptions = [
  { value: "number", label: "Number" },
  { value: "proficiencyBonus", label: "Proficiency Bonus" },
  { value: "characterLevel", label: "Character Level" },
  { value: "initiative", label: "Initiative" },
  { value: "strengthModifier", label: "Strength Modifier" },
  { value: "dexterityModifier", label: "Dexterity Modifier" },
  { value: "constitutionModifier", label: "Constitution Modifier" },
  { value: "intelligenceModifier", label: "Intelligence Modifier" },
  { value: "wisdomModifier", label: "Wisdom Modifier" },
  { value: "charismaModifier", label: "Charisma Modifier" },
];

const trackingRestoreOptions = [
  { value: "manual", label: "Manual" },
  { value: "shortRest", label: "Short Rest" },
  { value: "longRest", label: "Long Rest" },
  { value: "dawn", label: "Dawn" },
  { value: "daily", label: "Daily" },
];

const equipmentTypes = ["gear", "weapon", "armor", "shield"];
const armorCategories = ["light", "medium", "heavy"];
const preferredRuleSources = [
  "XPHB",
  "PHB",
  "MPMM",
  "TCE",
  "XGE",
  "DMG",
  "SRD",
];
const spellSchoolMap = {
  A: "Abjuration",
  C: "Conjuration",
  D: "Divination",
  E: "Enchantment",
  V: "Evocation",
  I: "Illusion",
  N: "Necromancy",
  T: "Transmutation",
};
const abilityAbbreviationMap = {
  str: "strength",
  dex: "dexterity",
  con: "constitution",
  int: "intelligence",
  wis: "wisdom",
  cha: "charisma",
};
const itemDamageTypeMap = {
  A: "acid",
  B: "bludgeoning",
  C: "cold",
  F: "fire",
  O: "force",
  L: "lightning",
  N: "necrotic",
  P: "piercing",
  I: "poison",
  Y: "psychic",
  R: "radiant",
  S: "slashing",
  T: "thunder",
};

const featureCategories = [
  "Class Feature",
  "Species Trait",
  "Feat",
  "Background Feature",
  "Boon / Blessing",
  "Other",
];

const builtInClassRuleMemory = window.ADVENTURER_CLASS_RULE_MEMORY || {
  barbarian: {
    label: "Barbarian",
    hitDie: 12,
    asiLevels: [4, 8, 12, 16, 19],
    subclassLevel: 3,
    subclassLabel: "Primal Path",
    levels: {
      1: ["Rage", "Unarmored Defense"],
      2: ["Reckless Attack", "Danger Sense"],
      3: ["Primal Path"],
      5: ["Extra Attack", "Fast Movement"],
      6: ["Path Feature"],
      7: ["Feral Instinct"],
      9: ["Brutal Critical"],
      10: ["Path Feature"],
      11: ["Relentless Rage"],
      13: ["Brutal Critical"],
      14: ["Path Feature"],
      15: ["Persistent Rage"],
      17: ["Brutal Critical"],
      18: ["Indomitable Might"],
      20: ["Primal Champion"],
    },
  },
  bard: {
    label: "Bard",
    hitDie: 8,
    asiLevels: [4, 8, 12, 16, 19],
    subclassLevel: 3,
    subclassLabel: "Bard College",
    levels: {
      1: ["Spellcasting", "Bardic Inspiration"],
      2: ["Jack of All Trades", "Song of Rest"],
      3: ["Bard College", "Expertise"],
      5: ["Font of Inspiration"],
      6: ["Countercharm", "College Feature"],
      10: ["Expertise", "Magical Secrets"],
      14: ["College Feature", "Magical Secrets"],
      18: ["Magical Secrets"],
      20: ["Superior Inspiration"],
    },
  },
  cleric: {
    label: "Cleric",
    hitDie: 8,
    asiLevels: [4, 8, 12, 16, 19],
    subclassLevel: 3,
    subclassLabel: "Divine Domain",
    choices: {
      1: [
        {
          key: "divineOrder",
          label: "Divine Order",
          options: [
            {
              value: "protector",
              label: "Protector",
              description:
                "Gain a more martial cleric direction, including heavier defensive training and weapon readiness.",
            },
            {
              value: "thaumaturge",
              label: "Thaumaturge",
              description:
                "Lean further into divine magic, improving sacred knowledge and cantrip flexibility.",
            },
          ],
        },
      ],
    },
    levels: {
      1: ["Spellcasting", "Divine Order"],
      2: ["Channel Divinity"],
      3: ["Divine Domain"],
      5: ["Destroy Undead"],
      6: ["Channel Divinity", "Domain Feature"],
      8: ["Destroy Undead", "Domain Feature"],
      10: ["Divine Intervention"],
      17: ["Destroy Undead", "Domain Feature"],
      20: ["Divine Intervention Improvement"],
    },
  },
  druid: {
    label: "Druid",
    hitDie: 8,
    asiLevels: [4, 8, 12, 16, 19],
    subclassLevel: 2,
    subclassLabel: "Druid Circle",
    levels: {
      1: ["Druidic", "Spellcasting"],
      2: ["Wild Shape", "Druid Circle"],
      6: ["Circle Feature"],
      10: ["Circle Feature"],
      14: ["Circle Feature"],
      18: ["Timeless Body", "Beast Spells"],
      20: ["Archdruid"],
    },
  },
  fighter: {
    label: "Fighter",
    hitDie: 10,
    asiLevels: [4, 6, 8, 12, 14, 16, 19],
    subclassLevel: 3,
    subclassLabel: "Martial Archetype",
    levels: {
      1: ["Fighting Style", "Second Wind"],
      2: ["Action Surge"],
      3: ["Martial Archetype"],
      5: ["Extra Attack"],
      7: ["Archetype Feature"],
      9: ["Indomitable"],
      10: ["Archetype Feature"],
      11: ["Extra Attack"],
      13: ["Indomitable"],
      15: ["Archetype Feature"],
      17: ["Action Surge", "Indomitable"],
      18: ["Archetype Feature"],
      20: ["Extra Attack"],
    },
  },
  monk: {
    label: "Monk",
    hitDie: 8,
    asiLevels: [4, 8, 12, 16, 19],
    subclassLevel: 3,
    subclassLabel: "Monastic Tradition",
    levels: {
      1: ["Unarmored Defense", "Martial Arts"],
      2: ["Ki", "Unarmored Movement"],
      3: ["Monastic Tradition", "Deflect Missiles"],
      4: ["Slow Fall"],
      5: ["Extra Attack", "Stunning Strike"],
      6: ["Ki-Empowered Strikes", "Tradition Feature"],
      7: ["Evasion", "Stillness of Mind"],
      10: ["Purity of Body"],
      11: ["Tradition Feature"],
      13: ["Tongue of the Sun and Moon"],
      14: ["Diamond Soul"],
      15: ["Timeless Body"],
      17: ["Tradition Feature"],
      18: ["Empty Body"],
      20: ["Perfect Self"],
    },
  },
  paladin: {
    label: "Paladin",
    hitDie: 10,
    asiLevels: [4, 8, 12, 16, 19],
    subclassLevel: 3,
    subclassLabel: "Sacred Oath",
    levels: {
      1: ["Divine Sense", "Lay on Hands"],
      2: ["Fighting Style", "Spellcasting", "Divine Smite"],
      3: ["Divine Health", "Sacred Oath"],
      5: ["Extra Attack"],
      6: ["Aura of Protection"],
      7: ["Oath Feature"],
      10: ["Aura of Courage"],
      11: ["Improved Divine Smite"],
      14: ["Cleansing Touch"],
      15: ["Oath Feature"],
      18: ["Aura Improvements"],
      20: ["Oath Feature"],
    },
  },
  ranger: {
    label: "Ranger",
    hitDie: 10,
    asiLevels: [4, 8, 12, 16, 19],
    subclassLevel: 3,
    subclassLabel: "Ranger Archetype",
    levels: {
      1: ["Favored Enemy", "Natural Explorer"],
      2: ["Fighting Style", "Spellcasting"],
      3: ["Ranger Archetype", "Primeval Awareness"],
      5: ["Extra Attack"],
      7: ["Archetype Feature"],
      8: ["Land's Stride"],
      10: ["Hide in Plain Sight"],
      11: ["Archetype Feature"],
      14: ["Vanish"],
      15: ["Archetype Feature"],
      18: ["Feral Senses"],
      20: ["Foe Slayer"],
    },
  },
  rogue: {
    label: "Rogue",
    hitDie: 8,
    asiLevels: [4, 8, 10, 12, 16, 19],
    subclassLevel: 3,
    subclassLabel: "Roguish Archetype",
    levels: {
      1: ["Expertise", "Sneak Attack", "Thieves' Cant"],
      2: ["Cunning Action"],
      3: ["Roguish Archetype"],
      5: ["Uncanny Dodge"],
      6: ["Expertise"],
      7: ["Evasion"],
      9: ["Archetype Feature"],
      11: ["Reliable Talent"],
      13: ["Archetype Feature"],
      14: ["Blindsense"],
      15: ["Slippery Mind"],
      17: ["Archetype Feature"],
      18: ["Elusive"],
      20: ["Stroke of Luck"],
    },
  },
  sorcerer: {
    label: "Sorcerer",
    hitDie: 6,
    asiLevels: [4, 8, 12, 16, 19],
    subclassLevel: 3,
    subclassLabel: "Sorcerous Origin",
    levels: {
      1: ["Spellcasting"],
      2: ["Font of Magic"],
      3: ["Sorcerous Origin", "Metamagic"],
      6: ["Origin Feature"],
      10: ["Metamagic"],
      14: ["Origin Feature"],
      17: ["Metamagic"],
      18: ["Origin Feature"],
      20: ["Sorcerous Restoration"],
    },
  },
  warlock: {
    label: "Warlock",
    hitDie: 8,
    asiLevels: [4, 8, 12, 16, 19],
    subclassLevel: 3,
    subclassLabel: "Otherworldly Patron",
    levels: {
      1: ["Pact Magic"],
      2: ["Eldritch Invocations"],
      3: ["Otherworldly Patron", "Pact Boon"],
      6: ["Patron Feature"],
      10: ["Patron Feature"],
      11: ["Mystic Arcanum"],
      13: ["Mystic Arcanum"],
      15: ["Mystic Arcanum"],
      17: ["Mystic Arcanum"],
      20: ["Eldritch Master"],
    },
  },
  wizard: {
    label: "Wizard",
    hitDie: 6,
    asiLevels: [4, 8, 12, 16, 19],
    subclassLevel: 2,
    subclassLabel: "Arcane Tradition",
    levels: {
      1: ["Spellcasting", "Arcane Recovery"],
      2: ["Arcane Tradition"],
      6: ["Tradition Feature"],
      10: ["Tradition Feature"],
      14: ["Tradition Feature"],
      18: ["Spell Mastery"],
      20: ["Signature Spells"],
    },
  },
};

const standardAsiLevels = [4, 8, 12, 16, 19];
let classFeatureDescriptions = {
  ...(window.ADVENTURER_FEATURE_DESCRIPTIONS || {}),
  ...(loadRulesCache()?.featureDescriptions || {}),
};
const pointBuyCosts = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9,
};

const defaultState = {
  name: "",
  classLevel: "",
  background: "",
  species: "",
  subrace: "",
  alignment: "",
  experience: "",
  levelMethod: "xp",
  proficiencyBonus: 2,
  classes: [{ name: "", subclass: "", level: 1 }],
  armorClass: "",
  initiative: "",
  speed: "",
  passivePerception: "",
  weaponProficiencies: "",
  armorProficiencies: "",
  toolProficiencies: "",
  languageProficiencies: "",
  currentHp: "",
  maxHp: "",
  tempHp: "",
  hitDice: "",
  inspiration: "No",
  attacks: [],
  spells: [],
  advancementChoices: [],
  features: [],
  trackingResources: [],
  activeConditions: [],
  statuses: [],
  concentrating: false,
  equipmentItems: [],
  equipment: "",
  notes: "",
  abilities: Object.fromEntries(abilities.map(({ key }) => [key, 10])),
  proficiencies: {
    savingThrows: {},
    skills: {},
  },
};

let characterLibrary = [];
let activeCharacterId = "";
let state = initializeCharacterState();
let classRuleMemory = loadClassRuleMemory();
let ruleReferenceData = loadRuleReferenceData();
let saveTimeout;
let abilityModalMode = "manual";
let abilityModalDraft = {};
let pointBuyDraft = {};

const saveStatus = document.getElementById("saveStatus");
const floatingActions = document.querySelector(".floating-actions");
const floatingActionsToggle = document.getElementById("floatingActionsToggle");
const characterSelect = document.getElementById("characterSelect");
const newCharacterButton = document.getElementById("newCharacterButton");
const deleteCharacterButton = document.getElementById("deleteCharacterButton");
const rulesImportPromptModal = document.getElementById(
  "rulesImportPromptModal",
);
const closeRulesImportPromptButton = document.getElementById(
  "closeRulesImportPromptButton",
);
const confirmRulesImportPromptButton = document.getElementById(
  "confirmRulesImportPromptButton",
);
const useLocalRulesPromptButton = document.getElementById(
  "useLocalRulesPromptButton",
);
const rulesSourceStatus = document.getElementById("rulesSourceStatus");
const speciesOptions = document.getElementById("speciesOptions");
const subraceOptions = document.getElementById("subraceOptions");
const backgroundOptions = document.getElementById("backgroundOptions");
const abilityGroupsList = document.getElementById("abilityGroupsList");
const themeButton = document.getElementById("themeButton");
const modifyAbilityButton = document.getElementById("modifyAbilityButton");
const abilityModal = document.getElementById("abilityModal");
const abilityModalGrid = document.getElementById("abilityModalGrid");
const rollModal = document.getElementById("rollModal");
const rollModalResult = document.getElementById("rollModalResult");
const rollModalTitle = document.getElementById("rollModalTitle");
const rollModalTotal = document.getElementById("rollModalTotal");
const rollModalSummary = document.getElementById("rollModalSummary");
const rollModalDetail = document.getElementById("rollModalDetail");
const diceModal = document.getElementById("diceModal");
const diceFormulaInput = document.getElementById("diceFormulaInput");
const diceModalResult = document.getElementById("diceModalResult");
const diceModalTotal = document.getElementById("diceModalTotal");
const diceModalSummary = document.getElementById("diceModalSummary");
const diceModalDetail = document.getElementById("diceModalDetail");
const shortRestModal = document.getElementById("shortRestModal");
const shortRestHitDiceDisplay = document.getElementById(
  "shortRestHitDiceDisplay",
);
const shortRestConDisplay = document.getElementById("shortRestConDisplay");
const shortRestResult = document.getElementById("shortRestResult");
const shortRestHealTotal = document.getElementById("shortRestHealTotal");
const shortRestHealSummary = document.getElementById("shortRestHealSummary");
const shortRestHealDetail = document.getElementById("shortRestHealDetail");
const longRestModal = document.getElementById("longRestModal");
const longRestResult = document.getElementById("longRestResult");
const longRestSummaryTotal = document.getElementById("longRestSummaryTotal");
const longRestSummaryText = document.getElementById("longRestSummaryText");
const longRestDetail = document.getElementById("longRestDetail");
const levelUpModal = document.getElementById("levelUpModal");
const levelUpModalSummary = document.getElementById("levelUpModalSummary");
const levelUpExistingList = document.getElementById("levelUpExistingList");
const levelUpNewClassName = document.getElementById("levelUpNewClassName");
const levelUpNewClassSubclass = document.getElementById(
  "levelUpNewClassSubclass",
);
const levelUpNewClassPreview = document.getElementById(
  "levelUpNewClassPreview",
);
const levelUpChoiceSection = document.getElementById("levelUpChoiceSection");
const levelUpChoiceTitle = document.getElementById("levelUpChoiceTitle");
const levelUpChoiceFields = document.getElementById("levelUpChoiceFields");
const cancelLevelUpChoiceButton = document.getElementById(
  "cancelLevelUpChoiceButton",
);
const confirmLevelUpChoiceButton = document.getElementById(
  "confirmLevelUpChoiceButton",
);
const classAutomationOptions = document.getElementById(
  "classAutomationOptions",
);
const confirmAddMulticlassButton = document.getElementById(
  "confirmAddMulticlassButton",
);
const createCharacterModal = document.getElementById("createCharacterModal");
const createCharacterName = document.getElementById("createCharacterName");
const createCharacterClass = document.getElementById("createCharacterClass");
const createCharacterBackground = document.getElementById(
  "createCharacterBackground",
);
const createCharacterSpecies = document.getElementById(
  "createCharacterSpecies",
);
const createCharacterSubrace = document.getElementById(
  "createCharacterSubrace",
);
const createCharacterAlignment = document.getElementById(
  "createCharacterAlignment",
);
const createCharacterClassPreview = document.getElementById(
  "createCharacterClassPreview",
);
const createCharacterChoiceFields = document.getElementById(
  "createCharacterChoiceFields",
);
const closeCreateCharacterModalButton = document.getElementById(
  "closeCreateCharacterModalButton",
);
const cancelCreateCharacterButton = document.getElementById(
  "cancelCreateCharacterButton",
);
const confirmCreateCharacterButton = document.getElementById(
  "confirmCreateCharacterButton",
);
const abilityModeManualButton = document.getElementById(
  "abilityModeManualButton",
);
const abilityModePointBuyButton = document.getElementById(
  "abilityModePointBuyButton",
);
const pointBuySummary = document.getElementById("pointBuySummary");
const pointBuySpent = document.getElementById("pointBuySpent");
const pointBuyRemaining = document.getElementById("pointBuyRemaining");
const closeAbilityModalButton = document.getElementById(
  "closeAbilityModalButton",
);
const closeRollModalButton = document.getElementById("closeRollModalButton");
const closeDiceModalButton = document.getElementById("closeDiceModalButton");
const closeShortRestModalButton = document.getElementById(
  "closeShortRestModalButton",
);
const closeLongRestModalButton = document.getElementById(
  "closeLongRestModalButton",
);
const closeLevelUpModalButton = document.getElementById(
  "closeLevelUpModalButton",
);
const cancelAbilityModalButton = document.getElementById(
  "cancelAbilityModalButton",
);
const saveAbilityModalButton = document.getElementById(
  "saveAbilityModalButton",
);
const rollDiceFormulaButton = document.getElementById("rollDiceFormulaButton");
const floatingDiceButton = document.getElementById("floatingDiceButton");
const floatingShortRestButton = document.getElementById(
  "floatingShortRestButton",
);
const floatingLongRestButton = document.getElementById(
  "floatingLongRestButton",
);
const floatingImportRulesButton = document.getElementById(
  "floatingImportRulesButton",
);
const spendHitDieButton = document.getElementById("spendHitDieButton");
const completeShortRestButton = document.getElementById(
  "completeShortRestButton",
);
const confirmLongRestButton = document.getElementById("confirmLongRestButton");
const centerTabButtons = Array.from(
  document.querySelectorAll("[data-center-tab]"),
);
const attacksPanel = document.querySelector(".attacks-panel");
const featuresPanel = document.querySelector(".features-panel");
const equipmentPanel = document.querySelector(".equipment-panel");
const notesPanel = document.querySelector(".notes-panel");
const attacksPanelTitle = document.getElementById("attacksPanelTitle");
const addAttackButton = document.getElementById("addAttackButton");
const addSpellButton = document.getElementById("addSpellButton");
const importSpellButton = document.getElementById("importSpellButton");
const importItemButton = document.getElementById("importItemButton");
const addStatusButton = document.getElementById("addStatusButton");
const concentrationToggle = document.getElementById("concentrationToggle");
const inspirationToggle = document.getElementById("inspirationToggle");
const spellImportModal = document.getElementById("spellImportModal");
const spellImportSelect = document.getElementById("spellImportSelect");
const spellImportPreview = document.getElementById("spellImportPreview");
const closeSpellImportModalButton = document.getElementById(
  "closeSpellImportModalButton",
);
const confirmSpellImportButton = document.getElementById(
  "confirmSpellImportButton",
);
const itemImportModal = document.getElementById("itemImportModal");
const itemImportSelect = document.getElementById("itemImportSelect");
const itemImportPreview = document.getElementById("itemImportPreview");
const closeItemImportModalButton = document.getElementById(
  "closeItemImportModalButton",
);
const confirmItemImportButton = document.getElementById(
  "confirmItemImportButton",
);
const attacksList = document.getElementById("attacksList");
const spellsList = document.getElementById("spellsList");
const featuresList = document.getElementById("featuresList");
const trackingList = document.getElementById("trackingList");
const conditionsList = document.getElementById("conditionsList");
const statusesList = document.getElementById("statusesList");
const equipmentList = document.getElementById("equipmentList");
const xpGainInput = document.getElementById("xpGainInput");
const hpAdjustInput = document.getElementById("hpAdjustInput");
const classList = document.getElementById("classList");
const advancementChoicesList = document.getElementById(
  "advancementChoicesList",
);
const levelMethodSelect = document.getElementById("levelMethodSelect");
const createCharacterLevelMethod = document.getElementById(
  "createCharacterLevelMethod",
);
const xpCards = Array.from(document.querySelectorAll(".xp-card"));
const totalLevelDisplay = document.getElementById("totalLevelDisplay");
const classSummaryDisplay = document.getElementById("classSummaryDisplay");
const proficiencyBonusDisplay = document.getElementById(
  "proficiencyBonusDisplay",
);
const levelStatusCard = document.getElementById("levelStatusCard");
const levelStatusTitle = document.getElementById("levelStatusTitle");
const levelStatusText = document.getElementById("levelStatusText");
const featureFilterButtons = Array.from(
  document.querySelectorAll("[data-feature-filter]"),
);
const rollResetTimers = new WeakMap();
const RULES_IMPORT_PROMPT_KEY = "adventurer-sheet-rules-import-prompt-seen";
const toastContainer = document.getElementById("toastContainer");
let updateToastElement = null;
let activeCenterTab = "actions";
let activeFeatureFilter = "all";
let pendingLevelUpAction = null;
let pendingLevelUpSelections = {};
let createCharacterSelections = {};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgorjjzb";

const openFeedbackBtn = document.getElementById("open-feedback-btn");
const closeFeedbackBtn = document.getElementById("close-feedback-btn");
const feedbackModal = document.getElementById("feedback-modal");
const feedbackForm = document.getElementById("feedback-form");

openFeedbackBtn?.addEventListener("click", () => {
  feedbackModal.classList.remove("hidden");
});

closeFeedbackBtn?.addEventListener("click", () => {
  feedbackModal.classList.add("hidden");
});

feedbackModal?.addEventListener("click", (event) => {
  if (event.target === feedbackModal) {
    feedbackModal.classList.add("hidden");
  }
});

feedbackForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(feedbackForm);

  formData.append("appVersion", "v8.1");
  formData.append("page", window.location.href);
  formData.append("device", navigator.userAgent);

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Formspree submission failed");
    }

    feedbackForm.reset();
    feedbackModal.classList.add("hidden");
    showToast("Feedback submitted. Thank you!");
  } catch (error) {
    console.error(error);
    showToast("Could not submit feedback. Please try again.");
  }
});

const xpThresholds = [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000,
];

applyStoredTheme();
renderAbilityGroups();
renderClasses();
renderAttacks();
renderFeatures();
renderTrackingResources();
renderConditionsAndStatuses();
renderEquipmentItems();
renderSpells();
renderAbilityModal();
bindFields();
renderInspirationToggle();
renderCharacterLibraryControls();
populateClassAutomationOptions();
populateRuleReferenceOptions();
updateRulesSourceStatus();
refreshDerivedValues();
setCenterTab(activeCenterTab);
showRulesImportPromptOnce();

themeButton.addEventListener("click", () => {
  toggleTheme();
  setFloatingActionsMenu(false);
});
floatingActionsToggle.addEventListener("click", toggleFloatingActionsMenu);
modifyAbilityButton.addEventListener("click", openAbilityModal);
abilityModeManualButton.addEventListener("click", () =>
  setAbilityModalMode("manual"),
);
abilityModePointBuyButton.addEventListener("click", () =>
  setAbilityModalMode("pointbuy"),
);
closeAbilityModalButton.addEventListener("click", closeAbilityModal);
closeRollModalButton.addEventListener("click", closeRollModal);
closeDiceModalButton.addEventListener("click", closeDiceModal);
closeShortRestModalButton.addEventListener("click", closeShortRestModal);
closeLongRestModalButton.addEventListener("click", closeLongRestModal);
closeSpellImportModalButton.addEventListener("click", closeSpellImportModal);
closeItemImportModalButton.addEventListener("click", closeItemImportModal);
closeLevelUpModalButton.addEventListener("click", closeLevelUpModal);
closeCreateCharacterModalButton.addEventListener(
  "click",
  closeCreateCharacterModal,
);
cancelCreateCharacterButton.addEventListener(
  "click",
  closeCreateCharacterModal,
);
cancelAbilityModalButton.addEventListener("click", closeAbilityModal);
saveAbilityModalButton.addEventListener("click", saveAbilityModal);
abilityModal.addEventListener("click", (event) => {
  if (
    event.target instanceof HTMLElement &&
    event.target.dataset.modalClose === "true"
  ) {
    closeAbilityModal();
  }
});
rollModal.addEventListener("click", (event) => {
  if (
    event.target instanceof HTMLElement &&
    event.target.dataset.rollModalClose === "true"
  ) {
    closeRollModal();
  }
});
diceModal.addEventListener("click", (event) => {
  if (
    event.target instanceof HTMLElement &&
    event.target.dataset.diceModalClose === "true"
  ) {
    closeDiceModal();
  }
});
shortRestModal.addEventListener("click", (event) => {
  if (
    event.target instanceof HTMLElement &&
    event.target.dataset.shortRestModalClose === "true"
  ) {
    closeShortRestModal();
  }
});
longRestModal.addEventListener("click", (event) => {
  if (
    event.target instanceof HTMLElement &&
    event.target.dataset.longRestModalClose === "true"
  ) {
    closeLongRestModal();
  }
});
spellImportModal.addEventListener("click", (event) => {
  if (
    event.target instanceof HTMLElement &&
    event.target.dataset.spellImportModalClose === "true"
  ) {
    closeSpellImportModal();
  }
});
itemImportModal.addEventListener("click", (event) => {
  if (
    event.target instanceof HTMLElement &&
    event.target.dataset.itemImportModalClose === "true"
  ) {
    closeItemImportModal();
  }
});
levelUpModal.addEventListener("click", (event) => {
  if (
    event.target instanceof HTMLElement &&
    event.target.dataset.levelUpModalClose === "true"
  ) {
    closeLevelUpModal();
  }
});
createCharacterModal.addEventListener("click", (event) => {
  if (
    event.target instanceof HTMLElement &&
    event.target.dataset.createCharacterModalClose === "true"
  ) {
    closeCreateCharacterModal();
  }
});
rollDiceFormulaButton.addEventListener("click", rollCustomDiceFormula);
floatingDiceButton.addEventListener("click", () => {
  openDiceModal();
  setFloatingActionsMenu(false);
});
floatingImportRulesButton.addEventListener("click", async () => {
  setFloatingActionsMenu(false);
  await importFiveEToolsRules();
});
floatingShortRestButton.addEventListener("click", () => {
  openShortRestModal();
  setFloatingActionsMenu(false);
});
floatingLongRestButton.addEventListener("click", () => {
  openLongRestModal();
  setFloatingActionsMenu(false);
});
spendHitDieButton.addEventListener("click", spendShortRestHitDie);
completeShortRestButton.addEventListener("click", completeShortRest);
confirmLongRestButton.addEventListener("click", takeLongRest);
centerTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCenterTab(button.dataset.centerTab);
  });
});
diceFormulaInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    rollCustomDiceFormula();
  }
});
document.getElementById("addXpButton").addEventListener("click", addExperience);
levelStatusCard?.addEventListener("click", () => {
  const totalLevel = state.classes.reduce(
    (sum, classEntry) => sum + Number(classEntry.level || 0),
    0,
  );

  if (state.levelMethod === "milestone") {
    if (totalLevel < 20) {
      openLevelUpModal();
    }
    return;
  }

  const progressState = getLevelProgressState(totalLevel, state.experience);

  if (progressState.canLevelUp) {
    openLevelUpModal();
  }
});

levelMethodSelect?.addEventListener("change", () => {
  state.levelMethod = levelMethodSelect.value;
  refreshDerivedValues();
  queueSave();
});
levelUpNewClassName.addEventListener("input", updateLevelUpNewClassPreview);
levelUpNewClassSubclass.addEventListener("input", updateLevelUpNewClassPreview);
cancelLevelUpChoiceButton.addEventListener("click", clearLevelUpChoiceSection);
confirmLevelUpChoiceButton.addEventListener(
  "click",
  completePendingLevelUpAction,
);
characterSelect.addEventListener("change", () =>
  switchCharacter(characterSelect.value),
);
newCharacterButton.addEventListener("click", openCreateCharacterModal);
deleteCharacterButton.addEventListener("click", deleteActiveCharacter);
importSpellButton.addEventListener("click", openSpellImportModal);
importItemButton.addEventListener("click", openItemImportModal);
confirmSpellImportButton.addEventListener("click", importSelectedSpell);
confirmItemImportButton.addEventListener("click", importSelectedItem);
spellImportSelect.addEventListener("change", updateSpellImportPreview);
itemImportSelect.addEventListener("change", updateItemImportPreview);
inspirationToggle.addEventListener("click", toggleInspiration);
createCharacterClass.addEventListener("change", () => {
  createCharacterSelections = {};
  updateCreateCharacterPreview();
});
createCharacterSpecies.addEventListener("change", () => {
  createCharacterSubrace.value = "";
  populateCreateCharacterSubraceOptions();
});
confirmCreateCharacterButton.addEventListener(
  "click",
  createCharacterFromModal,
);
featureFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setFeatureFilter(button.dataset.featureFilter || "all");
  });
});
document
  .getElementById("addSpellButton")
  .addEventListener("click", addSpellEntry);
document
  .getElementById("addFeatureButton")
  .addEventListener("click", addFeatureEntry);
document
  .getElementById("addTrackingButton")
  .addEventListener("click", addTrackingResource);
addStatusButton.addEventListener("click", addStatusEntry);
concentrationToggle.addEventListener("click", toggleConcentration);
document
  .getElementById("addItemButton")
  .addEventListener("click", addEquipmentItem);
document
  .getElementById("damageHpButton")
  .addEventListener("click", () => adjustHitPoints("damage"));
document
  .getElementById("healHpButton")
  .addEventListener("click", () => adjustHitPoints("heal"));
document.getElementById("addAttackButton").addEventListener("click", () => {
  state.attacks.push(normalizeAttack());
  renderAttacks();
  refreshDerivedValues();
  queueSave();
});
confirmAddMulticlassButton.addEventListener(
  "click",
  addMulticlassLevelFromModal,
);
document.addEventListener("click", handleFloatingActionsOutsideClick);
document.addEventListener("keydown", handleFloatingActionsEscape);

closeRulesImportPromptButton.addEventListener("click", closeRulesImportPrompt);
useLocalRulesPromptButton.addEventListener("click", closeRulesImportPrompt);

confirmRulesImportPromptButton.addEventListener("click", async () => {
  closeRulesImportPrompt();
  await importFiveEToolsRules();
});

rulesImportPromptModal.addEventListener("click", (event) => {
  if (
    event.target instanceof HTMLElement &&
    event.target.dataset.rulesImportPromptClose === "true"
  ) {
    closeRulesImportPrompt();
  }
});

function showRulesImportPromptOnce() {
  if (!rulesImportPromptModal) return;

  const hasSeenPrompt =
    localStorage.getItem(RULES_IMPORT_PROMPT_KEY) === "true";
  const alreadyHasRulesCache = Boolean(loadRulesCache());

  if (!hasSeenPrompt && !alreadyHasRulesCache) {
    rulesImportPromptModal.hidden = false;
  }
}

function closeRulesImportPrompt() {
  if (!rulesImportPromptModal) return;

  rulesImportPromptModal.hidden = true;
  localStorage.setItem(RULES_IMPORT_PROMPT_KEY, "true");
}

function showToast(message, type = "success") {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  toastContainer.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 3200);
}

function showUpdateToast(registration) {
  if (!toastContainer || updateToastElement) return;

  const toast = document.createElement("button");
  toast.type = "button";
  toast.className = "toast toast-info update-toast";
  toast.textContent = "Update available. Tap to refresh.";
  toast.setAttribute("aria-label", "Update available. Refresh the app.");

  toast.addEventListener("click", () => {
    toast.disabled = true;
    toast.textContent = "Refreshing...";

    const waitingWorker = registration.waiting || registration.installing;
    if (waitingWorker) {
      waitingWorker.postMessage({ type: "SKIP_WAITING" });
      return;
    }

    window.location.reload();
  });

  toastContainer.appendChild(toast);
  updateToastElement = toast;
}

function initializeCharacterState() {
  const { characters, activeId } = loadCharacterLibrary();
  characterLibrary = characters;
  activeCharacterId = activeId;
  return getActiveCharacterRecord().state;
}

function loadState() {
  return initializeCharacterState();
}

function loadCharacterLibrary() {
  try {
    const rawLibrary = localStorage.getItem(CHARACTER_LIBRARY_KEY);
    if (rawLibrary) {
      const parsed = JSON.parse(rawLibrary);
      const characters = Array.isArray(parsed?.characters)
        ? parsed.characters.map(normalizeCharacterRecord)
        : [];
      const activeId = characters.some(
        (record) => record.id === parsed?.activeId,
      )
        ? parsed.activeId
        : characters[0]?.id;

      if (characters.length) {
        return { characters, activeId };
      }
    }

    const legacyRaw = localStorage.getItem(STORAGE_KEY);
    if (legacyRaw) {
      const migratedState = mergeState(defaultState, JSON.parse(legacyRaw));
      const migratedCharacter = normalizeCharacterRecord({
        state: migratedState,
      });
      const migratedLibrary = {
        characters: [migratedCharacter],
        activeId: migratedCharacter.id,
      };
      localStorage.setItem(
        CHARACTER_LIBRARY_KEY,
        JSON.stringify(migratedLibrary),
      );
      return migratedLibrary;
    }
  } catch {
    // Fall through to default library.
  }

  const initialCharacter = normalizeCharacterRecord();
  const initialLibrary = {
    characters: [initialCharacter],
    activeId: initialCharacter.id,
  };
  localStorage.setItem(CHARACTER_LIBRARY_KEY, JSON.stringify(initialLibrary));
  return initialLibrary;
}

function toggleFloatingActionsMenu() {
  const nextOpen = floatingActions.dataset.open !== "true";
  setFloatingActionsMenu(nextOpen);
}

function setFloatingActionsMenu(isOpen) {
  floatingActions.dataset.open = String(isOpen);
  floatingActionsToggle.setAttribute("aria-expanded", String(isOpen));
  floatingActionsToggle.textContent = isOpen ? "Close" : "Menu";
}

function handleFloatingActionsOutsideClick(event) {
  if (!(event.target instanceof Node)) {
    return;
  }

  if (!floatingActions.contains(event.target)) {
    setFloatingActionsMenu(false);
  }
}

function handleFloatingActionsEscape(event) {
  if (event.key === "Escape") {
    setFloatingActionsMenu(false);
  }
}

function normalizeCharacterRecord(record = {}) {
  return {
    id: record.id || generateId(),
    state: mergeState(defaultState, record.state || {}),
    updatedAt: Number(record.updatedAt || Date.now()),
  };
}

function getActiveCharacterRecord() {
  let record = characterLibrary.find((entry) => entry.id === activeCharacterId);
  if (!record) {
    record = normalizeCharacterRecord();
    characterLibrary = [record];
    activeCharacterId = record.id;
  }
  return record;
}

function loadClassRuleMemory() {
  const cachedRules = loadRulesCache();
  if (cachedRules?.classRules && Object.keys(cachedRules.classRules).length) {
    return structuredClone(cachedRules.classRules);
  }

  return structuredClone(builtInClassRuleMemory);
}

function loadRuleReferenceData() {
  const cachedRules = loadRulesCache();
  return {
    species: Array.isArray(cachedRules?.species) ? cachedRules.species : [],
    subraces: Array.isArray(cachedRules?.subraces) ? cachedRules.subraces : [],
    backgrounds: Array.isArray(cachedRules?.backgrounds)
      ? cachedRules.backgrounds
      : [],
    spells: Array.isArray(cachedRules?.spells) ? cachedRules.spells : [],
    items: Array.isArray(cachedRules?.items) ? cachedRules.items : [],
  };
}

function loadRulesCache() {
  try {
    const rawCache = localStorage.getItem(RULES_CACHE_KEY);
    if (!rawCache) {
      return null;
    }

    const parsed = JSON.parse(rawCache);
    if (parsed?.version !== 2 || parsed?.source !== "5etools") {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function saveRulesCache(cache) {
  localStorage.setItem(RULES_CACHE_KEY, JSON.stringify(cache));
}

function updateRulesSourceStatus(message = "") {
  if (!rulesSourceStatus) return;

  const cachedRules = loadRulesCache();

  if (message) {
    rulesSourceStatus.textContent = message;
    return;
  }

  if (!cachedRules) {
    rulesSourceStatus.textContent = "Rules: Local";
    return;
  }

  const importedDate = new Date(
    cachedRules.importedAt || Date.now(),
  ).toLocaleDateString();
  rulesSourceStatus.textContent = `Rules: 5etools cached ${importedDate}`;
}

function classRuleKey(className) {
  return String(className || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function getClassRule(className) {
  return classRuleMemory[classRuleKey(className)] || null;
}

function populateClassAutomationOptions() {
  classAutomationOptions.innerHTML = "";
  createCharacterClass.innerHTML = "";

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = "Choose class";
  createCharacterClass.appendChild(placeholderOption);

  Object.values(classRuleMemory)
    .sort((a, b) => a.label.localeCompare(b.label))
    .forEach((classRule) => {
      const option = document.createElement("option");
      option.value = classRule.label;
      classAutomationOptions.appendChild(option);

      const selectOption = document.createElement("option");
      selectOption.value = classRule.label;
      selectOption.textContent = classRule.label;
      createCharacterClass.appendChild(selectOption);
    });
}

function populateRuleReferenceOptions() {
  populateDatalist(speciesOptions, ruleReferenceData.species);
  populateDatalist(subraceOptions, ruleReferenceData.subraces);
  populateDatalist(backgroundOptions, ruleReferenceData.backgrounds);
  populateCreateCharacterSelect(
    createCharacterSpecies,
    ruleReferenceData.species,
    "Choose race / species",
    "No cached species",
  );
  populateCreateCharacterSelect(
    createCharacterBackground,
    ruleReferenceData.backgrounds,
    "Choose background",
    "No cached backgrounds",
  );
  populateCreateCharacterSubraceOptions();
}

function populateCreateCharacterSelect(
  select,
  records,
  placeholderText,
  emptyText,
) {
  if (!select) return;

  const currentValue = select.value;
  select.innerHTML = "";

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = records.length ? placeholderText : emptyText;
  select.appendChild(placeholderOption);

  records
    .slice()
    .sort(
      (a, b) =>
        a.name.localeCompare(b.name) ||
        String(a.source || "").localeCompare(String(b.source || "")),
    )
    .forEach((record) => {
      const option = document.createElement("option");
      option.value = record.name;
      option.textContent = record.source
        ? `${record.name} (${record.source})`
        : record.name;
      select.appendChild(option);
    });

  select.value = records.some((record) => record.name === currentValue)
    ? currentValue
    : "";
  select.disabled = records.length === 0;
}

function populateDatalist(datalist, records) {
  datalist.innerHTML = "";
  records
    .slice()
    .sort(
      (a, b) =>
        a.name.localeCompare(b.name) ||
        String(a.source || "").localeCompare(String(b.source || "")),
    )
    .forEach((record) => {
      const option = document.createElement("option");
      option.value = record.name;
      if (record.source) {
        option.label = record.source;
      }
      datalist.appendChild(option);
    });
}

function populateCreateCharacterSubraceOptions() {
  const selectedSpecies = createCharacterSpecies?.value || "";
  const subraces = selectedSpecies
    ? getSubraceOptionsForSpecies(selectedSpecies)
    : [];
  const currentValue = createCharacterSubrace.value;
  createCharacterSubrace.innerHTML = "";

  const noneOption = document.createElement("option");
  noneOption.value = "";
  noneOption.textContent = selectedSpecies
    ? subraces.length
      ? "No subrace / lineage"
      : "No cached subraces"
    : "Choose race first";
  createCharacterSubrace.appendChild(noneOption);

  subraces.forEach((subrace) => {
    const option = document.createElement("option");
    option.value = subrace.name;
    option.textContent = subrace.source
      ? `${subrace.name} (${subrace.source})`
      : subrace.name;
    createCharacterSubrace.appendChild(option);
  });

  createCharacterSubrace.value = subraces.some(
    (subrace) => subrace.name === currentValue,
  )
    ? currentValue
    : "";
  createCharacterSubrace.disabled = !selectedSpecies || subraces.length === 0;
}

function getSubraceOptionsForSpecies(speciesName) {
  const speciesKey = classRuleKey(speciesName);
  const matches = ruleReferenceData.subraces.filter(
    (subrace) => !speciesKey || classRuleKey(subrace.parentName) === speciesKey,
  );

  return matches
    .slice()
    .sort(
      (a, b) =>
        a.name.localeCompare(b.name) ||
        String(a.source || "").localeCompare(String(b.source || "")),
    );
}

async function importFiveEToolsRules() {
  updateRulesSourceStatus("Rules: Importing...");

  try {
    const cache = await buildFiveEToolsRulesCache();
    let cacheStored = true;

    try {
      saveRulesCache(cache);
    } catch (storageError) {
      console.warn(storageError);
      cacheStored = false;
    }

    applyRulesCache(cache);
    applyRulesCache(cache);

    if (cacheStored) {
      saveStatus.textContent = "5eTools rules cached";
      showToast("5eTools import failed", "error");
    } else {
      updateRulesSourceStatus("Rules: 5eTools loaded for this session");
      saveStatus.textContent = "Rules cache too large for local storage";
    }
  } catch (error) {
    console.error(error);
    updateRulesSourceStatus("Rules: Import failed");
    saveStatus.textContent = "Rules import failed";
  }
}

function clearRulesCache() {
  localStorage.removeItem(RULES_CACHE_KEY);
  classRuleMemory = structuredClone(builtInClassRuleMemory);
  ruleReferenceData = {
    species: [],
    subraces: [],
    backgrounds: [],
    spells: [],
    items: [],
  };
  classFeatureDescriptions = {
    ...(window.ADVENTURER_FEATURE_DESCRIPTIONS || {}),
  };
  populateClassAutomationOptions();
  populateRuleReferenceOptions();
  updateCreateCharacterPreview();
  updateLevelUpNewClassPreview();
  updateRulesSourceStatus();
  saveStatus.textContent = "Using local rules";
}

function applyRulesCache(cache) {
  classRuleMemory = structuredClone(cache.classRules || builtInClassRuleMemory);
  ruleReferenceData = {
    species: Array.isArray(cache.species) ? cache.species : [],
    subraces: Array.isArray(cache.subraces) ? cache.subraces : [],
    backgrounds: Array.isArray(cache.backgrounds) ? cache.backgrounds : [],
    spells: Array.isArray(cache.spells) ? cache.spells : [],
    items: Array.isArray(cache.items) ? cache.items : [],
  };
  classFeatureDescriptions = {
    ...(window.ADVENTURER_FEATURE_DESCRIPTIONS || {}),
    ...(cache.featureDescriptions || {}),
  };
  populateClassAutomationOptions();
  populateRuleReferenceOptions();
  updateCreateCharacterPreview();
  updateLevelUpNewClassPreview();
  refreshDerivedValues();
  updateRulesSourceStatus();
}

async function buildFiveEToolsRulesCache() {
  const [
    classIndex,
    spellIndex,
    racesData,
    backgroundsData,
    optionalFeaturesData,
    itemsBaseData,
    itemsData,
  ] = await Promise.all([
    fetchFiveEToolsJson("class/index.json"),
    fetchFiveEToolsJson("spells/index.json"),
    fetchFiveEToolsJson("races.json"),
    fetchFiveEToolsJson("backgrounds.json"),
    fetchFiveEToolsJson("optionalfeatures.json"),
    fetchFiveEToolsJson("items-base.json"),
    fetchFiveEToolsJson("items.json"),
  ]);
  const optionalFeatureLookup =
    buildOptionalFeatureLookup(optionalFeaturesData);
  const [classFiles, spellFiles] = await Promise.all(
    [
      Object.entries(classIndex).map(async ([key, fileName]) => ({
        key,
        data: await fetchFiveEToolsJson(`class/${fileName}`),
      })),
      Object.entries(spellIndex).map(async ([key, fileName]) => ({
        key,
        data: await fetchFiveEToolsJson(`spells/${fileName}`),
      })),
    ].map((requests) => Promise.all(requests)),
  );

  const classRules = {};
  const featureDescriptions = {};
  classFiles.forEach(({ data }) => {
    const classRule = normalizeFiveEToolsClassFile(data, optionalFeatureLookup);
    if (!classRule) {
      return;
    }

    classRules[classRuleKey(classRule.label)] = classRule;
    Object.assign(featureDescriptions, classRule.featureDescriptions || {});
  });

  return {
    version: 2,
    source: "5etools",
    sourceUrl: FIVEETOOLS_DATA_BASE_URL,
    importedAt: Date.now(),
    classRules,
    featureDescriptions,
    species: normalizeFiveEToolsReferenceRecords(
      racesData.race || [],
      "Species Trait",
    ),
    subraces: normalizeFiveEToolsSubraceRecords(racesData.subrace || []),
    backgrounds: normalizeFiveEToolsReferenceRecords(
      backgroundsData.background || [],
      "Background Feature",
    ),
    spells: normalizeFiveEToolsSpellFiles(spellFiles),
    items: normalizeFiveEToolsItems([
      ...(itemsBaseData.baseitem || []),
      ...(itemsData.item || []),
    ]),
  };
}

if ("serviceWorker" in navigator) {
  let refreshing = false;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  navigator.serviceWorker
    .register("./service-worker.js")
    .then((registration) => {
      if (registration.waiting) {
        showUpdateToast(registration);
      }

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (!newWorker) return;

        newWorker.addEventListener("statechange", () => {
          if (
            newWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            showUpdateToast(registration);
          }
        });
      });
    })
    .catch(() => {
      // Ignore registration failures; the app still works without offline support.
    });
}

async function fetchFiveEToolsJson(path) {
  const response = await fetch(`${FIVEETOOLS_DATA_BASE_URL}${path}`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.status}`);
  }

  return response.json();
}

function normalizeFiveEToolsClassFile(data, optionalFeatureLookup) {
  const classEntry = choosePreferredFiveEToolsClass(data.class || []);
  if (!classEntry) {
    return null;
  }

  const featureRefs = getFiveEToolsClassFeatureRefs(classEntry);
  const featureDescriptions = {};
  const levels = {};
  const choices = {};
  const asiLevels = new Set();

  featureRefs.forEach((featureRef) => {
    if (!featureRef.level) {
      return;
    }

    const feature = resolveFiveEToolsClassFeature(
      featureRef,
      data.classFeature || [],
    );
    const featureName = normalizeFiveEToolsFeatureName(
      feature?.name || featureRef.name,
    );
    if (!featureName) {
      return;
    }

    if (isAsiFeatureName(featureName)) {
      asiLevels.add(featureRef.level);
      return;
    }

    levels[featureRef.level] ||= [];
    if (!levels[featureRef.level].includes(featureName)) {
      levels[featureRef.level].push(featureName);
    }

    const description = entriesToPlainText(feature?.entries || []);
    if (description) {
      featureDescriptions[featureName] = description;
    }

    const choice = extractFiveEToolsChoice(
      feature,
      data.classFeature || [],
      optionalFeatureLookup,
    );
    if (choice) {
      choices[featureRef.level] ||= [];
      choices[featureRef.level].push(choice);
    }
  });

  const subclasses = normalizeFiveEToolsSubclasses(
    data.subclass || [],
    classEntry,
  );
  const subclassLevel = detectFiveEToolsSubclassLevel(
    featureRefs,
    classEntry,
    subclasses,
  );

  return {
    label: classEntry.name,
    hitDie: Number(classEntry.hd?.faces || 8),
    asiLevels: Array.from(asiLevels).length
      ? Array.from(asiLevels).sort((a, b) => a - b)
      : standardAsiLevels,
    subclassLevel,
    subclassLabel: classEntry.subclassTitle || "Subclass",
    subclasses,
    choices,
    levels,
    featureDescriptions,
    source: classEntry.source || "",
  };
}

function choosePreferredFiveEToolsClass(classes) {
  const preferredSources = ["XPHB", "PHB", "SRD", "TCE"];
  for (const source of preferredSources) {
    const match = classes.find((classEntry) => classEntry.source === source);
    if (match) {
      return match;
    }
  }

  return classes[0] || null;
}

function getFiveEToolsClassFeatureRefs(classEntry) {
  return (classEntry.classFeatures || [])
    .map(parseFiveEToolsFeatureRef)
    .filter((featureRef) => featureRef.name && featureRef.level);
}

function parseFiveEToolsFeatureRef(ref) {
  if (typeof ref === "string") {
    const parts = ref.split("|");
    return {
      name: parts[0] || "",
      className: parts[1] || "",
      classSource: parts[2] || "",
      level: Number(parts[3] || 0),
      source: parts[4] || parts[2] || "",
      raw: ref,
    };
  }

  if (ref?.classFeature) {
    return parseFiveEToolsFeatureRef(ref.classFeature);
  }

  if (ref?.subclassFeature) {
    return parseFiveEToolsFeatureRef(ref.subclassFeature);
  }

  return {
    name: ref?.name || "",
    className: ref?.className || "",
    classSource: ref?.classSource || "",
    level: Number(ref?.level || 0),
    source: ref?.source || ref?.classSource || "",
    raw: ref,
  };
}

function resolveFiveEToolsClassFeature(featureRef, features) {
  return (
    features.find(
      (feature) =>
        feature.name === featureRef.name &&
        Number(feature.level || 0) === Number(featureRef.level || 0) &&
        classRuleKey(feature.className) ===
          classRuleKey(featureRef.className) &&
        (!featureRef.source ||
          feature.source === featureRef.source ||
          feature.source === featureRef.classSource),
    ) ||
    features.find(
      (feature) =>
        feature.name === featureRef.name &&
        Number(feature.level || 0) === Number(featureRef.level || 0) &&
        classRuleKey(feature.className) === classRuleKey(featureRef.className),
    )
  );
}

function normalizeFiveEToolsFeatureName(name) {
  return String(name || "")
    .replace(/\s+/g, " ")
    .trim();
}

function isAsiFeatureName(name) {
  return /ability score improvement/i.test(name);
}

function detectFiveEToolsSubclassLevel(featureRefs, classEntry, subclasses) {
  const titleKey = classRuleKey(classEntry.subclassTitle || "");
  const directFeatureRef = featureRefs.find((featureRef) => {
    const featureKey = classRuleKey(featureRef.name);
    return (
      titleKey && (featureKey === titleKey || featureKey.includes(titleKey))
    );
  });

  if (directFeatureRef?.level) {
    return directFeatureRef.level;
  }

  const subclassLevels = subclasses
    .flatMap((subclass) => subclass.featureLevels || [])
    .filter(Boolean);
  if (subclassLevels.length) {
    return Math.min(...subclassLevels);
  }

  return 3;
}

function normalizeFiveEToolsSubclasses(subclasses, classEntry) {
  return subclasses
    .filter(
      (subclass) =>
        classRuleKey(subclass.className) === classRuleKey(classEntry.name) &&
        (!subclass.classSource || subclass.classSource === classEntry.source),
    )
    .map((subclass) => {
      const featureLevels = (subclass.subclassFeatures || [])
        .map(parseFiveEToolsFeatureRef)
        .map((featureRef) => featureRef.level)
        .filter(Boolean);

      return {
        value: `${subclass.name}|${subclass.source || ""}`,
        label: subclass.shortName || subclass.name,
        name: subclass.name,
        source: subclass.source || "",
        description: entriesToPlainText(subclass.entries || []),
        featureLevels,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));
}

function extractFiveEToolsChoice(
  feature,
  classFeatures,
  optionalFeatureLookup,
) {
  if (!feature?.entries) {
    return null;
  }

  const optionNodes = [];
  collectFiveEToolsOptionNodes(feature.entries, optionNodes);
  const options = optionNodes
    .flatMap((node) => node.entries || node.items || [])
    .map((entry) =>
      normalizeFiveEToolsChoiceOption(
        entry,
        classFeatures,
        optionalFeatureLookup,
      ),
    )
    .filter(Boolean);

  if (options.length < 2 && feature.name === "Divine Order") {
    ["Protector", "Thaumaturge"].forEach((optionName) => {
      const optionFeature = classFeatures.find(
        (classFeature) => classFeature.name === optionName,
      );
      if (optionFeature) {
        options.push({
          value: classRuleKey(optionName),
          label: optionName,
          description: entriesToPlainText(optionFeature.entries || []),
        });
      }
    });
  }

  if (options.length < 2) {
    return null;
  }

  return {
    key: classRuleKey(feature.name),
    label: feature.name,
    description: entriesToPlainText(feature.entries).slice(0, 240),
    options,
  };
}

function collectFiveEToolsOptionNodes(value, optionNodes) {
  if (Array.isArray(value)) {
    value.forEach((entry) => collectFiveEToolsOptionNodes(entry, optionNodes));
    return;
  }

  if (!value || typeof value !== "object") {
    return;
  }

  if (value.type === "options" && Array.isArray(value.entries)) {
    optionNodes.push(value);
    return;
  }

  Object.values(value).forEach((entry) =>
    collectFiveEToolsOptionNodes(entry, optionNodes),
  );
}

function normalizeFiveEToolsChoiceOption(
  entry,
  classFeatures,
  optionalFeatureLookup,
) {
  if (entry?.type === "refClassFeature" && entry.classFeature) {
    const featureRef = parseFiveEToolsFeatureRef(entry.classFeature);
    const feature = resolveFiveEToolsClassFeature(featureRef, classFeatures);
    const label = feature?.name || featureRef.name;
    return {
      value: classRuleKey(`${label}-${feature?.source || featureRef.source}`),
      label,
      description: entriesToPlainText(feature?.entries || []),
    };
  }

  if (entry?.type === "refOptionalfeature" && entry.optionalfeature) {
    const optionalFeatureRef = parseFiveEToolsOptionalFeatureRef(
      entry.optionalfeature,
    );
    const optionalFeature =
      optionalFeatureLookup.get(optionalFeatureRef.key) ||
      optionalFeatureLookup.get(classRuleKey(optionalFeatureRef.name));
    return {
      value: classRuleKey(
        `${optionalFeatureRef.name}-${optionalFeatureRef.source}`,
      ),
      label: optionalFeatureRef.name,
      description: entriesToPlainText(optionalFeature?.entries || []),
    };
  }

  if (entry?.name) {
    return {
      value: classRuleKey(entry.name),
      label: entry.name,
      description: entriesToPlainText(entry.entries || entry.entry || []),
    };
  }

  return null;
}

function parseFiveEToolsOptionalFeatureRef(value) {
  const parts = String(value || "").split("|");
  return {
    name: parts[0] || "",
    source: parts[1] || "",
    key: classRuleKey(`${parts[0] || ""}-${parts[1] || ""}`),
  };
}

function buildOptionalFeatureLookup(optionalFeaturesData) {
  const lookup = new Map();
  (optionalFeaturesData.optionalfeature || []).forEach((feature) => {
    lookup.set(
      classRuleKey(`${feature.name}-${feature.source || ""}`),
      feature,
    );
    if (!lookup.has(classRuleKey(feature.name))) {
      lookup.set(classRuleKey(feature.name), feature);
    }
  });
  return lookup;
}

function normalizeFiveEToolsReferenceRecords(records, category) {
  return records
    .map((record) => ({
      name: record.name || "",
      source: record.source || "",
      speed: normalizeFiveEToolsSpeed(record.speed),
      category,
      features: collectFiveEToolsReferenceFeatures(record.entries || []),
    }))
    .filter((record) => record.name);
}

function normalizeFiveEToolsSubraceRecords(records) {
  return records
    .map((record) => ({
      name: record.name || "",
      source: record.source || "",
      parentName:
        record.raceName || record.race?.name || record._copy?.name || "",
      parentSource:
        record.raceSource || record.race?.source || record._copy?.source || "",
      speed: normalizeFiveEToolsSpeed(record.speed),
      category: "Species Trait",
      features: collectFiveEToolsReferenceFeatures(record.entries || []),
    }))
    .filter((record) => record.name);
}

function normalizeFiveEToolsSpeed(speed) {
  if (typeof speed === "number") {
    return speed;
  }

  if (speed && typeof speed === "object") {
    if (typeof speed.walk === "number") {
      return speed.walk;
    }
    if (speed.walk === true) {
      return 30;
    }
  }

  return null;
}

function normalizeFiveEToolsSpellFiles(spellFiles) {
  const preferred = new Map();
  spellFiles
    .flatMap(({ data }) => data.spell || [])
    .map(normalizeFiveEToolsSpell)
    .filter(Boolean)
    .forEach((spell) => {
      const key = classRuleKey(spell.name);
      const existing = preferred.get(key);
      if (
        !existing ||
        sourcePreferenceRank(spell.source) <
          sourcePreferenceRank(existing.source)
      ) {
        preferred.set(key, spell);
      }
    });

  return [...preferred.values()].sort(
    (a, b) => a.name.localeCompare(b.name) || a.source.localeCompare(b.source),
  );
}

function normalizeFiveEToolsSpell(spell) {
  if (!spell?.name) {
    return null;
  }

  const damageType =
    Array.isArray(spell.damageInflict) && spell.damageInflict.length
      ? String(spell.damageInflict[0]).toLowerCase()
      : inferDamageTypeFromText(
          entriesToPlainText([
            spell.entries || [],
            spell.entriesHigherLevel || [],
          ]),
        ) || "force";
  const savingThrow =
    Array.isArray(spell.savingThrow) && spell.savingThrow.length
      ? abilityAbbreviationMap[String(spell.savingThrow[0]).toLowerCase()] ||
        "none"
      : "none";
  const hasAttack =
    Array.isArray(spell.spellAttack) && spell.spellAttack.length > 0;
  const hasSave = savingThrow !== "none";

  return {
    id: ruleRecordId(spell),
    name: spell.name,
    source: spell.source || "",
    level: spellLevels[Number(spell.level || 0)] || "Cantrip",
    school: spellSchoolMap[spell.school] || spell.school || "Evocation",
    castType: hasAttack ? "attack" : hasSave ? "save" : "utility",
    saveAbility: savingThrow,
    castingTime: formatFiveEToolsTime(spell.time),
    range: formatFiveEToolsRange(spell.range),
    duration: formatFiveEToolsDuration(spell.duration),
    components: formatFiveEToolsComponents(spell.components),
    damageType,
    effect: inferDiceExpression(
      entriesToPlainText([spell.entries || [], spell.entriesHigherLevel || []]),
    ),
    concentration: (spell.duration || []).some((duration) =>
      Boolean(duration.concentration),
    ),
    ritual: Boolean(spell.meta?.ritual),
    notes: entriesToPlainText([
      spell.entries || [],
      spell.entriesHigherLevel || [],
    ]),
  };
}

function normalizeFiveEToolsItems(items) {
  const preferred = new Map();
  items
    .map(normalizeFiveEToolsItem)
    .filter(Boolean)
    .forEach((item) => {
      const key = classRuleKey(item.name);
      const existing = preferred.get(key);
      if (
        !existing ||
        sourcePreferenceRank(item.source) <
          sourcePreferenceRank(existing.source)
      ) {
        preferred.set(key, item);
      }
    });

  return [...preferred.values()].sort(
    (a, b) => a.name.localeCompare(b.name) || a.source.localeCompare(b.source),
  );
}

function normalizeFiveEToolsItem(item) {
  if (!item?.name) {
    return null;
  }

  const typeCode = String(item.type || "").split("|")[0];
  const isShield =
    item.shield || typeCode === "S" || /^shield$/i.test(item.name);
  const isArmor = Boolean(item.armor || ["LA", "MA", "HA"].includes(typeCode));
  const isWeapon = Boolean(item.weapon || item.dmg1);
  const type = isShield
    ? "shield"
    : isArmor
      ? "armor"
      : isWeapon
        ? "weapon"
        : "gear";
  const range = item.range
    ? `${isRangedItem(item) ? "Ranged" : "Melee"} Weapon Attack ${item.range} ft.`
    : isRangedItem(item)
      ? "Ranged Weapon Attack"
      : isWeapon
        ? "Melee Weapon Attack"
        : "";

  return {
    id: ruleRecordId(item),
    name: item.name,
    source: item.source || "",
    type,
    quantity: 1,
    equipped: false,
    ability: isRangedItem(item) ? "dexterity" : "strength",
    damageType:
      itemDamageTypeMap[String(item.dmgType || "").split("|")[0]] ||
      "bludgeoning",
    damageDice: item.dmg1 || "",
    range,
    proficient: true,
    versatile:
      Array.isArray(item.property) &&
      item.property.some((property) => String(property).split("|")[0] === "V"),
    versatileDice: item.dmg2 || "",
    armorCategory:
      typeCode === "MA" ? "medium" : typeCode === "HA" ? "heavy" : "light",
    armorBase: Number(item.ac || (isShield ? 0 : 10)),
    shieldBonus: isShield ? Number(item.ac || 2) : 2,
    notes: entriesToPlainText([
      item.entries || [],
      item.additionalEntries || [],
    ]),
    collapsed: true,
  };
}

function ruleRecordId(record) {
  return classRuleKey(`${record.name || ""}-${record.source || ""}`);
}

function sourcePreferenceRank(source) {
  const index = preferredRuleSources.indexOf(source);
  return index === -1 ? preferredRuleSources.length : index;
}

function isRangedItem(item) {
  const typeCode = String(item.type || "").split("|")[0];
  return typeCode === "R" || Boolean(item.range);
}

function inferDiceExpression(text) {
  const damageTagMatch = String(text || "").match(
    /\b\d+d\d+(?:\s*[+-]\s*\d+)?\b/i,
  );
  return damageTagMatch ? damageTagMatch[0].replace(/\s+/g, "") : "";
}

function inferDamageTypeFromText(text) {
  const match = String(text || "")
    .toLowerCase()
    .match(
      /\b(acid|bludgeoning|cold|fire|force|lightning|necrotic|piercing|poison|psychic|radiant|slashing|thunder)\b/,
    );
  return match?.[1] || "";
}

function formatFiveEToolsTime(times = []) {
  const time = times[0];
  if (!time) {
    return "";
  }

  const unit = String(time.unit || "action").replace(/_/g, " ");
  const number = Number(time.number || 1);
  return `${number} ${unit}${number === 1 ? "" : "s"}`;
}

function formatFiveEToolsRange(range) {
  if (!range) {
    return "";
  }

  if (range.type === "point" && range.distance) {
    if (range.distance.type === "self") {
      return "Self";
    }
    if (range.distance.type === "touch") {
      return "Touch";
    }
    if (range.distance.amount) {
      return `${range.distance.amount} ${range.distance.type || "feet"}`;
    }
  }

  if (range.type === "special") {
    return "Special";
  }

  if (range.distance?.amount) {
    return `${range.distance.amount} ${range.distance.type || "feet"}`;
  }

  return range.type || "";
}

function formatFiveEToolsDuration(durations = []) {
  const duration = durations[0];
  if (!duration) {
    return "";
  }

  const prefix = duration.concentration ? "Concentration, " : "";
  if (duration.type === "instant") {
    return "Instantaneous";
  }
  if (duration.type === "permanent") {
    return `${prefix}Permanent`;
  }
  if (duration.type === "special") {
    return `${prefix}Special`;
  }
  if (duration.duration) {
    const amount = Number(duration.duration.amount || 1);
    const unit = duration.duration.type || "round";
    return `${prefix}${amount} ${unit}${amount === 1 ? "" : "s"}`;
  }

  return `${prefix}${duration.type || ""}`.trim();
}

function formatFiveEToolsComponents(components = {}) {
  const parts = [];
  if (components.v) {
    parts.push("V");
  }
  if (components.s) {
    parts.push("S");
  }
  if (components.m) {
    parts.push("M");
  }
  return parts.join(", ");
}

function collectFiveEToolsReferenceFeatures(entries) {
  const ignoredNames = new Set([
    "Age",
    "Alignment",
    "Size",
    "Language",
    "Languages",
    "Height and Weight",
  ]);
  return (entries || [])
    .filter(
      (entry) =>
        entry &&
        typeof entry === "object" &&
        entry.name &&
        !ignoredNames.has(entry.name),
    )
    .map((entry) => ({
      name: entry.name,
      notes: entriesToPlainText(entry.entries || entry.entry || []),
    }))
    .filter((feature) => feature.notes);
}

function entriesToPlainText(value) {
  if (typeof value === "string") {
    return cleanFiveEToolsText(value);
  }

  if (Array.isArray(value)) {
    return value.map(entriesToPlainText).filter(Boolean).join("\n\n");
  }

  if (!value || typeof value !== "object") {
    return "";
  }

  if (value.type === "list" && Array.isArray(value.items)) {
    return value.items.map(entriesToPlainText).filter(Boolean).join("\n");
  }

  if (value.type === "item") {
    const entryText = entriesToPlainText(value.entries || value.entry || []);
    return value.name ? `${value.name}: ${entryText}` : entryText;
  }

  const namedEntryText = entriesToPlainText(
    value.entries || value.entry || value.items || [],
  );
  if (value.name && namedEntryText) {
    return `${value.name}: ${namedEntryText}`;
  }

  return namedEntryText;
}

function cleanFiveEToolsText(value) {
  return String(value || "")
    .replace(/\{@dc ([^}]+)\}/g, "DC $1")
    .replace(/\{@(?:damage|dice|hit) ([^}]+)\}/g, "$1")
    .replace(/\{@[^}\s]+ ([^}|]+)(?:\|[^}]*)?\}/g, "$1")
    .replace(/\{=([^}]+)\}/g, "$1")
    .replace(/\\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function mergeState(base, incoming) {
  return {
    ...base,
    ...incoming,
    abilities: {
      ...base.abilities,
      ...(incoming?.abilities || {}),
    },
    classes:
      Array.isArray(incoming?.classes) && incoming.classes.length
        ? incoming.classes.map(normalizeClassEntry)
        : [normalizeClassEntry(parseLegacyClassLevel(incoming?.classLevel))],
    attacks: Array.isArray(incoming?.attacks)
      ? incoming.attacks.map(normalizeAttack)
      : [],
    spells: Array.isArray(incoming?.spells)
      ? incoming.spells.map(normalizeSpell)
      : [],
    features: Array.isArray(incoming?.features)
      ? incoming.features.map(normalizeFeature)
      : parseLegacyFeatures(incoming?.features),
    trackingResources: Array.isArray(incoming?.trackingResources)
      ? incoming.trackingResources.map(normalizeTrackingResource)
      : [],
    activeConditions: Array.isArray(incoming?.activeConditions)
      ? incoming.activeConditions
          .map((condition) => String(condition || "").trim())
          .filter(Boolean)
      : [],
    statuses: Array.isArray(incoming?.statuses)
      ? incoming.statuses.map(normalizeStatus)
      : [],
    concentrating: Boolean(incoming?.concentrating),
    equipmentItems: Array.isArray(incoming?.equipmentItems)
      ? incoming.equipmentItems.map(normalizeEquipmentItem)
      : [],
    advancementChoices: Array.isArray(incoming?.advancementChoices)
      ? incoming.advancementChoices.map(normalizeAdvancementChoice)
      : [],
    proficiencies: {
      savingThrows: {
        ...base.proficiencies.savingThrows,
        ...(incoming?.proficiencies?.savingThrows || {}),
      },
      skills: {
        ...base.proficiencies.skills,
        ...(incoming?.proficiencies?.skills || {}),
      },
    },
  };
}

function renderEquipmentItems() {
  const template = document.getElementById("equipmentTemplate");
  equipmentList.innerHTML = "";

  state.equipmentItems.forEach((item, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".equipment-card");
    const title = fragment.querySelector(".equipment-title");
    const summary = fragment.querySelector(".equipment-summary");
    const removeButton = fragment.querySelector(".remove-equipment-button");
    const toggleButton = fragment.querySelector(".equipment-toggle");
    const createAttackButton = fragment.querySelector(".create-attack-button");

    card.dataset.itemIndex = index;
    card.dataset.itemType = item.type;
    card.dataset.collapsed = String(Boolean(item.collapsed));
    card.dataset.versatile = String(Boolean(item.versatile));
    title.textContent = item.name || `Item ${index + 1}`;
    summary.textContent = summarizeEquipmentItem(item);

    toggleButton.addEventListener("click", () => {
      state.equipmentItems[index].collapsed = !Boolean(
        state.equipmentItems[index].collapsed,
      );
      card.dataset.collapsed = String(
        Boolean(state.equipmentItems[index].collapsed),
      );
      syncEquipmentEditorHeight(card);
      queueSave();
    });

    removeButton.addEventListener("click", () => {
      state.equipmentItems.splice(index, 1);
      renderEquipmentItems();
      refreshDerivedValues();
      queueSave();
    });

    createAttackButton.addEventListener("click", () => {
      createAttackFromEquipmentItem(state.equipmentItems[index]);
    });

    fragment.querySelectorAll("[data-equipment-field]").forEach((field) => {
      const fieldName = field.dataset.equipmentField;

      if (field.tagName === "SELECT") {
        if (fieldName === "type") {
          populateSimpleSelect(field, equipmentTypes);
        } else if (fieldName === "ability") {
          populateAbilitySelect(field);
        } else if (fieldName === "damageType") {
          populateDamageTypeSelect(field);
        } else if (fieldName === "armorCategory") {
          populateSimpleSelect(field, armorCategories);
        }
      }

      if (field.type === "checkbox") {
        field.checked = Boolean(item[fieldName]);
        field.addEventListener("change", () => {
          state.equipmentItems[index][fieldName] = field.checked;
          if (fieldName === "versatile") {
            card.dataset.versatile = String(field.checked);
          }
          if (fieldName === "equipped") {
            refreshDerivedValues();
          } else {
            summary.textContent = summarizeEquipmentItem(
              state.equipmentItems[index],
            );
          }
          queueSave();
        });
        return;
      }

      field.value = item[fieldName] ?? "";
      field.addEventListener("input", () => {
        state.equipmentItems[index][fieldName] =
          field.type === "number" ? Number(field.value || 0) : field.value;
        if (fieldName === "type") {
          card.dataset.itemType = field.value;
        }
        if (fieldName === "versatile") {
          card.dataset.versatile = String(Boolean(field.value));
        }
        title.textContent =
          state.equipmentItems[index].name || `Item ${index + 1}`;
        summary.textContent = summarizeEquipmentItem(
          state.equipmentItems[index],
        );
        refreshDerivedValues();
        queueSave();
      });
    });

    equipmentList.appendChild(fragment);
    syncEquipmentEditorHeight(card);
  });
}

function renderFeatures() {
  const template = document.getElementById("featureTemplate");
  featuresList.innerHTML = "";
  syncFeatureFilterButtons();

  state.features.forEach((feature, index) => {
    if (
      activeFeatureFilter !== "all" &&
      feature.category !== activeFeatureFilter
    ) {
      return;
    }

    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".feature-card");
    const title = fragment.querySelector(".feature-title");
    const summary = fragment.querySelector(".feature-summary");
    const removeButton = fragment.querySelector(".remove-feature-button");
    const toggleButton = fragment.querySelector(".feature-toggle");

    card.dataset.featureIndex = index;
    card.dataset.collapsed = String(Boolean(feature.collapsed));
    title.textContent = feature.name || `Feature ${index + 1}`;
    summary.textContent = summarizeFeature(feature);

    toggleButton.addEventListener("click", () => {
      state.features[index].collapsed = !Boolean(
        state.features[index].collapsed,
      );
      card.dataset.collapsed = String(Boolean(state.features[index].collapsed));
      syncFeatureEditorHeight(card);
      queueSave();
    });

    removeButton.addEventListener("click", () => {
      state.features.splice(index, 1);
      renderFeatures();
      queueSave();
    });

    fragment.querySelectorAll("[data-feature-field]").forEach((field) => {
      const fieldName = field.dataset.featureField;
      if (field.tagName === "SELECT" && fieldName === "category") {
        populateSimpleSelect(field, featureCategories);
      }
      field.value = feature[fieldName] ?? "";
      field.addEventListener("input", () => {
        state.features[index][fieldName] = field.value;
        title.textContent =
          state.features[index].name || `Feature ${index + 1}`;
        summary.textContent = summarizeFeature(state.features[index]);
        queueSave();
      });
    });

    featuresList.appendChild(fragment);
    syncFeatureEditorHeight(card);
  });
}

function setFeatureFilter(filter) {
  activeFeatureFilter = filter || "all";
  renderFeatures();
}

function syncFeatureFilterButtons() {
  featureFilterButtons.forEach((button) => {
    button.classList.toggle(
      "is-active",
      button.dataset.featureFilter === activeFeatureFilter,
    );
  });
}

function renderTrackingResources() {
  const template = document.getElementById("trackingTemplate");
  trackingList.innerHTML = "";

  state.trackingResources.forEach((resource, index) => {
    const normalizedResource = normalizeTrackingResource(resource);
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".tracking-card");
    const title = fragment.querySelector(".tracking-title");
    const summary = fragment.querySelector(".tracking-summary");
    const valueDisplay = fragment.querySelector(".tracking-value-display");
    const removeButton = fragment.querySelector(".remove-tracking-button");
    const toggleButton = fragment.querySelector(".tracking-toggle");
    const minusButton = fragment.querySelector(
      '[data-tracking-action="decrease"]',
    );
    const plusButton = fragment.querySelector(
      '[data-tracking-action="increase"]',
    );

    state.trackingResources[index] = normalizedResource;
    card.dataset.resourceIndex = index;
    card.dataset.collapsed = String(Boolean(normalizedResource.collapsed));
    card.dataset.totalMode = normalizedResource.totalSource;
    title.textContent = normalizedResource.name || `Resource ${index + 1}`;
    summary.textContent = summarizeTrackingResource(normalizedResource);
    valueDisplay.textContent = formatTrackingValueDisplay(normalizedResource);

    toggleButton.addEventListener("click", () => {
      state.trackingResources[index].collapsed = !Boolean(
        state.trackingResources[index].collapsed,
      );
      card.dataset.collapsed = String(
        Boolean(state.trackingResources[index].collapsed),
      );
      syncTrackingEditorHeight(card);
      queueSave();
    });

    removeButton.addEventListener("click", () => {
      state.trackingResources.splice(index, 1);
      renderTrackingResources();
      queueSave();
    });

    minusButton.addEventListener("click", (event) => {
      event.stopPropagation();
      adjustTrackingResourceValue(index, -1);
    });

    plusButton.addEventListener("click", (event) => {
      event.stopPropagation();
      adjustTrackingResourceValue(index, 1);
    });

    fragment.querySelectorAll("[data-tracking-field]").forEach((field) => {
      const fieldName = field.dataset.trackingField;

      if (field.tagName === "SELECT") {
        if (fieldName === "totalSource") {
          populateObjectSelect(field, trackingTotalOptions);
        } else if (fieldName === "restoreOn") {
          populateObjectSelect(field, trackingRestoreOptions);
        }
      }

      field.value = normalizedResource[fieldName] ?? "";
      field.addEventListener("input", () => {
        state.trackingResources[index][fieldName] =
          field.type === "number" ? Number(field.value || 0) : field.value;
        state.trackingResources[index] = normalizeTrackingResource(
          state.trackingResources[index],
        );
        const updatedResource = state.trackingResources[index];
        card.dataset.totalMode = updatedResource.totalSource;
        title.textContent = updatedResource.name || `Resource ${index + 1}`;
        summary.textContent = summarizeTrackingResource(updatedResource);
        valueDisplay.textContent = formatTrackingValueDisplay(updatedResource);
        if (field.type === "number") {
          field.value = updatedResource[fieldName] ?? "";
        }
        queueSave();
      });
    });

    trackingList.appendChild(fragment);
    syncTrackingEditorHeight(card);
  });
}

function renderConditionsAndStatuses() {
  conditionsList.innerHTML = "";
  standardConditions.forEach((condition) => {
    const button = document.createElement("button");
    const isActive = state.activeConditions.includes(condition);
    button.type = "button";
    button.className = `condition-chip${isActive ? " is-active" : ""}`;
    button.textContent = condition;
    button.setAttribute("aria-pressed", String(isActive));
    button.addEventListener("click", () => {
      toggleCondition(condition);
    });
    conditionsList.appendChild(button);
  });

  const concentrating = Boolean(state.concentrating);
  concentrationToggle.classList.toggle("is-active", concentrating);
  concentrationToggle.setAttribute("aria-pressed", String(concentrating));

  const statusTemplate = document.getElementById("statusTemplate");
  statusesList.innerHTML = "";

  state.statuses.forEach((status, index) => {
    const fragment = statusTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".status-card");
    const title = fragment.querySelector(".status-title");
    const removeButton = fragment.querySelector(".remove-status-button");

    card.dataset.statusIndex = index;
    title.textContent = status.name || `Status ${index + 1}`;

    removeButton.addEventListener("click", () => {
      state.statuses.splice(index, 1);
      renderConditionsAndStatuses();
      queueSave();
    });

    fragment.querySelectorAll("[data-status-field]").forEach((field) => {
      const fieldName = field.dataset.statusField;
      field.value = status[fieldName] ?? "";
      field.addEventListener("input", () => {
        state.statuses[index][fieldName] = field.value;
        title.textContent = state.statuses[index].name || `Status ${index + 1}`;
        queueSave();
      });
    });

    statusesList.appendChild(fragment);
  });
}

function renderSpells() {
  const template = document.getElementById("spellTemplate");
  spellsList.innerHTML = "";

  state.spells.forEach((spell, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".spell-card");
    const title = fragment.querySelector(".spell-title");
    const summary = fragment.querySelector(".spell-summary");
    const removeButton = fragment.querySelector(".remove-spell-button");
    const toggleButton = fragment.querySelector(".spell-toggle");

    card.dataset.spellIndex = index;
    card.dataset.collapsed = String(Boolean(spell.collapsed));
    card.dataset.castType = spell.castType;
    title.textContent = spell.name || `Spell ${index + 1}`;
    summary.textContent = buildSpellSummary(spell);

    toggleButton.addEventListener("click", () => {
      state.spells[index].collapsed = !Boolean(state.spells[index].collapsed);
      card.dataset.collapsed = String(Boolean(state.spells[index].collapsed));
      syncSpellEditorHeight(card);
      queueSave();
    });

    removeButton.addEventListener("click", () => {
      state.spells.splice(index, 1);
      renderSpells();
      refreshDerivedValues();
      queueSave();
    });

    fragment.querySelectorAll("[data-spell-field]").forEach((field) => {
      const fieldName = field.dataset.spellField;

      if (field.tagName === "SELECT") {
        if (fieldName === "ability" || fieldName === "saveAbility") {
          populateAbilitySelect(field);
        } else if (fieldName === "damageType") {
          populateDamageTypeSelect(field);
        } else if (fieldName === "level") {
          populateSimpleSelect(field, spellLevels);
        } else if (fieldName === "school") {
          populateSimpleSelect(field, spellSchools);
        } else if (fieldName === "castType") {
          populateObjectSelect(field, spellCastTypes);
        }
      }

      if (fieldName === "saveAbility") {
        field.closest("label")?.classList.add("save-ability-field");
      }

      if (field.type === "checkbox") {
        field.checked = Boolean(spell[fieldName]);
        field.addEventListener("change", () => {
          state.spells[index][fieldName] = field.checked;
          refreshDerivedValues();
          queueSave();
        });
        return;
      }

      field.value = spell[fieldName] ?? "";
      field.addEventListener("input", () => {
        state.spells[index][fieldName] = field.value;
        if (fieldName === "castType") {
          card.dataset.castType = field.value;
        }
        refreshDerivedValues();
        queueSave();
      });
    });

    fragment.querySelectorAll("[data-spell-roll-type]").forEach((pill) => {
      pill.addEventListener("click", () => {
        rollSpellFormula(card, pill.dataset.spellRollType);
      });
    });

    spellsList.appendChild(fragment);
    syncSpellEditorHeight(card);
  });
}

function bindFields() {
  document.querySelectorAll("[data-field]").forEach((field) => {
    const key = field.dataset.field;
    field.value = state[key] ?? "";

    field.addEventListener("input", () => {
      state[key] = field.value;
      if (key === "name") {
        renderCharacterLibraryControls();
      }
      if (key === "species") {
        populateDatalist(
          subraceOptions,
          getSubraceOptionsForSpecies(field.value),
        );
        if (!String(state.speed || "").trim()) {
          state.speed =
            getDefaultSpeedForSpecies(state.species, state.subrace) || "";
        }
      }
      if (key === "subrace" && !String(state.speed || "").trim()) {
        state.speed =
          getDefaultSpeedForSpecies(state.species, state.subrace) || "";
      }
      refreshDerivedValues();
      queueSave();
    });
  });
}

function setCenterTab(tab) {
  activeCenterTab = tab;

  centerTabButtons.forEach((button) => {
    const isActive = button.dataset.centerTab === tab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  attacksPanel.hidden = !(tab === "actions" || tab === "spells");
  attacksPanel.dataset.view = tab === "spells" ? "spells" : "actions";
  featuresPanel.hidden = tab !== "features";
  equipmentPanel.hidden = tab !== "inventory";
  notesPanel.hidden = tab !== "notes";

  attacksList.hidden = tab !== "actions";
  spellsList.hidden = tab !== "spells";
  addAttackButton.hidden = tab !== "actions";
  addSpellButton.hidden = tab !== "spells";
  importSpellButton.hidden = tab !== "spells";

  attacksPanelTitle.textContent = tab === "spells" ? "Spells" : "Actions";
}

function renderClasses() {
  const template = document.getElementById("classTemplate");
  classList.innerHTML = "";

  if (!state.classes.length) {
    state.classes.push(normalizeClassEntry());
  }

  state.classes.forEach((classEntry, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".class-card");
    const title = fragment.querySelector(".class-title");
    const removeButton = fragment.querySelector(".remove-class-button");

    card.dataset.classIndex = index;
    title.textContent = classEntry.name
      ? `${classEntry.name} ${classEntry.level}`
      : `Class Entry ${index + 1}`;

    removeButton.addEventListener("click", () => {
      state.classes.splice(index, 1);
      if (!state.classes.length) {
        state.classes.push(normalizeClassEntry());
      }
      renderClasses();
      refreshDerivedValues();
      queueSave();
    });

    fragment.querySelectorAll("[data-class-field]").forEach((field) => {
      const fieldName = field.dataset.classField;
      field.value = classEntry[fieldName] ?? "";
      field.addEventListener("input", () => {
        state.classes[index][fieldName] =
          field.type === "number" ? Number(field.value || 0) : field.value;
        title.textContent = state.classes[index].name
          ? `${state.classes[index].name} ${Math.max(1, Number(state.classes[index].level || 1))}`
          : `Class Entry ${index + 1}`;
        refreshDerivedValues();
        queueSave();
      });
    });

    classList.appendChild(fragment);
  });
}

function renderAdvancementChoices() {
  const template = document.getElementById("advancementChoiceTemplate");
  advancementChoicesList.innerHTML = "";

  state.advancementChoices.forEach((choice) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".advancement-card");
    const title = fragment.querySelector(".advancement-title");
    const summary = fragment.querySelector(".advancement-summary");
    const status = fragment.querySelector('[data-advancement-output="status"]');

    card.dataset.choiceId = choice.id;
    card.dataset.mode = choice.type || "";
    card.dataset.status = choice.status;
    card.dataset.asiMode = choice.asiMode || "plus2";
    title.textContent = `${choice.className || "Class"} Level ${choice.classLevel} Choice`;
    summary.textContent = describeAdvancementChoice(choice);
    status.textContent = choice.status === "resolved" ? "Resolved" : "Pending";

    fragment
      .querySelectorAll('[data-advancement-action="asi"]')
      .forEach((button) => {
        button.addEventListener("click", () => {
          choice.type = "asi";
          card.dataset.mode = "asi";
          queueSave();
        });
      });

    fragment
      .querySelectorAll('[data-advancement-action="feat"]')
      .forEach((button) => {
        button.addEventListener("click", () => {
          choice.type = "feat";
          card.dataset.mode = "feat";
          queueSave();
        });
      });

    fragment.querySelectorAll("[data-asi-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        choice.asiMode = button.dataset.asiMode;
        card.dataset.asiMode = choice.asiMode;
        queueSave();
      });
    });

    fragment.querySelectorAll("[data-advancement-field]").forEach((field) => {
      const fieldName = field.dataset.advancementField;
      if (field.tagName === "SELECT") {
        populateAbilitySelect(field);
      }
      field.value = choice[fieldName] ?? "";
      field.addEventListener("input", () => {
        choice[fieldName] = field.value;
        queueSave();
      });
    });

    fragment
      .querySelector('[data-advancement-action="confirmAsi"]')
      ?.addEventListener("click", () => {
        resolveAsiChoice(choice);
      });

    fragment
      .querySelector('[data-advancement-action="confirmFeat"]')
      ?.addEventListener("click", () => {
        resolveFeatChoice(choice);
      });

    advancementChoicesList.appendChild(fragment);
  });
}

function renderAttacks() {
  attacksList.innerHTML = "";

  state.attacks.forEach((attack, index) => {
    const template = document.getElementById("attackTemplate");
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".attack-card");
    const title = fragment.querySelector(".attack-title");
    const summary = fragment.querySelector(".attack-summary");
    const removeButton = fragment.querySelector(".remove-attack-button");
    const toggleButton = fragment.querySelector(".attack-toggle");

    card.dataset.attackIndex = index;
    card.dataset.collapsed = String(Boolean(attack.collapsed));
    card.dataset.versatile = String(Boolean(attack.versatile));
    title.textContent = attack.name || `Attack ${index + 1}`;
    summary.textContent = attack.range || "Weapon, spell, or action";

    toggleButton.addEventListener("click", () => {
      state.attacks[index].collapsed = !Boolean(state.attacks[index].collapsed);
      card.dataset.collapsed = String(Boolean(state.attacks[index].collapsed));
      syncAttackEditorHeight(card);
      queueSave();
    });

    removeButton.addEventListener("click", () => {
      state.attacks.splice(index, 1);
      renderAttacks();
      refreshDerivedValues();
      queueSave();
    });

    fragment.querySelectorAll("[data-attack-field]").forEach((field) => {
      const fieldName = field.dataset.attackField;

      if (field.tagName === "SELECT") {
        if (field.dataset.attackField === "damageType") {
          populateDamageTypeSelect(field);
        } else {
          populateAbilitySelect(field);
        }
      }

      if (field.type === "checkbox") {
        field.checked = Boolean(attack[fieldName]);
        field.addEventListener("change", () => {
          state.attacks[index][fieldName] = field.checked;
          if (fieldName === "versatile") {
            card.dataset.versatile = String(field.checked);
          }
          refreshDerivedValues();
          queueSave();
        });
        return;
      }

      field.value = attack[fieldName] ?? "";
      field.addEventListener("input", () => {
        state.attacks[index][fieldName] =
          field.type === "number" ? Number(field.value || 0) : field.value;
        refreshDerivedValues();
        queueSave();
      });
    });

    fragment.querySelectorAll(".rollable-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        rollAttackFormula(card, pill.dataset.rollType);
      });
    });

    attacksList.appendChild(fragment);
    syncAttackEditorHeight(card);
  });
}

function populateAbilitySelect(select) {
  select.innerHTML = "";
  const noneOption = document.createElement("option");
  noneOption.value = "none";
  noneOption.textContent = "None";
  select.appendChild(noneOption);

  abilities.forEach((ability) => {
    const option = document.createElement("option");
    option.value = ability.key;
    option.textContent = ability.label;
    select.appendChild(option);
  });
}

function populateDamageTypeSelect(select) {
  select.innerHTML = "";
  damageTypes.forEach((damageType) => {
    const option = document.createElement("option");
    option.value = damageType.toLowerCase();
    option.textContent = damageType;
    select.appendChild(option);
  });
}

function populateSimpleSelect(select, values) {
  select.innerHTML = "";
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function populateObjectSelect(select, values) {
  select.innerHTML = "";
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value.value;
    option.textContent = value.label;
    select.appendChild(option);
  });
}

function renderAbilityGroups() {
  const groupTemplate = document.getElementById("abilityGroupTemplate");
  const itemTemplate = document.getElementById("groupItemTemplate");
  abilityGroupsList.innerHTML = "";

  abilities.forEach((ability) => {
    const fragment = groupTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".ability-group-card");
    const scoreModifier = fragment.querySelector(".score-modifier");
    const scoreName = fragment.querySelector(".score-name");
    const scoreNameButton = fragment.querySelector(".score-name-button");
    const scoreCap = fragment.querySelector(".score-cap-input");
    const itemsWrap = fragment.querySelector(".ability-group-items");
    const rollAbility = () =>
      openAbilityRollModal(
        `${ability.label} Check`,
        abilityModifier(Number(state.abilities[ability.key] || 0)),
      );

    card.dataset.ability = ability.key;
    scoreCap.dataset.scoreInput = ability.key;
    scoreModifier.dataset.groupModifier = ability.key;
    scoreName.textContent = ability.label;
    scoreCap.value = state.abilities[ability.key];
    scoreCap.readOnly = true;
    scoreCap.addEventListener("input", () => {
      scoreCap.value = state.abilities[ability.key];
    });
    scoreCap.addEventListener("click", rollAbility);
    scoreNameButton.addEventListener("click", rollAbility);

    const savingThrow = {
      key: ability.key,
      label: "Saving Throw",
      group: "savingThrows",
      ability: ability.key,
      kind: "save",
    };

    const relatedSkills = skills
      .filter((skill) => skill.ability === ability.key)
      .map((skill) => ({
        ...skill,
        group: "skills",
        kind: "skill",
      }));

    [savingThrow, ...relatedSkills].forEach((item) => {
      const itemFragment = itemTemplate.content.cloneNode(true);
      const row = itemFragment.querySelector(".group-item");
      const toggleButton = itemFragment.querySelector(
        ".group-item-prof-toggle",
      );
      const rollButton = itemFragment.querySelector(".group-item-roll");
      const value = itemFragment.querySelector(".group-item-value");
      const name = itemFragment.querySelector(".group-item-name");

      row.dataset.group = item.group;
      row.dataset.key = item.key;
      row.dataset.kind = item.kind;
      value.dataset.group = item.group;
      value.dataset.key = item.key;
      name.textContent = item.label;

      toggleButton.addEventListener("click", () => {
        state.proficiencies[item.group][item.key] = !Boolean(
          state.proficiencies[item.group][item.key],
        );
        refreshDerivedValues();
        queueSave();
      });

      rollButton.addEventListener("click", () => {
        const abilityKey = item.ability;
        const proficient = Boolean(state.proficiencies[item.group][item.key]);
        const modifier =
          abilityModifier(Number(state.abilities[abilityKey] || 0)) +
          (proficient ? Number(state.proficiencyBonus || 0) : 0);
        openAbilityRollModal(item.label, modifier);
      });

      itemsWrap.appendChild(itemFragment);
    });

    abilityGroupsList.appendChild(fragment);
  });
}

function renderAbilityModal() {
  abilityModalGrid.innerHTML = "";
  syncAbilityModalModeUi();

  if (abilityModalMode === "pointbuy") {
    renderPointBuyModal();
    return;
  }

  renderManualAbilityModal();
}

function refreshDerivedValues() {
  const normalizedClasses = state.classes.map(normalizeClassEntry);
  state.classes = normalizedClasses;
  state.trackingResources = state.trackingResources.map(
    normalizeTrackingResource,
  );
  syncAdvancementChoices();
  const totalLevel = normalizedClasses.reduce(
    (sum, classEntry) => sum + Number(classEntry.level || 0),
    0,
  );
  const classSummary = buildClassSummary(normalizedClasses);
  const proficiencyBonus = calculateProficiencyBonus(totalLevel);
  const experience = Number(state.experience || 0);
  state.classLevel = classSummary;
  state.proficiencyBonus = proficiencyBonus;

  totalLevelDisplay.textContent = String(totalLevel || 1);
  classSummaryDisplay.textContent = classSummary || "Single class";
  proficiencyBonusDisplay.textContent = formatModifier(proficiencyBonus);
  updateLevelStatus(totalLevel, experience);
  updateLevelMethodDisplay();

  abilities.forEach((ability) => {
    const score = Number(state.abilities[ability.key] || 0);
    const modifierValue = abilityModifier(score);
    const groupModifier = document.querySelector(
      `[data-group-modifier="${ability.key}"]`,
    );
    const scoreCap = document.querySelector(
      `[data-score-input="${ability.key}"]`,
    );
    if (groupModifier) {
      groupModifier.textContent = formatModifier(modifierValue);
    }
    if (scoreCap) {
      scoreCap.value = score;
      scoreCap.readOnly = true;
    }
  });

  const armorClassField = document.querySelector('[data-field="armorClass"]');
  if (armorClassField) {
    const derivedArmorClass = deriveArmorClass();
    armorClassField.value = derivedArmorClass ?? state.armorClass ?? "";
  }

  const speedField = document.querySelector('[data-field="speed"]');
  if (speedField) {
    speedField.value = deriveSpeed() || state.speed || "";
  }

  abilities.forEach((ability) => {
    const itemNode = document.querySelector(
      `.group-item[data-group="savingThrows"][data-key="${ability.key}"]`,
    );
    const valueNode = document.querySelector(
      `.group-item-value[data-group="savingThrows"][data-key="${ability.key}"]`,
    );
    if (valueNode) {
      const total =
        abilityModifier(Number(state.abilities[ability.key] || 0)) +
        (state.proficiencies.savingThrows[ability.key] ? proficiencyBonus : 0);
      valueNode.textContent = formatModifier(total);
      itemNode.dataset.proficient = String(
        Boolean(state.proficiencies.savingThrows[ability.key]),
      );
    }
  });

  skills.forEach((skill) => {
    const itemNode = document.querySelector(
      `.group-item[data-group="skills"][data-key="${skill.key}"]`,
    );
    const valueNode = document.querySelector(
      `.group-item-value[data-group="skills"][data-key="${skill.key}"]`,
    );
    if (valueNode) {
      const total =
        abilityModifier(Number(state.abilities[skill.ability] || 0)) +
        (state.proficiencies.skills[skill.key] ? proficiencyBonus : 0);
      valueNode.textContent = formatModifier(total);
      itemNode.dataset.proficient = String(
        Boolean(state.proficiencies.skills[skill.key]),
      );
    }
  });

  const passivePerceptionField = document.querySelector(
    '[data-field="passivePerception"]',
  );
  if (passivePerceptionField) {
    const perception =
      abilityModifier(Number(state.abilities.wisdom || 0)) +
      (state.proficiencies.skills.perception ? proficiencyBonus : 0);
    state.passivePerception = 10 + perception;
    passivePerceptionField.value = state.passivePerception;
  }

  refreshAttackCards();
  refreshSpellCards();
  renderTrackingResources();
  renderAdvancementChoices();
}

function openLevelUpModal() {
  const totalLevel = state.classes.reduce(
    (sum, classEntry) => sum + Number(classEntry.level || 0),
    0,
  );

  const baseProgressState = getLevelProgressState(totalLevel, state.experience);

  const progressState =
    state.levelMethod === "milestone"
      ? {
          ...baseProgressState,
          totalLevel,
          canLevelUp: totalLevel < 20,
          levelsAvailable: totalLevel < 20 ? 1 : 0,
          levelMethod: "milestone",
        }
      : {
          ...baseProgressState,
          levelMethod: "xp",
        };

  renderLevelUpModal(progressState);
  levelUpModal.hidden = false;
}

const levelUpAllowed =
  progressState.canLevelUp || progressState.levelMethod === "milestone";

function closeLevelUpModal() {
  levelUpModal.hidden = true;
  levelUpNewClassName.value = "";
  levelUpNewClassSubclass.value = "";
  levelUpNewClassPreview.innerHTML = "";
  clearLevelUpChoiceSection();
}

function renderLevelUpModal(progressState) {
  levelUpExistingList.innerHTML = "";
  clearLevelUpChoiceSection();
  if (progressState.levelMethod === "milestone") {
    levelUpModalSummary.textContent =
      progressState.totalLevel >= 20
        ? "Level 20 reached. No further level-ups apply."
        : "Milestone level up available. Choose an existing class to increase, or add a new class at level 1.";
  } else if (!levelUpAllowed) {
    const nextLevel = Math.min(20, progressState.totalLevel + 1);
    const nextThreshold = xpThresholds[Math.min(19, progressState.totalLevel)];
    const xpRemaining = Math.max(0, nextThreshold - progressState.experience);
    levelUpModalSummary.textContent =
      progressState.totalLevel >= 20
        ? "Level 20 reached. No further level-ups apply."
        : `${xpRemaining.toLocaleString()} XP needed to reach level ${nextLevel}.`;
  } else {
    levelUpModalSummary.textContent =
      progressState.levelsAvailable > 1
        ? `${progressState.levelsAvailable} levels are available from your current XP. Apply one level now.`
        : "Choose an existing class to increase, or add a new class at level 1.";
  }

  confirmAddMulticlassButton.disabled = !levelUpAllowed;

  state.classes.forEach((classEntry, index) => {
    const button = document.createElement("button");
    const currentLevel = Math.max(1, Number(classEntry.level || 1));
    const nextLevel = currentLevel + 1;
    const preview = getLevelAutomationPreview(classEntry.name, nextLevel);
    button.type = "button";
    button.className = "level-up-existing-option";
    button.disabled = !levelUpAllowed;
    const content = document.createElement("div");
    const title = document.createElement("strong");
    const levelText = document.createElement("span");
    const previewText = document.createElement("small");

    title.textContent = classEntry.name || `Class ${index + 1}`;
    levelText.textContent = `Level ${currentLevel} -> ${nextLevel}`;
    previewText.textContent = preview.summary;
    content.append(title, levelText, previewText);
    button.appendChild(content);
    button.addEventListener("click", () => {
      startLevelExistingClass(index);
    });
    levelUpExistingList.appendChild(button);
  });

  updateLevelUpNewClassPreview();
}

function canApplySingleLevelUp() {
  const totalLevel = state.classes.reduce(
    (sum, classEntry) => sum + Number(classEntry.level || 0),
    0,
  );
  return getLevelProgressState(totalLevel, state.experience).canLevelUp;
}

function startLevelExistingClass(index) {
  if (!canApplySingleLevelUp() || !state.classes[index]) {
    return;
  }

  const nextLevel = Math.max(1, Number(state.classes[index].level || 1)) + 1;
  const classRule = getClassRule(state.classes[index].name);
  if (
    showLevelSelectionIfNeeded(
      { type: "existing", index, level: nextLevel },
      state.classes[index],
      classRule,
      nextLevel,
    )
  ) {
    return;
  }

  levelExistingClass(index);
}

function levelExistingClass(index, selections = {}) {
  if (!canApplySingleLevelUp()) {
    return;
  }

  const nextLevel = Math.max(1, Number(state.classes[index].level || 1)) + 1;
  const classRule = getClassRule(state.classes[index].name);

  applyClassSelections(state.classes[index], classRule, nextLevel, selections);
  state.classes[index].level = nextLevel;
  applyClassLevelAutomation(state.classes[index], nextLevel);
  closeLevelUpModal();
  renderClasses();
  renderFeatures();
  refreshDerivedValues();
  queueSave();
}

function addMulticlassLevelFromModal() {
  if (!canApplySingleLevelUp()) {
    return;
  }

  const classBuild = buildMulticlassEntryFromModal();
  if (!classBuild) {
    return;
  }

  if (
    showLevelSelectionIfNeeded(
      { type: "multiclass", classEntry: classBuild.classEntry, level: 1 },
      classBuild.classEntry,
      classBuild.classRule,
      1,
    )
  ) {
    return;
  }

  completeAddMulticlassLevel(classBuild.classEntry);
}

function buildMulticlassEntryFromModal() {
  const name = levelUpNewClassName.value.trim();
  const subclass = levelUpNewClassSubclass.value.trim();
  if (!name) {
    levelUpNewClassName.focus();
    return null;
  }

  const classRule = getClassRule(name);
  const classEntry = normalizeClassEntry({
    name: classRule?.label || name,
    subclass,
    level: 1,
  });

  return { classEntry, classRule };
}

function completeAddMulticlassLevel(classEntry, selections = {}) {
  const classRule = getClassRule(classEntry.name);
  applyClassSelections(classEntry, classRule, 1, selections);
  state.classes.push(classEntry);
  applyClassLevelAutomation(classEntry, 1);
  closeLevelUpModal();
  renderClasses();
  renderFeatures();
  refreshDerivedValues();
  queueSave();
}

function showLevelSelectionIfNeeded(action, classEntry, classRule, level) {
  if (!classLevelNeedsSelections(classEntry, classRule, level)) {
    return false;
  }

  pendingLevelUpAction = action;
  pendingLevelUpSelections = {};
  levelUpChoiceTitle.textContent = `${classRule.label} Level ${level} Selections`;
  renderClassSelectionFields(
    levelUpChoiceFields,
    classEntry,
    classRule,
    level,
    pendingLevelUpSelections,
  );
  levelUpChoiceSection.hidden = false;

  return true;
}

function clearLevelUpChoiceSection() {
  pendingLevelUpAction = null;
  pendingLevelUpSelections = {};
  levelUpChoiceFields.innerHTML = "";
  levelUpChoiceSection.hidden = true;
}

function completePendingLevelUpAction() {
  if (!pendingLevelUpAction) {
    return;
  }

  const context = getPendingLevelUpContext(pendingLevelUpAction);
  if (!context) {
    clearLevelUpChoiceSection();
    return;
  }

  const selections = collectClassSelectionValues(
    levelUpChoiceFields,
    context.classEntry,
    context.classRule,
    context.level,
  );
  if (!selections) {
    return;
  }

  const action = pendingLevelUpAction;
  clearLevelUpChoiceSection();

  if (action.type === "existing") {
    levelExistingClass(action.index, selections);
    return;
  }

  if (action.type === "multiclass") {
    completeAddMulticlassLevel(action.classEntry, selections);
  }
}

function getPendingLevelUpContext(action) {
  if (action.type === "existing") {
    const classEntry = state.classes[action.index];
    if (!classEntry) {
      return null;
    }

    return {
      classEntry,
      classRule: getClassRule(classEntry.name),
      level: action.level,
    };
  }

  if (action.type === "multiclass") {
    return {
      classEntry: action.classEntry,
      classRule: getClassRule(action.classEntry.name),
      level: action.level,
    };
  }

  return null;
}

function updateLevelUpNewClassPreview() {
  clearLevelUpChoiceSection();
  const className = levelUpNewClassName.value.trim();
  const preview = getLevelAutomationPreview(className, 1);
  levelUpNewClassPreview.textContent = className
    ? preview.summary
    : "Choose a class to preview stored automation.";
}

function getLevelAutomationPreview(className, level) {
  const classRule = getClassRule(className);
  if (!classRule) {
    return {
      summary:
        "No local class memory found. The level can still be added manually.",
      features: [],
      hitDie: null,
    };
  }

  const features = getClassLevelFeatures(classRule, level);
  const featureNames = features.map((feature) => feature.name);
  const choices = getClassLevelChoices(classRule, level);
  const parts = [`Hit Die +1d${classRule.hitDie}`];
  if (featureNames.length) {
    parts.push(`Features: ${featureNames.join(", ")}`);
  }
  if (classRule.asiLevels?.includes(level)) {
    parts.push("ASI / Feat choice");
  }
  if (choices.length) {
    parts.push(
      `Selections: ${choices.map((choice) => choice.label).join(", ")}`,
    );
  }

  return {
    summary: parts.join(". "),
    features,
    hitDie: classRule.hitDie,
  };
}

function applyClassLevelAutomation(classEntry, level) {
  const classRule = getClassRule(classEntry.name);
  if (!classRule) {
    return;
  }

  classEntry.name = classRule.label;
  if (String(state.hitDice || "").trim()) {
    addHitDieToState(classRule.hitDie);
  } else {
    state.hitDice = formatHitDicePools(getMaxHitDicePoolsFromClasses());
    const hitDiceField = document.querySelector('[data-field="hitDice"]');
    if (hitDiceField) {
      hitDiceField.value = state.hitDice;
    }
  }
  addClassFeatureCards(classRule, level, classEntry);
}

function classLevelNeedsSelections(classEntry, classRule, level) {
  if (!classRule) {
    return false;
  }

  return getClassSelectionDefinitions(classEntry, classRule, level).length > 0;
}

function getClassSelectionDefinitions(classEntry, classRule, level) {
  const definitions = [];
  if (!classRule) {
    return definitions;
  }

  if (
    Number(classRule.subclassLevel || 0) === Number(level || 0) &&
    !String(classEntry.subclass || "").trim()
  ) {
    definitions.push({
      type: "subclass",
      key: "subclass",
      label: classRule.subclassLabel || "Subclass",
      description: `Choose the ${classRule.subclassLabel || "subclass"} for this ${classRule.label} level.`,
      options: classRule.subclasses || [],
    });
  }

  getClassLevelChoices(classRule, level).forEach((choice) => {
    if (!classEntry.selections?.[choice.key]) {
      definitions.push({
        type: "choice",
        ...choice,
      });
    }
  });

  return definitions;
}

function renderClassSelectionFields(
  container,
  classEntry,
  classRule,
  level,
  draft,
) {
  const definitions = getClassSelectionDefinitions(
    classEntry,
    classRule,
    level,
  );
  container.innerHTML = "";
  container.hidden = definitions.length === 0;

  definitions.forEach((definition) => {
    const field = document.createElement("label");
    const label = document.createElement("span");
    const description = document.createElement("p");
    field.className = "class-choice-field";
    label.textContent = definition.label;
    description.textContent =
      definition.description || "Choose one option for this level.";

    if (definition.type === "subclass" && !definition.options?.length) {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = definition.label;
      input.dataset.classChoiceKey = definition.key;
      input.value = draft[definition.key] || "";
      input.addEventListener("input", () => {
        draft[definition.key] = input.value;
      });
      field.append(label, input, description);
      container.appendChild(field);
      return;
    }

    const select = document.createElement("select");
    select.dataset.classChoiceKey = definition.key;
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = `Choose ${definition.label}`;
    select.appendChild(placeholder);

    (definition.options || []).forEach((option) => {
      const optionNode = document.createElement("option");
      optionNode.value =
        definition.type === "subclass" ? option.label : option.value;
      optionNode.textContent = option.label;
      select.appendChild(optionNode);
    });

    select.value = draft[definition.key] || "";
    const updateChoiceDescription = () => {
      const selectedOption = (definition.options || []).find(
        (option) =>
          option.value === select.value || option.label === select.value,
      );
      description.textContent =
        selectedOption?.description ||
        definition.description ||
        "Choose one option for this level.";
    };
    select.addEventListener("change", () => {
      draft[definition.key] = select.value;
      updateChoiceDescription();
    });
    updateChoiceDescription();

    field.append(label, select, description);
    container.appendChild(field);
  });
}

function collectClassSelectionValues(container, classEntry, classRule, level) {
  const definitions = getClassSelectionDefinitions(
    classEntry,
    classRule,
    level,
  );
  const values = {};

  for (const definition of definitions) {
    const field = container.querySelector(
      `[data-class-choice-key="${definition.key}"]`,
    );
    const value = String(field?.value || "").trim();

    if (!value) {
      if (field) {
        field.focus();
      }
      return null;
    }

    values[definition.key] = value;
  }

  return values;
}

function applyClassSelections(classEntry, classRule, level, selections = {}) {
  if (!classEntry || !classRule) {
    return;
  }

  classEntry.selections = {
    ...(classEntry.selections || {}),
  };

  if (selections.subclass) {
    classEntry.subclass = selections.subclass.trim();
  }

  getClassLevelChoices(classRule, level).forEach((choice) => {
    const selectedValue =
      selections[choice.key] || classEntry.selections[choice.key];
    if (selectedValue) {
      classEntry.selections[choice.key] = selectedValue;
    }
  });
}

function getClassLevelFeatures(classRule, level) {
  return (classRule?.levels?.[level] || [])
    .map((feature) => {
      if (typeof feature === "string") {
        return { name: feature, description: "" };
      }

      return {
        name: feature.name || feature.label || "",
        description: feature.description || "",
      };
    })
    .filter((feature) => feature.name);
}

function getClassLevelChoices(classRule, level) {
  const choices = classRule?.choices?.[level];
  return Array.isArray(choices) ? choices : [];
}

function getClassFeatureDescription(classRule, featureName) {
  return (
    classRule?.featureDescriptions?.[featureName] ||
    classFeatureDescriptions[featureName] ||
    ""
  );
}

function addClassFeatureCards(classRule, level, classEntry = {}) {
  const features = getClassLevelFeatures(classRule, level);
  const source = `${classRule.label} ${level}`;

  features.forEach((feature) => {
    const selectedChoice = getSelectedChoiceForFeature(
      classRule,
      level,
      feature.name,
      classEntry,
    );
    const isSubclassFeature =
      Number(classRule.subclassLevel || 0) === Number(level || 0) &&
      feature.name === (classRule.subclassLabel || "Subclass") &&
      String(classEntry.subclass || "").trim();
    const featureName = selectedChoice
      ? `${selectedChoice.choice.label}: ${selectedChoice.option.label}`
      : isSubclassFeature
        ? `${feature.name}: ${classEntry.subclass.trim()}`
        : feature.name;
    const featureNotes = selectedChoice
      ? selectedChoice.option.description ||
        getClassFeatureDescription(classRule, selectedChoice.choice.label)
      : isSubclassFeature
        ? `Your ${classRule.label} ${classRule.subclassLabel || "subclass"} selection. Add ${classEntry.subclass.trim()} details here.`
        : feature.description ||
          getClassFeatureDescription(classRule, feature.name);
    const existingFeature = state.features.find(
      (feature) =>
        feature.category === "Class Feature" &&
        feature.name === featureName &&
        feature.source === source,
    );

    if (!existingFeature) {
      state.features.push(
        normalizeFeature({
          name: featureName,
          category: "Class Feature",
          source,
          notes: featureNotes,
          collapsed: true,
        }),
      );
    } else if (!String(existingFeature.notes || "").trim() && featureNotes) {
      existingFeature.notes = featureNotes;
    }
  });
}

function getSelectedChoiceForFeature(
  classRule,
  level,
  featureName,
  classEntry,
) {
  const choices = getClassLevelChoices(classRule, level);
  const choice = choices.find(
    (entry) =>
      entry.label === featureName && classEntry.selections?.[entry.key],
  );
  if (!choice) {
    return null;
  }

  const selectedValue = classEntry.selections[choice.key];
  const option = (choice.options || []).find(
    (entry) => entry.value === selectedValue,
  );
  if (!option) {
    return null;
  }

  return { choice, option };
}

function abilityModifier(score) {
  return Math.floor((score - 10) / 2);
}

function formatModifier(value) {
  return value >= 0 ? `+${value}` : `${value}`;
}

function formatToHit(value) {
  if (value === 0) {
    return "1d20";
  }

  return value > 0 ? `1d20 + ${value}` : `1d20 - ${Math.abs(value)}`;
}

function abbreviateAbility(key) {
  return key.slice(0, 3).toUpperCase();
}

function queueSave() {
  window.clearTimeout(saveTimeout);

  saveTimeout = window.setTimeout(() => {
    persistActiveCharacterState();
    showToast("Character saved", "success");
  }, 500); // slightly longer delay = less spam
}

function persistActiveCharacterState() {
  const recordIndex = characterLibrary.findIndex(
    (entry) => entry.id === activeCharacterId,
  );
  const nextRecord = {
    id: activeCharacterId,
    state: mergeState(defaultState, state),
    updatedAt: Date.now(),
  };

  if (recordIndex === -1) {
    characterLibrary.push(nextRecord);
  } else {
    characterLibrary[recordIndex] = nextRecord;
  }

  localStorage.setItem(
    CHARACTER_LIBRARY_KEY,
    JSON.stringify({
      activeId: activeCharacterId,
      characters: characterLibrary,
    }),
  );
  renderCharacterLibraryControls();
}

function addExperience() {
  if (state.levelMethod === "milestone") {
    return;
  }

  const gain = Number(xpGainInput.value || 0);
  if (gain <= 0) {
    xpGainInput.focus();
    return;
  }

  const currentXp = Number(state.experience || 0);
  state.experience = currentXp + gain;

  const experienceField = document.querySelector('[data-field="experience"]');
  if (experienceField) {
    experienceField.value = state.experience;
  }

  xpGainInput.value = "";
  refreshDerivedValues();
  queueSave();
}

function getCharacterDisplayName(characterState, index) {
  const explicitName = String(characterState.name || "").trim();
  if (explicitName) {
    return explicitName;
  }

  const classSummary = buildClassSummary(
    (characterState.classes || []).map(normalizeClassEntry),
  );
  if (classSummary) {
    return classSummary;
  }

  return `Character ${index + 1}`;
}

function renderCharacterLibraryControls() {
  characterSelect.innerHTML = "";

  characterLibrary.forEach((record, index) => {
    const option = document.createElement("option");
    option.value = record.id;
    option.textContent = getCharacterDisplayName(record.state, index);
    option.selected = record.id === activeCharacterId;
    characterSelect.appendChild(option);
  });

  deleteCharacterButton.disabled = characterLibrary.length <= 1;
}

function switchCharacter(characterId) {
  if (!characterId || characterId === activeCharacterId) {
    renderCharacterLibraryControls();
    return;
  }

  persistActiveCharacterState();
  activeCharacterId = characterId;
  state = mergeState(defaultState, getActiveCharacterRecord().state);
  syncFieldsFromState();
  refreshDerivedValues();
  renderCharacterLibraryControls();
  saveStatus.textContent = "Loaded locally";
}

function openCreateCharacterModal() {
  resetCreateCharacterForm();
  createCharacterModal.hidden = false;
}

function closeCreateCharacterModal() {
  createCharacterModal.hidden = true;
  createCharacterChoiceFields.innerHTML = "";
  createCharacterChoiceFields.hidden = true;
}

function resetCreateCharacterForm() {
  if (createCharacterLevelMethod) {
    createCharacterLevelMethod.value = "xp";
  }
  createCharacterSelections = {};
  createCharacterName.value = "";
  createCharacterClass.value = "";
  createCharacterBackground.value = "";
  createCharacterSpecies.value = "";
  createCharacterSubrace.value = "";
  createCharacterAlignment.value = "";
  populateCreateCharacterSubraceOptions();
  updateCreateCharacterPreview();
}

function updateCreateCharacterPreview() {
  const className = createCharacterClass.value;
  const preview = getLevelAutomationPreview(className, 1);
  const classRule = getClassRule(className);
  const classEntry = normalizeClassEntry({
    name: classRule?.label || className,
    level: 1,
  });

  createCharacterClassPreview.textContent = className
    ? preview.summary
    : "Choose a class to preview level 1 features.";
  renderClassSelectionFields(
    createCharacterChoiceFields,
    classEntry,
    classRule,
    1,
    createCharacterSelections,
  );
}

function createCharacterFromModal() {
  const className = createCharacterClass.value;
  if (!className) {
    createCharacterClass.focus();
    return;
  }

  persistActiveCharacterState();
  const classRule = getClassRule(className);
  const classEntry = normalizeClassEntry({
    name: classRule?.label || className,
    level: 1,
  });

  const selections = collectClassSelectionValues(
    createCharacterChoiceFields,
    classEntry,
    classRule,
    1,
  );
  if (!selections) {
    return;
  }
  applyClassSelections(classEntry, classRule, 1, selections);

  const nextState = mergeState(defaultState, {
    ...structuredClone(defaultState),
    name: createCharacterName.value.trim(),
    background: createCharacterBackground.value.trim(),
    species: createCharacterSpecies.value.trim(),
    subrace: createCharacterSubrace.value,
    alignment: createCharacterAlignment.value.trim(),
    levelMethod: createCharacterLevelMethod?.value || "xp",
    speed:
      getDefaultSpeedForSpecies(
        createCharacterSpecies.value,
        createCharacterSubrace.value,
      ) || "",
    classes: [classEntry],
    attacks: [],
    spells: [],
    advancementChoices: [],
    features: [],
    trackingResources: [],
    activeConditions: [],
    statuses: [],
    equipmentItems: [],
  });

  state = nextState;
  applyClassLevelAutomation(state.classes[0], 1);
  addCachedReferenceFeatureCards(
    state.species,
    ruleReferenceData.species,
    "Species Trait",
  );
  addCachedReferenceFeatureCards(
    state.subrace,
    ruleReferenceData.subraces,
    "Species Trait",
  );
  addCachedReferenceFeatureCards(
    state.background,
    ruleReferenceData.backgrounds,
    "Background Feature",
  );

  const newRecord = normalizeCharacterRecord({
    state,
  });
  characterLibrary.push(newRecord);
  activeCharacterId = newRecord.id;
  state = mergeState(defaultState, newRecord.state);
  closeCreateCharacterModal();
  syncFieldsFromState();
  refreshDerivedValues();
  persistActiveCharacterState();
  characterSelect.focus();
  saveStatus.textContent = "New character created";
}

function addCachedReferenceFeatureCards(value, records, category) {
  const record = findCachedReferenceRecord(value, records);
  if (!record?.features?.length) {
    return;
  }

  record.features.forEach((feature) => {
    const source = `${record.name}${record.source ? ` (${record.source})` : ""}`;
    const exists = state.features.some(
      (existingFeature) =>
        existingFeature.category === category &&
        existingFeature.name === feature.name &&
        existingFeature.source === source,
    );

    if (!exists) {
      state.features.push(
        normalizeFeature({
          name: feature.name,
          category,
          source,
          notes: feature.notes,
          collapsed: true,
        }),
      );
    }
  });
}

function findCachedReferenceRecord(value, records) {
  const key = classRuleKey(value);
  if (!key) {
    return null;
  }

  const matches = records.filter((record) => classRuleKey(record.name) === key);
  if (!matches.length) {
    return null;
  }

  const preferredSources = ["XPHB", "PHB", "MPMM", "TCE", "XGE", "DMG"];
  for (const source of preferredSources) {
    const match = matches.find((record) => record.source === source);
    if (match) {
      return match;
    }
  }

  return matches[0];
}

function getDefaultSpeedForSpecies(speciesName, subraceName = "") {
  const subraceRecord =
    getSubraceOptionsForSpecies(speciesName).find(
      (record) => classRuleKey(record.name) === classRuleKey(subraceName),
    ) || findCachedReferenceRecord(subraceName, ruleReferenceData.subraces);
  if (subraceRecord?.speed) {
    return subraceRecord.speed;
  }

  const speciesRecord = findCachedReferenceRecord(
    speciesName,
    ruleReferenceData.species,
  );
  return speciesRecord?.speed || "";
}

function deleteActiveCharacter() {
  if (characterLibrary.length <= 1) {
    return;
  }

  const currentName = getCharacterDisplayName(
    state,
    characterLibrary.findIndex((entry) => entry.id === activeCharacterId),
  );
  const confirmed = window.confirm(`Delete ${currentName} from this device?`);
  if (!confirmed) {
    return;
  }

  const currentIndex = characterLibrary.findIndex(
    (entry) => entry.id === activeCharacterId,
  );
  characterLibrary = characterLibrary.filter(
    (entry) => entry.id !== activeCharacterId,
  );
  const fallbackRecord =
    characterLibrary[Math.max(0, currentIndex - 1)] || characterLibrary[0];
  activeCharacterId = fallbackRecord.id;
  state = mergeState(defaultState, fallbackRecord.state);
  syncFieldsFromState();
  refreshDerivedValues();
  persistActiveCharacterState();
  saveStatus.textContent = "Character deleted";
}

function adjustHitPoints(mode) {
  const amount = Number(hpAdjustInput.value || 0);
  if (amount <= 0) {
    hpAdjustInput.focus();
    return;
  }

  const currentHp = Number(state.currentHp || 0);
  const tempHp = Number(state.tempHp || 0);
  const maxHp = Number(state.maxHp || 0);
  let nextHp = currentHp;
  let nextTempHp = tempHp;

  if (mode === "damage") {
    const remainingDamage = Math.max(0, amount - tempHp);
    nextTempHp = Math.max(0, tempHp - amount);
    nextHp = Math.max(0, currentHp - remainingDamage);
  } else {
    nextHp =
      maxHp > 0 ? Math.min(maxHp, currentHp + amount) : currentHp + amount;
  }

  state.currentHp = nextHp;
  state.tempHp = nextTempHp;

  const currentHpField = document.querySelector('[data-field="currentHp"]');
  if (currentHpField) {
    currentHpField.value = state.currentHp;
  }

  const tempHpField = document.querySelector('[data-field="tempHp"]');
  if (tempHpField) {
    tempHpField.value = state.tempHp;
  }

  hpAdjustInput.value = "";
  if (mode === "damage" && Boolean(state.concentrating)) {
    openConcentrationCheckModal(amount);
  }
  queueSave();
}

function addSpellEntry() {
  state.spells.push(normalizeSpell());
  renderSpells();
  refreshDerivedValues();
  queueSave();
}

function addFeatureEntry() {
  state.features.push(
    normalizeFeature({
      category:
        activeFeatureFilter === "all" ? "Class Feature" : activeFeatureFilter,
    }),
  );
  renderFeatures();
  queueSave();
}

function addTrackingResource() {
  state.trackingResources.push(normalizeTrackingResource());
  renderTrackingResources();
  queueSave();
}

function addStatusEntry() {
  state.statuses.push(normalizeStatus());
  renderConditionsAndStatuses();
  queueSave();
}

function toggleCondition(condition) {
  if (state.activeConditions.includes(condition)) {
    state.activeConditions = state.activeConditions.filter(
      (entry) => entry !== condition,
    );
  } else {
    state.activeConditions = [...state.activeConditions, condition];
  }
  renderConditionsAndStatuses();
  queueSave();
}

function toggleConcentration() {
  state.concentrating = !Boolean(state.concentrating);
  renderConditionsAndStatuses();
  queueSave();
}

function toggleInspiration() {
  state.inspiration = state.inspiration === "Yes" ? "No" : "Yes";
  renderInspirationToggle();
  queueSave();
}

function renderInspirationToggle() {
  const inspired = state.inspiration === "Yes" || state.inspiration === true;
  inspirationToggle.textContent = inspired ? "Yes" : "No";
  inspirationToggle.setAttribute("aria-pressed", String(inspired));
}

function addEquipmentItem() {
  state.equipmentItems.push(normalizeEquipmentItem());
  renderEquipmentItems();
  queueSave();
}

function refreshAttackCards() {
  document.querySelectorAll(".attack-card").forEach((card) => {
    const index = Number(card.dataset.attackIndex);
    const attack = normalizeAttack(state.attacks[index]);
    const attackAbilityMod = getAttackAbilityModifier(attack.ability);
    const damageAbilityMod = getAttackAbilityModifier(attack.ability);
    const proficiencyValue = attack.proficient
      ? Number(state.proficiencyBonus || 0)
      : 0;
    const toHit =
      attackAbilityMod +
      proficiencyValue +
      evaluateModifierExpression(attack.attackBonus);
    const damageBonus =
      damageAbilityMod + evaluateModifierExpression(attack.damageBonus);
    const damage = formatDamage(
      attack.damageDice,
      damageBonus,
      attack.damageType,
    );
    const versatileDamage = attack.versatile
      ? formatDamage(
          attack.versatileDice || attack.damageDice,
          damageBonus,
          attack.damageType,
        )
      : "";
    const summary = attack.versatile
      ? `${attack.name || "Attack"} ${formatModifier(toHit)} to hit, ${damage} (1H) or ${versatileDamage} (2H)`
      : `${attack.name || "Attack"} ${formatModifier(toHit)} to hit, ${damage}`;

    state.attacks[index] = attack;
    card.querySelector(".attack-title").textContent =
      attack.name || `Attack ${index + 1}`;
    card.querySelector(".attack-summary").textContent =
      attack.range || "Weapon, spell, or action";
    const toHitText = formatToHit(toHit);
    const damageText = attack.versatile
      ? `${damage} (1H) / ${versatileDamage} (2H)`
      : damage;
    card.querySelector('[data-attack-output="toHit"]').textContent = toHitText;
    card.querySelector('[data-attack-output="damage"]').textContent =
      damageText;
    card.querySelector('[data-roll-type="toHit"]').dataset.rollFormula =
      JSON.stringify([{ label: "To Hit", formula: toHitText }]);
    card.querySelector('[data-roll-type="damage"]').dataset.rollFormula =
      JSON.stringify(
        attack.versatile
          ? [
              { label: "1H", formula: damage },
              { label: "2H", formula: versatileDamage },
            ]
          : [{ label: "Damage", formula: damage }],
      );
    card.querySelector('[data-attack-roll-result="toHit"]').textContent =
      "Tap to roll";
    card.querySelector('[data-attack-roll-result="damage"]').textContent =
      "Tap to roll";
  });
}

function refreshSpellCards() {
  document.querySelectorAll(".spell-card").forEach((card) => {
    const index = Number(card.dataset.spellIndex);
    const spell = normalizeSpell(state.spells[index]);
    const modifier = getAttackAbilityModifier(spell.ability);
    const spellAttack = modifier + Number(state.proficiencyBonus || 0);
    const saveDc = 8 + Number(state.proficiencyBonus || 0) + modifier;

    state.spells[index] = spell;
    card.dataset.castType = spell.castType;
    card.querySelector(".spell-title").textContent =
      spell.name || `Spell ${index + 1}`;
    card.querySelector(".spell-summary").textContent = buildSpellSummary(spell);
    card.querySelector('[data-spell-output="attack"]').textContent =
      spell.castType === "utility" ? "N/A" : formatModifier(spellAttack);
    card.querySelector('[data-spell-output="save"]').textContent =
      spell.castType === "attack" ? "N/A" : String(saveDc);
    card.querySelector('[data-spell-output="effect"]').textContent =
      spell.effect || "N/A";
    card.querySelector('[data-spell-roll-type="attack"]').dataset.rollFormula =
      JSON.stringify([
        { label: "Spell Attack", formula: formatToHit(spellAttack) },
      ]);
    card.querySelector('[data-spell-roll-type="effect"]').dataset.rollFormula =
      JSON.stringify([{ label: "Effect", formula: spell.effect || "" }]);
    card.querySelector('[data-spell-roll-result="attack"]').textContent =
      spell.castType === "utility" ? "No roll" : "Tap to roll";
    card.querySelector('[data-spell-roll-result="effect"]').textContent =
      spell.effect ? "Tap to roll" : "No roll";
  });
}

function formatDamage(dice, bonus, damageType) {
  const trimmedDice = resolveFormulaTokens((dice || "1d6").trim()) || "1d6";
  const bonusPart =
    bonus === 0 ? "" : bonus > 0 ? ` + ${bonus}` : ` - ${Math.abs(bonus)}`;
  const typePart = damageType ? ` ${damageType}` : "";
  return `${trimmedDice}${bonusPart}${typePart}`.trim();
}

function normalizeAttack(attack = {}) {
  return {
    name: attack.name || "",
    range: attack.range || "",
    ability:
      attack.ability ||
      attack.attackAbility ||
      attack.damageAbility ||
      "strength",
    damageDice: attack.damageDice || "",
    damageType: String(attack.damageType || "bludgeoning").toLowerCase(),
    versatileDice: attack.versatileDice || "",
    attackBonus: String(attack.attackBonus ?? ""),
    damageBonus: String(attack.damageBonus ?? ""),
    proficient: Boolean(attack.proficient),
    versatile: Boolean(attack.versatile),
    collapsed: Boolean(attack.collapsed),
    notes: attack.notes || "",
  };
}

function normalizeSpell(spell = {}) {
  return {
    name: spell.name || "",
    level: spell.level || "Cantrip",
    school: spell.school || "Evocation",
    ability: spell.ability || "none",
    castType: spell.castType || "attack",
    saveAbility: spell.saveAbility || "none",
    castingTime: spell.castingTime || "",
    range: spell.range || "",
    duration: spell.duration || "",
    components: spell.components || "",
    damageType: String(spell.damageType || "force").toLowerCase(),
    effect: spell.effect || "",
    concentration: Boolean(spell.concentration),
    ritual: Boolean(spell.ritual),
    collapsed: Boolean(spell.collapsed),
    notes: spell.notes || "",
  };
}

function normalizeFeature(feature = {}) {
  return {
    name: feature.name || "",
    category: feature.category || "Class Feature",
    source: feature.source || "",
    notes: feature.notes || "",
    collapsed: Boolean(feature.collapsed),
  };
}

function normalizeTrackingResource(resource = {}) {
  const normalized = {
    id: resource.id || generateId(),
    name: resource.name || "",
    totalSource: resource.totalSource || "number",
    totalValue: Math.max(0, Number(resource.totalValue ?? resource.total ?? 1)),
    value: Math.max(0, Number(resource.value ?? 1)),
    restoreOn: resource.restoreOn || "longRest",
    collapsed: resource.collapsed !== false,
  };

  const maxValue = getTrackingResourceMax(normalized);
  normalized.value = Math.max(0, Math.min(normalized.value, maxValue));
  return normalized;
}

function normalizeStatus(status = {}) {
  return {
    id: status.id || generateId(),
    name: status.name || "",
    duration: status.duration || "",
    notes: status.notes || "",
  };
}

function normalizeEquipmentItem(item = {}) {
  return {
    name: item.name || "",
    type: item.type || "gear",
    quantity: Math.max(1, Number(item.quantity || 1)),
    equipped: Boolean(item.equipped),
    ability: item.ability || "strength",
    damageType: String(item.damageType || "bludgeoning").toLowerCase(),
    damageDice: item.damageDice || "",
    range: item.range || "",
    proficient: item.proficient !== false,
    versatile: Boolean(item.versatile),
    versatileDice: item.versatileDice || "",
    armorCategory: item.armorCategory || "light",
    armorBase: Number(item.armorBase || 10),
    shieldBonus: Number(item.shieldBonus || 2),
    notes: item.notes || "",
    collapsed: Boolean(item.collapsed),
  };
}

function normalizeAdvancementChoice(choice = {}) {
  return {
    id: choice.id || generateId(),
    classId: choice.classId || "",
    className: choice.className || "",
    classLevel: Number(choice.classLevel || 0),
    type: choice.type || "",
    status: choice.status || "pending",
    asiMode: choice.asiMode || "plus2",
    asiAbilityOne: choice.asiAbilityOne || "strength",
    asiAbilityTwo: choice.asiAbilityTwo || "dexterity",
    featName: choice.featName || "",
    featSource: choice.featSource || "",
    featNotes: choice.featNotes || "",
  };
}

function parseLegacyFeatures(value) {
  if (!value) {
    return [];
  }

  if (typeof value === "string" && value.trim()) {
    return [
      normalizeFeature({
        name: "Features & Traits",
        category: "Other",
        notes: value.trim(),
      }),
    ];
  }

  return [];
}

function syncAdvancementChoices() {
  const existingChoices = state.advancementChoices.map(
    normalizeAdvancementChoice,
  );
  const validKeys = new Set();

  state.classes.forEach((classEntry) => {
    getAsiEligibleLevels(classEntry).forEach((level) => {
      const key = `${classEntry.id}:${level}`;
      validKeys.add(key);
      const exists = existingChoices.some(
        (choice) =>
          choice.classId === classEntry.id && choice.classLevel === level,
      );
      if (!exists) {
        existingChoices.push(
          normalizeAdvancementChoice({
            classId: classEntry.id,
            className: classEntry.name || "Class",
            classLevel: level,
          }),
        );
      }
    });
  });

  existingChoices.forEach((choice) => {
    const key = `${choice.classId}:${choice.classLevel}`;
    if (!validKeys.has(key) && choice.status === "resolved") {
      revertAdvancementChoice(choice);
    }
  });

  state.advancementChoices = existingChoices.filter((choice) =>
    validKeys.has(`${choice.classId}:${choice.classLevel}`),
  );
}

function getAsiEligibleLevels(classEntry) {
  const classRule = getClassRule(classEntry.name);
  const asiLevels = classRule?.asiLevels || standardAsiLevels;
  const eligible = new Set(
    asiLevels.filter((level) => level <= Number(classEntry.level || 0)),
  );
  return [...eligible].sort((a, b) => a - b);
}

function resolveAsiChoice(choice) {
  const firstAbility = choice.asiAbilityOne;
  const secondAbility = choice.asiAbilityTwo;

  if (!firstAbility || firstAbility === "none") {
    return;
  }

  if (choice.asiMode === "split") {
    if (
      !secondAbility ||
      secondAbility === "none" ||
      secondAbility === firstAbility
    ) {
      return;
    }
    state.abilities[firstAbility] =
      Number(state.abilities[firstAbility] || 0) + 1;
    state.abilities[secondAbility] =
      Number(state.abilities[secondAbility] || 0) + 1;
  } else {
    state.abilities[firstAbility] =
      Number(state.abilities[firstAbility] || 0) + 2;
  }

  choice.status = "resolved";
  choice.type = "asi";
  refreshDerivedValues();
  queueSave();
}

function resolveFeatChoice(choice) {
  if (!String(choice.featName || "").trim()) {
    return;
  }

  state.features.push(
    normalizeFeature({
      name: choice.featName.trim(),
      category: "Feat",
      source:
        choice.featSource ||
        `${choice.className || "Class"} Level ${choice.classLevel}`,
      notes: choice.featNotes || "",
      collapsed: true,
    }),
  );
  choice.status = "resolved";
  choice.type = "feat";
  renderFeatures();
  refreshDerivedValues();
  queueSave();
}

function revertAdvancementChoice(choice) {
  if (choice.type !== "asi") {
    return;
  }

  if (choice.asiMode === "split") {
    if (choice.asiAbilityOne && choice.asiAbilityOne !== "none") {
      state.abilities[choice.asiAbilityOne] =
        Number(state.abilities[choice.asiAbilityOne] || 0) - 1;
    }
    if (choice.asiAbilityTwo && choice.asiAbilityTwo !== "none") {
      state.abilities[choice.asiAbilityTwo] =
        Number(state.abilities[choice.asiAbilityTwo] || 0) - 1;
    }
    return;
  }

  if (choice.asiAbilityOne && choice.asiAbilityOne !== "none") {
    state.abilities[choice.asiAbilityOne] =
      Number(state.abilities[choice.asiAbilityOne] || 0) - 2;
  }
}

function describeAdvancementChoice(choice) {
  if (choice.status !== "resolved") {
    return "Choose Ability Score Improvement or Feat.";
  }

  if (choice.type === "asi") {
    if (choice.asiMode === "split") {
      return `ASI applied: +1 ${labelForAbility(choice.asiAbilityOne)}, +1 ${labelForAbility(choice.asiAbilityTwo)}.`;
    }
    return `ASI applied: +2 ${labelForAbility(choice.asiAbilityOne)}.`;
  }

  if (choice.type === "feat") {
    return choice.featSource
      ? `Feat chosen: ${choice.featName} (${choice.featSource}).`
      : `Feat chosen: ${choice.featName}.`;
  }

  return "Choice resolved.";
}

function labelForAbility(abilityKey) {
  return (
    abilities.find((ability) => ability.key === abilityKey)?.label || abilityKey
  );
}

function openAbilityModal() {
  initializeAbilityModalDrafts();
  renderAbilityModal();
  abilityModal.hidden = false;
}

function closeAbilityModal() {
  abilityModal.hidden = true;
}

function closeRollModal() {
  rollModal.hidden = true;
  clearRollFeedback(rollModalResult);
}

function openDiceModal() {
  diceModal.hidden = false;
}

function closeDiceModal() {
  diceModal.hidden = true;
  clearRollFeedback(diceModalResult);
}

function openShortRestModal() {
  clearRollFeedback(shortRestResult);
  refreshShortRestModal();
  shortRestModal.hidden = false;
}

function closeShortRestModal() {
  shortRestModal.hidden = true;
  clearRollFeedback(shortRestResult);
}

function openLongRestModal() {
  clearRollFeedback(longRestResult);
  const currentPools = parseHitDicePools(state.hitDice);
  const maxPools = getMaxHitDicePoolsFromClasses();
  const totalLevel = state.classes.reduce(
    (sum, classEntry) => sum + Number(classEntry.level || 0),
    0,
  );
  const spentHitDice = maxPools.reduce((sum, maxPool) => {
    const current =
      currentPools.find((pool) => pool.sides === maxPool.sides)?.count || 0;
    return sum + Math.max(0, maxPool.count - current);
  }, 0);
  const regainedHitDice = maxPools.length
    ? Math.max(
        0,
        Math.min(Math.max(1, Math.floor(totalLevel / 2)), spentHitDice),
      )
    : 0;
  longRestSummaryTotal.textContent = "Ready";
  longRestSummaryText.textContent =
    "Restore hit points, recover hit dice, and refresh matching resources.";
  longRestDetail.textContent = maxPools.length
    ? `You will regain up to ${regainedHitDice} hit dice based on total level.`
    : "Use known classes in the level-up assistant to automate hit-die recovery.";
  longRestModal.hidden = false;
}

function closeLongRestModal() {
  longRestModal.hidden = true;
  clearRollFeedback(longRestResult);
}

function openSpellImportModal() {
  populateSpellImportSelect();
  updateSpellImportPreview();
  spellImportModal.hidden = false;
}

function closeSpellImportModal() {
  spellImportModal.hidden = true;
}

function openItemImportModal() {
  populateItemImportSelect();
  updateItemImportPreview();
  itemImportModal.hidden = false;
}

function closeItemImportModal() {
  itemImportModal.hidden = true;
}

function populateSpellImportSelect() {
  spellImportSelect.innerHTML = "";
  const spells = ruleReferenceData.spells || [];
  if (!spells.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No cached spells";
    spellImportSelect.appendChild(option);
    confirmSpellImportButton.disabled = true;
    return;
  }

  spells.forEach((spell) => {
    const option = document.createElement("option");
    option.value = spell.id;
    option.textContent = `${spell.name} (${spell.level}${spell.source ? `, ${spell.source}` : ""})`;
    spellImportSelect.appendChild(option);
  });
  confirmSpellImportButton.disabled = false;
}

function populateItemImportSelect() {
  itemImportSelect.innerHTML = "";
  const items = ruleReferenceData.items || [];
  if (!items.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No cached items";
    itemImportSelect.appendChild(option);
    confirmItemImportButton.disabled = true;
    return;
  }

  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = `${item.name}${item.source ? ` (${item.source})` : ""}`;
    itemImportSelect.appendChild(option);
  });
  confirmItemImportButton.disabled = false;
}

function updateSpellImportPreview() {
  const spell = findRuleRecordById(
    ruleReferenceData.spells,
    spellImportSelect.value,
  );
  spellImportPreview.textContent = spell
    ? `${spell.level} ${spell.school}. ${spell.castingTime || "Cast time varies"}. ${spell.range || "Range varies"}.`
    : "Import 5etools rules first to use cached spell data.";
}

function updateItemImportPreview() {
  const item = findRuleRecordById(
    ruleReferenceData.items,
    itemImportSelect.value,
  );
  itemImportPreview.textContent = item
    ? `${item.type.charAt(0).toUpperCase() + item.type.slice(1)}${item.damageDice ? `, ${item.damageDice} ${item.damageType}` : ""}${item.armorBase && item.type === "armor" ? `, AC ${item.armorBase}` : ""}.`
    : "Import 5etools rules first to use cached item data.";
}

function importSelectedSpell() {
  const spell = findRuleRecordById(
    ruleReferenceData.spells,
    spellImportSelect.value,
  );
  if (!spell) {
    return;
  }

  state.spells.push(
    normalizeSpell({
      ...spell,
      ability: getDefaultSpellcastingAbility(),
      collapsed: true,
    }),
  );
  closeSpellImportModal();
  renderSpells();
  refreshDerivedValues();
  queueSave();
}

function importSelectedItem() {
  const item = findRuleRecordById(
    ruleReferenceData.items,
    itemImportSelect.value,
  );
  if (!item) {
    return;
  }

  state.equipmentItems.push(
    normalizeEquipmentItem({
      ...item,
      collapsed: true,
    }),
  );
  closeItemImportModal();
  renderEquipmentItems();
  refreshDerivedValues();
  queueSave();
}

function findRuleRecordById(records = [], id) {
  return records.find((record) => record.id === id) || null;
}

function getDefaultSpellcastingAbility() {
  const classAbilityMap = {
    bard: "charisma",
    cleric: "wisdom",
    druid: "wisdom",
    paladin: "charisma",
    ranger: "wisdom",
    sorcerer: "charisma",
    warlock: "charisma",
    wizard: "intelligence",
    artificer: "intelligence",
  };

  const classEntry = state.classes.find(
    (entry) => classAbilityMap[classRuleKey(entry.name)],
  );
  return classEntry ? classAbilityMap[classRuleKey(classEntry.name)] : "none";
}

function saveAbilityModal() {
  const source =
    abilityModalMode === "pointbuy" ? pointBuyDraft : abilityModalDraft;
  abilities.forEach((ability) => {
    state.abilities[ability.key] = Number(source[ability.key] || 0);
  });

  closeAbilityModal();
  refreshDerivedValues();
  queueSave();
}

function initializeAbilityModalDrafts() {
  abilityModalDraft = Object.fromEntries(
    abilities.map((ability) => [
      ability.key,
      Number(state.abilities[ability.key] || 0),
    ]),
  );

  pointBuyDraft = Object.fromEntries(
    abilities.map((ability) => [
      ability.key,
      clampPointBuyValue(Number(state.abilities[ability.key] || 8)),
    ]),
  );
}

function setAbilityModalMode(mode) {
  abilityModalMode = mode;
  renderAbilityModal();
}

function syncAbilityModalModeUi() {
  abilityModeManualButton.classList.toggle(
    "is-active",
    abilityModalMode === "manual",
  );
  abilityModePointBuyButton.classList.toggle(
    "is-active",
    abilityModalMode === "pointbuy",
  );
  pointBuySummary.hidden = abilityModalMode !== "pointbuy";
}

function renderManualAbilityModal() {
  const template = document.getElementById("abilityModalTemplate");
  abilities.forEach((ability) => {
    const fragment = template.content.cloneNode(true);
    const label = fragment.querySelector(".ability-modal-label");
    const input = fragment.querySelector(".ability-modal-input");

    label.textContent = ability.label;
    input.dataset.modalAbility = ability.key;
    input.value = abilityModalDraft[ability.key];
    input.addEventListener("input", () => {
      abilityModalDraft[ability.key] = Number(input.value || 0);
    });
    abilityModalGrid.appendChild(fragment);
  });
}

function renderPointBuyModal() {
  const template = document.getElementById("abilityPointBuyTemplate");
  abilities.forEach((ability) => {
    const fragment = template.content.cloneNode(true);
    const label = fragment.querySelector(".point-buy-label");
    const value = fragment.querySelector(".point-buy-value");
    const cost = fragment.querySelector(".point-buy-cost");
    const decreaseButton = fragment.querySelector(
      '[data-point-buy-action="decrease"]',
    );
    const increaseButton = fragment.querySelector(
      '[data-point-buy-action="increase"]',
    );

    label.textContent = ability.label;
    value.textContent = pointBuyDraft[ability.key];
    cost.textContent = `${pointBuyCosts[pointBuyDraft[ability.key]]} points`;

    decreaseButton.addEventListener("click", () => {
      updatePointBuyAbility(ability.key, -1);
    });
    increaseButton.addEventListener("click", () => {
      updatePointBuyAbility(ability.key, 1);
    });

    abilityModalGrid.appendChild(fragment);
  });

  updatePointBuySummary();
}

function updatePointBuyAbility(key, delta) {
  const nextValue = clampPointBuyValue(Number(pointBuyDraft[key] || 8) + delta);
  if (nextValue === pointBuyDraft[key]) {
    return;
  }

  const nextDraft = { ...pointBuyDraft, [key]: nextValue };
  if (totalPointBuyCost(nextDraft) > 27) {
    return;
  }

  pointBuyDraft = nextDraft;
  renderAbilityModal();
}

function clampPointBuyValue(value) {
  return Math.max(8, Math.min(15, Number(value || 8)));
}

function totalPointBuyCost(draft) {
  return abilities.reduce(
    (sum, ability) =>
      sum + Number(pointBuyCosts[clampPointBuyValue(draft[ability.key])] || 0),
    0,
  );
}

function updatePointBuySummary() {
  const spent = totalPointBuyCost(pointBuyDraft);
  const remaining = 27 - spent;
  pointBuySpent.textContent = `${spent} / 27 points spent`;
  pointBuyRemaining.textContent = `${remaining} points remaining`;
}

function summarizeFeatureNotes(notes) {
  const text = String(notes || "")
    .trim()
    .replace(/\s+/g, " ");
  if (!text) {
    return "Class feature, feat benefit, or trait details";
  }

  return text.length > 72 ? `${text.slice(0, 69)}...` : text;
}

function summarizeFeature(feature) {
  const parts = [];
  if (feature.category) {
    parts.push(feature.category);
  }
  if (feature.source) {
    parts.push(feature.source);
  }

  if (parts.length) {
    return parts.join(" • ");
  }

  return summarizeFeatureNotes(feature.notes);
}

function getTrackingResourceMax(resource) {
  const totalSource = resource.totalSource || "number";

  if (totalSource === "number") {
    return Math.max(0, Number(resource.totalValue || 0));
  }

  if (totalSource === "proficiencyBonus") {
    return Math.max(0, Number(state.proficiencyBonus || 0));
  }

  if (totalSource === "characterLevel") {
    return Math.max(
      0,
      state.classes.reduce(
        (sum, classEntry) => sum + Number(classEntry.level || 0),
        0,
      ),
    );
  }

  if (totalSource === "initiative") {
    return Math.max(0, Number(state.initiative || 0));
  }

  const abilityMatch = totalSource.match(/^([a-z]+)Modifier$/);
  if (abilityMatch) {
    return Math.max(
      0,
      abilityModifier(Number(state.abilities[abilityMatch[1]] || 0)),
    );
  }

  return Math.max(0, Number(resource.totalValue || 0));
}

function formatTrackingValueDisplay(resource) {
  const maxValue = getTrackingResourceMax(resource);
  return `${Math.max(0, Number(resource.value || 0))} / ${maxValue}`;
}

function labelForTrackingTotalSource(totalSource) {
  return (
    trackingTotalOptions.find((option) => option.value === totalSource)
      ?.label || "Number"
  );
}

function labelForTrackingRestore(restoreOn) {
  return (
    trackingRestoreOptions.find((option) => option.value === restoreOn)
      ?.label || "Manual"
  );
}

function parseHitDicePool(value) {
  return parseHitDicePools(value)[0] || null;
}

function parseHitDicePools(value) {
  return String(value || "")
    .split(/\s*\+\s*/)
    .map((part) => {
      const match = part.trim().match(/^(\d+)\s*d\s*(\d+)$/i);
      if (!match) {
        return null;
      }

      return {
        count: Number(match[1]),
        sides: Number(match[2]),
      };
    })
    .filter(Boolean);
}

function formatHitDicePool(count, sides) {
  return `${Math.max(0, Number(count || 0))}d${Math.max(0, Number(sides || 0))}`;
}

function formatHitDicePools(pools) {
  return pools
    .filter(
      (pool) => Number(pool.count || 0) > 0 && Number(pool.sides || 0) > 0,
    )
    .sort((a, b) => b.sides - a.sides)
    .map((pool) => formatHitDicePool(pool.count, pool.sides))
    .join(" + ");
}

function addHitDieToState(sides) {
  const hitDieSides = Number(sides || 0);
  if (!hitDieSides) {
    return;
  }

  const pools = parseHitDicePools(state.hitDice);
  const existingPool = pools.find((pool) => pool.sides === hitDieSides);
  if (existingPool) {
    existingPool.count += 1;
  } else {
    pools.push({ count: 1, sides: hitDieSides });
  }

  state.hitDice = formatHitDicePools(pools);
  const hitDiceField = document.querySelector('[data-field="hitDice"]');
  if (hitDiceField) {
    hitDiceField.value = state.hitDice;
  }
}

function chooseSpendableHitDicePool(pools) {
  return (
    pools
      .map((pool, index) => ({ ...pool, index }))
      .filter((pool) => pool.count > 0)
      .sort((a, b) => b.sides - a.sides)[0] || null
  );
}

function getMaxHitDicePoolsFromClasses() {
  const poolMap = new Map();
  state.classes.forEach((classEntry) => {
    const classRule = getClassRule(classEntry.name);
    const sides = Number(classRule?.hitDie || 0);
    const level = Math.max(0, Number(classEntry.level || 0));
    if (!sides || !level) {
      return;
    }
    poolMap.set(sides, Number(poolMap.get(sides) || 0) + level);
  });

  return [...poolMap.entries()].map(([sides, count]) => ({ sides, count }));
}

function restoreHitDicePools(currentPools, maxPools, regainCount) {
  const currentMap = new Map(
    currentPools.map((pool) => [pool.sides, pool.count]),
  );
  let remaining = Math.max(0, Number(regainCount || 0));

  maxPools
    .slice()
    .sort((a, b) => b.sides - a.sides)
    .forEach((maxPool) => {
      if (remaining <= 0) {
        return;
      }

      const current = Math.max(0, Number(currentMap.get(maxPool.sides) || 0));
      const missing = Math.max(0, maxPool.count - current);
      const restored = Math.min(missing, remaining);
      currentMap.set(maxPool.sides, current + restored);
      remaining -= restored;
    });

  return maxPools.map((maxPool) => ({
    sides: maxPool.sides,
    count: Math.min(
      maxPool.count,
      Math.max(0, Number(currentMap.get(maxPool.sides) || 0)),
    ),
  }));
}

function restoreTrackingResources(restType) {
  state.trackingResources = state.trackingResources.map((resource) => {
    const normalized = normalizeTrackingResource(resource);
    const shouldRestore =
      restType === "longRest"
        ? normalized.restoreOn === "shortRest" ||
          normalized.restoreOn === "longRest"
        : normalized.restoreOn === "shortRest";

    if (!shouldRestore) {
      return normalized;
    }

    return {
      ...normalized,
      value: getTrackingResourceMax(normalized),
    };
  });
}

function refreshShortRestModal() {
  const hitDicePools = parseHitDicePools(state.hitDice);
  const hitDicePool = chooseSpendableHitDicePool(hitDicePools);
  const conModifier = abilityModifier(
    Number(state.abilities.constitution || 0),
  );
  clearRollFeedback(shortRestResult);

  shortRestHitDiceDisplay.textContent = hitDicePools.length
    ? formatHitDicePools(hitDicePools)
    : "Set Hit Dice";
  shortRestConDisplay.textContent = formatModifier(conModifier);

  if (!hitDicePool) {
    shortRestHealTotal.textContent = "-";
    shortRestHealSummary.textContent = "Spend hit dice to heal.";
    shortRestHealDetail.textContent =
      "Use a single pool like 5d10 in Hit Dice to automate short-rest healing.";
    return;
  }

  shortRestHealTotal.textContent = "-";
  shortRestHealSummary.textContent = `Spend 1d${hitDicePool.sides} + ${formatModifier(conModifier)} to heal.`;
  shortRestHealDetail.textContent =
    "When you complete the rest, short-rest resources will restore automatically.";
}

function spendShortRestHitDie() {
  const hitDicePools = parseHitDicePools(state.hitDice);
  const hitDicePool = chooseSpendableHitDicePool(hitDicePools);
  if (!hitDicePool || hitDicePool.count <= 0) {
    shortRestHealTotal.textContent = "0";
    shortRestHealSummary.textContent = "No hit dice available.";
    shortRestHealDetail.textContent =
      "Level up with known classes or set Hit Dice manually to automate short-rest healing.";
    return;
  }

  const conModifier = abilityModifier(
    Number(state.abilities.constitution || 0),
  );
  const rolled = rollDiceExpression(`1d${hitDicePool.sides}`);
  if (!rolled) {
    return;
  }

  const healAmount = Math.max(0, rolled.total + conModifier);
  const currentHp = Number(state.currentHp || 0);
  const maxHp = Number(state.maxHp || 0);
  const nextHp =
    maxHp > 0
      ? Math.min(maxHp, currentHp + healAmount)
      : currentHp + healAmount;

  hitDicePools[hitDicePool.index].count -= 1;
  state.hitDice = formatHitDicePools(hitDicePools);
  state.currentHp = nextHp;
  syncFieldsFromState();
  refreshDerivedValues();
  refreshShortRestModal();
  queueSave();

  shortRestHealTotal.textContent = String(healAmount);
  shortRestHealSummary.textContent = `1d${hitDicePool.sides} rolled ${rolled.total}${conModifier === 0 ? "" : ` ${conModifier > 0 ? "+" : "-"} ${Math.abs(conModifier)}`}.`;
  shortRestHealDetail.textContent = `Current HP is now ${nextHp}${maxHp > 0 ? ` / ${maxHp}` : ""}.`;
}

function completeShortRest() {
  restoreTrackingResources("shortRest");
  refreshDerivedValues();
  queueSave();
  closeShortRestModal();
}

function takeLongRest() {
  const maxHp = Number(state.maxHp || 0);
  const currentPools = parseHitDicePools(state.hitDice);
  const maxPools = getMaxHitDicePoolsFromClasses();
  const totalLevel = state.classes.reduce(
    (sum, classEntry) => sum + Number(classEntry.level || 0),
    0,
  );

  if (maxHp > 0) {
    state.currentHp = maxHp;
  }
  state.tempHp = 0;
  state.concentrating = false;

  if (maxPools.length) {
    const regainCap = Math.max(1, Math.floor(totalLevel / 2));
    const spentDice = maxPools.reduce((sum, maxPool) => {
      const current =
        currentPools.find((pool) => pool.sides === maxPool.sides)?.count || 0;
      return sum + Math.max(0, maxPool.count - current);
    }, 0);
    const regained = Math.min(regainCap, spentDice);
    state.hitDice = formatHitDicePools(
      restoreHitDicePools(currentPools, maxPools, regained),
    );
  }

  restoreTrackingResources("longRest");
  syncFieldsFromState();
  refreshDerivedValues();
  queueSave();

  longRestSummaryTotal.textContent = "Done";
  longRestSummaryText.textContent =
    maxHp > 0 ? `Hit points restored to ${maxHp}.` : "Long rest applied.";
  longRestDetail.textContent = maxPools.length
    ? `Hit dice are now ${state.hitDice}. Matching resources were restored.`
    : "Matching resources were restored.";

  window.setTimeout(() => {
    closeLongRestModal();
  }, 900);
}

function summarizeTrackingResource(resource) {
  const maxValue = getTrackingResourceMax(resource);
  const sourceLabel =
    resource.totalSource === "number"
      ? `${maxValue} total`
      : `${sourceLabelForSummary(resource.totalSource, maxValue)}`;
  return `${sourceLabel} • Restores on ${labelForTrackingRestore(resource.restoreOn)}`;
}

function sourceLabelForSummary(totalSource, maxValue) {
  return `${maxValue} from ${labelForTrackingTotalSource(totalSource)}`;
}

function summarizeEquipmentItem(item) {
  const parts = [];
  if (item.type) {
    parts.push(item.type.charAt(0).toUpperCase() + item.type.slice(1));
  }
  if (item.equipped) {
    parts.push("Equipped");
  }
  if (item.type === "armor") {
    parts.push(`AC ${item.armorBase}`);
  }
  if (item.type === "shield") {
    parts.push(`+${item.shieldBonus} AC`);
  }
  return parts.join(" • ") || "Equipment item";
}

function generateId() {
  return `id-${Math.random().toString(36).slice(2, 10)}`;
}

function buildSpellSummary(spell) {
  const parts = [spell.level, spell.school];
  if (spell.range) {
    parts.push(spell.range);
  }
  if (spell.duration) {
    parts.push(spell.duration);
  }
  return parts.filter(Boolean).join(" • ");
}

function syncAttackEditorHeight(card) {
  const editor = card.querySelector(".attack-editor");
  if (!editor) {
    return;
  }

  if (card.dataset.collapsed === "true") {
    editor.style.maxHeight = `${editor.scrollHeight}px`;
    window.requestAnimationFrame(() => {
      editor.style.maxHeight = "0px";
    });
    return;
  }

  editor.style.maxHeight = `${editor.scrollHeight}px`;
}

function syncSpellEditorHeight(card) {
  const editor = card.querySelector(".spell-editor");
  if (!editor) {
    return;
  }

  if (card.dataset.collapsed === "true") {
    editor.style.maxHeight = `${editor.scrollHeight}px`;
    window.requestAnimationFrame(() => {
      editor.style.maxHeight = "0px";
    });
    return;
  }

  editor.style.maxHeight = `${editor.scrollHeight}px`;
}

function syncFeatureEditorHeight(card) {
  const editor = card.querySelector(".feature-editor");
  if (!editor) {
    return;
  }

  if (card.dataset.collapsed === "true") {
    editor.style.maxHeight = `${editor.scrollHeight}px`;
    window.requestAnimationFrame(() => {
      editor.style.maxHeight = "0px";
    });
    return;
  }

  editor.style.maxHeight = `${editor.scrollHeight}px`;
}

function syncEquipmentEditorHeight(card) {
  const editor = card.querySelector(".equipment-editor");
  if (!editor) {
    return;
  }

  if (card.dataset.collapsed === "true") {
    editor.style.maxHeight = `${editor.scrollHeight}px`;
    window.requestAnimationFrame(() => {
      editor.style.maxHeight = "0px";
    });
    return;
  }

  editor.style.maxHeight = `${editor.scrollHeight}px`;
}

function syncTrackingEditorHeight(card) {
  const editor = card.querySelector(".tracking-editor");
  if (!editor) {
    return;
  }

  if (card.dataset.collapsed === "true") {
    editor.style.maxHeight = `${editor.scrollHeight}px`;
    window.requestAnimationFrame(() => {
      editor.style.maxHeight = "0px";
    });
    return;
  }

  editor.style.maxHeight = `${editor.scrollHeight}px`;
}

function adjustTrackingResourceValue(index, delta) {
  const resource = normalizeTrackingResource(state.trackingResources[index]);
  const maxValue = getTrackingResourceMax(resource);
  resource.value = Math.max(
    0,
    Math.min(maxValue, Number(resource.value || 0) + delta),
  );
  state.trackingResources[index] = resource;
  renderTrackingResources();
  queueSave();
}

function createAttackFromEquipmentItem(item) {
  if (item.type !== "weapon" || !String(item.name || "").trim()) {
    return;
  }

  state.attacks.push(
    normalizeAttack({
      name: item.name,
      range: item.range,
      ability: item.ability,
      damageType: item.damageType,
      damageDice: item.damageDice,
      versatile: item.versatile,
      versatileDice: item.versatileDice,
      proficient: item.proficient,
      notes: item.notes,
    }),
  );
  renderAttacks();
  refreshDerivedValues();
  queueSave();
}

function deriveArmorClass() {
  const dexMod = abilityModifier(Number(state.abilities.dexterity || 0));
  const equippedArmor = state.equipmentItems
    .filter((item) => item.type === "armor" && item.equipped)
    .sort(
      (left, right) =>
        Number(right.armorBase || 0) - Number(left.armorBase || 0),
    )[0];
  const equippedShieldBonus = state.equipmentItems
    .filter((item) => item.type === "shield" && item.equipped)
    .reduce((sum, item) => sum + Number(item.shieldBonus || 0), 0);

  let armorClass;
  if (equippedArmor) {
    const baseArmor = Number(equippedArmor.armorBase || 10);
    if (equippedArmor.armorCategory === "light") {
      armorClass = baseArmor + dexMod;
    } else if (equippedArmor.armorCategory === "medium") {
      armorClass = baseArmor + Math.min(2, dexMod);
    } else {
      armorClass = baseArmor;
    }
  } else if (equippedShieldBonus > 0) {
    armorClass = 10 + dexMod;
  }

  if (armorClass == null) {
    return null;
  }

  return armorClass + equippedShieldBonus;
}

function deriveSpeed() {
  const baseSpeed = Number(
    state.speed || getDefaultSpeedForSpecies(state.species, state.subrace) || 0,
  );
  if (!baseSpeed) {
    return "";
  }

  return baseSpeed + getSpeedBonus();
}

function getSpeedBonus() {
  const wearingArmorOrShield = state.equipmentItems.some(
    (item) =>
      item.equipped && (item.type === "armor" || item.type === "shield"),
  );
  const wearingHeavyArmor = state.equipmentItems.some(
    (item) =>
      item.equipped && item.type === "armor" && item.armorCategory === "heavy",
  );
  let bonus = 0;

  state.classes.forEach((classEntry) => {
    const classKey = classRuleKey(classEntry.name);
    const level = Number(classEntry.level || 0);

    if (classKey === "monk" && level >= 2 && !wearingArmorOrShield) {
      if (level >= 18) {
        bonus += 30;
      } else if (level >= 14) {
        bonus += 25;
      } else if (level >= 10) {
        bonus += 20;
      } else if (level >= 6) {
        bonus += 15;
      } else {
        bonus += 10;
      }
    }

    if (classKey === "barbarian" && level >= 5 && !wearingHeavyArmor) {
      bonus += 10;
    }
  });

  return bonus;
}

function getAttackAbilityModifier(abilityKey) {
  if (!abilityKey || abilityKey === "none") {
    return 0;
  }

  return abilityModifier(Number(state.abilities[abilityKey] || 0));
}

function resolveFormulaTokens(formula) {
  return String(formula || "")
    .replace(/\[([A-Z]+)\]/gi, (_, rawToken) => tokenValue(rawToken))
    .replace(/\b(STR|DEX|CON|INT|WIS|CHA|PROF|PB)\b/gi, (_, rawToken) =>
      tokenValue(rawToken),
    )
    .replace(/\s+/g, " ")
    .replace(/\s*([+-])\s*/g, " $1 ")
    .trim();
}

function tokenValue(rawToken) {
  const token = String(rawToken || "").toUpperCase();
  const mapped = attackFormulaTokens[token];
  if (!mapped) {
    return token;
  }

  if (mapped === "proficiencyBonus") {
    return String(Number(state.proficiencyBonus || 0));
  }

  return String(abilityModifier(Number(state.abilities[mapped] || 0)));
}

function evaluateModifierExpression(expression) {
  const resolved = resolveFormulaTokens(expression).replace(/\s+/g, "");
  if (!resolved) {
    return 0;
  }

  if (!/^[+-]?\d+(?:[+-]\d+)*$/.test(resolved)) {
    return 0;
  }

  return resolved
    .match(/[+-]?\d+/g)
    .reduce((sum, value) => sum + Number(value), 0);
}

function rollAttackFormula(card, rollType) {
  const pill = card.querySelector(`[data-roll-type="${rollType}"]`);
  const output = card.querySelector(`[data-attack-roll-result="${rollType}"]`);
  if (!pill || !output) {
    return;
  }

  clearRollFeedback(pill, output);

  let formulas;
  try {
    formulas = JSON.parse(pill.dataset.rollFormula || "[]");
  } catch {
    formulas = [];
  }

  if (!formulas.length) {
    output.textContent = "No roll";
    return;
  }

  const results = formulas.map((entry) => {
    const rolled = rollDiceExpression(entry.formula);
    if (!rolled) {
      return "n/a";
    }

    if (rollType === "toHit") {
      const d20Roll = rolled.diceRolls?.find(
        (die) => die.sides === 20 && die.sign === 1,
      );

      if (d20Roll?.value === 20) {
        output.classList.add("crit-hit");
        pill.classList.add("crit-hit");
        return `CRITICAL HIT! - Total: ${rolled.total}`;
      }

      if (d20Roll?.value === 1) {
        output.classList.add("crit-miss");
        pill.classList.add("crit-miss");
        return `CRITICAL MISS! - Total: ${rolled.total}`;
      }

      return `Total: ${rolled.total}`;
    }

    return `${entry.label}: ${rolled.total}`;
  });

  output.textContent = results.join(" | ");
  scheduleRollReset(output, "Tap to roll", pill);
}

function rollSpellFormula(card, rollType) {
  const pill = card.querySelector(`[data-spell-roll-type="${rollType}"]`);
  const output = card.querySelector(`[data-spell-roll-result="${rollType}"]`);
  if (!pill || !output) {
    return;
  }

  clearRollFeedback(pill, output);

  let formulas;
  try {
    formulas = JSON.parse(pill.dataset.rollFormula || "[]");
  } catch {
    formulas = [];
  }

  if (!formulas.length || !formulas[0].formula) {
    output.textContent = "No roll";
    return;
  }

  const results = formulas.map((entry) => {
    const rolled = rollDiceExpression(entry.formula);
    if (!rolled) {
      return `${entry.label}: n/a`;
    }

    return `${entry.label}: ${rolled.total}`;
  });

  output.textContent = results.join(" | ");
  scheduleRollReset(output, "Tap to roll", pill);
}

function openAbilityRollModal(label, modifier) {
  const rolled = rollDiceExpression(formatToHit(Number(modifier || 0)));
  if (!rolled) {
    return;
  }

  clearRollFeedback(rollModalResult);
  const d20Roll = rolled.diceRolls?.find(
    (die) => die.sides === 20 && die.sign === 1,
  );

  rollModalTitle.textContent = label || "Roll Result";
  rollModalTotal.textContent = String(rolled.total);
  rollModalSummary.textContent = formatToHit(Number(modifier || 0));
  rollModalSummary.className = "roll-modal-summary";
  rollModalDetail.textContent = d20Roll
    ? `Rolled ${d20Roll.value} on the d20.`
    : "Rolled the check.";

  if (d20Roll?.value === 20) {
    rollModalResult.classList.add("crit-hit");
    rollModalDetail.textContent = `Natural 20. Crit success with ${rolled.total} total.`;
  } else if (d20Roll?.value === 1) {
    rollModalResult.classList.add("crit-miss");
    rollModalDetail.textContent = `Natural 1. Crit miss with ${rolled.total} total.`;
  }

  rollModal.hidden = false;
}

function openConcentrationCheckModal(damage) {
  const dc = Math.max(10, Math.floor(Number(damage || 0) / 2));
  const modifier =
    abilityModifier(Number(state.abilities.constitution || 0)) +
    (state.proficiencies.savingThrows.constitution
      ? Number(state.proficiencyBonus || 0)
      : 0);
  const rolled = rollDiceExpression(formatToHit(modifier));
  if (!rolled) {
    return;
  }

  clearRollFeedback(rollModalResult);
  const d20Roll = rolled.diceRolls?.find(
    (die) => die.sides === 20 && die.sign === 1,
  );
  const passed = rolled.total >= dc;

  rollModalTitle.textContent = "Concentration Check";
  rollModalTotal.textContent = String(rolled.total);
  rollModalSummary.textContent = `DC ${dc} • ${formatToHit(modifier)}`;
  rollModalSummary.className = "roll-modal-summary";

  if (passed) {
    rollModalResult.classList.add("crit-hit");
    rollModalDetail.textContent = d20Roll
      ? `Rolled ${d20Roll.value} on the d20. Concentration maintained against DC ${dc}.`
      : `Concentration maintained against DC ${dc}.`;
  } else {
    rollModalResult.classList.add("crit-miss");
    state.concentrating = false;
    renderConditionsAndStatuses();
    rollModalDetail.textContent = d20Roll
      ? `Rolled ${d20Roll.value} on the d20. Concentration broken against DC ${dc}.`
      : `Failed DC ${dc}. Concentration broken.`;
  }

  rollModal.hidden = false;
}

function rollCustomDiceFormula() {
  const formula = String(diceFormulaInput.value || "").trim();
  if (!formula) {
    diceModalTotal.textContent = "-";
    diceModalSummary.textContent = "Enter a formula to roll.";
    diceModalDetail.textContent =
      "Supports tokens like [STR], [DEX], and [PROF].";
    clearRollFeedback(diceModalResult);
    return;
  }

  const resolvedFormula = resolveFormulaTokens(formula);
  const rolled = rollDiceExpression(formula);
  if (!rolled) {
    diceModalTotal.textContent = "-";
    diceModalSummary.textContent = resolvedFormula || formula;
    diceModalDetail.textContent = "That formula could not be rolled.";
    clearRollFeedback(diceModalResult);
    return;
  }

  clearRollFeedback(diceModalResult);

  const positiveD20Rolls = rolled.diceRolls.filter(
    (die) => die.sides === 20 && die.sign === 1,
  );

  diceModalTotal.textContent = String(rolled.total);
  diceModalSummary.textContent = resolvedFormula || formula;
  diceModalDetail.textContent = rolled.diceRolls.length
    ? `Rolls: ${rolled.diceRolls.map((die) => `${die.sign < 0 ? "-" : ""}d${die.sides}:${die.value}`).join(", ")}`
    : "Rolled the formula.";

  if (positiveD20Rolls.length === 1 && positiveD20Rolls[0].value === 20) {
    diceModalResult.classList.add("crit-hit");
    diceModalDetail.textContent = `Natural 20. Total: ${rolled.total}.`;
  } else if (positiveD20Rolls.length === 1 && positiveD20Rolls[0].value === 1) {
    diceModalResult.classList.add("crit-miss");
    diceModalDetail.textContent = `Natural 1. Total: ${rolled.total}.`;
  }
}

function clearRollFeedback(...nodes) {
  nodes.forEach((node) => {
    if (!node) {
      return;
    }

    node.classList.remove("crit-hit", "crit-miss");
  });
}

function scheduleRollReset(node, fallbackText, pill) {
  const existingTimer = rollResetTimers.get(node);
  if (existingTimer) {
    window.clearTimeout(existingTimer);
  }

  const timer = window.setTimeout(() => {
    node.textContent = fallbackText;
    clearRollFeedback(node, pill);
    rollResetTimers.delete(node);
  }, 10000);

  rollResetTimers.set(node, timer);
}

function rollDiceExpression(expression) {
  const cleaned = resolveFormulaTokens(expression)
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ")
    .replace(
      /\b(acid|bludgeoning|cold|fire|force|lightning|necrotic|piercing|poison|psychic|radiant|slashing|thunder)\b/g,
      " ",
    )
    .replace(/\s+/g, "")
    .trim();

  if (!cleaned) {
    return null;
  }

  const tokens = cleaned.match(/[+-]?[^+-]+/g);
  if (!tokens) {
    return null;
  }

  let total = 0;
  let rolledAnything = false;
  const diceRolls = [];

  for (const token of tokens) {
    const sign = token.startsWith("-") ? -1 : 1;
    const body = token.replace(/^[+-]/, "");
    const diceMatch = body.match(/^(\d*)d(\d+)$/);

    if (diceMatch) {
      const count = Number(diceMatch[1] || 1);
      const sides = Number(diceMatch[2]);

      for (let index = 0; index < count; index += 1) {
        const roll = Math.floor(Math.random() * sides) + 1;
        total += sign * roll;
        diceRolls.push({ sides, value: roll, sign });
      }

      rolledAnything = true;
      continue;
    }

    if (/^\d+$/.test(body)) {
      total += sign * Number(body);
      rolledAnything = true;
      continue;
    }

    return null;
  }

  return rolledAnything ? { total, diceRolls } : null;
}

function normalizeClassEntry(classEntry = {}) {
  return {
    id: classEntry.id || generateId(),
    name: classEntry.name || "",
    subclass: classEntry.subclass || "",
    level: Math.max(1, Number(classEntry.level || 1)),
    selections: {
      ...(classEntry.selections || {}),
    },
  };
}

function buildClassSummary(classes) {
  return classes
    .filter((classEntry) => classEntry.name.trim())
    .map((classEntry) => `${classEntry.name.trim()} ${classEntry.level}`)
    .join(" / ");
}

function parseLegacyClassLevel(value) {
  if (!value || typeof value !== "string") {
    return {};
  }

  const match = value.match(/^(.*?)(\d+)\s*$/);
  if (!match) {
    return { name: value.trim(), level: 1 };
  }

  return {
    name: match[1].trim(),
    level: Number(match[2]),
  };
}

function calculateProficiencyBonus(totalLevel) {
  const safeLevel = Math.max(1, Number(totalLevel || 1));
  return Math.min(6, 2 + Math.floor((safeLevel - 1) / 4));
}

function getLevelProgressState(totalLevel, experience) {
  const safeLevel = Math.max(1, Number(totalLevel || 1));
  const safeXp = Math.max(0, Number(experience || 0));
  const xpLevel = levelFromExperience(safeXp);

  return {
    totalLevel: safeLevel,
    experience: safeXp,
    xpLevel,
    levelsAvailable: Math.max(0, xpLevel - safeLevel),
    canLevelUp: xpLevel > safeLevel && safeLevel < 20,
  };
}

function levelFromExperience(experience) {
  const safeXp = Math.max(0, Number(experience || 0));
  let level = 1;

  for (let index = 0; index < xpThresholds.length; index += 1) {
    if (safeXp >= xpThresholds[index]) {
      level = index + 1;
    }
  }

  return Math.min(20, level);
}

function updateLevelStatus(totalLevel, experience) {
  const safeLevel = Math.max(1, Number(totalLevel || 1));

  if (state.levelMethod === "milestone") {
    if (safeLevel >= 20) {
      levelStatusCard.dataset.status = "max";
      levelStatusTitle.textContent = "Max Level";
      levelStatusText.textContent =
        "Level 20 reached. No further level-ups apply.";
      levelStatusCard.disabled = true;
      return;
    }

    levelStatusCard.dataset.status = "milestone";
    levelStatusTitle.textContent = "Milestone Leveling";
    levelStatusText.textContent = "Tap when your DM grants a level up.";
    levelStatusCard.disabled = false;
    return;
  }

  const {
    totalLevel: safeXpLevel,
    experience: safeXp,
    canLevelUp,
  } = getLevelProgressState(totalLevel, experience);

  if (safeXpLevel >= 20) {
    levelStatusCard.dataset.status = "max";
    levelStatusTitle.textContent = "Max Level";
    levelStatusText.textContent =
      "Level 20 reached. No further level-ups apply.";
    levelStatusCard.disabled = true;
    return;
  }

  if (canLevelUp) {
    levelStatusCard.dataset.status = "available";
    levelStatusTitle.textContent = "Level Up Available";
    levelStatusText.textContent = "Tap to level up.";
    levelStatusCard.disabled = false;
    return;
  }

  const nextThreshold = xpThresholds[Math.min(19, safeXpLevel)];
  const xpRemaining = Math.max(0, nextThreshold - safeXp);

  levelStatusCard.dataset.status = "next";
  levelStatusTitle.textContent = `${xpRemaining.toLocaleString()} XP until level ${Math.min(20, safeXpLevel + 1)}`;
  levelStatusText.textContent = `${xpRemaining.toLocaleString()} XP until level ${Math.min(20, safeXpLevel + 1)} at ${nextThreshold.toLocaleString()} XP.`;
  levelStatusCard.disabled = true;
}

function updateLevelMethodDisplay() {
  const levelMethod = state.levelMethod || "xp";
  const isMilestone = levelMethod === "milestone";

  xpCards.forEach((card) => {
    card.hidden = isMilestone;
  });

  if (levelMethodSelect) {
    levelMethodSelect.value = levelMethod;
  }

  document.body.dataset.levelMethod = levelMethod;
}

function applySampleCharacter() {
  state = mergeState(defaultState, {
    name: "Mira Thornvale",
    background: "Outlander",
    species: "Wood Elf",
    alignment: "Neutral Good",
    experience: 6500,
    classes: [
      {
        name: "Ranger",
        subclass: "Hunter",
        level: 5,
      },
    ],
    armorClass: 15,
    initiative: 4,
    speed: 35,
    weaponProficiencies: "Simple weapons, martial weapons",
    armorProficiencies: "Light armor, medium armor, shields",
    toolProficiencies: "Herbalism kit",
    languageProficiencies: "Common, Elvish, Sylvan",
    currentHp: 38,
    maxHp: 38,
    tempHp: 0,
    hitDice: "5d10",
    inspiration: "Yes",
    attacks: [
      {
        name: "Longbow",
        range: "Ranged Weapon Attack 150/600 ft.",
        ability: "dexterity",
        damageDice: "1d8",
        damageType: "piercing",
        versatileDice: "",
        attackBonus: "",
        damageBonus: "",
        proficient: true,
        versatile: false,
        notes: "Favored foe or hunter's mark can add extra damage.",
      },
      {
        name: "Shortsword",
        range: "Melee Weapon Attack 5 ft.",
        ability: "dexterity",
        damageDice: "1d6",
        damageType: "piercing",
        versatileDice: "",
        attackBonus: "",
        damageBonus: "",
        proficient: true,
        versatile: false,
        notes: "Reliable melee option when the longbow is not ideal.",
      },
    ],
    equipmentItems: [
      {
        name: "Studded Leather",
        type: "armor",
        quantity: 1,
        equipped: true,
        armorCategory: "light",
        armorBase: 12,
        notes: "Worn as primary armor.",
      },
      {
        name: "Longbow",
        type: "weapon",
        quantity: 1,
        equipped: true,
        ability: "dexterity",
        damageType: "piercing",
        damageDice: "1d8",
        range: "Ranged Weapon Attack 150/600 ft.",
        proficient: true,
      },
      {
        name: "Shortsword",
        type: "weapon",
        quantity: 2,
        equipped: true,
        ability: "dexterity",
        damageType: "piercing",
        damageDice: "1d6",
        range: "Melee Weapon Attack 5 ft.",
        proficient: true,
      },
    ],
    spells: [
      {
        name: "Hunter's Mark",
        level: "1st",
        school: "Divination",
        ability: "wisdom",
        castType: "utility",
        saveAbility: "none",
        castingTime: "1 bonus action",
        range: "90 feet",
        duration: "Concentration, up to 1 hour",
        components: "V",
        damageType: "none",
        effect: "+1d6 weapon damage",
        concentration: true,
        ritual: false,
        collapsed: false,
        notes: "Choose a target; extra damage applies on weapon hits.",
      },
    ],
    features: [
      {
        name: "Favored Enemy",
        category: "Class Feature",
        source: "Ranger 1",
        notes:
          "Undead. Advantage on Survival to track them and on Intelligence checks to recall information about them.",
      },
      {
        name: "Natural Explorer",
        category: "Class Feature",
        source: "Ranger 1",
        notes:
          "Forest. The party moves more efficiently and avoids becoming lost in favored terrain.",
      },
      {
        name: "Primeval Awareness",
        category: "Class Feature",
        source: "Ranger 3",
        notes:
          "Spend a spell slot to sense certain creature types within range.",
      },
    ],
    trackingResources: [
      {
        name: "Hunter's Sense",
        totalSource: "proficiencyBonus",
        value: 2,
        restoreOn: "longRest",
        collapsed: true,
      },
      {
        name: "Torches",
        totalSource: "number",
        totalValue: 5,
        value: 3,
        restoreOn: "manual",
        collapsed: true,
      },
    ],
    equipment:
      "Studded leather, longbow, 40 arrows, two shortswords, explorer's pack",
    notes:
      "The party owes a favor to the ferryman at Mossbridge.\nTrack the black antler cult's movements.",
    abilities: {
      strength: 10,
      dexterity: 18,
      constitution: 14,
      intelligence: 12,
      wisdom: 16,
      charisma: 11,
    },
    proficiencies: {
      savingThrows: {
        strength: true,
        dexterity: true,
      },
      skills: {
        animalHandling: true,
        athletics: true,
        insight: true,
        perception: true,
        stealth: true,
        survival: true,
      },
    },
  });

  syncFieldsFromState();
  refreshDerivedValues();
  queueSave();
}

function syncFieldsFromState() {
  document.querySelectorAll("[data-field]").forEach((field) => {
    field.value = state[field.dataset.field] ?? "";
  });
  populateDatalist(subraceOptions, getSubraceOptionsForSpecies(state.species));

  renderCharacterLibraryControls();
  renderClasses();
  renderAttacks();
  renderFeatures();
  renderTrackingResources();
  renderConditionsAndStatuses();
  renderInspirationToggle();
  renderEquipmentItems();
  renderSpells();
}

function resetSheet() {
  const confirmed = window.confirm(
    "Clear the saved character sheet on this device?",
  );
  if (!confirmed) {
    return;
  }

  state = structuredClone(defaultState);
  syncFieldsFromState();
  refreshDerivedValues();
  persistActiveCharacterState();
  saveStatus.textContent = "Reset complete";
}

function applyStoredTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY) || "light";
  setTheme(storedTheme);
}

function toggleTheme() {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
  const darkModeActive = theme === "dark";
  themeButton.textContent = darkModeActive ? "Light Mode" : "Dark Mode";
  themeButton.setAttribute("aria-pressed", String(darkModeActive));
}
