    //Take consts
    const gridbox = document.getElementById('gridbox');
    const cong = document.getElementById('cong');
    const gameover = document.querySelector(".gameover");
    //Take consts


    //New Game Button Function
    function runner() {

        gridbox.style.opacity = "1";
        cong.style.display = "none";


        clearbox();

        gridbox.addEventListener("change", function () {

            const boxA = Number(document.getElementById('boxA').value);
            const boxB = Number(document.getElementById('boxB').value);
            const boxC = Number(document.getElementById('boxC').value);
            const boxD = Number(document.getElementById('boxD').value);
            const boxE = Number(document.getElementById('boxE').value);
            const boxF = Number(document.getElementById('boxF').value);
            const boxT = Number(document.getElementById('boxT').value);
            const boxG = Number(document.getElementById('boxG').value);
            const boxH = Number(document.getElementById('boxH').value);
            let ABC = document.getElementById('ABC');
            let DEF = document.getElementById('DEF');
            let TGH = document.getElementById('TGH');
            let AEH = document.getElementById('AEH');
            let CFH = document.getElementById('CFH');
            let BEG = document.getElementById('BEG');
            let ADT = document.getElementById('ADT');
            let CET = document.getElementById('CET');


            var ABCres = boxA + boxB + boxC;
            ABC.innerHTML = ABCres;

            var DEFres = boxD + boxE + boxF;
            DEF.innerHTML = DEFres;

            var TGHres = boxT + boxG + boxH;
            TGH.innerHTML = TGHres;

            var AEHres = boxA + boxE + boxH;
            AEH.innerHTML = AEHres;

            var CFHres = boxC + boxF + boxH;
            CFH.innerHTML = CFHres;

            var BEGres = boxB + boxE + boxG;
            BEG.innerHTML = BEGres;

            var ADTres = boxA + boxD + boxT;
            ADT.innerHTML = ADTres;

            var CETres = boxC + boxE + boxT;
            CET.innerHTML = CETres;


            var correct = [];
            correct.push(boxA, boxB, boxC, boxD, boxE, boxF, boxT, boxG, boxH);
            var correct2 = [];
            correct2.push(ABCres, DEFres, TGHres, AEHres, CFHres, BEGres, ADTres, CETres);


            let correctCleaner = correct.filter((c, index) => {

                return correct.indexOf(c) === index;
            });

            let correctCleaner2 = correct2.filter((c, index) => {

                return correct2.indexOf(c) === index;
            });



            var result = correctCleaner.reduce(function (acc, val) {
                return acc + val;
            }, 0);
            var result2 = correctCleaner2.reduce(function (acc, val) {
                return acc + val;
            }, 0);

            if (result == 45 && result2 == 15) {

                let inputs = document.querySelectorAll("inputs");


                gridbox.style.opacity = "0.2";
                cong.style.display = "flex";
                gameover.style.display = "block";


            }

        });


    };
    //New Game Button Function




    //Box Value Cleaner Function
    boxA.addEventListener("click", function () {


        boxA.value = "";


    });

    boxB.addEventListener("click", function () {


        boxB.value = "";


    });

    boxC.addEventListener("click", function () {


        boxC.value = "";


    });

    boxD.addEventListener("click", function () {


        boxD.value = "";


    });

    boxE.addEventListener("click", function () {


        boxE.value = "";


    });

    boxF.addEventListener("click", function () {


        boxF.value = "";


    });

    boxT.addEventListener("click", function () {


        boxT.value = "";


    });

    boxG.addEventListener("click", function () {


        boxG.value = "";


    });

    boxH.addEventListener("click", function () {


        boxH.value = "";


    });
    //Box Value Cleaner Function





    //Clear Button Function
    function clearbox() {

        const boxA = document.getElementById('boxA');
        const boxB = document.getElementById('boxB');
        const boxC = document.getElementById('boxC');
        const boxD = document.getElementById('boxD');
        const boxE = document.getElementById('boxE');
        const boxF = document.getElementById('boxF');
        const boxT = document.getElementById('boxT');
        const boxG = document.getElementById('boxG');
        const boxH = document.getElementById('boxH');

        let aa = document.getElementById('ABC');
        let bb = document.getElementById('DEF');
        let cc = document.getElementById('TGH');
        let dd = document.getElementById('AEH');
        let ee = document.getElementById('CFH');
        let ff = document.getElementById('BEG');
        let gg = document.getElementById('ADT');
        let hh = document.getElementById('CET');

        aa.innerHTML = "";
        bb.innerHTML = "";
        cc.innerHTML = "";
        dd.innerHTML = "";
        ee.innerHTML = "";
        ff.innerHTML = "";
        gg.innerHTML = "";
        hh.innerHTML = "";

        boxA.value = "";
        boxB.value = "";
        boxC.value = "";
        boxD.value = "";
        boxE.value = "";
        boxF.value = "";
        boxT.value = "";
        boxG.value = "";
        boxH.value = "";


    };
    //Clear Button Function
