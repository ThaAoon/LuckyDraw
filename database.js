// ==========================================
// DATABASE CONFIGURATION // ไฟล์ฐานข้อมูลพนักงาน
// ==========================================

// วางข้อมูลดิบพนักงานที่นี่ โดยเรียงลำดับคอลัมน์และคั่นด้วยเครื่องหมาย | (Pipe) ดังนี้:
// [รหัสพนักงาน] | [ชื่อ] | [นามสกุล] | [แผนก] | [หน่วยงาน] | [หมายเหตุ/Remark]
// สามารถเว้นวรรคภายในข้อความได้ตามปกติแล้ว เช่น Tech Center
//const RAW_EMPLOYEE_DATA = `
5022260021 | Panathorn | Boonrae | Corporate Procurement Center |  | 
5022250181 | Punika | Phongkoh | Corporate Procurement Center |  | 
5022122440 | Wanvisa | Chowsuanthong | Automotive BIZ. Center |  | 
5022190472 | Praewroong | Assarattanasukin | Lens BIZ. Center |  | 
5022826767 | Punnawich | Nonoy | Lens Biz. Center |  | 
5022250179 | Chonlada | Phongoen | Corporate Procurement Center |  | 
5022121951 | Preeda | Wisaraket | Auto Mount Center |  | 
5022181094 | Chalit | Jinjo | Auto Mount Center |  | 
5020002380 | Phimlaphus | Nontakote | Imaging Products Biz. Center |  | 
5020004412 | Wanwisa | Homchan | Imaging Products Biz. Center |  | 
5020003393 | Anan | Srithongkam | Imaging Products Biz. Center |  | 
5022160568 | Theeraphot | Kanghae | Lens BIZ. Center |  | 
5022160569 | Pongsathorn | Pimonboot | Lens BIZ. Center |  | 
5022210235 | Thitipohn | Leenanon | Automotive BIZ. Center |  | 
5022161197 | Sawanya | Khonkham | Production Organization |  | 
5022240175 | Pimchanok | Charoenrat | Quality Center |  | 
5022240164 | Walaiporn | Chumchuang | Quality Center |  | 
5022826769 | Pimlapat | Chujit | Lens Biz. Center |  | 
5022826770 | Pantita | Jumprom | Lens Biz. Center |  | 
5022190920 | Walanchanat | Poomsook | Automotive BIZ. Center |  | 
5022240146 | Budsayamat | Tipsatchatam | Automotive BIZ. Center |  | 
5022122491 | Atchara | Rungruang | Automotive BIZ. Center |  | 
5022210254 | Tanyaporn | Kamwasri | Auto Mount Center |  | 
5022250131 | Kemmawat | Tacha | Automotive BIZ. Center |  | 
5022250029 | Saratsavadee | Sumalu | Corporate Human Management Center |  | 
5022140074 | Penpak | Kumlai | Corporate Human Management Center |  | 
5022210016 | Pornpit | kaewsatitpornchai | STT MD |  | 
5022060386 | Praew | Songnok | Imaging Products Biz. Center |  | 
5022825764 | Warinya | Thonongto | Imaging Products Biz. Center |  | 
5022825748 | Charinrat | Phanutta | Imaging Products Biz. Center |  | 
5022240014 | Worraya | Saenboran | Production Organization |  | 
5022200037 | Anongnat | Chaothai | Corporate Procurement Center |  | 
5022220175 | Thanyatip | Kaewprapa | Auto Mount Center |  | 
5022220144 | Nawapon | Boonjubud | Quality Center |  | 
5022140083 | Panyaporn | Najak | Quality Center |  | 
5022220220 | Oranee | Srisuwan | Imaging Products Biz. Center |  | 
5022230024 | Panthapat | Buatik | Imaging Products Biz. Center |  | 
5022164038 | Wiyada | Aimpia | Imaging Products Biz. Center |  | 
5022190480 | Kanruthai | Khomvongdee | Imaging Products Biz. Center |  | 
5022110197 | Pitchayaporn | Boonmee | Imaging Products Biz. Center |  | 
5022122710 | Wimon | Raweesawat | Imaging Products Biz. Center |  | 
5022220193 | Natcha | Buasing | Corporate Procurement Center |  | 
5022080046 | Naphat | Tinpranee | Production Organization |  | 
5022250071 | Sirinapa | Srijan | Auto Mount Center |  | 
5020000927 | Jaruwan | Promkaew | Auto Mount Center |  | 
5022260031 | Sawarot | Singin | Corporate Planning & Control Center |  | 
5022240222 | Kulanat | Jukkruea | Corporate Planning & Control Center |  | 
5022190467 | Saksit | Katbut | Automotive BIZ. Center |  | 
5022960016 | Chongchin | Chotchuang | Auto Mount Center |  | 
5022160394 | Pongpat | Pawkhuntod | Corporate Procurement Center |  | 
5022210049 | Inthira | Suwanprasert | Lens BIZ. Center |  | 
5022250130 | Chidkamol | Kerdnaiwong | Automotive BIZ. Center |  | 
5022240281 | Wasantorn | Bunmat | Lens BIZ. Center |  | 
5022190727 | Phanuthat | Uthat | Auto Mount Center |  | 
5022240177 | Jirayus | Yuensook | Lens BIZ. Center |  | 
5022190855 | Sasiwimon | Parisuge | Lens BIZ. Center |  | 
5022220023 | Weerapun | Saipun | Quality Center |  | 
5022980068 | Pudsadee | Wannadilok | Quality Center |  | 
5022961551 | Nantana | Thaokratok | Auto Mount Center |  | 
5022060278 | Lumyong | Pimmata | Auto Mount Center |  | 
5022070184 | Nattawath | Jansongsang | Automotive BIZ. Center |  | 
5022220192 | Aunchaleeporn | Kaewnongyang | Automotive BIZ. Center |  | 
5022171862 | Sirinnart | Chomsiri | Quality Center |  | 

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
