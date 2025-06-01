import BannerLogo from "../common/logo/BannerLogo";
import AccountContainer from "../containers/AccountContainer";

export default function Header() {
    return (
  <header className="bg-gray-900 text-white shadow-md">
    <div className="container mx-auto flex items-center justify-between py-3 px-4 space-x-6">
      
    {/* Logo Banner */}
    <div className="flex items-center space-x-3">
        <BannerLogo className="w-48 h-auto" />
      </div>

    {/* Slogan */}
    <div className="flex-1 ">
        <h1 className="text-xl font-semibold">Flow Better. Work Smarter</h1>
      </div>

     {/* Account */}
      <div className="flex items-center space-x-3">
        <AccountContainer />
      </div>
    </div>
  </header>
    );
}