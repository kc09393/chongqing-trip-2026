const itineraries = [
  { date:"9/11", weekday:"五", title:"成都 → 重慶", city:"移動日", lodging:"重慶", tone:"move", note:"送爸媽進安檢後開始獨旅。先確認 NX387 實際由 TFU 或 CTU 起飛，再決定高鐵上車站；今晚只辦入住與吃飯。", items:[
    ["13:00","陪爸媽辦理 NX387 報到","電子票目前只看到成都，出發前再次核對 TFU／CTU 與航廈；約 14:00 在安檢口分開。","成都天府機場 TFU"],
    ["下午至傍晚","成都 → 重慶高鐵","車票已進入售票期；立即選能從爸媽出發機場順接、並抵達重慶北或重慶西的班次。","成都東站"],
    ["晚間","抵達重慶、前往解放碑","帶行李時直接叫車或搭地鐵；辦入住後先確認回程機票與武隆集合點。","重慶北站"],
    ["21:00","解放碑・八一路晚餐","只在飯店附近散步，吃小麵或小份串串，不為第一晚硬排洪崖洞。","解放碑住宿區"]
  ]},
  { date:"9/12", weekday:"六", title:"潮流老城・洪崖夜景", city:"渝中半島", lodging:"重慶", tone:"city", note:"把年輕人喜歡的老城街拍、商場與夜景串在一起：十八梯、山城巷、來福士、戴家巷、洪崖洞。中午進室內避熱，不硬走完所有階梯。", items:[
    ["09:30","十八梯傳統風貌區","從上往下走較省力；先看山城街巷與吊腳樓，再前往山城巷。","十八梯"],
    ["11:30","山城巷步道","沿坡地老街慢走，中午找有冷氣的店休息，避免在最熱時段連續爬階梯。","山城巷"],
    ["13:30","來福士・室內午餐","下午先吹冷氣、逛店或看展；白象居與湖廣會館改成有體力才加的備選。","朝天門・來福士"],
    ["17:30","朝天門看兩江交會","日落前看城市天際線，再往戴家巷移動，不沿江硬走全程。","朝天門・來福士"],
    ["19:00","戴家巷崖壁步道・洪崖洞","先逛咖啡與小店，再從崖壁步道看夜景；洪崖洞以外部拍照為主。","戴家巷・洪崖洞"]
  ]},
  { date:"9/13", weekday:"日", title:"輕軌・鵝嶺二廠", city:"渝中區", lodging:"重慶", tone:"city", note:"上午保留三峽博物館，午後主角改成李子壩與鵝嶺二廠的立體城市、文創店與街拍。晚上提早回解放碑，替隔天武隆留體力。", items:[
    ["09:00","三峽博物館・人民大禮堂","博物館週日開放、週一休館，今天安排最穩；帶台胞證走人工查驗。","三峽博物館・人民大禮堂"],
    ["13:00","李子壩站看輕軌穿樓","先在觀景平台看列車，再搭 2 號線親自穿樓；避開馬路邊停留拍照。","李子壩站"],
    ["15:00","鵝嶺二廠文創園","把二廠當主站，逛展、咖啡與老廠房街拍；有餘力再走鵝嶺公園。","鵝嶺二廠"],
    ["18:00","回解放碑、早點吃晚餐","不再跨區去觀音橋；補水、整理武隆隨身包並提早休息。","解放碑住宿區"]
  ]},
  { date:"9/14", weekday:"一", title:"武隆喀斯特一日", city:"武隆", lodging:"重慶", tone:"hard", note:"週一安排郊區，避開博物館休館。正規一日團往返最省轉乘，主看天生三橋與龍水峽地縫。", items:[
    ["07:00 前","解放碑附近集合","早餐與水先準備好；確認車牌、導遊電話、包含門票與返回時間。","解放碑住宿區"],
    ["約 11:00","武隆天生三橋","搭景區交通進入喀斯特峽谷，走天龍橋、青龍橋、黑龍橋主線。","武隆天生三橋"],
    ["下午","龍水峽地縫","石階濕滑，穿防滑鞋；下雨或體力不足時可刪除這段，提早返回。","龍水峽地縫"],
    ["20:00 左右","返回解放碑","今天不再安排夜景；回飯店洗澡、補水並整理隔天索道預約。","解放碑住宿區"]
  ]},
  { date:"9/15", weekday:"二", title:"下浩里・南濱微醺夜", city:"渝中＋南岸", lodging:"重慶", tone:"flex", note:"武隆隔天上午完全留白。下午搭長江索道後逛龍門浩、下浩里的青年主理人小店，晚上到南濱路找咖啡或餐吧看夜景。累了就只保留下浩里。", items:[
    ["上午","自然醒・洗衣・慢早餐","不設鬧鐘。先補眠、處理衣物與整理照片，中午前不排景點。","解放碑住宿區"],
    ["14:30","長江索道","依官方預約時段前往；若排隊過久，直接搭地鐵到上新街。","長江索道"],
    ["16:00","龍門浩老街・下浩里","逛青年主理人小店、文創與咖啡，沿山勢慢慢走，等待天色轉暗。","龍門浩・下浩里"],
    ["19:00","南濱路夜景・餐吧","想認識人就選有吧台座或現場音樂的店，比坐獨立桌自然；控制酒量，回程自己叫車。","南濱路"]
  ]},
  { date:"9/16", weekday:"三", title:"民主村・觀音橋交朋友", city:"九龍坡＋江北", lodging:"重慶", tone:"city", note:"把社交重點放在北倉、方圓 LIVE 與九街：先從展覽、興趣店或現場活動開話題，晚上再選熱鬧酒吧或能聊天的小酒館。下午照樣回飯店休息。", items:[
    ["10:30","民主村 Citywalk","紅磚社區、咖啡與小店集中，抓 2 小時慢逛；不要打擾巷內居民。","民主村"],
    ["13:30","回解放碑休息・先打包","下午留白，先整理返程行李；若下雨可直接延長休息。","解放碑住宿區"],
    ["17:00","北倉文創街區","先看當晚有沒有展覽、工作坊或市集；有共同活動時，比直接搭訕更容易自然聊天。","北倉文創街區"],
    ["19:00","觀音橋・方圓 LIVE","吃晚餐後逛動漫、潮流與興趣店；從展品或旅行話題開口，先認識同興趣的人。","觀音橋步行街"],
    ["21:30","九街／紫薇路二選一","想熱鬧選九街，想好好聊天選紫薇路；優先吧台座、Livehouse 或有活動的店，不跟陌生人換場。","九街"]
  ]},
  { date:"9/17", weekday:"四", title:"澳門轉機・回高雄", city:"返程", lodging:"—", tone:"flight", note:"回程已出票：NX181 於 16:10 從 CKG T3 出發、18:40 抵達澳門；轉機 2 小時 55 分後搭 NX658，23:00 抵達 KHH 第一航廈。", items:[
    ["09:00","早餐、完成打包","只在解放碑附近活動；證件、行動電源與轉機資料放隨身包。","解放碑住宿區"],
    ["11:30","退房、前往重慶江北機場","建議最晚 12:15–12:30 離開市區，目標約 13:15 抵達 CKG T3。","重慶江北機場 CKG"],
    ["16:10–18:40","NX181 重慶 → 澳門","由 CKG T3 起飛；報到時確認 32 公斤托運行李是否直掛高雄，並領取兩段登機證。","重慶江北機場 CKG"],
    ["21:35–23:00","NX658 澳門 → 高雄","澳門轉機 2 小時 55 分，23:00 抵達 KHH 第一航廈。","高雄國際機場 KHH"]
  ]}
];

