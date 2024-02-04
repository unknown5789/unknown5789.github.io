const characters_src = [
    ".\\media\\league\\Aatrox_0.jpg",
    ".\\media\\league\\Ahri_0.jpg",
    ".\\media\\league\\Akali_0.jpg",
    ".\\media\\league\\Akshan_0.jpg",
    ".\\media\\league\\Alistar_0.jpg",
    ".\\media\\league\\Amumu_0.jpg",
    ".\\media\\league\\Anivia_0.jpg",
    ".\\media\\league\\Annie_0.jpg",
    ".\\media\\league\\Aphelios_0.jpg",
    ".\\media\\league\\Ashe_0.jpg",
    ".\\media\\league\\AurelionSol_0.jpg",
    ".\\media\\league\\Azir_0.jpg",
    ".\\media\\league\\Bard_0.jpg",
    ".\\media\\league\\Belveth_0.jpg",
    ".\\media\\league\\Blitzcrank_0.jpg",
    ".\\media\\league\\Brand_0.jpg",
    ".\\media\\league\\Braum_0.jpg",
    ".\\media\\league\\Briar_0.jpg",
    ".\\media\\league\\Caitlyn_0.jpg",
    ".\\media\\league\\Camille_0.jpg",
    ".\\media\\league\\Cassiopeia_0.jpg",
    ".\\media\\league\\Chogath_0.jpg",
    ".\\media\\league\\Corki_0.jpg",
    ".\\media\\league\\Darius_0.jpg",
    ".\\media\\league\\Diana_0.jpg",
    ".\\media\\league\\Draven_0.jpg",
    ".\\media\\league\\DrMundo_0.jpg",
    ".\\media\\league\\Ekko_0.jpg",
    ".\\media\\league\\Elise_0.jpg",
    ".\\media\\league\\Evelynn_0.jpg",
    ".\\media\\league\\Ezreal_0.jpg",
    ".\\media\\league\\FiddleSticks_0.jpg",
    ".\\media\\league\\Fiora_0.jpg",
    ".\\media\\league\\Fizz_0.jpg",
    ".\\media\\league\\Galio_0.jpg",
    ".\\media\\league\\Gangplank_0.jpg",
    ".\\media\\league\\Garen_0.jpg",
    ".\\media\\league\\Gnar_0.jpg",
    ".\\media\\league\\Gragas_0.jpg",
    ".\\media\\league\\Graves_0.jpg",
    ".\\media\\league\\Gwen_0.jpg",
    ".\\media\\league\\Hecarim_0.jpg",
    ".\\media\\league\\Heimerdinger_0.jpg",
    ".\\media\\league\\Hwei_0.jpg",
    ".\\media\\league\\Illaoi_0.jpg",
    ".\\media\\league\\Irelia_0.jpg",
    ".\\media\\league\\Ivern_0.jpg",
    ".\\media\\league\\Janna_0.jpg",
    ".\\media\\league\\JarvanIV_0.jpg",
    ".\\media\\league\\Jax_0.jpg",
    ".\\media\\league\\Jayce_0.jpg",
    ".\\media\\league\\Jhin_0.jpg",
    ".\\media\\league\\Jinx_0.jpg",
    ".\\media\\league\\Kaisa_0.jpg",
    ".\\media\\league\\Kalista_0.jpg",
    ".\\media\\league\\Karma_0.jpg",
    ".\\media\\league\\Karthus_0.jpg",
    ".\\media\\league\\Kassadin_0.jpg",
    ".\\media\\league\\Katarina_0.jpg",
    ".\\media\\league\\Kayle_0.jpg",
    ".\\media\\league\\Kayn_0.jpg",
    ".\\media\\league\\Kennen_0.jpg",
    ".\\media\\league\\Khazix_0.jpg",
    ".\\media\\league\\Kindred_0.jpg",
    ".\\media\\league\\Kled_0.jpg",
    ".\\media\\league\\KogMaw_0.jpg",
    ".\\media\\league\\KSante_0.jpg",
    ".\\media\\league\\Leblanc_0.jpg",
    ".\\media\\league\\LeeSin_0.jpg",
    ".\\media\\league\\Leona_0.jpg",
    ".\\media\\league\\Lillia_0.jpg",
    ".\\media\\league\\Lissandra_0.jpg",
    ".\\media\\league\\Lucian_0.jpg",
    ".\\media\\league\\Lulu_0.jpg",
    ".\\media\\league\\Lux_0.jpg",
    ".\\media\\league\\Malphite_0.jpg",
    ".\\media\\league\\Malzahar_0.jpg",
    ".\\media\\league\\Maokai_0.jpg",
    ".\\media\\league\\MasterYi_0.jpg",
    ".\\media\\league\\Milio_0.jpg",
    ".\\media\\league\\MissFortune_0.jpg",
    ".\\media\\league\\MonkeyKing_0.jpg",
    ".\\media\\league\\Mordekaiser_0.jpg",
    ".\\media\\league\\Morgana_0.jpg",
    ".\\media\\league\\Naafiri_0.jpg",
    ".\\media\\league\\Nami_0.jpg",
    ".\\media\\league\\Nasus_0.jpg",
    ".\\media\\league\\Nautilus_0.jpg",
    ".\\media\\league\\Neeko_0.jpg",
    ".\\media\\league\\Nidalee_0.jpg",
    ".\\media\\league\\Nilah_0.jpg",
    ".\\media\\league\\Nocturne_0.jpg",
    ".\\media\\league\\Nunu_0.jpg",
    ".\\media\\league\\Olaf_0.jpg",
    ".\\media\\league\\Orianna_0.jpg",
    ".\\media\\league\\Ornn_0.jpg",
    ".\\media\\league\\Pantheon_0.jpg",
    ".\\media\\league\\Poppy_0.jpg",
    ".\\media\\league\\Pyke_0.jpg",
    ".\\media\\league\\Qiyana_0.jpg",
    ".\\media\\league\\Quinn_0.jpg",
    ".\\media\\league\\Rakan_0.jpg",
    ".\\media\\league\\Rammus_0.jpg",
    ".\\media\\league\\RekSai_0.jpg",
    ".\\media\\league\\Rell_0.jpg",
    ".\\media\\league\\Renata_0.jpg",
    ".\\media\\league\\Renekton_0.jpg",
    ".\\media\\league\\Rengar_0.jpg",
    ".\\media\\league\\Riven_0.jpg",
    ".\\media\\league\\Rumble_0.jpg",
    ".\\media\\league\\Ryze_0.jpg",
    ".\\media\\league\\Samira_0.jpg",
    ".\\media\\league\\Sejuani_0.jpg",
    ".\\media\\league\\Senna_0.jpg",
    ".\\media\\league\\Seraphine_0.jpg",
    ".\\media\\league\\Sett_0.jpg",
    ".\\media\\league\\Shaco_0.jpg",
    ".\\media\\league\\Shen_0.jpg",
    ".\\media\\league\\Shyvana_0.jpg",
    ".\\media\\league\\Singed_0.jpg",
    ".\\media\\league\\Sion_0.jpg",
    ".\\media\\league\\Sivir_0.jpg",
    ".\\media\\league\\Skarner_0.jpg",
    ".\\media\\league\\Sona_0.jpg",
    ".\\media\\league\\Soraka_0.jpg",
    ".\\media\\league\\Swain_0.jpg",
    ".\\media\\league\\Sylas_0.jpg",
    ".\\media\\league\\Syndra_0.jpg",
    ".\\media\\league\\TahmKench_0.jpg",
    ".\\media\\league\\Taliyah_0.jpg",
    ".\\media\\league\\Talon_0.jpg",
    ".\\media\\league\\Taric_0.jpg",
    ".\\media\\league\\Teemo_0.jpg",
    ".\\media\\league\\Thresh_0.jpg",
    ".\\media\\league\\Tristana_0.jpg",
    ".\\media\\league\\Trundle_0.jpg",
    ".\\media\\league\\Tryndamere_0.jpg",
    ".\\media\\league\\TwistedFate_0.jpg",
    ".\\media\\league\\Twitch_0.jpg",
    ".\\media\\league\\Udyr_0.jpg",
    ".\\media\\league\\Urgot_0.jpg",
    ".\\media\\league\\Varus_0.jpg",
    ".\\media\\league\\Vayne_0.jpg",
    ".\\media\\league\\Veigar_0.jpg",
    ".\\media\\league\\Velkoz_0.jpg",
    ".\\media\\league\\Vex_0.jpg",
    ".\\media\\league\\Vi_0.jpg",
    ".\\media\\league\\Viego_0.jpg",
    ".\\media\\league\\Viktor_0.jpg",
    ".\\media\\league\\Vladimir_0.jpg",
    ".\\media\\league\\Volibear_0.jpg",
    ".\\media\\league\\Warwick_0.jpg",
    ".\\media\\league\\Xayah_0.jpg",
    ".\\media\\league\\Xerath_0.jpg",
    ".\\media\\league\\XinZhao_0.jpg",
    ".\\media\\league\\Yasuo_0.jpg",
    ".\\media\\league\\Yone_0.jpg",
    ".\\media\\league\\Yorick_0.jpg",
    ".\\media\\league\\Yuumi_0.jpg",
    ".\\media\\league\\Zac_0.jpg",
    ".\\media\\league\\Zed_0.jpg",
    ".\\media\\league\\Zeri_0.jpg",
    ".\\media\\league\\Ziggs_0.jpg",
    ".\\media\\league\\Zilean_0.jpg",
    ".\\media\\league\\Zoe_0.jpg",
    ".\\media\\league\\Zyra_0.jpg",
    ];
