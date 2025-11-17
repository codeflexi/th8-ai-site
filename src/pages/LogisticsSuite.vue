<template>
  <div class="bg-slate-50 min-h-[calc(100vh-4rem)]">
    <!-- HERO -->
    <section class="border-b border-slate-200 bg-gradient-to-b from-rose-50 via-white to-slate-50" id="top">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 flex flex-col gap-6"
      >
        <div class="flex flex-col gap-3">
          <p
            class="text-[11px] font-semibold tracking-[0.18em] uppercase text-red-600"
          >
            logistics &amp; fulfillment · agent suite
          </p>
          <h1 class="text-xl sm:text-2xl lg:text-[26px] font-semibold text-slate-900 leading-snug">
            Logistics &amp; Fulfillment Agent Suite (Thai Light Theme Mockup)
          </h1>
          <p class="text-sm sm:text-[15px] text-slate-600 max-w-3xl leading-relaxed">
            หน้านี้ออกแบบมาเพื่อใช้ “เล่าให้ผู้บริหารและทีมปฏิบัติการเข้าใจ”
            ว่าเรามองภาพ AI Agent ยังไงในงานโกดัง / Fulfillment โดยเน้นเป็นภาพรวม
            ดูง่าย ไม่ต้องอ่านตัวหนังสือเยอะ และสามารถต่อยอดไปเป็น UI จริงได้ทันที
          </p>

          <div class="flex flex-wrap items-center gap-2 text-[11px]">
            <span class="inline-flex items-center rounded-full bg-red-50 text-red-700 px-3 py-1 border border-red-100">
              Live Mockup · ใช้คุยในห้องประชุม
            </span>
            <span class="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 border border-emerald-100">
              Focus: Operation + Management
            </span>
          </div>
        </div>

        <!-- Overview + Mockup -->
        <div
          class="grid lg:grid-cols-[1.1fr,1.1fr] gap-6 items-start"
          id="mockup"
        >
          <!-- Text overview -->
          <div class="space-y-4">
            <h2 class="text-[15px] sm:text-base font-semibold text-slate-900">
              ภาพรวมหน้าจอ: “1 Dashboard ที่ทุกคนเข้าใจร่วมกันได้”
            </h2>
            <p class="text-sm text-slate-600 leading-relaxed">
              แนวคิดคือให้หัวหน้าโกดัง, ทีมปฏิบัติการ และผู้บริหาร
              เห็นหน้าจอเดียวกัน แต่คนละมุมมอง:
            </p>
            <ul class="text-sm text-slate-700 space-y-1">
              <li>• หัวหน้าโกดัง → ดูงานวันนี้เยอะแค่ไหน / ต้องเสริมคนตรงไหน</li>
              <li>• ทีมปฏิบัติการ → รู้ว่าตอนนี้มีเคสอะไรที่ต้องรีบจัดการก่อน</li>
              <li>• ผู้บริหาร → เห็น KPI หลัก และปัญหาซ้ำ ๆ ที่ควรโฟกัส</li>
            </ul>
            <p class="text-sm text-slate-600 leading-relaxed">
              สิ่งที่อยู่ในภาพด้านขวา คือ “ตัวอย่างภาพรวม”
              ที่สามารถแปลงเป็น UI จริงด้วย Vue + Tailwind + API ของลูกค้าได้เลย
            </p>
          </div>

          <!-- Visual mock dashboard -->
          <div
            class="rounded-3xl border border-rose-100 bg-white shadow-sm p-4 sm:p-5 space-y-3"
          >
            <!-- Top bar -->
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center gap-2">
                <div class="h-2 w-2 rounded-full bg-red-400"></div>
                <div class="h-2 w-2 rounded-full bg-amber-300"></div>
                <div class="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span class="ml-2 text-[11px] font-semibold text-slate-500">
                  TH8.AI · Logistics Command Panel
                </span>
              </div>
              <div class="flex items-center gap-2 text-[11px] text-slate-500">
                <span class="hidden sm:inline">DC: Central · วันนี้</span>
                <span class="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5">
                  09:45
                </span>
              </div>
            </div>

            <!-- Agent summary chips -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
              <div class="rounded-2xl bg-red-50 border border-red-100 px-2.5 py-2">
                <p class="font-semibold text-[11px] text-red-700 mb-0.5">
                  Daily Ops
                </p>
                <p class="text-slate-700">
                  Volume วันนี้ +18%<br />
                  แนะนำเพิ่มคน Zone B
                </p>
              </div>
              <div class="rounded-2xl bg-emerald-50 border border-emerald-100 px-2.5 py-2">
                <p class="font-semibold text-[11px] text-emerald-700 mb-0.5">
                  Reconciliation
                </p>
                <p class="text-slate-700">
                  3 เคส stock ไม่ตรง<br />
                  1 เคส high risk
                </p>
              </div>
              <div class="rounded-2xl bg-sky-50 border border-sky-100 px-2.5 py-2">
                <p class="font-semibold text-[11px] text-sky-700 mb-0.5">
                  Exception &amp; SOP
                </p>
                <p class="text-slate-700">
                  2 เคสต้องใช้ SOP พิเศษ<br />
                  มีตัวอย่างเคสเก่าให้ดู
                </p>
              </div>
              <div class="rounded-2xl bg-slate-50 border border-slate-200 px-2.5 py-2">
                <p class="font-semibold text-[11px] text-slate-800 mb-0.5">
                  KPI &amp; Mgmt
                </p>
                <p class="text-slate-700">
                  SLA วันนี้ 96%<br />
                  OT ลดลง 12%
                </p>
              </div>
            </div>

            <!-- Lower layout regions -->
            <div class="grid md:grid-cols-[1.4fr,1.1fr] gap-3 pt-2">
              <!-- Left: timeline / queue -->
              <div class="rounded-2xl bg-slate-50 border border-slate-200 p-3 space-y-2">
                <div class="flex items-center justify-between mb-1">
                  <p class="text-[11px] font-semibold text-slate-700">
                    Workload Timeline (Today)
                  </p>
                  <span class="text-[10px] text-slate-400">
                    Pick · Pack · Ship
                  </span>
                </div>
                <div class="h-20 rounded-xl bg-gradient-to-r from-emerald-100 via-amber-100 to-rose-100 flex items-center justify-center text-[11px] text-slate-600">
                  ตัวอย่างกราฟโหลดงานทั้งวัน (ต่อจริงใช้ chart ได้)
                </div>
                <ul class="text-[11px] text-slate-600 space-y-1 pt-1">
                  <li>• Peak: 11:00–13:00, 19:00–21:00</li>
                  <li>• แนะนำย้ายคนจาก Zone A → B ช่วงเที่ยง</li>
                </ul>
              </div>

              <!-- Right: alert list -->
              <div class="rounded-2xl bg-slate-50 border border-slate-200 p-3 space-y-2">
                <div class="flex items-center justify-between mb-1">
                  <p class="text-[11px] font-semibold text-slate-700">
                    Alerts &amp; Exceptions
                  </p>
                  <span class="text-[10px] text-red-500 font-medium">
                    4 เคสที่ควรจัดการวันนี้
                  </span>
                </div>
                <div class="space-y-1.5 text-[11px]">
                  <div class="flex items-start gap-2">
                    <span class="mt-[3px] h-2 w-2 rounded-full bg-red-500"></span>
                    <p class="text-slate-700">
                      Order #A10239 ส่งช้าเกิน 24 ชม. · แนะนำติดต่อฝ่ายบริการลูกค้า
                    </p>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="mt-[3px] h-2 w-2 rounded-full bg-amber-400"></span>
                    <p class="text-slate-700">
                      สินค้า SKU-XY21 stock ระบบมากกว่าของจริง 12 ชิ้น · รอ confirm
                    </p>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="mt-[3px] h-2 w-2 rounded-full bg-emerald-500"></span>
                    <p class="text-slate-700">
                      เคส “ที่อยู่เปลี่ยนระหว่างขนส่ง” มี SOP แนะนำให้กดดู
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-[10px] text-slate-500 pt-1">
              * ทั้งหมดนี้เป็น Mockup เพื่อใช้คุยไอเดีย สามารถปรับให้ตรงกับระบบจริง
              และ Data ของลูกค้าได้
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4 CORE AGENTS -->
    <section class="border-b border-slate-200 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 space-y-6">
        <div class="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p
              class="text-[11px] font-semibold tracking-[0.18em] uppercase text-red-600"
            >
              the 4 core agents
            </p>
            <h2 class="text-lg sm:text-xl font-semibold text-slate-900">
              แบ่งภาพออกเป็น 4 Agent ง่าย ๆ ให้คนหน้างานเข้าใจ
            </h2>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4 text-[13px]">
          <!-- Daily Ops -->
          <div class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2">
            <div class="flex items-center gap-2">
              <div class="h-8 w-8 rounded-xl bg-red-100 flex items-center justify-center text-[16px]">
                📦
              </div>
              <div>
                <p class="text-[11px] font-semibold text-red-600 uppercase">
                  01 · Daily Ops Agent
                </p>
                <h3 class="font-semibold text-slate-900">
                  ผู้ช่วยหัวหน้าโกดังในแต่ละวัน
                </h3>
              </div>
            </div>
            <p class="text-slate-700">
              ดูปริมาณงานวันนี้ เทียบกับกำลังคน + พื้นที่ แล้วแนะนำการจัดทีมให้เหมาะสม
            </p>
            <ul class="space-y-1 text-slate-700">
              <li>• งานวันนี้มากกว่าปกติเท่าไหร่?</li>
              <li>• ควรเพิ่ม/ลดคนตรง Zone ไหน เวลาไหน?</li>
              <li>• งานไหนเสี่ยงหลุด SLA ถ้าไม่เร่ง?</li>
            </ul>
          </div>

          <!-- Reconciliation -->
          <div class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2">
            <div class="flex items-center gap-2">
              <div class="h-8 w-8 rounded-xl bg-emerald-100 flex items-center justify-center text-[16px]">
                🔍
              </div>
              <div>
                <p class="text-[11px] font-semibold text-red-600 uppercase">
                  02 · Reconciliation Agent
                </p>
                <h3 class="font-semibold text-slate-900">
                  ตัวจับผิดระหว่าง Stock, Order, Shipment
                </h3>
              </div>
            </div>
            <p class="text-slate-700">
              ดึงข้อมูลจากหลายระบบมาหาความไม่ตรงกัน และจัดลำดับความสำคัญให้ทีมไล่แก้
            </p>
            <ul class="space-y-1 text-slate-700">
              <li>• stock ระบบ ≠ stock จริง</li>
              <li>• order จ่ายแล้ว แต่สถานะไม่เดินหน้า</li>
              <li>• shipment ส่งแล้ว แต่ระบบไม่รับเข้า</li>
            </ul>
          </div>

          <!-- Exception & SOP -->
          <div class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2">
            <div class="flex items-center gap-2">
              <div class="h-8 w-8 rounded-xl bg-sky-100 flex items-center justify-center text-[16px]">
                📘
              </div>
              <div>
                <p class="text-[11px] font-semibold text-red-600 uppercase">
                  03 · Exception &amp; SOP Agent
                </p>
                <h3 class="font-semibold text-slate-900">
                  รวม SOP &amp; เคสเก่าให้ถามได้ในที่เดียว
                </h3>
              </div>
            </div>
            <p class="text-slate-700">
              แทนที่ทุกคนจะต้องวิ่งไปถาม “คนที่เก่งที่สุด” ทุกครั้ง
              ก็ให้ถาม Agent แล้วได้ Flow การจัดการเคสแปลก ๆ เลย
            </p>
            <ul class="space-y-1 text-slate-700">
              <li>• ของหาย / สลับบิล / เกิน-ขาด</li>
              <li>• ที่อยู่เปลี่ยนระหว่างขนส่ง</li>
              <li>• สินค้าชำรุดระหว่างจัดของ</li>
            </ul>
          </div>

          <!-- KPI & Mgmt -->
          <div class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 space-y-2">
            <div class="flex items-center gap-2">
              <div class="h-8 w-8 rounded-xl bg-slate-200 flex items-center justify-center text-[16px]">
                📊
              </div>
              <div>
                <p class="text-[11px] font-semibold text-red-600 uppercase">
                  04 · KPI &amp; Management Agent
                </p>
                <h3 class="font-semibold text-slate-900">
                  แปลภาษาหน้างานให้ผู้บริหารเข้าใจใน 1 หน้า
                </h3>
              </div>
            </div>
            <p class="text-slate-700">
              รวบ KPI หลัก + insight จาก Agent อื่น ๆ ให้ผู้บริหารเห็นภาพ และคุยกับทีมได้ตรงประเด็น
            </p>
            <ul class="space-y-1 text-slate-700">
              <li>• Productivity, OT, SLA, Cost</li>
              <li>• ปัญหาซ้ำ ๆ ที่เกิดบ่อยในเดือนนี้</li>
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
            อยากให้หน้าจอนี้ต่อกับข้อมูลจริงของคุณ?
          </h2>
          <p class="text-sm text-slate-200 max-w-xl">
            Mockup นี้สามารถต่อยอดไปเป็น UI จริงได้ทันทีด้วย stack ของคุณ:
            Vue + Tailwind + FastAPI + Agentic AI (LangGraph / LangChain)
            และเชื่อมกับ WMS / ERP / Database ที่ใช้อยู่แล้ว
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
            * ใช้หน้านี้เป็นตัวอย่างคุยกับทีมภายใน / ผู้บริหารก่อนได้เลยว่าถ้า
            “ให้ AI เข้าไปอยู่ในงานประจำวัน” จะหน้าตาประมาณไหน
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