const dayGuides = [
  {effort:"移動為主",summary:"爸媽安檢口 → 成都上車站 → 重慶 → 解放碑飯店。今天的重點是把機場、高鐵與住宿三個節點接好。",facts:[
    ["badge-alert","先確認機場","NX387 的電子票要核對 TFU／CTU 與航廈；不同機場會直接改變高鐵上車站。"],
    ["train-front","高鐵立即確認","9/11 車票已進入售票期；以少轉乘、抵達重慶不晚於 21:00 為優先。"],
    ["bed-double","住宿區域","六晚固定住解放碑、臨江門或小什字一帶；確認飯店可用台胞證辦理入住。"],
    ["utensils","第一晚","只在八一路或飯店附近吃飯，洪崖洞留到隔天，不拖著行李跑夜景。"]
  ],spot:["成渝移動日","這一天不需要追景點。把爸媽送進安檢、順利搭上高鐵、在解放碑完成入住，就是完整達標。"]},
  {effort:"中高・階梯多",summary:"十八梯 → 山城巷 → 來福士避熱 → 朝天門 → 戴家巷 → 洪崖洞。把街拍、小店與夜景放在同一條線。",facts:[
    ["footprints","走路方式","重慶地圖距離短不代表平坦。優先由高處往低處走，需要上坡就叫車或搭軌道。"],
    ["sun","避熱安排","上午走步道，中午到室內休息；9 月仍可能悶熱，水和摺疊傘隨身帶。"],
    ["camera","年輕玩法","戴家巷先逛咖啡與小店，再接崖壁步道和洪崖洞；不必在洪崖洞內部逐層排隊。"],
    ["badge-alert","防詐提醒","洪崖洞免費，不買快速通道、不找收費帶路、不跟路邊制服人員買遊船票。"]
  ],spot:["潮流老城看什麼","白天看老街與摩天樓交錯，晚上到戴家巷和洪崖洞拍山城燈火。白象居、湖廣會館留作有體力才加的備選。"]},
  {effort:"中等",summary:"三峽博物館 → 李子壩 → 鵝嶺二廠 → 解放碑。文化只留上午，午後集中玩立體交通與文創。",facts:[
    ["landmark","博物館時間","三峽博物館週二至週日 09:00–17:00，週一休館；今天上午進場最穩。"],
    ["train-front","李子壩拍法","先到觀景平台看穿樓，再從李子壩站搭 2 號線離開；不要站在車道邊。"],
    ["route","二廠是主站","先逛鵝嶺二廠的老廠房、展覽與咖啡；公園只在天氣好且有體力時加。"],
    ["cloud-rain","雨天青年備案","午後若持續下雨，李子壩拍完就改去龍湖重慶時代天街，不在山坡淋雨。"],
    ["bed-double","晚間安排","武隆隔天需要早起，18:00 後回解放碑吃飯，不再跨區追景點。"]
  ],spot:["李子壩輕軌穿樓","2 號線列車穿過住宅建築是重慶最有代表性的立體交通畫面。看完後搭同一條線離開，路線最自然。"]},
  {effort:"最高・全天往返",summary:"解放碑集合 → 武隆天生三橋 → 龍水峽地縫 → 解放碑。把交通交給正規一日團。",facts:[
    ["bus-front","選團條件","確認集合點、是否包含景區交通與門票、是否進購物站，以及最晚返城時間。"],
    ["mountain","主要景觀","天生三橋主線依序看天龍、青龍、黑龍三座天然石橋；步道以向下與谷底行走為主。"],
    ["cloud-rain","濕滑提醒","地縫與峽谷容易潮濕，防滑鞋比漂亮鞋重要；手機準備防水袋。"],
    ["bed-double","晚間留白","回城時間受車況影響，晚上不預約索道、遊船或餐廳。"]
  ],spot:["武隆天生三橋","三座巨型天然石橋落在深切峽谷中，是武隆喀斯特最經典的景觀。規模要人在谷底行走時才真正感受得到。"]},
  {effort:"上午休息・傍晚慢走",summary:"自然醒 → 長江索道 → 龍門浩／下浩里 → 南濱路餐吧。上午完全留白，傍晚走年輕店家。",facts:[
    ["bed-double","不設鬧鐘","武隆隔天先補眠、洗衣與整理照片，中午前不排景點。"],
    ["tram-front","索道預約","以官方實際時段為準；若排隊過久，直接搭地鐵到上新街。"],
    ["footprints","下浩里主理人街區","咖啡、餐飲、文創與小型展陳集中，傍晚比正中午更舒服。"],
    ["moon-star","微醺但不趕場","南濱路只選一間有吧台座或現場音樂的店；從音樂、旅行或店內活動開話題。"]
  ],spot:["長江索道與南岸","上午先把體力養回來，午後才過江。索道、龍門浩、下浩里與南濱路串成同一段，不必來回折返。"]},
  {effort:"中等・夜間可提前收",summary:"民主村 → 飯店休息 → 北倉 → 方圓 LIVE → 九街或紫薇路。先用共同興趣認識人，晚上再決定是否續攤。",facts:[
    ["coffee","民主村上午","紅磚老社區加上咖啡、文創與小店，適合慢拍；磁器口改成想看古鎮時的替代方案。"],
    ["bed-double","午後休息","13:30 左右回飯店避熱並先完成打包，晚上才玩得安心。"],
    ["store","共同興趣比較好聊","北倉找展覽或活動，方圓 LIVE 看動漫與潮流內容；先聊眼前的東西，不必硬搭訕。"],
    ["moon-star","夜生活二選一","九街較熱鬧；紫薇路偏餐酒館與聊天。酒杯不離視線，不接受陌生人帶去別的店。"],
    ["badge-check","想一起回住宿時","先確認對方已成年、雙方都明確同意；飯店訪客登記規定先問櫃台，任何一方反悔就停止。"]
  ],spot:["重慶年輕人的晚上","北倉、方圓 LIVE、觀音橋與九街是一條順路的青年夜生活線；不喝酒也能靠展覽、動漫、咖啡與現場活動認識人。"]},
  {effort:"返程日・時間固定",summary:"早餐 → 退房 → CKG T3 → 澳門轉機 → 高雄。12:30 是離開市區的建議底線。",facts:[
    ["badge-check","回程已出票","9/17 搭 NX181、NX658 經澳門回高雄；兩段皆為澳門航空。"],
    ["luggage","托運 32 公斤","畫面標示托運行李 32 公斤；訂票後核對是否全程直掛高雄，以及手提行李限制。"],
    ["plane","澳門轉機","轉機約 2 小時 55 分；確認兩段登機證、航班號與澳門機場轉機動線。"],
    ["route","機場緩衝","目標 13:15 左右抵達 CKG T3，不在上午安排遠程景點。"]
  ],spot:["回程航班已確認","NX181：16:10–18:40，重慶到澳門。NX658：21:35–23:00，澳門到高雄；轉機時間 2 小時 55 分。"]}
];

