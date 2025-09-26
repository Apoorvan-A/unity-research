import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResearchCard, ResearchItem } from "@/components/research/research-card";
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

const sampleResearchItems: ResearchItem[] = [
  {
    id: "1",
    title: "Machine Learning Applications in Healthcare Diagnostics",
    description: "A comprehensive study examining the effectiveness of neural networks in medical image analysis and patient diagnosis prediction.",
    type: "paper",
    authors: [
      { name: "Dr. Sarah Chen", avatar: "", affiliation: "Stanford University" },
      { name: "Prof. Michael Rodriguez", avatar: "", affiliation: "MIT" }
    ],
    tags: ["machine learning", "healthcare", "diagnostics", "neural networks"],
    createdAt: "2024-01-15",
    status: "completed",
    metrics: { views: 1847, downloads: 234, citations: 12, likes: 89, comments: 15 }
  },
  {
    id: "2", 
    title: "Climate Change Impact Dataset - Global Temperature Records 1880-2024",
    description: "Comprehensive temperature measurement data from weather stations worldwide, processed and cleaned for research applications.",
    type: "dataset",
    authors: [
      { name: "Dr. Emily Watson", avatar: "", affiliation: "NASA" },
      { name: "Dr. James Lee", avatar: "", affiliation: "NOAA" }
    ],
    tags: ["climate change", "temperature", "global warming", "environmental data"],
    createdAt: "2024-02-10", 
    metrics: { views: 956, downloads: 145, likes: 67, comments: 8 }
  },
  {
    id: "3",
    title: "AI-Powered Drug Discovery Platform",
    description: "Collaborative project developing machine learning models to accelerate pharmaceutical research and reduce drug development costs.",
    type: "project",
    authors: [
      { name: "Dr. Alex Thompson", avatar: "", affiliation: "Harvard Medical School" },
      { name: "Prof. Lisa Chang", avatar: "", affiliation: "UC Berkeley" }
    ],
    tags: ["artificial intelligence", "drug discovery", "pharmaceuticals", "bioinformatics"],
    createdAt: "2024-01-08",
    status: "active",
    collaborators: 8,
    metrics: { views: 623, likes: 45, comments: 23 }
  }
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
                      {sampleResearchItems.slice(0, 2).map((item) => (
                        <ResearchCard key={item.id} item={item} compact showActions={false} />
                      ))}
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
                  {sampleResearchItems
                    .filter(item => item.type === "project")
                    .map((item) => (
                      <ResearchCard key={item.id} item={item} />
                    ))}
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
                  {sampleResearchItems
                    .filter(item => item.type === "paper")
                    .map((item) => (
                      <ResearchCard key={item.id} item={item} />
                    ))}
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
                  {sampleResearchItems
                    .filter(item => item.type === "dataset")
                    .map((item) => (
                      <ResearchCard key={item.id} item={item} />
                    ))}
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