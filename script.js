var atkBtn = document.getElementById('attackStart');
var atkOutPut = document.getElementById('attackOutput');

atkBtn.addEventListener('click', function() {
    const atkAtk = parseFloat(document.getElementById('attackAttack').value) || 0;
    const atkPer = (parseFloat(document.getElementById('attackPercent').value) || 0)*2;
    const atkDam = parseFloat(document.getElementById('attackDamage').value) || 0;
    
    var result = atkAtk + atkPer + atkDam;
    atkOutPut.innerHTML = "聖遺物スコアは"+result+"です";
});
