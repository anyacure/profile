document.addEventListener('DOMContentLoaded', () => {
    const recommendations = [
    {
        "title": "Frieren: Beyond Journey's End",
        "imageUrl": "https://myanimelist.net/images/anime/1015/138006l.jpg",
        "score": 9.27,
        "studio": "Madhouse",
        "genres": [
            "Adventure",
            "Award Winning",
            "Drama",
            "Fantasy"
        ],
        "url": "https://myanimelist.net/anime/52991/Sousou_no_Frieren"
    },
    {
        "title": "Steel Ball Run: JoJo's Bizarre Adventure",
        "imageUrl": "https://myanimelist.net/images/anime/1448/154111l.jpg",
        "score": 9.16,
        "studio": "David Production",
        "genres": [
            "Action",
            "Adventure",
            "Mystery",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/61469/Steel_Ball_Run__JoJo_no_Kimyou_na_Bouken"
    },
    {
        "title": "Fullmetal Alchemist: Brotherhood",
        "imageUrl": "https://myanimelist.net/images/anime/1208/94745l.jpg",
        "score": 9.11,
        "studio": "Bones",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "url": "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"
    },
    {
        "title": "Chainsaw Man \u2013 The Movie: Reze Arc",
        "imageUrl": "https://myanimelist.net/images/anime/1763/150638l.jpg",
        "score": 9.09,
        "studio": "MAPPA",
        "genres": [
            "Action",
            "Fantasy"
        ],
        "url": "https://myanimelist.net/anime/57555/Chainsaw_Man_Movie__Reze-hen"
    },
    {
        "title": "Steins;Gate",
        "imageUrl": "https://myanimelist.net/images/anime/1935/127974l.jpg",
        "score": 9.07,
        "studio": "White Fox",
        "genres": [
            "Drama",
            "Sci-Fi",
            "Suspense"
        ],
        "url": "https://myanimelist.net/anime/9253/Steins_Gate"
    },
    {
        "title": "Attack on Titan Season 3 Part 2",
        "imageUrl": "https://myanimelist.net/images/anime/1517/100633l.jpg",
        "score": 9.05,
        "studio": "Wit Studio",
        "genres": [
            "Action",
            "Drama",
            "Suspense"
        ],
        "url": "https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2"
    },
    {
        "title": "Gintama Season 4",
        "imageUrl": "https://myanimelist.net/images/anime/3/72078l.jpg",
        "score": 9.05,
        "studio": "Bandai Namco Pictures",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/28977/Gintama\u00b0"
    },
    {
        "title": "Gintama: The Very Final",
        "imageUrl": "https://myanimelist.net/images/anime/1245/116760l.jpg",
        "score": 9.05,
        "studio": "Bandai Namco Pictures",
        "genres": [
            "Action",
            "Comedy",
            "Drama",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/39486/Gintama__The_Final"
    },
    {
        "title": "Hunter x Hunter",
        "imageUrl": "https://myanimelist.net/images/anime/1337/99013l.jpg",
        "score": 9.03,
        "studio": "Madhouse",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "url": "https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011"
    },
    {
        "title": "One Piece Fan Letter",
        "imageUrl": "https://myanimelist.net/images/anime/1455/146229l.jpg",
        "score": 9.02,
        "studio": "Toei Animation",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "url": "https://myanimelist.net/anime/60022/One_Piece_Fan_Letter"
    },
    {
        "title": "Gintama Season 2",
        "imageUrl": "https://myanimelist.net/images/anime/4/50361l.jpg",
        "score": 9.02,
        "studio": "Sunrise",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/9969/Gintama"
    },
    {
        "title": "Gintama: Enchousen",
        "imageUrl": "https://myanimelist.net/images/anime/1452/123686l.jpg",
        "score": 9.02,
        "studio": "Sunrise",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/15417/Gintama__Enchousen"
    },
    {
        "title": "Legend of the Galactic Heroes",
        "imageUrl": "https://myanimelist.net/images/anime/1976/142016l.jpg",
        "score": 9.02,
        "studio": "K-Factory",
        "genres": [
            "Drama",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/820/Ginga_Eiyuu_Densetsu"
    },
    {
        "title": "Gintama Season 5",
        "imageUrl": "https://myanimelist.net/images/anime/3/83528l.jpg",
        "score": 8.98,
        "studio": "Bandai Namco Pictures",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/34096/Gintama"
    },
    {
        "title": "Bleach: Thousand-Year Blood War",
        "imageUrl": "https://myanimelist.net/images/anime/1908/135431l.jpg",
        "score": 8.98,
        "studio": "Studio Pierrot",
        "genres": [
            "Action",
            "Adventure",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen"
    },
    {
        "title": "Kaguya-sama: Love is War -Ultra Romantic-",
        "imageUrl": "https://myanimelist.net/images/anime/1160/122627l.jpg",
        "score": 8.96,
        "studio": "A-1 Pictures",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "url": "https://myanimelist.net/anime/43608/Kaguya-sama_wa_Kokurasetai__Ultra_Romantic"
    },
    {
        "title": "Frieren: Beyond Journey's End Season 2",
        "imageUrl": "https://myanimelist.net/images/anime/1921/154528l.jpg",
        "score": 8.94,
        "studio": "Madhouse",
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "url": "https://myanimelist.net/anime/59978/Sousou_no_Frieren_2nd_Season"
    },
    {
        "title": "Fruits Basket: The Final Season",
        "imageUrl": "https://myanimelist.net/images/anime/1085/114792l.jpg",
        "score": 8.94,
        "studio": "TMS Entertainment",
        "genres": [
            "Drama",
            "Romance",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/42938/Fruits_Basket__The_Final"
    },
    {
        "title": "Clannad: After Story",
        "imageUrl": "https://myanimelist.net/images/anime/1299/110774l.jpg",
        "score": 8.93,
        "studio": "Kyoto Animation",
        "genres": [
            "Drama",
            "Romance"
        ],
        "url": "https://myanimelist.net/anime/4181/Clannad__After_Story"
    },
    {
        "title": "Gintama",
        "imageUrl": "https://myanimelist.net/images/anime/10/73274l.jpg",
        "score": 8.93,
        "studio": "Sunrise",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/918/Gintama"
    },
    {
        "title": "A Silent Voice",
        "imageUrl": "https://myanimelist.net/images/anime/1122/96435l.jpg",
        "score": 8.93,
        "studio": "Kyoto Animation",
        "genres": [
            "Award Winning",
            "Drama"
        ],
        "url": "https://myanimelist.net/anime/28851/Koe_no_Katachi"
    },
    {
        "title": "Code Geass: Lelouch of the Rebellion R2",
        "imageUrl": "https://myanimelist.net/images/anime/1088/135089l.jpg",
        "score": 8.92,
        "studio": "Sunrise",
        "genres": [
            "Award Winning",
            "Drama",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/2904/Code_Geass__Hangyaku_no_Lelouch_R2"
    },
    {
        "title": "The Apothecary Diaries Season 2",
        "imageUrl": "https://myanimelist.net/images/anime/1025/147458l.jpg",
        "score": 8.91,
        "studio": "OLM",
        "genres": [
            "Drama",
            "Mystery"
        ],
        "url": "https://myanimelist.net/anime/58514/Kusuriya_no_Hitorigoto_2nd_Season"
    },
    {
        "title": "March Comes In Like a Lion 2nd Season",
        "imageUrl": "https://myanimelist.net/images/anime/3/88469l.jpg",
        "score": 8.9,
        "studio": "Shaft",
        "genres": [
            "Drama"
        ],
        "url": "https://myanimelist.net/anime/35180/3-gatsu_no_Lion_2nd_Season"
    },
    {
        "title": "Gintama: The Movie: The Final Chapter: Be Forever Yorozuya",
        "imageUrl": "https://myanimelist.net/images/anime/10/51723l.jpg",
        "score": 8.89,
        "studio": "Sunrise",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/15335/Gintama_Movie_2__Kanketsu-hen_-_Yorozuya_yo_Eien_Nare"
    },
    {
        "title": "Monster",
        "imageUrl": "https://myanimelist.net/images/anime/10/18793l.jpg",
        "score": 8.89,
        "studio": "Madhouse",
        "genres": [
            "Drama",
            "Mystery",
            "Suspense"
        ],
        "url": "https://myanimelist.net/anime/19/Monster"
    },
    {
        "title": "Gintama. Silver Soul Arc - Second Half War",
        "imageUrl": "https://myanimelist.net/images/anime/1776/96566l.jpg",
        "score": 8.88,
        "studio": "Bandai Namco Pictures",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/37491/Gintama_Shirogane_no_Tamashii-hen_-_Kouhan-sen"
    },
    {
        "title": "Attack on Titan: Final Season - The Final Chapters",
        "imageUrl": "https://myanimelist.net/images/anime/1279/131078l.jpg",
        "score": 8.86,
        "studio": "MAPPA",
        "genres": [
            "Action",
            "Drama",
            "Suspense"
        ],
        "url": "https://myanimelist.net/anime/51535/Shingeki_no_Kyojin__The_Final_Season_-_Kanketsu-hen"
    },
    {
        "title": "Owarimonogatari Second Season",
        "imageUrl": "https://myanimelist.net/images/anime/6/87322l.jpg",
        "score": 8.86,
        "studio": "Shaft",
        "genres": [
            "Comedy",
            "Mystery",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/35247/Owarimonogatari_2nd_Season"
    },
    {
        "title": "The Apothecary Diaries",
        "imageUrl": "https://myanimelist.net/images/anime/1708/138033l.jpg",
        "score": 8.85,
        "studio": "OLM",
        "genres": [
            "Drama",
            "Mystery"
        ],
        "url": "https://myanimelist.net/anime/54492/Kusuriya_no_Hitorigoto"
    },
    {
        "title": "Kingdom Season 3",
        "imageUrl": "https://myanimelist.net/images/anime/1443/111830l.jpg",
        "score": 8.84,
        "studio": "Studio Pierrot",
        "genres": [
            "Action"
        ],
        "url": "https://myanimelist.net/anime/40682/Kingdom_3rd_Season"
    },
    {
        "title": "Attack on Titan: The Last Attack",
        "imageUrl": "https://myanimelist.net/images/anime/1379/145452l.jpg",
        "score": 8.83,
        "studio": "MAPPA",
        "genres": [
            "Action",
            "Drama",
            "Suspense"
        ],
        "url": "https://myanimelist.net/anime/59571/Shingeki_no_Kyojin_Movie__Kanketsu-hen_-_The_Last_Attack"
    },
    {
        "title": "Violet Evergarden: The Movie",
        "imageUrl": "https://myanimelist.net/images/anime/1825/110716l.jpg",
        "score": 8.83,
        "studio": "Kyoto Animation",
        "genres": [
            "Award Winning",
            "Drama"
        ],
        "url": "https://myanimelist.net/anime/37987/Violet_Evergarden_Movie"
    },
    {
        "title": "Vinland Saga Season 2",
        "imageUrl": "https://myanimelist.net/images/anime/1170/124312l.jpg",
        "score": 8.82,
        "studio": "MAPPA",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "url": "https://myanimelist.net/anime/49387/Vinland_Saga_Season_2"
    },
    {
        "title": "Your Name.",
        "imageUrl": "https://myanimelist.net/images/anime/5/87048l.jpg",
        "score": 8.82,
        "studio": "CoMix Wave Films",
        "genres": [
            "Award Winning",
            "Drama"
        ],
        "url": "https://myanimelist.net/anime/32281/Kimi_no_Na_wa"
    },
    {
        "title": "Gintama. Silver Soul Arc",
        "imageUrl": "https://myanimelist.net/images/anime/12/89603l.jpg",
        "score": 8.81,
        "studio": "Bandai Namco Pictures",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/36838/Gintama_Shirogane_no_Tamashii-hen"
    },
    {
        "title": "Journal with Witch",
        "imageUrl": "https://myanimelist.net/images/anime/1791/154233l.jpg",
        "score": 8.8,
        "studio": "Shuka",
        "genres": [
            "Drama"
        ],
        "url": "https://myanimelist.net/anime/58788/Ikoku_Nikki"
    },
    {
        "title": "Tomorrow's Joe 2",
        "imageUrl": "https://myanimelist.net/images/anime/3/45028l.jpg",
        "score": 8.8,
        "studio": "Tokyo Movie Shinsha",
        "genres": [
            "Drama",
            "Sports"
        ],
        "url": "https://myanimelist.net/anime/2921/Ashita_no_Joe_2"
    },
    {
        "title": "Attack on Titan: Final Season",
        "imageUrl": "https://myanimelist.net/images/anime/1000/110531l.jpg",
        "score": 8.79,
        "studio": "MAPPA",
        "genres": [
            "Action",
            "Drama",
            "Suspense"
        ],
        "url": "https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season"
    },
    {
        "title": "Mob Psycho 100 II",
        "imageUrl": "https://myanimelist.net/images/anime/1918/96303l.jpg",
        "score": 8.78,
        "studio": "Bones",
        "genres": [
            "Action",
            "Comedy",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/37510/Mob_Psycho_100_II"
    },
    {
        "title": "Kizumonogatari Part 3: Cold-Blooded",
        "imageUrl": "https://myanimelist.net/images/anime/1084/112813l.jpg",
        "score": 8.78,
        "studio": "Shaft",
        "genres": [
            "Action",
            "Mystery",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/31758/Kizumonogatari_III__Reiketsu-hen"
    },
    {
        "title": "Vinland Saga",
        "imageUrl": "https://myanimelist.net/images/anime/1500/103005l.jpg",
        "score": 8.78,
        "studio": "Wit Studio",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "url": "https://myanimelist.net/anime/37521/Vinland_Saga"
    },
    {
        "title": "Fighting Spirit",
        "imageUrl": "https://myanimelist.net/images/anime/4/86334l.jpg",
        "score": 8.78,
        "studio": "Madhouse",
        "genres": [
            "Sports"
        ],
        "url": "https://myanimelist.net/anime/263/Hajime_no_Ippo"
    },
    {
        "title": "Haikyu!! 3rd Season",
        "imageUrl": "https://myanimelist.net/images/anime/7/81992l.jpg",
        "score": 8.77,
        "studio": "Production I.G",
        "genres": [
            "Sports"
        ],
        "url": "https://myanimelist.net/anime/32935/Haikyuu_Karasuno_Koukou_vs_Shiratorizawa_Gakuen_Koukou"
    },
    {
        "title": "Spirited Away",
        "imageUrl": "https://myanimelist.net/images/anime/6/79597l.jpg",
        "score": 8.77,
        "studio": "Studio Ghibli",
        "genres": [
            "Adventure",
            "Award Winning",
            "Fantasy"
        ],
        "url": "https://myanimelist.net/anime/199/Sen_to_Chihiro_no_Kamikakushi"
    },
    {
        "title": "Attack on Titan: Final Season Part 2",
        "imageUrl": "https://myanimelist.net/images/anime/1948/120625l.jpg",
        "score": 8.77,
        "studio": "MAPPA",
        "genres": [
            "Action",
            "Drama",
            "Suspense"
        ],
        "url": "https://myanimelist.net/anime/48583/Shingeki_no_Kyojin__The_Final_Season_Part_2"
    },
    {
        "title": "Takopi's Original Sin",
        "imageUrl": "https://myanimelist.net/images/anime/1182/149879l.jpg",
        "score": 8.76,
        "studio": "Enishiya",
        "genres": [
            "Drama",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/60489/Takopii_no_Genzai"
    },
    {
        "title": "Monogatari Series: Second Season",
        "imageUrl": "https://myanimelist.net/images/anime/1807/121534l.jpg",
        "score": 8.76,
        "studio": "Shaft",
        "genres": [
            "Comedy",
            "Mystery",
            "Romance",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/17074/Monogatari_Series__Second_Season"
    },
    {
        "title": "Re:ZERO -Starting Life in Another World- Season 4",
        "imageUrl": "https://myanimelist.net/images/anime/1540/155824l.jpg",
        "score": 8.75,
        "studio": "White Fox",
        "genres": [
            "Drama",
            "Fantasy",
            "Suspense"
        ],
        "url": "https://myanimelist.net/anime/61316/Re_Zero_kara_Hajimeru_Isekai_Seikatsu_4th_Season"
    },
    {
        "title": "Cowboy Bebop",
        "imageUrl": "https://myanimelist.net/images/anime/4/19644l.jpg",
        "score": 8.75,
        "studio": "Sunrise",
        "genres": [
            "Action",
            "Award Winning",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/1/Cowboy_Bebop"
    },
    {
        "title": "Witch Hat Atelier",
        "imageUrl": "https://myanimelist.net/images/anime/1726/155542l.jpg",
        "score": 8.74,
        "studio": "BUG FILMS",
        "genres": [
            "Fantasy"
        ],
        "url": "https://myanimelist.net/anime/51553/Tongari_Boushi_no_Atelier"
    },
    {
        "title": "Sound! Euphonium 3",
        "imageUrl": "https://myanimelist.net/images/anime/1216/142086l.jpg",
        "score": 8.73,
        "studio": "Kyoto Animation",
        "genres": [
            "Drama"
        ],
        "url": "https://myanimelist.net/anime/39894/Hibike_Euphonium_3"
    },
    {
        "title": "Bocchi the Rock!",
        "imageUrl": "https://myanimelist.net/images/anime/1448/127956l.jpg",
        "score": 8.73,
        "studio": "CloverWorks",
        "genres": [
            "Comedy"
        ],
        "url": "https://myanimelist.net/anime/47917/Bocchi_the_Rock"
    },
    {
        "title": "Kingdom Season 4",
        "imageUrl": "https://myanimelist.net/images/anime/1566/122794l.jpg",
        "score": 8.73,
        "studio": "Studio Pierrot",
        "genres": [
            "Action"
        ],
        "url": "https://myanimelist.net/anime/50160/Kingdom_4th_Season"
    },
    {
        "title": "One Piece",
        "imageUrl": "https://myanimelist.net/images/anime/1244/138851l.jpg",
        "score": 8.73,
        "studio": "Toei Animation",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "url": "https://myanimelist.net/anime/21/One_Piece"
    },
    {
        "title": "My Hero Academia Final Season",
        "imageUrl": "https://myanimelist.net/images/anime/1959/151055l.jpg",
        "score": 8.72,
        "studio": "Bones Film",
        "genres": [
            "Action"
        ],
        "url": "https://myanimelist.net/anime/60098/Boku_no_Hero_Academia__Final_Season"
    },
    {
        "title": "[Oshi No Ko] Season 3",
        "imageUrl": "https://myanimelist.net/images/anime/1979/153329l.jpg",
        "score": 8.72,
        "studio": "Doga Kobo",
        "genres": [
            "Drama"
        ],
        "url": "https://myanimelist.net/anime/60058/Oshi_no_Ko_3rd_Season"
    },
    {
        "title": "Kingdom Season 5",
        "imageUrl": "https://myanimelist.net/images/anime/1050/139641l.jpg",
        "score": 8.72,
        "studio": "Studio Pierrot",
        "genres": [
            "Action"
        ],
        "url": "https://myanimelist.net/anime/53223/Kingdom_5th_Season"
    },
    {
        "title": "Orb: On the Movements of the Earth",
        "imageUrl": "https://myanimelist.net/images/anime/1749/145922l.jpg",
        "score": 8.72,
        "studio": "Madhouse",
        "genres": [
            "Drama"
        ],
        "url": "https://myanimelist.net/anime/52215/Chi_Chikyuu_no_Undou_ni_Tsuite"
    },
    {
        "title": "Kaguya-sama: Love is War -The First Kiss That Never Ends-",
        "imageUrl": "https://myanimelist.net/images/anime/1670/130060l.jpg",
        "score": 8.72,
        "studio": "A-1 Pictures",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "url": "https://myanimelist.net/anime/52198/Kaguya-sama_wa_Kokurasetai__First_Kiss_wa_Owaranai"
    },
    {
        "title": "Mushi-shi: Next Passage Part 2",
        "imageUrl": "https://myanimelist.net/images/anime/9/68095l.jpg",
        "score": 8.72,
        "studio": "Artland",
        "genres": [
            "Adventure",
            "Mystery",
            "Slice of Life",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/24701/Mushishi_Zoku_Shou_2nd_Season"
    },
    {
        "title": "Mob Psycho 100 III",
        "imageUrl": "https://myanimelist.net/images/anime/1228/125011l.jpg",
        "score": 8.72,
        "studio": "Bones",
        "genres": [
            "Action",
            "Comedy",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/50172/Mob_Psycho_100_III"
    },
    {
        "title": "86 Eighty-Six Part 2",
        "imageUrl": "https://myanimelist.net/images/anime/1321/117508l.jpg",
        "score": 8.72,
        "studio": "A-1 Pictures",
        "genres": [
            "Drama",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/48569/86_Part_2"
    },
    {
        "title": "Idol",
        "imageUrl": "https://myanimelist.net/images/anime/1921/135489l.jpg",
        "score": 8.71,
        "studio": "Doga Kobo",
        "genres": [],
        "url": "https://myanimelist.net/anime/55016/Idol"
    },
    {
        "title": "Code Geass: Lelouch of the Rebellion",
        "imageUrl": "https://myanimelist.net/images/anime/1032/135088l.jpg",
        "score": 8.71,
        "studio": "Sunrise",
        "genres": [
            "Award Winning",
            "Drama",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch"
    },
    {
        "title": "The First Slam Dunk",
        "imageUrl": "https://myanimelist.net/images/anime/1745/129284l.jpg",
        "score": 8.71,
        "studio": "Toei Animation",
        "genres": [
            "Award Winning",
            "Sports"
        ],
        "url": "https://myanimelist.net/anime/45649/The_First_Slam_Dunk"
    },
    {
        "title": "Jujutsu Kaisen Season 2",
        "imageUrl": "https://myanimelist.net/images/anime/1792/138022l.jpg",
        "score": 8.71,
        "studio": "MAPPA",
        "genres": [
            "Action",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/51009/Jujutsu_Kaisen_2nd_Season"
    },
    {
        "title": "Bleach: Thousand-Year Blood War - The Separation",
        "imageUrl": "https://myanimelist.net/images/anime/1164/138058l.jpg",
        "score": 8.7,
        "studio": "Studio Pierrot",
        "genres": [
            "Action",
            "Adventure",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/53998/Bleach__Sennen_Kessen-hen_-_Ketsubetsu-tan"
    },
    {
        "title": "Descending Stories: Showa Genroku Rakugo Shinju",
        "imageUrl": "https://myanimelist.net/images/anime/1493/124765l.jpg",
        "score": 8.7,
        "studio": "Studio Deen",
        "genres": [
            "Drama"
        ],
        "url": "https://myanimelist.net/anime/33095/Shouwa_Genroku_Rakugo_Shinjuu__Sukeroku_Futatabi-hen"
    },
    {
        "title": "Link Click",
        "imageUrl": "https://myanimelist.net/images/anime/1135/114867l.jpg",
        "score": 8.7,
        "studio": "LAN Studio",
        "genres": [
            "Drama",
            "Mystery",
            "Suspense"
        ],
        "url": "https://myanimelist.net/anime/44074/Shiguang_Dailiren"
    },
    {
        "title": "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
        "imageUrl": "https://myanimelist.net/images/anime/1908/120036l.jpg",
        "score": 8.7,
        "studio": "ufotable",
        "genres": [
            "Action",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/47778/Kimetsu_no_Yaiba__Yuukaku-hen"
    },
    {
        "title": "The Dangers in My Heart Season 2",
        "imageUrl": "https://myanimelist.net/images/anime/1643/138581l.jpg",
        "score": 8.69,
        "studio": "Shin-Ei Animation",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "url": "https://myanimelist.net/anime/55690/Boku_no_Kokoro_no_Yabai_Yatsu_2nd_Season"
    },
    {
        "title": "Mushi-shi: Next Passage Part 1",
        "imageUrl": "https://myanimelist.net/images/anime/13/58533l.jpg",
        "score": 8.69,
        "studio": "Artland",
        "genres": [
            "Adventure",
            "Mystery",
            "Slice of Life",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/21939/Mushishi_Zoku_Shou"
    },
    {
        "title": "Violet Evergarden",
        "imageUrl": "https://myanimelist.net/images/anime/1795/95088l.jpg",
        "score": 8.69,
        "studio": "Kyoto Animation",
        "genres": [
            "Drama"
        ],
        "url": "https://myanimelist.net/anime/33352/Violet_Evergarden"
    },
    {
        "title": "Samurai X: Trust and Betrayal",
        "imageUrl": "https://myanimelist.net/images/anime/1656/137618l.jpg",
        "score": 8.69,
        "studio": "Studio Deen",
        "genres": [
            "Action",
            "Drama",
            "Romance"
        ],
        "url": "https://myanimelist.net/anime/44/Rurouni_Kenshin__Meiji_Kenkaku_Romantan_-_Tsuioku-hen"
    },
    {
        "title": "Umamusume: Cinderella Gray Part 2",
        "imageUrl": "https://myanimelist.net/images/anime/1120/152280l.jpg",
        "score": 8.68,
        "studio": "CygamesPictures",
        "genres": [
            "Drama",
            "Sports"
        ],
        "url": "https://myanimelist.net/anime/61930/Uma_Musume__Cinderella_Gray_Part_2"
    },
    {
        "title": "To Be Hero X",
        "imageUrl": "https://myanimelist.net/images/anime/1492/150628l.jpg",
        "score": 8.68,
        "studio": "Pb Animation",
        "genres": [
            "Action"
        ],
        "url": "https://myanimelist.net/anime/53447/Tu_Bian_Yingxiong_X"
    },
    {
        "title": "Great Teacher Onizuka",
        "imageUrl": "https://myanimelist.net/images/anime/13/11460l.jpg",
        "score": 8.68,
        "studio": "Studio Pierrot",
        "genres": [
            "Comedy"
        ],
        "url": "https://myanimelist.net/anime/245/Great_Teacher_Onizuka"
    },
    {
        "title": "Kingdom Season 6",
        "imageUrl": "https://myanimelist.net/images/anime/1282/151476l.jpg",
        "score": 8.67,
        "studio": "Studio Pierrot",
        "genres": [
            "Action"
        ],
        "url": "https://myanimelist.net/anime/61517/Kingdom_6th_Season"
    },
    {
        "title": "Demon Slayer: Kimetsu no Yaiba - The Movie: Infinity Castle - Part 1: Akaza Returns",
        "imageUrl": "https://myanimelist.net/images/anime/1681/148216l.jpg",
        "score": 8.67,
        "studio": "ufotable",
        "genres": [
            "Action",
            "Award Winning",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/59192/Kimetsu_no_Yaiba_Movie_1__Mugenjou-hen_-_Akaza_Sairai"
    },
    {
        "title": "Bleach: Thousand-Year Blood War - The Conflict",
        "imageUrl": "https://myanimelist.net/images/anime/1595/144074l.jpg",
        "score": 8.67,
        "studio": "Pierrot Films",
        "genres": [
            "Action",
            "Adventure",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/56784/Bleach__Sennen_Kessen-hen_-_Soukoku-tan"
    },
    {
        "title": "Fighting Spirit: New Challenger",
        "imageUrl": "https://myanimelist.net/images/anime/8/56617l.jpg",
        "score": 8.67,
        "studio": "Madhouse",
        "genres": [
            "Sports"
        ],
        "url": "https://myanimelist.net/anime/5258/Hajime_no_Ippo__New_Challenger"
    },
    {
        "title": "Howl's Moving Castle",
        "imageUrl": "https://myanimelist.net/images/anime/1470/138723l.jpg",
        "score": 8.67,
        "studio": "Studio Ghibli",
        "genres": [
            "Adventure",
            "Award Winning",
            "Drama",
            "Fantasy",
            "Romance"
        ],
        "url": "https://myanimelist.net/anime/431/Howl_no_Ugoku_Shiro"
    },
    {
        "title": "Princess Mononoke",
        "imageUrl": "https://myanimelist.net/images/anime/1355/147277l.jpg",
        "score": 8.67,
        "studio": "Studio Ghibli",
        "genres": [
            "Action",
            "Adventure",
            "Award Winning",
            "Fantasy"
        ],
        "url": "https://myanimelist.net/anime/164/Mononoke_Hime"
    },
    {
        "title": "Jujutsu Kaisen: The Culling Game Part 1",
        "imageUrl": "https://myanimelist.net/images/anime/1659/154920l.jpg",
        "score": 8.66,
        "studio": "MAPPA",
        "genres": [
            "Action",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/57658/Jujutsu_Kaisen__Shimetsu_Kaiyuu_-_Zenpen"
    },
    {
        "title": "Monogatari Series: Off & Monster Season",
        "imageUrl": "https://myanimelist.net/images/anime/1142/146776l.jpg",
        "score": 8.65,
        "studio": "Shaft",
        "genres": [
            "Comedy",
            "Mystery",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/57864/Monogatari_Series__Off___Monster_Season"
    },
    {
        "title": "Umamusume: Pretty Derby - Beginning of a New Era",
        "imageUrl": "https://myanimelist.net/images/anime/1427/142210l.jpg",
        "score": 8.65,
        "studio": "CygamesPictures",
        "genres": [
            "Sports"
        ],
        "url": "https://myanimelist.net/anime/57647/Uma_Musume__Pretty_Derby_-_Shin_Jidai_no_Tobira"
    },
    {
        "title": "Mushi-Shi",
        "imageUrl": "https://myanimelist.net/images/anime/2/73862l.jpg",
        "score": 8.65,
        "studio": "Artland",
        "genres": [
            "Adventure",
            "Mystery",
            "Slice of Life",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/457/Mushishi"
    },
    {
        "title": "Gurren Lagann",
        "imageUrl": "https://myanimelist.net/images/anime/4/5123l.jpg",
        "score": 8.64,
        "studio": "Gainax",
        "genres": [
            "Adventure",
            "Award Winning",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/2001/Tengen_Toppa_Gurren_Lagann"
    },
    {
        "title": "Your Lie in April",
        "imageUrl": "https://myanimelist.net/images/anime/1405/143284l.jpg",
        "score": 8.64,
        "studio": "A-1 Pictures",
        "genres": [
            "Drama",
            "Romance"
        ],
        "url": "https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso"
    },
    {
        "title": "Heaven Official's Blessing Season 2",
        "imageUrl": "https://myanimelist.net/images/anime/1203/139210l.jpg",
        "score": 8.64,
        "studio": "Red Dog Culture House",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "url": "https://myanimelist.net/anime/50399/Tian_Guan_Cifu_Er"
    },
    {
        "title": "Attack on Titan Season 3",
        "imageUrl": "https://myanimelist.net/images/anime/1173/92110l.jpg",
        "score": 8.64,
        "studio": "Wit Studio",
        "genres": [
            "Action",
            "Drama",
            "Suspense"
        ],
        "url": "https://myanimelist.net/anime/35760/Shingeki_no_Kyojin_Season_3"
    },
    {
        "title": "Fate/stay night: Heaven's Feel - III. Spring Song",
        "imageUrl": "https://myanimelist.net/images/anime/1142/112957l.jpg",
        "score": 8.63,
        "studio": "ufotable",
        "genres": [
            "Action",
            "Fantasy"
        ],
        "url": "https://myanimelist.net/anime/33050/Fate_stay_night_Movie__Heavens_Feel_-_III_Spring_Song"
    },
    {
        "title": "Natsume's Book of Friends Season 4",
        "imageUrl": "https://myanimelist.net/images/anime/3/37449l.jpg",
        "score": 8.63,
        "studio": "Brain's Base",
        "genres": [
            "Slice of Life",
            "Supernatural"
        ],
        "url": "https://myanimelist.net/anime/11665/Natsume_Yuujinchou_Shi"
    },
    {
        "title": "Ping Pong the Animation",
        "imageUrl": "https://myanimelist.net/images/anime/1586/146565l.jpg",
        "score": 8.63,
        "studio": "Tatsunoko Production",
        "genres": [
            "Award Winning",
            "Drama",
            "Sports"
        ],
        "url": "https://myanimelist.net/anime/22135/Ping_Pong_the_Animation"
    },
    {
        "title": "Odd Taxi",
        "imageUrl": "https://myanimelist.net/images/anime/1981/113348l.jpg",
        "score": 8.63,
        "studio": "OLM",
        "genres": [
            "Award Winning",
            "Drama",
            "Mystery",
            "Suspense"
        ],
        "url": "https://myanimelist.net/anime/46102/Odd_Taxi"
    },
    {
        "title": "The Master of Diabolism 3",
        "imageUrl": "https://myanimelist.net/images/anime/1634/116782l.jpg",
        "score": 8.63,
        "studio": "B.CMAY PICTURES",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Mystery"
        ],
        "url": "https://myanimelist.net/anime/40434/Mo_Dao_Zu_Shi__Wanjie_Pian"
    },
    {
        "title": "The Legend of Hei 2",
        "imageUrl": "https://myanimelist.net/images/anime/1288/151853l.jpg",
        "score": 8.62,
        "studio": "HMCH",
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "url": "https://myanimelist.net/anime/61952/Luo_Xiaohei_Zhanji_2"
    },
    {
        "title": "Look Back",
        "imageUrl": "https://myanimelist.net/images/anime/1716/142633l.jpg",
        "score": 8.62,
        "studio": "Studio DURIAN",
        "genres": [
            "Award Winning",
            "Drama"
        ],
        "url": "https://myanimelist.net/anime/58125/Look_Back"
    },
    {
        "title": "Made in Abyss",
        "imageUrl": "https://myanimelist.net/images/anime/6/86733l.jpg",
        "score": 8.62,
        "studio": "Kinema Citrus",
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy",
            "Mystery",
            "Sci-Fi"
        ],
        "url": "https://myanimelist.net/anime/34599/Made_in_Abyss"
    }
];

    const navContainer = document.getElementById('genre-nav');
    const sectionsContainer = document.getElementById('anime-sections-container');
    
    // Sort array by score highest to lowest
    recommendations.sort((a,b) => b.score - a.score);

    // Group by primary genre
    const genresMap = new Map();
    recommendations.forEach(anime => {
        let primaryGenre = anime.genres && anime.genres.length > 0 ? anime.genres[0] : 'Other';
        if (!genresMap.has(primaryGenre)) {
            genresMap.set(primaryGenre, []);
        }
        genresMap.get(primaryGenre).push(anime);
    });

    // Create sections dynamically & sort alphabetically
    const sortedGenres = Array.from(genresMap.keys()).sort();

    sortedGenres.forEach(genre => {
        // Create Nav Link
        const genreId = 'category-' + genre.replace(/\s+/g, '-').toLowerCase();
        const navLink = document.createElement('a');
        navLink.href = '#' + genreId;
        navLink.className = 'genre-link';
        navLink.innerText = genre;
        navContainer.appendChild(navLink);

        // Create Section Label
        const sectionLabel = document.createElement('div');
        sectionLabel.className = 'section-label';
        sectionLabel.id = genreId;
        sectionLabel.innerText = genre + ' Recommendations';
        sectionsContainer.appendChild(sectionLabel);

        // Create Grid
        const grid = document.createElement('div');
        grid.className = 'inventory-grid';

        // Populate Grid
        const animeList = genresMap.get(genre);
        animeList.forEach((anime, index) => {
            const idStr = '#' + String(index + 1).padStart(3, '0');
            const card = document.createElement('div');
            card.className = 'inventory-card tilt-element';
            
            let studio = anime.studio || 'Unknown';
            let scoreHTML = `<i class="fa-solid fa-star" style="color: #ffd700; margin-right: 5px;"></i>${anime.score}`;
            
            card.innerHTML = `
                <div class="card-top">
                    <span class="card-id">${idStr}</span>
                    <span style="font-family: 'JetBrains Mono'; font-size: 13px; color: #fff; background: rgba(0,0,0,0.5); padding: 4px 8px; border-radius: 8px; backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.1);">${scoreHTML}</span>
                </div>
                <div class="product-thumb">
                    <img src="${anime.imageUrl}" alt="${anime.title}" onerror="this.src='https://via.placeholder.com/225x330/1e1e28/ffffff?text=No+Cover'">
                </div>
                <div class="product-meta">
                    <div class="product-category">${genre} &bull; ${studio}</div>
                    <div class="product-name">${anime.title}</div>
                </div>
            `;
            
            if (anime.url) {
                card.addEventListener('click', () => {
                    window.open(anime.url, '_blank');
                });
            }
            
            grid.appendChild(card);
        });

        sectionsContainer.appendChild(grid);
    });

    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".tilt-element"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
    }

    const cards = document.querySelectorAll('.inventory-card');
    document.addEventListener('mousemove', e => {
        for(const card of cards) {
            const rect = card.getBoundingClientRect(),
                  x = e.clientX - rect.left,
                  y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    });
});
