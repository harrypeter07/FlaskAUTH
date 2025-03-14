import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut } from "lucide-react";

export default function HomePage() {
  const { user, logoutMutation } = useAuth();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Welcome, {user?.username}!</CardTitle>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => logoutMutation.mutate()}
              disabled={logoutMutation.isPending}
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              You are now logged in to your secure dashboard.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
