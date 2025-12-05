import { useNavigate } from "react-router";
import { LogOut, User, Settings, Home, Bell } from "lucide-react";
import { toast } from "sonner@2.0.3";
import BottomNavBar from "./BottomNavBar";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-12 bg-[#87C0D9] rounded-full flex items-center justify-center">
              <span className="text-white">A+</span>
            </div>
            <h1 className="text-2xl">Aasna</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LogOut className="size-5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-[120px]">
        <div className="mb-8">
          <h2 className="text-3xl mb-2">Welcome back!</h2>
          <p className="text-gray-600">You have successfully signed in to your account.</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 bg-[#48a2e8] rounded-full flex items-center justify-center">
                <User className="size-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl">Profile</h3>
                <p className="text-gray-600">View and edit your profile</p>
              </div>
            </div>
            <button className="w-full bg-[#48a2e8] text-white py-2 rounded-lg hover:bg-[#3a91d6] transition-colors">
              View Profile
            </button>
          </div>

          {/* Settings Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 bg-[#87C0D9] rounded-full flex items-center justify-center">
                <Settings className="size-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl">Settings</h3>
                <p className="text-gray-600">Manage your preferences</p>
              </div>
            </div>
            <button className="w-full bg-[#87C0D9] text-white py-2 rounded-lg hover:bg-[#6fa0c5] transition-colors">
              Open Settings
            </button>
          </div>

          {/* Notifications Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 bg-[#2472ee] rounded-full flex items-center justify-center">
                <Bell className="size-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl">Notifications</h3>
                <p className="text-gray-600">Check your updates</p>
              </div>
            </div>
            <button className="w-full bg-[#2472ee] text-white py-2 rounded-lg hover:bg-[#1d5ec9] transition-colors">
              View All
            </button>
          </div>
        </div>

        {/* Activity Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="size-10 bg-[#48a2e8] rounded-full flex items-center justify-center">
                <Home className="size-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Signed in successfully</p>
                <p className="text-gray-600">Just now</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="size-10 bg-[#87C0D9] rounded-full flex items-center justify-center">
                <User className="size-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Account created</p>
                <p className="text-gray-600">Today</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
