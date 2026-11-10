import { strict as assert } from 'node:assert';
import test from 'node:test';
import { prepareEnquiryEmail as buildEnquiryEmail, type Enquiry } from '../src/lib/enquiry.ts';
import { siteCopy } from '../src/data/site-copy.ts';
const prepareEnquiryEmail = (value: Enquiry) => buildEnquiryEmail(value, siteCopy.ar.mail);

const base = {name:'عميل تجريبي',company:'',email:'',phone:'',services:[],message:'فيلم تعريفي قصير للمشروع.'};

test('prepares a correctly encoded Arabic message addressed only to Elite Pro',()=>{
  const url=new URL(prepareEnquiryEmail({...base,company:'فريق أ & ب',email:'person+project@example.com',phone:'+966 50 000 0000',services:['الأفلام والمحتوى المرئي','الهوية والتصميم'],message:'تفاصيل & رموز؟ #مشروع\nسطر ثانٍ.'}));
  assert.equal(url.protocol,'mailto:');
  assert.equal(url.pathname,'info@eliteproksa.com');
  assert.equal(url.searchParams.get('subject'),'طلب مشروع — فريق أ & ب');
  const body=url.searchParams.get('body')!;
  for(const text of ['person+project@example.com','+966 50 000 0000','الأفلام والمحتوى المرئي، الهوية والتصميم','تفاصيل & رموز؟ #مشروع\nسطر ثانٍ.'])assert.ok(body.includes(text));
  assert.deepEqual([...url.searchParams.keys()],['subject','body']);
});

test('omits empty optional details and supports an undecided service',()=>{
  const body=new URL(prepareEnquiryEmail(base)).searchParams.get('body')!;
  assert.ok(body.includes('أحتاج مساعدتكم في تحديد الخدمة'));
  assert.ok(!body.includes('الجهة:'));
  assert.ok(!body.includes('رقم التواصل:'));
});

test('customer data cannot introduce mailto recipients or message headers',()=>{
  const url=new URL(prepareEnquiryEmail({...base,name:'Name\r\nBcc: stranger@example.com?cc=other@example.com',message:'body &cc=stranger@example.com'}));
  assert.equal(url.pathname,'info@eliteproksa.com');
  assert.deepEqual([...url.searchParams.keys()],['subject','body']);
  assert.ok(!url.searchParams.get('subject')!.includes('\n'));
  assert.ok(url.searchParams.get('body')!.includes('&cc=stranger@example.com'));
});

test('prepares a complete English email without Arabic interface labels',()=>{
  const url=new URL(buildEnquiryEmail({name:'Test Client',company:'Studio & Co',email:'client@example.com',phone:'',services:['Film & visual content'],message:'A short film for the company.'},siteCopy.en.mail));
  assert.equal(url.pathname,'info@eliteproksa.com');
  assert.equal(url.searchParams.get('subject'),'Project enquiry — Studio & Co');
  const body=url.searchParams.get('body')!;
  assert.ok(body.includes('Name: Test Client'));
  assert.ok(body.includes('Film & visual content'));
  assert.ok(!/[\u0600-\u06ff]/.test(body));
  assert.deepEqual([...url.searchParams.keys()],['subject','body']);
});
