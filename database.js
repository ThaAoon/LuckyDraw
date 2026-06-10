// ==========================================
// DATABASE CONFIGURATION // ไฟล์ฐานข้อมูลพนักงาน
// ==========================================

// วางข้อมูลดิบพนักงานที่นี่ โดยเรียงลำดับคอลัมน์และคั่นด้วยเครื่องหมาย | (Pipe) ดังนี้:
// [รหัสพนักงาน] | [ชื่อ] | [นามสกุล] | [แผนก] | [หน่วยงาน] | [หมายเหตุ/Remark]
// สามารถเว้นวรรคภายในข้อความได้ตามปกติแล้ว เช่น Tech Center
const RAW_EMPLOYEE_DATA = `
5022230291 | Phetphisut | Tinlalux | Technology Center | - | -
5022230292 | Test | Test2 | AUTO MOUNT CENTER | - | -
5022230293 | Test | Test3 | AUTOMOTIVE BIZ. CENTER | - | -
5022230294 | Test | Test4 | CORPORATE HUMAN MANAGEMENT CENTER | - | -
5022230295 | Test | Test5 | CORPORATE PLANNING & CONTROL CENTER | - | -
5022230296 | Test | Test6 | CORPORATE PROCUREMENT CENTER | - | -
5022230297 | Test | Test7 | IMAGING PRODUCTS BIZ. CENTER | - | -
5022230298 | Test | Test8 | LENS BIZ. CENTER | - | -
5022230299 | Test | Test9 | PRODUCTION ORGANIZATION | - | -
5022230300 | Test | Test10 | QUALITY CENTER | - | -
5022230301 | Test | Test11 | TECHNOLOGY CENTER | - | -
`;

// ระบบประมวลผลคำนวณและแปลงข้อความดิบ (Raw Text) แยกเข้า Parameter อัตโนมัติ
const EMPLOYEE_DATABASE = RAW_EMPLOYEE_DATA.trim().split('\n').map(line => {
    // เปลี่ยนมาแยกคำด้วยเครื่องหมาย | และใช้ .map(item => item.trim()) เพื่อลบช่องว่างส่วนเกินหัว-ท้าย
    const columns = line.split('|').map(item => item.trim());
    const [id, firstName, lastName, department, unit, remark] = columns; 
    
    return {
        id: id || "N/A",
        firstName: firstName || "Unknown",
        lastName: lastName || "",
        department: department || "N/A",
        unit: unit || "N/A",
        remark: remark || "-"
    };
}).filter(emp => emp.id !== "N/A"); // กรองแถวที่ว่างออกไป
