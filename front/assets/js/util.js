const util = {
  translate_number(eng_num){
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return eng_num.toString().split('').map(x => farsiDigits[x]).join('');
  }
};

export default util
