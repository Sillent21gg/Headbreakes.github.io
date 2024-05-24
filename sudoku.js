//HEADER
function ListSidebar(){
  if(document.querySelector("#sidebar").classList.contains("sidebar_unactive")){
  document.getElementById("sidebar").classList.remove('sidebar_unactive');
  document.getElementById("sidebar").classList.add('sidebar_active');
}else{
  document.getElementById("sidebar").classList.remove('sidebar_active');
  document.getElementById("sidebar").classList.add('sidebar_unactive');
}
}
document.getElementById('header_ph').onclick = ListSidebar;
// LVL1 MS

function getRandomInt(max) {
  return Math.floor(Math.random() * max + 6);
}
function getRandomIntMatches(maxim) {
  return Math.floor(Math.random() * maxim + 3);
}
a = getRandomIntMatches(7);
b = getRandomIntMatches(7);
c = getRandomIntMatches(7);
d = getRandomIntMatches(7);
const ab = document.querySelector('.ab');
ab.value = a+b;
  bc = document.querySelector('.bc');
  bc.value = b+c;
  const cd = document.querySelector('.cd');
  cd.value = c+d;
  const ad = document.querySelector('.ad');
  ad.value = a+d;

    document.getElementById('lvl1_test').onclick = test;
    function test(){
  var lvl1_a = Number (document.getElementById("lvl1_num1").value);
  var lvl1_b = Number (document.getElementById("lvl1_num2").value);
  var lvl1_c = Number (document.getElementById("lvl1_num4").value);
  var lvl1_d = Number (document.getElementById("lvl1_num3").value);
  if(lvl1_a + lvl1_b != a+b){
    document.getElementById("inp1").classList.remove('ms_num1');
    document.getElementById("inp2").classList.remove('ms_num1'); 
  } else if(lvl1_a + lvl1_b == a+b){
    document.getElementById("inp1").classList.add('ms_num1');
    document.getElementById("inp2").classList.add('ms_num1');
  }
  if(lvl1_b + lvl1_c != b+c){
    document.getElementById("inp2").classList.remove('ms_num1');
    document.getElementById("inp3").classList.remove('ms_num1');
  } else if(lvl1_b + lvl1_c == b+c){
    document.getElementById("inp2").classList.add('ms_num1');
    document.getElementById("inp3").classList.add('ms_num1');
  }
  if(lvl1_c + lvl1_d != c+d){
    document.getElementById("inp3").classList.remove('ms_num1');
    document.getElementById("inp4").classList.remove('ms_num1');
  }else if(lvl1_c + lvl1_d == c+d){
    document.getElementById("inp3").classList.add('ms_num1');
    document.getElementById("inp4").classList.add('ms_num1');
  }
  if(lvl1_a + lvl1_d != a+d){
    document.getElementById("inp1").classList.remove('ms_num1');
    document.getElementById("inp4").classList.remove('ms_num1');
  }else if (lvl1_a + lvl1_d == a+d){
    document.getElementById("inp1").classList.add('ms_num1');
    document.getElementById("inp4").classList.add('ms_num1');
  } console.log(lvl1_a+lvl1_b, a+b, lvl1_b+lvl1_c, b+c, lvl1_c+lvl1_d, c+d, lvl1_a+lvl1_d, a+d)}

  // LvL2 MS
   k_num = getRandomInt(99);
   k = document.querySelectorAll('.k');
   k.forEach(k => {
   k.value = k_num;
   });

  document.getElementById('lvl2_test').onclick = test2;
  function test2(){
    var lvl2_a = Number (document.getElementById("lvl2_num1").value);
    var lvl2_b = Number (document.getElementById("lvl2_num2").value);
    var lvl2_c = Number (document.getElementById("lvl2_num3").value);
    var lvl2_d = Number (document.getElementById("lvl2_num4").value);
    var lvl2_e = Number (document.getElementById("lvl2_num5").value);
    var lvl2_f = Number (document.getElementById("lvl2_num6").value);
    var lvl2_g = Number (document.getElementById("lvl2_num7").value);
    var lvl2_h = Number (document.getElementById("lvl2_num8").value);
    var lvl2_i = Number (document.getElementById("lvl2_num9").value);
    if((lvl2_a + lvl2_b + lvl2_c != k_num)||(lvl2_a == lvl2_b||lvl2_b==lvl2_c||lvl2_a==lvl2_c)){
      document.getElementById("inp12").classList.remove('ms_num1');
      document.getElementById("inp22").classList.remove('ms_num1'); 
      document.getElementById("inp32").classList.remove('ms_num1'); 
    } else {
      document.getElementById("inp12").classList.add('ms_num1');
      document.getElementById("inp22").classList.add('ms_num1');
      document.getElementById("inp32").classList.add('ms_num1');
    }
    if((lvl2_d + lvl2_e + lvl2_f != k_num)||(lvl2_d == lvl2_e||lvl2_e==lvl2_f||lvl2_d==lvl2_f)){
      document.getElementById("inp42").classList.remove('ms_num1');
      document.getElementById("inp52").classList.remove('ms_num1');
      document.getElementById("inp62").classList.remove('ms_num1');
    } else{
      document.getElementById("inp42").classList.add('ms_num1');
      document.getElementById("inp52").classList.add('ms_num1');
      document.getElementById("inp62").classList.add('ms_num1');
    }
    if((lvl2_g + lvl2_h + lvl2_i != k_num)||(lvl2_g == lvl2_h||lvl2_h==lvl2_i||lvl2_g==lvl2_i)){
      document.getElementById("inp72").classList.remove('ms_num1');
      document.getElementById("inp82").classList.remove('ms_num1');
      document.getElementById("inp92").classList.remove('ms_num1');
    }else{
      document.getElementById("inp72").classList.add('ms_num1');
      document.getElementById("inp82").classList.add('ms_num1');
      document.getElementById("inp92").classList.add('ms_num1');
    }
    if((lvl2_a + lvl2_d + lvl2_g != k_num)||(lvl2_a == lvl2_d||lvl2_g==lvl2_d||lvl2_a==lvl2_g)){
      document.getElementById("inp12").classList.remove('ms_num1');
      document.getElementById("inp42").classList.remove('ms_num1'); 
      document.getElementById("inp72").classList.remove('ms_num1'); 
    } else{
      document.getElementById("inp12").classList.add('ms_num1');
      document.getElementById("inp42").classList.add('ms_num1');
      document.getElementById("inp72").classList.add('ms_num1');
    }
    if((lvl2_b + lvl2_e + lvl2_h != k_num)||(lvl2_b == lvl2_e||lvl2_e==lvl2_h||lvl2_b==lvl2_h)){
      document.getElementById("inp22").classList.remove('ms_num1');
      document.getElementById("inp52").classList.remove('ms_num1');
      document.getElementById("inp82").classList.remove('ms_num1');
    } else{
      document.getElementById("inp22").classList.add('ms_num1');
      document.getElementById("inp52").classList.add('ms_num1');
      document.getElementById("inp82").classList.add('ms_num1');
    }
    if((lvl2_c + lvl2_f + lvl2_i != k_num)||(lvl2_c == lvl2_f||lvl2_f==lvl2_i||lvl2_c==lvl2_i)){
      document.getElementById("inp32").classList.remove('ms_num1');
      document.getElementById("inp62").classList.remove('ms_num1');
      document.getElementById("inp92").classList.remove('ms_num1');
    }else{
      document.getElementById("inp32").classList.add('ms_num1');
      document.getElementById("inp62").classList.add('ms_num1');
      document.getElementById("inp92").classList.add('ms_num1');
    }
  console.log(lvl2_a, lvl2_b, lvl2_c, lvl2_d, lvl2_e, lvl2_f, lvl2_g, lvl2_h, lvl2_i, k_num)}

  // MATCHES
 /* MatchNum1 = getRandomIntMatches(10);
  MatchNum2 = getRandomIntMatches(10);
  MatchNum3 = getRandomIntMatches(10);

  MatchCount = 1;
  const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  document.getElementById("match_num1_1").onclick = matchChange1_1;
  function matchChange1_1(){
    if((MatchCount == 0)&&(document.querySelector(".match_num1_1").classList.contains("match_unactive"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num1_1").classList.contains("match_active"))){
    document.getElementById("match_num1_1").classList.remove('match_active');
    document.getElementById("match_num1_1").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (document.querySelector(".match_num1_1").classList.contains("match_unactive"))){
      document.getElementById("match_num1_1").classList.add('match_active');
    document.getElementById("match_num1_1").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num1_1").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num2_1").onclick = matchChange2_1;
  function matchChange2_1(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num2_1").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num2_1").classList.contains("match_active"))){
    document.getElementById("match_num2_1").classList.remove('match_active');
    document.getElementById("match_num2_1").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num2_1").classList.contains("match_active"))){
      document.getElementById("match_num2_1").classList.add('match_active');
    document.getElementById("match_num2_1").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num2_1").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num3_1").onclick = matchChange3_1;
  function matchChange3_1(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num3_1").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num3_1").classList.contains("match_active"))){
    document.getElementById("match_num3_1").classList.remove('match_active');
    document.getElementById("match_num3_1").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num3_1").classList.contains("match_active"))){
      document.getElementById("match_num3_1").classList.add('match_active');
    document.getElementById("match_num3_1").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num3_1").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num4_1").onclick = matchChange4_1;
  function matchChange4_1(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num4_1").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num4_1").classList.contains("match_active"))){
    document.getElementById("match_num4_1").classList.remove('match_active');
    document.getElementById("match_num4_1").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num4_1").classList.contains("match_active"))){
      document.getElementById("match_num4_1").classList.add('match_active');
    document.getElementById("match_num4_1").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num4_1").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num5_1").onclick = matchChange5_1;
  function matchChange5_1(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num5_1").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num5_1").classList.contains("match_active"))){
    document.getElementById("match_num5_1").classList.remove('match_active');
    document.getElementById("match_num5_1").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num5_1").classList.contains("match_active"))){
      document.getElementById("match_num5_1").classList.add('match_active');
    document.getElementById("match_num5_1").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num5_1").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num6_1").onclick = matchChange6_1;
  function matchChange6_1(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num6_1").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num6_1").classList.contains("match_active"))){
    document.getElementById("match_num6_1").classList.remove('match_active');
    document.getElementById("match_num6_1").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num6_1").classList.contains("match_active"))){
      document.getElementById("match_num6_1").classList.add('match_active');
    document.getElementById("match_num6_1").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num6_1").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num7_1").onclick = matchChange7_1;
  function matchChange7_1(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num7_1").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num7_1").classList.contains("match_active"))){
    document.getElementById("match_num7_1").classList.remove('match_active');
    document.getElementById("match_num7_1").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num7_1").classList.contains("match_active"))){
      document.getElementById("match_num7_1").classList.add('match_active');
    document.getElementById("match_num7_1").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num7_1").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num1_2").onclick = matchChange1_2;
  function matchChange1_2(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num1_2").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num1_2").classList.contains("match_active"))){
    document.getElementById("match_num1_2").classList.remove('match_active');
    document.getElementById("match_num1_2").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num1_2").classList.contains("match_active"))){
      document.getElementById("match_num1_2").classList.add('match_active');
    document.getElementById("match_num1_2").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num1_2").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num2_2").onclick = matchChange2_2;
  function matchChange2_2(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num2_2").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num2_2").classList.contains("match_active"))){
    document.getElementById("match_num2_2").classList.remove('match_active');
    document.getElementById("match_num2_2").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num2_2").classList.contains("match_active"))){
      document.getElementById("match_num2_2").classList.add('match_active');
    document.getElementById("match_num2_2").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num2_2").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num3_2").onclick = matchChange3_2;
  function matchChange3_2(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num3_2").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num3_2").classList.contains("match_active"))){
    document.getElementById("match_num3_2").classList.remove('match_active');
    document.getElementById("match_num3_2").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num3_2").classList.contains("match_active"))){
      document.getElementById("match_num3_2").classList.add('match_active');
    document.getElementById("match_num3_2").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num3_2").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num4_2").onclick = matchChange4_2;
  function matchChange4_2(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num4_2").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num4_2").classList.contains("match_active"))){
    document.getElementById("match_num4_2").classList.remove('match_active');
    document.getElementById("match_num4_2").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num4_2").classList.contains("match_active"))){
      document.getElementById("match_num4_2").classList.add('match_active');
    document.getElementById("match_num4_2").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num4_2").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num5_2").onclick = matchChange5_2;
  function matchChange5_2(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num5_2").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num5_2").classList.contains("match_active"))){
    document.getElementById("match_num5_2").classList.remove('match_active');
    document.getElementById("match_num5_2").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num5_2").classList.contains("match_active"))){
      document.getElementById("match_num5_2").classList.add('match_active');
    document.getElementById("match_num5_2").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num5_2").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num6_2").onclick = matchChange6_2;
  function matchChange6_2(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num6_2").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num6_2").classList.contains("match_active"))){
    document.getElementById("match_num6_2").classList.remove('match_active');
    document.getElementById("match_num6_2").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num6_2").classList.contains("match_active"))){
      document.getElementById("match_num6_2").classList.add('match_active');
    document.getElementById("match_num6_2").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num6_2").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num7_2").onclick = matchChange7_2;
  function matchChange7_2(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num7_2").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num1_1").classList.contains("match_active"))){
    document.getElementById("match_num7_2").classList.remove('match_active');
    document.getElementById("match_num7_2").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num7_2").classList.contains("match_active"))){
      document.getElementById("match_num7_2").classList.add('match_active');
    document.getElementById("match_num7_2").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num7_2").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num1_3").onclick = matchChange1_3;
  function matchChange1_3(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num1_3").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num1_3").classList.contains("match_active"))){
    document.getElementById("match_num1_3").classList.remove('match_active');
    document.getElementById("match_num1_3").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num1_3").classList.contains("match_active"))){
      document.getElementById("match_num1_3").classList.add('match_active');
    document.getElementById("match_num1_3").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num1_3").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num2_3").onclick = matchChange2_3;
  function matchChange2_3(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num2_3").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num2_3").classList.contains("match_active"))){
    document.getElementById("match_num2_3").classList.remove('match_active');
    document.getElementById("match_num2_3").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num2_3").classList.contains("match_active"))){
      document.getElementById("match_num2_3").classList.add('match_active');
    document.getElementById("match_num2_3").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num2_3").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num3_3").onclick = matchChange3_3;
  function matchChange3_3(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num3_3").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num3_3").classList.contains("match_active"))){
    document.getElementById("match_num3_3").classList.remove('match_active');
    document.getElementById("match_num3_3").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num3_3").classList.contains("match_active"))){
      document.getElementById("match_num3_3").classList.add('match_active');
    document.getElementById("match_num3_3").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num3_3").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num4_3").onclick = matchChange4_3;
  function matchChange4_3(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num4_3").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num4_3").classList.contains("match_active"))){
    document.getElementById("match_num4_3").classList.remove('match_active');
    document.getElementById("match_num4_3").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num4_3").classList.contains("match_active"))){
      document.getElementById("match_num4_3").classList.add('match_active');
    document.getElementById("match_num4_3").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num4_3").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num5_3").onclick = matchChange5_3;
  function matchChange5_3(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num5_3").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num5_3").classList.contains("match_active"))){
    document.getElementById("match_num5_3").classList.remove('match_active');
    document.getElementById("match_num5_3").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num5_3").classList.contains("match_active"))){
      document.getElementById("match_num5_3").classList.add('match_active');
    document.getElementById("match_num5_3").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num5_3").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num6_3").onclick = matchChange6_3;
  function matchChange6_3(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num6_3").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num6_3").classList.contains("match_active"))){
    document.getElementById("match_num6_3").classList.remove('match_active');
    document.getElementById("match_num6_3").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (!document.querySelector(".match_num6_3").classList.contains("match_active"))){
      document.getElementById("match_num6_3").classList.add('match_active');
    document.getElementById("match_num6_3").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num6_3").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }document.getElementById("match_num7_3").onclick = matchChange7_3;
  function matchChange7_3(){
    if((MatchCount == 0)&&(!document.querySelector(".match_num7_3").classList.contains("match_active"))){
      alert('У тебя нет спичек :(');
    }else if((MatchCount == 0) && (document.querySelector(".match_num7_3").classList.contains("match_active"))){
    document.getElementById("match_num7_3").classList.remove('match_active');
    document.getElementById("match_num7_3").classList.add('match_unactive');
    MatchCount = 1;
    }else if((MatchCount == 1) && (document.querySelector(".match_num7_3").classList.contains("match_active"))){
      document.getElementById("match_num7_3").classList.add('match_active');
    document.getElementById("match_num7_3").classList.remove('match_unactive');
    MatchCount = 0;
      }else if((MatchCount == 1) && (document.querySelector(".match_num7_3").classList.contains("match_active"))){
        alert('У тебя уже есть спичка!)');
      }
      const MatchCounter = document.querySelector('.MatchCounter');
      MatchCounter.value = MatchCount;
  }
  
  document.getElementById('Matches_test').onclick = test3;
  function test3(){
    if(MatchNum1 == 0){
      document.getElementById("match_num1_1").classList.remove('match_active');
      document.getElementById("match_num2_1").classList.remove('match_active');
      document.getElementById("match_num3_1").classList.remove('match_active');
      document.getElementById("match_num4_1").classList.remove('match_active');
      document.getElementById("match_num5_1").classList.remove('match_active');
      document.getElementById("match_num6_1").classList.remove('match_active');
      document.getElementById("match_num7_1").classList.remove('match_active');
      document.getElementById("match_num1_1").classList.add('match_active');
      document.getElementById("match_num2_1").classList.add('match_active');
      document.getElementById("match_num3_1").classList.add('match_active');
      document.getElementById("match_num5_1").classList.add('match_active');
      document.getElementById("match_num6_1").classList.add('match_active');
      document.getElementById("match_num7_1").classList.add('match_active');
    }else if(MatchNum1 == 1){
      document.getElementById("match_num1_1").classList.remove('match_active');
      document.getElementById("match_num2_1").classList.remove('match_active');
      document.getElementById("match_num3_1").classList.remove('match_active');
      document.getElementById("match_num4_1").classList.remove('match_active');
      document.getElementById("match_num5_1").classList.remove('match_active');
      document.getElementById("match_num6_1").classList.remove('match_active');
      document.getElementById("match_num7_1").classList.remove('match_active');
      document.getElementById("match_num3_1").classList.add('match_active');
      document.getElementById("match_num6_1").classList.add('match_active');
    }else if(MatchNum1 == 2){
      document.getElementById("match_num1_1").classList.remove('match_active');
      document.getElementById("match_num2_1").classList.remove('match_active');
      document.getElementById("match_num3_1").classList.remove('match_active');
      document.getElementById("match_num4_1").classList.remove('match_active');
      document.getElementById("match_num5_1").classList.remove('match_active');
      document.getElementById("match_num6_1").classList.remove('match_active');
      document.getElementById("match_num7_1").classList.remove('match_active');
      document.getElementById("match_num1_1").classList.add('match_active');
      document.getElementById("match_num3_1").classList.add('match_active');
      document.getElementById("match_num4_1").classList.add('match_active');
      document.getElementById("match_num5_1").classList.add('match_active');
      document.getElementById("match_num7_1").classList.add('match_active');
    }else if(MatchNum1 == 3){
      document.getElementById("match_num1_1").classList.remove('match_active');
      document.getElementById("match_num2_1").classList.remove('match_active');
      document.getElementById("match_num3_1").classList.remove('match_active');
      document.getElementById("match_num4_1").classList.remove('match_active');
      document.getElementById("match_num5_1").classList.remove('match_active');
      document.getElementById("match_num6_1").classList.remove('match_active');
      document.getElementById("match_num7_1").classList.remove('match_active');
      document.getElementById("match_num1_1").classList.add('match_active');
      document.getElementById("match_num3_1").classList.add('match_active');
      document.getElementById("match_num4_1").classList.add('match_active');
      document.getElementById("match_num6_1").classList.add('match_active');
      document.getElementById("match_num7_1").classList.add('match_active');
    }else if(MatchNum1 == 4){
      document.getElementById("match_num1_1").classList.remove('match_active');
      document.getElementById("match_num2_1").classList.remove('match_active');
      document.getElementById("match_num3_1").classList.remove('match_active');
      document.getElementById("match_num4_1").classList.remove('match_active');
      document.getElementById("match_num5_1").classList.remove('match_active');
      document.getElementById("match_num6_1").classList.remove('match_active');
      document.getElementById("match_num7_1").classList.remove('match_active');
      document.getElementById("match_num2_1").classList.add('match_active');
      document.getElementById("match_num3_1").classList.add('match_active');
      document.getElementById("match_num4_1").classList.add('match_active');
      document.getElementById("match_num6_1").classList.add('match_active');
    }else if(MatchNum1 == 5){
      document.getElementById("match_num1_1").classList.remove('match_active');
      document.getElementById("match_num2_1").classList.remove('match_active');
      document.getElementById("match_num3_1").classList.remove('match_active');
      document.getElementById("match_num4_1").classList.remove('match_active');
      document.getElementById("match_num5_1").classList.remove('match_active');
      document.getElementById("match_num6_1").classList.remove('match_active');
      document.getElementById("match_num7_1").classList.remove('match_active');
      document.getElementById("match_num1_1").classList.add('match_active');
      document.getElementById("match_num2_1").classList.add('match_active');
      document.getElementById("match_num4_1").classList.add('match_active');
      document.getElementById("match_num6_1").classList.add('match_active');
      document.getElementById("match_num7_1").classList.add('match_active');
    }else if(MatchNum1 == 6){
      document.getElementById("match_num1_1").classList.remove('match_active');
      document.getElementById("match_num2_1").classList.remove('match_active');
      document.getElementById("match_num3_1").classList.remove('match_active');
      document.getElementById("match_num4_1").classList.remove('match_active');
      document.getElementById("match_num5_1").classList.remove('match_active');
      document.getElementById("match_num6_1").classList.remove('match_active');
      document.getElementById("match_num7_1").classList.remove('match_active');
      document.getElementById("match_num1_1").classList.add('match_active');
      document.getElementById("match_num2_1").classList.add('match_active');
      document.getElementById("match_num4_1").classList.add('match_active');
      document.getElementById("match_num5_1").classList.add('match_active');
      document.getElementById("match_num6_1").classList.add('match_active');
      document.getElementById("match_num7_1").classList.add('match_active');
    }else if(MatchNum1 == 7){
      document.getElementById("match_num1_1").classList.remove('match_active');
      document.getElementById("match_num2_1").classList.remove('match_active');
      document.getElementById("match_num3_1").classList.remove('match_active');
      document.getElementById("match_num4_1").classList.remove('match_active');
      document.getElementById("match_num5_1").classList.remove('match_active');
      document.getElementById("match_num6_1").classList.remove('match_active');
      document.getElementById("match_num7_1").classList.remove('match_active');
      document.getElementById("match_num1_1").classList.add('match_active');
      document.getElementById("match_num3_1").classList.add('match_active');
      document.getElementById("match_num6_1").classList.add('match_active');
    }else if(MatchNum1 == 8){
      document.getElementById("match_num1_1").classList.remove('match_active');
      document.getElementById("match_num2_1").classList.remove('match_active');
      document.getElementById("match_num3_1").classList.remove('match_active');
      document.getElementById("match_num4_1").classList.remove('match_active');
      document.getElementById("match_num5_1").classList.remove('match_active');
      document.getElementById("match_num6_1").classList.remove('match_active');
      document.getElementById("match_num7_1").classList.remove('match_active');
      document.getElementById("match_num1_1").classList.add('match_active');
      document.getElementById("match_num2_1").classList.add('match_active');
      document.getElementById("match_num3_1").classList.add('match_active');
      document.getElementById("match_num4_1").classList.add('match_active');
      document.getElementById("match_num5_1").classList.add('match_active');
      document.getElementById("match_num6_1").classList.add('match_active');
      document.getElementById("match_num7_1").classList.add('match_active');
    }else if(MatchNum1 == 9){
      document.getElementById("match_num1_1").classList.remove('match_active');
      document.getElementById("match_num2_1").classList.remove('match_active');
      document.getElementById("match_num3_1").classList.remove('match_active');
      document.getElementById("match_num4_1").classList.remove('match_active');
      document.getElementById("match_num5_1").classList.remove('match_active');
      document.getElementById("match_num6_1").classList.remove('match_active');
      document.getElementById("match_num7_1").classList.remove('match_active');
      document.getElementById("match_num1_1").classList.add('match_active');
      document.getElementById("match_num2_1").classList.add('match_active');
      document.getElementById("match_num3_1").classList.add('match_active');
      document.getElementById("match_num4_1").classList.add('match_active');
      document.getElementById("match_num6_1").classList.add('match_active');
      document.getElementById("match_num7_1").classList.add('match_active');
    }
    if(MatchNum2 == 0){
      document.getElementById("match_num1_2").classList.remove('match_active');
      document.getElementById("match_num2_2").classList.remove('match_active');
      document.getElementById("match_num3_2").classList.remove('match_active');
      document.getElementById("match_num4_2").classList.remove('match_active');
      document.getElementById("match_num5_2").classList.remove('match_active');
      document.getElementById("match_num6_2").classList.remove('match_active');
      document.getElementById("match_num7_2").classList.remove('match_active');
      document.getElementById("match_num1_2").classList.add('match_active');
      document.getElementById("match_num2_2").classList.add('match_active');
      document.getElementById("match_num3_2").classList.add('match_active');
      document.getElementById("match_num5_2").classList.add('match_active');
      document.getElementById("match_num6_2").classList.add('match_active');
      document.getElementById("match_num7_2").classList.add('match_active');
    }else if(MatchNum2 == 1){
      document.getElementById("match_num1_2").classList.remove('match_active');
      document.getElementById("match_num2_2").classList.remove('match_active');
      document.getElementById("match_num3_2").classList.remove('match_active');
      document.getElementById("match_num4_2").classList.remove('match_active');
      document.getElementById("match_num5_2").classList.remove('match_active');
      document.getElementById("match_num6_2").classList.remove('match_active');
      document.getElementById("match_num7_2").classList.remove('match_active');
      document.getElementById("match_num3_2").classList.add('match_active');
      document.getElementById("match_num6_2").classList.add('match_active');
    }else if(MatchNum2 == 2){
      document.getElementById("match_num1_2").classList.remove('match_active');
      document.getElementById("match_num2_2").classList.remove('match_active');
      document.getElementById("match_num3_2").classList.remove('match_active');
      document.getElementById("match_num4_2").classList.remove('match_active');
      document.getElementById("match_num5_2").classList.remove('match_active');
      document.getElementById("match_num6_2").classList.remove('match_active');
      document.getElementById("match_num7_2").classList.remove('match_active');
      document.getElementById("match_num1_2").classList.add('match_active');
      document.getElementById("match_num3_2").classList.add('match_active');
      document.getElementById("match_num4_2").classList.add('match_active');
      document.getElementById("match_num5_2").classList.add('match_active');
      document.getElementById("match_num7_2").classList.add('match_active');
    }else if(MatchNum2 == 3){
      document.getElementById("match_num1_2").classList.remove('match_active');
      document.getElementById("match_num2_2").classList.remove('match_active');
      document.getElementById("match_num3_2").classList.remove('match_active');
      document.getElementById("match_num4_2").classList.remove('match_active');
      document.getElementById("match_num5_2").classList.remove('match_active');
      document.getElementById("match_num6_2").classList.remove('match_active');
      document.getElementById("match_num7_2").classList.remove('match_active');
      document.getElementById("match_num1_2").classList.add('match_active');
      document.getElementById("match_num3_2").classList.add('match_active');
      document.getElementById("match_num4_2").classList.add('match_active');
      document.getElementById("match_num6_2").classList.add('match_active');
      document.getElementById("match_num7_2").classList.add('match_active');
    }else if(MatchNum2 == 4){
      document.getElementById("match_num1_2").classList.remove('match_active');
      document.getElementById("match_num2_2").classList.remove('match_active');
      document.getElementById("match_num3_2").classList.remove('match_active');
      document.getElementById("match_num4_2").classList.remove('match_active');
      document.getElementById("match_num5_2").classList.remove('match_active');
      document.getElementById("match_num6_2").classList.remove('match_active');
      document.getElementById("match_num7_2").classList.remove('match_active');
      document.getElementById("match_num2_2").classList.add('match_active');
      document.getElementById("match_num3_2").classList.add('match_active');
      document.getElementById("match_num4_2").classList.add('match_active');
      document.getElementById("match_num6_2").classList.add('match_active');
    }else if(MatchNum2 == 5){
      document.getElementById("match_num1_2").classList.remove('match_active');
      document.getElementById("match_num2_2").classList.remove('match_active');
      document.getElementById("match_num3_2").classList.remove('match_active');
      document.getElementById("match_num4_2").classList.remove('match_active');
      document.getElementById("match_num5_2").classList.remove('match_active');
      document.getElementById("match_num6_2").classList.remove('match_active');
      document.getElementById("match_num7_2").classList.remove('match_active');
      document.getElementById("match_num1_2").classList.add('match_active');
      document.getElementById("match_num2_2").classList.add('match_active');
      document.getElementById("match_num4_2").classList.add('match_active');
      document.getElementById("match_num6_2").classList.add('match_active');
      document.getElementById("match_num7_2").classList.add('match_active');
    }else if(MatchNum2 == 6){
      document.getElementById("match_num1_2").classList.remove('match_active');
      document.getElementById("match_num2_2").classList.remove('match_active');
      document.getElementById("match_num3_2").classList.remove('match_active');
      document.getElementById("match_num4_2").classList.remove('match_active');
      document.getElementById("match_num5_2").classList.remove('match_active');
      document.getElementById("match_num6_2").classList.remove('match_active');
      document.getElementById("match_num7_2").classList.remove('match_active');
      document.getElementById("match_num1_2").classList.add('match_active');
      document.getElementById("match_num2_2").classList.add('match_active');
      document.getElementById("match_num4_2").classList.add('match_active');
      document.getElementById("match_num5_2").classList.add('match_active');
      document.getElementById("match_num6_2").classList.add('match_active');
      document.getElementById("match_num7_2").classList.add('match_active');
    }else if(MatchNum2 == 7){
      document.getElementById("match_num1_2").classList.remove('match_active');
      document.getElementById("match_num2_2").classList.remove('match_active');
      document.getElementById("match_num3_2").classList.remove('match_active');
      document.getElementById("match_num4_2").classList.remove('match_active');
      document.getElementById("match_num5_2").classList.remove('match_active');
      document.getElementById("match_num6_2").classList.remove('match_active');
      document.getElementById("match_num7_2").classList.remove('match_active');
      document.getElementById("match_num1_2").classList.add('match_active');
      document.getElementById("match_num3_2").classList.add('match_active');
      document.getElementById("match_num6_2").classList.add('match_active');
    }else if(MatchNum2 == 8){
      document.getElementById("match_num1_2").classList.remove('match_active');
      document.getElementById("match_num2_2").classList.remove('match_active');
      document.getElementById("match_num3_2").classList.remove('match_active');
      document.getElementById("match_num4_2").classList.remove('match_active');
      document.getElementById("match_num5_2").classList.remove('match_active');
      document.getElementById("match_num6_2").classList.remove('match_active');
      document.getElementById("match_num7_2").classList.remove('match_active');
      document.getElementById("match_num1_2").classList.add('match_active');
      document.getElementById("match_num2_2").classList.add('match_active');
      document.getElementById("match_num3_2").classList.add('match_active');
      document.getElementById("match_num4_2").classList.add('match_active');
      document.getElementById("match_num5_2").classList.add('match_active');
      document.getElementById("match_num6_2").classList.add('match_active');
      document.getElementById("match_num7_2").classList.add('match_active');
    }else if(MatchNum2 == 9){
      document.getElementById("match_num1_2").classList.remove('match_active');
      document.getElementById("match_num2_2").classList.remove('match_active');
      document.getElementById("match_num3_2").classList.remove('match_active');
      document.getElementById("match_num4_2").classList.remove('match_active');
      document.getElementById("match_num5_2").classList.remove('match_active');
      document.getElementById("match_num6_2").classList.remove('match_active');
      document.getElementById("match_num7_2").classList.remove('match_active');
      document.getElementById("match_num1_2").classList.add('match_active');
      document.getElementById("match_num2_2").classList.add('match_active');
      document.getElementById("match_num3_2").classList.add('match_active');
      document.getElementById("match_num4_2").classList.add('match_active');
      document.getElementById("match_num6_2").classList.add('match_active');
      document.getElementById("match_num7_2").classList.add('match_active');
    }
    if(MatchNum3 == 0){
      document.getElementById("match_num1_3").classList.remove('match_active');
      document.getElementById("match_num2_3").classList.remove('match_active');
      document.getElementById("match_num3_3").classList.remove('match_active');
      document.getElementById("match_num4_3").classList.remove('match_active');
      document.getElementById("match_num5_3").classList.remove('match_active');
      document.getElementById("match_num6_3").classList.remove('match_active');
      document.getElementById("match_num7_3").classList.remove('match_active');
      document.getElementById("match_num1_3").classList.add('match_active');
      document.getElementById("match_num2_3").classList.add('match_active');
      document.getElementById("match_num3_3").classList.add('match_active');
      document.getElementById("match_num5_3").classList.add('match_active');
      document.getElementById("match_num6_3").classList.add('match_active');
      document.getElementById("match_num7_3").classList.add('match_active');
    }else if(MatchNum3 == 1){
      document.getElementById("match_num1_3").classList.remove('match_active');
      document.getElementById("match_num2_3").classList.remove('match_active');
      document.getElementById("match_num3_3").classList.remove('match_active');
      document.getElementById("match_num4_3").classList.remove('match_active');
      document.getElementById("match_num5_3").classList.remove('match_active');
      document.getElementById("match_num6_3").classList.remove('match_active');
      document.getElementById("match_num7_3").classList.remove('match_active');
      document.getElementById("match_num3_3").classList.add('match_active');
      document.getElementById("match_num6_3").classList.add('match_active');
    }else if(MatchNum3 == 2){
      document.getElementById("match_num1_3").classList.remove('match_active');
      document.getElementById("match_num2_3").classList.remove('match_active');
      document.getElementById("match_num3_3").classList.remove('match_active');
      document.getElementById("match_num4_3").classList.remove('match_active');
      document.getElementById("match_num5_3").classList.remove('match_active');
      document.getElementById("match_num6_3").classList.remove('match_active');
      document.getElementById("match_num7_3").classList.remove('match_active');
      document.getElementById("match_num1_3").classList.add('match_active');
      document.getElementById("match_num3_3").classList.add('match_active');
      document.getElementById("match_num4_3").classList.add('match_active');
      document.getElementById("match_num5_3").classList.add('match_active');
      document.getElementById("match_num7_3").classList.add('match_active');
    }else if(MatchNum3 == 3){
      document.getElementById("match_num1_3").classList.remove('match_active');
      document.getElementById("match_num2_3").classList.remove('match_active');
      document.getElementById("match_num3_3").classList.remove('match_active');
      document.getElementById("match_num4_3").classList.remove('match_active');
      document.getElementById("match_num5_3").classList.remove('match_active');
      document.getElementById("match_num6_3").classList.remove('match_active');
      document.getElementById("match_num7_3").classList.remove('match_active');
      document.getElementById("match_num1_3").classList.add('match_active');
      document.getElementById("match_num3_3").classList.add('match_active');
      document.getElementById("match_num4_3").classList.add('match_active');
      document.getElementById("match_num6_3").classList.add('match_active');
      document.getElementById("match_num7_3").classList.add('match_active');
    }else if(MatchNum3 == 4){
      document.getElementById("match_num1_3").classList.remove('match_active');
      document.getElementById("match_num2_3").classList.remove('match_active');
      document.getElementById("match_num3_3").classList.remove('match_active');
      document.getElementById("match_num4_3").classList.remove('match_active');
      document.getElementById("match_num5_3").classList.remove('match_active');
      document.getElementById("match_num6_3").classList.remove('match_active');
      document.getElementById("match_num7_3").classList.remove('match_active');
      document.getElementById("match_num2_3").classList.add('match_active');
      document.getElementById("match_num3_3").classList.add('match_active');
      document.getElementById("match_num4_3").classList.add('match_active');
      document.getElementById("match_num6_3").classList.add('match_active');
    }else if(MatchNum3 == 5){
      document.getElementById("match_num1_3").classList.remove('match_active');
      document.getElementById("match_num2_3").classList.remove('match_active');
      document.getElementById("match_num3_3").classList.remove('match_active');
      document.getElementById("match_num4_3").classList.remove('match_active');
      document.getElementById("match_num5_3").classList.remove('match_active');
      document.getElementById("match_num6_3").classList.remove('match_active');
      document.getElementById("match_num7_3").classList.remove('match_active');
      document.getElementById("match_num1_3").classList.add('match_active');
      document.getElementById("match_num2_3").classList.add('match_active');
      document.getElementById("match_num4_3").classList.add('match_active');
      document.getElementById("match_num6_3").classList.add('match_active');
      document.getElementById("match_num7_3").classList.add('match_active');
    }else if(MatchNum3 == 6){
      document.getElementById("match_num1_3").classList.remove('match_active');
      document.getElementById("match_num2_3").classList.remove('match_active');
      document.getElementById("match_num3_3").classList.remove('match_active');
      document.getElementById("match_num4_3").classList.remove('match_active');
      document.getElementById("match_num5_3").classList.remove('match_active');
      document.getElementById("match_num6_3").classList.remove('match_active');
      document.getElementById("match_num7_3").classList.remove('match_active');
      document.getElementById("match_num1_3").classList.add('match_active');
      document.getElementById("match_num2_3").classList.add('match_active');
      document.getElementById("match_num4_3").classList.add('match_active');
      document.getElementById("match_num5_3").classList.add('match_active');
      document.getElementById("match_num6_3").classList.add('match_active');
      document.getElementById("match_num7_3").classList.add('match_active');
    }else if(MatchNum3 == 7){
      document.getElementById("match_num1_3").classList.remove('match_active');
      document.getElementById("match_num2_3").classList.remove('match_active');
      document.getElementById("match_num3_3").classList.remove('match_active');
      document.getElementById("match_num4_3").classList.remove('match_active');
      document.getElementById("match_num5_3").classList.remove('match_active');
      document.getElementById("match_num6_3").classList.remove('match_active');
      document.getElementById("match_num7_3").classList.remove('match_active');
      document.getElementById("match_num1_3").classList.add('match_active');
      document.getElementById("match_num3_3").classList.add('match_active');
      document.getElementById("match_num6_3").classList.add('match_active');
    }else if(MatchNum3 == 8){
      document.getElementById("match_num1_3").classList.remove('match_active');
      document.getElementById("match_num2_3").classList.remove('match_active');
      document.getElementById("match_num3_3").classList.remove('match_active');
      document.getElementById("match_num4_3").classList.remove('match_active');
      document.getElementById("match_num5_3").classList.remove('match_active');
      document.getElementById("match_num6_3").classList.remove('match_active');
      document.getElementById("match_num7_3").classList.remove('match_active');
      document.getElementById("match_num1_3").classList.add('match_active');
      document.getElementById("match_num2_3").classList.add('match_active');
      document.getElementById("match_num3_3").classList.add('match_active');
      document.getElementById("match_num4_3").classList.add('match_active');
      document.getElementById("match_num5_3").classList.add('match_active');
      document.getElementById("match_num6_3").classList.add('match_active');
      document.getElementById("match_num7_3").classList.add('match_active');
    }else if(MatchNum3 == 9){
      document.getElementById("match_num1_3").classList.remove('match_active');
      document.getElementById("match_num2_3").classList.remove('match_active');
      document.getElementById("match_num3_3").classList.remove('match_active');
      document.getElementById("match_num4_3").classList.remove('match_active');
      document.getElementById("match_num5_3").classList.remove('match_active');
      document.getElementById("match_num6_3").classList.remove('match_active');
      document.getElementById("match_num7_3").classList.remove('match_active');
      document.getElementById("match_num1_3").classList.add('match_active');
      document.getElementById("match_num2_3").classList.add('match_active');
      document.getElementById("match_num3_3").classList.add('match_active');
      document.getElementById("match_num4_3").classList.add('match_active');
      document.getElementById("match_num6_3").classList.add('match_active');
      document.getElementById("match_num7_3").classList.add('match_active');
    }}*/
    // Sort
    PickNumber = 0;
    Colnum = 0;
    nul='';
    document.getElementById('col1').onclick = pickCol1;
    
  function pickCol1(){
    Colnum = Colnum+1;
  var sort_num1_1 = Number (document.getElementById("sort_num1_1").value);
    var sort_num2_1 = Number (document.getElementById("sort_num2_1").value);
    var sort_num3_1 = Number (document.getElementById("sort_num3_1").value);
    var sort_num4_1 = Number (document.getElementById("sort_num4_1").value);
    var sort_num5_1 = Number (document.getElementById("sort_num5_1").value);
    var sort_num6_1 = Number (document.getElementById("sort_num6_1").value);
    var sort_num7_1 = Number (document.getElementById("sort_num7_1").value);
    var sort_num8_1 = Number (document.getElementById("sort_num8_1").value);
    var tsort_num1_1 = document.querySelector('#sort_num1_1');
    var tsort_num2_1 = document.querySelector('#sort_num2_1');
    var tsort_num3_1 = document.querySelector('#sort_num3_1');
    var tsort_num4_1 = document.querySelector('#sort_num4_1');
    var tsort_num5_1 = document.querySelector('#sort_num5_1');
    var tsort_num6_1 = document.querySelector('#sort_num6_1');
    var tsort_num7_1 = document.querySelector('#sort_num7_1');
    var tsort_num8_1 = document.querySelector('#sort_num8_1');
    if (PickNumber == 0){
    if (sort_num1_1 >= 1){
      PickNumber = sort_num1_1;
      tsort_num1_1.value = nul;
      sort_num1_1 = 0;
    }else if (sort_num2_1 >= 1){
      PickNumber = sort_num2_1;
      tsort_num2_1.value = nul;
      sort_num2_1 = 0;
    }else if (sort_num3_1 >= 1){
      PickNumber = sort_num3_1;
      tsort_num3_1.value = nul;
    }else if (sort_num4_1 >= 1){
      PickNumber = sort_num4_1;
      tsort_num4_1.value = nul;
    }else if (sort_num5_1 >= 1){
      PickNumber = sort_num5_1;
      tsort_num5_1.value = nul;
    }else if (sort_num6_1 >= 1){
      PickNumber = sort_num6_1;
      tsort_num6_1.value = nul;
    }else if (sort_num7_1 >= 1){
      PickNumber = sort_num7_1;
      tsort_num7_1.value = nul;
    }else if (sort_num8_1 >= 1){
      PickNumber = sort_num8_1;
      tsort_num8_1.value = nul;
    }}else if(PickNumber >= 1){
      if (sort_num8_1 < 1){
        sort_num8_1 = Number('PickNumber');
        tsort_num8_1.value = PickNumber;
        PickNumber = 0;
      }else if (sort_num7_1 < 1){
        sort_num7_1 = Number('PickNumber');
        tsort_num7_1.value = PickNumber;
        PickNumber = 0;
      }else if (sort_num6_1 < 1){
        sort_num6_1 = Number('PickNumber');
        tsort_num6_1.value = PickNumber;
        PickNumber = 0;
      }else if (sort_num5_1 < 1){
        sort_num5_1 = Number('PickNumber');
        tsort_num5_1.value = PickNumber;
        PickNumber = 0;
      }else if (sort_num4_1 < 1){
        sort_num4_1 = Number('PickNumber');
        tsort_num4_1.value = PickNumber;
        PickNumber = 0;
      }else if (sort_num3_1 < 1){
        sort_num3_1 = Number('PickNumber');
        tsort_num3_1.value = PickNumber;
        PickNumber = 0;
      }else if (sort_num2_1 < 1){
        sort_num2_1 = Number('PickNumber');
        tsort_num2_1.value = PickNumber;
        PickNumber = 0;
      }else if (sort_num1_1 < 1){
        sort_num1_1 = Number('PickNumber');
        tsort_num1_1.value = PickNumber;
        PickNumber = 0;
      }
    }
    Win();
  }
    document.getElementById('col2').onclick = pickCol2;
  function pickCol2(){
    Colnum = Colnum+1;
    var sort_num1_2 = Number (document.getElementById("sort_num1_2").value);
    var sort_num2_2 = Number (document.getElementById("sort_num2_2").value);
    var sort_num3_2 = Number (document.getElementById("sort_num3_2").value);
    var sort_num4_2 = Number (document.getElementById("sort_num4_2").value);
    var sort_num5_2 = Number (document.getElementById("sort_num5_2").value);
    var sort_num6_2 = Number (document.getElementById("sort_num6_2").value);
    var sort_num7_2 = Number (document.getElementById("sort_num7_2").value);
    var sort_num8_2 = Number (document.getElementById("sort_num8_2").value);
     tsort_num1_2 = document.querySelector('#sort_num1_2');
     tsort_num2_2 = document.querySelector('#sort_num2_2');
     tsort_num3_2 = document.querySelector('#sort_num3_2');
     tsort_num4_2 = document.querySelector('#sort_num4_2');
     tsort_num5_2 = document.querySelector('#sort_num5_2');
     tsort_num6_2 = document.querySelector('#sort_num6_2');
     tsort_num7_2 = document.querySelector('#sort_num7_2');
     tsort_num8_2 = document.querySelector('#sort_num8_2');
    if (PickNumber == 0){
    if (sort_num1_2 >= 1){
      PickNumber = sort_num1_2;
      tsort_num1_2.value = nul;
    }else if (sort_num2_2 >= 1){
      PickNumber = sort_num2_2;
      tsort_num2_2.value = nul;
    }else if (sort_num3_2 >= 1){
      PickNumber = sort_num3_2;
      tsort_num3_2.value = nul;
    }else if (sort_num4_2 >= 1){
      PickNumber = sort_num4_2;
      tsort_num4_2.value = nul;
    }else if (sort_num5_2 >= 1){
      PickNumber = sort_num5_2;
      tsort_num5_2.value = nul;
    }else if (sort_num6_2 >= 1){
      PickNumber = sort_num6_2;
      tsort_num6_2.value = nul;
    }else if (sort_num7_2 >= 1){
      PickNumber = sort_num7_2;
      tsort_num7_2.value = nul;
    }else if (sort_num8_2 >= 1){
      PickNumber = sort_num8_2;
      tsort_num8_2.value = nul;
    }}else if(PickNumber >= 1){
      if (sort_num8_2 == 0){
        sort_num8_2 = Number('PickNumber');
        tsort_num8_2.value = PickNumber;
        PickNumber = 0;
      }else if ((sort_num7_2 == 0)&&(PickNumber < sort_num8_2)){
        sort_num7_2 = Number('PickNumber');
        tsort_num7_2.value = PickNumber;
        PickNumber = 0;
      }else if ((sort_num6_2 == 0)&&(PickNumber < sort_num7_2)){
      sort_num6_2 = Number('PickNumber');
      tsort_num6_2.value = PickNumber;
      PickNumber = 0;
      }else if ((sort_num5_2 == 0)&&(PickNumber < sort_num6_2)){
        sort_num5_2 = Number('PickNumber');
        tsort_num5_2.value = PickNumber;
        PickNumber = 0;
      }else if ((sort_num4_2 == 0)&&(PickNumber < sort_num5_2)){
        sort_num4_2 = Number('PickNumber');
        tsort_num4_2.value = PickNumber;
        PickNumber = 0;
      }else if ((sort_num3_2 == 0)&&(PickNumber < sort_num4_2)){
        sort_num3_2 = Number('PickNumber');
        tsort_num3_2.value = PickNumber;
        PickNumber = 0;
      }else if ((sort_num2_2 == 0)&&(PickNumber < sort_num3_2)){
        sort_num2_2 = Number('PickNumber');
        tsort_num2_2.value = PickNumber;
        PickNumber = 0;
      }else if ((sort_num1_2 == 0)&&(PickNumber < sort_num2_2)){
        sort_num1_2 = Number('PickNumber');
        tsort_num1_2.value = PickNumber;
        PickNumber = 0;
      }else{
        alert('Упсс... Так нельзя! Число должно быть меньше числа, на котором стоит!');
      }
    }
    console.log(sort_num1_2, sort_num2_2, sort_num3_2, sort_num4_2, sort_num5_2, sort_num6_2, sort_num7_2, sort_num8_2);
    Win();
  }
    document.getElementById('col3').onclick = pickCol3;
  function pickCol3(){
    Colnum = Colnum+1;
    var sort_num1_3 = Number (document.getElementById("sort_num1_3").value);
    var sort_num2_3 = Number (document.getElementById("sort_num2_3").value);
    var sort_num3_3 = Number (document.getElementById("sort_num3_3").value);
    var sort_num4_3 = Number (document.getElementById("sort_num4_3").value);
    var sort_num5_3 = Number (document.getElementById("sort_num5_3").value);
    var sort_num6_3 = Number (document.getElementById("sort_num6_3").value);
    var sort_num7_3 = Number (document.getElementById("sort_num7_3").value);
    var sort_num8_3 = Number (document.getElementById("sort_num8_3").value);
     tsort_num1_3 = document.querySelector('#sort_num1_3');
     tsort_num2_3 = document.querySelector('#sort_num2_3');
     tsort_num3_3 = document.querySelector('#sort_num3_3');
     tsort_num4_3 = document.querySelector('#sort_num4_3');
     tsort_num5_3 = document.querySelector('#sort_num5_3');
     tsort_num6_3 = document.querySelector('#sort_num6_3');
     tsort_num7_3 = document.querySelector('#sort_num7_3');
     tsort_num8_3 = document.querySelector('#sort_num8_3');
    if (PickNumber == 0){
    if (sort_num1_3 > 0){
      PickNumber = sort_num1_3;
      tsort_num1_3.value = nul;
    }else if (sort_num2_3 > 0){
      PickNumber = sort_num2_3;
      tsort_num2_3.value = nul;
    }else if (sort_num3_3 > 0){
      PickNumber = sort_num3_3;
      tsort_num3_3.value = nul;
    }else if (sort_num4_3 > 0){
      PickNumber = sort_num4_3;
      tsort_num4_3.value = nul;
    }else if (sort_num5_3 > 0){
      PickNumber = sort_num5_3;
      tsort_num5_3.value = nul;
    }else if (sort_num6_3 > 0){
      PickNumber = sort_num6_3;
      tsort_num6_3.value = nul;
    }else if (sort_num7_3 > 0){
      PickNumber = sort_num7_3;
      tsort_num7_3.value = nul;
    }else if (sort_num8_3 > 0){
      PickNumber = sort_num8_3;
      tsort_num8_3.value = nul;
    }}else if(PickNumber >= 1){
      if (sort_num8_3 == 0){
        sort_num8_3 = Number('PickNumber');
        tsort_num8_3.value = PickNumber;
        PickNumber = 0;

      }else if ((sort_num7_3 == 0)&&(PickNumber < sort_num8_3)){
        sort_num7_3 = Number('PickNumber');
        tsort_num7_3.value = PickNumber;
        PickNumber = 0;
      }else if ((sort_num6_3 == 0)&&(PickNumber < sort_num7_3)){
        sort_num6_3 = Number('PickNumber');
        tsort_num6_3.value = PickNumber;
        PickNumber = 0;
      }else if ((sort_num5_3 == 0)&&(PickNumber < sort_num6_3)){
        sort_num5_3 = Number('PickNumber');
        tsort_num5_3.value = PickNumber;
        PickNumber = 0;
      }else if ((sort_num4_3 == 0)&&(PickNumber < sort_num5_3)){
        sort_num4_3 = Number('PickNumber');
        tsort_num4_3.value = PickNumber;
        PickNumber = 0;
      }else if ((sort_num3_3 == 0)&&(PickNumber < sort_num4_3)){
        sort_num3_3 = Number('PickNumber');
        tsort_num3_3.value = PickNumber;
        PickNumber = 0;
      }else if ((sort_num2_3 == 0)&&(PickNumber < sort_num3_3)){
        sort_num2_3 = Number('PickNumber');
        tsort_num2_3.value = PickNumber;
        PickNumber = 0;
      }else if ((sort_num1_3 == 0)&&(PickNumber < sort_num2_3)){
        sort_num1_3 = Number('PickNumber');
        tsort_num1_3.value = PickNumber;
        PickNumber = 0;
      }else{
        alert('Упсс... Так нельзя! Число должно быть меньше числа, на котором стоит!');
      }
    }
    Win();
    
  }
  // -------WIN----------
  function Win(){
    var sort_num1_2 = Number (document.getElementById("sort_num1_2").value);
    var sort_num1_3 = Number (document.getElementById("sort_num1_3").value);
    if (sort_num1_2 == 1){
      alert('Молодец!2');
      alert('Тебе потребовалось ' + Colnum + ' шагов, чтобы сделать это!');
      Colnum = 0;

    }else if(sort_num1_3 == 1){
alert('Молодец!3');
alert('Тебе потребовалось ' + Colnum + ' шагов, чтобы сделать это!');
Colnum = 0;
  }
}
  