// ==========================================
// DATABASE CONFIGURATION // ไฟล์ฐานข้อมูลพนักงาน
// ==========================================

// วางข้อมูลดิบพนักงานที่นี่ โดยเรียงลำดับคอลัมน์ดังนี้:
// [รหัสพนักงาน] [ชื่อ] [นามสกุล] [แผนก] [หน่วยงาน] [หมายเหตุ/Remark]
// ใช้ช่องว่าง (Space) หรือ การกด Tab ในการแยกแต่ละคอลัมน์
// *ข้อควรระวัง: ภายในตัวชื่อ นามสกุล แผนก หน่วยงาน ห้ามมีช่องว่างเว้นวรรคเด็ดขาด (ถ้ามีให้ใช้เครื่องหมาย _ แทน)*
const RAW_EMPLOYEE_DATA = `
5022230291 Phetphisut Tinlalux TC - -
`;

// ระบบประมวลผลคำนวณและแปลงข้อความดิบ (Raw Text) แยกเข้า Parameter อัตโนมัติ
const EMPLOYEE_DATABASE = RAW_EMPLOYEE_DATA.trim().split('\n').map(line => {
    // แยกคำด้วยช่องว่าง (Whitespace) หนึ่งช่องหรือหลายช่อง
    const [id, firstName, lastName, department, unit, remark] = line.trim().split(/\s+/); 
    return {
        id: id || "N/A",
        firstName: firstName || "Unknown",
        lastName: lastName || "",
        department: department || "N/A",
        unit: unit || "N/A",
        remark: remark || "-"
    };
}).filter(emp => emp.id !== "N/A"); // กรองแถวที่ว่างออกไป
