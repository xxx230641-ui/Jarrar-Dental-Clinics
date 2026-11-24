import heroDentalSuiteImg from '../assets/images/hero_dental_suite_1795530355422.jpg';
import receptionLoungeImg from '../assets/images/clinic_reception_clean_1795530372569.jpg';
import digitalDiagnosticsImg from '../assets/images/clinic_digital_diagnostics_1795530357684.jpg';
import consultationRoomImg from '../assets/images/clinic_consultation_atelier_1795530357583.jpg';
import doctorTareqImg from '../assets/images/doctor_tareq_portrait_clean_1795530372125.jpg';
import doctorAmerImg from '../assets/images/doctor_amer_portrait_1795530356451.jpg';

export const CLINIC_MEDIA = {
  heroSuite: heroDentalSuiteImg,
  receptionLounge: receptionLoungeImg,
  digitalDiagnostics: digitalDiagnosticsImg,
  consultationRoom: consultationRoomImg,
  doctors: {
    tareq: doctorTareqImg,
    amer: doctorAmerImg,
  },
  gallery: {
    suite: heroDentalSuiteImg,
    reception: receptionLoungeImg,
    diagnostics: digitalDiagnosticsImg,
    consultation: consultationRoomImg,
  },
} as const;
