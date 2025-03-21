// Icon Mapping

const iconMap = {};
const iconMappings = [
    {
        keys: ["marker"],
        value: "./images/marker.png"
    },
    {
        keys: ["khac", "dif", "diff", "different", "not"],
        value: "./images/general/detectiveDifferentTeam.png"
    },
    {
        keys: ["cung", "giong", "bang", "same", "team", "teammate", "mate"],
        value: "./images/general/detectiveSameTeam.png"
    },
    {
        keys: ["tot", "thien", "good", "nice", "gd", "g"],
        value: "./images/general/good.png"
    },
    {
        keys: ["ac", "xau", "bad", "evil", "e"],
        value: "./images/general/evil.png"
    },
    {
        keys: ["khongro", "unknown", "unk", "u"],
        value: "./images/general/unknown.png"
    },
    {
        keys: ["xanh", "blue"],
        value: "./images/general/ssBlue.png"
    },
    {
        keys: ["do", "red"],
        value: "./images/general/ssRed.png"
    },
    {
        keys: ["dan", "lang", "phedanlang", "phedan", "village", , "vill"],
        value: "./images/general/gamblerVillagerCorrect.png"
    },
    {
        keys: ["khacdan", "khacphedan", "notvill", "notvillage", "notvillager"],
        value: "./images/general/gamblerVillagerIncorrect.png"
    },
    {
        keys: ["phesoi", "werewolfteam", "ww", "wolf"],
        value: "./images/general/gamblerWerewolfCorrect.png"
    },
    {
        keys: ["khacmasoi", "khacsoi", "notwerewolfteam", "notwerewolf", "notwolf", "notww"],
        value: "./images/general/gamblerWerewolfIncorrect.png"
    },
    {
        keys: ["solo", "phesolo"],
        value: "./images/general/gamblerSoloCorrect.png"
    },
    {
        keys: ["khacsolo", "notsolo"],
        value: "./images/general/gamblerSoloIncorrect.png"
    },
    {
        keys: ["headhuntertarget", "hhtg", "hht"],
        value: "./images/general/headhunterTarget.png"
    },
    {
        keys: ["phexuigiuc", "bixuigiuc", "bixui", "instigatorrecruit", "instirecruit", "recruit"],
        value: "./images/general/instigatorRecruit.png"
    },
    {
        keys: ["phecupid", "dinhcpl", "bicpl", "cpl", "lover", "lv"],
        value: "./images/general/lover.png"
    },
    {
        keys: ["morticiansuspect", "mortisuspect", "mortisus"],
        value: "./images/general/morticianSuspect.png"
    },
    {
        keys: ["nightwatchmanprotect"],
        value: "./images/general/nightWatchmanProtect.png"
    },
    {
        keys: ["kyngu", "kydangu", "redladyvisited", "rlvisited"],
        value: "./images/general/redLadyVisited.png"
    },
    {
        keys: ["thanhviengiao", "phegiao", "giaodo", "sectmember", "sectmem"],
        value: "./images/general/sectMember.png"
    },
    {
        keys: ["csttarget", "cstsuspect", "cstsus", "sherifftarget", "sheriffsuspect", "sheriffsus"],
        value: "./images/general/sheriffSuspect.png"
    },
    {
        keys: ["vicamvui", "vivui", "violinistresulthappy", "violinisthappy", "viohappy"],
        value: "./images/general/violinistResultHappy.png"
    },
    {
        keys: ["vicambuon", "vibuon", "violinistresultsad", "violinistsad", "viosad"],
        value: "./images/general/violinistResultSad.png"
    },
    {
        keys: ["bacsi", "bs", "doctor", "doc"],
        value: "./images/village/icon_default_doctor_filled@3x.png"
    },
    {
        keys: ["nguoigacdem", "gacdem", "nightwatchman", "nwm"],
        value: "./images/village/icon_default_night_watchman_filled@3x.png"
    },
    {
        keys: ["dote", "te", "butcher", "but"],
        value: "./images/village/icon_default_butcher_filled@3x.png"
    },
    {
        keys: ["baove", "ve", "bv", "bodyguard", "bg"],
        value: "./images/village/icon_default_bodyguard_filled@3x.png",
    },
    {
        keys: ["lucsi", "luc", "toughguy", "tg"],
        value: "./images/village/icon_default_tough_guy_filled@3x.png"
    },
    {
        keys: ["tientritapsu", "tritapsu", "tritap", "seerapprentice", "seerapp"],
        value: "./images/village/icon_default_seer_apprentice_filled@3x.png"
    },
    {
        keys: ["nguoicanhgac", "gac", "vigilante", "vigi", "vig"],
        value: "./images/village/icon_default_vigilante_filled@3x.png"
    },
    {
        keys: ["xathu", "xa", "gunner", "gun"],
        value: "./images/village/icon_default_gunner_filled@3x.png"
    },
    {
        keys: ["nathu", "na", "bully", "bul"],
        value: "./images/village/icon_default_bully_filled@3x.png"
    },
    {
        keys: ["quannguc", "nguc", "jailer", "jail"],
        value: "./images/village/icon_default_jailer_filled@3x.png"
    },
    {
        keys: ["giamnguc", "giam", "warden", "ward"],
        value: "./images/village/icon_default_warden_filled@3x.png"
    },
    {
        keys: ["kynu", "ky", "redlady", "rl"],
        value: "./images/village/icon_default_red_lady_filled@3x.png"
    },
    {
        keys: ["manu", "ma", "ghostlady", "gl"],
        value: "./images/village/icon_default_ghost_lady_filled@3x.png"
    },
    {
        keys: ["mucsu", "muc", "priest", "pri"],
        value: "./images/village/icon_default_priest_filled@3x.png"
    },
    {
        keys: ["thienxa", "marksman", "mm"],
        value: "./images/village/icon_default_marksman_filled@3x.png"
    },
    {
        keys: ["thamphan", "phan", "judge", "jud"],
        value: "./images/village/icon_default_judge_filled@3x.png"
    },
    {
        keys: ["tientri", "tri", "seer"],
        value: "./images/village/icon_default_seer_filled@3x.png"
    },
    {
        keys: ["nhaphantich", "phantich", "analyst", "ana"],
        value: "./images/village/icon_default_analyst_filled@3x.png"
    },
    {
        keys: ["thayboi", "boi", "auraseer", "aura", "as"],
        value: "./images/village/icon_default_aura_seer_filled@3x.png"
    },
    {
        keys: ["nhangoaicam", "cam", "spiritseer", "ss"],
        value: "./images/village/icon_default_spirit_seer_filled@3x.png"
    },
    {
        keys: ["conbac", "bac", "gambler", "gamb", "gbl"],
        value: "./images/village/icon_default_gambler_filled@3x.png"
    },
    {
        keys: ["thamtu", "tham", "detective", "det"],
        value: "./images/village/icon_default_detective_filled@3x.png"
    },
    {
        keys: ["phapy", "phap", "mortician", "morti", "mort"],
        value: "./images/village/icon_default_mortician_filled@3x.png"
    },
    {
        keys: ["canhsattruong", "cst", "sheriff"],
        value: "./images/village/icon_default_sheriff_filled@3x.png"
    },
    {
        keys: ["nghesivicam", "vicam", "vi", "violinist", "vio"],
        value: "./images/village/icon_default_violinist_filled@3x.png"
    },
    {
        keys: ["thaydong", "dong", "cu", "medium", "med"],
        value: "./images/village/icon_default_medium_filled@3x.png"
    },
    {
        keys: ["thaycung", "cung", "ritualist", "ritu", "rit"],
        value: "./images/village/icon_default_ritualist_filled@3x.png"
    },
    {
        keys: ["nguoigoihon", "goihon", "conjuror", "conju", "conj"],
        value: "./images/village/icon_default_conjuror_filled@3x.png"
    },
    // Need to update Vietnamese names and abbreviation later
    {
        keys: ["soulbinder"],
        value: "./images/village/icon_default_soulbinder_filled@3x.png"
    },
    {
        keys: ["ferryman"],
        value: "./images/village/icon_default_ferryman_filled@3x.png"
    },
    //
    {
        keys: ["thitruong", "thi", "mayor"],
        value: "./images/village/icon_default_mayor_filled@3x.png"
    },
    {
        keys: ["tholambanh", "banh", "baker"],
        value: "./images/village/icon_default_baker_filled@3x.png"
    },
    {
        keys: ["bagiakhotinh", "gia", "grumpygrandma", "gg"],
        value: "./images/village/icon_default_grumpy_grandma_filled@3x.png"
    },
    {
        keys: ["nguoithuyetgiao", "thuyetgiao", "thuyet", "preacher", "prea"],
        value: "./images/village/icon_default_preacher_filled@3x.png"
    },
    {
        keys: ["phuthuy", "phu", "witch"],
        value: "./images/village/icon_default_witch_filled@3x.png"
    },
    {
        keys: ["thoren", "ren", "forger"],
        value: "./images/village/icon_default_forger_filled@3x.png",
    },
    {
        keys: ["nhathienvanhoc", "thienvan", "astronomer", "astro", "ast"],
        value: "./images/village/icon_default_astronomer_filled@3x.png"
    },
    {
        keys: ["thosanquaithu", "santhu", "beasthunter", "bh"],
        value: "./images/village/icon_default_beast_hunter_filled@3x.png"
    },
    {
        keys: ["nguoidatbay", "trap", "trapper"],
        value: "./images/village/icon_default_trapper_filled@3x.png"
    },
    {
        keys: ["nguoiganco", "ganco", "co", "flagger", "flag"],
        value: "./images/village/icon_default_flagger_filled@3x.png"
    },
    {
        keys: ["caubemiengbu", "mieng", "loudmouth", "lm"],
        value: "./images/village/icon_default_loudmouth_filled@3x.png"
    },
    {
        keys: ["kebaothu", "baothu", "bao", "avenger", "ave", "avg"],
        value: "./images/village/icon_default_avenger_filled@3x.png"
    },
    {
        keys: ["nguoirungchuong", "chuong", "bellringer", "bell", "br"],
        value: "./images/village/icon_default_bellringer_filled@3x.png"
    },
    {
        keys: ["nguoikhaimenh", "khaimenh", "fortuneteller", "ft"],
        value: "./images/village/icon_default_fortune_teller_filled@3x.png"
    },
    {
        keys: ["hoabecon", "hoa", "flowerchild", "fc"],
        value: "./images/village/icon_default_flower_child_filled@3x.png"
    },
    {
        keys: ["nguoiyeuhoabinh", "hoabinh", "pacifist", "paci"],
        value: "./images/village/icon_default_pacifist_filled@3x.png"
    },
    {
        keys: ["masoi", "soi", "soithuong", "werewolf", "regularwerewolf"],
        value: "./images/werewolves/icon_default_werewolf_filled@3x.png"
    },
    {
        keys: ["soitre", "tre", "juniorwerewolf", "juniorww", "jww", "jw"],
        value: "./images/werewolves/icon_default_junior_werewolf_filled@3x.png"
    },
    {
        keys: ["soiphantach", "soitach", "splitwolf", "splitww", "splitw"],
        value: "./images/werewolves/icon_default_split_wolf_filled@3x.png"
    },
    {
        keys: ["soimeocon", "soimeo", "meo", "kittenwolf", "kittenw", "kww", "kw"],
        value: "./images/werewolves/icon_default_kitten_wolf_filled@3x.png"
    },
    {
        keys: ["soithaotung", "soitung", "tung", "wolffluencer", "wolff", "wlf"],
        value: "./images/werewolves/icon_default_wolffluencer_filled@3x.png"
    },
    {
        keys: ["soiacmong", "soimong", "nightmarewerewolf", "nightmareww", "nightmarew", "nww", "nw"],
        value: "./images/werewolves/icon_default_nightmare_werewolf_filled@3x.png"
    },
    {
        keys: ["soitathuat", "soita", "voodoowerewolf", "voodoowolf", "voodooww", "voodoow", "voodoo", "vww", "vw"],
        value: "./images/werewolves/icon_default_voodoo_werewolf_filled@3x.png"
    },
    {
        keys: ["soibaoto", "soibao", "stormwolf", "stormww", "stormw"],
        value: "./images/werewolves/icon_default_storm_wolf_filled@3x.png"
    },
    {
        keys: ["soidamlay", "soidam", "soilay", "swampwolf", "swampww", "swampw"],
        value: "./images/werewolves/icon_default_swamp_wolf_filled@3x.png"
    },
    {
        keys: ["soiphapsu", "soiphap", "wolfshaman", "shamanww", "wsham", "shamw"],
        value: "./images/werewolves/icon_default_wolf_shaman_filled@3x.png"
    },
    {
        keys: ["soiluadao", "soilua", "wolftrickster", "tricksterww", "tricksterw", "wwt", "wt"],
        value: "./images/werewolves/icon_default_wolf_trickster_filled@3x.png"
    },
    {
        keys: ["soimoho", "moho", "confusionwolf", "confusionww", "confusionw", "cww", "cw"],
        value: "./images/werewolves/icon_default_confusion_wolf_filled@3x.png"
    },
    {
        keys: ["soibienkich", "bienkich", "soibien", "wolfscribe", "scribeww", "scribew"],
        value: "./images/werewolves/icon_default_wolf_scribe_filled@3x.png",
    },
    {
        keys: ["soihacam", "soihac", "shadowwolf", "shadowww", "sww", "sw"],
        value: "./images/werewolves/icon_default_shadow_wolf_filled@3x.png"
    },
    {
        keys: ["soidiencuong", "cuong", "soicuong", "werewolfberserk", "berserkwolf", "berserkww", "berserkw", "bw", "bww", "wwb", "wb"],
        value: "./images/werewolves/icon_default_werewolf_berserk_filled@3x.png"
    },
    {
        keys: ["soidocto", "soidoc", "toxicwolf", "toxicww", "toxicw", "tw", "tww"],
        value: "./images/werewolves/icon_default_toxic_wolf_filled@3x.png"
    },
    {
        keys: ["soihove", "soiho", "guardianwolf", "guardianww", "guardianw", "gww", "gw"],
        value: "./images/werewolves/icon_default_guardian_wolf_filled@3x.png"
    },
    {
        keys: ["soihoabinh", "soihoa", "wolfpacifist", "pacifistwolf", "pacifistww", "pacifistw", "pww", "pw", "wwp", "wp"],
        value: "./images/werewolves/icon_default_wolf_pacifist_filled@3x.png"
    },
    {
        keys: ["soithach", "jellywolf", "jellyww", "jellyw"],
        value: "./images/werewolves/icon_default_jelly_wolf_filled@3x.png"
    },
    {
        keys: ["soilichlam", "gentlewolf", "gentleww", "gentlew"],
        value: "./images/werewolves/icon_default_gentlewolf_filled@3x.png"
    },
    {
        keys: ["soidaudan", "soidau", "soialpha", "alphawerewolf", "alphaww", "alphaw", "alpha"],
        value: "./images/werewolves/icon_default_alpha_werewolf_filled@3x.png"
    },
    {
        keys: ["soibuongbinh", "soibuong", "stubbornwerewolf", "stubbornww", "stubbornw", "stubborn"],
        value: "./images/werewolves/icon_default_stubborn_werewolf_filled@3x.png",
    },
    {
        keys: ["soichieuhon", "soichieu", "soisummoner", "wolfsummoner", "summonerwolf", "summonerww", "summonerw"],
        value: "./images/werewolves/icon_default_wolf_summoner_filled@3x.png"
    },
    {
        keys: ["soima", "soighost", "ghostwolf", "ghostww", "ghostw"],
        value: "./images/werewolves/icon_default_ghost_wolf_filled@3x.png"
    },
    {
        keys: ["soitientri", "soitri", "wolfseer", "wseer", "ws"],
        value: "./images/werewolves/icon_default_wolf_seer_filled@3x.png"
    },
    {
        keys: ["soiphuthuy", "soiphu", "sorcerer", "sorc"],
        value: "./images/werewolves/icon_default_sorcerer_filled@3x.png"
    },
    {
        keys: ["soimu", "blindwerewolf", "blindww", "blindw"],
        value: "./images/werewolves/icon_default_blind_werewolf_filled@3x.png"
    },
    {
        keys: ["soitiectung", "soitiec", "partyww", "partyw", "partywolf", "wwparty", "wparty", "wolfparty"],
        value: "./images/werewolves/icon_default_party_wolf_filled@3x.png"
    },
    {
        keys: ["kehammomasoi", "fansoi", "soifan", "werewolffan", "fanwolf"],
        value: "./images/werewolves/icon_default_werewolf_fan_filled@3x.png"
    },
    {
        keys: ["thangngo", "ngo", "fool"],
        value: "./images/solo/icon_default_fool_filled@3x.png"
    },
    {
        keys: ["thosannguoi", "sannguoi", "headhunter", "hh"],
        value: "./images/solo/icon_default_headhunter_filled@3x.png"
    },
    {
        keys: ["kehonloan", "honloan", "hon", "anarchist"],
        value: "./images/solo/icon_default_anarchist_filled@3x.png"
    },
    {
        keys: ["satnhanhangloat", "sat", "serialkiller", "sk"],
        value: "./images/solo/icon_default_serial_killer_filled@3x.png"
    },
    {
        keys: ["keanthitnguoi", "thit", "cannibal", "canni"],
        value: "./images/solo/icon_default_cannibal_filled@3x.png"
    },
    {
        keys: ["thamtuacma", "thamac", "thamma", "evildetective", "edet"],
        value: "./images/solo/icon_default_evil_detective_filled@3x.png",
    },
    {
        keys: ["kephonghoa", "hoa", "arsonist", "arson", "arso"],
        value: "./images/solo/icon_default_arsonist_filled@3x.png"
    },
    {
        keys: ["kedatbom", "bom", "bomber", "bomb"],
        value: "./images/solo/icon_default_bomber_filled@3x.png",
    },
    {
        keys: ["nhagiakim", "giakim", "kim", "alchemist", "alch", "alc"],
        value: "./images/solo/icon_default_alchemist_filled@3x.png"
    },
    {
        keys: ["nhanngu", "ngu", "siren"],
        value: "./images/solo/icon_default_siren_filled@3x.png"
    },
    {
        keys: ["tintac", "tac", "corruptor", "corr", "cor"],
        value: "./images/solo/icon_default_corruptor_filled@3x.png"
    },
    {
        keys: ["satnhananhthuat", "satanh", "anh", "illusionist", "illu"],
        value: "./images/solo/icon_default_illusionist_filled@3x.png",
    },
    {
        keys: ["acdich", "blight"],
        value: "./images/solo/icon_default_blight_filled@3x.png",
    },
    {
        keys: ["kebienhinh", "bienhinh", "shapeshifter", "shapeshift", "shaper", "shape", "sp", "sh", "sf"],
        value: "./images/solo/icon_default_shapeshifter_filled@3x.png",
    },
    {
        keys: ["condo", "con", "bandit", "bd"],
        value: "./images/solo/icon_default_bandit_filled@3x.png"
    },
    {
        keys: ["kedongpham", "dongpham", "accomplice", "acco", "acc"],
        value: "./images/solo/icon_default_accomplice_filled@3x.png"
    },
    {
        keys: ["giaochu", "giao", "sectleader", "sl", "sect"],
        value: "./images/solo/icon_default_sect_leader_filled@3x.png"
    },
    {
        keys: ["xacsong", "xac", "zombie", "zom", "zb"],
        value: "./images/solo/icon_default_zombie_filled@3x.png"
    },
    {
        keys: ["kexuigiuc", "xuigiuc", "xui", "instigator", "insti", "inst"],
        value: "./images/solo/icon_default_instigator_filled@3x.png"
    },
    {
        keys: ["bansoi", "ban", "cursed", "cur"],
        value: "./images/others/icon_default_cursed_filled@3x.png"
    },
    {
        keys: ["ketrommo", "trommo", "graverobber", "gr"],
        value: "./images/others/icon_default_grave_robber_filled@3x.png"
    },
    {
        keys: ["kevodanh", "vodanh", "lurker"],
        value: "./images/others/icon_default_lurker_filled@3x.png",
    },
    {
        keys: ["thantinhyeu", "cupid", "cp"],
        value: "./images/others/icon_default_cupid_filled@3x.png"
    },
    {
        keys: ["danlang", "danthuong", "bachia", "villager", "normalvillager"],
        value: "./images/others/icon_default_villager_filled@3x.png"
    },
    {
        keys: ["tongthong", "president"],
        value: "./images/others/icon_default_president_filled@3x.png"
    },
    {
        keys: ["satthu", "assassin"],
        value: "./images/others/icon_default_assassin_filled@3x.png"
    },
    {
        keys: ["thophucsinh", "tho", "easterbunny", "bunny", "eb"],
        value: "./images/others/icon_default_easter_bunny_filled@3x.png",
    },
    {
        keys: ["vuabingo", "bingo", "pumpkinking", "pk"],
        value: "./images/others/icon_default_pumpkin_king_filled@3x.png",
    },
    {
        keys: ["onggianoel", "santa"],
        value: "./images/others/icon_default_santa_filled@3x.png"
    },
    {
        keys: ["danlangthuongngaunhien", "rd", "randomregularvillager", "rrv"],
        value: "./images/random/icon_default_random_villager_normal_filled@3x.png"
    },
    {
        keys: ["danlangmanhngaunhien", "rs", "randomstrongvillager", "rsv"],
        value: "./images/random/icon_default_random_villager_strong_filled@3x.png"
    },
    {
        keys: ["randomprotector"],
        value: "./images/random/icon_default_random_protector@3x.png",
    },
    {
        keys: ["randomdoctor"],
        value: "./images/random/icon_default_random_doctor@3x.png"
    },
    {
        keys: ["randominformation"],
        value: "./images/random/icon_default_random_information@3x.png"
    },
    {
        keys: ["randominfosecondary"],
        value: "./images/random/icon_default_random_info_secondary@3x.png"
    },
    {
        keys: ["randomsheriff"],
        value: "./images/random/icon_default_random_sheriff@3x.png"
    },
    {
        keys: ["randomcontrol"],
        value: "./images/random/icon_default_random_control@3x.png"
    },
    {
        keys: ["randomvillagekiller"],
        value: "./images/random/icon_default_random_villagekiller@3x.png",
    },
    {
        keys: ["randomwitch"],
        value: "./images/random/icon_default_random_witch@3x.png"
    },
    {
        keys: ["randomsupport"],
        value: "./images/random/icon_default_random_support@3x.png"
    },
    {
        keys: ["randomvotemanipulator"],
        value: "./images/random/icon_default_random_vote_manipulator@3x.png"
    },
    {
        keys: ["randomwerewolf", "rww", "rw"],
        value: "./images/random/icon_default_random_werewolf_filled@3x.png",
    },
    {
        keys: ["randomwerewolfstrong"],
        value: "./images/random/icon_default_random_werewolf_strong@3x.png",
    },
    {
        keys: ["randomwerewolfweak"],
        value: "./images/random/icon_default_random_werewolf_weak@3x.png",
    },
    {
        keys: ["randomwerewolfinfo"],
        value: "./images/random/icon_default_random_werewolf_info@3x.png",
    },
    {
        keys: ["randomshaman"],
        value: "./images/random/icon_default_random_shaman@3x.png",
    },
    {
        keys: ["randomcrowdcontrol"],
        value: "./images/random/icon_default_random_crowd_control@3x.png",
    },
    {
        keys: ["randomrolechanged"],
        value: "./images/random/icon_default_random_rolechanged@3x.png",
    },
    {
        keys: ["randomvoting", "rv"],
        value: "./images/random/icon_default_random_voting_filled@3x.png",
    },
    {
        keys: ["randomkiller", "rk"],
        value: "./images/random/icon_default_random_killer_filled@3x.png",
    },
    {
        keys: ["randomteamrole"],
        value: "./images/random/icon_default_random_teamrole@3x.png",
    },
    {
        keys: ["randomsquid"],
        value: "./images/random/icon_default_random_squid@3x.png",
    },
    {
        keys: ["randomall"],
        value: "./images/random/icon_default_random_all_filled@3x.png"
    }
]

