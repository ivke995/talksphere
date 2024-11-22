import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Video, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold text-purple-900 mb-6">
            Welcome to Talksphere
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Your all-in-one platform for seamless communication and collaboration
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <MessageCircle className="w-12 h-12 text-purple-600" />
                  <h3 className="font-semibold text-xl">Chat</h3>
                  <p className="text-gray-600">Connect instantly with real-time messaging dude</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Video className="w-12 h-12 text-purple-600" />
                  <h3 className="font-semibold text-xl">Conference</h3>
                  <p className="text-gray-600">Host seamless video meetings with crystal clear quality</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Users className="w-12 h-12 text-purple-600" />
                  <h3 className="font-semibold text-xl">Collaborate</h3>
                  <p className="text-gray-600">Work together with your team in real-time</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 h-auto">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;