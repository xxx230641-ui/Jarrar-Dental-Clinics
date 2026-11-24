import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppBookingUrl,
  getClinicOpenStatus,
  normalizeDigits,
  submitAppointmentRequest,
  validateBookingForm,
} from './booking';

test('normalizeDigits converts Arabic-Indic digits to ASCII digits', () => {
  assert.equal(normalizeDigits('+٩٦٢ ٧ ٨٧٧١ ٦٦٦٦'), '+962 7 8771 6666');
});

test('validateBookingForm rejects empty fields and past dates', () => {
  const errors = validateBookingForm(
    {
      name: 'A',
      phone: '123',
      service: '',
      preferredDate: '2026-01-01',
      message: '',
    },
    'ar',
    '2026-11-24'
  );

  assert.ok(errors.name);
  assert.ok(errors.phone);
  assert.ok(errors.service);
  assert.ok(errors.preferredDate);
});

test('validateBookingForm accepts valid Arabic-Indic phone and future date', () => {
  const errors = validateBookingForm(
    {
      name: 'ليلى الخطيب',
      phone: '٠٧٨٧٧١٦٦٦٦',
      service: 'dental-implants',
      preferredDate: '2026-11-30',
      message: 'استشارة أولية',
    },
    'ar',
    '2026-11-24'
  );

  assert.deepEqual(errors, {});
});

test('buildWhatsAppBookingUrl includes clinic number and encoded patient details', () => {
  const url = buildWhatsAppBookingUrl(
    {
      name: 'Omar Zaid',
      phone: '+962791234567',
      service: 'teeth-whitening',
      preferredDate: '2026-12-01',
      message: 'Morning slot preferred',
    },
    'Teeth Whitening',
    'en'
  );

  assert.ok(url.startsWith('https://wa.me/962787716666?text='));
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.match(decoded, /Omar Zaid/);
  assert.match(decoded, /Teeth Whitening/);
  assert.match(decoded, /2026-12-01/);
});

test('submitAppointmentRequest returns honest backend_unconfigured when no endpoint is set', async () => {
  const result = await submitAppointmentRequest(
    {
      name: 'Tariq',
      phone: '+962787716666',
      service: 'smile-makeover',
      preferredDate: '2026-12-02',
      message: '',
    },
    'Smile Makeover',
    'en',
    ''
  );

  assert.equal(result.status, 'backend_unconfigured');
  assert.ok(result.whatsappUrl.includes('wa.me/962787716666'));
});

test('getClinicOpenStatus identifies Friday as closed and Saturday 11:00 AM Amman time as open', () => {
  // Friday in Amman (UTC+3): 2026-11-27 10:00 UTC -> 13:00 Amman (Friday)
  const fridayStatus = getClinicOpenStatus(new Date('2026-11-27T10:00:00Z'));
  assert.equal(fridayStatus.dayKey, 'friday');
  assert.equal(fridayStatus.isOpen, false);

  // Saturday in Amman (UTC+3): 2026-11-28 08:00 UTC -> 11:00 Amman (Saturday, open 9-18)
  const saturdayMorning = getClinicOpenStatus(new Date('2026-11-28T08:00:00Z'));
  assert.equal(saturdayMorning.dayKey, 'saturday');
  assert.equal(saturdayMorning.isOpen, true);

  // Thursday afternoon in Amman (UTC+3): 2026-11-26 13:00 UTC -> 16:00 Amman (closes 15:00)
  const thursdayLate = getClinicOpenStatus(new Date('2026-11-26T13:00:00Z'));
  assert.equal(thursdayLate.dayKey, 'thursday');
  assert.equal(thursdayLate.isOpen, false);
});
