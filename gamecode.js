document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    const pages = document.querySelectorAll('.page');
    function switchPage(pageId) {
        pages.forEach(page => page.classList.remove('active'));
        
        // 显示目标页面
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        sidebarLinks.forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active')
            } else {
                link.classList.remove('active')
            }
        });
    }
    switchPage('homework+');
    // 监听侧边栏的点击事件
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            switchPage(pageId);
        })
    })
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
    document.addEventListener('click', function() {
      hasSubmenu.forEach(i => i.classList.remove('active'));
    });
    document.querySelectorAll('.submenu a').forEach(subLink => {
      subLink.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = this.getAttribute('data-page');
        switchPage(pageId);
        const parent = this.closest('.has-submenu');
        parent.classList.add('active');
      })
    })
});
const achievementswindows = document.getElementById("tips");
function achievementson(a) {
    achievementswindows.innerHTML = a
    achievementswindows.classList.add("show");
    setTimeout(() => {
        achievementswindows.classList.remove("show")
    }, 3000);
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
let Ac = [
    ac1 = document.getElementById("ac1"),
    ac2 = document.getElementById("ac2"),
    ac3 = document.getElementById("ac3"),
    ac4 = document.getElementById("ac4"),
    ac5 = document.getElementById("ac5"),
    ac6 = document.getElementById("ac6"),
    ac7 = document.getElementById("ac7"),
    ac8 = document.getElementById("ac8"),
    ac9 = document.getElementById("ac9"),
    ac10 = document.getElementById("ac10"),
    ac11 = document.getElementById("ac11"),
    ac12 = document.getElementById("ac12"),
    ac13 = document.getElementById("ac13"),
    ac14 = document.getElementById("ac14"),
    ac15 = document.getElementById("ac15"),
    ac16 = document.getElementById("ac16"),
    ac17 = document.getElementById("ac17"),
    ac18 = document.getElementById("ac18")
]
let cgbutton = [
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
let upbutton = [
    upbu1 = document.getElementById("upgrade1"),
    upbu2 = document.getElementById("upgrade2"),
    upbu3 = document.getElementById("upgrade3"),
    upbu4 = document.getElementById("upgrade4"),
    upbu5 = document.getElementById("upgrade5"),
    upbu6 = document.getElementById("upgrade6"),
    upbu7 = document.getElementById("upgrade7"),
    upbu8 = document.getElementById("upgrade8"),
    upbu9 = document.getElementById("upgrade9"),
    upbu10 = document.getElementById("upgrade10"),
    upbu11 = document.getElementById("upgrade11"),
    upbu12 = document.getElementById("upgrade12"),
]
let automachine = [
    auto1 = document.getElementById("auto1"),
    auto2 = document.getElementById("auto2"),
    auto3 = document.getElementById("auto3"),
    auto4 = document.getElementById("auto4"),
    auto5 = document.getElementById("auto5"),
    auto6 = document.getElementById("auto6"),
    auto7 = document.getElementById("auto7"),
    auto8 = document.getElementById("auto8")
]
let autoswitch = [
    switch1 = document.getElementById("switch1"),
    switch2 = document.getElementById("switch2"),
    switch3 = document.getElementById("switch3"),
    switch4 = document.getElementById("switch4"),
    switch5 = document.getElementById("switch5"),
    switch6 = document.getElementById("switch6"),
    switch7 = document.getElementById("switch7"),
    switch8 = document.getElementById("switch8")
]
function loadthings(a){
    kpprice = read(kpprice,MapToDecimal(a[0]))
    achievements = read(achievements,a[1])
    unlock = read(unlock,a[2])
    upgrade = read(upgrade,a[3])
    product = read(product,MapToDecimal(a[4]))
    thing = read(thing,MapToDecimal(a[5]))
    reset = read(reset,MapToDecimal(a[6]))
    storming = read(storming,a[7])
    challenge = read(challenge,a[8])
    inchallenge = read(inchallenge,a[9])
    autobuyer = read(autobuyer,a[10])
    statics = read(statics,MapToDecimal(a[11]))
    playtime = read(playtime,a[12])
    generator = read(generator,MapToDecimal(a[13]))
}
function dec(a){
    return new Decimal(a)
}
function shownum(a,b,c,d){
    if (a instanceof Decimal){
        b.innerHTML = c+a.toFixed(2)+d
    }else{
        b.innerHTML = c+a+d
    }
}
function MapToDecimal(arr) {
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
    if (a.length>b.length){
        for (i=0;i<b.length;i++){
            a[i] = b[i]
        }
    }else{
        a = b
    }
    return a
}
function hm_buysingle(i){
    thing[i][2] = thing[i][2].add(dec("1"))
    thing[i][0] = thing[i][0].add(dec("1"))
    product[0] = product[0].sub(thing[i][1])
    if (thing[i][0].mod(5).eq(Zero) && thing[i][0].gte(dec("5"))) {
        thing[i][3] = thing[i][3].mul(dec(2+upgrade[0]+upgrade[4]))
    }
    if (thing[i][0].mod(10).eq(Zero) && thing[i][0].gte(dec("10"))) {
        if (unlock[1] === 1 && thing[i][0].gte(dec("300"))){
            thing[i][1] = thing[i][1].mul(dec("10").pow(dec(i+5).mul(dec("5"))))
        }else{
            thing[i][1] = thing[i][1].mul(dec("10").pow(dec(i+1).mul(dec("2"))))
        }
    }
}
function hm_buymax(i){
    if (dec("10").sub(thing[i][0].mod(10)).gte(5)){
        thing[i][3] = thing[i][3].mul(dec(2+upgrade[0]+upgrade[4]).pow(2))
    }else{
        thing[i][3] = thing[i][3].mul(dec(2+upgrade[0]+upgrade[4]))
    }
    if (unlock[1] === 1 && thing[i][0].gte(dec("300"))){
        thing[i][1] = thing[i][1].mul(dec("10").pow(dec(i+5).mul(dec("5"))))
    }else{
        thing[i][1] = thing[i][1].mul(dec("10").pow(dec(i+1).mul(dec("2"))))
    }
    thing[i][2] = thing[i][2].add(dec("10").sub(thing[i][0].mod(10)))
    product[0] = product[0].sub(thing[i][2].mul(dec("10").sub(thing[i][0].mod(10))))
    thing[i][0] = thing[i][0].add(dec("10").sub(thing[i][0].mod(10)))
}
function handin(){
    statics[0] = statics[0].add(dec("1"))
    if (reset[0][0].lte(dec("5")) || inchallenge !== 2){
        reset[0][0] = reset[0][0].add(dec("1"))
        if (reset[0][0].gt(dec("14")) && unlock[1]===1){
            reset[0][1] = reset[0][1].mul(dec("1e80"))
        }else if (reset[0][0].gt(dec("5"))){
            if (upgrade[7]===1){
                reset[0][1] = reset[0][1].mul(dec("1e16"))
            }else{
                reset[0][1] = reset[0][1].mul(dec("1e17"))
            }
        }else{
            if (upgrade[3]===1){
                reset[0][1] = reset[0][1].mul(dec("1e9"))
            }else{
                reset[0][1] = reset[0][1].mul(dec("1e10"))
            }
        }
        if (upgrade[1]===1){
            product[0] = dec("990")
        }else{
            product[0] = dec("10")
        }
        if (reset[0][0].gt(dec("5"))){
            if (upgrade[8] === 1){
                reset[0][2] = reset[0][2].mul(dec("20"))
            }else{
                reset[0][2] = reset[0][2].mul(dec("16"))
            }
        }
        for(i=0;i<=5;i++){
            thing[i][0] = Zero
            thing[i][1] = dec("10").pow(dec(i+1))
            thing[i][2] = Zero
            thing[i][3] = dec("1")
        }
        if(inchallenge === 1){
            thing[0][2] = dec("1")
        }
    }
}
function storm(){
    storming = 0
    for(i=0;i<=5;i++){
        thing[i][0] = Zero
        thing[i][1] = dec("10").pow(dec(i+1))
        thing[i][2] = Zero
        thing[i][3] = dec("1")
    }
    if (upgrade[5]){
        reset[0] = [dec("5"),dec("100"),dec("1")]
    }else{
        reset[0] = [dec("0"),dec("100"),dec("1")]
    }
    if (upgrade[1]===1){
        product[0] = dec("990")
    }else{
        product[0] = dec("10")
    }

    if (inchallenge !== 0){
        inchallenge = 0
    }else{
        if (unlock[1]!==1){
            if (upgrade[6]===1){
                product[1] = product[1].add(dec("2"))
            }else{
                product[1] = product[1].add(dec("1"))
            }
        }else{
            if (upgrade[6]===1){
                product[1] = product[1].add((willget[1]).mul(dec("2")))
            }else{
                product[1] = product[1].add(willget[1])
            }
        }
    }
}

// 游戏状态变量
let Maxnum = dec("1.79e308")
let Zero = dec("0")
let willget = [
    Zero,
    Zero
]//得到的HM 得到的KP
let statics = [
    Zero,
    Zero,
    Zero
]
//统计:交作业总次数,脑容量爆炸总次数,购买次数
let playtime = [0,0,0,0]
let wait = 0
let autobuyer = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
//解锁，开关
let adder = dec("1")
let typingsaves = 0
let kpprice = [
    dec("1"),
    dec("1"),
    dec("1"),
    dec("2"),
    dec("3"),
    dec("5"),
    dec("8"),
    dec("10"),
    dec("15"),
    dec("20"),
    dec("3"),
    dec("1e100")
]
let thelimit = Zero
let achievements = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//交作业 解锁学校 脑容量爆炸 购买升级 自动购买器 突破脑容量
let unlock = [0,0,0,0,0,0,0]
//知识 突破脑容量
let challenge = [0,0,0,0,0,0,0,0,0]
//是否解锁挑战
let inchallenge = 0
let upgrade = [0,0,0,0,0,0,0,0,0,0,0,0]
//脑容量爆炸
let storming = 0
let product = [dec("10"),dec("0")]
//作业 知识点
let thing = [
    [dec("0"),dec("10"),dec("0"),dec("1")],//笔
    [dec("0"),dec("100"),dec("0"),dec("1")],//写作业机
    [dec("0"),dec("1000"),dec("0"),dec("1")],//文具盒
    [dec("0"),dec("1e4"),dec("0"),dec("1")],//电子白板
    [dec("0"),dec("1e5"),dec("0"),dec("1")],//班级
    [dec("0"),dec("1e6"),dec("0"),dec("1")]//学校
]//(购买次数,价格，数量，乘数)
let reset =[[dec("0"),dec("100"),dec("1")]]
//交作业(重置次数,价格,给的乘数)
let producttime = 0
let buymaxCD = 0
let generator = [
    [
        [Zero,dec("1"),Zero],//学校生产
        [Zero,dec("10"),dec("10000")],//生产间隔
        [Zero,dec("1e5"),dec("1")],//乘数
        dec("10000")//技术间隔
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
            if (product[0].gte(Maxnum)){
                brainstorm.style.animationPlayState = 'running'
                brainstorm.disabled = false
                if (upgrade[11]===1){
                    willget[1] = dec("10").pow(product[0].log(10).div(50))
                }else{
                    willget[1] = dec("10").pow(product[0].log(10).div(100))
                }
            }else{
                brainstorm.style.animationPlayState = 'paused'
                brainstorm.disabled = true
            }
        }
    
},0)
setInterval(function(){
    if (autobuyer[7][0]===1 && autobuyer[7][1]===1){
        if (inchallenge !== 0){
            challenge[inchallenge-1] = 1
        }
        if (unlock[1]!==1){
            if (product[0].gte(Maxnum)){
                storm()
            }
        }else{
            if (willget[1].gte(thelimit)){
                storm()
            }
        }
        statics[1] = statics[1].add(dec("1"))
    }
},10)
setInterval(function(){
    if (autobuyer[6][0]===1 && autobuyer[6][1]===1 && product[0].gte(reset[0][1])){
            handin()
    }
},10)
for (let i=5;i>=0;i--){
    setInterval(function(){
        if (inchallenge !== 1 || i !== 0){
            if (autobuyer[i][0]===1 && autobuyer[i][1]===1 && reset[0][0].gte(dec(i))){
                if (product[0].gte(thing[i][1].mul(dec("10").sub(thing[i][0].mod(10)))) && false){
                    hm_buymax(i)
                }else if(product[0].gte(thing[i][1])){
                    hm_buysingle(i)
                }
            }
        }
    },1)
}
}
for (let i=0;i<=7;i++){
    autoswitch[i].addEventListener("click", function(){
    if (autobuyer[i][1]===1){
        autobuyer[i][1] = 0
    }else{
        autobuyer[i][1] = 1
    }
})
//设置上限
braindownlimit.addEventListener('blur', function() {
    wait = 1
})
braindownlimit.addEventListener('focus', function() {
    wait = 0
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
{//购买
buy[0].addEventListener("click", function(){
    product[0] = product[0].add(thing[0][2].mul(thing[0][3].mul(reset[0][2])))
})

//作业区域购买
for (let i=0;i<=5;i++) {
    buy[i+1].addEventListener("click", function() {
        hm_buysingle(i)
    })
}
//知识升级
for(let i=0;i<=11;i++){
    upbutton[i].addEventListener("click", function(){
        upgrade[i] = 1
        product[1] = product[1].sub(kpprice[i])

    })
}
document.getElementById("generatorup1").addEventListener("click",function(){
    generator[0][0][2] = generator[0][0][2].add(dec("10"))
    generator[0][0][0] = generator[0][0][0].add(dec("1"))
    product[1] = product[1].sub(generator[0][0][1])
    if (generator[0][0][0].mod(dec("5")).eq(dec("0")) && generator[0][0][0].gt(Zero)){
        generator[0][0][1] = generator[0][0][1].mul(dec("10"))
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
document.getElementById("generatorup3").addEventListener("click",function(){
    generator[0][2][2] = generator[0][2][2].add(dec("0.2"))
    generator[0][2][0] = generator[0][2][0].add(dec("1"))
    product[1] = product[1].sub(generator[0][2][1])
    if (generator[0][2][0].mod(dec("5")).eq(dec("0")) && generator[0][2][0].gt(Zero)){
        generator[0][2][1] = generator[0][2][1].mul(dec("1e5"))
    }
})
for(let i=0;i<=8;i++){
    cgbutton[i].addEventListener("click", function(){
        inchallenge = i+1
        storm()
        inchallenge = i+1
        if (i === 8){
            producttime = 1000
        }
        if (i === 0){
            thing[0][2] = dec("1")
        }
    })
}
document.getElementById("exitchallenge").addEventListener("click", function(){
    storm()
})
}
{//重置
resetbutton[0].addEventListener("click", function(){
    handin()
})
brainstorm.addEventListener("click", function(){
    if (inchallenge !== 0){
        challenge[inchallenge-1] = 1
    }
    storm()
    statics[1] = statics[1].add(dec("1"))
})
}
document.getElementById("focus").addEventListener("click", function(){
    producttime = 1000
})
document.addEventListener('keydown', function(event) {
    if(event.key === ' '){
        challenge[8] = 0
    }  
})
document.addEventListener('click', function() {
    statics[2] = statics[2].add(dec("1"))
})
buymaxbutton.addEventListener("click", function(){
    buymaxCD = 1000
    for (i=5;i>=0;i--){
        if (inchallenge !== 1 || i !==0){
            while (product[0].gte(thing[i][1]) && reset[0][0].gte(dec(i))){
                if (product[0].gte(thing[i][1].mul(dec("10").sub(thing[i][0].mod(10))))){
                    hm_buymax(i)
                }else{
                    hm_buysingle(i)
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
    if (upgrade[9]){
        product[1] = product[1].add(product[1].mul(dec("0.0001")))
    }
    adder = dec("1")
    adder = adder.mul((product[1].add(dec("2"))).pow(dec("0.25")))
    if (upgrade[10]){
        adder = adder.mul(dec("1e3"))
    }
    if (storming!==1){
    if (inchallenge === 1){//别问为什么这么搞，好改而且看着清爽啊(awa)
        thing[4][2] = thing[4][2].add(thing[5][2].mul(thing[5][3].mul(reset[0][2].mul(adder))))
            thing[3][2] = thing[3][2].add(thing[4][2].mul(thing[4][3].mul(reset[0][2].mul(adder))))
            thing[2][2] = thing[2][2].add(thing[4][2].mul(thing[4][3].mul(reset[0][2].mul(adder))))
            thing[1][2] = thing[1][2].add(thing[3][2].mul(thing[3][3].mul(reset[0][2].mul(adder))))
            thing[0][2] = thing[0][2].add((thing[2][2].mul(thing[2][3].mul(reset[0][2].mul(adder)))).pow(0.25))
            product[0] = product[0].add(thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(reset[0][2].mul(adder))))))
            willget[0] = thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(reset[0][2].mul(adder))))).mul(dec("20"))
        }else if (inchallenge === 3){
            thing[3][2] = thing[3][2].add(thing[4][2].mul(thing[4][3].mul(reset[0][2].mul(adder))))
            thing[2][2] = thing[2][2].add(thing[4][2].mul(thing[4][3].mul(reset[0][2].mul(adder))))
            thing[1][2] = thing[1][2].add(thing[3][2].mul(thing[3][3].mul(reset[0][2].mul(adder))))
            thing[0][2] = thing[0][2].add(thing[2][2].mul(thing[2][3].mul(reset[0][2].mul(adder))))
            product[0] = product[0].add(thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(reset[0][2].mul(adder))))))
            willget[0] = thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(reset[0][2].mul(adder))))).mul(dec("20"))
        }else if (inchallenge === 4){
            if (producttime > 0){
                thing[4][2] = thing[4][2].add(thing[5][2].mul(thing[5][3].mul(reset[0][2].mul(adder))))
                thing[3][2] = thing[3][2].add(thing[4][2].mul(thing[4][3].mul(reset[0][2].mul(adder))))
                thing[2][2] = thing[2][2].add(thing[4][2].mul(thing[4][3].mul(reset[0][2].mul(adder))))
                thing[1][2] = thing[1][2].add(thing[3][2].mul(thing[3][3].mul(reset[0][2].mul(adder))))
                thing[0][2] = thing[0][2].add(thing[2][2].mul(thing[2][3].mul(reset[0][2].mul(adder))))
                product[0] = product[0].add(thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(reset[0][2].mul(adder))))))
                willget[0] = thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(reset[0][2].mul(adder))))).mul(dec("20"))
            }else{
                willget[0] = 0
            }
        }else if (inchallenge === 5){
            thing[4][2] = thing[4][2].add((thing[5][2].mul(thing[5][3].mul(reset[0][2].mul(adder)))).pow(0.75))
            thing[3][2] = thing[3][2].add((thing[4][2].mul(thing[4][3].mul(reset[0][2].mul(adder)))).pow(0.75))
            thing[2][2] = thing[2][2].add((thing[4][2].mul(thing[4][3].mul(reset[0][2].mul(adder)))).pow(0.75))
            thing[1][2] = thing[1][2].add((thing[3][2].mul(thing[3][3].mul(reset[0][2].mul(adder)))).pow(0.75))
            thing[0][2] = thing[0][2].add((thing[2][2].mul(thing[2][3].mul(reset[0][2].mul(adder)))).pow(0.75))
            product[0] = product[0].add((thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(reset[0][2].mul(adder)))))).pow(0.75))
            willget[0] = (thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(reset[0][2].mul(adder))))).mul(dec("20"))).pow(0.75)
        }else{
            thing[4][2] = thing[4][2].add(thing[5][2].mul(thing[5][3].mul(reset[0][2].mul(adder))))
            thing[3][2] = thing[3][2].add(thing[4][2].mul(thing[4][3].mul(reset[0][2].mul(adder))))
            thing[2][2] = thing[2][2].add(thing[4][2].mul(thing[4][3].mul(reset[0][2].mul(adder))))
            thing[1][2] = thing[1][2].add(thing[3][2].mul(thing[3][3].mul(reset[0][2].mul(adder))))
            thing[0][2] = thing[0][2].add(thing[2][2].mul(thing[2][3].mul(reset[0][2].mul(adder))))
            product[0] = product[0].add(thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(reset[0][2].mul(adder))))))
            willget[0] = thing[1][2].mul(thing[0][2].mul(thing[1][3].mul(thing[0][3].mul(reset[0][2].mul(adder))))).mul(dec("20"))
        }
    }
    if(generator[0][3].gt(Zero)){
        generator[0][3] = generator[0][3].sub(dec("50"))
    }else{
    thing[5][2] = thing[5][2].add(generator[0][0][2])
    thing[5][3] = thing[5][3].mul(generator[0][1][2])
        generator[0][3] = generator[0][1][2]
    }
},50)
{
setInterval(function() {//显示
    shownum(reset[0][1],resetbutton[0],'交作业需要<br>',' 本作业')
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
        if (producttime === 0){
            inchallenge = 0
            alert("挑战失败")
        }
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
        if (inchallenge === 2){
            text[7].textContent = ("将不提供任何乘数(挑战2的影响)")
        }else{
            if (reset[0][0].gte(dec("5")) && upgrade[8]===1){
                text[7].textContent = ('将会给所有项目 x20')
            }else{
                text[7].textContent = ('将会给所有项目 x16')
            }
        }
    shownum(reset[0][1],resetbutton[0],"交作业<br>需要 "," 本作业")
    }
    shownum(product[1].add(dec("2")).pow(dec("0.25")),document.getElementById("kpmulti"),'当前获得基于KP的乘数 x','')
    shownum(statics[0],document.getElementById("timesofhandin"),'总共进行过 ',' 次交作业')
    shownum(statics[1],document.getElementById("timesofstorm"),'总共进行过 ',' 次脑容量爆炸')
    shownum(statics[2],document.getElementById("timesofclick"),'总过点击过 ',' 次按钮')
    if (unlock[1]===1){
        if (product[0].gte(Maxnum)){
            shownum(willget[1],brainstorm,'脑容量爆炸<br>获得 ',' 知识')
        }else{
            brainstorm.innerHTML = '脑容量爆炸<br>作业不足'
        }
    }
    //页面2
    shownum(product[1],text2[0],'','')
    shownum(product[1].mul(dec("1e-2")),document.getElementById("kp+"),'','')
    document.getElementById("generatorup1").innerHTML = `升级学校生成器生产学校<br>当前${generator[0][0][2]}个每次<br>${generator[0][0][1]}KP`
    document.getElementById("generatorup2").innerHTML = `缩短学校生成器生产间隔<br>当前间隔${generator[0][1][2].div(dec("1000")).toFixed(2)}s<br>${generator[0][1][1]}KP`
    document.getElementById("generatorup3").innerHTML = `升级学校生成器生产乘数<br>当前x${generator[0][2][2].toFixed(2)}每次<br>${generator[0][2][1]}KP`
    //进度
    if (unlock[0]===0){
        if (product[0].neq(Zero)){
            progress.textContent = ("距离 脑容量爆炸 还有 "+(product[0].log(10).div(Maxnum.log(10))).mul("100").toFixed(6)+"%")
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
            progress.textContent = ("距离 思维过载 还有 "+(product[1].log(10).div(Maxnum.log(10))).mul("100").toFixed(6)+"%")
            document.getElementById("progress-bar").style.width = (product[1].log(10).div(Maxnum.log(10))).mul("100").toNumber()+'0%'
        }else{
            progress.textContent = ("距离 思维过载 还有 "+0+"%")
            document.getElementById("progress-bar").style.width ='0%'
        }
    }
    for (i=0;i<=8;i++){
        if ( inchallenge === (i+1) ){
            cgbutton[i].innerHTML = "正在进行中"
        }else{
            cgbutton[i].innerHTML = [
                "挑战1 忘记带笔<br>禁止购买签字笔，文具盒生产速度^0.25<br>解锁签字笔自动机",
                "挑战2 自愿作业<br>交作业不提供任何乘数，不受升级影响<br>解锁写作业机机",
                "挑战3 请了个假<br>学校不生产任何东西<br>解锁文具盒自动机",
                "挑战4 昨晚没睡<br>不进行生产，按下\"集中精神\"后一秒内正常生产<br>解锁电子白板自动机",
                "挑战5 磨磨蹭蹭<br>全部生产速度^0.75<br>解锁班级自动机",
                "挑战6 作业翻倍<br>每过1s全部项目价格x2,交作业后重置<br>解锁学校自动机",
                "挑战7 没带作业<br>每1秒都会清空除了学校以外的全部项目<br>解锁交作业自动机","挑战8 头脑风暴<br>脑容量爆炸需求变为1e600<br>解锁脑容量爆炸自动机",
                "挑战9 突破极限<br>在1s内达到脑容量爆炸<br>解锁突破大脑极限，项目价格增加"
            ][i]
        }
    }
    document.getElementById("timeofplay").innerHTML = '总过游玩了 '+playtime[0]+' 天 '+playtime[1]+' 小时 '+playtime[2]+' 分钟 '+Math.trunc(playtime[3])+' 秒'
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
} ,1000)
{
setInterval(function(){//按钮
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
    if (product[1].gte(generator[0][2][1])){
        document.getElementById("generatorup3").style.color = "#ffffff"
        document.getElementById("generatorup3").style.textShadow = "0px 0px 8px #ffffff"
        document.getElementById("generatorup3").disabled = false
    }else{
        document.getElementById("generatorup3").style.color = "#707070"
        document.getElementById("generatorup3").style.textShadow = "0px 0px 8px #707070"
        document.getElementById("generatorup3").disabled = true
    }
    if (product[0].gte(reset[0][1]) && (inchallenge !== 2 || reset[0][0].lte(dec("5")))){
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
        document.getElementById("schoolgeneratorpage").style.display = 'none'
        if (storming === 1){
        brainstorm.style.display = 'inline-block'
        }else if(storming === 0){
        brainstorm.style.display = 'none'
    }
    }

    for (i=0;i<=10;i++){
        if (upgrade[i]===1){
            upbutton[i].disabled = true
                upbutton[i].style.background = "#6ad87b"
                upbutton[i].style.borderColor = "#166338"
        }else{
            if (product[1].gte(kpprice[i])){
                upbutton[i].disabled = false
                upbutton[i].style.background = "#44ad54"
                upbutton[i].style.borderColor = "#285c3f"
            }else{
                upbutton[i].disabled = true
                upbutton[i].style.background = "#858585"
                upbutton[i].style.borderColor = "#272727"
            }
        }
    }
    for (i=0;i<=8;i++){
        if ( inchallenge !== 0 ){
            if ( i+1 === inchallenge ){
                cgbutton[i].disabled = true
                cgbutton[i].style.background = "#ddc228"
                cgbutton[i].style.borderColor = "#6d5e0d"
            }else{
                if (challenge[i] === 1){
                    cgbutton[i].disabled = true
                    cgbutton[i].style.borderColor = "#39c76f"
                    cgbutton[i].style.background = "#095509"
                }else{
                    cgbutton[i].disabled = true
                    cgbutton[i].style.background = "#616161"
                    cgbutton[i].style.borderColor = "#272727"
                }
            }
        }else{
            if (challenge[i] === 1){
                cgbutton[i].disabled = true
                cgbutton[i].style.borderColor = "#39c76f"
                cgbutton[i].style.background = "#095509"
            }else{
                cgbutton[i].disabled = false
                cgbutton[i].style.background = "#616161"
                cgbutton[i].style.borderColor = "#272727"
            }
        }
    }
    if (unlock[1]===1){
        upbutton[11].style.display = "inline-block"
        if (upgrade[11]===1){
            upbutton[11].disabled = true
            upbutton[11].style.background = "#6ad87b"
            upbutton[11].style.borderColor =  "#166338"
        }else if (product[1].gte(kpprice[11])){
            upbutton[11].disabled = false
            upbutton[11].style.background = "#44ad54"
            upbutton[11].style.borderColor = "#285c3f"
        }else{
            upbutton[11].disabled = true
            upbutton[11].style.background = "#858585"
            upbutton[11].style.borderColor = "#272727"
        }
    }else{
        upbutton[11].style.display = "none"
    }
    for (let i=0;i<=7;i++){
        if (autobuyer[i][1]===1){
            autoswitch[i].innerHTML = "ON"
            autoswitch[i].style.background = "#e26f6f"
            autoswitch[i].style.border = "#8d3636"
        }else{
            autoswitch[i].innerHTML = "OFF"
            autoswitch[i].style.background = "#747474"
            autoswitch[i].style.border = "#616161"
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
},10)
}
{//解锁
setInterval(function() {
    if (achievements[8] === 1 && storming === 0){
        unlock[0] = 1
    }
    if (challenge[8] === 1){
        unlock[1] = 1
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
    if (upgrade[2] === 1){
        document.getElementById("kpmulti").style.display = 'block'
    }else{
        document.getElementById("kpmulti").style.display = 'none'
    }
    if (upgrade[9] === 1){
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
    for (i=0;i<=7;i++){
        if (autobuyer[i][0]===1){
            automachine[i].style.display = 'inline-block'
            autoswitch[i].style.display = 'inline-block'
            if (i===7){
                document.getElementById("braindownlimit").style.display = 'inline-block'
            }
        }else{
            automachine[i].style.display = 'none'
            autoswitch[i].style.display = 'none'
            if (i===7){
                document.getElementById("braindownlimit").style.display = 'none'
            }
        }
    }
    for (i=0;i<=7;i++){
        if (challenge[i] === 1){
            autobuyer[i][0] = 1
        }
    }
    for (i=0;i<=achievements.length;i++){
        try{
            if (achievements[i]){
                Ac[i].style.backgroundImage = `url(images/Achievements/ac${i}+.png)`
            }else{
                Ac[i].style.backgroundImage = `url(images/Achievements/ac${i}.png)`
            }
        }catch(e){

        }
    }
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
    }
    if (achievements[9] === 0 && statics[0].gte(dec("150"))) {
        achievementson("达成成就<br>课代表无语了")
        achievements[9] = 1
    }
    if (achievements[10] === 0 && upgrade.includes(1)) {
        achievementson("达成成就<br>获得提升")
        achievements[10] = 1
    }
    if (achievements[11] === 0 && challenge.includes(1)){
        achievementson("达成成就<br>蘸豆,爽!")
        achievements[11] = 1
    }
    if (achievements[12] === 0 && product[1].gte("20")){
        achievementson("达成成就<br>学习")
        achievements[12] = 1
    }
    if (achievements[13] === 0 && !(upgrade.includes(0))){
        achievementson("达成成就<br>superman")
        achievements[13] = 1
    }
    if (achievements[14] === 0 && unlock[1] === 1) {
        achievementson("达成成就<br>头顶怎么尖尖的<br>后续暂时没了")
        achievements[14] = 1
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
        achievementson("达成成就<br>废寝忘食<br>")
        achievements[17] = 1
    }
},10)
}
{//存档(手动)
save.addEventListener("click", function(){
    navigator.clipboard.writeText(btoa(btoa(JSON.stringify([kpprice,achievements,unlock,upgrade,product,thing,reset,storming,challenge,inchallenge,autobuyer,statics,playtime,generator]))))
  .then(() => {
    alert('存档已经写入剪贴板!');
  })
  .catch(err => {
    console.error('有些奇怪的问题导致无法写入剪贴板:', err,'试试以文件格式保存?');
  });
})

let inputField = document.getElementById("inputField");
let loadsave
setInterval(function(){
    if( inputField.value !== '' ){
        loadsave = JSON.parse(atob(atob(inputField.value)))
    }
    if (typingsaves===1){
        if (loadsave !== "") {
            if (loadsave[9] !==0){
                document.getElementById("showsaves").textContent = ("此存档拥有"+loadsave[4][0]+"本作业,"+loadsave[4][1]+"点知识,正在进行挑战 "+loadsave[9])
            }else{
                document.getElementById("showsaves").textContent = ("此存档拥有"+loadsave[4][0]+"本作业,"+loadsave[4][1]+"点知识")
            }
        }
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
    localStorage.setItem("file",JSON.stringify([kpprice,achievements,unlock,upgrade,product,thing,reset,storming,challenge,inchallenge,autobuyer,statics,playtime,generator]))
},60000)
savetoLocal.addEventListener("click",function(){
    localStorage.setItem("file",JSON.stringify([kpprice,achievements,unlock,upgrade,product,thing,reset,storming,challenge,inchallenge,autobuyer,statics,playtime,generator]))
})
loadfromLocal.addEventListener("click",function(){
    const Localthings = JSON.parse(localStorage.getItem("file"))
    loadthings(Localthings)
})
}
const Localthings = JSON.parse(localStorage.getItem("file"))
loadthings(Localthings)