const characters_name =[
    "Aatrox",
    "Ahri",
    "Akali",
    "Akshan",
    "Alistar",
    "Amumu",
    "Anivia",
    "Annie",
    "Aphelios",
    "Ashe",
    "Aurelion Sol",
    "Azir",
    "Bard",
    "Belveth",
    "Blitzcrank",
    "Brand",
    "Braum",
    "Briar",
    "Caitlyn",
    "Camille",
    "Cassiopeia",
    "Chogath",
    "Corki",
    "Darius",
    "Diana",
    "Draven",
    "DrMundo",
    "Ekko",
    "Elise",
    "Evelynn",
    "Ezreal",
    "FiddleSticks",
    "Fiora",
    "Fizz",
    "Galio",
    "Gangplank",
    "Garen",
    "Gnar",
    "Gragas",
    "Graves",
    "Gwen",
    "Hecarim",
    "Heimerdinger",
    "Hwei",
    "Illaoi",
    "Irelia",
    "Ivern",
    "Janna",
    "JarvanIV",
    "Jax",
    "Jayce",
    "Jhin",
    "Jinx",
    "Kaisa",
    "Kalista",
    "Karma",
    "Karthus",
    "Kassadin",
    "Katarina",
    "Kayle",
    "Kayn",
    "Kennen",
    "Khazix",
    "Kindred",
    "Kled",
    "KogMaw",
    "KSante",
    "Leblanc",
    "LeeSin",
    "Leona",
    "Lillia",
    "Lissandra",
    "Lucian",
    "Lulu",
    "Lux",
    "Malphite",
    "Malzahar",
    "Maokai",
    "MasterYi",
    "Milio",
    "MissFortune",
    "MonkeyKing",
    "Mordekaiser",
    "Morgana",
    "Naafiri",
    "Nami",
    "Nasus",
    "Nautilus",
    "Neeko",
    "Nidalee",
    "Nilah",
    "Nocturne",
    "Nunu",
    "Olaf",
    "Orianna",
    "Ornn",
    "Pantheon",
    "Poppy",
    "Pyke",
    "Qiyana",
    "Quinn",
    "Rakan",
    "Rammus",
    "RekSai",
    "Rell",
    "Renata",
    "Renekton",
    "Rengar",
    "Riven",
    "Rumble",
    "Ryze",
    "Samira",
    "Sejuani",
    "Senna",
    "Seraphine",
    "Sett",
    "Shaco",
    "Shen",
    "Shyvana",
    "Singed",
    "Sion",
    "Sivir",
    "Skarner",
    "Sona",
    "Soraka",
    "Swain",
    "Sylas",
    "Syndra",
    "TahmKench",
    "Taliyah",
    "Talon",
    "Taric",
    "Teemo",
    "Thresh",
    "Tristana",
    "Trundle",
    "Tryndamere",
    "TwistedFate",
    "Twitch",
    "Udyr",
    "Urgot",
    "Varus",
    "Vayne",
    "Veigar",
    "Velkoz",
    "Vex",
    "Vi",
    "Viego",
    "Viktor",
    "Vladimir",
    "Volibear",
    "Warwick",
    "Xayah",
    "Xerath",
    "XinZhao",
    "Yasuo",
    "Yone",
    "Yorick",
    "Yuumi",
    "Zac",
    "Zed",
    "Zeri",
    "Ziggs",
    "Zilean",
    "Zoe",
    "Zyra",
];

let index = 0;
let smash_list = [];
let pass_list = [];

function pass(){
    pass_list.push(characters_name[index]);
    document.getElementById("passTitle").innerHTML = "pass-" + pass_list.length;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(characters_name[index]));
    document.getElementById("passList").appendChild(entry);
    
    index++;
    document.getElementById("name").innerHTML = characters_name[index];
    document.getElementById("character").src = characters_src[index];
}

function smash(){
    smash_list.push(characters_name[index]);
    document.getElementById("smashTitle").innerHTML = "smash-" + smash_list.length;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(characters_name[index]));
    document.getElementById("smashList").appendChild(entry);
    
    if(characters_name[index] === "Aatrox"){
        openModal();
    }

    index++;
    document.getElementById("name").innerHTML = characters_name[index];
    document.getElementById("character").src = characters_src[index];
}