const dayVisuals = [
  null,
  {src:"assets/attractions/hongya.jpg",alt:"重慶洪崖洞沿山建築",caption:"洪崖洞",highlights:["十八梯","戴家巷","洪崖洞夜景"],credit:"源義信／Wikimedia Commons · CC BY 4.0",source:"https://commons.wikimedia.org/wiki/File:2023-06-24_Hongya_Cave,_Chongqing.jpg"},
  {src:"assets/attractions/liziba.jpg",alt:"重慶軌道交通列車穿過李子壩住宅建築",caption:"李子壩輕軌穿樓",highlights:["三峽博物館","李子壩","鵝嶺二廠"],credit:"Chen Hualin／Wikimedia Commons · CC BY-SA 4.0",source:"https://commons.wikimedia.org/wiki/File:A_train_of_Chongqing_Rail_Transit_Line_2_coming_through_a_residential_building_at_Liziba.jpg"},
  {src:"assets/attractions/wulong.jpg",alt:"武隆天生三橋的巨型喀斯特峽谷與天然石橋",caption:"武隆天生三橋",highlights:["天龍橋","青龍橋","黑龍橋"],credit:"RoyalCathayan／Wikimedia Commons · CC BY-SA 4.0",source:"https://commons.wikimedia.org/wiki/File:Three_Natural_Bridges.jpg"},
  null,
  null,
  null
];

const dayFallbacks=[
  "如果機場或高鐵班次不順，今晚只求安全抵達重慶；解放碑散步與晚餐都可以取消。",
  "若太熱或雙腿累，山城巷提前結束，下午留在來福士；傍晚只走戴家巷與洪崖洞。",
  "若博物館臨時調整，直接走李子壩與鵝嶺二廠；午後持續下雨就改龍湖重慶時代天街。",
  "若武隆遇大雨、道路預警或成團問題，留在市區改走磁器口、三峽博物館與南濱路。",
  "若仍很累或索道停運，搭地鐵到上新街，只逛下浩里與南濱路；也可整天留在飯店附近。",
  "若下雨，上午民主村取消、下午繼續休息，傍晚直接去觀音橋室內商場；九街與紫薇路皆可取消。",
  "返程日不安排遠程備案；若班次調整，以航空公司通知為準，立刻重算離開市區時間。"
];

