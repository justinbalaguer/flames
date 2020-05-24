let flames_arr = ["F","L","A","M","E","S"];
let flames_data = ["Friends","Lovers","Affectionate","Marriage","Enemies","Soulmates"];
var flames_one = [];
var flames_two = [];
var name_one = "";
var name_two = "";

function flames() {

    name_one = $('#name-one').val().toLowerCase().split("");
    name_two = $('#name-two').val().toLowerCase().split("");

    if(name_one.length==0 || name_two.length==0) {
        console.log("err");
    } else {

        name_one_arr = name_one.filter(e =>e !== " ");
        name_two_arr = name_two.filter(e =>e !== " ");

        var name_letters_1 = name_one_arr.filter(val => !name_two_arr.includes(val));
        var name_letters_2 = name_two_arr.filter(val => !name_one_arr.includes(val));
        var exempt_letters = name_letters_1.concat(name_letters_2);
        var total_one = name_letters_1.length;
        var total_two = name_letters_2.length;
        var overall = total_one + total_two;

        var name_one_total = name_one.length;
        var name_two_total = name_two.length;

        var result_1 = [];
        var result_2 = [];

        for(j=0;j<name_one_total;j++) {
            if(!exempt_letters.includes(name_one[j])) {
                result_1.push("<strike>" + name_one[j] + "</strike>");
            } else {
                result_1.push(name_one[j]);
            }
        }

        for(j=0;j<name_two_total;j++) {
            if(!exempt_letters.includes(name_two[j])) {
                result_2.push("<strike>" + name_two[j] + "</strike>");
            } else {
                result_2.push(name_two[j]);
            }
        }

        result_1.filter(e=>e !== undefined);
        var final_result_1 = result_1.join("").toUpperCase();
        $('#result-1').html(`
        <div><b>`
        + final_result_1 +
        ` &equals; `+total_one+`</b></div>`
        );

        result_2.filter(e=>e !== undefined);
        var final_result_2 = result_2.join("").toUpperCase();
        $('#result-2').html(`
        <div><b>`
        + final_result_2 +
        ` &equals; `+total_two+`</b></div>`
        );

        $('#final-result').html(`<b>TOTAL &equals; `+overall+`</b>`);
        
        var cnt = 0;
        for(i=0;i<overall;i++) {
            if(flames_arr[cnt]==undefined) {
                cnt = 0;
            } else {
                var letter = flames_arr.indexOf(flames_arr[cnt]);
            }
            cnt++;
        }
        var x = letter >= 0 ? flames_data[letter] : "";
        $('#result').text(x.toUpperCase());

    }
}