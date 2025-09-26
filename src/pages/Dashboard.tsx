import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Search, 
  Filter,
  TrendingUp,
  Clock,
  Users,
  FileText,
  Database,
  FolderOpen,
  Bell,
  Calendar,
  Award
} from "lucide-react";

// Sample data - in a real app this would come from an API
const recentActivity = [
  { id: 1, type: "collaboration", message: "Dr. Smith invited you to collaborate on 'AI in Healthcare'", time: "2 hours ago" },
  { id: 2, type: "comment", message: "New comment on your paper 'Machine Learning Applications'", time: "4 hours ago" },
  { id: 3, type: "milestone", message: "Project 'Climate Data Analysis' reached 75% completion", time: "1 day ago" },
];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("overview");

  const stats = [
    { label: "Active Projects", value: "12", icon: FolderOpen, change: "+2 this month" },
    { label: "Published Papers", value: "8", icon: FileText, change: "+1 this week" },
    { label: "Collaborations", value: "24", icon: Users, change: "+5 this month" },
    { label: "Citations", value: "156", icon: Award, change: "+12 this week" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation isAuthenticated />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Dr. Johnson</h1>
              <p className="text-muted-foreground">Here's what's happening with your research today.</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="bg-gradient-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="papers">Papers</TabsTrigger>
                <TabsTrigger value="datasets">Datasets</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm font-medium">New Paper: Machine Learning Applications</p>
                        <p className="text-xs text-muted-foreground mt-1">Published by Dr. Sarah Chen • 2 days ago</p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm font-medium">Dataset Update: Climate Change Impact</p>
                        <p className="text-xs text-muted-foreground mt-1">Updated by Dr. Emily Watson • 1 week ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">My Projects</h2>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-card hover:shadow-card transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <FolderOpen className="h-5 w-5 text-primary" />
                        <Badge variant="outline" className="text-xs">project</Badge>
                        <Badge className="text-xs bg-accent text-accent-foreground">active</Badge>
                      </div>
                      <CardTitle className="text-base">AI-Powered Drug Discovery Platform</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Collaborative project developing machine learning models to accelerate pharmaceutical research.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="text-xs">AI</Badge>
                        <Badge variant="secondary" className="text-xs">pharmaceuticals</Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          8 collaborators
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          Jan 8, 2024
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="papers" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">My Papers</h2>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Upload Paper
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-card hover:shadow-card transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <Badge variant="outline" className="text-xs">paper</Badge>
                        <Badge className="text-xs bg-primary text-primary-foreground">completed</Badge>
                      </div>
                      <CardTitle className="text-base">Machine Learning Applications in Healthcare</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        A comprehensive study examining the effectiveness of neural networks in medical image analysis.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="text-xs">machine learning</Badge>
                        <Badge variant="secondary" className="text-xs">healthcare</Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>1847 views • 234 downloads</span>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          Jan 15, 2024
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="datasets" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">My Datasets</h2>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Upload Dataset
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-card hover:shadow-card transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Database className="h-5 w-5 text-primary" />
                        <Badge variant="outline" className="text-xs">dataset</Badge>
                      </div>
                      <CardTitle className="text-base">Climate Change Impact Dataset</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Global temperature records from 1880-2024, processed and cleaned for research applications.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="text-xs">climate change</Badge>
                        <Badge variant="secondary" className="text-xs">temperature</Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>956 views • 145 downloads</span>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          Feb 10, 2024
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Collaboration Requests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Pending Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium">Dr. Smith</p>
                    <p className="text-xs text-muted-foreground">Wants to collaborate on AI project</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button size="sm" className="h-7 text-xs">Accept</Button>
                      <Button variant="outline" size="sm" className="h-7 text-xs">Decline</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Paper views</span>
                  <span className="text-sm font-medium">847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">New followers</span>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Collaborations</span>
                  <span className="text-sm font-medium">3</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}