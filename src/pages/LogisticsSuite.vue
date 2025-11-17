<template>
  <div class="bg-slate-50 min-h-[calc(100vh-4rem)]">
    <section class="border-b border-slate-200 bg-white">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between gap-4"
      >
        <div>
          <p
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-red-600"
          >
            logistics &amp; fulfillment · agent suite
          </p>
          <h1 class="text-xl sm:text-2xl font-semibold text-slate-900">
            TH8.AI Logistics &amp; Fulfillment Agent Suite (Thai Light Theme Mockup)
          </h1>
          <p class="text-sm text-slate-600 mt-2 max-w-2xl">
            หน้านี้เป็นตัวอย่าง Landing Page Mockup สำหรับใช้คุยกับทีม
            Operations / Logistics / Fulfillment และผู้บริหาร เพื่อให้เห็นภาพว่า
            Agentic AI จะเข้าไปอยู่ตรงไหนในงานจริงของโกดังและศูนย์กระจายสินค้า
          </p>
        </div>
        <RouterLink
          to="/"
          class="hidden sm:inline-flex items-center text-[11px] text-slate-500 hover:text-red-600 transition-colors"
        >
          ← กลับหน้า TH8.AI Main
        </RouterLink>
      </div>
    </section>

    <!-- Overview -->
    <section class="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-[1.1fr,0.9fr] gap-8 items-start"
      >
        <div class="space-y-4">
          <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
            ทำไมต้องมี “Logistics &amp; Fulfillment Agent Suite” ในองค์กรคุณ?
          </h2>
          <p class="text-sm text-slate-600 leading-relaxed">
            ในโกดังหรือศูนย์กระจายสินค้า ทีมงานต้องไล่ดูข้อมูลจากหลายระบบ:
            WMS, Excel, LINE, โทรศัพท์, เอกสารกระดาษ และรายงานหลังบ้าน
            ซึ่งทำให้การตัดสินใจ “รายวัน” ช้ากว่าเหตุการณ์จริงเสมอ
          </p>
          <p class="text-sm text-slate-600 leading-relaxed">
            แนวคิดของ TH8.AI คือการให้ AI ทำหน้าที่เป็น “ชุด Agent” ที่คอยดูข้อมูลแบบ
            Real-time, แจ้งเตือนสิ่งผิดปกติ, แนะนำการจัดทีม และสรุปภาพรวมให้ผู้บริหาร
            ซึ่งออกแบบให้เข้ากับวิธีทำงานของทีมในไทย
          </p>

          <div class="grid sm:grid-cols-3 gap-3 text-[11px]">
            <div class="rounded-2xl border border-slate-200 bg-white px-3 py-3">
              <p class="font-semibold text-slate-900 mb-1">
                ลดงานไล่เช็กทีละระบบ
              </p>
              <p class="text-slate-600">
                Agent ดึงข้อมูลจากหลายระบบมารวมให้ เหลือแค่ดูหน้าจอเดียว
              </p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white px-3 py-3">
              <p class="font-semibold text-slate-900 mb-1">
                เห็นปัญหาก่อนจะสายเกินไป
              </p>
              <p class="text-slate-600">
                เจอ Stock mismatch, คำสั่งซื้อค้าง, หรือ SLA เสี่ยงหลุด แบบ Real-time
              </p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white px-3 py-3">
              <p class="font-semibold text-slate-900 mb-1">
                แปลภาษาหน้างานเป็นภาษาผู้บริหาร
              </p>
              <p class="text-slate-600">
                สรุปเป็น Insight ที่ COO / Owner ใช้คุยกับทีมและตัดสินใจได้เร็วขึ้น
              </p>
            </div>
          </div>
        </div>

        <!-- Simple layout mockup -->
        <div class="rounded-3xl border border-slate-200 bg-white p-4 space-y-4">
          <p class="text-[11px] font-semibold text-slate-500 mb-1">
            Wireframe Overview · Mockup (อ่านเพื่อเล่าให้ลูกค้าฟัง)
          </p>
          <div class="space-y-2 text-[11px] text-slate-700">
            <p>หน้าตัวอย่างนี้สามารถแตก UI จริงเป็น:</p>
            <ul class="list-disc list-inside space-y-1">
              <li>แถวบน: Summary Card ของแต่ละ Agent (4 ตัว)</li>
              <li>แถวล่าง: ตาราง / Timeline / Alert ที่เจาะลึกลงไป</li>
              <li>
                ด้านข้าง: ฟิลเตอร์วัน-เวลา, ช่องเลือกสาขา / ศูนย์กระจายสินค้า,
                ปุ่ม Drill down ไปดูเคส
              </li>
            </ul>
            <p class="mt-2">
              ใน Vue จริง สามารถใช้ Grid + Card Component ให้ดูโมเดิร์น
              และต่อ API เพื่อดึงข้อมูลจริงจาก WMS / ERP / Database ของลูกค้าได้เลย
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Four Agents -->
    <section class="border-b border-slate-200 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p
              class="text-[11px] font-semibold tracking-[0.18em] uppercase text-red-600"
            >
              the 4 core agents
            </p>
            <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
              4 Agent หลักที่เรามักเริ่มใช้ในโกดัง / Fulfillment
            </h2>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4 text-[13px]">
          <div class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2">
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              01 · Daily Ops Agent
            </p>
            <h3 class="font-semibold text-slate-900">
              ผู้ช่วยหัวหน้าโกดังในแต่ละวัน
            </h3>
            <p class="text-slate-700">
              ดึงข้อมูล Order, ปริมาณงาน, คน, พื้นที่ และเวลา Peak มาคำนวณ
              แนะนำการจัดทีมและจัด Slot เวลาให้เหมาะสม
            </p>
            <ul class="space-y-1 text-slate-700">
              <li>• วันนี้งานเยอะกว่าปกติเท่าไหร่</li>
              <li>• ควรเพิ่มคนที่ Zone ไหน ช่วงเวลาไหน</li>
              <li>• มีงานใดที่เสี่ยงหลุด SLA ถ้าไม่เร่งจัดการ</li>
            </ul>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2">
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              02 · Reconciliation Agent
            </p>
            <h3 class="font-semibold text-slate-900">
              ตัวจับผิดระหว่าง Stock, Order, และระบบต่าง ๆ
            </h3>
            <p class="text-slate-700">
              เชื่อมข้อมูลจาก WMS, OMS, Excel, หรือ Google Sheet
              เพื่อหาเคสที่ตัวเลขไม่ตรงกัน และแนะนำลำดับการไล่แก้
            </p>
            <ul class="space-y-1 text-slate-700">
              <li>• Stock ในระบบไม่เท่าของจริง</li>
              <li>• Order จ่ายแล้ว แต่สถานะไม่เดินหน้า</li>
              <li>• Shipment ส่งแล้ว แต่ไม่มีการรับเข้าระบบ</li>
            </ul>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2">
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              03 · Exception &amp; SOP Agent
            </p>
            <h3 class="font-semibold text-slate-900">
              คลังความรู้สำหรับเคสแปลก ๆ หน้างาน
            </h3>
            <p class="text-slate-700">
              รวม SOP, Work Instruction, และเคสเก่า ๆ
              ให้ทีมสามารถถาม Agent แล้วได้คำตอบว่า
              “ถ้าเจอเคสแบบนี้ควรทำอย่างไร”
            </p>
            <ul class="space-y-1 text-slate-700">
              <li>• มีของหาย / ของเกิน / ของสลับบิล</li>
              <li>• ลูกค้าขอเปลี่ยนที่อยู่ระหว่างขนส่ง</li>
              <li>• เจอสินค้าชำรุดในคลังระหว่างจัดของ</li>
            </ul>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2">
            <p class="text-[11px] font-semibold text-red-600 uppercase">
              04 · KPI &amp; Management Agent
            </p>
            <h3 class="font-semibold text-slate-900">
              แปลงตัวเลขหน้างานให้ผู้บริหารเห็นภาพ
            </h3>
            <p class="text-slate-700">
              รวบรวม KPI จากหลายระบบมาแสดงในรูปแบบที่ผู้บริหารเข้าใจง่าย
              พร้อมสรุปเป็นภาษาคนว่าช่วงนี้ควรโฟกัสอะไร
            </p>
            <ul class="space-y-1 text-slate-700">
              <li>• การใช้คน, OT, Productivity, SLA</li>
              <li>• ปัญหาซ้ำ ๆ ที่เกิดบ่อยในรอบเดือน</li>
              <li>• โอกาสในการลดต้นทุน / เพิ่มคุณภาพ</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-slate-900 text-slate-50">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div class="space-y-3">
          <p
            class="text-[11px] font-semibold tracking-[0.20em] uppercase text-red-300"
          >
            next step
          </p>
          <h2 class="text-lg sm:text-xl font-semibold">
            อยากเห็นเวอร์ชันที่ต่อกับข้อมูลจริงของคุณ?
          </h2>
          <p class="text-sm text-slate-200 max-w-xl">
            หน้านี้เป็นเพียง Mockup เพื่อให้เห็นภาพ แต่สามารถพัฒนาเป็นหน้าจอจริง
            ต่อ API และ Database ของคุณได้เต็มรูปแบบด้วย Stack: Vue + Tailwind +
            FastAPI + Agentic AI (LangGraph / LangChain)
          </p>
        </div>
        <div class="space-y-2 text-[12px]">
          <RouterLink
            to="/#contact"
            class="inline-flex items-center justify-center rounded-full bg-red-500 text-white text-[12px] font-medium px-4 py-2 shadow-sm hover:bg-red-400 transition-colors"
          >
            นัดคุย Use Case Logistics ของคุณ
          </RouterLink>
          <p class="text-slate-400">
            * คุณสามารถใช้หน้านี้เป็นตัวอย่างอธิบายทีมภายใน / ผู้บริหาร ก่อนเริ่ม
            PoC จริงได้ทันที
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