const mapPlaces = [
  {name:"成都天府機場 TFU",area:"成都・簡陽",desc:"NX387 的可能出發機場；最終仍要以電子票機場代碼與航廈為準。",lat:30.3126,lng:104.4410,type:"transport",days:[0],stay:"先核對 TFU／CTU",icon:"plane"},
  {name:"成都雙流機場 CTU",area:"成都・雙流",desc:"NX387 的另一個可能出發機場；確認後再選高鐵上車站。",lat:30.5785,lng:103.9471,type:"transport",days:[0],stay:"備選機場",icon:"plane"},
  {name:"成都東站",area:"成都・成華區",desc:"成都前往重慶班次密集的主要車站；從機場抵達時間要另留緩衝。",lat:30.6289,lng:104.1403,type:"transport",days:[0],stay:"9/11 高鐵備選",icon:"train-front"},
  {name:"重慶北站",area:"重慶・渝北區",desc:"抵達重慶後前往解放碑；帶大件行李時可直接叫車。",lat:29.6083,lng:106.5508,type:"transport",days:[0],stay:"抵達重慶",icon:"train-front"},
  {name:"解放碑住宿區",area:"渝中區・解放碑／小什字",desc:"9/11 至 9/17 連住六晚；地鐵、餐飲與夜間步行都方便。",lat:29.5571,lng:106.5770,type:"stay",days:[0,1,2,3,4,5,6],stay:"重慶共 6 晚",icon:"bed-double"},
  {name:"十八梯",area:"渝中區",desc:"老城坡地街巷第一站，由上往下走較省力。",lat:29.5516,lng:106.5735,type:"sight",days:[1],stay:"9/12 上午",icon:"footprints"},
  {name:"山城巷",area:"渝中區",desc:"沿坡地展開的山城步道，中午前後注意補水與遮陽。",lat:29.5530,lng:106.5648,type:"sight",days:[1],stay:"9/12 中午",icon:"route"},
  {name:"朝天門・來福士",area:"渝中區・兩江交會",desc:"看長江、嘉陵江交會與重慶城市天際線。",lat:29.5662,lng:106.5883,type:"sight",days:[1],stay:"9/12 傍晚",icon:"waves"},
  {name:"戴家巷・洪崖洞",area:"渝中區・嘉陵江畔",desc:"戴家巷的咖啡小店與崖壁步道接洪崖洞外部夜景；景區免費，不購買收費捷徑。",lat:29.5635,lng:106.5716,type:"sight",days:[1],stay:"9/12 19:00 後",icon:"moon-star"},
  {name:"三峽博物館・人民大禮堂",area:"渝中區・人民路",desc:"博物館週一休館，安排在週日；帶有效證件入館。",lat:29.5621,lng:106.5506,type:"sight",days:[2],stay:"9/13 上午",icon:"landmark"},
  {name:"李子壩站",area:"渝中區・軌道 2 號線",desc:"從觀景平台看列車穿樓，再親自搭 2 號線離開。",lat:29.5555,lng:106.5338,type:"sight",days:[2],stay:"9/13 午後",icon:"train-front"},
  {name:"鵝嶺二廠",area:"渝中區・鵝嶺",desc:"文創園區與山城高處視野；體力不足可改鵝嶺公園或直接刪除。",lat:29.5532,lng:106.5166,type:"sight",days:[2],stay:"9/13 下午",icon:"camera"},
  {name:"龍湖重慶時代天街",area:"渝中區・大坪",desc:"9/13 午後雨天備案；商場、餐飲與室內娛樂集中，不在鵝嶺山坡淋雨。",lat:29.5398,lng:106.5064,type:"sight",days:[],stay:"9/13 雨天備案",icon:"store"},
  {name:"民主村",area:"九龍坡區・謝家灣",desc:"紅磚老社區、咖啡、文創與街拍並存；慢逛並尊重巷內居民。",lat:29.5139,lng:106.5191,type:"sight",days:[5],stay:"9/16 上午",icon:"camera"},
  {name:"北倉文創街區",area:"江北區・觀音橋旁",desc:"老倉庫改造的文創小店、展覽與咖啡，是最後完整日的青年街區主站。",lat:29.5808,lng:106.5297,type:"sight",days:[5],stay:"9/16 傍晚",icon:"coffee"},
  {name:"觀音橋步行街",area:"江北區",desc:"晚餐、潮流商場、街拍與最後補給集中處理。",lat:29.5784,lng:106.5336,type:"sight",days:[5],stay:"9/16 晚間",icon:"utensils"},
  {name:"九街",area:"江北區・北城天街",desc:"夜生活首選；若想安靜聊天就改去紫薇路。獨旅結束後直接叫車回飯店。",lat:29.5795,lng:106.5437,type:"sight",days:[5],stay:"9/16 21:30 可選",icon:"moon-star"},
  {name:"武隆天生三橋",area:"武隆區・仙女山鎮",desc:"天龍、青龍、黑龍三座巨型天然石橋的核心步道。",lat:29.4340,lng:107.8000,type:"sight",days:[3],stay:"9/14 主要景點",icon:"mountain"},
  {name:"龍水峽地縫",area:"武隆區",desc:"峽谷、瀑布與濕滑石階；雨勢大或疲累時可刪除。",lat:29.4215,lng:107.8240,type:"sight",days:[3],stay:"9/14 下午",icon:"cloud-rain"},
  {name:"磁器口古鎮",area:"沙坪壩區",desc:"若仍想看古鎮，可用它替換 9/16 上午的民主村；不要兩個都塞。",lat:29.5793,lng:106.4484,type:"sight",days:[],stay:"9/16 老街備案",icon:"store"},
  {name:"長江索道",area:"渝中區小什字 ↔ 南岸上新街",desc:"依預約時段搭乘，作為前往南岸的一次交通體驗。",lat:29.5580,lng:106.5832,type:"sight",days:[4],stay:"9/15 下午",icon:"tram-front"},
  {name:"龍門浩・下浩里",area:"南岸區",desc:"依山而建的青年主理人街區，適合傍晚逛咖啡、文創與小店。",lat:29.5557,lng:106.5965,type:"sight",days:[4],stay:"9/15 傍晚",icon:"footprints"},
  {name:"南濱路",area:"南岸區・長江畔",desc:"從南岸看渝中半島夜景，作為最後完整夜景的收尾。",lat:29.5450,lng:106.5920,type:"sight",days:[4],stay:"9/15 夜間",icon:"moon-star"},
  {name:"重慶江北機場 CKG",area:"渝北區・T3",desc:"9/17 搭 NX181 於 16:10 出發，建議約 13:15 抵達。",lat:29.7192,lng:106.6417,type:"transport",days:[6],stay:"9/17 返程",icon:"plane"},
  {name:"高雄國際機場 KHH",area:"高雄・第一航廈",desc:"搭 NX658 經澳門轉機後於 23:00 抵達。",lat:22.5701,lng:120.3500,type:"transport",days:[6],stay:"9/17 23:00",icon:"plane"}
];

