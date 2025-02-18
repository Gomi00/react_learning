class 사람 {
    constructor(이름, 나이, 성별){
        this.이름 = 이름;
        this.나이 = 나이;
        this.성별 = 성별;
    }
    말하기 () {
        console.log(this.이름 + ":" + " 안녕하세요!");
    }
}

const 홍길동 = new 사람('홍길동', 30, "남");
console.log(홍길동);

홍길동.말하기();

const 최민서 = new 사람('최민서', 26, "남");
console.log(최민서);

최민서.말하기();

class 학생 extends 사람 {
    constructor(이름, 나이, 성별, 성적) {
        super(이름, 나이, 성별)
        this.성적 = 성적;
    }
    말하기(){
        console.log(this.이름 + ":" + "태정태세문단세...")
    }
    공부하기() {
        console.log(`${this.이름}: 공부중...`)
    }
}

const 채재후 = new 학생('채재후', 24, '남', 90)
console.log(채재후)
채재후.말하기();
채재후.공부하기();