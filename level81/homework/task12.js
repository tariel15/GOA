
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    area() {
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}

class AdvancedTriangle extends Triangle {

    constructor(a, b, c) {
        super(a, b, c);
    }

    perimeter() {
        return this.a + this.b + this.c;
    }
}

const tri = new AdvancedTriangle(3, 4, 5);

console.log("Area:", tri.area());
console.log("Perimeter:", tri.perimeter());