const readStoredValue=(key,fallback)=>{try{return localStorage.getItem(key)??fallback;}catch{return fallback;}};
const writeStoredValue=(key,value)=>{try{localStorage.setItem(key,value);return true;}catch{return false;}};
const readStoredJSON=(key,fallback)=>{try{const value=JSON.parse(readStoredValue(key,"null"));return value??fallback;}catch{return fallback;}};
const categoryLabels={sight:"景點",transport:"交通",stay:"住宿"};
const categoryGlyphs={sight:"景",transport:"車",stay:"住"};
const dayTypeLabels={arrival:"抵達日",move:"跨城移動日",star:"自然景點日",hard:"高強度郊區日",flex:"市區彈性日",city:"重慶市區重點日",flight:"返程日"};
const savedData=readStoredJSON("chongqing-saved",[]);
const saved=new Set(Array.isArray(savedData)?savedData:[]);
let activeDay=0,mapFilter="all",mapDay="0",mapQuery="",travelMap,markerLayer,routeLayer;
let deferredInstallPrompt=null;
let mapMarkers=new Map();
const qs=s=>document.querySelector(s),qsa=s=>[...document.querySelectorAll(s)];
const dayTabs=qs("#dayTabs"),timeline=qs("#timeline"),toast=qs("#toast");
const icon=name=>`<i data-lucide="${name}"></i>`;
const refreshIcons=()=>{if(window.lucide)window.lucide.createIcons();};