iconMappings.forEach(mapping => {
    mapping.keys.forEach(key => {
        iconMap[key] = mapping.value;
    });
});

// General icons

const generalOptions = [
    "marker",
    "different",
    "same",
    "good",
    "evil",
    "unknown",
    "blue",
    "red",
    "village",
    "notvillage",
    "werewolfteam",
    "notwerewolfteam",
    "solo",
    "notsolo",
    "hhtg",
    "instirecruit",
    "lover",
    "morticiansuspect",
    "nightwatchmanprotect",
    "rlvisited",
    "sectmember",
    "sheriffsuspect",
    "violinistresulthappy",
    "violinistresultsad",
];

// Village icons

const villageOptions = [
    "doctor",
    "nightwatchman",
    "butcher",
    "bodyguard",
    "toughguy",
    "seerapprentice",
    "vigilante",
    "gunner",
    "bully",
    "jailer",
    "warden",
    "redlady",
    "ghostlady",
    "priest",
    "marksman",
    "judge",
    "seer",
    "analyst",
    "auraseer",
    "spiritseer",
    "gambler",
    "detective",
    "mortician",
    "sheriff",
    "violinist",
    "medium",
    "ritualist",
    "conjuror",
    "soulbinder",
    "ferryman",
    "mayor",
    "baker",
    "grumpygrandma",
    "preacher",
    "witch",
    "forger",
    "astronomer",
    "beasthunter",
    "trapper",
    "flagger",
    "loudmouth",
    "avenger",
    "bellringer",
    "fortuneteller",
    "flowerchild",
    "pacifist"
];

