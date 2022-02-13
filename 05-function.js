/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) { 
    if (salary < 5000000) {
        return 0;
    } else if (salary >= 5000000 && salary < 10000000) {
        return salary * 5/100;
    }else if (salary >= 10000000 && salary < 20000000) {
        return salary * 10/100;
    }else if (salary >= 20000000) {
        return salary * 20/100
    } else {
        return 'input salah';
    }
}
const salary1 = 4500000
console.log(taxCalc(salary1));

const salary2 = 5000000
console.log(taxCalc(salary2));

const salary3 = 20000000
console.log(taxCalc(salary3));



/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(height,weight) { 
checkBMI = (weight / (height * height) * 10000);
    if (checkBMI < 18.5) {
        console.log('Tingi' + height + 'Dan Berat' + weight + 'Dengan Hasil BMI' + checkBMI.toFixed(1) + 'termasuk under weight')
    }else if (checkBMI > 18.5 && checkBMI < 24.9) {
        console.log('Tingi' + height + 'Dan Berat' + weight + 'Dengan Hasil BMI' + checkBMI.toFixed(1) + 'termasuk normal')  
    }else if (checkBMI > 25 && checkBMI < 29.9) {
        console.log('Tingi' + height + 'Dan Berat' + weight + 'Dengan Hasil BMI' + checkBMI.toFixed(1) + 'termasuk over weight')
    }else if (checkBMI > 30 && checkBMI < 34.9) {
        console.log('Tingi' + height + 'Dan Berat' + weight + 'Dengan Hasil BMI' + checkBMI.toFixed(1) + 'termasuk obese')
    }else if (checkBMI > 35) {
        console.log('Tingi' + height + 'Dan Berat' + weight + 'Dengan Hasil BMI' + checkBMI.toFixed(1) + 'termasuk extremely obese')
    }
    return checkBMI
    }
    checkBMI(170, 80);



/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) 
{
    return sentence.replace (/\w\S*/g, function(text)
    { return text.charAt(0).convToUpperCase() + text.substr(1).toLowerCase()}) 
}
console.log('---------------------------');
console.log('kalian luar biasa');


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(string) 
{
    const arrChar = string.split('');
    const isSeparated = arrChar.filter((space) => space == '').length > 0;
    let isNotTwin = '';
    // mencari character yang tidak kembar
    for (let i = 0; i < arrChar.length; i++) {
        if (arrChar.filter((char) => char === arrChar[i]).length === 1) {
            isNotTwin += arrChar[i];

        }

    }
    if (isSeparated) {
        return 'kata tidak boleh dipisah';
    }else if (!isSeparated) {
        if (isNotTwin.length > 0){
            return isNotTwin[0];
        }else if (isNotTwin.length === 0){
            return isNotTwin;
        }
    }else {
        return 'pastikan anda menginput string';
    }
}
const input1 = 'hello world"';
console.log(firstNonRepeatedChar(input1));
const input2 = 'rezki';
console.log(firstNonRepeatedChar(input2));
const input3 = 'heyho';
console.log(firstNonRepeatedChar(input3));