function showToast(message){toast.textContent=message;toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),1800);}
function renderDays(){
  dayTabs.innerHTML=itineraries.map((d,i)=>`<button class="day-tab ${i===activeDay?"active":""}" role="tab" aria-selected="${i===activeDay}" data-day="${i}"><span>DAY ${i+1} · ${d.date}</span><strong>${d.title}</strong></button>`).join("");
  qs("#mobileDaySelect").innerHTML=itineraries.map((d,i)=>`<option value="${i}" ${i===activeDay?"selected":""}>D${i+1}｜${d.date}｜${d.title}</option>`).join("");
  qs("#mapDaySelect").innerHTML=`<option value="all">全部 7 天</option>${itineraries.map((d,i)=>`<option value="${i}">D${i+1}｜${d.date}｜${d.title}</option>`).join("")}`;
  qs("#mapDaySelect").value=mapDay;
  qsa("[data-map-day]").forEach(b=>b.classList.toggle("active",b.dataset.mapDay===mapDay));
  qsa(".overview-day").forEach(card=>card.classList.toggle("active",Number(card.dataset.overviewDay)===activeDay));
  renderTimeline();
}
function renderAllDays(){
  const grid=qs("#allDaysGrid");
  if(!grid)return;
  grid.innerHTML=itineraries.map((d,i)=>`<button type="button" class="overview-day ${i===activeDay?"active":""}" data-overview-day="${i}"><span>D${i+1} · ${d.date} 星期${d.weekday}</span><strong>${d.title}</strong><small>${icon("bed-double")} 今晚住 ${d.lodging}</small></button>`).join("");
  refreshIcons();
}
function selectDay(index,scroll=false){activeDay=Number(index);renderDays();setMapDay(activeDay);if(scroll)qs("#route").scrollIntoView({behavior:"smooth",block:"start"});}
function renderTimeline(){
  const d=itineraries[activeDay];
  const sightCount=routePlacesForDay(activeDay).filter(p=>p.type==="sight").length;
  qs("#dayOverview").className=`day-overview ${d.tone}`;
  qs("#dayOverview").innerHTML=`<div><span>${d.date} 星期${d.weekday}</span><h3>${d.title}</h3><div class="day-tags"><b>${dayTypeLabels[d.tone]}</b><b>${sightCount} 個主要景點</b></div></div><p>${d.note}</p><div class="lodging-badge">${icon("bed-double")}<span>今晚住宿</span><strong>${d.lodging}</strong></div>`;
  timeline.innerHTML=d.items.map((item,i)=>`<article class="timeline-item" style="animation-delay:${i*60}ms"><time>${item[0]}</time><h3>${item[1]}</h3><p>${item[2]}</p><a href="#map" data-focus-place="${item[3]}">在旅行地圖查看 ${icon("map-pin")}</a></article>`).join("");
  renderParentGuide();
  refreshIcons();
}
function renderParentGuide(){
  const day=itineraries[activeDay],guide=dayGuides[activeDay];
  const visual=dayVisuals[activeDay];
  const visualMarkup=visual?`<figure class="spot-visual"><img src="${visual.src}" alt="${visual.alt}" loading="lazy" decoding="async"><div class="spot-highlights">${visual.highlights.map(item=>`<b>${item}</b>`).join("")}</div><figcaption><span>${visual.caption}</span><a href="${visual.source}" target="_blank" rel="noreferrer">${visual.credit} ${icon("external-link")}</a></figcaption></figure>`:"";
  const large=qs("#parentGuide")?.classList.contains("large-guide");
  qs("#parentGuide").className=`parent-guide-card${large?" large-guide":""}`;
  qs("#parentGuide").innerHTML=`
    <div class="guide-summary"><div><span>DAY ${activeDay+1} · ${day.date} 星期${day.weekday}</span><h3>${day.title}</h3></div><div class="effort-pill"><small>今日體力</small><strong>${guide.effort}</strong></div></div>
    <div class="guide-body guide-info-only">
      <aside class="guide-sidebar"><h3 class="guide-subheading">出發前看這裡</h3><div class="guide-facts">${guide.facts.map(f=>`<div class="guide-fact">${icon(f[0])}<div><strong>${f[1]}</strong><span>${f[2]}</span></div></div>`).join("")}</div></aside>
      <div class="guide-spot-column">${visualMarkup}<div class="spot-explainer"><span>看什麼</span><h4>${guide.spot[0]}</h4><p>${guide.spot[1]}</p></div><div class="plan-b"><span>${icon("route-off")} 累了就這樣</span><p>${dayFallbacks[activeDay]}</p></div></div>
    </div>`;
  refreshIcons();
}
function toggleSaved(name){saved.has(name)?(saved.delete(name),showToast(`已移除「${name}」`)):(saved.add(name),showToast(`已收藏「${name}」`));writeStoredValue("chongqing-saved",JSON.stringify([...saved]));qs("#savedCount").textContent=saved.size;renderMapData(false);renderDrawer();}
function routePlacesForDay(day){const result=[];itineraries[day].items.forEach(item=>{const p=mapPlaces.find(x=>x.name===item[3]);if(p&&!result.includes(p))result.push(p);});return result;}
function routeIndexForPlace(p){if(mapDay==="all")return -1;return routePlacesForDay(Number(mapDay)).findIndex(x=>x.name===p.name);}
function markerIcon(p){const order=routeIndexForPlace(p),daily=mapDay!=="all",markerText=daily?(order>=0?String(order+1):"備"):categoryGlyphs[p.type];return L.divIcon({className:`cq-marker ${p.type} ${daily?"daily":"overview"} ${order<0&&daily?"alternate":""} ${saved.has(p.name)?"is-saved":""}`,html:`<div class="cq-marker-pin"><span>${markerText}</span></div><strong class="cq-marker-name">${p.name}</strong>`,iconSize:[38,38],iconAnchor:[19,36],popupAnchor:[0,-37]});}
function popupMarkup(p){const a=saved.has(p.name);return `<div class="map-popup"><span>${categoryLabels[p.type]} · ${p.area}</span><h3>${p.name}</h3><p>${p.desc}<br>${p.stay}</p><div><button type="button" class="popup-save ${a?"active":""}" data-popup-save="${p.name}">${icon("heart")} ${a?"已收藏":"收藏"}</button><a href="https://uri.amap.com/search?keyword=${encodeURIComponent(p.name+" 重慶")}" target="_blank" rel="noreferrer">導航 ${icon("external-link")}</a></div></div>`;}
function visiblePlaces(){const q=mapQuery.trim().toLocaleLowerCase("zh-Hant");return mapPlaces.filter(p=>(mapFilter==="all"||p.type===mapFilter)&&(mapDay==="all"||p.days.includes(Number(mapDay)))&&(!q||`${p.name} ${p.area} ${p.desc}`.toLocaleLowerCase("zh-Hant").includes(q)));}
function renderMapContext(){
  const box=qs("#mapContext");
  if(mapDay==="all"){
    box.innerHTML=`<div class="map-context-title"><span>${icon("map")} 7 天全覽</span><strong>成都到重慶主要地點</strong><small>先選日期查看當天順序，或依顏色辨認景點、交通與住宿。</small></div><div class="map-context-hint">${icon("mouse-pointer-click")} 點地圖標記查看說明</div>`;
  }else{
    const dayNumber=Number(mapDay),d=itineraries[dayNumber],route=routePlacesForDay(dayNumber),sightCount=route.filter(p=>p.type==="sight").length;
    box.innerHTML=`<div class="map-context-title"><span>D${dayNumber+1} · ${d.date} 星期${d.weekday} · ${dayTypeLabels[d.tone]}</span><strong>${d.title}</strong><small>${route.length} 個主要停靠點 · ${sightCount} 個主要景點 · 今晚住 ${d.lodging}</small></div><div class="map-route-chain">${route.map((p,i)=>`<button type="button" data-map-context-place="${p.name}"><b>${i+1}</b><span>${p.name}</span></button>${i<route.length-1?icon("chevron-right"):""}`).join("")}</div>`;
  }
  refreshIcons();
}
function initMap(){
  if(travelMap)return;
  if(!window.L){qs("#travelMap").innerHTML='<div class="map-empty"><strong>地圖載入失敗</strong><span>請確認網路後重新整理。</span></div>';return;}
  travelMap=L.map("travelMap",{zoomControl:false,scrollWheelZoom:true,tap:false}).setView([29.57,106.56],11);
  const tiles=L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',crossOrigin:true});
  tiles.addTo(travelMap);
  L.control.zoom({position:"bottomright"}).addTo(travelMap);markerLayer=L.layerGroup().addTo(travelMap);routeLayer=L.layerGroup().addTo(travelMap);
  qsa("#travelMap .leaflet-control-attribution a").forEach(a=>{a.target="_blank";a.rel="noreferrer";});
  travelMap.on("popupopen",()=>{refreshIcons();const b=qs("[data-popup-save]");if(b)b.addEventListener("click",()=>toggleSaved(b.dataset.popupSave),{once:true});});
  const resizeMap=()=>{if(qs("#mapDetails")?.open)travelMap?.invalidateSize({pan:false});};
  if("ResizeObserver" in window)new ResizeObserver(resizeMap).observe(qs("#travelMap"));
  window.addEventListener("orientationchange",()=>setTimeout(refreshMapLayout,250));
  window.addEventListener("pageshow",()=>setTimeout(refreshMapLayout,120));
  renderMapData(false);refreshMapLayout();
}
function refreshMapLayout(){
  if(!qs("#mapDetails")?.open)return;
  if(!travelMap){initMap();return;}
  requestAnimationFrame(()=>travelMap?.invalidateSize({pan:false}));
  setTimeout(()=>{travelMap?.invalidateSize({pan:false});fitVisibleMap();},180);
  setTimeout(()=>travelMap?.invalidateSize({pan:false}),420);
}
function renderMapData(fit=false){
  const visible=visiblePlaces();renderMapContext();renderMapList(visible);if(!travelMap||!markerLayer)return;
  markerLayer.clearLayers();routeLayer.clearLayers();mapMarkers=new Map();
  visible.forEach(p=>{const m=L.marker([p.lat,p.lng],{icon:markerIcon(p),title:p.name,riseOnHover:true}).bindPopup(popupMarkup(p));m.on("click",()=>setActiveList(p.name));m.addTo(markerLayer);mapMarkers.set(p.name,m);});
  if(mapDay!=="all"){
    const points=routePlacesForDay(Number(mapDay)).map(p=>[p.lat,p.lng]);
    if(points.length>1){L.polyline(points,{color:"#ffffff",weight:8,opacity:.8}).addTo(routeLayer);L.polyline(points,{color:"#e76f3d",weight:4,opacity:1,dashArray:"10 8"}).addTo(routeLayer);}
  }
  refreshIcons();
  if(fit&&qs("#mapDetails")?.open)fitVisibleMap();
}
function renderMapList(list){
  const ordered=mapDay==="all"?list:[...list].sort((a,b)=>{const ai=routeIndexForPlace(a),bi=routeIndexForPlace(b);return (ai<0?99:ai)-(bi<0?99:bi);});
  qs("#mapResultCount").textContent=mapDay==="all"?`${ordered.length} 個地點`:`D${Number(mapDay)+1} · ${ordered.length} 個地點`;
  qs("#mapEmpty").hidden=!!ordered.length;qs("#mapPlaceList").hidden=!ordered.length;
  qs("#mapPlaceList").innerHTML=ordered.map(p=>{const order=routeIndexForPlace(p),badge=mapDay==="all"?categoryGlyphs[p.type]:(order>=0?String(order+1):"備");return `<button type="button" class="map-list-item ${order<0&&mapDay!=="all"?"alternate":""}" data-map-place="${p.name}"><span class="map-list-icon ${p.type}">${badge}</span><span class="map-list-copy"><span class="map-list-meta">${categoryLabels[p.type]} · ${p.area}</span><strong>${p.name}</strong><small>${p.desc}</small><em>${icon("clock-3")} ${p.stay}</em></span><span class="map-list-day">${mapDay==="all"?p.days.map(d=>`D${d+1}`).join("/"):(order>=0?`第 ${order+1} 站`:"備選")}</span></button>`;}).join("");refreshIcons();
}
function setActiveList(name){qsa(".map-list-item").forEach(x=>x.classList.toggle("active",x.dataset.mapPlace===name));const a=qsa(".map-list-item").find(x=>x.dataset.mapPlace===name);if(a)a.scrollIntoView({block:"nearest",behavior:"smooth"});}
function fitVisibleMap(){if(!travelMap)return;const p=visiblePlaces();if(!p.length)return;p.length===1?travelMap.setView([p[0].lat,p[0].lng],14):travelMap.fitBounds(p.map(x=>[x.lat,x.lng]),{padding:[35,35],maxZoom:13});}
function focusPlace(name){const p=mapPlaces.find(x=>x.name===name);if(!p)return;mapFilter="all";mapDay=String(activeDay);mapQuery="";qs("#mapSearch").value="";qs("#mapDaySelect").value=mapDay;qsa("[data-map-filter]").forEach(b=>b.classList.toggle("active",b.dataset.mapFilter==="all"));qsa("[data-map-day]").forEach(b=>b.classList.toggle("active",b.dataset.mapDay===mapDay));if(!travelMap)initMap();renderMapData(false);setTimeout(()=>{if(travelMap){travelMap.invalidateSize();travelMap.setView([p.lat,p.lng],14,{animate:true});mapMarkers.get(name)?.openPopup();setActiveList(name);}},420);}
function setMapDay(day){mapDay=String(day);if(mapDay!=="all"){mapQuery="";mapFilter="all";qs("#mapSearch").value="";qsa("[data-map-filter]").forEach(b=>b.classList.toggle("active",b.dataset.mapFilter==="all"));}qsa("[data-map-day]").forEach(b=>b.classList.toggle("active",b.dataset.mapDay===mapDay));qs("#mapDaySelect").value=mapDay;renderMapData(true);}
function updateCountdown(){const countdown=qs("#countdown");if(!countdown)return;const days=Math.ceil((new Date("2026-09-11T00:00:00+08:00")-new Date())/86400000);countdown.textContent=days>0?`倒數 ${days} 天`:days===0?"今天出發":"旅程已開始";}
function renderDrawer(){const list=[...saved].map(n=>mapPlaces.find(p=>p.name===n)).filter(Boolean);qs("#drawerEmpty").hidden=!!list.length;qs("#drawerSaved").hidden=!list.length;qs("#drawerSaved").innerHTML=list.map(p=>`<div class="drawer-place"><div><strong>${p.name}</strong><span>${p.area} · ${p.stay}</span></div><button type="button" data-drawer-remove="${p.name}" aria-label="移除${p.name}">${icon("x")}</button></div>`).join("");refreshIcons();}
function openDrawer(){renderDrawer();qs("#drawerBackdrop").hidden=false;requestAnimationFrame(()=>qs("#drawerBackdrop").classList.add("show"));qs("#tripDrawer").classList.add("open");qs("#tripDrawer").setAttribute("aria-hidden","false");document.body.classList.add("drawer-open");}
function closeDrawer(){qs("#drawerBackdrop").classList.remove("show");qs("#tripDrawer").classList.remove("open");qs("#tripDrawer").setAttribute("aria-hidden","true");document.body.classList.remove("drawer-open");setTimeout(()=>qs("#drawerBackdrop").hidden=true,260);}

