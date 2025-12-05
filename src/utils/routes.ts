import { createBrowserRouter, Navigate } from "react-router";
import Login from "../imports/Login";
import SignUp from "../components/SignUp";
import Dashboard from "../components/Dashboard";
import HomeScreen from "../imports/HomeScreen";
import OtherServicesScreen from "../imports/OtherServicesScreen";
import DoctorsScreen from "../imports/DoctorsScreen";
import DoctorDetailScreen from "../components/DoctorDetailScreen";
import { DoctorBookingScreen } from "../components/DoctorBookingScreen";
import { DoctorAppointmentPaymentScreen } from "../components/DoctorAppointmentPaymentScreen";
import { DoctorAppointmentSuccessScreen } from "../components/DoctorAppointmentSuccessScreen";
import { UnifiedAppointmentPaymentScreen } from "../components/UnifiedAppointmentPaymentScreen";
import CareTakersScreen from "../components/CareTakersScreen";
import CareTakerDetailScreen from "../components/CareTakerDetailScreen";
import { CareTakerBookingScreen } from "../components/CareTakerBookingScreen";
import PhysiotherapistsScreen from "../components/PhysiotherapistsScreen";
import PhysiotherapistDetailScreen from "../components/PhysiotherapistDetailScreen";
import { PhysiotherapistBookingScreen } from "../components/PhysiotherapistBookingScreen";
import MentalWellBeingScreen from "../components/MentalWellBeingScreen";
import MentalWellBeingArticle from "../components/MentalWellBeingArticle";
import MentalWellBeingDoctorsScreen from "../components/MentalWellBeingDoctorsScreen";
import MentalHealthDoctorDetailScreen from "../components/MentalHealthDoctorDetailScreen";
import { MentalHealthBookingScreen } from "../components/MentalHealthBookingScreen";
import BrowseMedicineScreen from "../components/BrowseMedicineScreen";
import PainReliefScreen from "../components/PainReliefScreen";
import CardiovascularScreen from "../components/CardiovascularScreen";
import VitaminsScreen from "../components/VitaminsScreen";
import DiabetesCareScreen from "../components/DiabetesCareScreen";
import ViewCartScreen from "../components/ViewCartScreen";
import OrderConfirmationScreen from "../components/OrderConfirmationScreen";
import PaymentProcessingScreen from "../components/PaymentProcessingScreen";
import OrderSuccessScreen from "../components/OrderSuccessScreen";
import MedicineUnavailableScreen from "../components/MedicineUnavailableScreen";
import MedicineRequestFormScreen from "../components/MedicineRequestFormScreen";
import UploadPrescriptionScreen from "../components/UploadPrescriptionScreen";
import PrescriptionPaymentScreen from "../components/PrescriptionPaymentScreen";
import PrescriptionSuccessScreen from "../components/PrescriptionSuccessScreen";
import FakeGoogleMapsScreen from "../components/FakeGoogleMapsScreen";
import GoogleSignIn from "../components/GoogleSignIn";
import FacebookSignIn from "../components/FacebookSignIn";
import TwitterSignIn from "../components/TwitterSignIn";
import GoogleForgotPassword from "../components/GoogleForgotPassword";
import FacebookForgotPassword from "../components/FacebookForgotPassword";
import TwitterForgotPassword from "../components/TwitterForgotPassword";
import AmbulanceBookingScreen from "../components/AmbulanceBookingScreen";
import AmbulanceScheduleScreen from "../components/AmbulanceScheduleScreen";
import AmbulanceConfirmationScreen from "../components/AmbulanceConfirmationScreen";
import AmbulanceFullMapScreen from "../components/AmbulanceFullMapScreen";
import HospitalDirectionsScreen from "../components/HospitalDirectionsScreen";
import EmergencySOSScreen from "../components/EmergencySOSScreen";
import PackagesScreen from "../components/PackagesScreen";
import PackageDetailScreen from "../components/PackageDetailScreen";
import SchedulePackageAppointmentScreen from "../components/SchedulePackageAppointmentScreen";
import PackagePaymentScreen from "../components/PackagePaymentScreen";
import PackagePaymentProcessingScreen from "../components/PackagePaymentProcessingScreen";
import PackageAppointmentConfirmedScreen from "../components/PackageAppointmentConfirmedScreen";
import ProfileScreen from "../components/ProfileScreen";
import EditProfileScreen from "../components/EditProfileScreen";
import PatientProfileScreen from "../components/PatientProfileScreen";
import EditPatientProfileScreen from "../components/EditPatientProfileScreen";
import PatientHealthDetailsScreen from "../components/PatientHealthDetailsScreen";
import AddPatientScreen from "../components/AddPatientScreen";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";
import WelcomeScreen from "../components/WelcomeScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/welcome",
    Component: WelcomeScreen,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/reset-password",
    Component: ResetPassword,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/home",
    Component: HomeScreen,
  },
  {
    path: "/services",
    Component: OtherServicesScreen,
  },
  {
    path: "/doctors",
    Component: DoctorsScreen,
  },
  {
    path: "/doctor/:doctorName",
    Component: DoctorDetailScreen,
  },
  {
    path: "/doctors/:id/book",
    Component: DoctorBookingScreen,
  },
  {
    path: "/doctor-appointment-payment",
    Component: DoctorAppointmentPaymentScreen,
  },
  {
    path: "/doctor-appointment-success",
    Component: DoctorAppointmentSuccessScreen,
  },
  {
    path: "/caretakers",
    Component: CareTakersScreen,
  },
  {
    path: "/caretaker-detail",
    Component: CareTakerDetailScreen,
  },
  {
    path: "/caretakers/:id/book",
    Component: CareTakerBookingScreen,
  },
  {
    path: "/caretaker-appointment-payment",
    Component: UnifiedAppointmentPaymentScreen,
  },
  {
    path: "/physiotherapists",
    Component: PhysiotherapistsScreen,
  },
  {
    path: "/physiotherapist/:physiotherapistName",
    Component: PhysiotherapistDetailScreen,
  },
  {
    path: "/physiotherapists/:physiotherapistName/book",
    Component: PhysiotherapistBookingScreen,
  },
  {
    path: "/physiotherapist-appointment-payment",
    Component: UnifiedAppointmentPaymentScreen,
  },
  {
    path: "/mental-wellbeing",
    Component: MentalWellBeingScreen,
  },
  {
    path: "/mental-wellbeing/article",
    Component: MentalWellBeingArticle,
  },
  {
    path: "/mental-wellbeing-doctors",
    Component: MentalWellBeingDoctorsScreen,
  },
  {
    path: "/mental-health-doctor/:doctorName",
    Component: MentalHealthDoctorDetailScreen,
  },
  {
    path: "/mental-health-doctors/:doctorName/book",
    Component: MentalHealthBookingScreen,
  },
  {
    path: "/mental-health-appointment-payment",
    Component: UnifiedAppointmentPaymentScreen,
  },
  {
    path: "/medicine",
    Component: BrowseMedicineScreen,
  },
  {
    path: "/medicine/pain-relief",
    Component: PainReliefScreen,
  },
  {
    path: "/medicine/cardiovascular",
    Component: CardiovascularScreen,
  },
  {
    path: "/medicine/vitamins",
    Component: VitaminsScreen,
  },
  {
    path: "/medicine/diabetes",
    Component: DiabetesCareScreen,
  },
  {
    path: "/cart",
    Component: ViewCartScreen,
  },
  {
    path: "/order-confirmation",
    Component: OrderConfirmationScreen,
  },
  {
    path: "/payment-processing",
    Component: PaymentProcessingScreen,
  },
  {
    path: "/order-success",
    Component: OrderSuccessScreen,
  },
  {
    path: "/medicine-unavailable",
    Component: MedicineUnavailableScreen,
  },
  {
    path: "/medicine-request-form",
    Component: MedicineRequestFormScreen,
  },
  {
    path: "/upload-prescription",
    Component: UploadPrescriptionScreen,
  },
  {
    path: "/prescription-payment",
    Component: PrescriptionPaymentScreen,
  },
  {
    path: "/prescription-success",
    Component: PrescriptionSuccessScreen,
  },
  {
    path: "/fake-google-maps",
    Component: FakeGoogleMapsScreen,
  },
  {
    path: "/signin/google",
    Component: GoogleSignIn,
  },
  {
    path: "/signin/facebook",
    Component: FacebookSignIn,
  },
  {
    path: "/signin/twitter",
    Component: TwitterSignIn,
  },
  {
    path: "/forgot-password/google",
    Component: GoogleForgotPassword,
  },
  {
    path: "/forgot-password/facebook",
    Component: FacebookForgotPassword,
  },
  {
    path: "/forgot-password/twitter",
    Component: TwitterForgotPassword,
  },
  {
    path: "/ambulance-booking",
    Component: AmbulanceBookingScreen,
  },
  {
    path: "/ambulance-schedule",
    Component: AmbulanceScheduleScreen,
  },
  {
    path: "/ambulance-confirmation",
    Component: AmbulanceConfirmationScreen,
  },
  {
    path: "/ambulance-tracking",
    Component: AmbulanceFullMapScreen,
  },
  {
    path: "/hospital-directions",
    Component: HospitalDirectionsScreen,
  },
  {
    path: "/emergency-sos",
    Component: EmergencySOSScreen,
  },
  {
    path: "/packages",
    Component: PackagesScreen,
  },
  {
    path: "/packages/:id",
    Component: PackageDetailScreen,
  },
  {
    path: "/package-schedule-appointment",
    Component: SchedulePackageAppointmentScreen,
  },
  {
    path: "/package-payment",
    Component: PackagePaymentScreen,
  },
  {
    path: "/package-payment-processing",
    Component: PackagePaymentProcessingScreen,
  },
  {
    path: "/package-appointment-confirmed",
    Component: PackageAppointmentConfirmedScreen,
  },
  {
    path: "/profile",
    Component: ProfileScreen,
  },
  {
    path: "/edit-profile",
    Component: EditProfileScreen,
  },
  {
    path: "/patient-profile",
    Component: PatientProfileScreen,
  },
  {
    path: "/edit-patient-profile",
    Component: EditPatientProfileScreen,
  },
  {
    path: "/patient-health-details",
    Component: PatientHealthDetailsScreen,
  },
  {
    path: "/add-patient",
    Component: AddPatientScreen,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
