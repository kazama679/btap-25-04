class Student7 {
    private id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
}

class Classroom {
    private students: Student7[];
    constructor() {
        this.students = [];
    }
    addStudent(student: Student7): void {
        this.students.push(student);
    }
    removeStudent(id: number): void {
        const index = this.students.findIndex(student => student.getId() === id);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            allStudents.push(removedStudent);
        }
    }
    editStudent(id: number, newName: string): void {
        const student = this.students.find(student => student.getId() === id);
        if (student) {
            student.name = newName;
        }
    }
    showStudents(): void {
        console.log("Học sinh lớp này:");
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
        });
    }
}
let allStudents: Student7[] = [
    new Student7(1, "Quang"),
    new Student7(2, "Tuấn khỉ"),
    new Student7(3, "Hoàng tử Long Biên"),
    new Student7(4, "Đức cớp"),
    new Student7(5, "Phú Xuyên"),
    new Student7(6, "Hải Phòng")
];

let classroom1 = new Classroom();
let classroom2 = new Classroom();
for (let i = 0; i < 3; i++) {
    classroom1.addStudent(allStudents.pop()!); 
    classroom2.addStudent(allStudents.pop()!);
}
console.log("Lớp A:");
classroom1.showStudents();
console.log("Lớp B:");
classroom2.showStudents();
classroom1.removeStudent(2);
console.log("Sau khi loại bỏ học sinh có ID 2 khỏi Lớp A:");
classroom1.showStudents();
classroom2.editStudent(4, "Câpj nhập tên");
console.log("Sau khi chỉnh sửa học sinh có mã số 4 ở lớp B:");