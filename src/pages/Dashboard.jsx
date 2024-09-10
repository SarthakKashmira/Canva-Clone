import React,{useState} from 'react';
import { Search, Star, FileText, Layout, Presentation, Heart, Video, Printer, Globe, MoreHorizontal, X } from 'lucide-react';
import {Link} from "react-router-dom";
const Dashboard = () => {

    const [toggle,setToggle]=useState(false);

    const handleSidebar=()=>{
        setToggle(!toggle);
    }
  return (
    <div>
        <header className="flex items-center justify-between p-4 bg-white ">
        <div className="flex items-center space-x-4">
          <button className="p-2 lg:hidden" onClick={handleSidebar} >☰</button>
          <h1 className="text-2xl font-bold text-blue-400">Canva</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600">Design spotlight</a>
            <a href="#" className="text-gray-600">Business</a>
            <a href="#" className="text-gray-600">Education</a>
            <Link to="/plans"><a href="#" className="text-gray-600">Plans and pricing</a></Link>
            <a href="#" className="text-gray-600">Learn</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2"><Layout size={20} /></button>
          <button className="p-2"><Globe size={20} /></button>
          <button className="p-2">🔔</button>
          <Link to="/project"><button className="bg-purple-600 text-white px-4 py-2 rounded">Create a design</button></Link>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">S</div>
        </div>
      </header>
    
    <div className="flex flex-col min-h-screen bg-gray-100 lg:flex-row">
      {/* Header */}
      <div className="flex">
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white transform ${toggle ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 lg:relative lg:translate-x-0 lg:z-0`}>
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">SK</div>
              <div className="text-xs">
                <div>SARTHAK KASHMIRA'S ...</div>
                <div className="text-gray-500">Free • 8.2</div>
              </div>
            </div>
            <button onClick={() => setToggle(false)} className="text-gray-500 hover:text-gray-700 lg:hidden">
              <X size={24} />
            </button>
          </div>
          <Link to="/plans" className="mb-4 border border-gray-300 px-4 py-2 rounded text-sm flex items-center">
            <span className="mr-2">👑</span> Upgrade your plan
          </Link>
          <nav className="flex-1">
            <a href="#" className="block py-2 px-4 bg-purple-100 text-purple-700 rounded mb-1">Home</a>
            <a href="#" className="block py-2 px-4 text-gray-700 rounded mb-1">Magic Studio <span className="text-xs bg-purple-200 text-purple-700 px-1 rounded">New</span></a>
            <a href="#" className="block py-2 px-4 text-gray-700 rounded mb-1">Projects</a>
            <a href="#" className="block py-2 px-4 text-gray-700 rounded mb-1">Templates</a>
            <a href="#" className="block py-2 px-4 text-gray-700 rounded mb-1">Brand</a>
            <a href="#" className="block py-2 px-4 text-gray-700 rounded mb-1">Apps</a>
          </nav>
          <div className="mt-auto">
            <a href="#" className="block py-2 px-4 text-gray-700 rounded mb-1">Invite members</a>
            <a href="#" className="block py-2 px-4 text-gray-700 rounded">Trash</a>
          </div>
        </div>
      </aside>


      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-2">SK</div>
          <div>
            <h2 className="font-semibold">SARTHAK KASHMIRA'S ...</h2>
            <p className="text-sm text-gray-500">Free • 8.2</p>
          </div>
        </div>

        <Link to="/plans"><button className="mb-4 border border-gray-300 px-4 py-2 rounded flex items-center">
          <span className="mr-2">👑</span> Upgrade your plan
        </button>
        </Link>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-bold text-white mb-4">What will you design today?</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search your content and Canva's"
              className="w-full p-3 rounded-lg pl-10"
            />
            <Search className="absolute left-3 top-3 text-gray-400" />
          </div>
          <div className="flex justify-between mt-4">
            {[
              { icon: <Star />, label: "For you" },
              { icon: <FileText />, label: "Docs" },
              { icon: <Layout />, label: "Whiteboards" },
              { icon: <Presentation />, label: "Presentations" },
              { icon: <Heart />, label: "Social media" },
              { icon: <Video />, label: "Videos" },
              { icon: <Printer />, label: "Print products" },
              { icon: <Globe />, label: "Websites" },
              { icon: <MoreHorizontal />, label: "More" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-white">
                <div className="bg-white bg-opacity-20 p-2 rounded-full mb-1">
                  {item.icon}
                </div>
                <span className="text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Try something new</h3>
        <div className="grid grid-cols-6 gap-4">
          {["Infographic", "Photo Collage (Portrait)", "Desktop Wallpaper", "Graph (Unlimited)", "Book Cover", "Mind Map (Unlimite"].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <div className="bg-gray-200 h-32 mb-2 rounded"></div>
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </main>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;