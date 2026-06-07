// ==========================================
// DATABASE CONFIGURATION // ไฟล์ฐานข้อมูลพนักงาน
// ==========================================

// วางข้อมูลดิบพนักงานที่นี่ โดยเรียงลำดับคอลัมน์ดังนี้:
// [รหัสพนักงาน] [ชื่อ] [นามสกุล] [แผนก] [หน่วยงาน] [หมายเหตุ/Remark]
// ใช้ช่องว่าง (Space) หรือ การกด Tab ในการแยกแต่ละคอลัมน์
// *ข้อควรระวัง: ภายในตัวชื่อ นามสกุล แผนก หน่วยงาน ห้ามมีช่องว่างเว้นวรรคเด็ดขาด (ถ้ามีให้ใช้เครื่องหมาย _ แทน)*
const RAW_EMPLOYEE_DATA = `
0001 Phetphisut Tinlalux IT System Support_Staff -
0002 Somchai Rakdee HR Training Executive_Level -
0003 Somsri Songngan Developer Mobile_Team Outsource
0004 John Doe Accounting Tax_Unit Temporary
0005 Jane Smith Marketing Digital_Campaign -
0006 Anucha Phan IT Network_Engineer -
0007 Supaporn Kham HR Recruitment_Specialist -
0008 Nattapong Lee Developer Web_Team Outsource
0009 Waraporn Chai Accounting Payroll_Unit -
0010 Kittipong Wong Marketing Content_Creator -
0011 Sombat Suksawat IT System_Administrator -
0012 Arisa Phan HR Employee_Relations -
0013 Chaiwat Boon Developer Mobile_Team Outsource
0014 Prapaporn Kham Accounting Financial_Analyst -
0015 Nattawut Lee Marketing SEO_Specialist -
0016 Somchai Rakdee HR Training Executive_Level -
0017 Somsri Songngan Developer Mobile_Team Outsource
0018 John Doe Accounting Tax_Unit Temporary
0019 Jane Smith Marketing Digital_Campaign -
0020 Anucha Phan IT Network_Engineer -
0021 Supaporn Kham HR Recruitment_Specialist -
0022 Nattapong Lee Developer Web_Team Outsource
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