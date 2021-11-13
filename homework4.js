// Ex 1
class PhanSo {
    constructor(tuSo, mauSo) {
        this.tuSo = tuSo
        this.mauSo = mauSo
    }

    sum() {
        return new PhanSo((this.tuSo * phanSo2.mauSo + this.mauSo * phanSo2.tuSo), (this.mauSo * phanSo2.mauSo))
    }
    sub() {
        return new PhanSo((this.tuSo * phanSo2.mauSo - this.mauSo * phanSo2.tuSo), (this.mauSo * phanSo2.mauSo))
    }
    mul() {
        return new PhanSo((this.tuSo * phanSo2.tuSo), (this.mauSo * phanSo2.mauSo))
    }
    div() {
        return new PhanSo((this.tuSo * phanSo2.mauSo), (this.mauSo * phanSo2.tuSo))
    }

    show() {
        console.log(`${this.tuSo} / ${this.mauSo}`)
    }
}

let phanSo1 = new PhanSo(3, 4)
let phanSo2 = new PhanSo(5, 7)
let tong = phanSo1.sum(phanSo2)
let hieu = phanSo1.sub(phanSo2)
let tich = phanSo1.mul(phanSo2)
let thuong = phanSo1.div(phanSo2)
tong.show()
hieu.show()
tich.show()
thuong.show()

// Ex 2
class Candidate {
    constructor(code, name, dob, math, literature, eng) {
        this.code = code
        this.name = name
        this.dob = dob
        this.math = math
        this.literature = literature
        this.eng = eng
    }

    
    
}

class TestCandidate extends Candidate {
    constructor(code, name, dob, math, literature, eng) {
        super(math, literature, eng)
        this.math = math
        this.literature = literature
        this.eng = eng
    }

    sum() {
        let total = this.math + this.literature + this.eng
        return total
    }
    check() {
        // console.log(this)
        if (this.sum() > 15) {
            this.show()
        }
    }
    show() {
        console.log(this)
    }
}

let thiSinh1 = new Candidate("K001", "Linh", "01-10-2004", 9, 8, 10)
let thiSinh2 = new Candidate("K002", "Hương", "13-12-2004", 8, 9.5, 9.8)
let thiSinh3 = new Candidate("K003", "Mai", "17-04-2004", 9, 4, 10)
let thiSinh4 = new Candidate("K004", "Vũ", "15-03-2004", 1, 4, 5)
let thiSinh5 = new Candidate("K005", "Minh", "22-06-2004", 9, 5, 1)

let list = [thiSinh1, thiSinh2, thiSinh3, thiSinh4, thiSinh5]
for (let i = 0; i < list.length; i++){
    let result = new TestCandidate(list[i].code, list[i].name, list[i].dob,list[i].math, list[i].literature, list[i].eng)
    result.sum()
    result.check()
}