dayTabs.addEventListener("click",e=>{const b=e.target.closest("[data-day]");if(b)selectDay(b.dataset.day);});
qs("#allDaysGrid")?.addEventListener("click",e=>{const b=e.target.closest("[data-overview-day]");if(b)selectDay(b.dataset.overviewDay,true);});
qs("#mobileDaySelect").addEventListener("change",e=>selectDay(e.target.value));
qs("#mapDaySelect").addEventListener("change",e=>setMapDay(e.target.value));
document.addEventListener("click",e=>{const a=e.target.closest("[data-focus-place]");if(a){qs("#mapDetails").open=true;focusPlace(a.dataset.focusPlace);}});
qs("#mapContext").addEventListener("click",e=>{const b=e.target.closest("[data-map-context-place]");if(!b||!travelMap)return;const p=mapPlaces.find(x=>x.name===b.dataset.mapContextPlace);if(!p)return;travelMap.setView([p.lat,p.lng],14,{animate:true});mapMarkers.get(p.name)?.openPopup();setActiveList(p.name);});
qs("#mapPlaceList").addEventListener("click",e=>{const b=e.target.closest("[data-map-place]");if(!b||!travelMap)return;const p=mapPlaces.find(x=>x.name===b.dataset.mapPlace);travelMap.setView([p.lat,p.lng],14,{animate:true});mapMarkers.get(p.name)?.openPopup();setActiveList(p.name);});
qsa("[data-map-filter]").forEach(b=>b.addEventListener("click",()=>{mapFilter=b.dataset.mapFilter;qsa("[data-map-filter]").forEach(x=>x.classList.toggle("active",x===b));renderMapData(true);}));
qsa("[data-map-day]").forEach(b=>b.addEventListener("click",()=>setMapDay(b.dataset.mapDay)));
qs("#mapSearch").addEventListener("input",e=>{
  mapQuery=e.target.value;
  if(mapQuery.trim()){
    mapFilter="all";mapDay="all";
    qs("#mapDaySelect").value="all";
    qsa("[data-map-filter]").forEach(b=>b.classList.toggle("active",b.dataset.mapFilter==="all"));
    qsa("[data-map-day]").forEach(b=>b.classList.toggle("active",b.dataset.mapDay==="all"));
  }
  renderMapData(true);
});
qs("#clearMapSearch").addEventListener("click",()=>{qs("#mapSearch").value="";mapQuery="";setMapDay(activeDay);qs("#mapSearch").focus();});qs("#fitMap").addEventListener("click",fitVisibleMap);
qs(".saved-button").addEventListener("click",openDrawer);qs("#closeDrawer").addEventListener("click",closeDrawer);qs("#drawerBackdrop").addEventListener("click",closeDrawer);document.addEventListener("keydown",e=>{if(e.key==="Escape")closeDrawer();});
qs("#drawerSaved").addEventListener("click",e=>{const b=e.target.closest("[data-drawer-remove]");if(b)toggleSaved(b.dataset.drawerRemove);});
qs("#clearSaved").addEventListener("click",()=>{if(!saved.size)return showToast("收藏目前是空的");saved.clear();writeStoredValue("chongqing-saved","[]");qs("#savedCount").textContent="0";renderMapData(false);renderDrawer();showToast("已清空收藏");});
qs("#copyPlan").addEventListener("click",async()=>{const list=saved.size?[...saved].map(n=>`・${n}`).join("\n"):"・尚未收藏地點";const text=`重慶七日行程｜成都・重慶・高雄｜2026/09/11–09/17\n\n收藏地點\n${list}`;try{await navigator.clipboard.writeText(text);showToast("旅行摘要已複製");}catch{showToast("瀏覽器未允許複製");}});
qs("#copyDayGuide").addEventListener("click",async()=>{
  const day=itineraries[activeDay],guide=dayGuides[activeDay];
  const steps=day.items.map((item,i)=>`${i+1}. ${item[0]}｜${item[1]}\n${item[2]}`).join("\n\n");
  const facts=guide.facts.map(f=>`・${f[1]}：${f[2]}`).join("\n");
  const text=`DAY ${activeDay+1}｜${day.date} 星期${day.weekday}｜${day.title}\n今晚住宿：${day.lodging}\n體力：${guide.effort}\n\n${guide.summary}\n\n${steps}\n\n當日提醒\n${facts}\n\n${guide.spot[0]}\n${guide.spot[1]}`;
  try{await navigator.clipboard.writeText(text);showToast("今天的摘要已複製");}catch{showToast("瀏覽器未允許複製");}
});
qs("#toggleLargeGuide").addEventListener("click",()=>{qs("#parentGuide").classList.toggle("large-guide");showToast(qs("#parentGuide").classList.contains("large-guide")?"介紹文字已放大":"介紹文字已恢復");});
function setParentMode(on){document.body.classList.toggle("parent-mode",on);qs("#parentMode").classList.toggle("active",on);qs("#parentMode").setAttribute("aria-pressed",String(on));writeStoredValue("chongqing-parent-mode",String(on));}
qs("#parentMode").addEventListener("click",()=>{const on=!document.body.classList.contains("parent-mode");setParentMode(on);showToast(on?"已開啟大字閱讀":"已關閉大字閱讀");});
function updateReadiness(){const checks=qsa("[data-check]"),done=checks.filter(i=>i.checked).length,total=checks.length,pct=total?Math.round(done/total*100):0;const percent=qs("#readinessPercent"),text=qs("#readinessText"),ring=qs("#readinessRing");if(percent)percent.textContent=`${pct}%`;if(text)text.textContent=`${done}／${total} 已完成`;if(ring)ring.style.setProperty("--progress",`${pct*3.6}deg`);}
const savedCheckState=readStoredJSON("chongqing-checklist",{}),checkState=savedCheckState&&typeof savedCheckState==="object"&&!Array.isArray(savedCheckState)?savedCheckState:{};qsa("[data-check]").forEach(i=>{const hasSaved=Object.prototype.hasOwnProperty.call(checkState,i.dataset.check);i.checked=hasSaved?!!checkState[i.dataset.check]:i.dataset.confirmed==="true";i.addEventListener("change",()=>{checkState[i.dataset.check]=i.checked;writeStoredValue("chongqing-checklist",JSON.stringify(checkState));updateReadiness();});});

