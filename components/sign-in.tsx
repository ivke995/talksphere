import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SignIn = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Card className="w-fit">
        <CardContent className="p-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Welcome back!</span>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 rounded-full"
                  }
                }}
              />
            </div>
          </SignedIn>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;