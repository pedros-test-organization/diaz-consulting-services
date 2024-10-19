import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="font-bold">Company Name</span>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Services</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
          </div>
          <div className="flex items-center space-x-2">
            <Input type="email" placeholder="Enter your email" className="w-auto h-8 text-sm bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
            <Button type="submit" className="h-8 text-sm bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
          </div>
        </div>
        <div className="text-xs text-center md:text-right mt-4 md:mt-2">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}