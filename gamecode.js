let thePage = undefined; // 全局变量，存储当前激活的页面 ID

// 切换页面的函数（全局函数）
function switchPage(pageId) {
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    const pages = document.querySelectorAll('.page');

    pages.forEach(page => page.classList.remove('active'));
    
    // 显示目标页面
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        thePage = pageId;  // 更新当前激活页面
    }

    sidebarLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    
    // 默认激活的页面
    if (thePage === undefined){
        switchPage('homework+');
    }

    // 监听侧边栏的点击事件
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            switchPage(pageId); // 调用全局的 switchPage 函数
        });
    });

    // 处理子菜单
    const hasSubmenu = document.querySelectorAll('.has-submenu');
    hasSubmenu.forEach(item => {
        const link = item.querySelector('a');
        link.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = item.classList.contains('active');
            hasSubmenu.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 点击其他地方收起菜单
    document.addEventListener('click', function() {
        hasSubmenu.forEach(i => i.classList.remove('active'));
    });

    // 监听子菜单项的点击
    document.querySelectorAll('.submenu a').forEach(subLink => {
        subLink.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            switchPage(pageId); // 调用全局的 switchPage 函数
            const parent = this.closest('.has-submenu');
            parent.classList.add('active');
        });
    });
});

const achievementswindows = document.getElementById("tips");
function achievementson(a) {
    achievementswindows.innerHTML = a
    achievementswindows.classList.add("show");
    setTimeout(() => {
        achievementswindows.classList.remove("show")
    }, 3000);
}
const news = document.getElementById("news");
function newson(a,b) {
    if (arguments.length === 1){//b不填为3000ms
        b = 3000
    }
    news.innerHTML = '<br>'+a
    news.classList.add("show");
    setTimeout(() => {
        news.classList.remove("show")
    }, b);
}
document.getElementById('homework+').classList.add('active')
let savetoLocal = document.getElementById("autosave")
let loadfromLocal = document.getElementById("autoload")
let buymaxbutton = document.getElementById("hm_buymax_button")
let braindownlimit = document.getElementById("braindownlimit")
let speed = document.getElementById("speed")
let helpon = document.getElementById("help")
let helpoff = document.getElementById("closeButton")
let helpwindow = document.getElementById("helpwindow")
let brainstorm = document.getElementById("brainstorm")
let progress = document.getElementById("progress")
let save = document.getElementById("save")
let load = document.getElementById("load")
let hc1 = [
    cgbt1 = document.getElementById("challenge1"),
    cgbt2 = document.getElementById("challenge2"),
    cgbt3 = document.getElementById("challenge3"),
    cgbt4 = document.getElementById("challenge4"),
    cgbt5 = document.getElementById("challenge5"),
    cgbt6 = document.getElementById("challenge6"),
    cgbt7 = document.getElementById("challenge7"),
    cgbt8 = document.getElementById("challenge8"),
    cgbt9 = document.getElementById("challenge9")
]
let text = [
    texthomework = document.getElementById("homework"),
    textpen = document.getElementById("textpen"),
    textmachine = document.getElementById("textmachine"),
    textpencase = document.getElementById("textpencase"),
    textboard = document.getElementById("textboard"),
    textclass = document.getElementById("textclass"),
    textschool = document.getElementById("textschool"),
    textreset = document.getElementById("texthandin"),
    textmultihandin = document.getElementById("textmultihandin")
]
let buy = [
    buyhomework = document.getElementById("dohomework"),
    buypen = document.getElementById("buypen"),
    buymachine = document.getElementById("buymachine"),
    buypencase = document.getElementById("buypencase"),
    buyboard = document.getElementById("buyboard"),
    buyclass = document.getElementById("buyclass"),
    buyschool = document.getElementById("buyschool"),
]
let multi = [
    multipen = document.getElementById("multipen"),
    multimachine = document.getElementById("multimachine"),
    multipencase =document.getElementById("multipencase"),
    multiboard = document.getElementById("multiboard"),
    multiclass = document.getElementById("multiclass"),
    multischool = document.getElementById("multischool"),
]
let text2 = [
    textknowledge = document.getElementById("knowledge")
]
let resetbutton = [
    handinhomework = document.getElementById("handinhomework"),
]
let kubu = [
    upbu1 = document.getElementById("ku1"),
    upbu2 = document.getElementById("ku2"),
    upbu3 = document.getElementById("ku3"),
    upbu4 = document.getElementById("ku4"),
    upbu5 = document.getElementById("ku5"),
    upbu6 = document.getElementById("ku6"),
    upbu7 = document.getElementById("ku7"),
    upbu8 = document.getElementById("ku8"),
    upbu9 = document.getElementById("ku9"),
    upbu10 = document.getElementById("ku10"),
    upbu11 = document.getElementById("ku11"),
    upbu12 = document.getElementById("ku12"),
]
function turntosaves(){
    return JSON.stringify([
        achievements,unlock,ku,
        product,thing,reset,
        storming,challenge,inchallenge,
        autobuyer,statics,playtime,
        generator,bku,celestias,
        planetdestroy,thelimit,mu,
        1.061,//版本号
        PT,PTprice,IS,
        thePage,iu,[Balancer.KP,Balancer.MP,Balancer.IP,Balancer.price],
        new Date()
    ])
}
function loadthings(a){
    achievements = read(achievements,a[0])
    unlock = read(unlock,a[1])
    ku = read(ku,a[2])
    product = read(product,MapToDecimal(a[3]))
    thing = read(thing,MapToDecimal(a[4]))
    reset = read(reset,MapToDecimal(a[5]))
    storming = read(storming,a[6])
    challenge = read(challenge,a[7])
    inchallenge = read(inchallenge,a[8])
    autobuyer = read(autobuyer,a[9])
    statics = read(statics,MapToDecimal(a[10]))
    playtime = read(playtime,a[11])
    generator = read(generator,MapToDecimal(a[12]))
    bku = read(bku,a[13])
    celestias = read(celestias,MapToDecimal(a[14]))
    planetdestroy = read(planetdestroy,a[15])
    thelimit = braindownlimit.value = dec(a[16])
    mu = read(mu,a[17])
    version = read(mu,a[18])
    PT = read(PT,MapToDecimal(a[19]))
    PTprice = read(PTprice,MapToDecimal(a[20]))
    IS = read(IS,a[21])
    switchPage(a[22])
    iu = read(iu,a[23])
    Balancer.KP = read(Balancer.KP,MapToDecimal(a[24][0]));Balancer.MP = read(Balancer.MP,MapToDecimal(a[24][1]));Balancer.IP = read(Balancer.IP,MapToDecimal(a[24][2]));Balancer.price = read(Balancer.price,MapToDecimal(a[24][3]))
    thepasttime = new Date(a[25])
}
function dec(a){
    return new Decimal(a)
}
function shownum(a,b,c,d){
    if (a instanceof Decimal){
        b.innerHTML = c+fixNum(a)+d
    }else{
        b.innerHTML = c+a+d
    }
}
function fixNum(a){
    if (a instanceof Decimal){
        let c = a.toString().split('')
        if (c.indexOf(".") === -1){
            return a.toString()
        }
        let d = c.indexOf("e")
        if (d>5){
            c.splice(5,d-5)
        }else if (d === -1){
            c.splice(c.indexOf(".")+4,c.length-1)
        }
        return c.join('')

    }
    return a
}
function MapToDecimal(arr) {
    if (!Array.isArray(arr)){
        return dec(arr)
    }
    return arr.map(item => {
        try {
            if (Array.isArray(item)) {
                return MapToDecimal(item);
            }
            return dec(item);
        } catch (e) {
            return Dec(0);
        }
    });
}
function read(a,b){
    if (b !== undefined){
        if (a.length>b.length){
            for (i=0;i<b.length;i++){
                a[i] = b[i]
            }
        }else{
            a = b
        }
    }
    return a
}
function changeThing(i){
    if (inchallenge === 34){
        thing[i][1] = thing[i][1].pow(1.01)
        return
    }
    if (thing[i][0].gte(9000)){
        thing[i][1] = thing[i][1].pow(1.001-0.0003*IS[0])
    }else if (thing[i][0].gte(9000)){
        thing[i][1] = thing[i][1].mul(dec(10).pow(dec(i+3).mul(4-challenge[2][3])))
    }else if (thing[i][0].gte(1500+1500*bku[7])){
        thing[i][1] = thing[i][1].mul(dec(10).pow(dec(i+3).mul(4-challenge[2][3])))
    }else if (thing[i][0].gte(1500)){
        thing[i][1] = thing[i][1].mul(dec(10).pow(dec(i+5).mul(2-challenge[2][3])))
    }else if (thing[i][0].gte(300)){
        thing[i][1] = thing[i][1].mul(dec(10).pow(dec(i+5).mul(2-challenge[2][3])))
    }else{
        thing[i][1] = thing[i][1].mul(dec(10).pow(dec(i+1).mul(2)))
    }
}
function hm_buysingle(i){
    if (thing[i][1].gt(product[0])){
        return
    }
    thing[i][2] = thing[i][2].add(1)
    thing[i][0] = thing[i][0].add(1)
    product[0] = product[0].sub(thing[i][1])
    if (thing[i][0].mod(5).eq(Zero) && thing[i][0].gte(5)) {
        thing[i][3] = thing[i][3].mul(2+ku[0]+ku[4]+bku[6]*1.5+challenge[2][0]*0.5)
    }
    if (thing[i][0].mod(10).eq(Zero) && thing[i][0].gte(10)){
        changeThing(i)
    }
    statics[2] = statics[2].add(1)
}
function hm_buyten(i){
    if (thing[i][1].gt(product[0])){
        return
    }
    thing[i][3] = thing[i][3].mul(dec(2+ku[0]+ku[4]+bku[6]*0.5+challenge[2][0]*1.5).pow(2))
    product[0] = product[0].sub(thing[i][1].mul(10))
    changeThing(i)
    thing[i][2] = thing[i][2].add(10)
    thing[i][0] = thing[i][0].add(10)
    statics[2] = statics[2].add(10)
}
function handin(){
    statics[0] = statics[0].add(1)
    if (reset[0][0].lte(5) || (inchallenge !== 2 && inchallenge !== 28 && inchallenge !== 32)){
        reset[0][0] = reset[0][0].add(1)
        if (reset[0][0].gte(175)){
            reset[0][1] = reset[0][1].pow(1.01)
        }else{
            if (reset[0][0].gte(100)){
                reset[0][1] = reset[0][1].mul(dec("1e130"))
            }
            if (reset[0][0].gte(20)){
                reset[0][1] = reset[0][1].mul(dec("1e80"))
            }else if (reset[0][0].gt(dec("5"))){
                if (ku[7]){
                    reset[0][1] = reset[0][1].mul(dec("1e14"))
                }else{
                    reset[0][1] = reset[0][1].mul(dec("1e15"))
                }
            }else{
                if (ku[3]){
                    reset[0][1] = reset[0][1].mul(dec("1e7"))
                }else{
                    reset[0][1] = reset[0][1].mul(dec("1e8"))
                }
            }
        }
        if (!challenge[1][1]){
            resetHM()
        }
        if (reset[0][0].gt(dec("5"))){
            if (ku[8] === 1){
                reset[0][2] = reset[0][2].mul(dec("20"))
            }else{
                reset[0][2] = reset[0][2].mul(dec("16"))
            }
            if (bku[2]){
                reset[0][2] = reset[0][2].mul(5)
            }
            if (IS[5]){
                reset[0][2] = reset[0][2].mul(4)
            }
        }
        if (!mu[5]){
            resetThing()
        }
        if(inchallenge === 1){
            thing[0][2] = dec("1")
        }
    }
    statics[0] = statics[0].add(1)
    statics[2] = statics[2].add(1)
    console.log(thing[0][0],thing[1][0])
}
function resetHM(){
    if (achievements[31]){
        product[0] = dec("9.9e27")
    }else if (ku[1]){
        product[0] = dec(990)
    }else{
        product[0] = dec(10)
    }
}
function resetCE(){
    celestias = [
        [Zero,dec("1"),Zero,dec("1")],//行星
        [Zero,dec("100"),Zero,dec("1")],//恒星
        [Zero,dec("1e5"),Zero,dec("1")],//星云
        [Zero,dec("1e9"),Zero,dec("1")],//星系
        [Zero,dec("1e14"),Zero,dec("1")],//超星系团
        [Zero,dec("100"),Zero,dec("1")],//超新星
        [Zero,dec("100"),Zero]//中子星
    ]
}
function resetSCGR(){
    if (!challenge[2][2]){
        generator[0] = [[Zero,dec("1"),Zero],[Zero,dec("10"),dec("10000")],dec("10000")]
    }
}
function resetHandin(){
    if (ku[5]){
        if (ku[3]){
            reset[0] = [dec(5),dec("1e37"),dec(1)]
        }else{
            reset[0] = [dec(5),dec("1e42"),dec(1)]
        }
    }else{
        reset[0] = [Zero,dec(100),dec(1)]
    }
}
function resetThing(){
    for(i=0;i<=5;i++){
        if (inchallenge === 34){
            thing[i][0] = dec(3000)
        }else{
            thing[i][0] = Zero
        }
        thing[i][1] = dec("10").pow(i+1)
        thing[i][2] = Zero
        thing[i][3] = dec("1")
    }
}
function storm(){
    storming = 0
    resetThing()
    resetHM()
    resetHandin()
    if (0 < inchallenge && inchallenge < 20){
        inchallenge = 0
        if (inchallenge === 9){
            unlock[1] = 1
        }
    }else{
        if (unlock[1]!==1){
            if (ku[6]===1){
                product[1] = product[1].add(dec("2"))
            }else{
                product[1] = product[1].add(dec("1"))
            }
        }else{
            product[1] = product[1].add(willget[1])
        }
    }
    if (inchallenge === 31){
        product[3] = product[3].div(willget[1].pow(0.02))
    }
    if (achievements[29]){
        statics[1] = statics[1].add(willget[1].add(1).log(10).pow(2))
    }else{
        statics[1] = statics[1].add(1)
    }
    willget[1] = Zero
    statics[2] = statics[2].add(1)

}
function mindover() {
    if (!bku[8]){
        for (i=0;i<=7;i++){
            challenge[0][i] = 0
        }
    }
    if (!bku[9]){
        ku = [0,0,0,0,0,0,0,0,0,0,0,0]
    }
    resetSCGR()
    resetHM()
    resetHandin()
    resetThing()
    product[1] = Zero
    willget[1] = Zero
    product[2] = product[2].add(willget[2])
    willget[2] = Zero
    statics[3] = statics[3].add(1)
}
function LGbrust() {
    resetHM()
    resetHandin()
    resetThing()
    resetCE()
    if (!mu[10]){
        ku = [0,0,0,0,0,0,0,0,0,0,0,0]
    }
    if (!challenge[2][0]){
        bku = [0,0,0,0,0,0,0,0,0,0,0,0]
    }
    if (!iu[0]){
        for (i=0;i<10;i++){
            mu[i] = 0
        }
    }
    if (!mu[11]){
        for (i=0;i<=7;i++){
            challenge[0][i] = 0
        }
    }
    if (!iu[1]){
        for (i=0;i<=7;i++){
            challenge[1][i] = 0
        }
    }
    resetSCGR()
    if (resetTree){
        for (i=0;i<IS.length;i++){
            IS[i] = 0
        }
        PT[1] = PT[0]
        resetTree = !resetTree
    }
    Balancer.KP[1] = Zero
    Balancer.MP[1] = Zero
    Balancer.IP[1] = Zero
    product[1] = Zero
    willget[1] = Zero
    product[2] = Zero
    willget[2] = Zero
    product[3] = dec(1)
    willget[3] = Zero
    product[4] = product[4].add(willget[4])
    willget[4] = Zero
    statics[4] = statics[4].add(1)
}
function ce_buysingle(i) {
    if (product[2].lt(celestias[i][1])){
        return
    }
    celestias[i][0] = celestias[i][0].add(1)
    celestias[i][2] = celestias[i][2].add(1)
    product[2] = product[2].sub(celestias[i][1])
    if (celestias[i][0].mod(2).eq(Zero) && celestias[i][0].gt(Zero) && i !== 6){
        celestias[i][3] = celestias[i][3].mul(4)
    }
    if (i !== 5 && i !== 6){
        if (celestias[i][0].mod(8).eq(Zero) && celestias[i][0].gt(Zero)){
            if (celestias[i][0].gte(160)){
                celestias[i][1] = celestias[i][1].pow(1.05-0.02*-IS[10])
            }
            if (celestias[i][0].gte("96")){
                celestias[i][1] = celestias[i][1].mul(dec(10).pow((i+1)*20-10*IS[10]))
            }else if (celestias[i][0].gte("56")){
                celestias[i][1] = celestias[i][1].mul(dec(10).pow((i+1)*(8-4*IS[10])))
            }else if (celestias[i][0].gte("32")){
                celestias[i][1] = celestias[i][1].mul(dec(10).pow((i+1)*(4-IS[10])))
            }else{
                celestias[i][1] = celestias[i][1].mul(dec(10).pow((i+1)*2))
            }
        }
    }else if (i === 5){
            if (celestias[i][0].mod(2).eq(Zero) && celestias[i][0].gt(Zero)){
                if (celestias[i][0].gte("8")){
                    celestias[i][1] = celestias[i][1].pow(2-0.3*IS[4])
                }else{
                    celestias[i][1] = celestias[i][1].mul("1e5")
                }
        }
    }else if (i === 6){
        if (celestias[i][0].mod(2).eq(Zero) && celestias[i][0].gt(Zero)){
            if (celestias[i][0].gte("8")){
                celestias[i][1] = celestias[i][1].pow(2-0.3*IS[4])
            }else{
                celestias[i][1] = celestias[i][1].mul("1e10")
            }
        }
    }
}
function buyPT(a) {
    if (a === 2){
        product[2] = product[2].sub(PTprice[2])
        PTprice[2] = PTprice[2].mul("1e10")
    }else if (a === 1){
        product[4] = product[4].sub(PTprice[1])
        PTprice[1] = PTprice[1].mul(2)
    }else{
        product[1] = product[1].sub(PTprice[0])
        PTprice[0] = PTprice[0].mul("1e50")
    }
    PT[0] = PT[0].add(1)
    PT[1] = PT[1].add(1)
}
function check(a) {
    let x = 0
    try{
        for (i=0;i<ISbefore[a].length;i++){
            if (IS[ISbefore[a][i]] !== 1){
                break
            }else{
                x += 1
            }
        }
        if (x !== ISbefore[a].length){
            return false
        }else{
            return true
        }
    }catch(e){
        return false
    }
}
// 游戏状态变量
let Maxnum = dec("1.79e308")
let Zero = dec("0")
let Prices = {
    ku : [dec("1"),dec("1"),dec("1"),dec("2"),dec("3"),dec("3"),dec("4"),dec("4"),dec("8"),dec("10"),dec("15"),dec("1e10")],
    bku : [dec("1e10"),dec("5e17"),dec("2e19"),dec("3e22"),dec("1e30"),dec("1e32"),dec("9e67"),dec("5e84"),dec("1e120"),dec("1e140"),dec("1e150"),dec("9e160")],
    mu : [dec("200"),dec("400"),dec("600"),dec("1000"),dec("1e7"),dec("1e7"),dec("5e8"),dec("3e17"),dec("1e60"),dec("1e65"),dec("1e110"),dec("2e153")],
    iu : [dec("1e6"),dec("4e10"),dec("1e16"),dec("1e114514"),dec("1e114514"),dec("1e114514"),dec("1e114514"),dec("1e114514"),dec("1e114514"),dec("1e114514"),dec("1e114514"),dec("1e114514")]
}
let Balancer = {//color:#4fbe67;text-shadow:0px 0px 8px #4fbe67;
    KP : [dec("1e50"),Zero,Zero,Zero],
    MP : [dec("1e15"),Zero,Zero,Zero],
    IP : [dec("1e5"),Zero,Zero,Zero],
    price : [dec("1e15"),Zero,Zero]
}//容量 填充量 是否 被 ♂ 填 ♂ 满 ♂ 过 ♂
let Goals = {
    mc : [dec("5e409"),dec("1e9700"),dec("1e1860"),dec("1e6740"),dec("1e9500"),dec("1e10000"),dec("1e13000"),dec("1e850")],
    ic : [dec("1e19"),dec("5e50"),dec("1e1302")]//从IC2开始
}
let thepasttime = new Date()
let endthechallenge = 0
let clicktime = 0
let version = 1.00
let clickthis = 0
let planetdestroy = 0
let willget = [
    Zero,
    Zero,
    Zero,
    Zero,
    Zero
]//得到的HM 得到的KP 得到的乘数 得到的思维 得到的灵感
let statics = [
    Zero,
    Zero,
    Zero,
    Zero,
    Zero
]//统计:交作业总次数,脑容量爆炸总次数,点击次数
let resetTree = 0
let PT = [Zero,Zero]//总-剩
let PTprice = [dec("1e600"),dec("1"),dec("1e100")]
let playtime = [0,0,0,0]//day,hour,min,sec
let wait = 0
let ISbefore = [[0],[0],[1],[1],[2],[3,5],[7],[7],[7],[12],[8,9,10],[12],[11],[11,12,13]]
//直接从IS[2]开始的
let iu = [0,0,0,0,0,0,0,0,0,0,0,0]
let ISprice = [dec(1),dec(1),dec(2),dec(4),Zero,dec(4),dec(1),dec(14),dec(6),dec(17),dec(10),dec(25),dec(40),dec(10),dec(7),
    dec(10)
]
let IS = [0,0,  0,0,0,0,  0,0, 0,0,0, 0,0,0, 0,0]
let autobuyer = [
    [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],//0~7
    [0,0],//8
    [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]//9~16
]//解锁，开关
let hmadder = dec("1")
let mdadder = dec("1")
let typingsaves = 0
let achievements = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//交作业 解锁学校 脑容量爆炸 购买升级 自动购买器 突破脑容量
let unlock = [0,0,0,0,0,0,0]
//知识 突破脑容量 思维
let bku = [0,0,0,0,0,0,0,0,0,0,0,0]//突破大脑极限升级
let challenge = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]
//是否解锁挑战(普通,思维)
let inchallenge = 0
let ku = [0,0,0,0,0,0,0,0,0,0,0,0]
//脑容量爆炸
let thelimit = Zero
let pointsshows = Zero
let storming = 0
let product = [dec("10"),Zero,Zero,dec("1"),Zero]
//作业 知识点 思维 思维乘数 灵感
let mu = [0,0,0,0,0,0,0,0,0,0,0,0]
let thing = [
    [Zero,dec("10"),Zero,dec("1")],//笔
    [Zero,dec("100"),Zero,dec("1")],//写作业机
    [Zero,dec("1000"),Zero,dec("1")],//文具盒
    [Zero,dec("1e4"),Zero,dec("1")],//电子白板
    [Zero,dec("1e5"),Zero,dec("1")],//班级
    [Zero,dec("1e6"),Zero,dec("1")]//学校
]//(购买次数,价格，数量，乘数)
let celestias = [
    [Zero,dec("1"),Zero,dec("1")],//行星
    [Zero,dec("100"),Zero,dec("1")],//恒星
    [Zero,dec("1e5"),Zero,dec("1")],//星云
    [Zero,dec("1e9"),Zero,dec("1")],//星系
    [Zero,dec("1e14"),Zero,dec("1")],//超星系团
    [Zero,dec("100"),Zero,dec("1")],//超新星
    [Zero,dec("100"),Zero]//中子星
]//(购买次数,价格,数量,乘数)
let reset =[[dec("0"),dec("100"),dec("1")]]
//交作业(重置次数,价格,给的乘数)
let producttime = 0
let buymaxCD = 0
let generator = [
    [
        [Zero,dec("1"),Zero],//学校生产
        [Zero,dec("10"),dec("10000")],//生产间隔
        dec("10000")//计数间隔
    ]
]//次数，价格，产量
//窗口——————————————————————————————————————————————————————————————————————————————————
helpon.addEventListener("click", function(){
    helpwindow.style.display = "block"
})
helpoff.addEventListener("click", function(){
    helpwindow.style.display = "none"
})
{//自动购买器————————————————————————————————————————————————————————————————————————————
setInterval(function(){
        if (unlock[1]!==1){
            if (inchallenge === 8){
                if (product[0].gte(dec("1e600"))){
                    storming = 1
                }
            }else if (product[0].gte(Maxnum)){
                storming = 1
            }
        }else{
            if (product[0].gte(Maxnum) || willget[1].gt(Zero)){
                brainstorm.style.animationPlayState = 'running'
                brainstorm.disabled = false
                let KPplus = dec(1)
                if (ku[6]){
                    KPplus = KPplus.mul(2)
                }
                if (mu[9]){
                    KPplus = KPplus.mul((product[2].pow(0.15+0.1*IS[6])).add(1))
                }
                if (challenge[1][5]){
                    if (dec("10").pow(product[0].div(Maxnum).log(10).div(27)).mul(KPplus).gt(willget[1])){
                        willget[1] = dec("10").pow(product[0].div(Maxnum).log(10).div(27)).mul(KPplus)
                    }
                }else if (bku[5]===1){
                    if (dec("10").pow(product[0].div(Maxnum).log(10).div(30)).mul(KPplus).gt(willget[1])){
                        willget[1] = dec("10").pow(product[0].div(Maxnum).log(10).div(30)).mul(KPplus)
                    }
                }else if (ku[11]===1){
                    if (dec("10").pow(product[0].div(Maxnum).log(10).div(50)).mul(KPplus).gt(willget[1])){
                        willget[1] = dec("10").pow(product[0].div(Maxnum).log(10).div(50)).mul(KPplus)
                    }
                 }else{
                    if (dec("10").pow(product[0].div(Maxnum).log(10).div(70)).mul(KPplus).gt(willget[1])){
                        willget[1] = dec("10").pow(product[0].div(Maxnum).log(10).div(70)).mul(KPplus)
                    }
                }
            }else{
                brainstorm.style.animationPlayState = 'paused'
                brainstorm.disabled = true
            }
            if (product[1].gte("1e100") || willget[2].gt(0)){
                let MPplus = dec(1)
                if (mu[3]){
                    MPplus = MPplus.mul((product[1].div(dec("1e100"))).pow(0.07+0.03*challenge[1][7]))
                }
                if (challenge[1][2]){
                    if (dec(10).pow(product[1].div(dec("1e100")).log(10).div(16)).mul(MPplus).gt(willget[2])){
                        willget[2] = dec(10).pow(product[1].div(dec("1e100")).log(10).div(16)).mul(MPplus)
                    }
                }else if (mu[2]){
                    if (dec(10).pow(product[1].div(dec("1e100")).log(10).div(17.5)).mul(MPplus).gt(willget[2])){
                        willget[2] = dec(10).pow(product[1].div(dec("1e100")).log(10).div(17.5)).mul(MPplus)
                    }
                }else{
                    if (dec(10).pow(product[1].div(dec("1e100")).log(10).div(18)).mul(MPplus).gt(willget[2])){
                        willget[2] = dec(10).pow(product[1].div(dec("1e100")).log(10).div(18)).mul(MPplus)
                    }
                }
            }
            if (product[1].gte("1e600")){
                willget[4] = dec(10).pow((product[1].div("1e600")).log(10).div(100)).mul(statics[4])
            }else{
                willget[4] = Zero
            }
        }
        if (20 < inchallenge && inchallenge < 30){
            if (product[0].gte(Goals.mc[inchallenge-21]/*HM目标*/)){
                if (endthechallenge === 0){
                    newson(`挑战${inchallenge}可以完成,进行思维过载以完成挑战`)
                    endthechallenge = 1
                }
            }
        }
        
        if (inchallenge === 31 && product[3].lte(1)){
            if (endthechallenge === 0){
                newson("挑战31已完成,进行灵感爆发以完成挑战")
                endthechallenge = 1
            }
        }
        if (31 < inchallenge && inchallenge < 40){
            if (willget[1].gte(Goals.ic[inchallenge-32]/*HM目标*/)){
                if (endthechallenge === 0){
                    newson(`挑战${inchallenge}可以完成,进行灵感爆发以完成挑战`)
                    endthechallenge = 1
                }
            }
        }
},0)
setInterval(function(){
    if (autobuyer[7][0]===1 && autobuyer[7][1]===1){
        if (unlock[1]!==1){
            if (inchallenge === 8){
                if (product[0].gte(dec("1e600"))){
                    storm()
                    challenge[0][7] = 1
                }
            }else{
                if (product[0].gte(Maxnum)){
                    if (inchallenge !== 0){
                        challenge[0][inchallenge-1] = 1
                    }
                    storm()
                }
            }
        }else{
            if (willget[1].gte(thelimit) && willget[1].gte(dec("1"))){
                storm()
            }
        }
    }
    if (autobuyer[16][0] && autobuyer[16][1]){
        if (willget[2].gt(Zero) && (inchallenge > 30 || inchallenge < 10)){
            mindover()
        }else if ((inchallenge < 30 && inchallenge > 10) && product[0].gte(Goals.mc[inchallenge-21])){
            challenge[1][inchallenge-21] = 1
            inchallenge = 0
            mindover()
        }
    }
    
},10)
setInterval(function(){
    if (autobuyer[6][0]===1 && autobuyer[6][1]===1 && product[0].gte(reset[0][1]) && inchallenge !== 28 && inchallenge !== 32){
        if (challenge[1][1]){
            while (product[0].gte(reset[0][1])) {
                handin()
            }
            if (achievements[31]){
                product[0] = dec("9.9e27")
            }else if (ku[1]){
                product[0] = dec(990)
            }else{
                product[0] = dec(10)
            }
        }else{
            handin()
        }
    }
},1)
setInterval(function(){
    for (let i=5;i>=0;i--){
        if ((inchallenge !== 1 || i !== 0) && inchallenge !== 26){
            if (autobuyer[i][0]===1 && autobuyer[i][1]===1 && reset[0][0].gte(dec(i))){
                if (challenge[1][3]){
                    while (product[0].gte(thing[i][1])) {
                        if (product[0].gte(thing[i][1].mul(10)) && thing[i][0].mod(10).eq(Zero)){
                            hm_buyten(i)
                        }else{
                            hm_buysingle(i)
                        }
                    }
                }else if (product[0].gte(thing[i][1].mul(dec("10"))) && thing[i][0].mod(10).eq(Zero) && bku[0] === 1){
                    hm_buyten(i)
                    clickthis = i
                    if (inchallenge === 27){
                        for (t=0;t<i;t++){
                            thing[t][0] = Zero
                            thing[t][1] = dec("10").pow(i+1)
                            thing[t][2] = Zero
                            thing[t][3] = dec("1")
                            product[0] = Zero
                        }
                    }
                }else if(product[0].gte(thing[i][1])){
                    hm_buysingle(i)
                    clickthis = i
                    if (inchallenge === 27){
                        for (t=0;t<i;t++){
                            thing[t][0] = Zero
                            thing[t][1] = dec("10").pow(i+1)
                            thing[t][2] = Zero
                            thing[t][3] = dec("1")
                        }
                    }
                }
            }
        }
    }
    for (let i=0;i<=6;i++){
        if (autobuyer[i+9][0] && autobuyer[i+9][1]){
            if(product[2].gte(celestias[i][1])){
                ce_buysingle(i)
            }
        }
    }
},1)
}
setInterval(function(){
    if (autobuyer[8][0] && autobuyer[8][1]){
        if (product[1].gte(generator[0][0][1])){
            if (generator[0][0][2].eq(Zero)){
                generator[0][0][2] = generator[0][0][2].add(dec("1"))
            }else{
                if (generator[0][0][0].gte(50) && !mu[8]){
                    generator[0][0][2] = generator[0][0][2].mul(dec(1.5))
                }else{
                    generator[0][0][2] = generator[0][0][2].mul(dec(2))
                }
            }
            generator[0][0][0] = generator[0][0][0].add(dec("1"))
            product[1] = product[1].sub(generator[0][0][1])
            if (generator[0][0][0].mod(dec("2")).eq(dec("0")) && generator[0][0][0].gt(Zero)){
                generator[0][0][1] = generator[0][0][1].mul(dec("100"))
            }
        }
        if (generator[0][1][2].gt(Zero) && product[1].gte(generator[0][1][1])){
            generator[0][1][2] = generator[0][1][2].sub(dec("100"))
            generator[0][1][0] = generator[0][1][0].add(dec("1"))
            product[1] = product[1].sub(generator[0][1][1])
            generator[0][2] = generator[0][1][2]
            if (generator[0][1][0].mod(dec("5")).eq(dec("0")) && generator[0][1][0].gt(Zero)){
                generator[0][1][1] = generator[0][1][1].mul(dec("1e3"))
            }
        }
    }
},1)
for (let i=0;i<autobuyer.length;i++){
    document.getElementById("switch"+(i+1)).addEventListener("click", function(){
    if (autobuyer[i][1]===1){
        autobuyer[i][1] = 0
    }else{
        autobuyer[i][1] = 1
    }
},1)
//设置上限
braindownlimit.addEventListener('blur', function() {
    wait = 1
})
braindownlimit.addEventListener('focus', function() {
    wait = 0
})
document.getElementById("unlockbalancer").addEventListener("click",function(){
    unlock[4] = 1
    if (document.getElementById(thePage).style.animation != "3s ease 0s 1 normal none running scale111"){
        switchPage("homework+")
        let pages = document.querySelectorAll('.page')
        let pagesid = []
        for (i=0;i<pages.length;i++){
            pagesid[i] = pages[i].id
        }
        setTimeout(function(){
            for (i=0;i<pagesid.length;i++){
                document.getElementById(pagesid[i]).style.animation = "scale111 5s"
                setTimeout(function(){
                        document.getElementById(pagesid[i]).style.animation = "none"
                },5000)
            }
            setTimeout(function(){
                for (i=0;i<pagesid.length;i++){
                    document.getElementById(pagesid[i]).style.animation = "none"
                }
            },10000)
            setTimeout(function(){
                newson("喂?!你在干什么?!",2000)
                setTimeout(function(){
                    newson("你把游戏运行的平衡打破了!")
                    setTimeout(function(){
                        newson("好在你的资源间的聚合力足够强,能让正在分解的游戏重新聚合")
                        setTimeout(function(){
                            newson("在你的眼中,就是每个页面都先\"拉伸\"再\"收缩\"")
                            setTimeout(function(){
                                newson("不管了,先让我们看看你解锁的东西吧")
                            },3200)
                        },3200)
                    },3200)
                },2200)
            },1000)
        },600)
    }
})
setInterval(function(){
    if (wait){
        try {
        thelimit = dec(braindownlimit.value)
      } catch (e) {
        thelimit = dec("1")
      }
    }
},10)
}
document.getElementById("resetTree").addEventListener("click",function(){
    resetTree = !resetTree
})
document.getElementById("charge1").addEventListener("click",function(){
    if (achievements[33]){
        if (Balancer.KP[3] === Zero){
            Balancer.KP[3] = dec(1)
        }else{
            Balancer.KP[3] = Zero
        }
    }else{
        Balancer.KP[1] = Balancer.KP[1].add(product[1].pow(0.02+0.005*IS[12]))
        product[1] = product[1].sub(product[1].pow(0.02+0.005*IS[12]))
    }
})
document.getElementById("charge2").addEventListener("click",function(){
    if (achievements[33]){
        if (Balancer.MP[3] === Zero){
            Balancer.MP[3] = dec(1)
        }else{
            Balancer.MP[3] = Zero
        }
    }else{
        Balancer.MP[1] = Balancer.MP[1].add(product[2].pow(0.02+0.005*IS[12]))
        product[2] = product[2].sub(product[2].pow(0.02+0.005*IS[12]))
    }
})
document.getElementById("UPbalancer").addEventListener("click",function(){
    Balancer.KP[0] = Balancer.KP[0].mul("1e15")
    if (Balancer.price[1].gte(2)){
        Balancer.MP[0] = Balancer.MP[0].mul("1e5")
    }
    if (Balancer.price[1].gte(4)){
        Balancer.IP[0] = Balancer.IP[0].mul("1e3")
    }
    Balancer.KP[2] = Zero
    Balancer.MP[2] = Zero
    Balancer.IP[2] = Zero
    Balancer.price[0] = Balancer.price[0].mul("1e5")
    Balancer.price[1] = Balancer.price[1].add(1)
})
{//购买
buy[0].addEventListener("click", function(){
    product[0] = product[0].add(thing[0][2].mul(thing[0][3].mul(reset[0][2])))
    if (achievements[18] === 0 && product[0].gte(dec("1e1000"))){
        achievements[18] = 1
        achievementson("达成成就<br>饮鸠止渴")
    }
})
//作业区域购买
for (let i=0;i<=5;i++) {
    buy[i+1].addEventListener("click", function() {
        hm_buysingle(i)
        clickthis = i
        if (inchallenge === 27){
            for (t=0;t<i;t++){
                thing[t][0] = Zero
                thing[t][1] = dec("10").pow(i+1)
                thing[t][2] = Zero
                thing[t][3] = dec("1")
            }
        }
    })
}
for (let i=0;i<=6;i++){
    document.getElementById("celestiaBuy"+(i+1)).addEventListener("click",function(){
        ce_buysingle(i)
    })
}
for (let i=0;i<=2;i++){
    document.getElementById("tobuyPT"+i).addEventListener("click",function(){
        buyPT(i)
    })
}
for (let i=0;i<=11;i++){
    document.getElementById("mu"+(i+1)).addEventListener("click",function(){
        mu[i] = 1
        product[2] = product[2].sub(Prices.mu[i])
    })
}
for (let i=0;i<=11;i++){
    document.getElementById("iu"+i).addEventListener("click",function(){
        iu[i] = 1
        product[4] = product[4].sub(Prices.iu[i])
    })
}
document.getElementById("MindOver").addEventListener("click",function(){
    if (willget[2].gt(Zero) && (inchallenge > 30 || inchallenge < 10)){
        mindover()
    }else if ((inchallenge < 30 && inchallenge > 10) && endthechallenge){
        challenge[1][inchallenge-21] = 1
        inchallenge = 0
        mindover()
    }
})
document.getElementById("brust").addEventListener("click",function(){
    if (30 < inchallenge && inchallenge <40){
        if (endthechallenge === 1){
            challenge[2][inchallenge-31] = 1
            inchallenge = 0
            LGbrust()
            endthechallenge = 0
        }
    }else{
        if (willget[4].gt(0))
        LGbrust()
    }
})
//知识升级
for(let i=0;i<=11;i++){
    document.getElementById("ku"+(i+1)).addEventListener("click", function(){
        ku[i] = 1
        product[1] = product[1].sub(Prices.ku[i])
    })
}
for(let i=0;i<=11;i++){
    document.getElementById("bku"+(i+1)).addEventListener("click", function(){
        bku[i] = 1
        product[1] = product[1].sub(Prices.bku[i])
    })
}
document.getElementById("generatorup1").addEventListener("click",function(){
    if (generator[0][0][2].eq(Zero)){
        generator[0][0][2] = generator[0][0][2].add(dec("1"))
    }else{
        if (generator[0][0][0].gte(50) && !mu[8]){
            generator[0][0][2] = generator[0][0][2].mul(dec(1.5))
        }else{
            generator[0][0][2] = generator[0][0][2].mul(dec(2))
        }
    }
    generator[0][0][0] = generator[0][0][0].add(dec("1"))
    product[1] = product[1].sub(generator[0][0][1])
    if (generator[0][0][0].mod(dec("2")).eq(dec("0")) && generator[0][0][0].gt(Zero)){
        generator[0][0][1] = generator[0][0][1].mul(dec("100"))
    }
})
document.getElementById("generatorup2").addEventListener("click",function(){
    generator[0][1][2] = generator[0][1][2].sub(dec("100"))
    generator[0][1][0] = generator[0][1][0].add(dec("1"))
    product[1] = product[1].sub(generator[0][1][1])
    if (generator[0][1][0].mod(dec("5")).eq(dec("0")) && generator[0][1][0].gt(Zero)){
        generator[0][1][1] = generator[0][1][1].mul(dec("1e3"))
    }
})
document.getElementById("resetchallenge").addEventListener("click",function(){
    for (i=0;i<=7;i++){
        challenge[0][i] = 0
    }
})
document.getElementById("resetchallenge2").addEventListener("click",function(){
    for (i=0;i<=7;i++){
        challenge[1][i] = 0
    }
})
document.getElementById("resetchallenge3").addEventListener("click",function(){
    for (i=0;i<=7;i++){
        challenge[2][i] = 0
    }
})
for (let i=0;i<IS.length;i++){
    try{
        document.getElementById("IS"+i).addEventListener("click",function(){
            IS[i] = 1
            PT[1] = PT[1].sub(ISprice[i])
        })
    }catch(e){

    }
}
for(let i=0;i<=8;i++){
    hc1[i].addEventListener("click", function(){
        inchallenge = i+1
        storm()
        switchPage("homework+")
        inchallenge = i+1
        if (i === 8){
            producttime = 2500
        }
        if (i === 0){
            thing[0][2] = dec("1")
        }
    })
}
for(let i=0;i<=7;i++){
    document.getElementById("challenge2"+(i+1)).addEventListener("click",function(){
        mindover()
        
        if (i===3){
            product[3] = dec(1)
        }
        if (i===5){
            clickthis = 0
        }
        switchPage("homework+")
        product[1] = dec("1e30")
        inchallenge = 21+i
        endthechallenge = 0
    })
}
for(let i=0;i<=7;i++){
    document.getElementById("challenge3"+(i+1)).addEventListener("click",function(){
        switchPage("homework+")
        LGbrust()
        inchallenge = 31+i
        product[1] = dec("1e100")
        if (inchallenge === 31){
            product[3] = dec("1e10")
        }
        if (inchallenge === 33){
            ku = [0,0,0,0,0,0,0,0,0,0,0,0]
            bku = [0,0,0,0,0,0,0,0,0,0,0,0]
        }
        if (inchallenge === 34){
            for(c=0;c<=5;c++){
                thing[c][0] = dec(3000)
            }
        }
    })
}
document.getElementById("exitchallenge").addEventListener("click", function(){
    if (inchallenge <20){
        storm()
    }else if (inchallenge<30){
        mindover()
    }else{
        LGbrust()
    }
    endthechallenge = 0
    inchallenge = 0
})
}
{//重置
resetbutton[0].addEventListener("click", function(){
    handin()
})
brainstorm.addEventListener("click", function(){
    if (inchallenge !== 0){
        challenge[0][inchallenge-1] = 1
    }
    storm()
    statics[1] = statics[1].add(dec("1"))
})
}
document.getElementById("focus").addEventListener("click", function(){
    producttime = 1000
})
let abcdefg = 1
document.addEventListener('keydown', function(event) {
    if(event.key === 'm'){
        if (willget[2].gt(Zero) && (inchallenge > 30 || inchallenge < 10)){
            mindover()
        }else if ((inchallenge < 30 && inchallenge > 10) && product[0].gte(Goals.mc[inchallenge-21])){
            challenge[1][inchallenge-21] = 1
            inchallenge = 0
            mindover()
        }
    }
    if(event.key === 'b'){
        if (brainstorm.disabled === false){
            if (inchallenge !== 0){
                challenge[0][inchallenge-1] = 1
            }
            storm()
        }
    }
    if (event.key === 'l'){
        if (30 < inchallenge && inchallenge <40){
            if (endthechallenge === 1){
                challenge[2][inchallenge-31] = 1
                inchallenge = 0
                LGbrust()
                endthechallenge = 0
            }
        }else{
            if (willget[4].gt(0))
            LGbrust()
        }
    }
    if (event.key === 'e'){
        if (inchallenge <20){
            storm()
        }else if (inchallenge<30){
            mindover()
        }else{
            LGbrust()
        }
        endthechallenge = 0
        inchallenge = 0
    }
    if (event.key === 's'){
        localStorage.setItem("file",turntosaves())
        newson("已保存入本地!")
    }
    if(event.key === 'c'){
        document.getElementById(thePage).style.animation = "scale111 2s"
        setTimeout(function(){
                document.getElementById(thePage).style.animation = "none"
        },2100)
    }
})
document.addEventListener('click', function() {
    statics[2] = statics[2].add(dec("1"))
})
let MD = 0
let burnHM = 0
document.addEventListener("mousedown",function() {
    if (document.getElementById("statics3").style.animation != '0.7s ease 0s 1 normal none running clickdown'){
        document.getElementById("statics3").style.animation = 'clickdown 0.7s'
        setTimeout(function(){
            document.getElementById("statics3").style.animation = 'none'
        },700)
    }
    MD = 1
})
document.addEventListener("mouseup",function() {
    MD = 0
})
let mouseX = 0
let mouseY = 0
document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
setInterval(function(){
    if (clicktime>=1){
        document.getElementById("fire").style.display = 'block'
        document.getElementById("fire").style.left = (mouseX-43)+"px"
        document.getElementById("fire").style.top = (mouseY-180)+"px"
        newson("你点把火干什么?!你不会是要……烧掉作业吧?!")
    }else{
        document.getElementById("fire").style.display = 'none'
    }
    if (MD){
        clicktime += 0.005
    }else{
        clicktime = 0
    }
},1)
buymaxbutton.addEventListener("click", function(){
    if (IS[4]){
        buymaxCD = 100
    }else{
        buymaxCD = 1000
    }
    for (i=5;i>=0;i--){
        if (inchallenge !== 1 || i !==0){
            while (product[0].gte(thing[i][1]) && reset[0][0].gte(dec(i))){
                if (product[0].gte(thing[i][1].mul(dec("10"))) && (thing[i][0].mod(10)).eq(Zero)){
                    hm_buyten(i)
                    clickthis = i
                }else{
                    hm_buysingle(i)
                    clickthis = i
                }
            }
        }
    }
})
setInterval(function() {//生产
    playtime[3] += 0.05
    if (playtime[3] >= 60){
        playtime[3] = 0
        playtime[2] += 1
    }
    if (playtime[2] >= 60){
        playtime[2] = 0
        playtime[1] += 1
    }
    if (playtime[1] >= 24){
        playtime[1] = 0
        playtime[0] += 1
    }
    if (Math.trunc(playtime[3]*100)%200 >= 100){
        document.getElementById("statics4").style.backgroundColor = "#747474"
    }else{
        document.getElementById("statics4").style.backgroundColor = "#ffffff"
    }
    if(buymaxCD > 0){
        buymaxCD -= 5
    }else{
        buymaxCD = 0
    }
    if(producttime > 0){
        producttime -= 50
    }else{
        producttime = 0
    }
    if (inchallenge === 22 && product[0].gt("1e10")){
        product[0] = product[0].pow(0.5)
    }
    if (ku[9] && product[1].lte("1e400")){
        product[1] = product[1].add(product[1].mul(0.0002))
    }
    if (mu[4] && willget[2].gt(Zero)){
        product[2] = product[2].add(willget[2].mul(0.002).mul(1+mu[7]*9))
    }
    if (IS[2]){
        product[1] = product[1].add(willget[1].mul(0.025))
    }
    hmadder = dec(1)
    //hmadder = hmadder.mul(10)
    hmadder = hmadder.mul(Balancer.KP[1].pow(3+0.5*challenge[2][1]).add(1))
    if (inchallenge !== 28 && ku[2]){
        hmadder = hmadder.mul((product[1].add(2)).pow(0.25+0.1*challenge[1][4]))
    }
    if (ku[10]){
        hmadder = hmadder.mul(dec("1e3"))
    }
    if (bku[1]){
        if (bku[10]){
            hmadder = hmadder.mul(dec(10).pow(product[0].add(1).log(10).div(500)))
        }else{
            hmadder = hmadder.mul(dec(10).pow(product[0].add(1).log(10).div(1000)))
        }
    }
    if (bku[3]){
        hmadder = hmadder.mul(dec(playtime[3]+playtime[2]*60+playtime[1]*3600+playtime[0]*86400).mul(0.01))
    }
    if (bku[4]){
        hmadder = hmadder.mul(statics[2].pow(0.25))
    }
    if (IS[1]){
        hmadder = hmadder.mul((statics[1].add(1)).pow(0.9))
    }
    hmadder = hmadder.mul(reset[0][2])
    if (IS[14]){
        hmadder = hmadder.mul(reset[0][0].add(1).pow(reset[0][0].mul(0.5)))
    }
    if (inchallenge === 31){
        hmadder = hmadder.div(product[3])
    }else if(inchallenge !== 28 && inchallenge !== 32){
        hmadder = hmadder.mul(product[3].pow(1+0.25*IS[9]))
    }
    if (storming!==1){
    //签字笔生产
    if (inchallenge === 1){
        thing[0][2] = thing[0][2].add((thing[2][2].mul(thing[2][3].mul(hmadder))).pow(0.35))
    }else if (inchallenge === 4){
        if (producttime > 0){
            thing[0][2] = thing[0][2].add(thing[2][2].mul(thing[2][3].mul(hmadder)))
        }
    }else if (inchallenge === 5 || inchallenge === 32){
        thing[0][2] = thing[0][2].add((thing[2][2].mul(thing[2][3].mul(hmadder))).pow(0.8))
    }else if (inchallenge === 21){
        thing[0][2] = thing[0][2].add((thing[2][2].mul(thing[2][3].mul(hmadder))).pow(0.5))
    }else if (inchallenge === 25){
        if (clickthis === 2){
            thing[0][2] = thing[0][2].add(thing[2][2].mul(thing[2][3].mul(hmadder)))
        }else{
        thing[0][2] = thing[0][2].add((thing[2][2].mul(thing[2][3].mul(hmadder))).pow(0.25))
        }
    }else{
        thing[0][2] = thing[0][2].add(thing[2][2].mul(thing[2][3].mul(hmadder)))
    }
    //写作业机
    if (inchallenge === 4){
        if (producttime > 0){
            thing[1][2] = thing[1][2].add(thing[3][2].mul(thing[3][3].mul(hmadder)))
        }
    }else if (inchallenge === 5 || inchallenge === 32){
        thing[1][2] = thing[1][2].add((thing[3][2].mul(thing[3][3].mul(hmadder))).pow(0.8))
    }else if (inchallenge === 21  || inchallenge === 32){
        thing[1][2] = thing[1][2].add((thing[3][2].mul(thing[3][3].mul(hmadder))).pow(0.5))
    }else if (inchallenge === 25){
        if (clickthis === 3){
            thing[1][2] = thing[1][2].add(thing[3][2].mul(thing[3][3].mul(hmadder)))
        }else{
            thing[1][2] = thing[1][2].add((thing[3][2].mul(thing[3][3].mul(hmadder))).pow(0.25))
        }
    }else{
        thing[1][2] = thing[1][2].add(thing[3][2].mul(thing[3][3].mul(hmadder)))
    }
    //文具盒
    if (inchallenge === 4){
        if (producttime > 0){
            thing[2][2] = thing[2][2].add(thing[3][2].mul(thing[4][3].mul(hmadder)))
        }
    }else if (inchallenge === 5 || inchallenge === 32){
        thing[2][2] = thing[2][2].add((thing[4][2].mul(thing[4][3].mul(hmadder))).pow(0.8))
    }else if (inchallenge === 21){
        thing[2][2] = thing[2][2].add((thing[4][2].mul(thing[4][3].mul(hmadder))).pow(0.5))
    }else if (inchallenge === 23  || inchallenge === 32){
    }else if (inchallenge === 25){
        if (clickthis === 4){
            thing[2][2] = thing[2][2].add(thing[4][2].mul(thing[4][3].mul(hmadder)))
        }else{
            thing[2][2] = thing[2][2].add((thing[4][2].mul(thing[4][3].mul(hmadder))).pow(0.25))
        }
    }else{
        thing[2][2] = thing[2][2].add(thing[4][2].mul(thing[4][3].mul(hmadder)))
    }
    //电子白板
    if (inchallenge === 4){
        if (producttime > 0){
            thing[3][2] = thing[3][2].add(thing[4][2].mul(thing[4][3].mul(hmadder)))
        }
    }else if (inchallenge === 5 || inchallenge === 32){
        thing[3][2] = thing[3][2].add((thing[4][2].mul(thing[4][3].mul(hmadder))).pow(0.8))
    }else if (inchallenge === 21){
        thing[3][2] = thing[3][2].add((thing[4][2].mul(thing[4][3].mul(hmadder))).pow(0.5))
    }else if (inchallenge === 23 || inchallenge === 32){
    }else if (inchallenge === 25){
        if (clickthis === 4){
            thing[3][2] = thing[3][2].add(thing[4][2].mul(thing[4][3].mul(hmadder)))
        }else{
            thing[3][2] = thing[3][2].add((thing[4][2].mul(thing[4][3].mul(hmadder))).pow(0.25))
        }
    }else{
        thing[3][2] = thing[3][2].add(thing[4][2].mul(thing[4][3].mul(hmadder)))
    }
    //班级
    if (inchallenge === 3){

    }else if (inchallenge === 4){
        if (producttime > 0){
            thing[4][2] = thing[4][2].add(thing[5][2].mul(thing[5][3].mul(hmadder)))
        }
    }else if (inchallenge === 5 || inchallenge === 32){
        thing[4][2] = thing[4][2].add((thing[5][2].mul(thing[5][3].mul(hmadder))).pow(0.8))
    }else if (inchallenge === 21){
        thing[4][2] = thing[4][2].add((thing[5][2].mul(thing[5][3].mul(hmadder))).pow(0.5))
    }else if (inchallenge === 23 || inchallenge === 32){
    }else if (inchallenge === 25){
        if (clickthis === 5){
            thing[4][2] = thing[4][2].add(thing[5][2].mul(thing[5][3].mul(hmadder)))
        }else{
            thing[4][2] = thing[4][2].add((thing[5][2].mul(thing[5][3].mul(hmadder))).pow(0.25))
        }
    }else{
        thing[4][2] = thing[4][2].add(thing[5][2].mul(thing[5][3].mul(hmadder)))
    }
    //作业
    if (inchallenge === 4){
        if (producttime > 0){
            product[0] = product[0].add(thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(hmadder)))))
        }
    }else if (inchallenge === 5 || inchallenge === 32){
        product[0] = product[0].add((thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(hmadder))))).pow(0.8))
    }else if (inchallenge === 21  || inchallenge === 32){
        product[0] = product[0].add((thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(hmadder))))).pow(0.5))
    }else if (inchallenge === 25){
        if (clickthis === 0 || clickthis === 1){
            product[0] = product[0].add(thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(hmadder)))))
        }else{
            product[0] = product[0].add((thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(hmadder))))).pow(0.25))
        }
    }else{
        product[0] = product[0].add(thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(hmadder)))))
    }
    //每秒获得作业
    if (inchallenge === 4){
        if (producttime > 0){
            willget[0] = thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(hmadder)))).mul(dec("20"))
        }else{
            willget[0] = Zero
        }
    }else if (inchallenge === 5 || inchallenge === 32){
        willget[0] = (thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(hmadder)))).mul(20)).pow(0.8)
    }else if (inchallenge === 21){
        willget[0] = (thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(hmadder)))).mul(20)).pow(0.5)
    }else if (inchallenge === 25){
        if (clickthis === 0 || clickthis === 1){
            willget[0] = thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(hmadder)))).mul(20)
        }else{
            willget[0] = (thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(hmadder))))).pow(0.25).mul(20)
        }
    }else{
        willget[0] = thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(hmadder)))).mul(20)
    }
    }
    if(generator[0][2].gt(Zero)){
        generator[0][2] = generator[0][2].sub(dec("50"))
    }else{
    thing[5][2] = thing[5][2].add(generator[0][0][2])
    generator[0][2] = generator[0][1][2]
    }
    mdadder = dec("1")
    mdadder = mdadder.mul(Balancer.KP[1].pow(0.5+0.25*challenge[2][1]).add(1))
    if (!mu[1]){
        mdadder = mdadder.mul(0.005)
    }
    if (mu[0]){
        mdadder = mdadder.mul(((celestias[5][2].add(celestias[0][2].pow(0.01))).mul(celestias[5][3]).add(1)).pow(celestias[6][2].mul(0.25*(1+challenge[1][0])).add(1)))
    }else{
        mdadder = mdadder.mul((celestias[5][2].mul(celestias[5][3]).add(1)).pow(celestias[6][2].mul(0.25*(1+challenge[1][0])).add(1)))
    }
    if (inchallenge !== 31){
        celestias[3][2] = celestias[3][2].add(celestias[4][2].mul(celestias[4][3]).mul(mdadder))
        celestias[2][2] = celestias[2][2].add(celestias[3][2].mul(celestias[3][3]).mul(mdadder))
        celestias[1][2] = celestias[1][2].add(celestias[2][2].mul(celestias[2][3]).mul(mdadder))
        celestias[0][2] = celestias[0][2].add(celestias[1][2].mul(celestias[1][3]).mul(mdadder))
        if (inchallenge === 24){
            product[3] = product[3].add((celestias[0][2].mul(celestias[0][3]).mul(celestias[1][2].mul(mu[6]).add(1)).mul(mdadder)).pow(0.25))
            willget[3] = (celestias[0][2].mul(celestias[0][3]).mul(celestias[1][2].mul(mu[6]).add(1)).mul(mdadder)).pow(0.25).mul(20)
        }else{
            product[3] = product[3].add(celestias[0][2].mul(celestias[0][3]).mul(celestias[1][2].mul(mu[6]).add(1)).mul(mdadder))
            willget[3] = celestias[0][2].mul(celestias[0][3]).mul(20).mul(celestias[1][2].mul(mu[6]).add(1)).mul(mdadder)
        }
    }
    if (Balancer.KP[3].eq(1) && product[2].gt(10)){
        Balancer.KP[1] = Balancer.KP[1].add(product[1].pow(0.02+0.005*IS[12]))
        product[1] = product[1].sub(product[1].pow(0.02+0.005*IS[12]))
    }
    if (Balancer.MP[3].eq(1) && product[2].gt(10)){
        Balancer.MP[1] = Balancer.MP[1].add(product[2].pow(0.02+0.005*IS[12]))
        product[2] = product[2].sub(product[2].pow(0.02+0.005*IS[12]))
    }
    if (true/*以后某个升级*/){
        Balancer.KP[1] = Balancer.KP[1].mul(0.65+0.1*iu[2])
        Balancer.MP[1] = Balancer.MP[1].mul(0.65+0.1*iu[2])
        Balancer.IP[1] = Balancer.IP[1].mul(0.65+0.1*iu[2])
    }
    if (Balancer.KP[1].lt(1)){
        Balancer.KP[1] = Zero
    }
    if (Balancer.MP[1].lt(1)){
        Balancer.MP[1] = Zero
    }
    if (Balancer.IP[1].lt(1)){
        Balancer.IP[1] = Zero
    }
    if (Balancer.KP[1].gt(Balancer.KP[0])){
        Balancer.KP[2] = dec(1)
        Balancer.KP[1] = Balancer.KP[0]
    }
    if (Balancer.MP[1].gt(Balancer.MP[0])){
        Balancer.MP[2] = dec(1)
        Balancer.MP[1] = Balancer.MP[0]
    }
    if (Balancer.IP[1].gt(Balancer.IP[0])){
        Balancer.IP[2] = dec(1)
        Balancer.IP[1] = Balancer.IP[0]
    }
},50)
{
setInterval(function() {//显示
    if (thePage === 'homework+'){
        if (inchallenge !== 2 || reset[0][0].lt(5)){
            shownum(reset[0][1],resetbutton[0],'交作业<br>需要',' 本作业')
        }else{
            resetbutton[0].innerHTML = '无法继续进行交作业'
        }
        shownum(reset[0][2],text[8],'目前提供 x',' 乘数')
        shownum(thing[0][2].mul(thing[0][3].mul(reset[0][2])),buy[0],'写作业每次<br>',' 本')
        shownum(product[0],text[0],'','')
        shownum(willget[0],speed,'','')
        if (inchallenge === 1){
            buy[1].innerHTML = "无法购买签字笔<br>挑战1的影响"
        }else{
            shownum(thing[0][1],buy[1],'购买签字笔需要<br>',' 本作业')
        }
        if (inchallenge === 4){
            document.getElementById("focustime").innerHTML = "剩余 "+producttime/1000+"s 可生产"
        }else if (inchallenge === 9){
            document.getElementById("focustime").innerHTML = "距离挑战失败还有 "+producttime/1000+"s"
        }
        shownum(buymaxCD/100,buymaxbutton,'购买全部 当前冷却 ',' 秒')
        shownum(thing[0][2],text[1],'当前签字笔 ',' 支')
        shownum(thing[0][3],multi[0],'签字笔乘数 x','')
        shownum(thing[1][1],buy[2],'购买写作业机需要<br>',' 本作业')
        shownum(thing[1][2],text[2],'当前写作业机 ','台')
        shownum(thing[1][3],multi[1],'写作业机乘数 x','')
        shownum(thing[2][1],buy[3],'购买文具盒需要<br>',' 本作业')
        shownum(thing[2][2],text[3],'当前文具盒 ','个')
        shownum(thing[2][3],multi[2],'文具盒乘数 x','')
        shownum(thing[3][1],buy[4],'购买电子白板需要<br>',' 本作业')
        shownum(thing[3][2],text[4],'当前电子白板 ','个')
        shownum(thing[3][3],multi[3],'电子白板乘数 x','')
        shownum(thing[4][1],buy[5],'购买班级需要<br>',' 本作业')
        shownum(thing[4][2],text[5],'当前班级 ','个')
        shownum(thing[4][3],multi[4],'班级乘数 x','')
        shownum(thing[5][1],buy[6],'购买学校需要<br>',' 本作业')
        shownum(thing[5][2],text[6],'当前学校 ',' 个')
        shownum(thing[5][3],multi[5],'学校乘数 x','')
        if (reset[0][0].eq(dec("0"))){
            text[7].textContent = ('将会解锁 写作业机')
        }else if (reset[0][0].eq(dec("1"))){
            text[7].textContent = ('将会解锁 文具盒')
        }else if (reset[0][0].eq(dec("2"))){
            text[7].textContent = ('将会解锁 电子白板')
        }else if (reset[0][0].eq(dec("3"))){
            text[7].textContent = ('将会解锁 班级')
        }else if (reset[0][0].eq(dec("4"))){
            text[7].textContent = ('将会解锁 学校')
        }else{
            if (inchallenge === 2 || inchallenge === 28 || inchallenge === 32){
                text[7].textContent = (`将不提供任何乘数(挑战${inchallenge}的影响)`)
                reset[0][2] = dec(1)
            }else{
                if (reset[0][0].gte(dec("5"))){
                    text[7].textContent = `将会给所有项目 x${(dec(16).add(ku[8]*4)).mul(bku[2]*4+1).mul(dec(3).mul(IS[5]).add(1))}`
                }
            }
        }
        if (inchallenge === 9 && producttime === 0){
                inchallenge = 0
                storm()
                alert("挑战失败")
        }
        if (inchallenge === 28  || inchallenge === 32){
            document.getElementById("kpmulti").innerHTML = `无法获得来自KP的乘数(挑战${inchallenge}的影响)`
        }else{
            shownum(product[1].add(2).pow(0.25+0.1*challenge[1][4]),document.getElementById("kpmulti"),'当前获得基于KP的乘数 x','')
        }
        if (unlock[1]===1){
            if (willget[1].gt(Zero)){
                shownum(willget[1],brainstorm,'脑容量爆炸<br>获得 ',' 知识')
            }else{
                brainstorm.innerHTML = '脑容量爆炸<br>作业不足'
            }
        }
        if (30 < inchallenge && inchallenge < 40){
            if (endthechallenge){
                document.getElementById("brust").innerHTML = `可以完成挑战${inchallenge}`
            }else{
                if (inchallenge === 31){
                    document.getElementById("brust").innerHTML = `将天体乘数削减到<span style="color:#f5d59b;text-shadow:0px 0px 2px #0f1f3d">1</span>以下<br>以完成挑战${inchallenge}`
                }else{
                    document.getElementById("brust").innerHTML = `可获得<span style="color:#0f1f3d;text-shadow:0px 0px 2px #0f1f3d">${fixNum(Goals.ic[inchallenge-32])}</span>以上的KP<br>以完成挑战${inchallenge}`
                }
            }
        }else{
            if (willget[4].gt(0)){
                document.getElementById("brust").innerHTML = `灵感爆发<br>获得${fixNum(willget[4])}灵感`
            }else{
                document.getElementById("brust").innerHTML = '灵感爆发<br>知识不足'
            }
        }
        if (unlock[0]===0){
            if (product[0].neq(Zero)){
                progress.textContent = ("距离 脑容量爆炸 还有 "+(product[0].log(10).div(Maxnum.log(10))).mul(100).toFixed(7)+"%")
                document.getElementById("progress-bar").style.width = (product[0].log(10).div(Maxnum.log(10))).mul("100").toNumber()+'0%'
            }else{
                progress.textContent = ("距离 脑容量爆炸 还有 "+0+"%")
                document.getElementById("progress-bar").style.width ='0%'
            }
        }else{
            document.getElementById("progress-container").style.backgroundColor = "#115308"
            document.getElementById("progress-container").style.borderColor = "#0d4905"
            document.getElementById("progress-bar").style.backgroundColor = "#3bbd2a"
            if (product[1].neq(Zero)){
                progress.textContent = ("距离 灵感爆发 还有 "+(product[1].log(10).div(dec("1e600").log(10))).mul(100).toFixed(7)+"%")
                document.getElementById("progress-bar").style.width = (product[1].log(10).div(dec("1e600").log(10))).mul(100)+'%'
            }else{
                progress.textContent = ("距离 灵感爆发 还有 "+0+"%")
                document.getElementById("progress-bar").style.width ='0%'
            }
        }
    }


    if (thePage === 'knowledge+'){
        shownum(product[1],text2[0],'','')
        if (product[1].lte("1e600")){
            shownum(product[1].mul(0.01),document.getElementById("kp+"),'','')
        }else{
            document.getElementById("kp+").innerHTML = "0(KU10禁用)"
        }
        if (product[1].lte("1e600")){
            document.getElementById("ku10").innerHTML = "KU10\"同桌互批\"<br>10KP<br>基于你拥有的KP，每秒生产1/1000"
        }else{
            document.getElementById("ku10").innerHTML = "KU10\"同桌互批\"<br>10KP<br>基于你拥有的KP，每秒生产1/1000<br>被禁用"
        }
    }
    if (thePage === 'breakbrain+'){
        if (generator[0][0][0].gte(50) && !mu[8]){
            document.getElementById("generatorup1").innerHTML = `升级学校生成器生产学校<br>当前${fixNum(generator[0][0][2])}个每次(软上限)<br>${generator[0][0][1]}KP`
        }else{
            document.getElementById("generatorup1").innerHTML = `升级学校生成器生产学校<br>当前${fixNum(generator[0][0][2])}个每次<br>${generator[0][0][1]}KP`
        }
        if (generator[0][1][2].eq(Zero)){
            document.getElementById("generatorup2").innerHTML = "生产间隔<br>已满级<br>不可再次购买"
        }else{
        document.getElementById("generatorup2").innerHTML = `缩短学校生成器生产间隔<br>当前间隔${fixNum(generator[0][1][2].div(1000))}s<br>${generator[0][1][1]}KP`
        }
    
        if (bku[10]){
            document.getElementById("bku2").innerHTML = `BKU2"自交繁殖"<br>5e17KP<br>基于作业数量给作业部分乘数<br>当前:x${fixNum(dec(10).pow(product[0].add(1).log(10).div(500)))}`
        }else{
            document.getElementById("bku2").innerHTML = `BKU2"自交繁殖"<br>5e17KP<br>基于作业数量给作业部分乘数<br>当前:x${fixNum(dec(10).pow(product[0].add(1).log(10).div(1000)))}`
        }
        document.getElementById("bku4").innerHTML = `BKU4"自习时间"<br>3e22KP<br>获得随时间增长的乘数<br>当前:x${fixNum(dec(playtime[3]+playtime[2]*60+playtime[1]*3600+playtime[0]*86400).mul(0.01))}`
        document.getElementById("bku5").innerHTML = `BKU5《作业点点乐》<br>1e30KP<br>获得基于点击次数的乘数<br>当前:x${fixNum(statics[2].pow(0.25))}`
        if (generator[0][2].gt(Zero)){
            document.getElementById("scgrCD").style.width = (generator[0][1][2].sub(generator[0][2])).div(generator[0][1][2]).mul("100")+'%'
        }else{
            document.getElementById("scgrCD").style.width = '100%'
        }
    }


    if (thePage === 'celestia+'){
        shownum(product[2],document.getElementById("mindpoint"),'','')
        if (inchallenge === 31){
            shownum(product[3],document.getElementById("MulofCelestia"),'自由/','\\反抗')
        }else{
            shownum(product[3],document.getElementById("MulofCelestia"),'','')
        }
        shownum(willget[3],document.getElementById("MulgetCelestia"),'','')
        shownum(celestias[0][1],document.getElementById("celestiaBuy1"),'控制行星<br>',' 思维')
        shownum(celestias[0][2],document.getElementById("celestiaNum1"),'控制了 ',' 个行星')
        shownum(celestias[0][3],document.getElementById("celestiaMul1"),'行星乘数 x','')
        shownum(celestias[1][1],document.getElementById("celestiaBuy2"),'控制恒星<br>',' 思维')
        shownum(celestias[1][2],document.getElementById("celestiaNum2"),'控制了 ',' 个恒星')
        shownum(celestias[1][3],document.getElementById("celestiaMul2"),'恒星乘数 x','')
        shownum(celestias[2][1],document.getElementById("celestiaBuy3"),'控制星云<br>',' 思维')
        shownum(celestias[2][2],document.getElementById("celestiaNum3"),'控制了 ',' 个星云')
        shownum(celestias[2][3],document.getElementById("celestiaMul3"),'星云乘数 x','')
        shownum(celestias[3][1],document.getElementById("celestiaBuy4"),'控制星系<br>',' 思维')
        shownum(celestias[3][2],document.getElementById("celestiaNum4"),'控制了 ',' 个星系')
        shownum(celestias[3][3],document.getElementById("celestiaMul4"),'星系乘数 x','')
        shownum(celestias[4][1],document.getElementById("celestiaBuy5"),'控制超星系团<br>',' 思维')
        shownum(celestias[4][2],document.getElementById("celestiaNum5"),'控制了 ',' 个超星系团')
        shownum(celestias[4][3],document.getElementById("celestiaMul5"),'超星系团乘数 x','')
        shownum(celestias[5][1],document.getElementById("celestiaBuy6"),'控制超新星<br>',' 思维')
        shownum(celestias[5][2],document.getElementById("celestiaNum6"),'控制了 ',' 个超新星')
        shownum(celestias[5][3],document.getElementById("celestiaMul6"),'超新星乘数 x','')
        shownum(((celestias[5][2].add(celestias[0][2].pow(0.01))).mul(celestias[5][3]).add(1)).pow(celestias[6][2].mul(0.25*(1+challenge[1][0])).add(1)),document.getElementById("supercluster+"),'','')
        shownum(celestias[6][1],document.getElementById("celestiaBuy7"),'控制中子星<br>',' 思维')
        shownum(celestias[6][2],document.getElementById("celestiaNum7"),'控制了 ',' 个中子星')
        shownum(celestias[6][2].mul(0.25*(1+challenge[1][0])).add(1),document.getElementById("neutron_star+"),'^','')
        if (20 < inchallenge && inchallenge < 30){
            if (endthechallenge){
                document.getElementById("MindOver").innerHTML = `可以完成挑战${inchallenge}`
            }else{
                document.getElementById("MindOver").innerHTML = `达到<span style="color:#f5d59b;text-shadow:0px 0px 4px #f5d59b">${fixNum(Goals.mc[inchallenge-21])}</span>HM<br>以完成挑战${inchallenge}`
            }
        }else{
            if (willget[3].lte(0)){
                document.getElementById("MindOver").innerHTML = '思维过载<br>知识不足'
            }else{
                document.getElementById("MindOver").innerHTML = `思维过载<br>获得${fixNum(willget[2])}思维`
            }
        }
    }


    if (thePage === 'mindupgrade+'){
        document.getElementById("mu10").innerHTML = `MU10"传奇改人王"<br>1e65MP<br>KP获取基于MP数量<br>当前:x${fixNum((product[2].pow(0.15+0.1*IS[6])).add(1))}`
            document.getElementById("mu1").innerHTML =`MU1"引力效应"<br>200MP<br>基于行星数量微弱增强超新星<br>当前+${fixNum(celestias[0][2].pow(0.01))}`
    document.getElementById("mu4").innerHTML =`MU4"思而不学…"<br>1000MP<br>基于KP数量倍增MP获得<br>当前x${fixNum((product[1].div(dec("1e100"))).pow(0.07+0.03*challenge[1][7]))}`
    }
    if (thePage === 'inspiration+'){
        shownum(product[4],document.getElementById("IPtext"),'','')
        document.getElementById("PT0").innerHTML = PT[0]
        document.getElementById("PT1").innerHTML = PT[1]
        shownum(PTprice[0],document.getElementById("tobuyPT0"),'需要 ',' KP')
        shownum(PTprice[1],document.getElementById("tobuyPT1"),'需要 ',' IP')
        shownum(PTprice[2],document.getElementById("tobuyPT2"),'需要 ',' MP')
        document.getElementById("IS1").innerHTML = `IS-12<br>1PT<br>基于脑容量爆炸次数强化作业阶段<br>当前:x${fixNum(statics[1].pow(0.9))}`
        document.getElementById("IS9").innerHTML = `IS-42 (9)<br>17PT<br>对天体部分的乘数^1.25(不影响IC1)<br>当前等效于:x${fixNum(product[3].pow(0.25))}`
        document.getElementById("IS14").innerHTML = `IS-61 (13)<br>7PT<br>交作业次数越多,交作业越强<br>当前x${fixNum(reset[0][0].add(1).pow(0.5))}`
    }
    if (thePage === 'balancer+'){
        if (Balancer.KP[1].eq(0)){
            document.getElementById("insideKP").style.width = `0%`
        }else{
            document.getElementById("insideKP").style.width = `${Balancer.KP[1].log(10).div(Balancer.KP[0].log(10)).mul(100).toNumber()}%`
        }
        let insideMPup = Balancer.MP[1].add(1).log(10).div(12).add(1)
        document.getElementById("insideNum1").innerHTML = `已填充 ${fixNum(Balancer.KP[1])}/${fixNum(Balancer.KP[0])} 的容量(${fixNum(Balancer.KP[1].add(1).log(10).div(Balancer.KP[0].log(10)).mul(100))}%)`
        document.getElementById("insideMul1").innerHTML = `^${3+0.5*challenge[2][1]}(x${fixNum(Balancer.KP[1].pow(3+0.5*challenge[2][1]).pow(insideMPup).add(1))})>>HM生产 ^${0.5+0.25*challenge[2][1]}(x${fixNum(Balancer.KP[1].pow(0.5+0.25*challenge[2][1]).pow(insideMPup).add(1))})>>CE生产`
        if (Balancer.MP[1].eq(0)){
            document.getElementById("insideMP").style.width = `0%`
        }else{
            
            document.getElementById("insideMP").style.width = `${Balancer.MP[1].log(10).div(Balancer.MP[0].log(10)).mul(100).toNumber()}%`
        }
        document.getElementById("insideNum2").innerHTML = `已填充 ${fixNum(Balancer.MP[1])}/${fixNum(Balancer.MP[0])} 的容量(${fixNum(Balancer.MP[1].add(1).log(10).div(Balancer.MP[0].log(10)).mul(100))}%)`
        document.getElementById("insideMul2").innerHTML = `^${fixNum(Balancer.MP[1].add(1).log(10).div(12).add(1))}>>知识充能效果`
    }
    if (thePage === 'challenge3+'){
        document.getElementById("challenge33").innerHTML = `<span style="color:#000b3a;text-shadow:none;font-size:20px;">灵感挑战IC3"知识不足"</span><br><br>清除KU,BKU升级,并且在本次挑战中无法重新购买<br><br>目标:5e50KP<br><br>奖励:灵感爆发和思维过载不重置学校生成器,灵感获取的量基于灵感爆发次数增加<br>当前:x${statics[4]}`
    }
    shownum(statics[0],document.getElementById("statics1"),'总共进行过 ',' 次交作业')
    shownum(statics[1],document.getElementById("statics2"),'总共进行过 ',' 次脑容量爆炸')
    shownum(statics[2],document.getElementById("statics3"),'总过点击过 ',' 次按钮')
    document.getElementById("statics4").innerHTML = '总过游玩了 '+playtime[0]+' 天 '+playtime[1]+' 小时 '+playtime[2]+' 分钟 '+Math.trunc(playtime[3])+' 秒'
    shownum(statics[3],document.getElementById("statics5"),'总过进行过 ',' 次思维过载')
    shownum(statics[4],document.getElementById("statics6"),'总过点击过 ',' 次灵感爆发')
    pointsshows = `作业:${fixNum(product[0])}`
    if (unlock[0]){
        pointsshows += `<span style="color:#44b64d;margin-left:20px">知识:${fixNum(product[1])}</span><span style="color:#7df591">(可获得${fixNum(willget[1])})</span>`
    }
    if (unlock[2]){
        pointsshows += `<span style="color:#be913c;margin-left:20px">思维:${fixNum(product[2])}</span><span style="color:#f5bd7d">(可获得${fixNum(willget[2])})</span>`
    }
    if (unlock[3]){
        pointsshows += `<span style="color:#4475b6;margin-left:20px">灵感:${fixNum(product[4])}</span><span style="color:#7dadf5">(可获得${fixNum(willget[4])})</span>`
    }
    document.getElementById("points").innerHTML = pointsshows
},50)
}
setInterval(function(){
    if (inchallenge === 6){
        for (i=0;i<=5;i++){
            thing[i][1] = thing[i][1].mul(dec("2"))
        }
    }
    if (inchallenge === 7){
        for (i=0;i<=4;i++){
                thing[i][2] = Zero
            }
    }
    if (inchallenge === 31){
        product[3] = product[3].mul(16)
    }
} ,1000)
{
setInterval(function(){//按钮
    /*if (unlock[5]===0 && product[4].gte("1e20")){
        unlock[5] = 1
        newson("灵感都要超载了,")
    }*/
        if (Balancer.price[1].gte(2)){
            document.getElementById("totalBM").style.display = 'inline-block'
        }else{
            document.getElementById("totalBM").style.display = 'none'
        }
        if (Balancer.price[1].gte(4)){
            document.getElementById("totalBI").style.display = 'inline-block'
        }else{
            document.getElementById("totalBI").style.display = 'none'
        }
    for (c=0;c<IS.length;c++){
        let isISC = [7,11,13,15]
        if (IS[c]){
            document.getElementById("IS"+c).disabled = true
            document.getElementById("IS"+c).style.color = "#ffffff"
            document.getElementById("IS"+c).style.textShadow = "0px 0px 8px #ffffff"
            if (isISC.includes(c)){//挑战颜色不同
                document.getElementById("IS"+c).style.backgroundColor = "#1a215e"
                document.getElementById("IS"+c).style.borderColor = "#1c367e"
            }else{
                document.getElementById("IS"+c).style.backgroundColor = "#0d4574"
                document.getElementById("IS"+c).style.borderColor = "#3972c9"
            }
        }else{
            if (c>=2){
                if (PT[1].gte(ISprice[c]) && check(c-2)){
                    document.getElementById("IS"+c).disabled = false
                    document.getElementById("IS"+c).style.color = "#ffffff"
                    document.getElementById("IS"+c).style.textShadow = "0px 0px 8px #ffffff"
                    if (isISC.includes(c)){//挑战颜色不同
                        document.getElementById("IS"+c).style.backgroundColor = "#28328d"
                        document.getElementById("IS"+c).style.borderColor = "#335dcf"
                    }else{
                        document.getElementById("IS"+c).style.backgroundColor = "#277dc4"
                        document.getElementById("IS"+c).style.borderColor = "#81b3ff"
                    }
                }else{
                    document.getElementById("IS"+c).disabled = true
                    document.getElementById("IS"+c).style.color = "#525252"
                    document.getElementById("IS"+c).style.textShadow = "0px 0px 8px #525252"
                    document.getElementById("IS"+c).style.backgroundColor = "#303030"
                    document.getElementById("IS"+c).style.borderColor = "#929292"
                }
            }else{
                if (PT[1].gte(ISprice[c])){
                    document.getElementById("IS"+c).disabled = false
                    document.getElementById("IS"+c).style.color = "#ffffff"
                    document.getElementById("IS"+c).style.backgroundColor = "#277dc4"
                    document.getElementById("IS"+c).style.borderColor = "#81b3ff"
                    document.getElementById("IS"+c).style.textShadow = "0px 0px 8px #ffffff"
                }else{
                    document.getElementById("IS"+c).disabled = true
                    document.getElementById("IS"+c).style.color = "#525252"
                    document.getElementById("IS"+c).style.backgroundColor = "#303030"
                    document.getElementById("IS"+c).style.borderColor = "#929292"
                    document.getElementById("IS"+c).style.textShadow = "0px 0px 8px #525252"
                }
            }
        }
    }
    if (unlock[4]){
        document.getElementById("unlockbalancer").style.display = 'none'
        document.getElementById("realbalancer+").style.display = 'block'
    }else{
        document.getElementById("unlockbalancer").style.display = 'block'
        document.getElementById("realbalancer+").style.display = 'none'
        if (product[4].gte("1e14")){
            document.getElementById("unlockbalancer").style.backgroundColor = '#3761af'
            document.getElementById("unlockbalancer").style.borderColor = '#81b1f0'
            document.getElementById("unlockbalancer").style.color = "#ffffff"
            document.getElementById("unlockbalancer").style.textShadow = "0px 0px 8px#ffffff"
        }else{
            document.getElementById("unlockbalancer").style.backgroundColor = '#969696'
            document.getElementById("unlockbalancer").style.borderColor = '#555555'
            document.getElementById("unlockbalancer").style.color = "#747474"
            document.getElementById("unlockbalancer").style.textShadow = "0px 0px 8px #747474"
        }
    }
    let UPoff = function(){
        document.getElementById("UPbalancer").style.borderColor = "#424242"
        document.getElementById("UPbalancer").style.backgroundColor = "#888888"
        document.getElementById("UPbalancer").style.color = "#b8b8b8"
        document.getElementById("UPbalancer").style.textShadow = "0px 0px 8px #b8b8b8"
        document.getElementById("UPbalancer").style.disabled = true
    }
    let UPon = function(){
        document.getElementById("UPbalancer").style.borderColor = "#166965"
        document.getElementById("UPbalancer").style.backgroundColor = "#33b3ac"
        document.getElementById("UPbalancer").style.color = "#ffffff"
        document.getElementById("UPbalancer").style.textShadow = "0px 0px 8px #ffffff"
        document.getElementById("UPbalancer").style.disabled = false
    }
    let filled1 = "暂未"
    let filled2 = "暂未"
    let filled3 = "暂未"
    if (Balancer.price[1].gte(4)){
        if (Balancer.KP[2].eq(1)){
            filled1 = "完成"
        }
        if (Balancer.MP[2].eq(1)){
            filled2 = "完成"
        }
        if (Balancer.IP[2].eq(1)){
            filled3 = "完成"
        }
        document.getElementById("UPbalancer").innerHTML = `升级容量<br>KP容量被填满(${filled1})<br>MP容量被填满(${filled2})<br>IP容量被填满(${filled3})<br>${Balancer.price[0]}IP`
        if (product[4].gte(Balancer.price[0]) && Balancer.KP[2].eq(1) && Balancer.MP[2].eq(1) && Balancer.IP[2].eq(1)){
            UPon()
        }else{
            UPoff()
        }
    }else if (Balancer.price[1].gte(2)){
        if (Balancer.KP[2].eq(1)){
            filled1 = "完成"
        }
        if (Balancer.MP[2].eq(1)){
            filled2 = "完成"
        }
        document.getElementById("UPbalancer").innerHTML = `升级容量<br>KP容量被填满(${filled1})<br>MP容量被填满(${filled2})<br>${Balancer.price[0]}IP`
        if (product[4].gte(Balancer.price[0]) && Balancer.KP[2].eq(1) && Balancer.MP[2].eq(1)){
            UPon()
        }else{
            UPoff()
        }
    }else{
        if (Balancer.KP[2].eq(1)){
            filled1 = "完成"
        }
        document.getElementById("UPbalancer").innerHTML = `升级容量<br>KP容量被填满(${filled1})<br>${Balancer.price[0]}IP`
        if (product[4].gte(Balancer.price[0]) && Balancer.KP[2].eq(1)){
            UPon()
        }else{
            UPoff()
        }
            
    }
    let buyPTon = function(x){
        document.getElementById("tobuyPT"+x).disabled = false
        document.getElementById("tobuyPT"+x).style.color = '#ffffff'
        document.getElementById("tobuyPT"+x).style.textShadow = '0px 0px 8px #ffffff'
    }
    let buyPToff = function(x){
        document.getElementById("tobuyPT"+x).disabled = true
        document.getElementById("tobuyPT"+x).style.color = '#747474'
        document.getElementById("tobuyPT"+x).style.textShadow = '0px 0px 8px #747474'
    }
    if (product[1].gte(PTprice[0])){
        buyPTon(0)
    }else{
        buyPToff(0)
    }
    if (product[4].gte(PTprice[1])){
        buyPTon(1)
    }else{
        buyPToff(1)
    }
    if (product[2].gte(PTprice[2])){
        buyPTon(2)
    }else{
        buyPToff(2)
    }
    let chargebt = function(a,b){
        if (achievements[33]){
            if (Balancer[a][3].eq(1)){
                document.getElementById("charge"+b).innerHTML = "填充资源进平衡器<br>ON"
            }else{
                document.getElementById("charge"+b).innerHTML = "填充资源进平衡器<br>OFF"
            }
        }else{
            document.getElementById("charge"+b).innerHTML = "填充资源进平衡器"
        }
    }
    chargebt("KP",1)
    chargebt("MP",2)
    chargebt("IP",3)
    if (resetTree){
        document.getElementById("resetTree").style.backgroundColor = "#61e4a2"
        document.getElementById("resetTree").style.borderColor = "#0e5833"
    }else{
        document.getElementById("resetTree").style.backgroundColor = "#6b98cc"
        document.getElementById("resetTree").style.borderColor = "#072e5a"
    }
    let mindON = function(){
        document.getElementById("MindOver").disabled = false
        document.getElementById("MindOver").style.color = '#b44f0b'
        document.getElementById("MindOver").style.borderColor = '#b44f0b'
        document.getElementById("MindOver").style.backgroundColor = '#3f2105'
        document.getElementById("MindOver").style.textShadow = '0px 0px 8px #b44f0b'
    }
    let mindOFF = function(){
        document.getElementById("MindOver").disabled = true
        document.getElementById("MindOver").style.color = '#a3a3a3'
        document.getElementById("MindOver").style.borderColor = '#747474'
        document.getElementById("MindOver").style.backgroundColor = '#555555'
        document.getElementById("MindOver").style.textShadow = '0px 0px 8px #747474'
    }
    if (20 < inchallenge && inchallenge < 30){
        if (endthechallenge){
            mindON()
        }else{
            mindOFF()
        }
    }else{
        if (willget[2].gt(0)){
            mindON()
        }else{
            mindOFF()
        }
    }
    let brustON = function(){
        document.getElementById("brust").style.animationPlayState = 'running'
        document.getElementById("brust").disabled = false
    }
    let brustOFF = function(){
        document.getElementById("brust").style.animationPlayState = 'paused'
        document.getElementById("brust").disabled = true
    }
    if (30 < inchallenge && inchallenge < 40){
        if (endthechallenge === 1){
            brustON()
        }else{
            brustOFF()
        }
    }else{
        if (willget[4].gt(0)){
            brustON()
        }else{
            brustOFF()
        }
    }
    if (IS[8]){
        document.getElementById("tobuyPT2").style.display = 'inline-block'
    }else{
        document.getElementById("tobuyPT2").style.display = 'none' 
    }
    for (i=0;i<=6;i++)
    if (product[2].gte(celestias[i][1])){
        document.getElementById("celestiaBuy"+(i+1)).style.color = "#ffffff"
        document.getElementById("celestiaBuy"+(i+1)).style.borderColor = "#eb9737"
        document.getElementById("celestiaBuy"+(i+1)).disabled = false
    }else{
        document.getElementById("celestiaBuy"+(i+1)).style.color = "#747474"
        document.getElementById("celestiaBuy"+(i+1)).style.borderColor = "#5e5e5e"
        document.getElementById("celestiaBuy"+(i+1)).disabled = true
    }
    if (product[1].gte(generator[0][0][1])){
        document.getElementById("generatorup1").style.color = "#ffffff"
        document.getElementById("generatorup1").style.textShadow = "0px 0px 8px #ffffff"
        document.getElementById("generatorup1").disabled = false
    }else{
        document.getElementById("generatorup1").style.color = "#707070"
        document.getElementById("generatorup1").style.textShadow = "0px 0px 8px #707070"
        document.getElementById("generatorup1").disabled = true
    }
    if (product[1].gte(generator[0][1][1]) && generator[0][1][2].gt(Zero)){
        document.getElementById("generatorup2").style.color = "#ffffff"
        document.getElementById("generatorup2").style.textShadow = "0px 0px 8px #ffffff"
        document.getElementById("generatorup2").disabled = false
    }else{
        document.getElementById("generatorup2").style.color = "#707070"
        document.getElementById("generatorup2").style.textShadow = "0px 0px 8px #707070"
        document.getElementById("generatorup2").disabled = true
    }
    document.getElementById("scgrCD-container").style.backgroundColor = "#115308"
    document.getElementById("scgrCD-container").style.borderColor = "#0d4905"
    document.getElementById("scgrCD").style.backgroundColor = "#3bbd2a"
    if (product[0].gte(reset[0][1]) && (reset[0][0].lte(4) || (inchallenge !== 2 && inchallenge !== 28 && inchallenge !== 32))){
        resetbutton[0].disabled = false
        resetbutton[0].style.color ="#ffffff"
        resetbutton[0].style.textShadow = "0px 0px 8px #ffffff"
    }else{
        resetbutton[0].disabled = true
        resetbutton[0].style.color ="#707070"
        resetbutton[0].style.textShadow = "0px 0px 8px #707070"
    }
    for (i=1;i<=5;i++){
        if (dec(i).gt(reset[0][0])){
            text[i+1].style.display = 'none'
            buy[i+1].style.display = 'none'
            multi[i].style.display = 'none'
            buy[i+1].disabled = true
        }else{
            text[i+1].style.display = 'inline-block'
            buy[i+1].style.display = 'inline-block'
            multi[i].style.display = 'inline-block'
        }
    }
    for (i=0;i<=5;i++){
        if (i === 0 && inchallenge === 1){
            buy[i+1].disabled = true
            buy[i+1].style.color ="#707070"
            buy[i+1].style.textShadow = "0px 0px 8px #707070"
        }else{
            if (product[0].gte(thing[i][1])) {
                    buy[i+1].disabled = false
                buy[i+1].style.color ="#ffffff"
                buy[i+1].style.textShadow = "0px 0px 8px #ffffff"
            }else{
                buy[i+1].disabled = true
                buy[i+1].style.color ="#707070"
                buy[i+1].style.textShadow = "0px 0px 8px #707070"
            }
        }
    }
    if (inchallenge === 4){
        document.getElementById("focus").style.display = 'inline-block'
    }else{
        document.getElementById("focus").style.display = 'none'
    }
    if (inchallenge === 4 || inchallenge === 9){
        document.getElementById("focustime").style.display = 'inline-block'
    }else{
        document.getElementById("focustime").style.display = 'none'
    }
    if (unlock[1] === 1){
        brainstorm.style.display = 'inline-block'
    }else{
        document.getElementById("breakbrainpage").style.display = 'none'
        if (storming === 1){
        brainstorm.style.display = 'inline-block'
        }else if(storming === 0){
        brainstorm.style.display = 'none'
        }
    }
    if (unlock[3]){
        document.getElementById("brust").style.display = "inline-block"
        document.getElementById("inspirationpage").style.display = "block"
        
    }else{
        document.getElementById("brust").style.display = "none"
        document.getElementById("challenges3").style.display = "none"
        document.getElementById("inspirationpage").style.display = "none"
    }
    for (i=0;i<=10;i++){
        if (inchallenge === 33){
            document.getElementById("ku"+(i+1)).disabled = true
            document.getElementById("ku"+(i+1)).style.background = "#e64b4b"
            document.getElementById("ku"+(i+1)).style.borderColor = "#631616"
        }else{
            if (ku[i]===1){
                document.getElementById("ku"+(i+1)).disabled = true
                document.getElementById("ku"+(i+1)).style.background = "#6ad87b"
                document.getElementById("ku"+(i+1)).style.borderColor = "#166338"
            }else{
                if (product[1].gte(Prices.ku[i])){
                    document.getElementById("ku"+(i+1)).disabled = false
                    document.getElementById("ku"+(i+1)).style.background = "#44ad54"
                    document.getElementById("ku"+(i+1)).style.borderColor = "#285c3f"
                }else{
                    document.getElementById("ku"+(i+1)).disabled = true
                    document.getElementById("ku"+(i+1)).style.background = "#858585"
                    document.getElementById("ku"+(i+1)).style.borderColor = "#272727"
                }
            }
        }

    }
    for (i=0;i<=11;i++){
        if (inchallenge === 33){
            document.getElementById("bku"+(i+1)).disabled = true
            document.getElementById("bku"+(i+1)).style.background = "#e64b4b"
            document.getElementById("bku"+(i+1)).style.borderColor = "#631616"
        }else{
            if (bku[i]===1){
                document.getElementById("bku"+(i+1)).disabled = true
                    document.getElementById("bku"+(i+1)).style.background = "#6ad87b"
                    document.getElementById("bku"+(i+1)).style.borderColor = "#166338"
            }else{
                if (product[1].gte(Prices.bku[i])){
                    document.getElementById("bku"+(i+1)).disabled = false
                    document.getElementById("bku"+(i+1)).style.background = "#44ad54"
                    document.getElementById("bku"+(i+1)).style.borderColor = "#285c3f"
                }else{
                    document.getElementById("bku"+(i+1)).disabled = true
                    document.getElementById("bku"+(i+1)).style.background = "#858585"
                    document.getElementById("bku"+(i+1)).style.borderColor = "#272727"
                }
            }
        }
    }
    for (i=0;i<=11;i++){
        if (mu[i]===1){
            document.getElementById("mu"+(i+1)).disabled = true
                document.getElementById("mu"+(i+1)).style.background = "#5c2611"
                document.getElementById("mu"+(i+1)).style.borderColor = "#c27231"
                document.getElementById("mu"+(i+1)).style.color ="#ffffff"
                document.getElementById("mu"+(i+1)).style.textShadow = "0px 0px 8px #ffffff"
        }else{
            if (product[2].gte(Prices.mu[i])){
                document.getElementById("mu"+(i+1)).disabled = false
                document.getElementById("mu"+(i+1)).style.background = "#8b4d30"
                document.getElementById("mu"+(i+1)).style.borderColor = "#fc8f5d"
                document.getElementById("mu"+(i+1)).style.color ="#ffffff"
                document.getElementById("mu"+(i+1)).style.textShadow = "0px 0px 8px #ffffff"
            }else{
                document.getElementById("mu"+(i+1)).disabled = true
                document.getElementById("mu"+(i+1)).style.background = "#272727"
                document.getElementById("mu"+(i+1)).style.borderColor = "#858585"
                document.getElementById("mu"+(i+1)).style.color ="#707070"
                document.getElementById("mu"+(i+1)).style.textShadow = "0px 0px 8px #707070"
            }
        }
    }    for (i=0;i<=11;i++){
        if (iu[i]===1){
            document.getElementById("iu"+i).disabled = true
            document.getElementById("iu"+i).style.background = "#18366e"
            document.getElementById("iu"+i).style.borderColor = "#2b64a5"
            document.getElementById("iu"+i).style.color ="#ffffff"
            document.getElementById("iu"+i).style.textShadow = "0px 0px 8px #ffffff"
        }else{
            if (product[4].gte(Prices.iu[i])){
                document.getElementById("iu"+i).disabled = false
                document.getElementById("iu"+i).style.background = "#2e56ac"
                document.getElementById("iu"+i).style.borderColor = "#6c9ffd"
                document.getElementById("iu"+i).style.color ="#ffffff"
                document.getElementById("iu"+i).style.textShadow = "0px 0px 8px #ffffff"
            }else{
                document.getElementById("iu"+i).disabled = true
                document.getElementById("iu"+i).style.background = "#272727"
                document.getElementById("iu"+i).style.borderColor = "#858585"
                document.getElementById("iu"+i).style.color ="#707070"
                document.getElementById("iu"+i).style.textShadow = "0px 0px 8px #707070"
            }
        }
    }
    for (i=0;i<=7;i++){
        if ( inchallenge !== 0 ){
            if ( i+21 === inchallenge ){
                document.getElementById("challenge2"+(i+1)).disabled = true
                document.getElementById("challenge2"+(i+1)).style.background = "#ddc228"
                document.getElementById("challenge2"+(i+1)).style.borderColor = "#6d5e0d"
            }else{
                if (challenge[1][i] === 1){
                    document.getElementById("challenge2"+(i+1)).disabled = true
                    document.getElementById("challenge2"+(i+1)).style.borderColor = "#ca8b2b"
                    document.getElementById("challenge2"+(i+1)).style.background = "#683a10"
                }else{
                    document.getElementById("challenge2"+(i+1)).disabled = true
                    document.getElementById("challenge2"+(i+1)).style.background = "#616161"
                    document.getElementById("challenge2"+(i+1)).style.borderColor = "#272727"
                }
            }
        }else{
            if (challenge[1][i] === 1){
                document.getElementById("challenge2"+(i+1)).disabled = true
                document.getElementById("challenge2"+(i+1)).style.borderColor = "#ca8b2b"
                document.getElementById("challenge2"+(i+1)).style.background = "#683a10"
            }else{
                document.getElementById("challenge2"+(i+1)).disabled = false
                document.getElementById("challenge2"+(i+1)).style.background = "#616161"
                document.getElementById("challenge2"+(i+1)).style.borderColor = "#272727"
            }
        }
    }
    for (i=0;i<=7;i++){
        if ( inchallenge !== 0 ){
            if ( i+31 === inchallenge ){
                document.getElementById("challenge3"+(i+1)).disabled = true
                document.getElementById("challenge3"+(i+1)).style.background = "#ddc228"
                document.getElementById("challenge3"+(i+1)).style.borderColor = "#6d5e0d"
            }else{
                if (challenge[2][i] === 1){
                    document.getElementById("challenge3"+(i+1)).disabled = true
                    document.getElementById("challenge3"+(i+1)).style.borderColor = "#317ec7"
                    document.getElementById("challenge3"+(i+1)).style.background = "#0b4e85"
                }else{
                    document.getElementById("challenge3"+(i+1)).disabled = true
                    document.getElementById("challenge3"+(i+1)).style.background = "#616161"
                    document.getElementById("challenge3"+(i+1)).style.borderColor = "#3d3d3d"
                }
            }
        }else{
            if (challenge[2][i] === 1){
                document.getElementById("challenge3"+(i+1)).disabled = true
                document.getElementById("challenge3"+(i+1)).style.borderColor = "#317ec7"
                document.getElementById("challenge3"+(i+1)).style.background = "#0b4e85"
            }else{
                document.getElementById("challenge3"+(i+1)).disabled = false
                document.getElementById("challenge3"+(i+1)).style.background = "#616161"
                document.getElementById("challenge3"+(i+1)).style.borderColor = "#3d3d3d"
            }
        }
        if (IS[7] || challenge[2][0]){
            document.getElementById("challenge31").style.display = 'inline-block'
        }else{
            document.getElementById("challenge31").style.display = 'none'
        }
        if (IS[13] || challenge[2][1]){
            document.getElementById("challenge32").style.display = 'inline-block'
        }else{
            document.getElementById("challenge32").style.display = 'none'
        }
        if (IS[11] || challenge[2][2]){
            document.getElementById("challenge33").style.display = 'inline-block'
        }else{
            document.getElementById("challenge33").style.display = 'none'
        }
        if (IS[15] || challenge[2][3]){
            document.getElementById("challenge34").style.display = 'inline-block'
        }else{
            document.getElementById("challenge34").style.display = 'none'
        }
        if (false){
            document.getElementById("challenge35").style.display = 'block'
        }else{
            document.getElementById("challenge35").style.display = 'none'
        }
        if (false){
            document.getElementById("challenge36").style.display = 'block'
        }else{
            document.getElementById("challenge36").style.display = 'none'
        }
        if (false){
            document.getElementById("challenge37").style.display = 'block'
        }else{
            document.getElementById("challenge37").style.display = 'none'
        }
        if (false){
            document.getElementById("challenge38").style.display = 'block'
        }else{
            document.getElementById("challenge38").style.display = 'none'
        }

    }
        for (i=0;i<=8;i++){
            if ( inchallenge !== 0 ){
                if ( i+1 === inchallenge ){
                    hc1[i].disabled = true
                    hc1[i].style.background = "#ddc228"
                    hc1[i].style.borderColor = "#6d5e0d"
                }else{
                    if (challenge[0][i] === 1){
                        hc1[i].disabled = true
                        hc1[i].style.borderColor = "#39c76f"
                        hc1[i].style.background = "#095509"
                    }else{
                        hc1[i].disabled = true
                        hc1[i].style.background = "#616161"
                        hc1[i].style.borderColor = "#272727"
                    }
                }
            }else{
                if (challenge[0][i] === 1){
                    hc1[i].disabled = true
                    hc1[i].style.borderColor = "#39c76f"
                    hc1[i].style.background = "#095509"
                }else{
                    hc1[i].disabled = false
                    hc1[i].style.background = "#616161"
                    hc1[i].style.borderColor = "#272727"
                }
            }
    }
    if (unlock[1]===1){
        document.getElementById("ku12").style.display = "inline-block"
        if (inchallenge === 33){
            document.getElementById("ku12").disabled = true
            document.getElementById("ku12").style.background = "#e64b4b"
            document.getElementById("ku12").style.borderColor = "#631616"
        }else{
            if (ku[11]===1){
                document.getElementById("ku12").disabled = true
                document.getElementById("ku12").style.background = "#6ad87b"
                document.getElementById("ku12").style.borderColor =  "#166338"
            }else if (product[1].gte(Prices.ku[11])){
                document.getElementById("ku12").disabled = false
                document.getElementById("ku12").style.background = "#44ad54"
                document.getElementById("ku12").style.borderColor = "#285c3f"
            }else{
                document.getElementById("ku12").disabled = true
                document.getElementById("ku12").style.background = "#858585"
                document.getElementById("ku12").style.borderColor = "#272727"
            }
        }
    }else{
        document.getElementById("ku12").style.display = "none"
    }
    for (let i=0;i<autobuyer.length;i++){
        if (autobuyer[i][1]===1){
            document.getElementById("switch"+(i+1)).innerHTML = "ON"
            if (i<=7){
                document.getElementById("switch"+(i+1)).style.background = "#e26f6f"
                document.getElementById("switch"+(i+1)).style.borderColor = "#b84e4e"
            }else if (i===8){
                document.getElementById("switch"+(i+1)).style.background = "#6dd65f"
                document.getElementById("switch"+(i+1)).style.borderColor = "#328328"
            }else{
                document.getElementById("switch"+(i+1)).style.background = "#e2906f"
                document.getElementById("switch"+(i+1)).style.borderColor = "#8d5236"
            }
        }else{
            document.getElementById("switch"+(i+1)).innerHTML = "OFF"
            document.getElementById("switch"+(i+1)).style.background = "#747474"
            document.getElementById("switch"+(i+1)).style.borderColor = "#525252"
        }
    }
    if (buymaxCD <= 0){
        buymaxbutton.disabled = false
        buymaxbutton.style.color ="#ffffff"
        buymaxbutton.style.textShadow = "0px 0px 8px #ffffff"
    }else{
        buymaxbutton.disabled = true
        buymaxbutton.style.color ="#707070"
        buymaxbutton.style.textShadow = "0px 0px 8px #707070"
    }
},0)
}
{//解锁
setInterval(function() {
    if (achievements[8] === 1 && storming === 0){
        unlock[0] = 1
    }
    if (challenge[0][8] === 1){
        unlock[1] = 1
    }
    if (product[1].gte("1e100") && unlock[2] === 0){
        unlock[2] = 1
        newson("\"思维点数\"?")
        setTimeout(function(){
            newson("看起来好像和生命的思考有关")
            setTimeout(function(){
                newson("也许它可以控制生命体的意识")
                setTimeout(function(){
                    newson("正好你的进度有些停滞了,或许生命的\"思维\"可以有效增强我们的生产")
                    setTimeout(function(){
                        newson("它们怎么想?只是一串数字而已,能怎么样")
                        setTimeout(function(){
                            newson("好了,让我们去<s>毁灭</s>这个宇宙吧,从第一个星球开始(刷新,你解锁了思维,思维升级,思维挑战)")
                        },4000)
                    },4000)
                },4000)
            },4000)
        },4000)
    }
    if (product[1].gte("1e600") && unlock[3] === 0){
        unlock[3] = 1
        newson("灵感爆发!(刷新以解锁)")
    }
    if (!unlock[2]){
        document.getElementById("mindupgradepage").style.display = 'none'
        document.getElementById("celestiapage").style.display = 'none'
        document.getElementById("challenges2").style.display = 'none'
    }
    if (unlock[0] === 1){
        document.getElementById("knowledgepage").style.display = 'block'
    }else{
        document.getElementById("knowledgepage").style.display = 'none'
    }
    if (unlock[0] === 1){
        document.getElementById("autobuypage").style.display = 'block'
    }else{
        document.getElementById("autobuypage").style.display = 'none'
    }
    if (ku[2] === 1){
        document.getElementById("kpmulti").style.display = 'block'
    }else{
        document.getElementById("kpmulti").style.display = 'none'
    }
    if (ku[9] === 1){
        document.getElementById("kp+").style.display = 'inline-block'
        document.getElementById("kp+l").style.display = 'inline-block'
        document.getElementById("kp+r").style.display = 'inline-block'
    }else{
        document.getElementById("kp+").style.display = 'none'
        document.getElementById("kp+l").style.display = 'none'
        document.getElementById("kp+r").style.display = 'none'
    }
    if (unlock[0] === 1){
        document.getElementById("challenge").style.display = 'block'
    }else{
        document.getElementById("challenge").style.display = 'none'

    }
    if (typingsaves===1){
        document.getElementById("inputField").style.display = 'block'
        document.getElementById("showsaves").style.display = 'block'
        document.getElementById("loadin").style.display = 'block'
    }else{
        document.getElementById("inputField").style.display = 'none'
        document.getElementById("showsaves").style.display = 'none'
        document.getElementById("loadin").style.display = 'none'
    }
    if (inchallenge !== 0){
        document.getElementById("challengename").style.display = 'inline-block'
        document.getElementById("exitchallenge").style.display = 'inline-block'
        document.getElementById("challengename").innerHTML = '正在进行挑战 '+inchallenge
    }else{
        document.getElementById("challengename").style.display = 'none'
        document.getElementById("exitchallenge").style.display = 'none'
    }
    for (i=0;i<autobuyer.length;i++){
        if (autobuyer[i][0]===1){
            document.getElementById("auto"+(i+1)).style.display = 'inline-block'
            document.getElementById("switch"+(i+1)).style.display = 'inline-block'
            if (i===7){
                document.getElementById("braindownlimit").style.display = 'inline-block'
            }
        }else{
            document.getElementById("auto"+(i+1)).style.display = 'none'
            document.getElementById("switch"+(i+1)).style.display = 'none'
            if (i===7){
                document.getElementById("braindownlimit").style.display = 'none'
            }
        }
    }
    for (i=0;i<=7;i++){
        if (challenge[0][i] === 1){
            autobuyer[i][0] = 1
        }else{
            autobuyer[i][0] = 0
        }
    }
    for (i=0;i<=7;i++){
        if (challenge[1][i] === 1){
            autobuyer[i+9][0] = 1
        }else{
            autobuyer[i+9][0] = 0
        }
    }
    if (bku[11]){
        autobuyer[8][0] = 1
    }else{
        autobuyer[8][0] = 0
    }
    for (i=0;i<=achievements.length;i++){
        try{
            if (achievements[i]){
                document.getElementById("ac"+(i+1)).style.backgroundImage = `url(images/Achievements/ac${i}+.png)`
            }else{
                document.getElementById("ac"+(i+1)).style.backgroundImage = `url(images/Achievements/ac${i}.png)`
            }
        }catch(e){
        }
    }
    if (celestias[0][2].gte(1000) && planetdestroy === 0){
        newson("看起来……我们已经控制了一些星球,你有觉得你的进度更快了吗?")
        planetdestroy = 1
    }else if (celestias[0][2].gte(1e11) && planetdestroy === 1){
        newson("我们控制的行星已经可以组成一个银河系了!")

        planetdestroy = 2
    }else if ((celestias[0][2].gte(1e25) && planetdestroy === 2)){
        newson("我们的行星已经足以创造一个宇宙了!我们还需要更多!")
        planetdestroy = 3
    }
    document.getElementById("celestiaBuy1").style.backgroundImage = `url(images/Celestia_tiers/planet_tier${planetdestroy+1}.png)`
},10)
}
{//提示
setInterval(function(){
    if (achievements[0] === 0 && product[0].gte(dec("1")) && product[0].lt(dec("10"))){
        achievementson("达成成就<br>万物起源")
        achievements[0] = 1
    }
    if (achievements[1] === 0 && reset[0][0].gte(dec("1"))) {
        achievementson("达成成就<br>从头再来")
        achievements[1] = 1
    }
    if (achievements[2] === 0 && reset[0][0].gt(dec("4"))) {
        achievementson("达成成就<br>\"最后一个\"?")
        achievements[2] = 1
        newson("恭喜恭喜,你距离下一阶段只差一点点了,继续写作业吧!")
    }
    if (achievements[3] === 0 && thing[0][2].gte(dec("1e50"))) {
        achievementson("达成成就<br>这么多?借我一支")
        achievements[3] = 1
    }
    if (achievements[4] === 0 && thing[5][2].gte(dec("150"))) {
        achievementson("达成成就<br>住校生")
        achievements[4] = 1
    }
    if (achievements[5] === 0 && willget[0].gte(dec("1e29"))) {
        achievementson("达成成就<br>比土豆更快")
        achievements[5] = 1
    }
    if (achievements[6] === 0 && statics[2].gte(dec("5e3"))) {
        achievementson("达成成就<br>手不疼吗??")
        achievements[6] = 1
    }
    if (achievements[7] === 0 && statics[2].gte(dec("1e5"))) {
        achievementson("达成成就<br>真的不疼吗??")
        achievements[7] = 1
    }
    if (achievements[8] === 0 && storming === 1) {
        achievementson("达成成就<br>我去,炸我一脸")
        achievements[8] = 1
        newson("袜袄!你的脑袋还好吗?虽然一切重来了,但我想你应该从中学到了什么……知识?")
    }
    if (achievements[9] === 0 && statics[0].gte(dec("150"))) {
        achievementson("达成成就<br>课代表无语了")
        achievements[9] = 1
    }
    if (achievements[10] === 0 && ku.includes(1)) {
        achievementson("达成成就<br>获得提升")
        achievements[10] = 1
    }
    if (achievements[11] === 0 && challenge[0].includes(1)){
        achievementson("达成成就<br>蘸豆,爽!")
        achievements[11] = 1
    }
    if (achievements[12] === 0 && product[1].gte("20")){
        achievementson("达成成就<br>学习")
        achievements[12] = 1
    }
    if (achievements[13] === 0 && !(ku.includes(0))){
        achievementson("达成成就<br>superman")
        achievements[13] = 1
    }
    if (achievements[14] === 0 && unlock[1] === 1) {
        achievementson("达成成就<br>头顶怎么尖尖的")
        achievements[14] = 1
        newson("解锁了突破大脑极限升级(位于知识,刷新出现(记得保存))")
    }
    if (achievements[15] === 0 && willget[0].gte(dec("1e580"))) {
        achievementson("达成成就<br>比土豆^20更快<br>")
        achievements[15] = 1
    }
    if (achievements[16] === 0 && product[1].add(dec("2")).pow(dec("0.25")).gte(dec("200"))) {
        achievementson("达成成就<br>装( )让你飞起来<br>")
        achievements[16] = 1
    }
    if (achievements[17] === 0 && playtime[1] >= 5) {
        achievementson("达成成就<br>多久后更新?<br>")
        achievements[17] = 1
    }
    //成就18使用了
    if (achievements[19] === 0 && product[1].gte(dec(1e100))) {
        achievementson("达成成就<br>别吵,我在烧烤<br>")
        achievements[19] = 1
    }
    if (achievements[20] === 0 && inchallenge === 1 && thing[0][2].gte(dec(1e100))) {
        achievementson("达成成就<br>硬刚削弱<br>")
        achievements[20] = 1
    }
    if (achievements[21] === 0 && celestias[1][2].gte(3)){
        achievementson("达成成就<br>三\"日\"凌空(三星手机请别看此成就)")
        achievements[21] = 1
    }
    if (achievements[22] === 0 && product[0].gte("1e4350") && inchallenge === 5){
        achievementson("达成成就<br>手撕挑战")
        achievements[22] = 1
    }
    if (achievements[23] === 0 && (mu.includes(1))){
        achievementson("达成成就<br>更进一步")
        achievements[23] = 1
    }
    if (achievements[24] === 0 && (challenge[1].includes(1))){
        achievementson("达成成就<br>又来?")
        achievements[24] = 1
    }
    if (achievements[25] === 0 && challenge[1][4] === 1){
        achievementson("达成成就<br>学会耐心")
        achievements[25] = 1
    }
    if (achievements[26] === 0 && celestias[0][2].gte("1e20")){
        achievementson("达成成就<br>统治宇宙")
        achievements[26] = 1
    }
    if (achievements[27] === 0 && product[2].gte("1e29")){
        achievementson("达成成就<br>典型的土豆型思维")
        achievements[27] = 1
    }
    if (achievements[28] === 0 && generator[0][0][2].eq(Zero) && product[1].gte("1e450")){
        achievementson("达成成就<br>你不需要它")
        achievements[28] = 1
    }
    if (achievements[29] === 0 && statics[1].gte(3000)){
        achievementson("达成成就<br>跟你爆了!")
        achievements[29] = 1
    }
    if (achievements[30] === 0 && thing[1][2].eq(0) && product[0].gte("1e1400")){
        achievementson("达成成就<br>人工不能")
        achievements[30] = 1
    }
    if (achievements[31] === 0 && ((!ku[5] && reset[0][0].eq(0)) || (ku[5] && reset[0][0].eq(5))) && product[1].gte("9e950")){
        achievementson("达成成就<br>没带还是没写")
        achievements[31] = 1
    }
    if (achievements[32] === 0 && (product[0].gte("1e14970") && inchallenge === 23)){
        achievementson("达成成就<br>真的不需要它!")
        achievements[32] = 1
    }
    if (achievements[33] === 0 && (product[0].gte("1e41000") && inchallenge === 24)){
        achievementson("达成成就<br>这才叫平衡")
        achievements[33] = 1
    }
    if (achievements[34] === 0 && challenge[2].includes(1)){
        achievementson("达成成就<br>哈哈,怎么还来?")
        achievements[34] = 1
    }
    if (achievements[35] === 0 && unlock[4]){
        achievementson("达成成就<br>打破平衡")
        achievements[35] = 1
    }
    if (achievements[36] === 0 && challenge[2][1]){
        achievementson("达成成就<br>平衡器,很厉害吧?")
        achievements[36] = 1
    }
    if (achievements[37] === 0 && new Date().getTime()-thepasttime.getTime()>18000000){
        achievementson("达成成就<br>睡上觉了?")
        achievements[37] = 1
    }
    if (achievements[38] === 0 && IS[12]){
        achievementson("达成成就<br>参天小树")
        achievements[38] = 1
    }
},10)
}
{//存档(手动)
save.addEventListener("click", function(){
    navigator.clipboard.writeText(btoa(btoa(turntosaves())))
  .then(() => {
    alert('存档已经写入剪贴板!');
  })
  .catch(err => {
    alert('有些奇怪的问题导致无法写入剪贴板:', err);
  });
})

let inputField = document.getElementById("inputField");
let loadsave
setInterval(function(){
    if( inputField.value !== '' ){
        loadsave = JSON.parse(atob(atob(inputField.value)))
    }
},10)
load.addEventListener("click", function(){
    typingsaves = 1
    inputField.value = ''
})
document.getElementById("loadin").addEventListener("click", function(){
loadthings(loadsave)
typingsaves = 0
})
document.getElementById("HARD_RESET").addEventListener("click",function(){
    if(window.confirm("你是手滑了,还是确认要重置?")){
        if(window.confirm("进行完全的重置不会有任何成就获得,你确定吗?")){
            if(window.confirm("这么做真的会重置一切，你最好先导出存档!")){
                if(window.confirm("最后一次提示，你 确 定 吗 ?")){
                    localStorage.clear()
                    alert("重置完成，刷新页面完成重置")
                }else{
                    alert("啊，真是刀尖舔血啊……")
                }
            }else{
                alert("快去导出存档吧")
            }
        }else{
            alert("没有成就，别为了成就而这么做!")
        }
    }else{
        alert("下次可别手滑了，这可不好玩")
    }
})
}
{//存档(自动)
setInterval(function(){
    localStorage.setItem("file",turntosaves())
},60000)

savetoLocal.addEventListener("click",function(){
    localStorage.setItem("file",turntosaves())
    newson("已保存入本地!")
})
loadfromLocal.addEventListener("click",function(){
    const Localthings = JSON.parse(localStorage.getItem("file"))
    loadthings(Localthings)
})
}
const Localthings = JSON.parse(localStorage.getItem("file"))
loadthings(Localthings)
if ( version !== 1.061 ){
    newson("你的存档是旧版本的,建议去找到最新的更新日志查看是否有问题!")
}else if (new Date().getTime()-thepasttime.getTime()>5000){
    setTimeout(function(){
        newson(`你已离线了${((new Date().getTime()-thepasttime.getTime())/60000).toFixed(2)}分钟,欢迎回来……等下,什么叫离线收益?`)
    },1000)
}