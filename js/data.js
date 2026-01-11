// Topic data - all adjectives and sentences for game
window.TOPICS = [
  {
    topic: "Describe your hometown",
    correctAdjectives: [
      { word: "crowded", ipa: "ˈkraʊdɪd", stress: "CROW-ded", chinese: "拥挤的", pinyin: "yōngjǐ de", audio: "./audio/adjectives/crowded.mp3" },
      { word: "friendly", ipa: "ˈfrendli", stress: "FREN-dly", chinese: "友好的", pinyin: "yǒuhǎo de", audio: "./audio/adjectives/friendly.mp3" },
      { word: "historical", ipa: "hɪˈstɒrɪkəl", stress: "hi-STORE-i-cal", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de", audio: "./audio/adjectives/historical.mp3" },
      { word: "beautiful", ipa: "ˈbjuːtəfəl", stress: "BEAU-ti-ful", chinese: "美丽的", pinyin: "měilì de", audio: "./audio/adjectives/beautiful.mp3" },
      { word: "famous", ipa: "ˈfeɪməs", stress: "FAY-mous", chinese: "著名的", pinyin: "zhùmíng de", audio: "./audio/adjectives/famous.mp3" }
    ],
    acceptablePool: ["crowded","historical","beautiful","friendly","famous","noisy","boring","expensive","sunny","helpful"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "lazy", chinese: "懒惰的", pinyin: "lǎnduò de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "cold", chinese: "冷的", pinyin: "lěng de" },
      { word: "strong", chinese: "强壮的", pinyin: "qiángzhuàng de" },
      { word: "sleepy", chinese: "困倦的", pinyin: "kùnjuàn de" },
      { word: "fast", chinese: "快速的", pinyin: "kuàisù de" },
      { word: "huge", chinese: "巨大的", pinyin: "jùdà de" },
      { word: "angry", chinese: "生气的", pinyin: "shēngqì de" },
      { word: "confident", chinese: "自信的", pinyin: "zìxìn de" },
      { word: "messy", chinese: "凌乱的", pinyin: "língluàn de" },
      { word: "dangerous", chinese: "危险的", pinyin: "wēixiǎn de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "dirty", chinese: "肮脏的", pinyin: "āngzāng de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" }
    ],
    sentences: [
      "My hometown is famous for its beautiful scenery.",
      "It's quite a crowded city, but it has a friendly atmosphere.",
      "There are many historical buildings that tourists love.",
      "Overall, I think it's a great place to live."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe your school",
    correctAdjectives: [
      { word: "modern", ipa: "ˈmɒdən", stress: "MOD-ern", chinese: "现代的", pinyin: "xiàndài de" },
      { word: "challenging", ipa: "ˈtʃælɪndʒɪŋ", stress: "CHAL-len-ging", chinese: "有挑战性的", pinyin: "yǒu tiǎozhàn xìng de" },
      { word: "organized", ipa: "ˈɔːɡənaɪzd", stress: "OR-gan-ized", chinese: "有组织的", pinyin: "yǒu zǔzhī de" },
      { word: "diverse", ipa: "daɪˈvɜːs", stress: "di-VERSE", chinese: "多样化的", pinyin: "duōyàng huà de" },
      { word: "supportive", ipa: "səˈpɔːtɪv", stress: "sup-PORT-ive", chinese: "支持的", pinyin: "zhīchí de" }
    ],
    acceptablePool: ["modern","challenging","organized","diverse","supportive","large","strict","clean","busy","excellent"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hot", chinese: "热的", pinyin: "rè de" },
      { word: "cold", chinese: "冷的", pinyin: "lěng de" },
      { word: "funny", chinese: "有趣的", pinyin: "yǒuqù de" },
      { word: "dangerous", chinese: "危险的", pinyin: "wēixiǎn de" },
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "tired", chinese: "疲倦的", pinyin: "píjuàn de" },
      { word: "hungry", chinese: "饥饿的", pinyin: "jī'è de" },
      { word: "angry", chinese: "生气的", pinyin: "shēngqì de" },
      { word: "sad", chinese: "悲伤的", pinyin: "bēishāng de" },
      { word: "silly", chinese: "愚蠢的", pinyin: "yúchǔn de" },
      { word: "fast", chinese: "快速的", pinyin: "kuàisù de" }
    ],
    sentences: [
      "My school is very modern with excellent facilities.",
      "The teachers are supportive and really care about students.",
      "We have a diverse mix of subjects and activities.",
      "It's a challenging environment but I enjoy it."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe your best friend",
    correctAdjectives: [
      { word: "loyal", ipa: "ˈlɔɪəl", stress: "LOY-al", chinese: "忠诚的", pinyin: "zhōngchéng de" },
      { word: "funny", ipa: "ˈfʌni", stress: "FUN-ny", chinese: "有趣的", pinyin: "yǒuqù de" },
      { word: "generous", ipa: "ˈdʒenərəs", stress: "JEN-er-ous", chinese: "慷慨的", pinyin: "kāngkǎi de" },
      { word: "trustworthy", ipa: "ˈtrʌstˌwɜːði", stress: "TRUST-wor-thy", chinese: "值得信赖的", pinyin: "zhídé xìnlài de" },
      { word: "caring", ipa: "ˈkeərɪŋ", stress: "CARE-ing", chinese: "关心的", pinyin: "guānxīn de" }
    ],
    acceptablePool: ["loyal","funny","generous","trustworthy","caring","kind","honest","cheerful","reliable","thoughtful"],
    falseAdjectives: [
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "dangerous", chinese: "危险的", pinyin: "wēixiǎn de" },
      { word: "cold", chinese: "冷的", pinyin: "lěng de" },
      { word: "hot", chinese: "热的", pinyin: "rè de" },
      { word: "clean", chinese: "干净的", pinyin: "gānjìng de" },
      { word: "dirty", chinese: "肮脏的", pinyin: "āngzāng de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" }
    ],
    sentences: [
      "My best friend is incredibly loyal and trustworthy.",
      "She's always funny and makes me laugh.",
      "She's also very generous with her time.",
      "I'm lucky to have such a caring friend."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe a favourite teacher",
    correctAdjectives: [
      { word: "patient", ipa: "ˈpeɪʃənt", stress: "PAY-shent", chinese: "耐心的", pinyin: "nàixīn de" },
      { word: "knowledgeable", ipa: "ˈnɒlɪdʒəbəl", stress: "NOL-ij-able", chinese: "知识渊博的", pinyin: "zhīshì yuānbó de" },
      { word: "inspiring", ipa: "ɪnˈspaɪərɪŋ", stress: "in-SPY-ring", chinese: "鼓舞人心的", pinyin: "gǔwǔ rénxīn de" },
      { word: "enthusiastic", ipa: "ɪnˌθjuːziˈæstɪk", stress: "en-thoo-zee-AS-tic", chinese: "热情的", pinyin: "rèqíng de" },
      { word: "fair", ipa: "feə", stress: "FAIR", chinese: "公平的", pinyin: "gōngpíng de" }
    ],
    acceptablePool: ["patient","knowledgeable","inspiring","enthusiastic","fair","strict","helpful","experienced","dedicated","clear"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" },
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "beautiful", chinese: "美丽的", pinyin: "měilì de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "dangerous", chinese: "危险的", pinyin: "wēixiǎn de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "cold", chinese: "冷的", pinyin: "lěng de" },
      { word: "hot", chinese: "热的", pinyin: "rè de" },
      { word: "dirty", chinese: "肮脏的", pinyin: "āngzāng de" },
      { word: "messy", chinese: "凌乱的", pinyin: "língluàn de" }
    ],
    sentences: [
      "My favourite teacher is very patient and knowledgeable.",
      "She explains things in an enthusiastic way.",
      "Her lessons are always inspiring and interesting.",
      "She's fair to all students and I respect her greatly."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe your daily routine",
    correctAdjectives: [
      { word: "busy", ipa: "ˈbɪzi", stress: "BIZ-y", chinese: "忙碌的", pinyin: "mánglù de" },
      { word: "structured", ipa: "ˈstrʌktʃəd", stress: "STRUC-tured", chinese: "有条理的", pinyin: "yǒu tiáolǐ de" },
      { word: "repetitive", ipa: "rɪˈpetətɪv", stress: "re-PET-i-tive", chinese: "重复的", pinyin: "chóngfù de" },
      { word: "tiring", ipa: "ˈtaɪərɪŋ", stress: "TY-ring", chinese: "累人的", pinyin: "lèi rén de" },
      { word: "predictable", ipa: "prɪˈdɪktəbəl", stress: "pre-DIC-table", chinese: "可预测的", pinyin: "kě yùcè de" }
    ],
    acceptablePool: ["busy","structured","repetitive","tiring","predictable","regular","hectic","organized","scheduled","exhausting"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "beautiful", chinese: "美丽的", pinyin: "měilì de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "friendly", chinese: "友好的", pinyin: "yǒuhǎo de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "dangerous", chinese: "危险的", pinyin: "wēixiǎn de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "funny", chinese: "有趣的", pinyin: "yǒuqù de" },
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "clean", chinese: "干净的", pinyin: "gānjìng de" },
      { word: "dirty", chinese: "肮脏的", pinyin: "āngzāng de" }
    ],
    sentences: [
      "My daily routine is quite busy and structured.",
      "I wake up early and follow a predictable schedule.",
      "Sometimes it feels repetitive but also organized.",
      "Overall, it can be tiring but keeps me productive."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe your weekend",
    correctAdjectives: [
      { word: "relaxing", ipa: "rɪˈlæksɪŋ", stress: "re-LAX-ing", chinese: "放松的", pinyin: "fàngsōng de" },
      { word: "enjoyable", ipa: "ɪnˈdʒɔɪəbəl", stress: "en-JOY-able", chinese: "愉快的", pinyin: "yúkuài de" },
      { word: "peaceful", ipa: "ˈpiːsfəl", stress: "PEACE-ful", chinese: "平静的", pinyin: "píngjìng de" },
      { word: "free", ipa: "friː", stress: "FREE", chinese: "自由的", pinyin: "zìyóu de" },
      { word: "refreshing", ipa: "rɪˈfreʃɪŋ", stress: "re-FRESH-ing", chinese: "令人振奋的", pinyin: "lìng rén zhènfèn de" }
    ],
    acceptablePool: ["relaxing","enjoyable","peaceful","free","refreshing","fun","exciting","quiet","restful","leisurely"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "dangerous", chinese: "危险的", pinyin: "wēixiǎn de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "dirty", chinese: "肮脏的", pinyin: "āngzāng de" },
      { word: "clean", chinese: "干净的", pinyin: "gānjìng de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "messy", chinese: "凌乱的", pinyin: "língluàn de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" }
    ],
    sentences: [
      "My weekends are usually relaxing and enjoyable.",
      "I have free time to do what I want.",
      "It's a peaceful break from my busy week.",
      "I find it very refreshing and rejuvenating."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe a holiday",
    correctAdjectives: [
      { word: "memorable", ipa: "ˈmemərəbəl", stress: "MEM-or-able", chinese: "难忘的", pinyin: "nánwàng de" },
      { word: "exciting", ipa: "ɪkˈsaɪtɪŋ", stress: "ex-CITE-ing", chinese: "令人兴奋的", pinyin: "lìng rén xīngfèn de" },
      { word: "adventurous", ipa: "ədˈventʃərəs", stress: "ad-VEN-cher-ous", chinese: "冒险的", pinyin: "màoxiǎn de" },
      { word: "wonderful", ipa: "ˈwʌndəfəl", stress: "WON-der-ful", chinese: "精彩的", pinyin: "jīngcǎi de" },
      { word: "tropical", ipa: "ˈtrɒpɪkəl", stress: "TROP-i-cal", chinese: "热带的", pinyin: "rèdài de" }
    ],
    acceptablePool: ["memorable","exciting","adventurous","wonderful","tropical","amazing","fantastic","perfect","scenic","exotic"],
    falseAdjectives: [
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "loyal", chinese: "忠诚的", pinyin: "zhōngchéng de" },
      { word: "patient", chinese: "耐心的", pinyin: "nàixīn de" },
      { word: "busy", chinese: "忙碌的", pinyin: "mánglù de" },
      { word: "structured", chinese: "有条理的", pinyin: "yǒu tiáolǐ de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "angry", chinese: "生气的", pinyin: "shēngqì de" },
      { word: "tired", chinese: "疲倦的", pinyin: "píjuàn de" },
      { word: "hungry", chinese: "饥饿的", pinyin: "jī'è de" },
      { word: "sleepy", chinese: "困倦的", pinyin: "kùnjuàn de" },
      { word: "sad", chinese: "悲伤的", pinyin: "bēishāng de" }
    ],
    sentences: [
      "My holiday was memorable and exciting.",
      "We went to a wonderful tropical destination.",
      "The experience was adventurous and thrilling.",
      "It was the perfect getaway I needed."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe a sport you like",
    correctAdjectives: [
      { word: "competitive", ipa: "kəmˈpetətɪv", stress: "com-PET-i-tive", chinese: "竞争的", pinyin: "jìngzhēng de" },
      { word: "energetic", ipa: "ˌenəˈdʒetɪk", stress: "en-er-JET-ic", chinese: "充满活力的", pinyin: "chōngmǎn huólì de" },
      { word: "challenging", ipa: "ˈtʃælɪndʒɪŋ", stress: "CHAL-len-ging", chinese: "有挑战性的", pinyin: "yǒu tiǎozhàn xìng de" },
      { word: "physical", ipa: "ˈfɪzɪkəl", stress: "FIZ-i-cal", chinese: "体力的", pinyin: "tǐlì de" },
      { word: "thrilling", ipa: "ˈθrɪlɪŋ", stress: "THRILL-ing", chinese: "刺激的", pinyin: "cìjī de" }
    ],
    acceptablePool: ["competitive","energetic","challenging","physical","thrilling","intense","exciting","demanding","athletic","dynamic"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "beautiful", chinese: "美丽的", pinyin: "měilì de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "clean", chinese: "干净的", pinyin: "gānjìng de" },
      { word: "dirty", chinese: "肮脏的", pinyin: "āngzāng de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" }
    ],
    sentences: [
      "The sport I like is competitive and thrilling.",
      "It requires physical fitness and skill.",
      "Playing it is energetic and challenging.",
      "I find it exciting and rewarding."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe a movie you enjoy",
    correctAdjectives: [
      { word: "entertaining", ipa: "ˌentəˈteɪnɪŋ", stress: "en-ter-TAIN-ing", chinese: "娱乐的", pinyin: "yúlè de" },
      { word: "dramatic", ipa: "drəˈmætɪk", stress: "dra-MAT-ic", chinese: "戏剧性的", pinyin: "xìjù xìng de" },
      { word: "emotional", ipa: "ɪˈməʊʃənəl", stress: "e-MO-tion-al", chinese: "情感的", pinyin: "qínggǎn de" },
      { word: "captivating", ipa: "ˈkæptɪveɪtɪŋ", stress: "CAP-ti-vate-ing", chinese: "迷人的", pinyin: "mírén de" },
      { word: "suspenseful", ipa: "səˈspensfəl", stress: "sus-PENSE-ful", chinese: "悬疑的", pinyin: "xuányí de" }
    ],
    acceptablePool: ["entertaining","dramatic","emotional","captivating","suspenseful","gripping","powerful","moving","intense","compelling"],
    falseAdjectives: [
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "clean", chinese: "干净的", pinyin: "gānjìng de" },
      { word: "dirty", chinese: "肮脏的", pinyin: "āngzāng de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "busy", chinese: "忙碌的", pinyin: "mánglù de" }
    ],
    sentences: [
      "The movie I enjoy is entertaining and captivating.",
      "It has dramatic and emotional scenes.",
      "The story is suspenseful and keeps you engaged.",
      "Overall, it's a powerful and moving film."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe a pet",
    correctAdjectives: [
      { word: "playful", ipa: "ˈpleɪfəl", stress: "PLAY-ful", chinese: "爱玩的", pinyin: "ài wán de" },
      { word: "affectionate", ipa: "əˈfekʃənət", stress: "af-FEC-tion-ate", chinese: "深情的", pinyin: "shēnqíng de" },
      { word: "energetic", ipa: "ˌenəˈdʒetɪk", stress: "en-er-JET-ic", chinese: "精力充沛的", pinyin: "jīnglì chōngpèi de" },
      { word: "loyal", ipa: "ˈlɔɪəl", stress: "LOY-al", chinese: "忠诚的", pinyin: "zhōngchéng de" },
      { word: "cute", ipa: "kjuːt", stress: "CUTE", chinese: "可爱的", pinyin: "kě'ài de" }
    ],
    acceptablePool: ["playful","affectionate","energetic","loyal","cute","friendly","loving","gentle","obedient","adorable"],
    falseAdjectives: [
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" },
      { word: "clean", chinese: "干净的", pinyin: "gānjìng de" },
      { word: "dirty", chinese: "肮脏的", pinyin: "āngzāng de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "busy", chinese: "忙碌的", pinyin: "mánglù de" },
      { word: "structured", chinese: "有条理的", pinyin: "yǒu tiáolǐ de" }
    ],
    sentences: [
      "My pet is playful and affectionate.",
      "It's very energetic and loves to run around.",
      "The pet is also loyal and cute.",
      "I really enjoy having such a loving companion."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe your family",
    correctAdjectives: [
      { word: "close-knit", ipa: "kləʊs nɪt", stress: "CLOSE-KNIT", chinese: "紧密的", pinyin: "jǐnmì de" },
      { word: "supportive", ipa: "səˈpɔːtɪv", stress: "sup-PORT-ive", chinese: "支持的", pinyin: "zhīchí de" },
      { word: "loving", ipa: "ˈlʌvɪŋ", stress: "LUV-ing", chinese: "充满爱的", pinyin: "chōngmǎn ài de" },
      { word: "traditional", ipa: "trəˈdɪʃənəl", stress: "tra-DISH-on-al", chinese: "传统的", pinyin: "chuántǒng de" },
      { word: "large", ipa: "lɑːdʒ", stress: "LARGE", chinese: "大的", pinyin: "dà de" }
    ],
    acceptablePool: ["close-knit","supportive","loving","traditional","large","caring","warm","united","understanding","tight"],
    falseAdjectives: [
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "clean", chinese: "干净的", pinyin: "gānjìng de" },
      { word: "dirty", chinese: "肮脏的", pinyin: "āngzāng de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" },
      { word: "beautiful", chinese: "美丽的", pinyin: "měilì de" }
    ],
    sentences: [
      "My family is close-knit and supportive.",
      "We're a large but loving family.",
      "We have traditional values but modern views.",
      "I feel lucky to have such caring relatives."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe your bedroom",
    correctAdjectives: [
      { word: "cozy", ipa: "ˈkəʊzi", stress: "CO-zy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", ipa: "ˈtaɪdi", stress: "TY-dy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "small", ipa: "smɔːl", stress: "SMALL", chinese: "小的", pinyin: "xiǎo de" },
      { word: "comfortable", ipa: "ˈkʌmftəbəl", stress: "COM-fort-able", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "bright", ipa: "braɪt", stress: "BRIGHT", chinese: "明亮的", pinyin: "míngliàng de" }
    ],
    acceptablePool: ["cozy","tidy","small","comfortable","bright","clean","organized","spacious","messy","personal"],
    falseAdjectives: [
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "busy", chinese: "忙碌的", pinyin: "mánglù de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" },
      { word: "loyal", chinese: "忠诚的", pinyin: "zhōngchéng de" },
      { word: "funny", chinese: "有趣的", pinyin: "yǒuqù de" }
    ],
    sentences: [
      "My bedroom is cozy and comfortable.",
      "It's a small but bright space.",
      "I keep it tidy and organized.",
      "It's my favorite place to relax."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe food you like",
    correctAdjectives: [
      { word: "delicious", ipa: "dɪˈlɪʃəs", stress: "de-LISH-ous", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "spicy", ipa: "ˈspaɪsi", stress: "SPY-cy", chinese: "辣的", pinyin: "là de" },
      { word: "fresh", ipa: "freʃ", stress: "FRESH", chinese: "新鲜的", pinyin: "xīnxiān de" },
      { word: "savory", ipa: "ˈseɪvəri", stress: "SAY-vor-y", chinese: "咸味的", pinyin: "xiánwèi de" },
      { word: "nutritious", ipa: "njuːˈtrɪʃəs", stress: "new-TRISH-ous", chinese: "营养的", pinyin: "yíngyǎng de" }
    ],
    acceptablePool: ["delicious","spicy","fresh","savory","nutritious","tasty","flavorful","healthy","aromatic","appetizing"],
    falseAdjectives: [
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "busy", chinese: "忙碌的", pinyin: "mánglù de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" },
      { word: "clean", chinese: "干净的", pinyin: "gānjìng de" },
      { word: "dirty", chinese: "肮脏的", pinyin: "āngzāng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "loyal", chinese: "忠诚的", pinyin: "zhōngchéng de" },
      { word: "funny", chinese: "有趣的", pinyin: "yǒuqù de" }
    ],
    sentences: [
      "The food I like is delicious and fresh.",
      "It's often spicy with savory flavors.",
      "I enjoy nutritious and healthy meals.",
      "Good food makes me really happy."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe shopping",
    correctAdjectives: [
      { word: "expensive", ipa: "ɪkˈspensɪv", stress: "ex-PEN-sive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "convenient", ipa: "kənˈviːniənt", stress: "con-VEEN-ient", chinese: "方便的", pinyin: "fāngbiàn de" },
      { word: "crowded", ipa: "ˈkraʊdɪd", stress: "CROW-ded", chinese: "拥挤的", pinyin: "yōngjǐ de" },
      { word: "modern", ipa: "ˈmɒdən", stress: "MOD-ern", chinese: "现代的", pinyin: "xiàndài de" },
      { word: "overwhelming", ipa: "ˌəʊvəˈwelmɪŋ", stress: "o-ver-WHELM-ing", chinese: "压倒性的", pinyin: "yādǎo xìng de" }
    ],
    acceptablePool: ["expensive","convenient","crowded","modern","overwhelming","busy","tiring","fun","exhausting","stressful"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "loyal", chinese: "忠诚的", pinyin: "zhōngchéng de" },
      { word: "funny", chinese: "有趣的", pinyin: "yǒuqù de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "bright", chinese: "明亮的", pinyin: "míngliàng de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" }
    ],
    sentences: [
      "Shopping can be expensive and overwhelming.",
      "Modern malls are convenient but often crowded.",
      "I find it both fun and tiring.",
      "Overall, I prefer shopping online now."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe the internet",
    correctAdjectives: [
      { word: "useful", ipa: "ˈjuːsfəl", stress: "USE-ful", chinese: "有用的", pinyin: "yǒuyòng de" },
      { word: "fast", ipa: "fɑːst", stress: "FAST", chinese: "快速的", pinyin: "kuàisù de" },
      { word: "addictive", ipa: "əˈdɪktɪv", stress: "ad-DIC-tive", chinese: "上瘾的", pinyin: "shàngyǐn de" },
      { word: "informative", ipa: "ɪnˈfɔːmətɪv", stress: "in-FORM-a-tive", chinese: "信息丰富的", pinyin: "xìnxī fēngfù de" },
      { word: "endless", ipa: "ˈendləs", stress: "END-less", chinese: "无尽的", pinyin: "wújìn de" }
    ],
    acceptablePool: ["useful","fast","addictive","informative","endless","convenient","essential","distracting","global","accessible"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "bright", chinese: "明亮的", pinyin: "míngliàng de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" }
    ],
    sentences: [
      "The internet is useful and informative.",
      "It's fast and convenient for research.",
      "However, it can be addictive and endless.",
      "I think it's essential for modern life."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe music",
    correctAdjectives: [
      { word: "relaxing", ipa: "rɪˈlæksɪŋ", stress: "re-LAX-ing", chinese: "放松的", pinyin: "fàngsōng de" },
      { word: "uplifting", ipa: "ˈʌplɪftɪŋ", stress: "UP-lift-ing", chinese: "振奋的", pinyin: "zhènfèn de" },
      { word: "emotional", ipa: "ɪˈməʊʃənəl", stress: "e-MO-tion-al", chinese: "情感的", pinyin: "qínggǎn de" },
      { word: "rhythmic", ipa: "ˈrɪðmɪk", stress: "RITH-mic", chinese: "有节奏的", pinyin: "yǒu jiézòu de" },
      { word: "powerful", ipa: "ˈpaʊəfəl", stress: "POW-er-ful", chinese: "有力的", pinyin: "yǒulì de" }
    ],
    acceptablePool: ["relaxing","uplifting","emotional","rhythmic","powerful","inspiring","energetic","soothing","catchy","moving"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" },
      { word: "clean", chinese: "干净的", pinyin: "gānjìng de" },
      { word: "dirty", chinese: "肮脏的", pinyin: "āngzāng de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" }
    ],
    sentences: [
      "Music is relaxing and uplifting.",
      "I enjoy emotional and powerful songs.",
      "Rhythmic music makes me want to dance.",
      "Music is an important part of my life."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe technology",
    correctAdjectives: [
      { word: "advanced", ipa: "ədˈvɑːnst", stress: "ad-VANCED", chinese: "先进的", pinyin: "xiānjìn de" },
      { word: "innovative", ipa: "ˈɪnəveɪtɪv", stress: "IN-no-vate-ive", chinese: "创新的", pinyin: "chuàngxīn de" },
      { word: "complex", ipa: "ˈkɒmpleks", stress: "COM-plex", chinese: "复杂的", pinyin: "fùzá de" },
      { word: "evolving", ipa: "ɪˈvɒlvɪŋ", stress: "e-VOLV-ing", chinese: "发展的", pinyin: "fāzhǎn de" },
      { word: "essential", ipa: "ɪˈsenʃəl", stress: "es-SEN-tial", chinese: "必需的", pinyin: "bìxū de" }
    ],
    acceptablePool: ["advanced","innovative","complex","evolving","essential","modern","useful","revolutionary","sophisticated","practical"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" },
      { word: "beautiful", chinese: "美丽的", pinyin: "měilì de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loyal", chinese: "忠诚的", pinyin: "zhōngchéng de" }
    ],
    sentences: [
      "Technology is advanced and innovative.",
      "It's complex but essential for modern life.",
      "Tech is constantly evolving and improving.",
      "I believe it shapes our future significantly."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe your future job",
    correctAdjectives: [
      { word: "challenging", ipa: "ˈtʃælɪndʒɪŋ", stress: "CHAL-len-ging", chinese: "有挑战性的", pinyin: "yǒu tiǎozhàn xìng de" },
      { word: "rewarding", ipa: "rɪˈwɔːdɪŋ", stress: "re-WARD-ing", chinese: "有回报的", pinyin: "yǒu huíbào de" },
      { word: "creative", ipa: "kriˈeɪtɪv", stress: "cre-A-tive", chinese: "创造性的", pinyin: "chuàngzào xìng de" },
      { word: "stable", ipa: "ˈsteɪbəl", stress: "STAY-ble", chinese: "稳定的", pinyin: "wěndìng de" },
      { word: "fulfilling", ipa: "fʊlˈfɪlɪŋ", stress: "ful-FILL-ing", chinese: "充实的", pinyin: "chōngshí de" }
    ],
    acceptablePool: ["challenging","rewarding","creative","stable","fulfilling","interesting","demanding","exciting","professional","meaningful"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" },
      { word: "beautiful", chinese: "美丽的", pinyin: "měilì de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" }
    ],
    sentences: [
      "My future job will be challenging and rewarding.",
      "I want something creative and fulfilling.",
      "A stable career is important to me.",
      "I hope to find meaningful work I enjoy."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe travel",
    correctAdjectives: [
      { word: "exciting", ipa: "ɪkˈsaɪtɪŋ", stress: "ex-CITE-ing", chinese: "令人兴奋的", pinyin: "lìng rén xīngfèn de" },
      { word: "educational", ipa: "ˌedʒuˈkeɪʃənəl", stress: "ed-u-KAY-shon-al", chinese: "教育性的", pinyin: "jiàoyù xìng de" },
      { word: "exhausting", ipa: "ɪɡˈzɔːstɪŋ", stress: "ex-HAUST-ing", chinese: "令人筋疲力尽的", pinyin: "lìng rén jīn pí lì jìn de" },
      { word: "eye-opening", ipa: "aɪ ˈəʊpənɪŋ", stress: "EYE-o-pen-ing", chinese: "大开眼界的", pinyin: "dà kāi yǎnjiè de" },
      { word: "memorable", ipa: "ˈmemərəbəl", stress: "MEM-or-able", chinese: "难忘的", pinyin: "nánwàng de" }
    ],
    acceptablePool: ["exciting","educational","exhausting","eye-opening","memorable","adventurous","enriching","inspiring","broadening","transformative"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "loyal", chinese: "忠诚的", pinyin: "zhōngchéng de" }
    ],
    sentences: [
      "Travel is exciting and eye-opening.",
      "It can be educational but also exhausting.",
      "Every trip is memorable and enriching.",
      "I believe travel broadens your perspective."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe festivals",
    correctAdjectives: [
      { word: "festive", ipa: "ˈfestɪv", stress: "FES-tive", chinese: "节日的", pinyin: "jiérì de" },
      { word: "colorful", ipa: "ˈkʌləfəl", stress: "COL-or-ful", chinese: "多彩的", pinyin: "duōcǎi de" },
      { word: "traditional", ipa: "trəˈdɪʃənəl", stress: "tra-DISH-on-al", chinese: "传统的", pinyin: "chuántǒng de" },
      { word: "joyful", ipa: "ˈdʒɔɪfəl", stress: "JOY-ful", chinese: "欢乐的", pinyin: "huānlè de" },
      { word: "cultural", ipa: "ˈkʌltʃərəl", stress: "CUL-tur-al", chinese: "文化的", pinyin: "wénhuà de" }
    ],
    acceptablePool: ["festive","colorful","traditional","joyful","cultural","celebratory","lively","vibrant","meaningful","ceremonial"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" }
    ],
    sentences: [
      "Festivals are festive and colorful.",
      "They celebrate traditional and cultural values.",
      "The atmosphere is always joyful and lively.",
      "I love the sense of community they bring."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe a city you visited",
    correctAdjectives: [
      { word: "bustling", ipa: "ˈbʌsəlɪŋ", stress: "BUS-ling", chinese: "繁华的", pinyin: "fánhuá de" },
      { word: "historic", ipa: "hɪˈstɒrɪk", stress: "his-TOR-ic", chinese: "历史性的", pinyin: "lìshǐ xìng de" },
      { word: "vibrant", ipa: "ˈvaɪbrənt", stress: "VY-brant", chinese: "充满活力的", pinyin: "chōngmǎn huólì de" },
      { word: "cosmopolitan", ipa: "ˌkɒzməˈpɒlɪtən", stress: "coz-mo-POL-i-tan", chinese: "国际化的", pinyin: "guójì huà de" },
      { word: "impressive", ipa: "ɪmˈpresɪv", stress: "im-PRESS-ive", chinese: "令人印象深刻的", pinyin: "lìng rén yìnxiàng shēnkè de" }
    ],
    acceptablePool: ["bustling","historic","vibrant","cosmopolitan","impressive","dynamic","diverse","modern","fascinating","lively"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "loyal", chinese: "忠诚的", pinyin: "zhōngchéng de" },
      { word: "funny", chinese: "有趣的", pinyin: "yǒuqù de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" }
    ],
    sentences: [
      "The city I visited was bustling and vibrant.",
      "It had impressive historic landmarks.",
      "The cosmopolitan atmosphere was fascinating.",
      "Overall, it was a memorable urban experience."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe books",
    correctAdjectives: [
      { word: "engaging", ipa: "ɪnˈɡeɪdʒɪŋ", stress: "en-GAGE-ing", chinese: "吸引人的", pinyin: "xīyǐn rén de" },
      { word: "informative", ipa: "ɪnˈfɔːmətɪv", stress: "in-FORM-a-tive", chinese: "信息丰富的", pinyin: "xìnxī fēngfù de" },
      { word: "thought-provoking", ipa: "θɔːt prəˈvəʊkɪŋ", stress: "THOUGHT-pro-VOK-ing", chinese: "发人深省的", pinyin: "fā rén shēnxǐng de" },
      { word: "imaginative", ipa: "ɪˈmædʒɪnətɪv", stress: "i-MAJ-in-a-tive", chinese: "富有想象力的", pinyin: "fùyǒu xiǎngxiàng lì de" },
      { word: "captivating", ipa: "ˈkæptɪveɪtɪŋ", stress: "CAP-ti-vate-ing", chinese: "迷人的", pinyin: "mírén de" }
    ],
    acceptablePool: ["engaging","informative","thought-provoking","imaginative","captivating","inspiring","educational","entertaining","enlightening","absorbing"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" }
    ],
    sentences: [
      "Books are engaging and captivating.",
      "They can be informative and educational.",
      "I enjoy thought-provoking and imaginative stories.",
      "Reading is one of my favorite hobbies."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe hobbies",
    correctAdjectives: [
      { word: "enjoyable", ipa: "ɪnˈdʒɔɪəbəl", stress: "en-JOY-able", chinese: "愉快的", pinyin: "yúkuài de" },
      { word: "relaxing", ipa: "rɪˈlæksɪŋ", stress: "re-LAX-ing", chinese: "放松的", pinyin: "fàngsōng de" },
      { word: "creative", ipa: "kriˈeɪtɪv", stress: "cre-A-tive", chinese: "创造性的", pinyin: "chuàngzào xìng de" },
      { word: "time-consuming", ipa: "taɪm kənˈsjuːmɪŋ", stress: "TIME-con-SUME-ing", chinese: "耗时的", pinyin: "hàoshí de" },
      { word: "rewarding", ipa: "rɪˈwɔːdɪŋ", stress: "re-WARD-ing", chinese: "有回报的", pinyin: "yǒu huíbào de" }
    ],
    acceptablePool: ["enjoyable","relaxing","creative","time-consuming","rewarding","fulfilling","therapeutic","entertaining","engaging","absorbing"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" }
    ],
    sentences: [
      "Hobbies are enjoyable and relaxing.",
      "They can be creative and rewarding.",
      "Some hobbies are time-consuming but fulfilling.",
      "I think everyone needs a hobby they love."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe neighbours",
    correctAdjectives: [
      { word: "friendly", ipa: "ˈfrendli", stress: "FREN-dly", chinese: "友好的", pinyin: "yǒuhǎo de" },
      { word: "quiet", ipa: "ˈkwaɪət", stress: "QUI-et", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "helpful", ipa: "ˈhelpfəl", stress: "HELP-ful", chinese: "乐于助人的", pinyin: "lèyú zhùrén de" },
      { word: "respectful", ipa: "rɪˈspektfəl", stress: "re-SPECT-ful", chinese: "尊重的", pinyin: "zūnzhòng de" },
      { word: "considerate", ipa: "kənˈsɪdərət", stress: "con-SID-er-ate", chinese: "体贴的", pinyin: "tǐtiē de" }
    ],
    acceptablePool: ["friendly","quiet","helpful","respectful","considerate","kind","pleasant","polite","neighborly","trustworthy"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" }
    ],
    sentences: [
      "My neighbours are friendly and helpful.",
      "They're quiet and respectful of others.",
      "We have a considerate relationship.",
      "I feel lucky to have such pleasant neighbors."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe your country",
    correctAdjectives: [
      { word: "diverse", ipa: "daɪˈvɜːs", stress: "di-VERSE", chinese: "多样化的", pinyin: "duōyàng huà de" },
      { word: "beautiful", ipa: "ˈbjuːtəfəl", stress: "BEAU-ti-ful", chinese: "美丽的", pinyin: "měilì de" },
      { word: "developed", ipa: "dɪˈveləpt", stress: "de-VEL-oped", chinese: "发达的", pinyin: "fādá de" },
      { word: "populous", ipa: "ˈpɒpjələs", stress: "POP-u-lous", chinese: "人口众多的", pinyin: "rénkǒu zhòngduō de" },
      { word: "proud", ipa: "praʊd", stress: "PROUD", chinese: "自豪的", pinyin: "zìháo de" }
    ],
    acceptablePool: ["diverse","beautiful","developed","populous","proud","rich","unique","modern","traditional","fascinating"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "loyal", chinese: "忠诚的", pinyin: "zhōngchéng de" },
      { word: "funny", chinese: "有趣的", pinyin: "yǒuqù de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" }
    ],
    sentences: [
      "My country is diverse and beautiful.",
      "It's a developed nation with populous cities.",
      "We have rich traditions and modern values.",
      "I'm proud to call it home."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe environment",
    correctAdjectives: [
      { word: "fragile", ipa: "ˈfrædʒaɪl", stress: "FRAJ-ile", chinese: "脆弱的", pinyin: "cuìruò de" },
      { word: "polluted", ipa: "pəˈluːtɪd", stress: "pol-LUTE-ed", chinese: "受污染的", pinyin: "shòu wūrǎn de" },
      { word: "precious", ipa: "ˈpreʃəs", stress: "PREH-shus", chinese: "珍贵的", pinyin: "zhēnguì de" },
      { word: "threatened", ipa: "ˈθretənd", stress: "THREAT-ened", chinese: "受威胁的", pinyin: "shòu wēixié de" },
      { word: "vital", ipa: "ˈvaɪtəl", stress: "VY-tal", chinese: "至关重要的", pinyin: "zhìguān zhòngyào de" }
    ],
    acceptablePool: ["fragile","polluted","precious","threatened","vital","endangered","critical","important","delicate","vulnerable"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "loyal", chinese: "忠诚的", pinyin: "zhōngchéng de" },
      { word: "funny", chinese: "有趣的", pinyin: "yǒuqù de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" }
    ],
    sentences: [
      "The environment is fragile and precious.",
      "Many areas are polluted and threatened.",
      "It's vital we protect our natural resources.",
      "Environmental protection is everyone's responsibility."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe social media",
    correctAdjectives: [
      { word: "addictive", ipa: "əˈdɪktɪv", stress: "ad-DIC-tive", chinese: "上瘾的", pinyin: "shàngyǐn de" },
      { word: "influential", ipa: "ˌɪnfluˈenʃəl", stress: "in-flu-EN-shal", chinese: "有影响力的", pinyin: "yǒu yǐngxiǎng lì de" },
      { word: "connecting", ipa: "kəˈnektɪŋ", stress: "con-NECT-ing", chinese: "连接的", pinyin: "liánjiē de" },
      { word: "superficial", ipa: "ˌsuːpəˈfɪʃəl", stress: "soo-per-FISH-al", chinese: "肤浅的", pinyin: "fūqiǎn de" },
      { word: "pervasive", ipa: "pəˈveɪsɪv", stress: "per-VAY-sive", chinese: "普遍的", pinyin: "pǔbiàn de" }
    ],
    acceptablePool: ["addictive","influential","connecting","superficial","pervasive","engaging","toxic","ubiquitous","distracting","powerful"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" }
    ],
    sentences: [
      "Social media is addictive and influential.",
      "It's connecting but can be superficial.",
      "Its pervasive nature affects everyone.",
      "I have mixed feelings about its impact."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe studying English",
    correctAdjectives: [
      { word: "challenging", ipa: "ˈtʃælɪndʒɪŋ", stress: "CHAL-len-ging", chinese: "有挑战性的", pinyin: "yǒu tiǎozhàn xìng de" },
      { word: "important", ipa: "ɪmˈpɔːtənt", stress: "im-PORT-ant", chinese: "重要的", pinyin: "zhòngyào de" },
      { word: "useful", ipa: "ˈjuːsfəl", stress: "USE-ful", chinese: "有用的", pinyin: "yǒuyòng de" },
      { word: "difficult", ipa: "ˈdɪfɪkəlt", stress: "DIF-fi-cult", chinese: "困难的", pinyin: "kùnnan de" },
      { word: "rewarding", ipa: "rɪˈwɔːdɪŋ", stress: "re-WARD-ing", chinese: "有回报的", pinyin: "yǒu huíbào de" }
    ],
    acceptablePool: ["challenging","important","useful","difficult","rewarding","essential","demanding","practical","necessary","valuable"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "historical", chinese: "历史悠久的", pinyin: "lìshǐ yōujiǔ de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" }
    ],
    sentences: [
      "Studying English is challenging but important.",
      "It's useful for many opportunities.",
      "The grammar can be difficult at times.",
      "Overall, I find it rewarding and valuable."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe nature",
    correctAdjectives: [
      { word: "beautiful", ipa: "ˈbjuːtəfəl", stress: "BEAU-ti-ful", chinese: "美丽的", pinyin: "měilì de" },
      { word: "peaceful", ipa: "ˈpiːsfəl", stress: "PEACE-ful", chinese: "平静的", pinyin: "píngjìng de" },
      { word: "magnificent", ipa: "mæɡˈnɪfɪsənt", stress: "mag-NIF-i-cent", chinese: "壮丽的", pinyin: "zhuànglì de" },
      { word: "calming", ipa: "ˈkɑːmɪŋ", stress: "CALM-ing", chinese: "令人平静的", pinyin: "lìng rén píngjìng de" },
      { word: "awe-inspiring", ipa: "ɔː ɪnˈspaɪərɪŋ", stress: "AWE-in-SPY-ring", chinese: "令人敬畏的", pinyin: "lìng rén jìngwèi de" }
    ],
    acceptablePool: ["beautiful","peaceful","magnificent","calming","awe-inspiring","stunning","serene","breathtaking","pristine","majestic"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "comfortable", chinese: "舒服的", pinyin: "shūfu de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" }
    ],
    sentences: [
      "Nature is beautiful and peaceful.",
      "The landscapes are magnificent and awe-inspiring.",
      "Being in nature is calming and therapeutic.",
      "I believe we should preserve its beauty."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  },
  {
    topic: "Describe your favourite season",
    correctAdjectives: [
      { word: "pleasant", ipa: "ˈplezənt", stress: "PLEZ-ant", chinese: "宜人的", pinyin: "yírén de" },
      { word: "colorful", ipa: "ˈkʌləfəl", stress: "COL-or-ful", chinese: "多彩的", pinyin: "duōcǎi de" },
      { word: "mild", ipa: "maɪld", stress: "MILD", chinese: "温和的", pinyin: "wēnhé de" },
      { word: "refreshing", ipa: "rɪˈfreʃɪŋ", stress: "re-FRESH-ing", chinese: "清新的", pinyin: "qīngxīn de" },
      { word: "comfortable", ipa: "ˈkʌmftəbəl", stress: "COM-fort-able", chinese: "舒适的", pinyin: "shūshì de" }
    ],
    acceptablePool: ["pleasant","colorful","mild","refreshing","comfortable","enjoyable","beautiful","ideal","perfect","lovely"],
    falseAdjectives: [
      { word: "delicious", chinese: "美味的", pinyin: "měiwèi de" },
      { word: "tall", chinese: "高的", pinyin: "gāo de" },
      { word: "spicy", chinese: "辣的", pinyin: "là de" },
      { word: "sweet", chinese: "甜的", pinyin: "tián de" },
      { word: "hard", chinese: "坚硬的", pinyin: "jiānyìng de" },
      { word: "soft", chinese: "柔软的", pinyin: "róuruǎn de" },
      { word: "cozy", chinese: "舒适的", pinyin: "shūshì de" },
      { word: "tidy", chinese: "整洁的", pinyin: "zhěngjié de" },
      { word: "small", chinese: "小的", pinyin: "xiǎo de" },
      { word: "loud", chinese: "吵闹的", pinyin: "chǎonào de" },
      { word: "quiet", chinese: "安静的", pinyin: "ānjìng de" },
      { word: "expensive", chinese: "昂贵的", pinyin: "ángguì de" },
      { word: "ancient", chinese: "古老的", pinyin: "gǔlǎo de" },
      { word: "modern", chinese: "现代的", pinyin: "xiàndài de" },
      { word: "crowded", chinese: "拥挤的", pinyin: "yōngjǐ de" }
    ],
    sentences: [
      "My favourite season is pleasant and comfortable.",
      "The weather is mild and refreshing.",
      "Everything looks colorful and beautiful.",
      "It's the perfect time of year for me."
    ],
    sentenceLabels: ["Intro/Topic", "Description", "Example/Detail", "Opinion/Conclusion"],
    acceptableOrders: [[0,1,2,3], [0,2,1,3]]
  }
];

console.log('data.js loaded,', window.TOPICS.length, 'topics available');
