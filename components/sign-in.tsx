"use client"
import { SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SignIn = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="fixed top-4 right-4 z-50">
      {!isSignedIn && ( // Only render when user is NOT signed in
        <Card className="w-fit">
          <CardContent className="p-4">
            <SignInButton mode="modal">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SignIn;
