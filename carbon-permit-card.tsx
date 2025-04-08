import { Heart, Share2 } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CarbonPermitCard() {
  return (
    <Card className="max-w-md overflow-hidden border border-gray-200 rounded-lg mt-24 mx-auto mb-24">
      {/* Card Content */}
      <div className="relative">
        <div className="relative">
          <Image
            src="https://c4.wallpaperflare.com/wallpaper/733/369/74/dassault-rafale-military-aircraft-aircraft-military-wallpaper-preview.jpg"
            width={400}
            height={200}
            alt="Airplane on runway"
            className="w-full object-cover opacity-60" // Applying opacity effect here (adjust opacity as needed)
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-[#27262B]">
          <Badge className="bg-[#27262B] text-white hover:bg-[#27262B] px-3 py-1 rounded flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-text"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" x2="8" y1="13" y2="13" />
              <line x1="16" x2="8" y1="17" y2="17" />
              <line x1="10" x2="8" y1="9" y2="9" />
            </svg>
            <span className="font-medium">10,000 Permits</span>
            <span className="text-xs ml-1 opacity-80">(1,800 tCO2e)</span>
          </Badge>
          <Badge className="bg-[#77193B] text-white hover:bg-[#77193B] px-3 py-2 uppercase rounded flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-factory"
            >
              <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            </svg>
            Industry
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-0 pt-3 px-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-sky-500">super_admin</p>
            <h3 className="text-xl font-bold mt-1">Flare Gas Burning</h3>
          </div>
          <div className="flex gap-1">
            {/* Heart Button with Square Border */}
            <Button variant="ghost" size="icon" className="h-10 w-10 border-2 border-gray-400 rounded-sm flex items-center justify-center">
              <Heart className="h-5 w-5 text-gray-500" />
            </Button>
            {/* Share Button with Square Border */}
            <Button variant="ghost" size="icon" className="h-10 w-10 border-2 border-gray-400 rounded-sm flex items-center justify-center">
              <Share2 className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <Badge variant="outline" className="rounded-full text-xs uppercase px-2 py-0 border-green-500 text-green-600">
            Open
          </Badge>
        </div>
        <div className="mt-2 text-xs text-gray-500 truncate"># IN-59e54054-1655-415f-bd7b-e4cd50a3456</div>
      </CardHeader>

      <CardContent className="pt-2 px-4">
        <div className="border-t mt-2" />
      </CardContent>

      <CardFooter className="px-4 pt-0 pb-3">
        <div className="grid grid-cols-2 w-full gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase">TIME LEFT</p>
            <p className="font-bold text-lg">11M 2w 0d</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">MIN. WINNING BID</p>
            <div className="flex items-baseline">
              <span className="text-sm mr-1 bg-gray-200 px-1 rounded">QAR</span>
              <span className="font-bold text-lg">100.00</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
