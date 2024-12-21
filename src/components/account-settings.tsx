import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, CreditCard, Lock, User } from 'lucide-react'

export default function AccountSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button variant="outline" className="w-full justify-start">
          <User className="mr-2 h-4 w-4" />
          Personal Information
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Lock className="mr-2 h-4 w-4" />
          Password & Security
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <CreditCard className="mr-2 h-4 w-4" />
          Payment Methods
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Bell className="mr-2 h-4 w-4" />
          Notifications
        </Button>
      </CardContent>
    </Card>
  )
}

