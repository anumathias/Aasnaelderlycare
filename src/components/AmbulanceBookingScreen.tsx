import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, MapPin, Plus, Phone, Navigation, Calendar, Home, Star, Check, AlertCircle } from "lucide-react";
import FakeMapComponent from "./FakeMapComponent";
import HospitalCallModal from "./HospitalCallModal";
import BottomNavBar from "./BottomNavBar";

type Location = {
  id: string;
  type: string;
  address: string;
};

type Hospital = {
  id: string;
  name: string;
  rating: number;
  location: string;
  distance: string;
  availability: string;
  status: string;
  phone: string;
};

type Step = 'initial' | 'current-location' | 'add-location' | 'ready-to-confirm';

export default function AmbulanceBookingScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('initial');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [showAddLocationForm, setShowAddLocationForm] = useState(false);
  const [newLocationType, setNewLocationType] = useState("");
  const [newLocationAddress, setNewLocationAddress] = useState("");
  const [showCallModal, setShowCallModal] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

  const [savedLocations, setSavedLocations] = useState<Location[]>([
    {
      id: "home",
      type: "Home",
      address: "Flat no : 400 5th floor, Neem Hills Appartments, Hyderabad Telangana"
    },
    {
      id: "secondary",
      type: "Secondary Address",
      address: "Flat no : 100 3rd floor, Nescon Oasis, Hyderabad Telangana"
    }
  ]);

  const nearbyHospitals: Hospital[] = [
    {
      id: "1",
      name: "Rush Hospital",
      rating: 4.5,
      location: "Suchitra circle",
      distance: "1.1 km",
      availability: "24/7",
      status: "Open Now",
      phone: "+91 98765 43210"
    },
    {
      id: "2",
      name: "Apollo Hospitals",
      rating: 4.8,
      location: "Jubilee Hills",
      distance: "2.3 km",
      availability: "24/7",
      status: "Open Now",
      phone: "+91 98765 43211"
    },
    {
      id: "3",
      name: "Care Hospital",
      rating: 4.6,
      location: "Banjara Hills",
      distance: "3.5 km",
      availability: "24/7",
      status: "Open Now",
      phone: "+91 98765 43212"
    },
    {
      id: "4",
      name: "Yashoda Hospital",
      rating: 4.7,
      location: "Somajiguda",
      distance: "4.2 km",
      availability: "24/7",
      status: "Open Now",
      phone: "+91 98765 43213"
    },
    {
      id: "5",
      name: "Continental Hospitals",
      rating: 4.4,
      location: "Gachibowli",
      distance: "5.8 km",
      availability: "24/7",
      status: "Open Now",
      phone: "+91 98765 43214"
    }
  ];

  const nearbyHospital = nearbyHospitals[0];

  const handleCallHospital = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    setShowCallModal(true);
  };

  const handleDirections = (hospital: Hospital) => {
    const params = new URLSearchParams({
      name: hospital.name,
      location: hospital.location,
      distance: hospital.distance
    });
    navigate(`/hospital-directions?${params.toString()}`);
  };

  const handleUseCurrentLocation = () => {
    const currentLocation: Location = {
      id: "current",
      type: "Current Location",
      address: "Detected: Flat no : 400 5th floor, Neem Hills Appartments, Hyderabad Telangana"
    };
    setSelectedLocation(currentLocation);
    setStep('current-location');
  };

  const handleConfirmLocation = () => {
    setStep('ready-to-confirm');
  };

  const handleAddNewLocation = () => {
    setStep('add-location');
  };

  const handleSelectSavedLocation = (location: Location) => {
    setSelectedLocation(location);
    setStep('ready-to-confirm');
  };

  const handleSaveNewLocation = () => {
    if (newLocationType && newLocationAddress) {
      const newLocation: Location = {
        id: `location-${Date.now()}`,
        type: newLocationType,
        address: newLocationAddress
      };
      setSavedLocations([...savedLocations, newLocation]);
      setSelectedLocation(newLocation);
      setNewLocationType("");
      setNewLocationAddress("");
      setShowAddLocationForm(false);
      setStep('ready-to-confirm');
    }
  };

  const handleConfirmBooking = () => {
    navigate("/ambulance-schedule");
  };

  // Initial Screen
  if (step === 'initial') {
    return (
      <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-b from-[#E3F2FD] to-white px-[16px] pt-[20px] pb-[24px]">
          <div className="flex items-center justify-center mb-[8px] relative">
            <button 
              className="absolute left-0 flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
              onClick={() => navigate("/services")}
            >
              <ArrowLeft className="size-[20px] text-[#1F75BE]" />
            </button>
            <h1 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#1F75BE]">
              Book Ambulance
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-[20px] py-[24px]">
          {/* Emergency SOS Button */}
          <button
            onClick={() => navigate("/emergency-sos")}
            className="w-full bg-gradient-to-r from-[#FF5252] to-[#E53935] rounded-[16px] p-[20px] mb-[24px] shadow-xl hover:shadow-2xl transition-all active:scale-98 relative overflow-hidden group"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            
            <div className="relative flex items-center justify-center gap-[16px]">
              <div className="bg-white rounded-full p-[12px] animate-pulse">
                <AlertCircle className="size-[32px] text-[#FF5252]" />
              </div>
              <div className="text-left">
                <p className="font-['Poppins:Bold',sans-serif] text-[24px] text-white leading-none mb-[4px]">
                  EMERGENCY SOS
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-white/90">
                  Instant ambulance allocation
                </p>
              </div>
            </div>

            {/* Pulse Ring Animation */}
            <div className="absolute inset-0 rounded-[16px] ring-4 ring-white/30 animate-ping"></div>
          </button>

          {/* Info Card */}
          <div className="bg-[#FFF9E6] border-l-4 border-[#FFB60B] rounded-[12px] p-[16px] mb-[24px]">
            <div className="flex items-start gap-[12px]">
              <Calendar className="size-[24px] text-[#FFB60B] mt-[2px] flex-shrink-0" />
              <div>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[4px]">
                  Quick Response
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                  Next available ambulance in <span className="font-['Roboto:SemiBold',sans-serif] text-[#1F75BE]">30 minutes</span>
                </p>
              </div>
            </div>
          </div>

          {/* Location Selection */}
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[16px]">
            Select Pickup Location
          </h2>

          <div className="space-y-[12px] mb-[32px]">
            {/* Use Current Location */}
            <button 
              onClick={handleUseCurrentLocation}
              className="w-full bg-white border-2 border-[#1F75BE] rounded-[12px] p-[16px] flex items-center gap-[16px] hover:bg-[#F0F8FF] transition-all active:scale-98"
            >
              <div className="bg-[#E3F2FD] rounded-full p-[12px]">
                <MapPin className="size-[24px] text-[#1F75BE]" />
              </div>
              <span className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#1F75BE]">
                Use Current Location
              </span>
            </button>

            {/* Add New Location */}
            <button 
              onClick={handleAddNewLocation}
              className="w-full bg-white border-2 border-[#E0E0E0] rounded-[12px] p-[16px] flex items-center gap-[16px] hover:bg-gray-50 transition-all active:scale-98"
            >
              <div className="bg-[#F5F5F5] rounded-full p-[12px]">
                <Plus className="size-[24px] text-[#606060]" />
              </div>
              <span className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#121314]">
                Add New Location
              </span>
            </button>
          </div>

          {/* Nearby Hospitals Info */}
          <div className="bg-[#F8F8F8] rounded-[16px] p-[20px]">
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[16px]">
              Nearby Hospitals
            </h3>
            
            <div className="space-y-[12px]">
              {nearbyHospitals.map((hospital) => (
                <div key={hospital.id} className="bg-white rounded-[12px] p-[16px] border border-[#E0E0E0]">
                  <div className="flex items-center justify-between mb-[12px]">
                    <h4 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314]">
                      {hospital.name}
                    </h4>
                    <span className="bg-[#3DAB51] text-white px-[12px] py-[4px] rounded-[16px] font-['Roboto:Medium',sans-serif] text-[12px]">
                      {hospital.status}
                    </span>
                  </div>

                  <div className="space-y-[8px] mb-[16px]">
                    <div className="flex items-center gap-[8px]">
                      <Star className="size-[16px] text-[#FFB60B] fill-[#FFB60B]" />
                      <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                        {hospital.rating} Rating
                      </span>
                    </div>

                    <div className="flex items-center gap-[8px]">
                      <MapPin className="size-[16px] text-[#606060]" />
                      <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                        {hospital.location} • {hospital.distance}
                      </span>
                    </div>

                    <div className="flex items-center gap-[8px]">
                      <Calendar className="size-[16px] text-[#606060]" />
                      <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                        Available {hospital.availability}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-[12px]">
                    <button 
                      onClick={() => handleCallHospital(hospital)}
                      className="bg-[#E8F5E9] border border-[#3DAB51] rounded-[8px] py-[10px] flex items-center justify-center gap-[8px] hover:bg-[#C8E6C9] transition-colors active:scale-95"
                    >
                      <Phone className="size-[18px] text-[#3DAB51]" />
                      <span className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#3DAB51]">
                        Call
                      </span>
                    </button>

                    <button 
                      onClick={() => handleDirections(hospital)}
                      className="bg-[#E3F2FD] border border-[#1F75BE] rounded-[8px] py-[10px] flex items-center justify-center gap-[8px] hover:bg-[#BBDEFB] transition-colors active:scale-95"
                    >
                      <Navigation className="size-[18px] text-[#1F75BE]" />
                      <span className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#1F75BE]">
                        Direction
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Current Location Confirmation Screen
  if (step === 'current-location') {
    return (
      <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-b from-[#E3F2FD] to-white px-[16px] pt-[20px] pb-[24px]">
          <div className="flex items-center justify-center mb-[8px] relative">
            <button 
              className="absolute left-0 flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
              onClick={() => setStep('initial')}
            >
              <ArrowLeft className="size-[20px] text-[#1F75BE]" />
            </button>
            <h1 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#1F75BE]">
              Confirm Location
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-[20px] py-[24px]">
          <div className="flex-1">
            {/* Location Detected Card */}
            <div className="bg-[#E3F2FD] rounded-[16px] p-[20px] mb-[24px]">
              <div className="flex items-center gap-[12px] mb-[16px]">
                <div className="bg-[#1F75BE] rounded-full p-[12px]">
                  <MapPin className="size-[24px] text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[4px]">
                    Current Location Detected
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                    {selectedLocation?.address}
                  </p>
                </div>
              </div>
              
              {/* Fake Map */}
              <FakeMapComponent 
                pickupLocation="Your Location"
                destinationLocation="Rush Hospital"
                showRoute={true}
                height="240px"
              />
            </div>

            {/* Destination Info */}
            <div className="bg-[#F8F8F8] rounded-[12px] p-[16px]">
              <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#606060] mb-[8px]">
                Destination
              </p>
              <div className="flex items-center gap-[12px]">
                <Navigation className="size-[20px] text-[#3DAB51]" />
                <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314]">
                  {nearbyHospital.name} - {nearbyHospital.location}
                </p>
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirmLocation}
            className="w-full bg-[#1F75BE] rounded-[12px] py-[16px] hover:bg-[#1A5F9A] transition-colors active:scale-98 shadow-lg"
          >
            <span className="font-['Roboto:SemiBold',sans-serif] text-[18px] text-white">
              Confirm Location
            </span>
          </button>
        </div>
      </div>
    );
  }

  // Add Location Screen
  if (step === 'add-location') {
    return (
      <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-b from-[#E3F2FD] to-white px-[16px] pt-[20px] pb-[24px]">
          <div className="flex items-center justify-center mb-[8px] relative">
            <button 
              className="absolute left-0 flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
              onClick={() => setStep('initial')}
            >
              <ArrowLeft className="size-[20px] text-[#1F75BE]" />
            </button>
            <h1 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#1F75BE]">
              Select Location
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-[20px] py-[24px]">
          {/* Saved Locations */}
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#121314] mb-[16px]">
            Saved Locations
          </h2>

          <div className="space-y-[12px] mb-[24px]">
            {savedLocations.map((location) => (
              <button
                key={location.id}
                onClick={() => handleSelectSavedLocation(location)}
                className="w-full bg-white border-2 border-[#E0E0E0] rounded-[12px] p-[16px] hover:border-[#1F75BE] hover:bg-[#F0F8FF] transition-all active:scale-98 text-left"
              >
                <div className="flex items-start gap-[12px]">
                  <div className="bg-[#F5F5F5] rounded-full p-[10px] mt-[2px]">
                    <Home className="size-[24px] text-[#606060]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[4px]">
                      {location.type}
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060] leading-[1.4]">
                      {location.address}
                    </p>
                  </div>
                  <Check className="size-[20px] text-transparent group-hover:text-[#1F75BE]" />
                </div>
              </button>
            ))}
          </div>

          {/* Add New Location Form */}
          {!showAddLocationForm ? (
            <button
              onClick={() => setShowAddLocationForm(true)}
              className="w-full bg-[#1F75BE] rounded-[12px] py-[14px] flex items-center justify-center gap-[8px] hover:bg-[#1A5F9A] transition-colors active:scale-98"
            >
              <Plus className="size-[20px] text-white" />
              <span className="font-['Roboto:SemiBold',sans-serif] text-[16px] text-white">
                Add New Location
              </span>
            </button>
          ) : (
            <div className="bg-[#F8F8F8] rounded-[16px] p-[20px]">
              <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[16px]">
                New Location Details
              </h3>

              <div className="space-y-[16px]">
                <div>
                  <label className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#606060] mb-[8px] block">
                    Location Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Office, Friend's House"
                    value={newLocationType}
                    onChange={(e) => setNewLocationType(e.target.value)}
                    className="w-full bg-white border-2 border-[#E0E0E0] rounded-[8px] px-[16px] py-[12px] font-['Roboto:Regular',sans-serif] text-[16px] text-[#121314] focus:border-[#1F75BE] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#606060] mb-[8px] block">
                    Full Address
                  </label>
                  <textarea
                    placeholder="Enter complete address"
                    value={newLocationAddress}
                    onChange={(e) => setNewLocationAddress(e.target.value)}
                    rows={3}
                    className="w-full bg-white border-2 border-[#E0E0E0] rounded-[8px] px-[16px] py-[12px] font-['Roboto:Regular',sans-serif] text-[16px] text-[#121314] focus:border-[#1F75BE] focus:outline-none resize-none"
                  />
                </div>

                <div className="flex gap-[12px]">
                  <button
                    onClick={() => {
                      setShowAddLocationForm(false);
                      setNewLocationType("");
                      setNewLocationAddress("");
                    }}
                    className="flex-1 bg-white border-2 border-[#E0E0E0] rounded-[8px] py-[12px] font-['Roboto:SemiBold',sans-serif] text-[16px] text-[#606060] hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveNewLocation}
                    disabled={!newLocationType || !newLocationAddress}
                    className="flex-1 bg-[#1F75BE] rounded-[8px] py-[12px] font-['Roboto:SemiBold',sans-serif] text-[16px] text-white hover:bg-[#1A5F9A] transition-colors disabled:bg-[#B0BEC5] disabled:cursor-not-allowed"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Ready to Confirm Screen
  if (step === 'ready-to-confirm') {
    return (
      <div className="bg-white h-screen w-screen overflow-hidden max-w-[393px] mx-auto flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-b from-[#E3F2FD] to-white px-[16px] pt-[20px] pb-[24px]">
          <div className="flex items-center justify-center mb-[8px] relative">
            <button 
              className="absolute left-0 flex items-center justify-center size-[40px] cursor-pointer hover:bg-[#1F75BE]/10 rounded-full transition-all active:scale-95 border border-gray-200 hover:border-[#1F75BE] bg-white"
              onClick={() => setStep('initial')}
            >
              <ArrowLeft className="size-[20px] text-[#1F75BE]" />
            </button>
            <h1 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#1F75BE]">
              Confirm Booking
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-[20px] py-[24px]">
          <div className="flex-1 space-y-[20px]">
            {/* Route Map Preview */}
            <div className="mb-[20px]">
              <FakeMapComponent 
                pickupLocation={selectedLocation?.type || "Pickup"}
                destinationLocation="Rush Hospital"
                showRoute={true}
                height="180px"
              />
            </div>

            {/* Selected Location */}
            <div className="bg-[#E3F2FD] rounded-[16px] p-[20px]">
              <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#606060] mb-[12px]">
                Pickup Location
              </p>
              <div className="flex items-start gap-[12px]">
                <MapPin className="size-[24px] text-[#1F75BE] mt-[2px]" />
                <div>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[4px]">
                    {selectedLocation?.type}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                    {selectedLocation?.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Hospital Info */}
            <div className="bg-[#F8F8F8] rounded-[16px] p-[20px]">
              <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#606060] mb-[12px]">
                Destination Hospital
              </p>
              <div className="flex items-start gap-[12px] mb-[16px]">
                <Navigation className="size-[24px] text-[#3DAB51] mt-[2px]" />
                <div>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#121314] mb-[4px]">
                    {nearbyHospital.name}
                  </p>
                  <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                    {nearbyHospital.location} • {nearbyHospital.distance}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[12px] bg-white rounded-[8px] p-[12px]">
                <Calendar className="size-[20px] text-[#FFB60B]" />
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#606060]">
                  Estimated arrival: <span className="font-['Roboto:SemiBold',sans-serif] text-[#121314]">30 minutes</span>
                </p>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-[#FFF9E6] border-l-4 border-[#FFB60B] rounded-[12px] p-[16px]">
              <p className="font-['Roboto:SemiBold',sans-serif] text-[14px] text-[#121314] mb-[4px]">
                Important Information
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#606060] leading-[1.5]">
                Emergency contact will be notified. The ambulance team will contact you shortly after confirmation.
              </p>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirmBooking}
            className="w-full bg-[#1F75BE] rounded-[12px] py-[16px] hover:bg-[#1A5F9A] transition-colors active:scale-98 shadow-lg"
          >
            <span className="font-['Roboto:SemiBold',sans-serif] text-[18px] text-white">
              Confirm Booking
            </span>
          </button>
        </div>

        {/* Bottom Navigation */}
        <BottomNavBar />
      </div>
    );
  }

  return (
    <>
      {showCallModal && selectedHospital && (
        <HospitalCallModal
          isOpen={showCallModal}
          onClose={() => setShowCallModal(false)}
          hospitalName={selectedHospital.name}
          hospitalPhone={selectedHospital.phone}
        />
      )}
    </>
  );
}
