import { Code2 } from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div className="min-h-scree py-20 px-4">
      <div
        className="container mx-auto px-8 py-12 
        leading-loose tracking-wide text-gray-900"
      >
        <Helmet>
          <title>سياسة الخصوصية والشروط | سالو</title>
          <meta
            name="description"
            content="تعرف على سياسة الخصوصية والشروط الخاصة بخدمات سالو، حقوقك كمستخدم وكيفية التعامل مع المشاريع والدفع."
          />
        </Helmet>

        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          سياسة الخصوصية والشروط
        </h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">
            1. جمع المعلومات واستخدامها
          </h2>
          <p>
            عند التواصل معنا قد يتم جمع بعض البيانات مثل (الاسم، رقم الهاتف، البريد الإلكتروني).
            يتم استخدام هذه البيانات فقط لأغراض:
          </p>
          <ul className="list-disc pr-6 mt-3 space-y-1">
            <li>التواصل وتنفيذ الطلبات.</li>
            <li>
              إرسال عروض أو تحديثات خاصة بخدماتنا{" "}
              <strong className="text-blue-700">بناءً على موافقتك الشخصية</strong>.
            </li>
          </ul>
          <blockquote className="border-r-4 border-blue-500 pr-4 mt-4 text-gray-700 italic">
            لن يتم بيع أو مشاركة بياناتك مع أي طرف ثالث بدون إذنك.
          </blockquote>
        </section>

        {/* 2 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">2. طرق الدفع</h2>
          <p>نوفر أكثر من وسيلة دفع لتسهيل المعاملات:</p>
          <ul className="list-disc pr-6 mt-3 space-y-1">
            <li>المحفظة البنكية.</li>
            <li>التحويل البنكي المباشر.</li>
            <li>أي وسيلة أخرى يتم الاتفاق عليها مسبقًا.</li>
          </ul>
          <p>يتم تأكيد الدفع قبل البدء في تنفيذ الخدمة أو تسليم المنتج.</p>
        </section>

        {/* 3 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">3. البيع والشراء</h2>
          <p>
            جميع عمليات البيع والشراء تتم عبر التواصل المباشر (واتساب أو أي وسيلة يتم تحديدها).
            الأسعار والمواصفات يتم توضيحها قبل إتمام أي عملية شراء. الدفع يتم حسب الاتفاق المسبق.
          </p>
        </section>

        {/* 4 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">4. المشاريع والشغل</h2>
          <p>
            أي مشروع يتم الاتفاق عليه يحتوي على تفاصيل العمل، المدة الزمنية، والدفع. يتم تسليم العمل
            في الوقت المحدد حسب الاتفاق. التعديلات الإضافية خارج نطاق الاتفاق الأساسي قد تستلزم
            رسوم إضافية.
          </p>
        </section>

        {/* 5 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">5. التواصل</h2>
          <p>
            يمكن التواصل معي عبر صفحة "تواصل معي" أو مباشرة عبر واتساب. الرد يكون خلال أوقات العمل
            الرسمية قدر المستطاع.
          </p>
        </section>

        {/* 6 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">6. إخلاء المسؤولية</h2>
          <ul className="list-disc pr-6 mt-3 space-y-1">
            <li>الخدمة غير مسؤولة عن أي استخدام غير صحيح للمنتجات بعد التسليم.</li>
            <li>غير مسؤولة عن أي سرقة، احتيال، فقدان بيانات، أو سوء استخدام خارج القنوات الرسمية.</li>
            <li>العميل مسؤول مسؤولية كاملة عن الحفاظ على بياناته ومعلومات الدفع.</li>
          </ul>
        </section>

        {/* 7 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">
            7. حقوق الملكية الفكرية والمشاريع
          </h2>
          <ul className="list-disc pr-6 mt-3 space-y-1">
            <li>جميع المشاريع والأكواد تعتبر ملكية فكرية خاصة بي.</li>
            <li>لا يحق لأي طرف نسخ أو إعادة استخدام بدون إذن كتابي مسبق.</li>
            <li>يظل المحتوى ملكًا لي لحين استلام كامل الدفعات المتفق عليها.</li>
            <li>أي محاولة للسرقة أو إعادة البيع تعتبر مخالفة قانونية.</li>
          </ul>
        </section>

        {/* 8 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">8. حقوق المستخدم</h2>
          <ul className="list-disc pr-6 mt-3 space-y-1">
            <li>يحق للمستخدم معرفة تفاصيل الخدمة أو المنتج قبل الدفع.</li>
            <li>يحق للمستخدم طلب فاتورة أو إيصال بالدفع.</li>
            <li>يحق له طلب تعديلات معقولة ضمن الاتفاق.</li>
            <li>يحق له الحفاظ على خصوصية بياناته.</li>
            <li>يحق له تقديم شكوى وسيتم التعامل معها بجدية.</li>
            <li className="text-red-600">
              يحق له إلغاء الخدمة قبل البدء في التنفيذ ما لم يتم الاتفاق على غير ذلك.
            </li>
          </ul>
        </section>

        <p className="text-sm text-gray-600 mt-10 italic">
           يحق لنا تحديث هذه السياسة والشروط في أي وقت، وسيتم نشر التحديث هنا.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6 text-sm text-gray-800 shadow-sm">
           بمجرد استخدامك لخدماتنا أو التواصل معنا، فأنت توافق تلقائيًا على جميع البنود المذكورة أعلاه.
        </div>

        <div className="mt-12 text-left">
          <Code2 size={26} className="text-black" />
          <span className="text-2xl font-bold text-black select-none">سالو</span>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
