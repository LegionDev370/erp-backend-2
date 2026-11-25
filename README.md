# Node.js + Express + TypeScript Starter Boilerplate

Ushbu loyiha Fullstack (FN1) kursining 7-oy (Node.js) 1-4 darslarida o'tilgan texnologiyalar va amaliyotlar asosida tuzilgan boshlang'ich starter shablondir.

---

## 🛠 Texnologiyalar

- **Node.js**: v24+
- **TypeScript**: v7+ (ES Modules, `"nodenext"`)
- **Express.js**: v5+
- **Dev Runner**: `nodemon` + `tsx` (Tezkor hot-reload, qo'lda build talab etilmaydi)
- **Ma'lumotlar ombori**: `src/data/*.json` fayl tizimi asosida

---

## 📁 Loyiha Strukturasi

```
5-lesson/
├── .gitignore
├── nodemon.json            # Nodemon va tsx sozlamalari
├── package.json            # Kutubxonalar va skriptlar
├── tsconfig.json           # TypeScript konfiguratsiyasi
├── README.md               # Qo'llanma
└── src/
    ├── server.ts           # Asosiy Express server va barcha CRUD yo'nalishlari
    ├── data/
    │   └── users.json      # Boshlang'ich test ma'lumotlar ombori
    ├── types/
    │   └── user.type.ts    # TypeScript interfeyslari
    └── utils/
        └── file-system.ts  # Fayllarni asinxron o'qish/yozish utilitasi
```

---

## 🚀 Ishga tushirish

1. **Kutubxonalarni o'rnatish:**
   ```powershell
   npm install
   # yoki Windows PowerShell xavfsizlik cheklovida:
   npm.cmd install
   ```

2. **Dasturchi rejimida ishga tushirish (Hot-Reload):**
   ```powershell
   npm run dev
   # yoki:
   npm.cmd run dev
   ```

3. **Oddiy ishga tushirish:**
   ```powershell
   npm start
   # yoki:
   npm.cmd start
   ```

Server standart holatda `http://localhost:3000` portida ishga tushadi.

---

## 📡 API Endpointlar

| Metod | Marshrut (URL) | Tavsif |
|---|---|---|
| `GET` | `/` | Server holatini tekshirish (Health check) |
| `GET` | `/users` | Barcha foydalanuvchilar ro'yxati |
| `GET` | `/users/:id` | ID bo'yicha bitta foydalanuvchini olish |
| `POST` | `/users` (yoki `/user`) | Yangi foydalanuvchi qo'shish |
| `PUT` | `/users/:id` | Foydalanuvchi ma'lumotlarini to'liq yangilash |
| `DELETE` | `/users/:id` | Foydalanuvchini o'chirish |

---

## 🧪 Test qilish (PowerShell namunalari)

### 1. Barcha foydalanuvchilarni olish:
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/users" -Method GET
```

### 2. Yangi foydalanuvchi qo'shish:
```powershell
$body = @{
    firstname = "Ali"
    lastname = "Valiyev"
    age = 20
    phone_number = "+998901234567"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/users" -Method POST -Body $body -ContentType "application/json"
```

### 3. Foydalanuvchini yangilash:
```powershell
$updateBody = @{
    firstname = "Alisher"
    age = 21
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/users/1" -Method PUT -Body $updateBody -ContentType "application/json"
```

### 4. Foydalanuvchini o'chirish:
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/users/1" -Method DELETE
```