// Werewolf icons

const werewolvesOptions = [
    "werewolf",
    "juniorwerewolf",
    "splitwolf",
    "kittenwolf",
    "wolffluencer",
    "nightmarewerewolf",
    "voodoowerewolf",
    "stormwolf",
    "swampwolf",
    "wolfshaman",
    "wolftrickster",
    "confusionwolf",
    "wolfscribe",
    "shadowwolf",
    "werewolfberserk",
    "toxicwolf",
    "guardianwolf",
    "wolfpacifist",
    "jellywolf",
    "gentlewolf",
    "alphawerewolf",
    "stubbornwerewolf",
    "wolfsummoner",
    "ghostwolf",
    "wolfseer",
    "sorcerer",
    "blindwerewolf",
    "werewolffan",
];

// Solo icons

const soloOptions = [
    "fool",
    "headhunter",
    "anarchist",
    "serialkiller",
    "cannibal",
    "evildetective",
    "arsonist",
    "bomber",
    "alchemist",
    "siren",
    "corruptor",
    "illusionist",
    "blight",
    "shapeshifter",
    "bandit",
    "accomplice",
    "sectleader",
    "zombie",
    "instigator"
];

// Others icons

const othersOptions = [
    "cursed",
    "graverobber",
    "lurker",
    "cupid",
    "villager",
    "president",
    "assassin",
    "easterbunny",
    "pumpkinking",
    "santa",
    "partywolf"
];

// Random icons

const randomOptions = [
    "randomregularvillager",
    "randomstrongvillager",
    "randomprotector",
    "randomdoctor",
    "randominformation",
    "randominfosecondary",
    "randomsheriff",
    "randomcontrol",
    "randomvillagekiller",
    "randomwitch",
    "randomsupport",
    "randomvotemanipulator",
    "randomwerewolf",
    "randomwerewolfstrong",
    "randomwerewolfweak",
    "randomwerewolfinfo",
    "randomshaman",
    "randomcrowdcontrol",
    "randomrolechanged",
    "randomvoting",
    "randomkiller",
    "randomteamrole",
    "randomsquid",
    "randomall",
];