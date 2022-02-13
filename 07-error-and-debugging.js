/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// (---'JAWABAN NOMOR 1'---);
// 1. Type error = type error object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.
// 2. Reference Error = The ReferenceError object represents an error when a variable that doesnt existor hasnt yet been initialized in the current scope is referenced.
// 3. Range Error = The RangeError object indicates an error when a value is not in the set or range of allowed values.
// 4. Syntax Error = he SyntaxError object represents an error when trying to interpret syntactically invalid code. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
// (---'JAWABAN NOMOR 2'---);
// 1. akan terjadi error
// 2. kategori var const
// 3. karena setelah kita membuat variabel, baru kita bisa untuk console di bawah dan bukan di atas karena variabel scope nya tidak pas



console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000; 