qs("#shareTrip")?.addEventListener("click",async()=>{const url=`${location.origin}${location.pathname}`;const data={title:"重慶七日行程｜山城慢旅",text:"2026/09/11—09/17 成都到重慶七日行程",url};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(url);showToast("公開網址已複製");}}catch(error){if(error?.name!=="AbortError")showToast("暫時無法分享，請複製網址列");}});
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstallPrompt=e;});
qs("#installTrip")?.addEventListener("click",async()=>{if(matchMedia("(display-mode: standalone)").matches)return showToast("已經加入手機桌面");if(deferredInstallPrompt){await deferredInstallPrompt.prompt();deferredInstallPrompt=null;return;}showToast("iPhone：按分享，再選「加入主畫面」");});
qsa('a[href="#map"]').forEach(a=>a.addEventListener("click",()=>{qs("#mapDetails").open=true;refreshMapLayout();}));
qs("#mapDetails")?.addEventListener("toggle",e=>{if(e.currentTarget.open)refreshMapLayout();});
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js?v=7").catch(()=>{}));
qs(".back-top").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
setParentMode(readStoredValue("chongqing-parent-mode","false")==="true");qs("#savedCount").textContent=saved.size;renderAllDays();renderDays();renderDrawer();updateReadiness();updateCountdown();refreshIcons();renderMapData(false);
